export interface PerpTrade {
  id: string;
  asset: 'SOL-PERP' | 'BTC-PERP' | 'ETH-PERP';
  direction: 'LONG' | 'SHORT';
  leverage: number;
  entryPrice: number;
  exitPrice: number;
  sizeUsd: number;
  pnlUsd: number;
  roiPercent: number;
  status: 'CLOSED' | 'OPEN';
  thesis: string;
  invalidation: string;
  tradeDuration: string;
  executionQuality: 'FLAWLESS' | 'SLIGHT_SLIPPAGE' | 'GOOD';
}

export interface ChroniclePost {
  id: string;
  stage: 'Early Round' | 'Mid-Round Volatility' | 'Trade Analysis' | 'Final Reflections';
  day: number;
  xPostContent: string;
  tags: string[];
  attachedVisual: 'PnL Card' | 'Chart Markup' | 'Leaderboard Rank' | 'App Video Walkthrough';
  keyTakeaway: string;
}

export interface FeedbackItem {
  category: 'UX / Interface' | 'Perp Execution' | 'Multi-chain Wallet' | 'League Gamification';
  rating: number; // 1-5
  highlight: string;
  constructiveCritique: string;
}
