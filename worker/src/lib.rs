use worker::*;
use futures::future::join_all;
// Actually worker crate implies we might need explicit dependency in Cargo.toml if 'futures' is not re-exported.
// worker 0.0.18+ re-exports some, but better to check. 
// Let's assume we need to add 'futures' to Cargo.toml.
use shared::{MarketData, AssetIndex, AssetKind, AssetHistory};
// use serde_json::to_string;

use chrono::Utc;



async fn fetch_single_index(kind: AssetKind) -> Option<AssetIndex> {
    let (symbol, name, class, region) = kind.meta();
    // Unofficial Yahoo Finance API
    let url = format!("https://query1.finance.yahoo.com/v8/finance/chart/{}?interval=1d&range=1d", symbol);

    // Create request with User-Agent
    let mut headers = Headers::new();
    headers.set("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36").ok();
    
    let init = RequestInit {
        method: Method::Get,
        headers,
        ..Default::default()
    };

    let request = match Request::new_with_init(&url, &init) {
        Ok(req) => req,
        Err(e) => {
            console_log!("Failed to create request for {}: {:?}", symbol, e);
            return None;
        }
    };

    let mut response = match Fetch::Request(request).send().await {
        Ok(resp) => resp,
        Err(e) => {
            console_log!("Failed to fetch {}: {:?}", symbol, e);
            return None;
        }
    };
    
    if response.status_code() != 200 {
        console_log!("Failed to fetch {}: status {}", symbol, response.status_code());
        return None;
    }

    let json_text = match response.text().await {
        Ok(text) => text,
        Err(e) => {
            console_log!("Failed to read text for {}: {:?}", symbol, e);
            return None;
        }
    };

    let json: serde_json::Value = match serde_json::from_str(&json_text) {
        Ok(v) => v,
        Err(e) => {
            console_log!("Failed to parse JSON for {}: {:?}", symbol, e);
            return None;
        }
    };

    // Parse JSON manually: chart.result[0].meta.regularMarketPrice
    let result = match json.get("chart").and_then(|c| c.get("result")).and_then(|r| r.get(0)) {
        Some(res) => res,
        None => {
            console_log!("Invalid JSON structure for {}: {:?}", symbol, json);
            return None;
        }
    };

    let meta = result.get("meta")?;
    let regular_price = meta.get("regularMarketPrice").and_then(|v| v.as_f64());
    let previous_close = meta.get("chartPreviousClose").and_then(|v| v.as_f64());

    let (regular_price, previous_close) = match (regular_price, previous_close) {
        (Some(p), Some(c)) => (p, c),
        _ => {
            console_log!("Missing price data for {}: {:?}", symbol, meta);
            return None;
        }
    };

    let change_price = regular_price - previous_close;
    let change_rate = (change_price / previous_close) * 100.0;

    let market_state = meta.get("marketState").and_then(|v| v.as_str()).unwrap_or("UNKNOWN");
    let is_market_open = market_state == "REGULAR";

    Some(AssetIndex {
        id: format!("{:?}", kind),
        kind,
        name: name.to_string(),
        symbol: symbol.to_string(),
        class,
        region: region.to_string(),
        current_price: regular_price,
        change_rate,
        change_price, 
        is_market_open,
        last_updated: Utc::now().to_rfc3339(),
    })
}

// End of fetch_single_index


async fn fetch_history(kind: AssetKind) -> Option<AssetHistory> {
    let (symbol, name, _, _) = kind.meta();
    // Fetch 1 month of data
    let url = format!("https://query1.finance.yahoo.com/v8/finance/chart/{}?interval=1d&range=1mo", symbol);

    let mut headers = Headers::new();
    headers.set("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36").ok();
    
    let init = RequestInit {
        method: Method::Get,
        headers,
        ..Default::default()
    };

    let request = Request::new_with_init(&url, &init).ok()?;
    let mut response = Fetch::Request(request).send().await.ok()?;

    if response.status_code() != 200 {
        console_log!("Failed to fetch history for {}: status {}", symbol, response.status_code());
        return None;
    }

    let json_text = response.text().await.ok()?;
    let json: serde_json::Value = serde_json::from_str(&json_text).ok()?;

    let result = json.get("chart")?.get("result")?.get(0)?;
    let timestamp = result.get("timestamp")?.as_array()?;
    let quote = result.get("indicators")?.get("quote")?.get(0)?;
    let close = quote.get("close")?.as_array()?;

    let mut data = Vec::new();

    // timestamp and close arrays should be same length
    for (i, ts) in timestamp.iter().enumerate() {
        if let Some(price) = close.get(i).and_then(|v| v.as_f64()) {
            if let Some(ts_val) = ts.as_i64() {
                // Convert timestamp to YYYY-MM-DD
                // Worker's chrono might need features or just basic formatting
                // Using simplified approach or chrono
                let dt = chrono::DateTime::from_timestamp(ts_val, 0)?;
                let date_str = dt.format("%Y-%m-%d").to_string();
                
                data.push(shared::HistoryItem {
                    date: date_str,
                    close: price,
                });
            }
        }
    }

    Some(AssetHistory {
        symbol: symbol.to_string(),
        name: name.to_string(),
        data,
    })
}

#[event(scheduled)]
pub async fn scheduled(_event: ScheduledEvent, _env: Env, _ctx: worker::ScheduleContext) {
    // 将来的にここに定期的なキャッシュ更新ロジックを実装できます
}

#[event(fetch)]
pub async fn main(req: Request, env: Env, _ctx: worker::Context) -> Result<Response> {
    let router = Router::new();

    router
        .get("/", |_, _| Response::ok("Elena API Worker is running!"))
        .get_async("/api/market-data", |req, ctx| async move {
            let kv = ctx.kv("MARKET_DATA")?;
            let url = req.url()?;
            let force_refresh = url.query_pairs().any(|(k, v)| k == "refresh" && v == "true");

            if !force_refresh {
                if let Ok(Some(val)) = kv.get("latest").text().await {
                    // Check timestamp to see if it's stale (e.g. > 15 mins)
                    // For now, just return cached data if exists
                    // In real app, we parse JSON and check `last_fetched`
                    return Response::from_json(&serde_json::from_str::<MarketData>(&val)?);
                }
            }

            let targets = AssetKind::all();

            // Fetch in parallel
            let futures = targets.into_iter().map(|kind| fetch_single_index(*kind));
            let results = join_all(futures).await;

            let mut indices = Vec::new();
            for res in results {
                if let Some(data) = res {
                    indices.push(data);
                }
            }

            let data = MarketData {
                indices,
                last_fetched: Utc::now().to_rfc3339(),
            };

            // Cache for 15 minutes (900 seconds)
            // But we use Cron to update typically. 
            // For manual fetch, let's just put it.
            let json = serde_json::to_string(&data)?;
            kv.put("latest", &json)?.execute().await?;

            Response::from_json(&data)
        })
        .get_async("/api/history-all", |_, _| async move {
            let targets = AssetKind::all();
            let futures = targets.into_iter().map(|kind| fetch_history(*kind));
            let results = join_all(futures).await;

            let mut histories = Vec::new();
            for res in results {
                if let Some(h) = res {
                    histories.push(h);
                }
            }

            Response::from_json(&histories)
        })
        .get_async("/api/history/:kind", |_, ctx| async move {
            if let Some(kind_str) = ctx.param("kind") {
                // Find matching AssetKind
                // This is a bit inefficient, but simple loop is fine for small enum
                let mut target_kind = None;
                for &k in AssetKind::all() {
                    if format!("{:?}", k) == *kind_str {
                         target_kind = Some(k);
                         break;
                    }
                }

                if let Some(k) = target_kind {
                     if let Some(history) = fetch_history(k).await {
                         return Response::from_json(&history);
                     }
                }
            }
            Response::error("Not Found or Failed", 404)
        })
        .run(req, env)
        .await?;

    let cors = Cors::default()
        .with_origins(vec!["*"])
        .with_methods(vec![Method::Get, Method::Post, Method::Options]);

    response.with_cors(&cors)
}
