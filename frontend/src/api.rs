use gloo_net::http::Request;
use shared::MarketData;
// use leptos::*;

const API_BASE: &str = "https://elena-worker.takamiz.workers.dev";

pub async fn fetch_market_data(force: bool) -> Option<MarketData> {
    let url = if force { 
        format!("{}/api/market-data?refresh=true", API_BASE)
    } else { 
        format!("{}/api/market-data", API_BASE)
    };
    let resp = Request::get(&url).send().await.ok()?;
    
    if !resp.ok() {
        return None;
    }
    
    resp.json::<MarketData>().await.ok()
}

pub async fn fetch_asset_history(id: String) -> Option<shared::AssetHistory> {
    let resp = Request::get(&format!("{}/api/history/{}", API_BASE, id)).send().await.ok()?;
    if !resp.ok() {
        return None;
    }
    resp.json::<shared::AssetHistory>().await.ok()
}

pub async fn fetch_all_history() -> Option<Vec<shared::AssetHistory>> {
    let resp = Request::get(&format!("{}/api/history-all", API_BASE)).send().await.ok()?;
    if !resp.ok() {
        return None;
    }
    resp.json::<Vec<shared::AssetHistory>>().await.ok()
}
