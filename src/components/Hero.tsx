import React from 'react';
import { 
  ShieldCheck, 
  ArrowDownRight, 
  ArrowDownLeft, 
  Lock, 
  TrendingDown,
  Smartphone,
  Zap,
  Globe,
  Sparkles,
  Shield,
  Camera,
  PlaySquare,
  EyeOff,
  Radio,
  Flame,
  Layers,
  Compass
} from 'lucide-react';
import { InteractivePhone } from './InteractivePhone';

interface HeroProps {
  onOpenDownload: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload }) => {
  const platforms = [
    { name: 'Instagram Reels', icon: Camera, color: 'text-rose-500' },
    { name: 'YouTube Shorts', icon: PlaySquare, color: 'text-red-500' },
    { name: 'TikTok Streams', icon: Radio, color: 'text-purple-600' },
    { name: 'Google Chrome', icon: Globe, color: 'text-blue-500' },
    { name: 'Brave Browser', icon: Flame, color: 'text-amber-500' },
    { name: 'Incognito Mode', icon: EyeOff, color: 'text-slate-600' },
    { name: 'Reddit Feeds', icon: Layers, color: 'text-orange-500' },
    { name: 'Android 15 OS', icon: Zap, color: 'text-emerald-500' },
    { name: 'Safari & Firefox', icon: Compass, color: 'text-indigo-500' }
  ];

  return (
    <section className="relative pt-28 pb-14 md:pt-36 md:pb-16 overflow-hidden bg-white text-center">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Tilted Callout Pointer Badges (Exact Zanderio Pointer Icon Style) */}
        <div className="relative max-w-3xl mx-auto mb-6 flex justify-between items-center px-2 sm:px-12 pointer-events-none">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8FBF4] border border-[#9DECD2] text-[#0A6B4F] text-xs font-bold shadow-xs rotate-[-3deg] pointer-events-auto animate-float">
            <Shield className="w-3.5 h-3.5 text-[#0A6B4F]" />
            <span>#1 On-Device Blocker</span>
            <ArrowDownRight className="w-3.5 h-3.5 text-[#0A6B4F]" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF0FF] border border-[#E9D0FE] text-[#7E3FF2] text-xs font-bold shadow-xs rotate-[3deg] pointer-events-auto animate-float-reverse">
            <ArrowDownLeft className="w-3.5 h-3.5 text-[#7E3FF2]" />
            <Sparkles className="w-3.5 h-3.5 text-[#7E3FF2]" />
            <span>Built by Fatim Hasnain</span>
          </div>
        </div>

        {/* Centered H1 (Exact Zanderio Hierarchy) */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#212529] max-w-4xl mx-auto leading-[1.12]">
          #1 Android Blocker That <br className="hidden sm:inline" />
          <span className="text-[#7E3FF2]">Never Lets You Relapse</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Turn your phone back into a high-leverage tool with an on-device wellness guardian that blocks adult content across all browsers, 
          puts a hard stop on infinite doomscrolling, and dissolves cravings with the 15-minute Freedom Vault.
        </p>

        {/* Hook */}
        <p className="mt-3 text-sm text-slate-800 font-medium">
          <strong>No subscriptions, no cloud proxies.</strong>{' '}
          <button 
            onClick={onOpenDownload} 
            className="text-[#7E3FF2] hover:text-[#6C2FE0] font-bold underline cursor-pointer"
          >
            Download the free Android APK →
          </button>
        </p>

        {/* --- CENTRAL CONNECTED DIAGRAM CANVAS (EXACT ZANDERIO STYLE) --- */}
        <div className="mt-12 relative rounded-3xl bg-[#FAF7FF] border border-purple-100/90 p-6 sm:p-10 lg:p-12 shadow-sm overflow-hidden">
          
          {/* Animated SVG Connector Lines with Moving Glow Points */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block opacity-45" viewBox="0 0 1000 650" fill="none">
            {/* Top-Left to Center */}
            <path d="M 230 140 C 350 140, 380 230, 500 270" stroke="#7E3FF2" strokeWidth="1.5" className="animate-line-flow" />
            {/* Mid-Left to Center */}
            <path d="M 230 320 C 350 320, 390 310, 500 310" stroke="#7E3FF2" strokeWidth="1.5" className="animate-line-flow" />
            {/* Bottom-Left to Center */}
            <path d="M 230 500 C 350 500, 380 390, 500 350" stroke="#7E3FF2" strokeWidth="1.5" className="animate-line-flow" />
            
            {/* Top-Right to Center */}
            <path d="M 770 170 C 650 170, 620 250, 500 280" stroke="#7E3FF2" strokeWidth="1.5" className="animate-line-flow" />
            {/* Bottom-Right to Center */}
            <path d="M 770 480 C 650 480, 620 370, 500 340" stroke="#7E3FF2" strokeWidth="1.5" className="animate-line-flow" />

            {/* Glowing animated pulse nodes */}
            <circle cx="360" cy="180" r="3.5" fill="#7E3FF2" className="animate-ping" />
            <circle cx="640" cy="210" r="3.5" fill="#7E3FF2" className="animate-ping" />
            <circle cx="370" cy="450" r="3.5" fill="#7E3FF2" className="animate-ping" />
            <circle cx="630" cy="430" r="3.5" fill="#7E3FF2" className="animate-ping" />
          </svg>

          {/* Grid: Left Connected Cards + Center Interactive Phone + Right Connected Cards */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Column (3 Connected Nodes) */}
            <div className="md:col-span-3 space-y-5 text-left">
              
              {/* Node 1: Supported Browsers Pill (Like Zanderio's app pill) */}
              <div className="p-3.5 rounded-2xl bg-white border border-purple-100 shadow-sm card-shadow-hover animate-float flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#7E3FF2] flex items-center justify-center">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">All Browsers Protected</div>
                    <div className="text-[10px] text-slate-500">Chrome • Brave • Incognito</div>
                  </div>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* Node 2: Threats Blocked Stat Card (Like Zanderio's $34k Sales card) */}
              <div className="p-4 rounded-2xl bg-white border border-purple-100 shadow-sm card-shadow-hover animate-float-reverse space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">
                    0ms Latency
                  </span>
                </div>
                <div className="text-2xl font-extrabold text-[#212529] font-mono">1,429+</div>
                <div className="text-xs font-bold text-slate-800">Adult Threats Blocked</div>
                <p className="text-[10px] text-slate-500 leading-snug">
                  Returns 0.0.0.0 NXDOMAIN in RAM before the socket establishes.
                </p>
              </div>

              {/* Node 3: Analytics Trend Chart Card (Like Zanderio's purple graph card) */}
              <div className="p-4 rounded-2xl bg-white border border-purple-100 shadow-sm card-shadow-hover animate-float space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                    <TrendingDown className="w-4 h-4 text-[#7E3FF2]" />
                    <span>Screen Time Drop</span>
                  </div>
                  <span className="text-xs font-mono font-extrabold text-[#7E3FF2] bg-purple-50 px-2 py-0.5 rounded">
                    -78%
                  </span>
                </div>

                {/* Simulated Mini SVG Line Chart */}
                <div className="h-10 w-full flex items-end pt-1">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 120 40">
                    <path
                      d="M 0 5 Q 30 10, 50 20 T 90 28 T 120 38"
                      fill="none"
                      stroke="#7E3FF2"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <circle cx="120" cy="38" r="3.5" fill="#7E3FF2" />
                  </svg>
                </div>

                <div className="pt-1 border-t border-purple-50 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                  <span>Day 1 (4.2h)</span>
                  <span className="text-[#7E3FF2] font-bold">Day 30 (54m)</span>
                </div>
              </div>

            </div>

            {/* Center: Titanium Smartphone Canvas */}
            <div id="interactive-demo" className="md:col-span-6 flex justify-center">
              <InteractivePhone />
            </div>

            {/* Right Column (2 Connected Nodes) */}
            <div className="md:col-span-3 space-y-5 text-left">
              
              {/* Node 4: Active Reel Counter Card (Like Zanderio's Active Cart card) */}
              <div className="p-4 rounded-2xl bg-white border border-purple-100 shadow-sm card-shadow-hover animate-float space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-7 h-7 rounded-lg bg-purple-50 text-[#7E3FF2] flex items-center justify-center">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-[#7E3FF2] font-bold bg-purple-50 px-2 py-0.5 rounded-full">
                    Active Limit
                  </span>
                </div>
                <div className="text-2xl font-extrabold text-[#7E3FF2] font-mono">15 / 15</div>
                <div className="text-xs font-bold text-slate-800">Daily Reels Allowed</div>
                
                {/* Progress bar */}
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#7E3FF2] h-full w-full" />
                </div>
                <p className="text-[10px] text-slate-500 leading-snug">
                  8s breathing pause activates immediately on swipe 15.
                </p>
              </div>

              {/* Node 5: Freedom Vault & Local TUN Node */}
              <div className="p-4 rounded-2xl bg-white border border-purple-100 shadow-sm card-shadow-hover animate-float-reverse space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                    <Lock className="w-3.5 h-3.5 text-[#7E3FF2]" />
                    <span>Freedom Vault</span>
                  </div>
                  <span className="text-[10px] font-mono text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded font-bold">
                    10.0.0.2:53
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FAF8FF] border border-purple-100 text-[11px] text-purple-900 font-medium">
                  "15-minute emergency delay. Urges fade before timer hits zero."
                </div>
                <p className="text-[10px] text-slate-500 leading-snug">
                  96% of relapses prevented by introducing mandatory delay.
                </p>
              </div>

              {/* Node 6: Instant APK Pill */}
              <div className="p-3.5 rounded-2xl bg-white border border-purple-100 shadow-sm card-shadow-hover animate-float flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span className="text-xs font-bold text-slate-800">100% Free Core APK</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">18.4MB</span>
              </div>

            </div>

          </div>

        </div>

        {/* --- PARTNERS MARQUEE BAR (EXACT ZANDERIO STYLE) --- */}
        <div className="mt-14 pt-8 border-t border-purple-100 overflow-hidden">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest font-mono mb-6">
            Active Protection Across All Your Feeds & Browsers
          </p>

          <div className="relative w-full overflow-hidden mask-fade">
            <div className="animate-marquee flex items-center gap-10 text-slate-700 text-sm font-semibold whitespace-nowrap">
              {platforms.concat(platforms).map((p, i) => {
                const IconComponent = p.icon;
                return (
                  <div key={i} className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-200/80 shadow-2xs shrink-0 hover:border-purple-200 transition-colors">
                    <IconComponent className={`w-4 h-4 ${p.color}`} />
                    <span className="font-bold text-slate-800 text-xs sm:text-sm">{p.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
