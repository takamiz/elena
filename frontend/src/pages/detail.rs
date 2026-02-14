use leptos::*;
use leptos_router::*;
use crate::api;
use shared::AssetHistory;

#[component]
pub fn AssetDetail() -> impl IntoView {
    let params = use_params_map();
    let id = move || params.with(|params| params.get("id").cloned().unwrap_or_default());

    // Resolve AssetKind from ID string
    let asset_kind = create_memo(move |_| {
        let id_str = id();
        shared::AssetKind::all().iter().find(|&k| format!("{:?}", k) == id_str).cloned()
    });

    let history = create_resource(id, |id| async move {
        api::fetch_asset_history(id).await
    });

    view! {
        <div class="p-4 bg-slate-900 min-h-screen text-white font-sans">
            <div class="mb-6">
                 <A href="/" class="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-2 font-medium">
                    <span class="text-xl">"←"</span> "ダッシュボードに戻る"
                 </A>
            </div>

            <Suspense fallback=move || view! { <p class="text-center text-slate-500 animate-pulse">"履歴を読み込み中..."</p> }>
                {move || {
                    history.get().map(|data| {
                        match data {
                            Some(h) => {
                                let kind = asset_kind.get();
                                let (region, class) = if let Some(k) = kind {
                                    let (_, _, c, r) = k.meta();
                                    let c_name = match c {
                                        shared::AssetClass::Stocks => "株式",
                                        shared::AssetClass::Bonds => "債券",
                                        shared::AssetClass::Currencies => "為替",
                                        shared::AssetClass::Commodities => "コモディティ",
                                        shared::AssetClass::RealEstate => "不動産",
                                        shared::AssetClass::Crypto => "暗号資産",
                                        shared::AssetClass::Other => "その他",
                                    };
                                    (r, c_name.to_string())
                                } else {
                                    ("不明", "不明".to_string())
                                };

                                view! {
                                <div class="max-w-4xl mx-auto space-y-6">
                                    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-4">
                                        <div>
                                            <div class="flex items-center gap-3 text-sm text-slate-400 mb-1">
                                                <span class="px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700">{region}</span>
                                                <span class="px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700">{class}</span>
                                            </div>
                                            <h1 class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                                                {h.name.clone()}
                                            </h1>
                                            <p class="text-slate-400 text-lg font-mono mt-1">{h.symbol.clone()}</p>
                                        </div>
                                    </div>
                                    
                                    <div class="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 shadow-xl backdrop-blur-sm">
                                        <h2 class="text-xl font-semibold mb-6 flex items-center gap-2">
                                            <span class="w-1 h-6 bg-emerald-500 rounded-full"></span>
                                            "30日間のパフォーマンス"
                                        </h2>
                                        <div class="h-80 w-full">
                                            <SimpleChart history={h.clone()} />
                                        </div>
                                    </div>

                                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {
                                            let data = &h.data;
                                            if data.len() >= 2 {
                                                let current = data.last().unwrap().close;
                                                let periods = [
                                                    ("7日前", data.get(data.len().saturating_sub(7))),
                                                    ("14日前", data.get(data.len().saturating_sub(14))),
                                                    ("30日前", data.first().map(|d| d)),
                                                ];

                                                periods.into_iter().map(|(label, item)| {
                                                    if let Some(prev) = item {
                                                        let diff = current - prev.close;
                                                        let perf = (diff / prev.close) * 100.0;
                                                        let color = if perf >= 0.0 { "text-emerald-400" } else { "text-rose-400" };
                                                        view! {
                                                            <div class="bg-slate-800/30 p-4 rounded-xl border border-slate-700/50">
                                                                <p class="text-slate-500 text-xs font-medium uppercase tracking-wider">{label}</p>
                                                                <p class="text-xl font-bold mt-1">{format!("{:.2}", prev.close)}</p>
                                                                <p class={format!("text-sm font-semibold mt-1 {}", color)}>
                                                                    {if perf >= 0.0 { "+" } else { "" }}{format!("{:.2}%", perf)}
                                                                </p>
                                                            </div>
                                                        }.into_view()
                                                    } else {
                                                        view! { <div></div> }.into_view()
                                                    }
                                                }).collect_view()
                                            } else {
                                                view! { <p>"比較データが不足しています"</p> }.into_view()
                                            }
                                        }
                                    </div>
                                </div>
                            }.into_view()},
                            None => view! { 
                                <div class="text-center p-12 bg-slate-800/50 rounded-2xl border border-rose-900/50 max-w-lg mx-auto mt-12">
                                    <p class="text-rose-400 text-lg font-semibold mb-2">"履歴の読み込みに失敗しました"</p>
                                    <p class="text-slate-500">"この資産のデータが利用できないか、APIに接続できません。"</p>
                                </div> 
                            }.into_view()
                        }
                    })
                }}
            </Suspense>
        </div>
    }
}

#[component]
fn SimpleChart(history: AssetHistory) -> impl IntoView {
    let data = history.data;
    if data.is_empty() {
        return view! { <p>"No data available"</p> }.into_view();
    }

    // Determine Y-axis range
    let min_price = data.iter().map(|d| d.close).fold(f64::INFINITY, f64::min);
    let max_price = data.iter().map(|d| d.close).fold(f64::NEG_INFINITY, f64::max);
    
    // Add some padding to the range
    let range = max_price - min_price;
    let padding = range * 0.1;
    let visual_min = min_price - padding; 
    let visual_max = max_price + padding;
    let visual_range = visual_max - visual_min;

    // SVG coordinates
    let width = 800.0;
    let height = 300.0;

    // Generate path data for the line
    let points_str = data.iter().enumerate().map(|(i, d)| {
        let x = (i as f64 / (data.len() - 1) as f64) * width;
        let y = height - ((d.close - visual_min) / visual_range) * height;
        format!("{},{}", x, y)
    }).collect::<Vec<_>>().join(" ");

    // Generate path data for the area (gradient fill)
    let area_path = format!(
        "M0,{} L{} L{},{} L0,{} Z", 
        height, 
        points_str.replace(" ", " L"), 
        width, 
        height, 
        height
    );

    // Color based on trend (start vs end)
    let start_price = data.first().map(|d| d.close).unwrap_or(0.0);
    let end_price = data.last().map(|d| d.close).unwrap_or(0.0);
    let is_up = end_price >= start_price;
    let color_class = if is_up { "text-emerald-500" } else { "text-rose-500" };
    let gradient_id = "chartGradient";

    view! {
        <svg viewBox=format!("0 0 {} {}", width, height) class=format!("w-full h-full {} overflow-visible", color_class)>
            <defs>
                <linearGradient id=gradient_id x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="currentColor" stop-opacity="0.2" />
                    <stop offset="100%" stop-color="currentColor" stop-opacity="0.0" />
                </linearGradient>
            </defs>

            // Grid lines
            <line x1="0" y1="0" x2={width} y2="0" stroke="#334155" stroke-width="1" stroke-dasharray="4" />
            <line x1="0" y1={height} x2={width} y2={height} stroke="#334155" stroke-width="1" />

            // Area fill
            <path d=area_path fill=format!("url(#{})", gradient_id) />

            // Chart line
            <polyline 
                fill="none" 
                stroke="currentColor" 
                stroke-width="3" 
                points=points_str 
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            
            // Labels
            <text x="-10" y="15" fill="#94a3b8" font-size="12" text-anchor="end">{format!("{:.2}", max_price)}</text>
            <text x="-10" y={height - 5.0} fill="#94a3b8" font-size="12" text-anchor="end">{format!("{:.2}", min_price)}</text>
            
            // Start/End Dates (Simplified)
            <text x="0" y={height + 20.0} fill="#64748b" font-size="12">{data.first().map(|d| d.date.clone()).unwrap_or_default()}</text>
            <text x={width} y={height + 20.0} fill="#64748b" font-size="12" text-anchor="end">{data.last().map(|d| d.date.clone()).unwrap_or_default()}</text>
        </svg>
    }.into_view()
}
