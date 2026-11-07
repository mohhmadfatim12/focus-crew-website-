import React from 'react';
import { 
  ShieldCheck, 
  MessageSquare, 
  Mail, 
  Download, 
  Sparkles, 
  CheckCircle2, 
  Code2, 
  Heart,
  Lock
} from 'lucide-react';
import { soundFx } from '../utils/audio';

export const FounderStory: React.FC = () => {
  return (
    <section id="creator" className="py-28 bg-[#FAF7FF] border-t border-purple-100 text-left relative overflow-hidden">
      
      {/* Background ambient decorative glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-purple-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill & Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-purple-200 text-xs font-bold text-[#7E3FF2] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOLO CREATOR & OWNER • 100% INDEPENDENT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1D20] tracking-tight font-display">
            “I built FocusCrew because every $99 blocker let me cheat in 3 seconds.”
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            FocusCrew isn't a venture-backed corporate experiment. It was engineered from scratch by Mohammad Fatim Hasnain 
            to solve the exact problem that ruined his own mornings and focus.
          </p>
        </div>

        {/* Main Grid: Founder Profile Card on Left + Detailed Manifesto Story on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Creator Identity Card (Skiper UI Glassmorphic Card) */}
          <div className="lg:col-span-5 rounded-3xl bg-white border border-purple-200/80 p-8 sm:p-10 shadow-sm flex flex-col justify-between relative overflow-hidden card-shadow-hover">
            
            {/* Top decorative badge */}
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-6 border-b border-purple-100">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7E3FF2] to-[#9055FD] text-white flex items-center justify-center font-bold text-xl shadow-md shadow-purple-500/25">
                    FH
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-[#1A1D20] font-display flex items-center gap-1.5">
                      <span>Mohammad Fatim Hasnain</span>
                      <ShieldCheck className="w-4 h-4 text-[#7E3FF2]" />
                    </h3>
                    <p className="text-xs text-slate-500 font-mono">Solo Founder & Software Engineer</p>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-bold">
                  Verified Owner
                </span>
              </div>

              {/* Founder Direct Quote */}
              <div className="p-4 rounded-2xl bg-[#FAF8FF] border border-purple-100 text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                “I didn't build this to sell subscriptions or raise venture capital. I built FocusCrew because I was sick of lying to myself when willpower was at zero.”
              </div>

              {/* Developer Spec Checklist */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between text-xs font-mono py-2 border-b border-slate-100">
                  <span className="text-slate-400">APP IDENTIFIER:</span>
                  <span className="font-bold text-slate-800">com.focuscrew.app</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono py-2 border-b border-slate-100">
                  <span className="text-slate-400">CORE ARCHITECTURE:</span>
                  <span className="font-bold text-purple-700">Native Android 10.0.0.2:53</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono py-2 border-b border-slate-100">
                  <span className="text-slate-400">TELEMETRY / ADS:</span>
                  <span className="font-bold text-emerald-700">0 Bytes • Zero Tracking</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono py-2">
                  <span className="text-slate-400">DIRECT WHATSAPP:</span>
                  <a 
                    href="https://wa.me/923312466885" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bold text-[#7E3FF2] hover:underline"
                  >
                    +92 331 2466885
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="mt-8 pt-6 border-t border-purple-100 space-y-3">
              <a
                href="https://wa.me/923312466885?text=Hi%20Fatim,%20I'm%20using%20FocusCrew"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playChime()}
                className="w-full py-3.5 rounded-2xl bg-[#7E3FF2] hover:bg-[#6C2FE0] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Message Fatim on WhatsApp</span>
              </a>

              <a
                href="mailto:mfatimhasnain12@gmail.com?subject=FocusCrew%20Feedback"
                className="w-full py-3 rounded-2xl bg-[#FAF7FF] hover:bg-purple-100/60 text-slate-700 border border-purple-200 text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#7E3FF2]" />
                <span>mfatimhasnain12@gmail.com</span>
              </a>
            </div>

          </div>

          {/* Right Column: Founder's Story & The 3 Creator Pledges */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-purple-200/80 p-8 sm:p-12 shadow-sm flex flex-col justify-between card-shadow-hover">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#7E3FF2] font-bold tracking-wider">
                <Code2 className="w-4 h-4" />
                <span>THE STORY BEHIND FOCUSCREW</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A1D20] font-display tracking-tight leading-snug">
                Why Commercial Apps Kept Letting Me Down
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                <p>
                  Like millions of ambitious developers and students, I fell into the trap. I would wake up with big goals to build software and study, 
                  only to find myself 45 minutes later mindlessly swiping Instagram Reels or relapsing into adult websites late at night.
                </p>

                <p>
                  I spent hundreds of dollars trying every blocker on the market. <strong>Opal charged me $99 a year. Freedom charged $40 a year.</strong> 
                  Every single one of them had the exact same fatal flaw:
                </p>

                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 font-medium text-xs sm:text-sm">
                  ⚠️ When an urge hits at 11 PM, you are tired. Commercial apps let you open Android settings, toggle one permission, and bypass the block in literally 3 seconds. 
                  They are designed by marketers who don't understand how male psychology and compulsive loops actually operate.
                </div>

                <p>
                  So I opened Android Studio and built the tool I wished existed. An unshakeable, system-hardened fortress:
                </p>
              </div>

              {/* 3 Creator Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-purple-100">
                <div className="p-4 rounded-2xl bg-[#FAF8FF] border border-purple-100 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                    <CheckCircle2 className="w-4 h-4 text-[#7E3FF2]" />
                    <span>100% Free Core</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    No subscriptions. Digital sovereignty and discipline should never be a luxury paywall.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF8FF] border border-purple-100 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                    <Lock className="w-4 h-4 text-[#7E3FF2]" />
                    <span>0 Cloud Storage</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    All DNS parsing happens in your phone's RAM. Your web traffic never leaves your device.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF8FF] border border-purple-100 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                    <Heart className="w-4 h-4 text-[#7E3FF2]" />
                    <span>Personal Support</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Message me directly on WhatsApp anytime. I personally patch new bypasses within 48h.
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom Founder Banner */}
            <div className="mt-8 pt-6 border-t border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-600">
                Created with discipline by <strong className="text-slate-900">Mohammad Fatim Hasnain</strong>.
              </div>

              <a
                href="#download-section"
                onClick={() => soundFx.playShieldTone()}
                className="px-6 py-3 rounded-full bg-[#7E3FF2] hover:bg-[#6C2FE0] text-white text-xs font-bold flex items-center gap-2 shadow-sm transition-all cursor-pointer whitespace-nowrap"
              >
                <Download className="w-4 h-4" />
                <span>Get Fatim's Production APK Free</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
