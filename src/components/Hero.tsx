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
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-white">
      
      {/* Subtle Light Grid Pattern */}
      <div className="absolute inset-0 bg-light-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Version & Security Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 shadow-2xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-xs font-mono font-bold text-slate-900">
                FOCUSCREW v1.0.0
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-xs font-mono text-blue-700 flex items-center gap-1 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                100% On-Device Architecture
              </span>
            </div>

            {/* Headline (Crisp, High-Contrast Black Ink) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Reclaim your mind from{' '}
              <span className="text-blue-600">
                algorithmic dopamine.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              An uncompromising Android operating system extension engineered to dismantle pornography addiction, 
              halt short-form doomscrolling, and lock your daily mission into unignorable task alarms. 
              Zero servers. Zero cloud tracking. 100% on-device sovereignty.
            </p>

            {/* Engineering Highlights Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                <div className="p-2 rounded-xl bg-blue-100 text-blue-700 shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 font-mono">Local DNS VPN Socket</h4>
                  <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                    Intercepts port 53 locally on 10.0.0.2 with zero cloud transmission and 0ms latency.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                <div className="p-2 rounded-xl bg-rose-100 text-rose-700 shrink-0">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 font-mono">15-Min Vault Delay</h4>
                  <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                    Emergency unlock timer forces a biological pause that breaks the impulse-relapse cycle.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                <div className="p-2 rounded-xl bg-indigo-100 text-indigo-700 shrink-0">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 font-mono">Reel Counter Gate</h4>
                  <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                    Tracks Instagram, Shorts & TikTok swipes with mindful friction interrupts.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                <div className="p-2 rounded-xl bg-amber-100 text-amber-700 shrink-0">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 font-mono">Unignorable TaskAlarm</h4>
                  <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                    Full-screen wake lock activity that overrides phone sleep with math challenges.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
              <button
                onClick={() => {
                  soundFx.playShieldTone();
                  onOpenDownload();
                }}
                className="group flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-sm hover:shadow transition-all cursor-pointer active:scale-98"
              >
                <Download className="w-4 h-4 text-white" />
                <span>Download FocusCrew APK</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 group-hover:text-white transition-all" />
              </button>

              <a
                href="#interactive-demo"
                onClick={() => soundFx.playChime()}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 font-bold text-sm transition-all"
              >
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Explore Live Simulator</span>
              </a>
            </div>

            {/* Trust Markers Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Android 8.0 to Android 15
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Zero Battery Drain (&lt;1%)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
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
