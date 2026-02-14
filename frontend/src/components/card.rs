use leptos::*;
use shared::AssetIndex;

#[component]
pub fn AssetCard(index: AssetIndex) -> impl IntoView {
    let (color_class, text_color) = if index.change_rate >= 2.0 {
        ("bg-emerald-600/40 border-emerald-400/50 shadow-emerald-900/20", "text-emerald-300")
    } else if index.change_rate >= 1.0 {
        ("bg-emerald-700/30 border-emerald-500/40", "text-emerald-400")
    } else if index.change_rate > 0.0 {
        ("bg-emerald-900/20 border-emerald-600/30", "text-emerald-500")
    } else if index.change_rate <= -2.0 {
        ("bg-rose-600/40 border-rose-400/50 shadow-rose-900/20", "text-rose-300")
    } else if index.change_rate <= -1.0 {
        ("bg-rose-700/30 border-rose-500/40", "text-rose-400")
    } else if index.change_rate < 0.0 {
        ("bg-rose-900/20 border-rose-600/30", "text-rose-500")
    } else {
        ("bg-slate-800/50 border-slate-700", "text-slate-400")
    };

    let market_status = if index.is_market_open {
        view! { <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> }.into_view()
    } else {
        view! { <span class="w-1.5 h-1.5 rounded-full bg-slate-600"></span> }.into_view()
    };

    view! {
        <a href={format!("/asset/{}", index.id)} class="block group">
            <div class={format!("p-5 rounded-xl border transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl cursor-pointer {}", color_class)}>
                <div class="flex justify-between items-start mb-3">
                    <div class="flex items-center gap-2">
                        {market_status}
                        <div>
                            <h2 class="text-sm font-bold text-slate-100 group-hover:text-white transition-colors line-clamp-1">{index.name}</h2>
                            <p class="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">{index.region}</p>
                        </div>
                    </div>
                    <span class={format!("text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-slate-900/40 {}", text_color)}>
                        {format!("{:.2}%", index.change_rate)}
                    </span>
                </div>
                
                <div class="mt-2">
                    <div class="flex items-baseline gap-1">
                        <span class="text-xl font-black tracking-tighter text-slate-100">
                            {format!("{:.2}", index.current_price)}
                        </span>
                        // <span class="text-[10px] text-slate-500 font-medium">{index.symbol}</span>
                    </div>
                    <div class="flex items-center mt-1 space-x-2">
                        <span class={format!("text-xs font-bold {}", text_color)}>
                            {if index.change_price > 0.0 { "+" } else { "" }}
                            {format!("{:.2}", index.change_price)}
                        </span>
                        <span class="text-[10px] text-slate-500 font-medium">"前日比"</span>
                    </div>
                </div>
            </div>
        </a>
    }
}
