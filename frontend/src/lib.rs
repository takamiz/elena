use leptos::*;
// use shared::{MarketData, AssetIndex};

mod api;
mod components;
mod pages;
// use components::card::AssetCard;

use leptos_router::*;
use pages::dashboard::Dashboard;
use pages::detail::AssetDetail;
use pages::correlation::CorrelationMatrix;

#[component]
pub fn App() -> impl IntoView {
    view! {
        <Router>
            <main>
                <Routes>
                    <Route path="" view=|| view! { <Dashboard/> }/>
                    <Route path="/asset/:id" view=|| view! { <AssetDetail/> }/>
                    <Route path="/correlation" view=|| view! { <CorrelationMatrix/> }/>
                </Routes>
            </main>
        </Router>
    }
}

use wasm_bindgen::prelude::wasm_bindgen;

#[wasm_bindgen(start)]
pub fn main() {
    mount_to_body(|| view! { <App/> })
}
