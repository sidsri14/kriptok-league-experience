import { PerpTrade, ChroniclePost, FeedbackItem } from './types'

export const TRADES_DATA: PerpTrade[] = [
  {
    id: 'trade-01-sol',
    asset: 'SOL-PERP',
    direction: 'LONG',
    leverage: 5,
    entryPrice: 134.20,
    exitPrice: 147.80,
    sizeUsd: 500,
    pnlUsd: 253.35,
    roiPercent: 50.67,
    status: 'CLOSED',
    thesis: 'Breakout from multi-week ascending triangle on 4H chart with rising Open Interest and positive CVD divergence on Solana DEX perps.',
    invalidation: '4H candle close below $131.50 support cluster.',
    tradeDuration: '36 Hours',
    executionQuality: 'FLAWLESS'
  },
  {
    id: 'trade-02-btc',
    asset: 'BTC-PERP',
    direction: 'SHORT',
    leverage: 3,
    entryPrice: 62400,
    exitPrice: 59800,
    sizeUsd: 600,
    pnlUsd: 74.99,
    roiPercent: 12.50,
    status: 'CLOSED',
    thesis: 'Hedge position entering weekend liquidity gap after rejection at $62.8k resistance level.',
    invalidation: 'Break above $63.2k with sustained volume.',
    tradeDuration: '18 Hours',
    executionQuality: 'GOOD'
  },
  {
    id: 'trade-03-sol',
    asset: 'SOL-PERP',
    direction: 'LONG',
    leverage: 4,
    entryPrice: 142.10,
    exitPrice: 154.50,
    sizeUsd: 400,
    pnlUsd: 139.62,
    roiPercent: 34.90,
    status: 'CLOSED',
    thesis: 'Retest of previous resistance turned support at $142 coinciding with Firedancer testnet throughput milestone announcement.',
    invalidation: 'Loss of $139.80 demand zone.',
    tradeDuration: '48 Hours',
    executionQuality: 'FLAWLESS'
  }
]

export const CHRONICLE_POSTS: ChroniclePost[] = [
  {
    id: 'post-1',
    stage: 'Early Round',
    day: 1,
    xPostContent: `⚔️ Entering Round 1 of @KriptoKGlobal League!

Just deposited into @KriptoKGlobal self-custodial wallet on Solana. The UI for perp trading is remarkably snappy — zero lag on order signing.

Starting thesis:
• Following $SOL-PERP consolidation around $134
• Going with controlled 5x leverage rather than degencalling, since League ranks by % return rather than wallet size.

Let's see where we sit on the leaderboard by day 3! 📊

Leaderboard link: https://league.kriptok.io/
#KriptoKLeague #Solana #PerpDEX`,
    tags: ['@KriptoKGlobal', '#KriptoKLeague', '#Solana'],
    attachedVisual: 'Leaderboard Rank',
    keyTakeaway: 'Initial League qualification & disciplined risk allocation (5x max leverage).'
  },
  {
    id: 'post-2',
    stage: 'Trade Analysis',
    day: 4,
    xPostContent: `🎯 $SOL-PERP Trade Recap & PnL Card (+50.67% ROI)

Entered $SOL long at $134.20 on @KriptoKGlobal following 4H ascending triangle breakout.
Exited at $147.80 as momentum hit upper Bollinger band.

Trade Breakdown:
✅ Entry: $134.20 (5x Leverage)
✅ Exit: $147.80
✅ Net ROI: +50.67%
✅ Slippage: 0.02% (super clean execution)

Currently climbing into Top 15 on the KriptoK League leaderboard. Managing risk into the weekend! 🛡️

App link: https://kriptok.io/
@KriptoKGlobal #TradingRecap`,
    tags: ['@KriptoKGlobal', '#TradingRecap', '#PnLCard'],
    attachedVisual: 'PnL Card',
    keyTakeaway: 'In-depth entry/exit rationale with verified PnL card attachment.'
  },
  {
    id: 'post-3',
    stage: 'Mid-Round Volatility',
    day: 8,
    xPostContent: `🌪️ Navigating Mid-Round Volatility in KriptoK League:

Bitcoin tested $59.8k over the weekend. Took a quick 3x hedge short that banked +12.5% ROI, protecting our accumulated season points.

What makes @KriptoKGlobal League interesting:
Because rankings are % ROI-based, a well-timed $100 trade with tight invalidation carries the exact same weight as a $100k whale. True merit-based perp arena.

Current Rank: #8 🏆
Next Setup: Waiting for $SOL $142 retest.

@KriptoKGlobal #KriptoK`,
    tags: ['@KriptoKGlobal', '#PerpTrading'],
    attachedVisual: 'Chart Markup',
    keyTakeaway: 'Explaining how %-based scoring levels the playing field against whales.'
  },
  {
    id: 'post-4',
    stage: 'Final Reflections',
    day: 14,
    xPostContent: `🏁 KriptoK League Round 1 Complete — Full Experience Review & Feedback

Wrapped up Round 1 with a cumulative +98% account growth across 3 disciplined trades.

Honest Product Review for @KriptoKGlobal:
🔥 What Shined:
1. Non-custodial 12-chain wallet: Signing perp transactions directly from self-custody is seamless.
2. Zero frontend slippage or frozen charts during high volatility spikes.
3. Official PnL card generator is one of the cleanest in Web3.

💡 Constructive Feedback for Improvement:
1. Adding trailing stop-loss / conditional take-profit triggers directly in the order module.
2. In-app PnL notifications on Telegram/Discord webhook when target limits hit.

Looking forward to Season Points accumulating into the $14k grand championship! 🚀

https://league.kriptok.io/
@KriptoKGlobal #KriptoKLeague`,
    tags: ['@KriptoKGlobal', '#ProductReview', '#Solana'],
    attachedVisual: 'App Video Walkthrough',
    keyTakeaway: 'Comprehensive product feedback balancing genuine appreciation with actionable technical critiques.'
  }
]

export const FEEDBACK_ITEMS: FeedbackItem[] = [
  {
    category: 'Perp Execution',
    rating: 5,
    highlight: 'Lightning sub-second order routing across Solana & EVM perps with minimal funding fee drag.',
    constructiveCritique: 'Add native one-click Partial Take-Profit (TP/SL) ladders directly in the order book interface.'
  },
  {
    category: 'Multi-chain Wallet',
    rating: 5,
    highlight: 'Unified self-custody across 12 chains without needing multiple RPC browser extensions.',
    constructiveCritique: 'Add custom RPC node fallback configuration for power traders during extreme network congestion.'
  },
  {
    category: 'UX / Interface',
    rating: 4,
    highlight: 'Sleek dark mode charts with instant PnL card export in 1 click.',
    constructiveCritique: 'Include historical realized PnL graph over 7d/30d intervals in the main portfolio tab.'
  },
  {
    category: 'League Gamification',
    rating: 5,
    highlight: 'Percentage-return scoring prevents whales from dominating, rewarding genuine trading skill.',
    constructiveCritique: 'Introduce real-time leaderboard rank badges on trade share cards.'
  }
]
