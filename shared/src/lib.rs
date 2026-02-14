use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Copy)]
pub enum AssetClass {
    Stocks,
    Bonds,
    Cash,
    RealEstate,
    Commodities,
    Currencies,
    Crypto,
    Other,
}

impl AssetClass {
    pub fn icon(&self) -> &'static str {
        match self {
            AssetClass::Stocks => "📈",
            AssetClass::Bonds => "💰",
            AssetClass::Cash => "💵",
            AssetClass::RealEstate => "🏠",
            AssetClass::Commodities => "📦",
            AssetClass::Currencies => "💱",
            AssetClass::Crypto => "₿",
            AssetClass::Other => "⚙️",
        }
    }
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Copy)]
pub enum AssetKind {
    // Stocks US
    SP500,
    Nasdaq100,
    Russell2000,
    // Stocks JP
    Nikkei225,
    Topix,
    JPX400,
    Growth250,
    // Stocks EU/Global
    Stoxx600,
    FTSE100,
    DAX,
    MsciEm,
    MsciAcwi,
    // Bonds
    US10Y,
    US2Y,
    JP10Y,
    JP2Y,
    // REIT
    JREIT,
    USREIT,
    // Commodities
    Gold,
    Oil,
    CRB, // Commodity Index
    // Crypto
    Bitcoin,
    // Currencies
    USDJPY,
    EURJPY,
    EURUSD,
    // Others
    VIX,
    NikkeiVI,
    JPCPI,
}

impl AssetKind {
    pub fn all() -> &'static [AssetKind] {
        &[
            // Stocks US
            AssetKind::SP500,
            AssetKind::Nasdaq100,
            AssetKind::Russell2000,
            // Stocks JP
            AssetKind::Nikkei225,
            AssetKind::Topix,
            AssetKind::JPX400,
            AssetKind::Growth250,
            // Stocks EU/Global
            AssetKind::Stoxx600,
            AssetKind::FTSE100,
            AssetKind::DAX,
            AssetKind::MsciEm,
            AssetKind::MsciAcwi,
            // Bonds
            AssetKind::US10Y,
            AssetKind::US2Y,
            AssetKind::JP10Y,
            AssetKind::JP2Y,
            // REIT
            AssetKind::JREIT,
            AssetKind::USREIT,
            // Commodities
            AssetKind::Gold,
            AssetKind::Oil,
            AssetKind::CRB,
            // Crypto
            AssetKind::Bitcoin,
            // Currencies
            AssetKind::USDJPY,
            AssetKind::EURJPY,
            AssetKind::EURUSD,
            // Others
            AssetKind::VIX,
            AssetKind::NikkeiVI,
            AssetKind::JPCPI,
        ]
    }

    pub fn meta(&self) -> (&'static str, &'static str, AssetClass, &'static str) {
        match self {
            // Stocks US
            AssetKind::SP500 => ("^GSPC", "S&P 500", AssetClass::Stocks, "US"),
            AssetKind::Nasdaq100 => ("^NDX", "NASDAQ 100", AssetClass::Stocks, "US"),
            AssetKind::Russell2000 => ("^RUT", "Russell 2000", AssetClass::Stocks, "US"),
            // Stocks JP
            AssetKind::Nikkei225 => ("^N225", "Nikkei 225", AssetClass::Stocks, "JP"),
            AssetKind::Topix => ("^TOPX", "TOPIX", AssetClass::Stocks, "JP"),
            AssetKind::JPX400 => ("^JPXNK400", "JPX-Nikkei 400", AssetClass::Stocks, "JP"),
            AssetKind::Growth250 => ("^MOTHERS", "TSE Growth Market 250", AssetClass::Stocks, "JP"),
            // Stocks EU/Global
            AssetKind::Stoxx600 => ("^STOXX", "STOXX 600", AssetClass::Stocks, "EU"),
            AssetKind::FTSE100 => ("^FTSE", "FTSE 100", AssetClass::Stocks, "UK"),
            AssetKind::DAX => ("^GDAXI", "DAX", AssetClass::Stocks, "DE"),
            AssetKind::MsciEm => ("EEM", "MSCI Emerging Markets (ETF)", AssetClass::Stocks, "Global"),
            AssetKind::MsciAcwi => ("ACWI", "MSCI ACWI (ETF)", AssetClass::Stocks, "Global"),
            // Bonds & Cash
            AssetKind::US10Y => ("^TNX", "US 10Y Yield", AssetClass::Bonds, "US"),
            AssetKind::US2Y => ("^IRX", "US 13W Yield (Proxy)", AssetClass::Cash, "US"),
            AssetKind::JP10Y => ("^GJGB10", "JP 10Y Yield", AssetClass::Bonds, "JP"),
            AssetKind::JP2Y => ("^GJGB2", "JP 2Y Yield", AssetClass::Bonds, "JP"),
            // REIT
            AssetKind::JREIT => ("^TREIT", "TSE REIT Index", AssetClass::RealEstate, "JP"),
            AssetKind::USREIT => ("VNQ", "Vanguard Real Estate (ETF)", AssetClass::RealEstate, "US"),
            // Commodities
            AssetKind::Gold => ("GC=F", "Gold Futures", AssetClass::Commodities, "Global"),
            AssetKind::Oil => ("CL=F", "Crude Oil WTI", AssetClass::Commodities, "Global"),
            AssetKind::CRB => ("^CRB", "CRB Index", AssetClass::Commodities, "Global"),
            // Crypto
            AssetKind::Bitcoin => ("BTC-USD", "Bitcoin", AssetClass::Crypto, "Global"),
            // Currencies
            AssetKind::USDJPY => ("JPY=X", "USD/JPY", AssetClass::Currencies, "Global"),
            AssetKind::EURJPY => ("EURJPY=X", "EUR/JPY", AssetClass::Currencies, "Global"),
            AssetKind::EURUSD => ("EURUSD=X", "EUR/USD", AssetClass::Currencies, "Global"),
            // Others
            AssetKind::VIX => ("^VIX", "VIX", AssetClass::Other, "US"),
            AssetKind::NikkeiVI => ("^JNIV", "Nikkei VI", AssetClass::Other, "JP"),
            AssetKind::JPCPI => ("^TNX", "JP CPI (Mock)", AssetClass::Other, "JP"),
        }
    }
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
pub struct AssetIndex {
    pub id: String, // e.g., "sp500"
    pub kind: AssetKind,
    pub name: String,
    pub symbol: String, // Ticker, e.g., "^GSPC"
    pub class: AssetClass,
    pub region: String, // "US", "JP", "Global", "EU"
    pub current_price: f64,
    pub change_rate: f64, // Percentage change (e.g., 0.5 for +0.5%)
    pub change_price: f64, // Absolute change
    pub is_market_open: bool,
    pub last_updated: String, // ISO 8601
}

impl AssetIndex {
    pub fn region_emoji(&self) -> &'static str {
        match self.region.as_str() {
            "US" => "🇺🇸",
            "JP" => "🇯🇵",
            "EU" => "🇪🇺",
            "UK" => "🇬🇧",
            "DE" => "🇩🇪",
            "Global" => "🌐",
            _ => "📍",
        }
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MarketData {
    pub indices: Vec<AssetIndex>,
    pub last_fetched: String, // ISO 8601
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
pub struct HistoryItem {
    pub date: String, // YYYY-MM-DD
    pub close: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
pub struct AssetHistory {
    pub kind: AssetKind,
    pub symbol: String,
    pub name: String,
    pub data: Vec<HistoryItem>,
}
