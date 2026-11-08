import React from 'react';
import { 
  ShieldCheck, 
  Smartphone, 
  ArrowRight, 
  AlarmClock, 
  Lock, 
  Headphones, 
  CheckCircle2
} from 'lucide-react';

export const DualFeatureBento: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-[#F7F5F0] border-b border-[#E5E2DA] text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#9E6F28]">
            Core Habit Architecture
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1D1A] tracking-tight">
            Engineered to eliminate two specific dopamine loops.
          </h2>

          <p className="text-sm sm:text-base text-[#525853] leading-relaxed">
            Most app blockers present a gentle reminder you can dismiss in two seconds. FocusCrew introduces unskippable physical and system-level friction precisely when willpower is exhausted.
          </p>
        </div>

        {/* Primary 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Pillar 1: Anti-Porn Fortress */}
          <div className="pro-card p-8 sm:p-10 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E2DA]">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#234E37]">
                  <ShieldCheck className="w-4 h-4 text-[#234E37]" />
                  <span>Pillar 01 — Zero-Relapse Defense</span>
                </div>
                <span className="status-tag bg-[#EBF2ED] text-[#234E37] border border-[#C8DCD0]">
                  154,820 RAM Rules
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#1A1D1A]">
                  Titan Anti-Porn Fortress
                </h3>
                <p className="mt-2 text-sm text-[#525853] leading-relaxed">
                  Interprets network queries on-device before socket connection. Blocks adult domains across Chrome, Brave, Samsung Internet, Reddit webviews, and private incognito tabs.
                </p>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-[#1A1D1A]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#234E37] shrink-0 mt-0.5" />
                  <span><strong>On-Device RAM Bloom Filter:</strong> Queries verified in 0.18ms before any data packet leaves your phone.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#234E37] shrink-0 mt-0.5" />
                  <span><strong>Strict SafeSearch Lock:</strong> Automatically enforces restricted mode across Google, Bing, DuckDuckGo, and YouTube.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#234E37] shrink-0 mt-0.5" />
                  <span><strong>Incognito Neutralization:</strong> Operates at the Android socket layer so private windows cannot bypass protection.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#234E37] shrink-0 mt-0.5" />
                  <span><strong>100% On-Device Privacy:</strong> No remote proxies, no external databases. Your browsing never leaves your phone.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5E2DA] flex items-center justify-between text-xs font-mono text-[#525853]">
              <span>Hardware-Level Enforcement</span>
              <a href="#interactive-demo" className="text-[#9E6F28] hover:underline font-semibold flex items-center gap-1">
                <span>Test filter</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Pillar 2: Reel & Shorts Doomscroll Killer */}
          <div className="pro-card p-8 sm:p-10 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E2DA]">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#9E6F28]">
                  <Smartphone className="w-4 h-4 text-[#9E6F28]" />
                  <span>Pillar 02 — Short-Form Interception</span>
                </div>
                <span className="status-tag bg-[#F5EAD8] text-[#9E6F28] border border-[#E5DFD3]">
                  Real-Time Counter
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#1A1D1A]">
                  Reel & Shorts Doomscroll Killer
                </h3>
                <p className="mt-2 text-sm text-[#5E665F] leading-relaxed">
                  Stops mindless vertical scrolling in Instagram Reels, YouTube Shorts, and TikTok before an intended 5-minute break turns into 2 hours of lost focus.
                </p>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-[#1A1D1A]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#9E6F28] shrink-0 mt-0.5" />
                  <span><strong>Floating Reel Counter HUD:</strong> A discreet on-screen tally counts your swipes inside short-form players in real time.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#9E6F28] shrink-0 mt-0.5" />
                  <span><strong>8-Second Trance Breaker:</strong> Hitting your daily limit dims the feed and requires an 8-second mindful breathing pause.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#9E6F28] shrink-0 mt-0.5" />
                  <span><strong>Weekly Custom Schedules:</strong> Configure strict caps for weekdays (e.g., 10 reels) and flexible rules for weekends.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#9E6F28] shrink-0 mt-0.5" />
                  <span><strong>Preserves Essential Features:</strong> Direct messages, notifications, and calls remain fully accessible.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5E2DA] flex items-center justify-between text-xs font-mono text-[#525853]">
              <span>Window Accessibility Events</span>
              <a href="#friction-science" className="text-[#9E6F28] hover:underline font-semibold flex items-center gap-1">
                <span>View science</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Secondary Capabilities: 3 Clean Architectural Modules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Module 1: Task Alarm */}
          <div className="pro-card p-6 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#525853]">Morning Wakeup</span>
              <AlarmClock className="w-4 h-4 text-[#234E37]" />
            </div>
            <h4 className="text-base font-bold text-[#1A1D1A]">Unskippable Task Alarm</h4>
            <p className="text-xs text-[#525853] leading-relaxed">
              Overrides silent and Do Not Disturb modes. Dismissal requires solving mental math or 30 physical phone shakes to eliminate sleep grogginess.
            </p>
          </div>

          {/* Module 2: Freedom Vault */}
          <div className="pro-card p-6 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#525853]">Anti-Tamper</span>
              <Lock className="w-4 h-4 text-[#9E6F28]" />
            </div>
            <h4 className="text-base font-bold text-[#1A1D1A]">15-Minute Freedom Vault</h4>
            <p className="text-xs text-[#525853] leading-relaxed">
              Protected by a Master PIN. Turning off protection starts a mandatory 15-minute countdown, giving chemical urge spikes time to dissipate.
            </p>
          </div>

          {/* Module 3: 40Hz Binaural Engine */}
          <div className="pro-card p-6 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#525853]">Neural Flow</span>
              <Headphones className="w-4 h-4 text-[#9E6F28]" />
            </div>
            <h4 className="text-base font-bold text-[#1A1D1A]">40Hz Binaural Audio</h4>
            <p className="text-xs text-[#525853] leading-relaxed">
              Locally synthesized Gamma frequencies to stimulate working memory during deep coding sessions, paired with a Distraction Journal dialog.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
export default DualFeatureBento;
