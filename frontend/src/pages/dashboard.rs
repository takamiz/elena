use leptos::*;
use leptos_router::*;
use crate::api;
use crate::components::card::AssetCard;

#[component]
pub fn Dashboard() -> impl IntoView {
    // Signal to trigger refresh
    // We use a counter or just a trigger. 
    // But create_resource needs to depend on it to re-run.
    let (refresh_trigger, set_refresh_trigger) = create_signal(0);

    // Resource to fetch data
    // When trigger changes, this runs.
    let market_data = create_resource(
        move || refresh_trigger.get(), 
        move |counter| async move {
            // First load (counter 0) -> force=false
            // Subsequent (counter > 0) -> force=true (clicked refresh)
            api::fetch_market_data(counter > 0).await
        }
    );

    view! {
        <div class="p-4 bg-slate-900 min-h-screen text-white font-sans">
            <header class="flex justify-between items-center mb-8">
                <div>
                    <h1 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                        "Elena"
                    </h1>
                    <p class="text-slate-400 text-sm">"グローバル・アセットアロケーション"</p>
                </div>
                <div class="flex gap-4">
                    <A 
                        href="/correlation"
                        class="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-medium transition-colors border border-slate-700 text-slate-300 flex items-center gap-2"
                    >
                        "相関行列"
                    </A>
                    <button 
                        class="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-medium transition-colors border border-slate-700"
                        on:click=move |_| set_refresh_trigger.update(|n| *n += 1)
                    >
                        "更新"
                    </button>
                </div>
            </header>

            <div class="mt-8">
                <Suspense fallback=move || view! { <p class="text-center text-slate-500">"市場データを読み込み中..."</p> }>
                    {move || {
                        market_data.get().map(|data| {
                            match data {
                                Some(md) => {
                                    let classes = [
                                        shared::AssetClass::Stocks,
                                        shared::AssetClass::Bonds,
                                        shared::AssetClass::Currencies,
                                        shared::AssetClass::Commodities,
                                        shared::AssetClass::RealEstate,
                                        shared::AssetClass::Crypto,
                                        shared::AssetClass::Other,
                                    ];

                                    view! {
                                        <div class="space-y-12">
                                            {classes.into_iter().map(|class| {
                                                let filtered_indices: Vec<_> = md.indices.iter()
                                                    .filter(|idx| idx.class == class)
                                                    .cloned()
                                                    .collect();
                                                
                                                if filtered_indices.is_empty() {
                                                    return view! { <div></div> }.into_view();
                                                }

                                                let class_name = match class {
                                                    shared::AssetClass::Stocks => "株式",
                                                    shared::AssetClass::Bonds => "債券・金利",
                                                    shared::AssetClass::Currencies => "為替",
                                                    shared::AssetClass::Commodities => "コモディティ",
                                                    shared::AssetClass::RealEstate => "不動産 (REIT)",
                                                    shared::AssetClass::Crypto => "暗号資産",
                                                    shared::AssetClass::Other => "その他・指数",
                                                };

                                                view! {
                                                    <section>
                                                        <h2 class="text-xl font-bold mb-4 flex items-center gap-2">
                                                            <span class="w-1 h-6 bg-emerald-500 rounded-full"></span>
                                                            {class_name}
                                                        </h2>
                                                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                                            {filtered_indices.into_iter()
                                                                .map(|idx| view! { <AssetCard index=idx/> })
                                                                .collect_view()}
                                                        </div>
                                                    </section>
                                                }.into_view()
                                            }).collect_view()}
                                        </div>
                                    }.into_view()
                                },
                                None => view! { 
                                    <div class="text-center p-8 bg-slate-800/50 rounded-xl border border-rose-900/50">
                                        <p class="text-rose-400">"データの読み込みに失敗しました。APIが利用可能か確認してください。"</p>
                                        <p class="text-xs text-slate-500 mt-2">"Workerは実行中ですか？"</p>
                                    </div> 
                                }.into_view()
                            }
                        })
                    }}
                </Suspense>
            </div>
        </div>
    }
}
