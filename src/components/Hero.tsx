import React from 'react';
import { 
  ShieldCheck, 
  ArrowDownRight, 
  ArrowDownLeft, 
  Lock, 
  TrendingDown 
} from 'lucide-react';
import { InteractivePhone } from './InteractivePhone';

interface HeroProps {
  onOpenDownload: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload }) => {
  const platforms = [
    { name: 'Instagram Reels', icon: '📸' },
    { name: 'YouTube Shorts', icon: '▶️' },
    { name: 'TikTok', icon: '🎵' },
    { name: 'Google Chrome', icon: '🌐' },
    { name: 'Brave Browser', icon: '🦁' },
    { name: 'Reddit', icon: '🤖' },
    { name: 'Twitter / X', icon: '🐦' },
    { name: 'Telegram', icon: '✈️' },
    { name: 'Android 15', icon: '⚡' }
  ];

  return (
    <section className="relative pt-28 pb-14 md:pt-36 md:pb-16 overflow-hidden bg-white text-center">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Floating Callout Badges with Micro-arrows (Zanderio Style) */}
        <div className="relative max-w-3xl mx-auto mb-4 flex justify-between items-center px-4 sm:px-12 pointer-events-none">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold shadow-xs rotate-[-3deg] pointer-events-auto animate-float">
            <span>🛡️ System-Level DNS Shield</span>
            <ArrowDownRight className="w-3.5 h-3.5 text-emerald-600" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-[#7E3FF2] text-xs font-semibold shadow-xs rotate-[3deg] pointer-events-auto animate-float-reverse">
            <ArrowDownLeft className="w-3.5 h-3.5 text-[#7E3FF2]" />
            <span>⚡ Zero-Relapse Machine</span>
          </div>
        </div>

        {/* Centered H1 (Human, Direct, Unapologetic) */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#212529] max-w-4xl mx-auto leading-[1.14]">
          The Android Blocker That{' '}
          <span className="text-[#7E3FF2]">Actually Works.</span>
        </h1>

        {/* Subtitle (Honest, Human, Punchy) */}
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Most blockers give you an easy 15-minute bypass. FocusCrew doesn't. 
          Block porn across all browsers, put a hard stop on Instagram Reels, and wake up to an alarm you can't snooze in your sleep.
        </p>

        {/* Hook */}
        <p className="mt-3 text-sm text-slate-800 font-medium">
          Zero subscriptions. Zero cloud servers.{' '}
          <button 
            onClick={onOpenDownload} 
            className="text-[#7E3FF2] hover:text-[#6C2FE0] font-bold underline cursor-pointer"
          >
            Download the free Android APK →
          </button>
        </p>

        {/* --- CENTRAL CONNECTED DEVICE CANVAS --- */}
        <div className="mt-12 relative rounded-3xl bg-[#FAF7FF] border border-purple-100 p-6 sm:p-10 lg:p-12 shadow-sm overflow-hidden">
          
          {/* Animated SVG Connector Lines with Moving Glow Points */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block opacity-40" viewBox="0 0 1000 650" fill="none">
            <path d="M 220 180 C 350 180, 380 260, 500 280" stroke="#7E3FF2" strokeWidth="1.5" className="animate-line-flow" />
            <path d="M 780 180 C 650 180, 620 260, 500 280" stroke="#7E3FF2" strokeWidth="1.5" className="animate-line-flow" />
            <path d="M 220 480 C 350 480, 380 380, 500 360" stroke="#7E3FF2" strokeWidth="1.5" className="animate-line-flow" />
            <path d="M 780 480 C 650 480, 620 380, 500 360" stroke="#7E3FF2" strokeWidth="1.5" className="animate-line-flow" />
            
            {/* Animated glowing dots pulsing along the paths */}
            <circle cx="350" cy="210" r="3" fill="#7E3FF2" className="animate-ping" />
            <circle cx="650" cy="210" r="3" fill="#7E3FF2" className="animate-ping" />
            <circle cx="350" cy="440" r="3" fill="#7E3FF2" className="animate-ping" />
            <circle cx="650" cy="440" r="3" fill="#7E3FF2" className="animate-ping" />
          </svg>

          {/* Grid Layout: Left Floating Cards + Central Phone + Right Floating Cards */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Floating Cards with Animation */}
            <div className="md:col-span-3 space-y-6 text-left">
              
              {/* Card 1: Local Loopback */}
              <div className="p-4 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-2 card-shadow-hover animate-float">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold">Socket Ingress</span>
                  <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">
                    0ms Latency
                  </span>
                </div>
                <div className="text-xl font-extrabold text-[#212529] font-mono">10.0.0.2:53</div>
                <p className="text-[11px] text-slate-500">
                  Filters packets directly in RAM. Doesn't route through any remote VPN company.
                </p>
                <div className="pt-1.5 border-t border-purple-50 flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <span>Chrome</span>
                  <span className="text-slate-300">•</span>
                  <span>Brave</span>
                  <span className="text-slate-300">•</span>
                  <span>Incognito</span>
                </div>
              </div>

              {/* Card 2: Screen Time Chart */}
              <div className="p-4 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-2 card-shadow-hover animate-float-reverse">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <TrendingDown className="w-4 h-4 text-[#7E3FF2]" />
                  <span>Reel Time Slashed</span>
                </div>
                <div className="text-2xl font-extrabold text-[#7E3FF2] font-mono">-78%</div>
                <div className="w-full h-1.5 bg-purple-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#7E3FF2] rounded-full w-[78%] transition-all duration-1000" />
                </div>
                <p className="text-[10px] text-slate-500">
                  Friction gates snap you out of algorithmic hypnosis when you hit 15 reels.
                </p>
              </div>

            </div>

            {/* Center Phone Simulator */}
            <div id="interactive-demo" className="md:col-span-6 flex justify-center">
              <InteractivePhone />
            </div>

            {/* Right Floating Cards with Animation */}
            <div className="md:col-span-3 space-y-6 text-left">
              
              {/* Card 3: Threats Blocked */}
              <div className="p-4 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-2 card-shadow-hover animate-float">
                <div className="flex items-center justify-between">
                  <div className="w-7 h-7 rounded-lg bg-purple-50 text-[#7E3FF2] flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="text-2xl font-extrabold text-[#212529] font-mono">1,429+</div>
                <div className="text-xs font-bold text-slate-800">Adult Queries Blocked</div>
                <p className="text-[10px] text-slate-500">
                  Instantly returns 0.0.0.0 NXDOMAIN before the page even begins to load.
                </p>
              </div>

              {/* Card 4: Freedom Vault Prompt */}
              <div className="p-4 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-2 card-shadow-hover animate-float-reverse">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-purple-50 text-[#7E3FF2] flex items-center justify-center">
                    <Lock className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Freedom Vault</span>
                </div>
                <div className="p-2 rounded-xl bg-[#FAF8FF] border border-purple-100 text-[11px] text-purple-900 font-medium">
                  "15-minute unlock timer active. Take a breath and walk away."
                </div>
                <p className="text-[10px] text-slate-500">
                  The urge to unblock peaks in 10 minutes. The 15-minute wait outlasts it every time.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* --- CONTINUOUS LOGO MARQUEE (ZANDERIO STYLE ANIMATION) --- */}
        <div className="mt-14 pt-8 border-t border-purple-100 overflow-hidden">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest font-mono mb-6">
            Active Protection Across All Your Feeds & Browsers
          </p>

          <div className="relative w-full overflow-hidden mask-fade">
            <div className="animate-marquee flex items-center gap-12 text-slate-700 text-sm font-semibold whitespace-nowrap">
              {platforms.concat(platforms).map((p, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 shadow-2xs shrink-0">
                  <span className="text-base">{p.icon}</span>
                  <span>{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
