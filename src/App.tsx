import { useState } from 'react'
import { 
  TrendingUp, 
  Award, 
  Copy, 
  Check, 
  Share2, 
  BarChart2, 
  Sparkles, 
  Sliders, 
  Activity, 
  ExternalLink,
  MessageSquare
} from 'lucide-react'
import confetti from 'canvas-confetti'
import { TRADES_DATA, CHRONICLE_POSTS, FEEDBACK_ITEMS } from './data'
import { PerpTrade, ChroniclePost } from './types'

export default function App() {
  const [activeTab, setActiveTab] = useState<'pnl-generator' | 'chronicle' | 'trade-review' | 'feedback'>('pnl-generator')
  const [selectedTrade, setSelectedTrade] = useState<PerpTrade>(TRADES_DATA[0])
  const [customAsset, setCustomAsset] = useState<'SOL-PERP' | 'BTC-PERP' | 'ETH-PERP'>('SOL-PERP')
  const [customLeverage, setCustomLeverage] = useState<number>(5)
  const [customEntry, setCustomEntry] = useState<number>(134.20)
  const [customExit, setCustomExit] = useState<number>(147.80)
  const [username, setUsername] = useState<string>('SolanaApexTrader')
  const [copiedPostId, setCopiedPostId] = useState<string | null>(null)
  const [copiedPnlCard, setCopiedPnlCard] = useState<boolean>(false)

  // Calculate live PnL & ROI
  const calculatedRoi = (((customExit - customEntry) / customEntry) * 100 * customLeverage).toFixed(2)
  const isProfit = Number(calculatedRoi) >= 0

  const handleCopyPost = (post: ChroniclePost) => {
    navigator.clipboard.writeText(post.xPostContent)
    setCopiedPostId(post.id)
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    })
    setTimeout(() => setCopiedPostId(null), 2500)
  }

  const handleCopyPnlSummary = () => {
    const pnlSummaryText = `🔥 KriptoK League Official Trade Card
Trader: ${username}
Asset: ${customAsset} (${customLeverage}x)
Entry: $${customEntry} | Exit: $${customExit}
Realized ROI: ${isProfit ? '+' : ''}${calculatedRoi}%
Leaderboard: https://league.kriptok.io/
@KriptoKGlobal #KriptoKLeague`

    navigator.clipboard.writeText(pnlSummaryText)
    setCopiedPnlCard(true)
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 }
    })
    setTimeout(() => setCopiedPnlCard(false), 2500)
  }

  return (
    <div className="min-h-screen text-slate-100 flex flex-col justify-between">
      {/* Header */}
      <header className="border-b border-white/10 glass-panel sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl kriptok-gradient flex items-center justify-center font-black text-2xl shadow-lg shadow-cyan-600/30">
              ⚡
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-xl tracking-tight text-white flex items-center gap-1.5">
                  KriptoK <span className="text-cyan-400">League Chronicle</span>
                </h1>
                <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  $2,000 USDC Bounty Suite
                </span>
              </div>
              <p className="text-xs text-slate-400 flex items-center gap-2">
                <span>Self-Custodial 12-Chain Perp Trading Arena</span>
                <span>•</span>
                <span className="text-cyan-400 font-mono">Ranked by % ROI</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://league.kriptok.io/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl kriptok-gradient hover:opacity-90 transition text-xs font-bold text-white shadow-lg shadow-cyan-500/20"
            >
              <span>KriptoK League App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full">
        <div className="glass-panel rounded-3xl p-8 sm:p-10 mb-10 relative overflow-hidden border border-white/10 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl -z-10 pointer-events-none" />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Round Perp Journey & PnL Engine</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
              Trade, Learn & <span className="text-gradient">Dominate the Leaderboard</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-6 leading-relaxed">
              A comprehensive chronicle of trading Solana & Bitcoin perps on KriptoK League. Featuring live PnL card generators, trade setups, risk management, and genuine product feedback for @KriptoKGlobal.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="glass-card p-3.5 rounded-xl text-center">
                <div className="text-2xl font-extrabold text-cyan-400">$2,000</div>
                <div className="text-xs text-slate-400 font-medium">Round Prize Pool</div>
              </div>
              <div className="glass-card p-3.5 rounded-xl text-center">
                <div className="text-2xl font-extrabold text-emerald-400">+50.67%</div>
                <div className="text-xs text-slate-400 font-medium">Best SOL Trade ROI</div>
              </div>
              <div className="glass-card p-3.5 rounded-xl text-center">
                <div className="text-2xl font-extrabold text-violet-400">12 Chains</div>
                <div className="text-xs text-slate-400 font-medium">Self-Custodial Wallet</div>
              </div>
              <div className="glass-card p-3.5 rounded-xl text-center">
                <div className="text-2xl font-extrabold text-amber-400">Sept 21</div>
                <div className="text-xs text-slate-400 font-medium">Bounty Deadline</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveTab('pnl-generator')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === 'pnl-generator' 
                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/20' 
                : 'glass-card text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Sliders className="w-4 h-4" />
            <span>Interactive PnL Card Studio</span>
          </button>
          <button
            onClick={() => setActiveTab('chronicle')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === 'chronicle' 
                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/20' 
                : 'glass-card text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Share2 className="w-4 h-4" />
            <span>4-Stage X Chronicle Posts</span>
          </button>
          <button
            onClick={() => setActiveTab('trade-review')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === 'trade-review' 
                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/20' 
                : 'glass-card text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <BarChart2 className="w-4 h-4" />
            <span>Trade Setups & Invalidation</span>
          </button>
          <button
            onClick={() => setActiveTab('feedback')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === 'feedback' 
                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/20' 
                : 'glass-card text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Honest Product Review & Ratings</span>
          </button>
        </div>

        {/* TAB 1: PnL Studio */}
        {activeTab === 'pnl-generator' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Customizer Controls */}
            <div className="lg:col-span-5 space-y-5 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10">
              <div className="border-b border-white/10 pb-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Activity className="w-5 h-5 text-cyan-400" />
                  Custom Trade Parameters
                </h3>
                <p className="text-xs text-slate-400">Configure parameters to generate your official KriptoK PnL share card.</p>
              </div>

              <div>
                <label className="text-xs text-slate-400 font-medium mb-1.5 block">League Username / ID:</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="text-xs text-slate-400 font-medium mb-1.5 block">Perpetual Asset:</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['SOL-PERP', 'BTC-PERP', 'ETH-PERP'] as const).map((a) => (
                    <button
                      key={a}
                      onClick={() => setCustomAsset(a)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold transition border ${
                        customAsset === a
                          ? 'bg-cyan-950/60 border-cyan-500 text-cyan-300'
                          : 'glass-card border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                  <span>Leverage:</span>
                  <span className="font-mono text-cyan-400 font-bold">{customLeverage}x</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={customLeverage}
                  onChange={(e) => setCustomLeverage(Number(e.target.value))}
                  className="w-full accent-cyan-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400 font-medium mb-1.5 block">Entry Price ($):</label>
                  <input
                    type="number"
                    value={customEntry}
                    onChange={(e) => setCustomEntry(Number(e.target.value))}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs text-white font-mono focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 font-medium mb-1.5 block">Exit Price ($):</label>
                  <input
                    type="number"
                    value={customExit}
                    onChange={(e) => setCustomExit(Number(e.target.value))}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs text-white font-mono focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <button
                onClick={handleCopyPnlSummary}
                className="w-full py-3.5 rounded-2xl kriptok-gradient text-xs font-black text-white shadow-xl shadow-cyan-600/30 hover:opacity-95 transition flex items-center justify-center gap-2"
              >
                {copiedPnlCard ? <Check className="w-4 h-4 text-cyan-200" /> : <Copy className="w-4 h-4" />}
                <span>{copiedPnlCard ? 'PnL Summary Copied!' : 'Export & Copy PnL Card'}</span>
              </button>
            </div>

            {/* Live PnL Card Preview */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-2 border-cyan-500/40 shadow-2xl relative overflow-hidden space-y-6">
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

                {/* Card Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl kriptok-gradient flex items-center justify-center font-black text-lg text-white">
                      ⚡
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">KRIPTOK LEAGUE</div>
                      <div className="text-xs text-slate-400 font-mono">@{username}</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-bold">
                    Round 1 Arena
                  </div>
                </div>

                {/* Main PnL Display */}
                <div className="py-4 text-center space-y-2">
                  <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                    {customAsset} LONG • {customLeverage}x
                  </div>
                  <div className={`text-5xl sm:text-6xl font-black tracking-tight font-mono ${isProfit ? 'text-emerald-400' : 'text-red-400'}`}>
                    {isProfit ? '+' : ''}{calculatedRoi}%
                  </div>
                  <div className="text-xs text-slate-400 font-medium">Realized Return on Investment</div>
                </div>

                {/* Trade details box */}
                <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-black/50 border border-white/5 text-xs font-mono">
                  <div>
                    <div className="text-slate-500 text-[10px] uppercase">Entry Price</div>
                    <div className="text-white font-bold">${customEntry}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-slate-500 text-[10px] uppercase">Exit Price</div>
                    <div className="text-emerald-300 font-bold">${customExit}</div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="flex items-center justify-between pt-2 text-[11px] text-slate-400 border-t border-white/5">
                  <span className="flex items-center gap-1 font-mono">⚡ league.kriptok.io</span>
                  <span>@KriptoKGlobal</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Chronicle Posts */}
        {activeTab === 'chronicle' && (
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4 glass-panel p-6 rounded-3xl">
              <h3 className="text-xl font-bold text-white">Full-Round Progression Chronicle (4 X Posts)</h3>
              <p className="text-xs text-slate-400">
                A genuine account of the 2-week tournament: early round strategy, volatility management, trade recap, and season wrap-up.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CHRONICLE_POSTS.map((p) => (
                <div key={p.id} className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        {p.stage} (Day {p.day})
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        Attached: <strong className="text-slate-200">{p.attachedVisual}</strong>
                      </span>
                    </div>

                    <pre className="p-4 rounded-2xl bg-slate-900/90 border border-white/5 text-xs text-slate-200 whitespace-pre-wrap font-mono leading-relaxed max-h-60 overflow-y-auto">
                      {p.xPostContent}
                    </pre>

                    <div className="text-xs text-slate-400 italic">
                      💡 <strong>Objective:</strong> {p.keyTakeaway}
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopyPost(p)}
                    className="w-full py-2.5 rounded-xl kriptok-gradient text-xs font-bold text-white shadow-md shadow-cyan-600/20 hover:opacity-90 transition flex items-center justify-center gap-2 mt-2"
                  >
                    {copiedPostId === p.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-cyan-200" />
                        <span>Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Post for X</span>
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: Trade Setups */}
        {activeTab === 'trade-review' && (
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4 glass-panel p-6 rounded-3xl">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                In-Depth Trade Setups & Technical Thesis
              </h3>
              <p className="text-xs text-slate-400">Detailed post-mortem analysis of live setups executed during the League round.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {TRADES_DATA.map((t) => (
                <div
                  key={t.id}
                  onClick={() => setSelectedTrade(t)}
                  className={`glass-panel p-6 rounded-3xl border transition cursor-pointer space-y-4 ${
                    selectedTrade.id === t.id
                      ? 'border-cyan-500 shadow-xl ring-1 ring-cyan-500/40 bg-cyan-950/40'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-base text-white">{t.asset}</span>
                    <span className={`px-2 py-0.5 rounded text-xs font-bold ${t.direction === 'LONG' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'}`}>
                      {t.direction} {t.leverage}x
                    </span>
                  </div>

                  <div className="text-2xl font-black text-emerald-400 font-mono">
                    +{t.roiPercent}% ROI
                  </div>

                  <div className="space-y-2 text-xs">
                    <div>
                      <div className="text-slate-400 font-semibold mb-0.5">Entry Thesis:</div>
                      <p className="text-slate-300 leading-relaxed">{t.thesis}</p>
                    </div>
                    <div>
                      <div className="text-slate-400 font-semibold mb-0.5">Invalidation Condition:</div>
                      <p className="text-red-300 leading-relaxed font-mono">{t.invalidation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: Feedback */}
        {activeTab === 'feedback' && (
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
            <div className="border-b border-white/10 pb-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                Constructive Product Feedback for KriptoK Global
              </h3>
              <p className="text-xs text-slate-400">Authentic insights gathered after extensive multi-chain perp trading.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FEEDBACK_ITEMS.map((item, idx) => (
                <div key={idx} className="glass-card p-6 rounded-2xl border border-white/5 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-white text-base">{item.category}</h4>
                    <div className="flex text-amber-400 text-xs">{'★'.repeat(item.rating)}</div>
                  </div>
                  <div className="text-xs text-slate-300">
                    <strong className="text-emerald-400">What Works Well:</strong> {item.highlight}
                  </div>
                  <div className="text-xs text-slate-300">
                    <strong className="text-cyan-300">Opportunity for Enhancement:</strong> {item.constructiveCritique}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 glass-panel py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>Built for <strong>KriptoK League</strong> ($2,000 USDC Bounty)</div>
          <div className="flex items-center gap-3">
            <span>Tags: @KriptoKGlobal • #KriptoKLeague</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
