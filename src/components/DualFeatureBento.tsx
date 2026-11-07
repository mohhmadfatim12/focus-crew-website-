import React from 'react';
import { ShieldCheck, Smartphone, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

export const DualFeatureBento: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white border-t border-purple-100 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Zanderio Style) */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-[#7E3FF2] shadow-2xs">
            <Zap className="w-3.5 h-3.5" />
            <span>TWO UNBREAKABLE PILLARS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#212529] tracking-tight">
            Designed for real human willpower, not ideal scenarios.
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Most blockers assume you'll make rational choices when you're tired at 11 PM. FocusCrew knows you won't.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Titan Anti-Porn Fortress */}
          <div className="rounded-3xl bg-[#FAF7FF] border border-purple-100 p-8 sm:p-10 flex flex-col justify-between shadow-xs card-shadow-hover relative overflow-hidden group">
            {/* Top ambient glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-300/30 transition-all duration-500" />

            <div>
              {/* Pill badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-purple-200 text-[#7E3FF2] text-xs font-semibold shadow-2xs mb-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>On-Device 24/7 Protection</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#212529] tracking-tight">
                Titan Anti-Porn Fortress
              </h3>

              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Blocks porn everywhere on your phone. Even in incognito mode, Reddit's in-app browser, and secondary apps.
              </p>

              {/* Numbered Feature List (Clean & Direct) */}
              <ol className="mt-6 space-y-3.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-purple-100 text-[#7E3FF2] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono">1</span>
                  <span><strong>Intercepts threats right on your phone</strong> with zero cloud lag before a single packet leaves.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-purple-100 text-[#7E3FF2] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono">2</span>
                  <span><strong>150,000+ adult domains and keyword filters</strong> checked in RAM in under 0.2ms.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-purple-100 text-[#7E3FF2] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono">3</span>
                  <span><strong>Forces strict SafeSearch</strong> across Google, Bing, DuckDuckGo, and YouTube.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-purple-100 text-[#7E3FF2] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono">4</span>
                  <span><strong>Bypass-proof architecture:</strong> private incognito tabs and third-party browsers can't evade it.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-purple-100 text-[#7E3FF2] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono">5</span>
                  <span><strong>100% on-device privacy:</strong> your private browsing history never touches an outside server.</span>
                </li>
              </ol>
            </div>

            {/* Embedded Mini-Preview Card */}
            <div className="mt-8 pt-6 border-t border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="p-3.5 rounded-2xl bg-white border border-purple-100 shadow-2xs w-full sm:w-auto flex-1">
                <div className="text-[10px] font-mono uppercase text-slate-400 font-bold">Device Fortress Status</div>
                <div className="text-xs font-bold text-[#7E3FF2] mt-0.5 font-mono flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  AUTONOMOUS ON-DEVICE SHIELD
                </div>
              </div>

              <a
                href="#interactive-demo"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#7E3FF2] hover:bg-[#6C2FE0] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Test Live Fortress</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Reel & Shorts Doomscroll Killer */}
          <div className="rounded-3xl bg-[#FAF7FF] border border-purple-100 p-8 sm:p-10 flex flex-col justify-between shadow-xs card-shadow-hover relative overflow-hidden group">
            {/* Top ambient glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-300/30 transition-all duration-500" />

            <div>
              {/* Pill badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-purple-200 text-[#7E3FF2] text-xs font-semibold shadow-2xs mb-6">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Short-Form Habit Breaker</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#212529] tracking-tight">
                Reel & Shorts Doomscroll Killer
              </h3>

              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Stops the mindless scroll before you lose 2 hours without even noticing.
              </p>

              {/* Numbered Feature List (Clean & Direct) */}
              <ol className="mt-6 space-y-3.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-purple-100 text-[#7E3FF2] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono">1</span>
                  <span><strong>Counts every swipe</strong> inside Instagram Reels, YouTube Shorts, and TikTok in real time.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-purple-100 text-[#7E3FF2] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono">2</span>
                  <span><strong>Set your own daily limit:</strong> pick exactly how many reels you allow yourself (e.g. 15/day).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-purple-100 text-[#7E3FF2] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono">3</span>
                  <span><strong>8-second breathing gate</strong> dims the screen and breaks the hypnotic trance when limit is reached.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-purple-100 text-[#7E3FF2] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono">4</span>
                  <span><strong>Messaging stays 100% functional:</strong> DMs, notifications, and calls remain unaffected.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-purple-100 text-[#7E3FF2] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono">5</span>
                  <span><strong>Zero spyware:</strong> uses Android window events without recording your screen or keystrokes.</span>
                </li>
              </ol>
            </div>

            {/* Embedded Mini-Preview Card */}
            <div className="mt-8 pt-6 border-t border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="p-3.5 rounded-2xl bg-white border border-purple-100 shadow-2xs w-full sm:w-auto flex-1">
                <div className="text-[10px] font-mono uppercase text-slate-400 font-bold">Friction Engine</div>
                <div className="text-xs font-bold text-slate-900 mt-0.5 font-mono flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  15 REELS MAX • 8S MINDFUL PAUSE
                </div>
              </div>

              <a
                href="#cost-calculator"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#7E3FF2] hover:bg-[#6C2FE0] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Calculate Time Lost</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
