import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Download, 
  Smartphone,
  Zap,
  Lock,
  AlarmClock,
  Headphones,
  CheckCircle2
} from 'lucide-react';
import { InteractivePhone } from './InteractivePhone';

interface HeroProps {
  onOpenDownload: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload }) => {
  const coveredSurfaces = [
    'Instagram Reels',
    'YouTube Shorts',
    'TikTok Streams',
    'Google Chrome',
    'Brave Browser',
    'Incognito Sessions',
    'Reddit Webviews',
    'Android 15 OS'
  ];

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-white border-b border-[#E5E2DA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Asymmetric Grid: Content Left, Interactive Phone Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Direct Value Proposition & Technical Proof */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* System Status Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F7F5F0] border border-[#E5E2DA] text-xs font-medium text-[#525853]">
              <span className="w-2 h-2 rounded-full bg-[#234E37]" />
              <span className="font-semibold text-[#1A1D1A]">On-Device Defense</span>
              <span className="text-[#C8C2B5]">•</span>
              <span>154,820 Rules</span>
              <span className="text-[#C8C2B5]">•</span>
              <span>0.18ms</span>
            </div>

            {/* Direct, Concrete Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1A1D1A] leading-[1.12]">
              System-level defense against doomscrolling and adult content.
            </h1>

            {/* Clear Human Copy */}
            <p className="text-base sm:text-lg text-[#525853] leading-relaxed max-w-xl">
              FocusCrew runs inside your phone’s operating layer to dismantle the two most addictive digital loops: 
              endless short-form video feeds (Reels, Shorts, TikTok) and pornography relapses. 
              Enforced by real-time swipe counting, an 8-second mindful pause, and the 15-minute Freedom Vault.
            </p>

            {/* Primary Action Row */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenDownload}
                className="btn-accent text-sm !py-3 !px-6 shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download Android APK (Free)</span>
              </button>

              <a
                href="#interactive-demo"
                className="btn-secondary text-sm !py-3 !px-5"
              >
                <span>Try Live Simulator</span>
                <ArrowRight className="w-4 h-4 text-[#525853]" />
              </a>
            </div>

            {/* Proof Points / Technical Constraints */}
            <div className="pt-6 border-t border-[#E5E2DA] grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="text-2xl font-bold tracking-tight text-[#1A1D1A]">154,820</div>
                <div className="text-xs text-[#525853] font-medium mt-0.5">Threats in RAM</div>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight text-[#1A1D1A]">0.18ms</div>
                <div className="text-xs text-[#525853] font-medium mt-0.5">Filter latency</div>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight text-[#234E37]">0 Bytes</div>
                <div className="text-xs text-[#525853] font-medium mt-0.5">Cloud data leak</div>
              </div>
            </div>

            {/* Trust and Independence Guarantee */}
            <p className="text-xs text-[#7E857F] leading-normal">
              Built by independent software engineer Mohammad Fatim Hasnain. No accounts, no ads, no subscription traps.
            </p>

          </div>

          {/* Right Column: Realistic Interactive Android Device Frame */}
          <div id="interactive-demo" className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-[340px]">
              <div className="text-center mb-3">
                <span className="text-eyebrow text-[#7E857F]">
                  Interactive Live Device Preview
                </span>
              </div>
              <InteractivePhone />
            </div>
          </div>

        </div>

        {/* Coverage Strip: Clean Technical Badges */}
        <div className="mt-16 pt-8 border-t border-[#E5E2DA] text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#7E857F] shrink-0 font-semibold">
              Protected Feeds & Browsers
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {coveredSurfaces.map((surface) => (
                <span 
                  key={surface}
                  className="px-3 py-1 rounded-md bg-[#F7F5F0] border border-[#E5E2DA] text-xs font-medium text-[#1A1D1A]"
                >
                  {surface}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
export default Hero;
