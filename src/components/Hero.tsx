import React from 'react';
import { 
  ShieldCheck, 
  Download, 
  ArrowRight, 
  Cpu, 
  Lock, 
  CheckCircle2, 
  Sparkles,
  Terminal,
  Activity
} from 'lucide-react';
import { InteractivePhone } from './InteractivePhone';
import { soundFx } from '../utils/audio';

interface HeroProps {
  onOpenDownload: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Background Radial Glow & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition & Typography */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Version & Security Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-mono font-bold text-slate-300">
                FOCUSCREW v1.0.0
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-xs font-mono text-cyan-400 flex items-center gap-1 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                100% On-Device Protection
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Reclaim your mind from{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 text-glow-cyan">
                algorithmic dopamine.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              An uncompromising Android operating system extension engineered to dismantle porn addiction, 
              halt short-form doomscrolling, and lock your daily mission into unignorable task alarms. 
              Zero servers. Zero cloud tracking. 100% on-device sovereignty.
            </p>

            {/* Engineering Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <Cpu className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white font-mono">Local DNS VPN Socket</h4>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    Intercepts port 53 locally on 10.0.0.2 with zero cloud transmission and 0ms latency.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <Lock className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white font-mono">15-Min Vault Delay</h4>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    Emergency unlock timer forces a biological pause that breaks the impulse-relapse cycle.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <Activity className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white font-mono">Reel Counter Gate</h4>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    Counts Instagram, Shorts & TikTok swipes with mindful friction interrupts.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <Terminal className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white font-mono">Unignorable TaskAlarm</h4>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    Full-screen wake lock activity that overrides phone sleep with math challenges.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => {
                  soundFx.playShieldTone();
                  onOpenDownload();
                }}
                className="group flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-400/35 transition-all cursor-pointer active:scale-98"
              >
                <Download className="w-5 h-5 text-slate-950" />
                <span>Download FocusCrew APK (Direct)</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#interactive-demo"
                onClick={() => soundFx.playChime()}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800/90 text-slate-200 border border-slate-700/80 font-bold text-sm transition-all"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Explore Live Simulator</span>
              </a>
            </div>

            {/* Trust Markers Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Android 8.0 to Android 15
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Zero Battery Drain (&lt;1%)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Zero Cloud Accounts Required
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Phone Simulator */}
          <div id="interactive-demo" className="lg:col-span-5 flex justify-center lg:justify-end">
            <InteractivePhone />
          </div>

        </div>
      </div>
    </section>
  );
};
