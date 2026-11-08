import React, { useState } from 'react';
import { 
  Shield, 
  Smartphone, 
  Lock, 
  AlarmClock, 
  Headphones, 
  CheckCircle2, 
  Download, 
  ArrowRight 
} from 'lucide-react';

interface DemoVideoProps {
  onOpenDownload: () => void;
}

export const DemoVideoShowcase: React.FC<DemoVideoProps> = ({ onOpenDownload }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 'dns',
      icon: Shield,
      title: 'DNS Interception',
      subtitle: '0.18ms RAM Bloom Filter',
      headline: 'Blocks explicit domains before a socket connection is established.',
      desc: 'When an incognito tab or app attempts to resolve an adult hostname, FocusCrew matches it against a local Bloom filter of 154,820 rules stored directly in device RAM. The query is dropped in under 0.18ms without reaching an external DNS provider.',
      demoType: 'dns'
    },
    {
      id: 'reels',
      icon: Smartphone,
      title: 'Reel Counter HUD',
      subtitle: 'Swipe Friction Gate',
      headline: 'Real-time swipe telemetry and 8-second mindful breathing pause.',
      desc: 'As you scroll Instagram Reels, YouTube Shorts, or TikTok, an overlay counts each swipe against your daily schedule. Once your limit is met, an 8-second mindful breathing pause engages to break the hypnotic dopamine loop.',
      demoType: 'reels'
    },
    {
      id: 'alarm',
      icon: AlarmClock,
      title: 'Task Alarm',
      subtitle: 'Cognitive Wakeup',
      headline: 'Overrides silent mode with mandatory math and shake verification.',
      desc: 'Standard alarms are routinely silenced in an automatic reflex. FocusCrew’s full-screen overlay requires completing mental math calculations or 30 physical phone shakes, ensuring full cognitive alertness before the alarm turns off.',
      demoType: 'alarm'
    },
    {
      id: 'vault',
      icon: Lock,
      title: 'Freedom Vault',
      subtitle: '15-Minute Urge Buffer',
      headline: 'Enforces an unskippable delay when attempting to modify settings.',
      desc: 'Most blockers fail because disabling them takes 3 seconds during a late-night craving. FocusCrew locks settings behind a Master PIN and initiates an unskippable 15-minute cooldown timer, allowing dopamine spikes to dissipate.',
      demoType: 'vault'
    },
    {
      id: 'audio',
      icon: Headphones,
      title: '40Hz Binaural Audio',
      subtitle: 'Deep Work Chronometer',
      headline: 'Synthesized Gamma brainwave audio with integrated distraction logging.',
      desc: 'Ulysses Mode pairs an application lockout with on-device 40Hz Gamma wave generation, scientifically demonstrated to promote working memory and neural synchrony. Any stray impulse is caught in the Distraction Journal.',
      demoType: 'audio'
    }
  ];

  return (
    <section id="walkthrough" className="py-20 md:py-28 bg-white border-b border-[#E5E2DA] text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#9E6F28]">
            System Walkthrough
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1D1A] tracking-tight">
            How FocusCrew intervenes when willpower fails.
          </h2>
          <p className="text-sm sm:text-base text-[#525853] leading-relaxed">
            Select a defensive module below to see how each barrier operates on an active Android device.
          </p>
        </div>

        {/* Tabbed Interactive Stage */}
        <div className="pro-card p-6 sm:p-8">
          
          {/* Module Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-8 border-b border-[#E5E2DA] pb-4">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              const isActive = activeStep === idx;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3 rounded-lg text-left transition-colors cursor-pointer ${
                    isActive 
                      ? 'bg-[#F7F5F0] border border-[#C8C2B5] text-[#1A1D1A]' 
                      : 'bg-white text-[#525853] hover:bg-[#F7F5F0] border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#9E6F28]' : 'text-[#7E857F]'}`} />
                    <span className="text-xs font-bold leading-none">{s.title}</span>
                  </div>
                  <div className="text-[10px] font-mono text-[#7E857F] truncate">{s.subtitle}</div>
                </button>
              );
            })}
          </div>

          {/* Active Module Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Description & Technical Summary */}
            <div className="lg:col-span-6 space-y-4">
              <div className="status-tag bg-[#F7F5F0] text-[#1A1D1A] border border-[#E5E2DA]">
                {steps[activeStep].subtitle}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#1A1D1A] tracking-tight">
                {steps[activeStep].headline}
              </h3>

              <p className="text-sm text-[#525853] leading-relaxed">
                {steps[activeStep].desc}
              </p>

              <div className="pt-4 border-t border-[#E5E2DA] flex flex-wrap gap-4 text-xs font-mono text-[#525853]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#234E37]" />
                  <span>On-Device Execution</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#234E37]" />
                  <span>&lt;1% Battery per day</span>
                </span>
              </div>
            </div>

            {/* Simulated Live Viewport */}
            <div className="lg:col-span-6">
              <div className="rounded-xl bg-[#F7F5F0] border border-[#E5E2DA] p-5 font-mono text-xs text-left space-y-3">
                
                {steps[activeStep].demoType === 'dns' && (
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-[#7E857F] text-[11px] pb-2 border-b border-[#E5E2DA]">
                      <span>SOCKET INTERCEPTION</span>
                      <span className="text-[#234E37] font-semibold">LATENCY: 0.18ms</span>
                    </div>
                    <div className="text-[#1A1D1A]">
                      &gt; [INCOGNITO] Query: <span className="text-[#9E6F28]">adult-stream-content.xxx</span>
                    </div>
                    <div className="p-3 rounded-lg bg-white border border-[#E5E2DA] space-y-1">
                      <div className="text-[#9E6F28] font-bold">MATCH: RAM Bloom Filter Threat Rule #14,812</div>
                      <div className="text-[11px] text-[#525853]">Action: Connection dropped on-device before packet transmission.</div>
                    </div>
                    <div className="text-[11px] text-[#7E857F]">
                      * 0 bytes of search telemetry transmitted to external servers.
                    </div>
                  </div>
                )}

                {steps[activeStep].demoType === 'reels' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[#7E857F] text-[11px] pb-2 border-b border-[#E5E2DA]">
                      <span>SHORT-FORM VIDEO MONITOR</span>
                      <span className="text-[#9E6F28] font-semibold">HUD OVERLAY</span>
                    </div>
                    <div className="flex justify-between items-center text-sm font-bold text-[#1A1D1A]">
                      <span>Daily Reels Watched:</span>
                      <span className="px-2.5 py-0.5 rounded bg-[#F5EAD8] text-[#9E6F28]">15 / 15 DAILY CAP</span>
                    </div>
                    <div className="w-full bg-[#E5E2DA] h-2 rounded-full overflow-hidden">
                      <div className="bg-[#9E6F28] h-full w-full" />
                    </div>
                    <div className="p-3 rounded-lg bg-white border border-[#E5E2DA] text-center font-bold text-[#1A1D1A]">
                      8-SECOND MINDFUL PAUSE ACTIVE — TAKE A DEEP BREATH
                    </div>
                  </div>
                )}

                {steps[activeStep].demoType === 'alarm' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[#7E857F] text-[11px] pb-2 border-b border-[#E5E2DA]">
                      <span>AWAKENING PROTOCOL</span>
                      <span className="text-[#234E37] font-semibold">DND OVERRIDDEN</span>
                    </div>
                    <div className="flex justify-between items-center text-[#1A1D1A]">
                      <span>Scheduled Alarm: 06:00 AM</span>
                      <span className="text-[#234E37] font-bold">RINGING</span>
                    </div>
                    <div className="p-3 rounded-lg bg-white border border-[#E5E2DA] text-center space-y-1.5">
                      <div className="text-xs text-[#7E857F]">Cognitive Verification:</div>
                      <div className="text-base font-bold text-[#1A1D1A]">[ 28 × 6 ] - 19 = ?</div>
                      <div className="text-[10px] text-[#525853]">Solve equation or shake phone 30 times to dismiss. Snooze disabled.</div>
                    </div>
                  </div>
                )}

                {steps[activeStep].demoType === 'vault' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[#7E857F] text-[11px] pb-2 border-b border-[#E5E2DA]">
                      <span>FREEDOM VAULT</span>
                      <span className="text-[#9E6F28] font-semibold">COUNTDOWN ACTIVE</span>
                    </div>
                    <div className="text-[#1A1D1A]">
                      &gt; Shield modification request submitted.
                    </div>
                    <div className="p-3 rounded-lg bg-white border border-[#E5E2DA] text-center space-y-1">
                      <div className="text-lg font-bold text-[#9E6F28]">14:32 REMAINING</div>
                      <div className="text-[10px] text-[#525853]">96% of dopamine craving spikes dissolve before this timer reaches zero.</div>
                    </div>
                  </div>
                )}

                {steps[activeStep].demoType === 'audio' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[#7E857F] text-[11px] pb-2 border-b border-[#E5E2DA]">
                      <span>GAMMA FLOW CHRONOMETER</span>
                      <span className="text-[#9E6F28] font-semibold">SYNTHESIZING</span>
                    </div>
                    <div className="flex justify-between items-center text-[#1A1D1A]">
                      <span>Deep Work Session:</span>
                      <span className="font-bold">45:00 REMAINING</span>
                    </div>
                    <div className="p-3 rounded-lg bg-white border border-[#E5E2DA] space-y-1">
                      <div className="text-xs font-bold text-[#1A1D1A] flex justify-between">
                        <span>40Hz Binaural Frequency</span>
                        <span className="text-[#234E37]">ACTIVE</span>
                      </div>
                      <div className="text-[10px] text-[#525853]">Distraction Journal running in background to capture stray thoughts.</div>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
export default DemoVideoShowcase;
