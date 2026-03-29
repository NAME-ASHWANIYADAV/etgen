import { Holding, MarketData, Signal, StockAnalysis, ChatMessage } from '../types';

const API_BASE = "http://localhost:8000/api";

const MOCK_SIGNALS: Signal[] = [
  {
    symbol: "HDFCBANK",
    name: "HDFC Bank",
    score: 92,
    type: "BUY",
    potential: "+12-18% in 30 days",
    agents: [
      { icon: "📊", label: "Technical: RSI Bullish Divergence" },
      { icon: "📑", label: "Filing: Q3 Profit +18%" },
      { icon: "🔍", label: "Insider: ₹340Cr Block Buy" },
      { icon: "📰", label: "Sentiment: 90% Positive" }
    ]
  },
  {
    symbol: "RELIANCE",
    name: "Reliance Industries",
    score: 84,
    type: "BUY",
    potential: "+8-12% in 45 days",
    agents: [
      { icon: "📊", label: "Technical: Breakout above 2800" },
      { icon: "📑", label: "Filing: Jio subscriber +4.2%" },
      { icon: "🔍", label: "Insider: Promoter stake stable" },
      { icon: "📰", label: "Sentiment: 78% Positive" }
    ]
  },
  {
    symbol: "TATAMOTORS",
    name: "Tata Motors",
    score: 78,
    type: "BUY",
    potential: "+10-15% in 30 days",
    agents: [
      { icon: "📊", label: "Technical: Golden Cross" },
      { icon: "📑", label: "Filing: EV sales +156% YoY" },
      { icon: "🔍", label: "Insider: No major activity" },
      { icon: "📰", label: "Sentiment: 82% Positive" }
    ]
  },
  {
    symbol: "INFY",
    name: "Infosys",
    score: 45,
    type: "HOLD",
    potential: "Flat",
    agents: [
      { icon: "📊", label: "Technical: Range-bound" },
      { icon: "📑", label: "Filing: Revenue guidance maintained" },
      { icon: "🔍", label: "Insider: Minor selling" },
      { icon: "📰", label: "Sentiment: 55% Mixed" }
    ]
  },
  {
    symbol: "PAYTM",
    name: "Paytm",
    score: 28,
    type: "SELL",
    potential: "-8-12% risk",
    agents: [
      { icon: "📊", label: "Technical: Death Cross forming" },
      { icon: "📑", label: "Filing: Losses widening" },
      { icon: "🔍", label: "Insider: ₹150Cr insider selling" },
      { icon: "📰", label: "Sentiment: 70% Negative" }
    ]
  },
  {
    symbol: "ITC",
    name: "ITC Limited",
    score: 71,
    type: "BUY",
    potential: "+6-10% in 45 days",
    agents: [
      { icon: "📊", label: "Technical: Support bounce at ₹430" },
      { icon: "📑", label: "Filing: FMCG margin expansion" },
      { icon: "🔍", label: "Insider: Steady accumulation" },
      { icon: "📰", label: "Sentiment: 65% Positive" }
    ]
  }
];

const MOCK_MARKET_OVERVIEW: MarketData[] = [
  { name: "NIFTY 50", price: 22456.80, change: 1.2, sparkline: [22100, 22250, 22180, 22350, 22456] },
  { name: "SENSEX", price: 73892.45, change: 0.9, sparkline: [73100, 73400, 73250, 73600, 73892] },
  { name: "BANK NIFTY", price: 48234.10, change: -0.3, sparkline: [48500, 48400, 48600, 48300, 48234] },
  { name: "NIFTY IT", price: 34567.90, change: 2.1, sparkline: [33800, 34000, 34200, 34400, 34567] }
];

export async function getSignals(): Promise<Signal[]> {
  return new Promise((resolve) => setTimeout(() => resolve(MOCK_SIGNALS), 500));
}

export async function getStockAnalysis(symbol: string): Promise<StockAnalysis> {
  return new Promise((resolve) => setTimeout(() => resolve({
    symbol,
    name: symbol === "HDFCBANK" ? "HDFC Bank" : symbol,
    price: 1520.45,
    change: 1.8,
    score: 92,
    chartData: Array.from({ length: 30 }, (_, i) => ({
      date: `Mar ${i + 1}`,
      price: 1400 + Math.random() * 180
    })),
    agents: {
      technical: {
        rsi: 34,
        macd: "Bullish crossover",
        bollinger: "Price near lower band",
        verdict: "Strong technical setup for reversal"
      },
      fundamental: {
        revenue: "₹48,200 Cr (+15% YoY)",
        profit: "₹16,800 Cr (+18% YoY)",
        highlight: "Beat street estimates by 12%",
        verdict: "Fundamental strength confirmed"
      },
      insider: {
        recent: "₹340 Cr block deal by institutional buyer",
        holding: "25.8% (stable)",
        pledge: "0% (clean)",
        verdict: "Smart money flowing in"
      },
      sentiment: {
        articles: 12,
        score: 0.85,
        theme: "Market leader in digital banking",
        verdict: "Overwhelmingly positive media coverage"
      },
      fusion: {
        convergence: "4 out of 4 agents are BULLISH",
        backtest: "This pattern → 72% win rate over 847 cases",
        confidence: 92,
        verdict: "HIGH CONVICTION BUY — Multiple independent signals converging"
      }
    },
    backtest: [
      { days: 30, return: 12 },
      { days: 60, return: 18 },
      { days: 90, return: 22 }
    ],
    successRate: 72
  }), 500));
}

export async function sendChatMessage(message: string): Promise<string> {
  return new Promise((resolve) => setTimeout(() => resolve(`Based on my multi-agent analysis of HDFC Bank (NSE: HDFCBANK), here's my assessment:

Overall Signal: BUY with High Conviction (92/100)

📊 Technical Setup: The stock is showing a bullish RSI divergence at 34, suggesting oversold conditions. Price is near the lower Bollinger Band with MACD showing a bullish crossover.

📑 Fundamentals: Q3 FY26 results beat street estimates by 12%. Net profit grew 18% YoY to ₹16,800 Cr. NIM remained stable at 3.4%.

🔍 Insider Activity: ₹340 Cr block deal detected on Mar 27 — institutional accumulation. Promoter holding stable at 25.8% with zero pledge.

📰 Market Sentiment: 9 out of 12 recent ET Markets articles carry a positive tone. Key narrative: 'digital banking leader.'

⚡ Signal Fusion: 4/4 agents bullish. Historical backtest of similar patterns shows 72% probability of 12-18% upside in 30 days.

This is AI-generated analysis for informational purposes. Not investment advice.

Sources:
[1] ET Markets, March 28, 2026
[2] BSE Filing - HDFC Bank Q3 Results
[3] NSE Bulk Deal Data, March 27, 2026`), 1000));
}

export async function getPortfolioSignals(holdings: Holding[]): Promise<Signal[]> {
  const symbols = holdings.map(h => h.symbol);
  return MOCK_SIGNALS.filter(s => symbols.includes(s.symbol));
}

export async function getMarketOverview(): Promise<MarketData[]> {
  return new Promise((resolve) => setTimeout(() => resolve(MOCK_MARKET_OVERVIEW), 500));
}
