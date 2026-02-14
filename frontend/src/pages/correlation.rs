use leptos::*;
use leptos_router::*;
use crate::api;
use shared::AssetHistory;

#[component]
pub fn CorrelationMatrix() -> impl IntoView {
    let history_data = create_resource(|| (), |_| async move {
        api::fetch_all_history().await
    });

    view! {
        <div class="p-4 bg-slate-900 min-h-screen text-white font-sans">
            <div class="mb-6">
                 <A href="/" class="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-2 font-medium">
                    <span class="text-xl">"←"</span> "ダッシュボードに戻る"
                 </A>
            </div>

            <header class="mb-8">
                <h1 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                    "資産相関行列"
                </h1>
                <p class="text-slate-400 text-sm mt-2">"日次リターンに基づいた30日間の相関関係 (1.0 = 正の相関, -1.0 = 負の相関)"</p>
            </header>

            <Suspense fallback=move || view! { <p class="text-center text-slate-500 animate-pulse">"相関係数を計算中..."</p> }>
                {move || {
                    history_data.get().map(|data| {
                        match data {
                            Some(histories) => {
                                // Filter for assets with enough data
                                let valid_histories: Vec<_> = histories.into_iter()
                                    .filter(|h| h.data.len() >= 10)
                                    .collect();

                                if valid_histories.is_empty() {
                                    return view! { <p>"利用可能な履歴データがありません。"</p> }.into_view();
                                }

                                view! {
                                    <MatrixTable histories=valid_histories />
                                }.into_view()
                            },
                            None => view! { <p class="text-rose-400 text-center">"履歴データの読み込みに失敗しました。"</p> }.into_view()
                        }
                    })
                }}
            </Suspense>
        </div>
    }
}

#[component]
fn MatrixTable(histories: Vec<AssetHistory>) -> impl IntoView {
    // We'll use a subset if too many, but let's try all for now
    // Actually limit to top 12 to avoid huge table
    let subset = histories.into_iter().take(12).collect::<Vec<_>>();
    
    // Calculate returns for each
    let returns: Vec<Vec<f64>> = subset.iter().map(|h| {
        let prices: Vec<f64> = h.data.iter().map(|d| d.close).collect();
        prices.windows(2).map(|w| (w[1] - w[0]) / w[0]).collect()
    }).collect();

    let n = subset.len();
    let mut matrix = vec![vec![0.0; n]; n];

    for i in 0..n {
        for j in 0..n {
            if i == j {
                matrix[i][j] = 1.0;
            } else if i < j {
                let corr = calculate_correlation(&returns[i], &returns[j]);
                matrix[i][j] = corr;
                matrix[j][i] = corr;
            }
        }
    }

    view! {
        <div class="relative overflow-x-auto border border-slate-700 rounded-xl shadow-2xl bg-slate-900/50">
            <table class="table-fixed min-w-[800px] w-full border-collapse">
                <thead class="sticky top-0 z-20">
                    <tr>
                        <th class="sticky left-0 z-30 w-32 p-2 border border-slate-700 bg-slate-800 font-bold text-xs shadow-[2px_0_5px_rgba(0,0,0,0.3)]"></th>
                        {subset.iter().map(|h| {
                            let (_, _, class, region) = h.kind.meta();
                            let flag = match region {
                                "US" => "🇺🇸",
                                "JP" => "🇯🇵",
                                "EU" => "🇪🇺",
                                "UK" => "🇬🇧",
                                "DE" => "🇩🇪",
                                "Global" => "🌐",
                                _ => "📍",
                            };
                            view! {
                                <th class="p-2 border border-slate-700 bg-slate-800 h-40">
                                    <div class="flex items-end justify-center h-full pb-2 text-slate-400">
                                        <span class="[writing-mode:vertical-rl] rotate-180 whitespace-nowrap text-[10px] uppercase tracking-wider max-h-[140px] overflow-hidden text-ellipsis flex items-center gap-1" title={h.name.clone()}>
                                            <span class="rotate-90">{class.icon()}</span>
                                            <span class="rotate-90 mr-1">{flag}</span>
                                            {h.name.clone()}
                                        </span>
                                    </div>
                                </th>
                            }
                        }).collect_view()}
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-800">
                    {matrix.into_iter().enumerate().map(|(i, row)| {
                        let h = &subset[i];
                        let (_, _, class, region) = h.kind.meta();
                        let flag = match region {
                            "US" => "🇺🇸",
                            "JP" => "🇯🇵",
                            "EU" => "🇪🇺",
                            "UK" => "🇬🇧",
                            "DE" => "🇩🇪",
                            "Global" => "🌐",
                            _ => "📍",
                        };
                        view! {
                            <tr class="hover:bg-slate-700/30 transition-colors">
                                <td class="sticky left-0 z-10 p-2 border border-slate-700 text-[10px] font-bold text-slate-300 truncate bg-slate-800 shadow-[2px_0_5px_rgba(0,0,0,0.3)]" title={h.name.clone()}>
                                    <div class="flex items-center gap-1">
                                        <span class="w-4 shrink-0 text-center">{flag}</span>
                                        <span class="truncate">{h.name.clone()}</span>
                                    </div>
                                </td>
                                {row.into_iter().map(|val| {
                                    let color = get_correlation_color(val);
                                    view! {
                                        <td class={format!("p-2 border border-slate-700 text-[10px] font-mono text-center {}", color)}>
                                            {format!("{:.2}", val)}
                                        </td>
                                    }
                                }).collect_view()}
                            </tr>
                        }
                    }).collect_view()}
                </tbody>
            </table>
        </div>
    }
}

fn calculate_correlation(a: &[f64], b: &[f64]) -> f64 {
    // Find common length
    let len = a.len().min(b.len());
    if len < 2 { return 0.0; }
    
    let a = &a[a.len()-len..];
    let b = &b[b.len()-len..];

    let n = len as f64;
    let mean_a = a.iter().sum::<f64>() / n;
    let mean_b = b.iter().sum::<f64>() / n;
    
    let mut num = 0.0;
    let mut den_a = 0.0;
    let mut den_b = 0.0;
    
    for (va, vb) in a.iter().zip(b.iter()) {
        let da = va - mean_a;
        let db = vb - mean_b;
        num += da * db;
        den_a += da * da;
        den_b += db * db;
    }
    
    let den = (den_a * den_b).sqrt();
    if den == 0.0 { 0.0 } else { num / den }
}

fn get_correlation_color(val: f64) -> &'static str {
    if val >= 0.8 { "bg-emerald-500/80 text-white" }
    else if val >= 0.5 { "bg-emerald-500/40 text-emerald-100" }
    else if val >= 0.2 { "bg-emerald-500/10 text-emerald-300" }
    else if val <= -0.8 { "bg-rose-500/80 text-white" }
    else if val <= -0.5 { "bg-rose-500/40 text-rose-100" }
    else if val <= -0.2 { "bg-rose-500/10 text-rose-300" }
    else { "bg-slate-800 text-slate-500" }
}
