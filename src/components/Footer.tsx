import React from 'react';
import { ArrowUp, Mail, Terminal } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundFx.playChime();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040609] border-t border-slate-900 pt-16 pb-12 text-slate-400 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900 text-left">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl overflow-hidden border border-cyan-500/40 p-0.5 bg-slate-900">
                <img src="/app-icon-round.png" alt="FocusCrew" className="w-full h-full object-cover rounded-lg" />
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">FocusCrew</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                v1.0.0
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              The uncompromising Android operating system extension for radical focus, 
              anti-pornography DNS defense, short-form habit breaking, and unignorable task alarms.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              100% On-Device • Zero Cloud Telemetry
            </div>
          </div>

          {/* Quick Architecture Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-slate-200 tracking-wider">
              Architecture Pillars
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#titan-fortress" className="hover:text-cyan-400 transition-colors">Titan Anti-Porn Fortress</a>
              </li>
              <li>
                <a href="#reel-counter" className="hover:text-cyan-400 transition-colors">Reel Doomscroll Disruptor</a>
              </li>
              <li>
                <a href="#task-alarm" className="hover:text-cyan-400 transition-colors">Military TaskAlarm Engine</a>
              </li>
              <li>
                <a href="#dns-engine" className="hover:text-cyan-400 transition-colors">Live DNS Packet Lab</a>
              </li>
              <li>
                <a href="#cost-calculator" className="hover:text-cyan-400 transition-colors">Dopamine Cost Calculator</a>
              </li>
            </ul>
          </div>

          {/* Founder & Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-slate-200 tracking-wider">
              Startup Origin & Contact
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Created & engineered by <strong className="text-white">Mohammad Fatim Hasnain</strong> to dismantle 
              algorithmic distraction and empower ambitious human minds.
            </p>
            
            <div className="pt-1 space-y-1 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href="mailto:mfatimhasnain12@gmail.com" className="hover:text-cyan-300 underline">
                  mfatimhasnain12@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                <Terminal className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>Package: com.focuscrew.app</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} FocusCrew. Engineered with Kotlin Native & Jetpack Compose. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
