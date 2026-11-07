import React, { useState, useEffect } from 'react';
import { Flame, CheckCircle, Sparkles } from 'lucide-react';

export const StopDoomscrollSection: React.FC = () => {
  const [breathingSeconds, setBreathingSeconds] = useState(8);
  const [isBreathingActive, setIsBreathingActive] = useState(false);
  const [completedBreaths, setCompletedBreaths] = useState(false);

  useEffect(() => {
    let interval: number;
    if (isBreathingActive && breathingSeconds > 0) {
      interval = window.setTimeout(() => setBreathingSeconds(prev => prev - 1), 1000);
    } else if (breathingSeconds === 0) {
      setIsBreathingActive(false);
      setCompletedBreaths(true);
    }
    return () => clearTimeout(interval);
  }, [isBreathingActive, breathingSeconds]);

  const startBreathingTest = () => {
    setBreathingSeconds(8);
    setCompletedBreaths(false);
    setIsBreathingActive(true);
  };

  return (
    <section className="py-24 bg-white border-t border-[#E5DFD3] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#A37A3E] px-3.5 py-1 rounded-full bg-[#F5EAD8] border border-[#E2CEB2] inline-block shadow-2xs">
              BEHAVIORAL FRICTION ENGINE
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#202621] tracking-tight leading-tight">
              Stop Doomscrolling Before You Lose Your Day <br />
              <span className="text-[#A37A3E]">Reclaim up to 3.2x more deep work</span>
            </h2>

            <p className="text-[#5E665F] text-sm sm:text-base leading-relaxed">
              You open Instagram or YouTube to reply to one message, and 45 minutes later you are still swiping. 
              FocusCrew counts every reel in the background. When you hit your threshold, it gently halts the feed 
              with the Trance Breaker 8-second mindful pause so your rational mind can take back control.
            </p>

            {/* Big Statistics with Divider */}
            <div className="flex items-center gap-8 pt-4 border-t border-[#E5DFD3]">
              <div>
                <div className="text-4xl sm:text-5xl font-extrabold text-[#202621] font-mono tracking-tight">
                  78%
                </div>
                <div className="text-xs font-bold text-[#202621] mt-1 uppercase font-mono tracking-wider">
                  Urges Neutralized
                </div>
                <p className="text-[11px] text-[#5E665F] mt-0.5 max-w-[200px]">
                  Impulsive cravings dissolve within 8 seconds of physiological friction.
                </p>
              </div>

              {/* Vertical Divider */}
              <div className="w-[1px] h-16 bg-[#E5DFD3]" />

              <div>
                <div className="text-4xl sm:text-5xl font-extrabold text-[#A37A3E] font-mono tracking-tight">
                  3.2x
                </div>
                <div className="text-xs font-bold text-[#202621] mt-1 uppercase font-mono tracking-wider">
                  Deep Work Reclaimed
                </div>
                <p className="text-[11px] text-[#5E665F] mt-0.5 max-w-[200px]">
                  More focused coding, studying, and building time every single day.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Breathing Gate Simulator */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white border border-[#E5DFD3] p-8 sm:p-10 shadow-[0_20px_50px_rgba(163,122,62,0.08)] text-center space-y-6 relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-mono font-bold uppercase text-[#A37A3E] tracking-wider">
                  Trance Breaker Simulator
                </span>
                <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#EAF1EC] text-[#284B39] border border-[#C5DAC9]">
                  <span className="w-2 h-2 rounded-full bg-[#284B39] animate-pulse" />
                  <span>ARMED</span>
                </span>
              </div>

              {/* Pulsing Breathing Circle Animation */}
              <div className="relative w-40 h-40 mx-auto flex items-center justify-center my-4">
                <div className={`absolute inset-0 rounded-full bg-[#F5EAD8] ${isBreathingActive ? 'radar-ring' : ''}`} />
                <div className="w-32 h-32 rounded-full bg-white border-2 border-[#A37A3E] flex flex-col items-center justify-center relative z-10 shadow-xl shadow-[#A37A3E]/10">
                  {isBreathingActive ? (
                    <>
                      <span className="text-4xl font-extrabold text-[#A37A3E] font-mono tracking-tight">{breathingSeconds}s</span>
                      <span className="text-[10px] uppercase font-bold text-[#5E665F] tracking-wider mt-0.5">
                        {breathingSeconds >= 5 ? 'Inhale...' : breathingSeconds >= 3 ? 'Hold...' : 'Exhale...'}
                      </span>
                    </>
                  ) : completedBreaths ? (
                    <>
                      <CheckCircle className="w-10 h-10 text-[#284B39] mb-0.5" />
                      <span className="text-[10px] uppercase font-bold text-[#284B39] tracking-wider">Mind Awake</span>
                    </>
                  ) : (
                    <>
                      <Flame className="w-10 h-10 text-[#A37A3E] mb-0.5" />
                      <span className="text-[10px] uppercase font-bold text-[#5E665F] tracking-wider">8s Gate Ready</span>
                    </>
                  )}
                </div>
              </div>

              <p className="text-xs text-[#5E665F] leading-relaxed max-w-xs mx-auto">
                {isBreathingActive 
                  ? 'Feel your prefrontal cortex re-engage as dopamine cravings drop.'
                  : completedBreaths 
                    ? 'Urge dissolved! Notice how the mindless instinct to keep scrolling has completely faded.'
                    : 'Click below to test how an 8-second intentional pause snaps your brain out of the doomscroll trance.'}
              </p>

              <button
                onClick={startBreathingTest}
                disabled={isBreathingActive}
                className="w-full py-3.5 rounded-full bg-[#A37A3E] hover:bg-[#8A642E] disabled:bg-[#D8D1C3] text-white font-bold text-xs shadow-md shadow-[#A37A3E]/20 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isBreathingActive ? `Breathing (${breathingSeconds}s)...` : 'Simulate 8-Second Trance Breaker'}</span>
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
