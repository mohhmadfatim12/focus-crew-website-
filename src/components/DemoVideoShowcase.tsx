import React, { useState } from 'react';
import { Shield, Smartphone, Bell, Lock, ArrowRight, CheckCircle2, AlertOctagon } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface DemoVideoProps {
  onOpenDownload: () => void;
}

export const DemoVideoShowcase: React.FC<DemoVideoProps> = ({ onOpenDownload }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 'dns',
      icon: Shield,
      tag: '0.2ms Latency',
      title: 'Titan DNS Shield',
      headline: 'Blocks every adult site before a single byte leaves your phone.',
      desc: 'You open Chrome in private incognito mode. Before the browser can even connect to the site, FocusCrew intercepts the UDP packet on your device\'s local 10.0.0.2:53 socket. It returns 0.0.0.0 NXDOMAIN in 0.2 milliseconds. The site never loads. No external VPN server is used.',
      badge: 'Local Socket Loopback',
      demoType: 'dns'
    },
    {
      id: 'reels',
      icon: Smartphone,
      tag: 'Short-Form Limit',
      title: 'Reel Doomscroll Stop',
      headline: 'Breaks the endless scroll hypnosis after 15 reels.',
      desc: 'You open Instagram or TikTok to check one thing and start swiping. FocusCrew detects the short-form player in real-time. When you hit your daily allowance (e.g. 15 reels), the screen transitions to an 8-second breathing gate. It forces your brain to wake up and put the phone down.',
      badge: 'Real-Time Reel Counter',
      demoType: 'reels'
    },
    {
      id: 'alarm',
      icon: Bell,
      tag: 'System Wake Lock',
      title: 'Military TaskAlarm',
      headline: 'An alarm you can\'t turn off half-asleep.',
      desc: 'Standard alarms let you tap snooze three times while unconscious. FocusCrew\'s TaskAlarm locks your entire screen, overrides Do Not Disturb, and plays a piercing multi-tone buzzer. The only way to stop the sound is to wake your brain up and solve a math equation.',
      badge: 'Anti-Snooze Math Challenge',
      demoType: 'alarm'
    },
    {
      id: 'vault',
      icon: Lock,
      tag: '15-Min Emergency Delay',
      title: 'Freedom Vault',
      headline: 'Prevents you from disabling the blocker in moments of weakness.',
      desc: 'With normal blockers, when a craving hits at midnight, you open Android settings and turn it off in 3 seconds. With FocusCrew, unblocking requires entering a PIN followed by an unskippable 15-minute countdown. Over 96% of urges disappear during that 15 minutes.',
      badge: 'Urge Dissolution Buffer',
      demoType: 'vault'
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-purple-100 text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container (Exact Zanderio Video-Component Frame) */}
        <div className="rounded-3xl bg-[#FAF7FF] border border-purple-100 p-6 sm:p-10 lg:p-14 shadow-xs relative overflow-hidden">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7E3FF2] px-3.5 py-1 rounded-full bg-white border border-purple-200 inline-block shadow-2xs">
              PRODUCT WALKTHROUGH
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#212529] tracking-tight">
              See FocusCrew in Action
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Here is how FocusCrew steps in when willpower is at zero—stopping relapses, killing doomscroll loops, and waking you up on time.
            </p>
          </div>

          {/* Interactive Feature Stage */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-purple-100 p-6 sm:p-8 shadow-sm text-left">
            
            {/* Step Switcher Tabs (Zanderio 4-Tab Bar) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-8">
              {steps.map((s, idx) => {
                const Icon = s.icon;
                const isActive = activeStep === idx;
                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      soundFx.playChime();
                      setActiveStep(idx);
                    }}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-[#FAF7FF] border-[#7E3FF2] shadow-xs' 
                        : 'bg-white border-purple-100/80 hover:border-purple-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-[#7E3FF2]' : 'text-slate-400'}`} />
                      <span className={`text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-purple-100 text-[#7E3FF2]' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {s.tag}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1">{s.title}</div>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Interactive Stage Body */}
            <div className="rounded-2xl bg-[#FAF8FF] border border-purple-100 p-6 sm:p-8 space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-100 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-[#7E3FF2] uppercase">
                    {steps[activeStep].badge}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#212529] mt-0.5">
                    {steps[activeStep].headline}
                  </h3>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-emerald-700">Native On-Device</span>
                </div>
              </div>

              {/* Simulated Live Viewport Card */}
              {steps[activeStep].demoType === 'dns' && (
                <div className="p-4 rounded-xl bg-white border border-purple-200 font-mono text-xs space-y-2.5">
                  <div className="flex items-center justify-between text-slate-500 border-b border-slate-100 pb-2">
                    <span>UDP 10.0.0.2:53 • QUERY INTERCEPTOR</span>
                    <span className="text-emerald-600 font-bold">LATENCY: 0.18ms</span>
                  </div>
                  <div className="text-slate-700">
                    &gt; [CHROME INCOGNITO] Query: <span className="text-purple-700 font-bold">nsfw-content-stream.xxx</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-red-700 flex items-center justify-between font-bold">
                    <span className="flex items-center gap-1.5">
                      <AlertOctagon className="w-4 h-4" />
                      BLOCK: High-Risk Adult Signature Match
                    </span>
                    <span className="text-red-900">SYNTHESIZED 0.0.0.0 NXDOMAIN</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    * Connection terminated before wireless antenna transmitted packets. 0KB leak.
                  </div>
                </div>
              )}

              {steps[activeStep].demoType === 'reels' && (
                <div className="p-4 rounded-xl bg-white border border-purple-200 font-mono text-xs space-y-3">
                  <div className="flex items-center justify-between text-slate-500 border-b border-slate-100 pb-2">
                    <span>ACCESSIBILITY HOOK • INSTAGRAM / TIKTOK</span>
                    <span className="text-amber-600 font-bold">SWIPE GATE</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 font-bold">Daily Reels Watched:</span>
                    <span className="px-3 py-1 rounded-full bg-purple-100 text-[#7E3FF2] font-bold">15 / 15 MAX LIMIT</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-[#7E3FF2] h-full w-full" />
                  </div>
                  <div className="p-2.5 rounded-lg bg-purple-50 border border-purple-200 text-[#7E3FF2] text-center font-bold">
                    8-SECOND MINDFUL PAUSE ACTIVE • TAKE A DEEP BREATH
                  </div>
                </div>
              )}

              {steps[activeStep].demoType === 'alarm' && (
                <div className="p-4 rounded-xl bg-white border border-purple-200 font-mono text-xs space-y-3">
                  <div className="flex items-center justify-between text-slate-500 border-b border-slate-100 pb-2">
                    <span>FULL-SCREEN WAKE LOCK • 06:30 AM</span>
                    <span className="text-red-600 font-bold animate-pulse">BUZZER RINGING</span>
                  </div>
                  <div className="text-slate-700">
                    &gt; Alarm Priority: <span className="font-bold text-red-600">OVERRIDE_DND | FULL_SCREEN_INTENT</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <span className="text-slate-800 font-bold">Solve to Silence: 37 + 19 = ?</span>
                    <span className="px-3 py-1 rounded bg-white border border-slate-300 font-bold text-purple-700">56</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    * Reflexive sleep-tapping impossible. Requires cognitive computation.
                  </div>
                </div>
              )}

              {steps[activeStep].demoType === 'vault' && (
                <div className="p-4 rounded-xl bg-white border border-purple-200 font-mono text-xs space-y-3">
                  <div className="flex items-center justify-between text-slate-500 border-b border-slate-100 pb-2">
                    <span>EMERGENCY UNLOCK DELAY • FREEDOM VAULT</span>
                    <span className="text-amber-600 font-bold">TIMER ENFORCED</span>
                  </div>
                  <div className="text-slate-700">
                    &gt; Status: <span className="text-amber-600 font-bold">15-Minute Cooldown Running...</span>
                  </div>
                  <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-center">
                    <div className="text-xl font-extrabold text-amber-800">14:32 REMAINING</div>
                    <div className="text-[10px] text-amber-700 mt-1">96% of impulsive cravings dissolve before this timer hits zero.</div>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    * Phone remains completely shielded while your rational mind regains control.
                  </div>
                </div>
              )}

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                {steps[activeStep].desc}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-6 text-[11px] font-mono text-slate-500">
                <span className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Zero battery drain (&lt;1%)</span>
                </span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>24MB RAM footprint</span>
                </span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>100% Free Core APK</span>
                </span>
              </div>

            </div>

          </div>

          {/* Centered CTA */}
          <div className="mt-10">
            <button
              onClick={() => {
                soundFx.playShieldTone();
                onOpenDownload();
              }}
              className="shimmer-btn inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#7E3FF2] hover:bg-[#6C2FE0] text-white font-bold text-sm shadow-md shadow-purple-500/25 hover:shadow-lg hover:shadow-purple-500/35 transition-all cursor-pointer"
            >
              <span>Download FocusCrew Free for Android</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
