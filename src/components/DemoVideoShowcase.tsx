import React, { useState } from 'react';
import { Shield, Smartphone, Search, Lock, ArrowRight, CheckCircle2, AlertOctagon, Download, Sparkles } from 'lucide-react';

interface DemoVideoProps {
  onOpenDownload: () => void;
}

export const DemoVideoShowcase: React.FC<DemoVideoProps> = ({ onOpenDownload }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 'dns',
      icon: Shield,
      tag: '0.18ms Latency',
      title: 'Titan DNS Shield',
      headline: 'Blocks every adult site before a single byte leaves your phone.',
      desc: 'You open Chrome in private incognito mode. Before the browser can even connect to the site, FocusCrew intervenes on-device in under 0.18 milliseconds. The site never loads. No external VPN proxy or cloud server is ever touched.',
      badge: 'On-Device Zero-Leak Shield',
      demoType: 'dns'
    },
    {
      id: 'reels',
      icon: Smartphone,
      tag: 'Trance Breaker',
      title: 'Reel Doomscroll Stop',
      headline: 'Breaks the endless scroll hypnosis after 15 reels.',
      desc: 'You open Instagram or TikTok to check one thing and start swiping. FocusCrew detects the short-form player in real-time. When you hit your daily allowance (e.g. 15 reels), the screen transitions to an 8-second Trance Breaker breathing gate. It forces your brain to wake up and put the phone down.',
      badge: 'Real-Time Reel Counter & Schedule',
      demoType: 'reels'
    },
    {
      id: 'safesearch',
      icon: Search,
      tag: 'Strict Search VIP',
      title: 'SafeSearch Enforcement',
      headline: 'Forces strict safe results across Google, Bing & YouTube.',
      desc: 'Most users bypass adult blockers by searching explicit thumbnails directly on Google Images or DuckDuckGo. FocusCrew enforces network-level SafeSearch overrides, locking every search engine into strict filtering mode with zero loophole bypass.',
      badge: 'DNS VIP Rewrite Mode',
      demoType: 'safesearch'
    },
    {
      id: 'vault',
      icon: Lock,
      tag: '15-Min Urge Delay',
      title: 'Freedom Vault',
      headline: 'Prevents you from disabling the blocker in moments of weakness.',
      desc: 'With normal blockers, when a craving hits at midnight, you open Android settings and turn it off in 3 seconds. With FocusCrew, unblocking requires entering a PIN followed by an unskippable 15-minute countdown. Over 96% of urges disappear during that 15 minutes.',
      badge: 'Urge Dissolution Buffer & Widget',
      demoType: 'vault'
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-[#E5DFD3] text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dual Floating Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <a
            href="#interactive-demo"
            className="px-6 py-3 rounded-full bg-[#A37A3E] hover:bg-[#8A642E] text-white text-xs sm:text-sm font-bold shadow-sm transition-all cursor-pointer flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>See FocusCrew in Action</span>
          </a>

          <button
            onClick={() => {
              onOpenDownload();
            }}
            className="px-6 py-3 rounded-full bg-white hover:bg-[#F5EAD8]/50 text-[#A37A3E] border border-[#E2CEB2] text-xs sm:text-sm font-bold shadow-2xs transition-all cursor-pointer flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Install APK Free Instantly</span>
          </button>
        </div>

        {/* Container */}
        <div className="rounded-3xl bg-[#FBF9F5] border border-[#E5DFD3] p-6 sm:p-10 lg:p-14 shadow-xs relative overflow-hidden">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#A37A3E] px-3.5 py-1 rounded-full bg-white border border-[#E2CEB2] inline-block shadow-2xs">
              PRODUCT WALKTHROUGH
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202621] tracking-tight">
              See FocusCrew in Action
            </h2>
            <p className="text-sm sm:text-base text-[#5E665F] leading-relaxed">
              Here is how FocusCrew steps in when willpower is at zero—stopping relapses, killing doomscroll loops, and waking you up on time.
            </p>
          </div>

          {/* Interactive Feature Stage */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-[#E5DFD3] p-6 sm:p-8 shadow-sm text-left">
            
            {/* Step Switcher Tabs */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-8">
              {steps.map((s, idx) => {
                const Icon = s.icon;
                const isActive = activeStep === idx;
                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      setActiveStep(idx);
                    }}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-[#F5EAD8]/60 border-[#A37A3E] shadow-xs' 
                        : 'bg-white border-[#E5DFD3] hover:border-[#D8D1C3]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-[#A37A3E]' : 'text-slate-400'}`} />
                      <span className={`text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-[#F5EAD8] text-[#A37A3E]' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {s.tag}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-[#202621] line-clamp-1">{s.title}</div>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Interactive Stage Body */}
            <div className="rounded-2xl bg-[#FBF9F5] border border-[#E5DFD3] p-6 sm:p-8 space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E5DFD3] pb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-[#A37A3E] uppercase">
                    {steps[activeStep].badge}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#202621] mt-0.5">
                    {steps[activeStep].headline}
                  </h3>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#284B39] animate-pulse" />
                  <span className="text-xs font-mono font-bold text-[#284B39]">Native On-Device</span>
                </div>
              </div>

              {/* Simulated Live Viewport Card */}
              {steps[activeStep].demoType === 'dns' && (
                <div className="p-4 rounded-xl bg-white border border-[#E5DFD3] font-mono text-xs space-y-2.5">
                  <div className="flex items-center justify-between text-[#5E665F] border-b border-[#E5DFD3] pb-2">
                    <span>ON-DEVICE SHIELD • THREAT INTERCEPTOR</span>
                    <span className="text-[#284B39] font-bold">LATENCY: 0.18ms</span>
                  </div>
                  <div className="text-[#202621]">
                    &gt; [CHROME INCOGNITO] Query: <span className="text-[#A37A3E] font-bold">nsfw-content-stream.xxx</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-red-700 flex items-center justify-between font-bold">
                    <span className="flex items-center gap-1.5">
                      <AlertOctagon className="w-4 h-4" />
                      BLOCK: High-Risk Adult Signature Match
                    </span>
                    <span className="text-red-900">INSTANT DROP</span>
                  </div>
                  <div className="text-[11px] text-[#5E665F]">
                    * Connection neutralized before data reached the phone. 0KB leak.
                  </div>
                </div>
              )}

              {steps[activeStep].demoType === 'reels' && (
                <div className="p-4 rounded-xl bg-white border border-[#E5DFD3] font-mono text-xs space-y-3">
                  <div className="flex items-center justify-between text-[#5E665F] border-b border-[#E5DFD3] pb-2">
                    <span>BEHAVIORAL INTERVENTION • SHORT-FORM PLAYER</span>
                    <span className="text-[#A37A3E] font-bold">SWIPE GATE</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#202621] font-bold">Daily Reels Watched:</span>
                    <span className="px-3 py-1 rounded-full bg-[#F5EAD8] text-[#A37A3E] font-bold">15 / 15 MAX LIMIT</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-[#A37A3E] h-full w-full" />
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#F5EAD8] border border-[#E2CEB2] text-[#A37A3E] text-center font-bold">
                    8-SECOND TRANCE BREAKER PAUSE ACTIVE • TAKE A DEEP BREATH
                  </div>
                </div>
              )}

              {steps[activeStep].demoType === 'safesearch' && (
                <div className="p-4 rounded-xl bg-white border border-[#E5DFD3] font-mono text-xs space-y-3">
                  <div className="flex items-center justify-between text-[#5E665F] border-b border-[#E5DFD3] pb-2">
                    <span>VIP SAFE OVERRIDE • ALL SEARCH ENGINES</span>
                    <span className="text-[#284B39] font-bold">STRICT LOCKED</span>
                  </div>
                  <div className="text-[#202621]">
                    &gt; Search Security: <span className="font-bold text-[#202621]">Google, Bing & YouTube Strict Safe Filtering</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#EAF1EC] border border-[#C5DAC9] flex items-center justify-between">
                    <span className="text-[#284B39] font-bold">Google, Bing & YouTube Restricted Mode</span>
                    <span className="px-3 py-1 rounded bg-white border border-[#C5DAC9] font-bold text-[#284B39]">ENFORCED</span>
                  </div>
                  <div className="text-[11px] text-[#5E665F]">
                    * Incognito and guest browsing cannot disable SafeSearch VIP redirects.
                  </div>
                </div>
              )}

              {steps[activeStep].demoType === 'vault' && (
                <div className="p-4 rounded-xl bg-white border border-[#E5DFD3] font-mono text-xs space-y-3">
                  <div className="flex items-center justify-between text-[#5E665F] border-b border-[#E5DFD3] pb-2">
                    <span>EMERGENCY UNLOCK DELAY • FREEDOM VAULT</span>
                    <span className="text-[#A37A3E] font-bold">TIMER ENFORCED</span>
                  </div>
                  <div className="text-[#202621]">
                    &gt; Status: <span className="text-[#A37A3E] font-bold">15-Minute Cooldown Running...</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#F5EAD8] border border-[#E2CEB2] text-center">
                    <div className="text-xl font-extrabold text-[#8A642E]">14:32 REMAINING</div>
                    <div className="text-[10px] text-[#8A642E] mt-1">96% of impulsive cravings dissolve before this timer hits zero.</div>
                  </div>
                  <div className="text-[11px] text-[#5E665F]">
                    * Phone remains completely shielded while your rational mind regains control.
                  </div>
                </div>
              )}

              <p className="text-xs sm:text-sm text-[#5E665F] leading-relaxed font-sans">
                {steps[activeStep].desc}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-6 text-[11px] font-mono text-[#5E665F]">
                <span className="flex items-center gap-1.5 text-[#202621]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#284B39]" />
                  <span>Zero battery drain (&lt;1%)</span>
                </span>
                <span className="flex items-center gap-1.5 text-[#202621]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#284B39]" />
                  <span>154,820 RAM Bloom Filter</span>
                </span>
                <span className="flex items-center gap-1.5 text-[#202621]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#284B39]" />
                  <span>100% Free Core APK (11 MB)</span>
                </span>
              </div>

            </div>

          </div>

          {/* Centered CTA */}
          <div className="mt-10">
            <button
              onClick={() => {
                onOpenDownload();
              }}
              className="acs-btn"
            >
              <span>Get Started Now — Download APK Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
