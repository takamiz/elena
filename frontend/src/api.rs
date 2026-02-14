use gloo_net::http::Request;
use shared::MarketData;
// use leptos::*;

pub async fn fetch_market_data(force: bool) -> Option<MarketData> {
    // In local dev, we might need to proxy or change URL. 
    // For now assuming relative path /api/market-data works via proxy or production.
    let url = if force { "/api/market-data?refresh=true" } else { "/api/market-data" };
    let resp = Request::get(url).send().await.ok()?;
    
    if !resp.ok() {
        return None;
    }
    
    resp.json::<MarketData>().await.ok()
}

pub async fn fetch_asset_history(id: String) -> Option<shared::AssetHistory> {
    let resp = Request::get(&format!("/api/history/{}", id)).send().await.ok()?;
    if !resp.ok() {
        return None;
    }
    resp.json::<shared::AssetHistory>().await.ok()
}

pub async fn fetch_all_history() -> Option<Vec<shared::AssetHistory>> {
    let resp = Request::get("/api/history-all").send().await.ok()?;
    if !resp.ok() {
        return None;
    }
    resp.json::<Vec<shared::AssetHistory>>().await.ok()
}
