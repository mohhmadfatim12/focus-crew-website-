import React from 'react';
import { 
  ShieldCheck, 
  Smartphone, 
  ArrowRight, 
  Zap, 
  CheckCircle2, 
  AlarmClock, 
  Lock, 
  Headphones, 
  Sparkles,
  EyeOff,
  Flame
} from 'lucide-react';

export const DualFeatureBento: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white border-t border-[#E5DFD3] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EAD8] border border-[#E2CEB2] text-xs font-semibold text-[#A37A3E] shadow-2xs">
            <Zap className="w-3.5 h-3.5" />
            <span>SYSTEM-LEVEL HABIT DESTRUCTION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202621] tracking-tight">
            Engineered to Destroy the Twin Dopamine Traps: <br className="hidden sm:inline" />
            <span className="text-[#A37A3E]">Social Media Doomscrolling & Adult Content</span>
          </h2>

          <p className="text-sm sm:text-base text-[#5E665F] leading-relaxed">
            Standard app blockers rely on your willpower when it is already depleted at 11:30 PM. FocusCrew operates at the Android OS layer with unskippable cognitive friction, hardware-level alarms, and instant DNS containment.
          </p>
        </div>

        {/* Primary 2-Column Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Card 1: Titan Anti-Porn Fortress */}
          <div className="rounded-3xl bg-[#FBF9F5] border border-[#E5DFD3] p-8 sm:p-10 flex flex-col justify-between shadow-xs card-shadow-hover relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#A37A3E]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#A37A3E]/20 transition-all duration-500" />

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2CEB2] text-[#A37A3E] text-xs font-semibold shadow-2xs mb-6">
                <ShieldCheck className="w-3.5 h-3.5 text-[#284B39]" />
                <span>Zero-Relapse Pornography Elimination</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#202621] tracking-tight">
                Titan Anti-Porn Fortress
              </h3>

              <p className="mt-2 text-sm text-[#5E665F] leading-relaxed">
                Complete, zero-leak adult content neutralization across every browser, incognito session, Reddit in-app viewer, and Twitter feed.
              </p>

              {/* Numbered Feature List */}
              <ol className="mt-6 space-y-3.5 text-xs sm:text-sm text-[#202621]">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#F5EAD8] text-[#A37A3E] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono">1</span>
                  <span><strong>On-Device RAM Bloom Filter:</strong> Evaluates 154,820 adult domains and keyword filters in under 0.18ms before any data packet leaves your phone.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#F5EAD8] text-[#A37A3E] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono">2</span>
                  <span><strong>SafeSearch VIP Lock:</strong> Permanently enforces Strict SafeSearch across Google, Bing, DuckDuckGo, Yahoo, and YouTube Restricted Mode.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#F5EAD8] text-[#A37A3E] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono">3</span>
                  <span><strong>Incognito & Private Tab Defense:</strong> Operates at the Android socket layer so incognito browsing and guest profiles cannot bypass protection.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#F5EAD8] text-[#A37A3E] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono">4</span>
                  <span><strong>100% On-Device Privacy:</strong> Zero external VPN proxies, zero cloud databases, and zero tracking logs. Your private searches never leave your device.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#F5EAD8] text-[#A37A3E] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono">5</span>
                  <span><strong>Late-Night Curfew Guard:</strong> Automatically stiffens behavioral barriers between 11 PM and 5 AM when relapse vulnerability peaks.</span>
                </li>
              </ol>
            </div>

            {/* Embedded Mini-Preview Card */}
            <div className="mt-8 pt-6 border-t border-[#E5DFD3] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="p-3.5 rounded-2xl bg-white border border-[#E5DFD3] shadow-2xs w-full sm:w-auto flex-1">
                <div className="text-[10px] font-mono uppercase text-[#5E665F] font-bold">RAM Filter Telemetry</div>
                <div className="text-xs font-bold text-[#A37A3E] mt-0.5 font-mono flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#284B39] animate-pulse" />
                  154,820 RULES ARMED • 0.18ms LATENCY
                </div>
              </div>

              <a
                href="#interactive-demo"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#A37A3E] hover:bg-[#8A642E] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Test Live Shield</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Reel & Shorts Doomscroll Killer */}
          <div className="rounded-3xl bg-[#FBF9F5] border border-[#E5DFD3] p-8 sm:p-10 flex flex-col justify-between shadow-xs card-shadow-hover relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#A37A3E]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#A37A3E]/20 transition-all duration-500" />

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2CEB2] text-[#A37A3E] text-xs font-semibold shadow-2xs mb-6">
                <Smartphone className="w-3.5 h-3.5 text-[#A37A3E]" />
                <span>Short-Form Video Addiction Stopper</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#202621] tracking-tight">
                Reel & Shorts Doomscroll Killer
              </h3>

              <p className="mt-2 text-sm text-[#5E665F] leading-relaxed">
                Stops algorithmic dopamine hijacking in Instagram Reels, YouTube Shorts, and TikTok before you lose 2 hours without noticing.
              </p>

              {/* Numbered Feature List */}
              <ol className="mt-6 space-y-3.5 text-xs sm:text-sm text-[#202621]">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#F5EAD8] text-[#A37A3E] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono">1</span>
                  <span><strong>Floating Reel Counter HUD:</strong> Transparent on-screen counter tracks your vertical swipes in real-time inside Reels, Shorts, and TikTok.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#F5EAD8] text-[#A37A3E] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono">2</span>
                  <span><strong>8-Second Trance Breaker Gate:</strong> Reaching your daily reel cap triggers a full-screen mindful breathing pause that resets prefrontal cortex awareness.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#F5EAD8] text-[#A37A3E] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono">3</span>
                  <span><strong>Weekly Reel Schedules:</strong> Set strict allowances for productive weekdays (e.g. 10 reels) and flexible caps for weekends.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#F5EAD8] text-[#A37A3E] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono">4</span>
                  <span><strong>DMs & Messaging Fully Unaffected:</strong> Chatting with friends, business messages, notifications, and phone calls remain 100% accessible.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#F5EAD8] text-[#A37A3E] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono">5</span>
                  <span><strong>Zero Screen Recording:</strong> Uses lightweight Android window accessibility callbacks with zero camera or screen-recording permissions.</span>
                </li>
              </ol>
            </div>

            {/* Embedded Mini-Preview Card */}
            <div className="mt-8 pt-6 border-t border-[#E5DFD3] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="p-3.5 rounded-2xl bg-white border border-[#E5DFD3] shadow-2xs w-full sm:w-auto flex-1">
                <div className="text-[10px] font-mono uppercase text-[#5E665F] font-bold">Friction Engine</div>
                <div className="text-xs font-bold text-[#202621] mt-0.5 font-mono flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#284B39]" />
                  15 REELS MAX • 8S MINDFUL PAUSE
                </div>
              </div>

              <a
                href="#cost-calculator"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#A37A3E] hover:bg-[#8A642E] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Calculate Time Lost</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Secondary 3-Card Bento Row: Core Startup Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Bento Card 3: Unskippable Task Alarm */}
          <div className="rounded-3xl bg-[#FBF9F5] border border-[#E5DFD3] p-6 sm:p-7 shadow-xs card-shadow-hover space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-[#EAF1EC] text-[#284B39] flex items-center justify-center">
                <AlarmClock className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-bold bg-[#EAF1EC] text-[#284B39] px-2.5 py-1 rounded-full">
                COGNITIVE WAKE-UP
              </span>
            </div>
            
            <h4 className="text-lg font-extrabold text-[#202621]">The Unskippable Task Alarm</h4>
            <p className="text-xs text-[#5E665F] leading-relaxed">
              Standard alarms get snoozed in a half-asleep trance. FocusCrew locks your screen with cognitive math challenges or mandatory 30-shake sensor tests that force your conscious mind awake.
            </p>
            
            <div className="pt-2 border-t border-[#E5DFD3] flex items-center justify-between text-[11px] font-mono text-[#284B39] font-bold">
              <span>Overrides DND & Silent Mode</span>
              <span>Home Widget Sync</span>
            </div>
          </div>

          {/* Bento Card 4: The Freedom Vault */}
          <div className="rounded-3xl bg-[#FBF9F5] border border-[#E5DFD3] p-6 sm:p-7 shadow-xs card-shadow-hover space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-[#F5EAD8] text-[#A37A3E] flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-bold bg-[#F5EAD8] text-[#A37A3E] px-2.5 py-1 rounded-full">
                15-MIN URGE BUFFER
              </span>
            </div>
            
            <h4 className="text-lg font-extrabold text-[#202621]">Freedom Vault Tamper Defense</h4>
            <p className="text-xs text-[#5E665F] leading-relaxed">
              Protected by a 4-digit Master Security PIN and Knox-grade anti-uninstall protection. Turning off the shield requires an unskippable 15-minute cooldown where 96% of relapse cravings naturally subside.
            </p>
            
            <div className="pt-2 border-t border-[#E5DFD3] flex items-center justify-between text-[11px] font-mono text-[#A37A3E] font-bold">
              <span>Settings Lockout Guard</span>
              <span>Zero Impulsive Relapse</span>
            </div>
          </div>

          {/* Bento Card 5: 40Hz Audio & Ulysses Lock */}
          <div className="rounded-3xl bg-[#FBF9F5] border border-[#E5DFD3] p-6 sm:p-7 shadow-xs card-shadow-hover space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-[#F5EAD8] text-[#A37A3E] flex items-center justify-center">
                <Headphones className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-bold bg-[#F5EAD8] text-[#A37A3E] px-2.5 py-1 rounded-full">
                GAMMA FLOW STATE
              </span>
            </div>
            
            <h4 className="text-lg font-extrabold text-[#202621]">40Hz Binaural Audio & Ulysses Lock</h4>
            <p className="text-xs text-[#5E665F] leading-relaxed">
              Synthesizes real-time 40Hz Gamma waves to induce deep neural focus, paired with a Distraction Journal dialog that intercepts fleeting impulses so you stay in flow state for hours.
            </p>
            
            <div className="pt-2 border-t border-[#E5DFD3] flex items-center justify-between text-[11px] font-mono text-[#202621] font-bold">
              <span>Distraction Journal</span>
              <span>BrainPal Companion</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default DualFeatureBento;

