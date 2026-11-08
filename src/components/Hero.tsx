import React from 'react';
import { 
  ShieldCheck, 
  ArrowDownRight, 
  ArrowDownLeft, 
  Lock, 
  TrendingDown,
  Smartphone,
  Zap,
  Globe,
  Sparkles,
  Shield,
  Camera,
  PlaySquare,
  EyeOff,
  Radio,
  Flame,
  Layers,
  Compass,
  AlarmClock,
  Headphones,
  Brain
} from 'lucide-react';
import { InteractivePhone } from './InteractivePhone';

interface HeroProps {
  onOpenDownload: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload }) => {
  const platforms = [
    { name: 'Instagram Reels', icon: Camera, color: 'text-rose-500' },
    { name: 'YouTube Shorts', icon: PlaySquare, color: 'text-red-500' },
    { name: 'TikTok Streams', icon: Radio, color: 'text-[#A37A3E]' },
    { name: 'Google Chrome', icon: Globe, color: 'text-blue-500' },
    { name: 'Brave Browser', icon: Flame, color: 'text-amber-500' },
    { name: 'Incognito Mode', icon: EyeOff, color: 'text-slate-600' },
    { name: 'Unskippable Alarms', icon: AlarmClock, color: 'text-emerald-600' },
    { name: '40Hz Gamma Audio', icon: Headphones, color: 'text-violet-600' },
    { name: 'Reddit Feeds', icon: Layers, color: 'text-orange-500' },
    { name: 'Android 15 OS', icon: Zap, color: 'text-[#284B39]' },
    { name: 'Freedom Vault', icon: Lock, color: 'text-[#A37A3E]' }
  ];

  return (
    <section className="relative pt-28 pb-14 md:pt-36 md:pb-16 overflow-hidden bg-white text-center">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Tilted Callout Pointer Badges & Live Status Telemetry Ticker */}
        <div className="relative max-w-4xl mx-auto mb-6 flex flex-col items-center gap-3">
          
          {/* Live Telemetry Ticker Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E2CEB2] shadow-sm text-[11px] font-mono text-[#5E665F] select-none">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#284B39] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#284B39]"></span>
            </span>
            <span className="font-extrabold text-[#202621] tracking-tight">AUTONOMOUS ON-DEVICE DEFENSE ARMED</span>
            <span className="text-[#D8D1C3]">•</span>
            <span className="text-[#A37A3E] font-bold">154,820 RAM Rules</span>
            <span className="text-[#D8D1C3]">•</span>
            <span className="text-[#284B39] font-bold">0.18ms Intercept</span>
          </div>

          <div className="w-full flex justify-between items-center px-2 sm:px-12 pointer-events-none">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAF1EC] border border-[#C5DAC9] text-[#284B39] text-xs font-bold shadow-xs rotate-[-3deg] pointer-events-auto animate-float-p1">
              <Shield className="w-3.5 h-3.5 text-[#284B39]" />
              <span>Quit Social Media & Porn Addiction</span>
              <ArrowDownRight className="w-3.5 h-3.5 text-[#284B39]" />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5EAD8] border border-[#E2CEB2] text-[#A37A3E] text-xs font-bold shadow-xs rotate-[3deg] pointer-events-auto animate-float-p2">
              <ArrowDownLeft className="w-3.5 h-3.5 text-[#A37A3E]" />
              <Sparkles className="w-3.5 h-3.5 text-[#A37A3E]" />
              <span>Built by Fatim Hasnain</span>
            </div>
          </div>
        </div>

        {/* Centered H1 */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#202621] max-w-4xl mx-auto leading-[1.12]">
          Quit Social Media & Porn Addiction <br className="hidden sm:inline" />
          <span className="text-[#A37A3E]">At The Android System Level</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-lg text-[#5E665F] max-w-3xl mx-auto leading-relaxed">
          Destroy the two toxic dopamine loops destroying your ambition: mindless short-form doomscrolling (Instagram Reels, YouTube Shorts, TikTok) and adult content relapses. Powered by an on-device 154,820 RAM Bloom filter, live swipe counter HUD, unskippable task alarms, and the 15-minute Freedom Vault.
        </p>

        {/* Hook */}
        <p className="mt-3 text-sm text-[#202621] font-medium">
          <strong>100% On-Device Privacy • No Cloud Proxies • Zero Subscriptions.</strong>{' '}
          <button 
            onClick={onOpenDownload} 
            className="text-[#A37A3E] hover:text-[#8A642E] font-bold underline cursor-pointer"
          >
            Download the Free Android APK (v2.4.0) →
          </button>
        </p>

        {/* --- CENTRAL CONNECTED DIAGRAM CANVAS --- */}
        <div className="mt-12 relative rounded-3xl bg-[#FBF9F5] border border-[#E5DFD3] p-6 sm:p-10 lg:p-12 shadow-sm overflow-hidden luxury-mesh-grid">
          
          {/* Ambient Breathing Aurora Light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-[#A37A3E]/20 via-[#C89B55]/15 to-transparent blur-3xl pointer-events-none animate-aurora" />
          
          {/* Animated SVG Connector Lines with Moving Glow Points */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block opacity-45" viewBox="0 0 1000 650" fill="none">
            {/* Top-Left to Center */}
            <path d="M 230 140 C 350 140, 380 230, 500 270" stroke="#A37A3E" strokeWidth="1.5" className="animate-line-flow" />
            {/* Mid-Left to Center */}
            <path d="M 230 320 C 350 320, 390 310, 500 310" stroke="#A37A3E" strokeWidth="1.5" className="animate-line-flow" />
            {/* Bottom-Left to Center */}
            <path d="M 230 500 C 350 500, 380 390, 500 350" stroke="#A37A3E" strokeWidth="1.5" className="animate-line-flow" />
            
            {/* Top-Right to Center */}
            <path d="M 770 170 C 650 170, 620 250, 500 280" stroke="#A37A3E" strokeWidth="1.5" className="animate-line-flow" />
            {/* Bottom-Right to Center */}
            <path d="M 770 480 C 650 480, 620 370, 500 340" stroke="#A37A3E" strokeWidth="1.5" className="animate-line-flow" />

            {/* Glowing animated pulse nodes */}
            <circle cx="360" cy="180" r="3.5" fill="#A37A3E" className="animate-ping" />
            <circle cx="640" cy="210" r="3.5" fill="#A37A3E" className="animate-ping" />
            <circle cx="370" cy="450" r="3.5" fill="#A37A3E" className="animate-ping" />
            <circle cx="630" cy="430" r="3.5" fill="#A37A3E" className="animate-ping" />
          </svg>

          {/* Grid: Left Connected Cards + Center Interactive Phone + Right Connected Cards */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Column (3 Connected Nodes) */}
            <div className="md:col-span-3 space-y-5 text-left">
              
              {/* Node 1: Supported Browsers Pill */}
              <div className="p-3.5 rounded-2xl bg-white border border-[#E5DFD3] shadow-sm card-shadow-hover animate-float flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[#F5EAD8] text-[#A37A3E] flex items-center justify-center">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#202621]">All Browsers Protected</div>
                    <div className="text-[10px] text-[#5E665F]">Chrome • Brave • Incognito</div>
                  </div>
                </div>
                <span className="w-2 h-2 rounded-full bg-[#284B39] animate-pulse" />
              </div>

              {/* Node 2: Threats Blocked Stat Card */}
              <div className="p-4 rounded-2xl bg-white border border-[#E5DFD3] shadow-sm card-shadow-hover animate-float-reverse space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="w-7 h-7 rounded-lg bg-[#EAF1EC] text-[#284B39] flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-[#284B39] bg-[#EAF1EC] px-2 py-0.5 rounded-full font-bold">
                    0.18ms Latency
                  </span>
                </div>
                <div className="text-2xl font-extrabold text-[#202621] font-mono">154,820+</div>
                <div className="text-xs font-bold text-[#202621]">RAM Domains Filtered</div>
                <p className="text-[10px] text-[#5E665F] leading-snug">
                  Neutralized on-device with zero cloud telemetry before data reaches the screen.
                </p>
              </div>

              {/* Node 3: Unskippable Task Alarm */}
              <div className="p-4 rounded-2xl bg-white border border-[#E5DFD3] shadow-sm card-shadow-hover animate-float space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#202621]">
                    <AlarmClock className="w-4 h-4 text-[#284B39]" />
                    <span>Unskippable Task Alarm</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#284B39] bg-[#EAF1EC] px-2 py-0.5 rounded">
                    Math & Shake Gate
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-[#FBF9F5] border border-[#E5DFD3] text-[11px] text-[#202621] space-y-1">
                  <div className="font-bold flex items-center justify-between">
                    <span>Awakening Protocol</span>
                    <span className="text-[10px] text-[#284B39] font-mono">06:00 AM</span>
                  </div>
                  <div className="text-[10px] text-[#5E665F]">
                    Requires solving math puzzles or 30 phone shakes to dismiss. Zero snooze loopholes.
                  </div>
                </div>

                <div className="pt-1 border-t border-[#E5DFD3] flex items-center justify-between text-[10px] text-[#5E665F] font-mono">
                  <span>DND Override Active</span>
                  <span className="text-[#284B39] font-bold">100% Awakening</span>
                </div>
              </div>

            </div>

            {/* Center: Smartphone Canvas with Floating Micro-Satellites */}
            <div id="interactive-demo" className="md:col-span-6 flex flex-col items-center justify-center relative">
              
              {/* Floating Satellite 1 */}
              <div className="hidden lg:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full luxury-glass text-[11px] font-mono font-bold text-[#202621] shadow-md mb-3 animate-float-p1 luxury-orbit-pill z-20">
                <span className="w-2 h-2 rounded-full bg-[#284B39] animate-pulse" />
                <span>ACTIVE SHIELD: 0.18ms On-Device RAM Defense</span>
                <span className="px-1.5 py-0.2 rounded bg-[#F5EAD8] text-[#A37A3E] text-[9px]">0KB LEAK</span>
              </div>

              <div className="relative w-full flex justify-center">
                {/* Floating Satellite 2 */}
                <div className="absolute -left-6 top-1/4 hidden xl:flex flex-col gap-1 p-2.5 rounded-2xl luxury-glass shadow-lg animate-float-p3 z-20 max-w-[150px] text-left">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#284B39]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#284B39]" />
                    <span>0s Delay Drop</span>
                  </div>
                  <span className="text-[9px] text-[#5E665F] leading-tight">Explicit domains dropped before socket opens.</span>
                </div>

                {/* Floating Satellite 3 */}
                <div className="absolute -right-6 top-1/3 hidden xl:flex flex-col gap-1 p-2.5 rounded-2xl luxury-glass shadow-lg animate-float-p2 z-20 max-w-[150px] text-left">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#A37A3E]">
                    <Sparkles className="w-3.5 h-3.5 text-[#A37A3E]" />
                    <span>Urge Breaker</span>
                  </div>
                  <span className="text-[9px] text-[#5E665F] leading-tight">15-minute cooling buffer dissolves 96% cravings.</span>
                </div>

                <InteractivePhone />
              </div>
            </div>

            {/* Right Column (2 Connected Nodes) */}
            <div className="md:col-span-3 space-y-5 text-left">
              
              {/* Node 4: Active Reel Counter Card */}
              <div className="p-4 rounded-2xl bg-white border border-[#E5DFD3] shadow-sm card-shadow-hover animate-float space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-7 h-7 rounded-lg bg-[#F5EAD8] text-[#A37A3E] flex items-center justify-center">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-[#A37A3E] font-bold bg-[#F5EAD8] px-2 py-0.5 rounded-full">
                    Active Limit
                  </span>
                </div>
                <div className="text-2xl font-extrabold text-[#A37A3E] font-mono">15 / 15</div>
                <div className="text-xs font-bold text-[#202621]">Daily Reels Allowed</div>
                
                {/* Progress bar */}
                <div className="w-full bg-[#F2EEE5] h-2 rounded-full overflow-hidden">
                  <div className="bg-[#A37A3E] h-full w-full" />
                </div>
                <p className="text-[10px] text-[#5E665F] leading-snug">
                  8s Trance Breaker pause activates immediately on swipe 15.
                </p>
              </div>

              {/* Node 5: Freedom Vault Node */}
              <div className="p-4 rounded-2xl bg-white border border-[#E5DFD3] shadow-sm card-shadow-hover animate-float-reverse space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#202621]">
                    <Lock className="w-3.5 h-3.5 text-[#A37A3E]" />
                    <span>Freedom Vault</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#A37A3E] bg-[#F5EAD8] px-1.5 py-0.5 rounded font-bold">
                    Zero-Bypass
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FBF9F5] border border-[#E5DFD3] text-[11px] text-[#202621] font-medium">
                  "15-minute emergency delay. Urges fade before timer hits zero."
                </div>
                <p className="text-[10px] text-[#5E665F] leading-snug">
                  96% of relapses prevented by introducing mandatory delay.
                </p>
              </div>

              {/* Node 6: 40Hz Gamma & Deep Work Engine */}
              <div className="p-4 rounded-2xl bg-white border border-[#E5DFD3] shadow-sm card-shadow-hover animate-float space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#202621]">
                    <Headphones className="w-4 h-4 text-[#A37A3E]" />
                    <span>40Hz Binaural Engine</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#A37A3E] bg-[#F5EAD8] px-2 py-0.5 rounded-full font-bold">
                    Gamma Flow
                  </span>
                </div>
                <div className="text-sm font-extrabold text-[#202621]">Ulysses Deep Lock</div>
                <p className="text-[10px] text-[#5E665F] leading-snug">
                  On-device 40Hz audio waves + Distraction Journal to lock into flow state without willpower exhaustion.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* --- PLATFORMS MARQUEE BAR --- */}
        <div className="mt-14 pt-8 border-t border-[#E5DFD3] overflow-hidden">
          <p className="text-xs font-semibold text-[#5E665F] uppercase tracking-widest font-mono mb-6">
            Active Protection Across All Your Feeds & Browsers
          </p>

          <div className="relative w-full overflow-hidden mask-fade">
            <div className="animate-marquee flex items-center gap-10 text-[#202621] text-sm font-semibold whitespace-nowrap">
              {platforms.concat(platforms).map((p, i) => {
                const IconComponent = p.icon;
                return (
                  <div key={i} className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-50 border border-[#E5DFD3] shadow-2xs shrink-0 hover:border-[#A37A3E] transition-colors">
                    <IconComponent className={`w-4 h-4 ${p.color}`} />
                    <span className="font-bold text-[#202621] text-xs sm:text-sm">{p.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
export default Hero;
