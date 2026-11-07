import React from 'react';
import { ShieldCheck, Smartphone, ArrowRight } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const DualFeatureBento: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white border-t border-purple-100 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Titan Anti-Porn Fortress (Zanderio Style) */}
          <div className="rounded-3xl bg-[#FAF7FF] border border-purple-100 p-8 sm:p-10 flex flex-col justify-between shadow-sm card-shadow-hover">
            <div>
              {/* Pill badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-purple-200 text-[#7E3FF2] text-xs font-semibold shadow-2xs mb-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>On your device, 24/7</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#212529] tracking-tight">
                Titan Anti-Porn Fortress
              </h3>

              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Eliminates adult content at the raw socket level across every browser, incognito window, and in-app webview.
              </p>

              {/* Numbered Feature List */}
              <ol className="mt-6 space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-[#7E3FF2] font-mono">1.</span>
                  <span>Intercepts UDP queries on 10.0.0.2:53 before packets reach the wire</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-[#7E3FF2] font-mono">2.</span>
                  <span>Over 150,000 adult domains and regex keyword signatures checked in RAM</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-[#7E3FF2] font-mono">3.</span>
                  <span>Forces strict SafeSearch across Google, Bing, DuckDuckGo & YouTube</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-[#7E3FF2] font-mono">4.</span>
                  <span>Impossible to bypass with alternative browsers or private incognito tabs</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-[#7E3FF2] font-mono">5.</span>
                  <span>Zero cloud telemetry: your private browsing never touches an external server</span>
                </li>
              </ol>
            </div>

            {/* Embedded Mini-Preview Card */}
            <div className="mt-8 pt-6 border-t border-purple-100/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="p-3 rounded-2xl bg-white border border-purple-100 shadow-2xs w-full sm:w-auto flex-1">
                <div className="text-[10px] font-mono uppercase text-slate-400 font-bold">Local DNS Socket</div>
                <div className="text-xs font-bold text-[#7E3FF2] mt-0.5 font-mono">10.0.0.2:53 • TUN INTERFACE</div>
              </div>

              <a
                href="#interactive-demo"
                onClick={() => soundFx.playChime()}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#7E3FF2] hover:bg-[#6C2FE0] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <span>See Fortress in Action</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Reel Doomscroll Disruptor (Zanderio Style) */}
          <div className="rounded-3xl bg-[#FAF7FF] border border-purple-100 p-8 sm:p-10 flex flex-col justify-between shadow-sm card-shadow-hover">
            <div>
              {/* Pill badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-purple-200 text-[#7E3FF2] text-xs font-semibold shadow-2xs mb-6">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Short-form habit breaker</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#212529] tracking-tight">
                Reel & Shorts Doomscroll Disruptor
              </h3>

              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Confronts the variable-ratio dopamine algorithms engineered into modern social platforms.
              </p>

              {/* Numbered Feature List */}
              <ol className="mt-6 space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-[#7E3FF2] font-mono">1.</span>
                  <span>Tracks real-time scroll events inside Instagram Reels, YouTube Shorts & TikTok</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-[#7E3FF2] font-mono">2.</span>
                  <span>Enforces customizable daily reel thresholds (e.g., 15 reels maximum)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-[#7E3FF2] font-mono">3.</span>
                  <span>Triggers mindful 5–10s breathing gates when dopamine limits are exceeded</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-[#7E3FF2] font-mono">4.</span>
                  <span>Eliminates zombie scrolling without blocking helpful app messaging</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-[#7E3FF2] font-mono">5.</span>
                  <span>Zero keystroke logging: uses accessibility window flags, not screen OCR</span>
                </li>
              </ol>
            </div>

            {/* Embedded Mini-Preview Card */}
            <div className="mt-8 pt-6 border-t border-purple-100/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="p-3 rounded-2xl bg-white border border-purple-100 shadow-2xs w-full sm:w-auto flex-1">
                <div className="text-[10px] font-mono uppercase text-slate-400 font-bold">Friction Gate</div>
                <div className="text-xs font-bold text-slate-900 mt-0.5 font-mono">15 REELS MAX • 10S PAUSE</div>
              </div>

              <a
                href="#cost-calculator"
                onClick={() => soundFx.playChime()}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#7E3FF2] hover:bg-[#6C2FE0] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <span>Audit Your Time Lost</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
