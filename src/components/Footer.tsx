import React from 'react';
import { ArrowUp, Mail, ShieldCheck, Smartphone } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundFx.playChime();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-purple-100 pt-16 pb-12 text-slate-600 text-xs font-sans text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-purple-100">
          
          {/* Brand Info (Zanderio Column 1) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl overflow-hidden border border-purple-200 bg-[#FAF5FF] p-1 flex items-center justify-center">
                <img src="/app-icon-round.png" alt="FocusCrew" className="w-full h-full object-cover rounded-lg" />
              </div>
              <span className="font-extrabold text-lg text-[#212529] tracking-tight">FocusCrew</span>
            </div>

            <p className="text-slate-500 text-xs leading-relaxed max-w-sm">
              The #1 Android digital wellness suite that eliminates pornography at the DNS level, 
              dismantles short-form doomscrolling, and wakes you to your goals with unignorable task alarms.
            </p>

            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2 text-slate-700">
                <Mail className="w-3.5 h-3.5 text-[#7E3FF2] shrink-0" />
                <a href="mailto:mfatimhasnain12@gmail.com" className="hover:text-[#7E3FF2] underline font-medium">
                  mfatimhasnain12@gmail.com
                </a>
              </div>
              <div className="text-slate-400 text-[11px] font-mono">
                Engineered with Kotlin Native & Jetpack Compose
              </div>
            </div>
          </div>

          {/* Links Column 1: FocusCrew */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              FocusCrew
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#features" className="hover:text-[#7E3FF2] transition-colors">About App</a></li>
              <li><a href="#titan-fortress" className="hover:text-[#7E3FF2] transition-colors">Titan Shield</a></li>
              <li><a href="#dns-engine" className="hover:text-[#7E3FF2] transition-colors">DNS Lab</a></li>
              <li><a href="#faq" className="hover:text-[#7E3FF2] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Links Column 2: Features */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Features
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#features" className="hover:text-[#7E3FF2] transition-colors">Reel Counter</a></li>
              <li><a href="#features" className="hover:text-[#7E3FF2] transition-colors">TaskAlarm</a></li>
              <li><a href="#features" className="hover:text-[#7E3FF2] transition-colors">Freedom Vault</a></li>
              <li><a href="#features" className="hover:text-[#7E3FF2] transition-colors">SafeSearch Enforcer</a></li>
            </ul>
          </div>

          {/* Links Column 3: Platform */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Platform
            </h4>
            <ul className="space-y-2 text-xs">
              <li><span className="text-slate-500">Android 8.0 - 15</span></li>
              <li><span className="text-slate-500">Local VPN Interface</span></li>
              <li><span className="text-slate-500">Zero Cloud Routing</span></li>
              <li><span className="text-slate-500">18.4 MB Binary</span></li>
            </ul>
          </div>

          {/* Trust Badges (Zanderio Style) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Verified
            </h4>
            <div className="space-y-2">
              <div className="p-2.5 rounded-xl bg-[#FAF8FF] border border-purple-200/80 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="text-[11px] font-bold text-slate-800">100% On-Device</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#FAF8FF] border border-purple-200/80 flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-[#7E3FF2]" />
                <span className="text-[11px] font-bold text-slate-800">Android 15 Ready</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            Copyright © 2026 FocusCrew. All rights reserved. Built for radical focus.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 hover:text-[#7E3FF2] hover:bg-purple-50 transition-all cursor-pointer shadow-2xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
