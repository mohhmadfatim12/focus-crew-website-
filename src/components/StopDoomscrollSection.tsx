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
    <section className="py-24 bg-white border-t border-purple-100 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Grid (Exact Zanderio Engage Section Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7E3FF2] px-3.5 py-1 rounded-full bg-[#FAF7FF] border border-purple-200 inline-block shadow-2xs">
              BEHAVIORAL FRICTION ENGINE
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#212529] tracking-tight leading-tight">
              Stop Doomscrolling Before You Lose Your Day <br />
              <span className="text-[#7E3FF2]">Reclaim up to 3.2x more deep work</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              You open Instagram or YouTube to reply to one message, and 45 minutes later you are still swiping. 
              FocusCrew counts every reel in the background. When you hit your threshold, it gently halts the feed 
              with an 8-second mindful pause so your rational mind can take back control.
            </p>

            {/* Big Statistics with Divider (Exact Zanderio Engage Stats Layout) */}
            <div className="flex items-center gap-8 pt-4 border-t border-purple-100">
              <div>
                <div className="text-4xl sm:text-5xl font-extrabold text-[#212529] font-mono tracking-tight">
                  78%
                </div>
                <div className="text-xs font-bold text-slate-800 mt-1 uppercase font-mono tracking-wider">
                  Urges Neutralized
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5 max-w-[200px]">
                  Impulsive cravings dissolve within 8 seconds of friction.
                </p>
              </div>

              {/* Vertical Divider */}
              <div className="w-[1px] h-16 bg-purple-200" />

              <div>
                <div className="text-4xl sm:text-5xl font-extrabold text-[#7E3FF2] font-mono tracking-tight">
                  3.2x
                </div>
                <div className="text-xs font-bold text-slate-800 mt-1 uppercase font-mono tracking-wider">
                  Deep Work Reclaimed
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5 max-w-[200px]">
                  More focused coding, studying, and building time every day.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Breathing Gate Simulator */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-10 shadow-[0_20px_50px_rgba(126,63,242,0.06)] text-center space-y-6 relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-mono font-bold uppercase text-[#7E3FF2] tracking-wider">
                  Interactive Friction Simulator
                </span>
                <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>ARMED</span>
                </span>
              </div>

              {/* Pulsing Breathing Circle Animation */}
              <div className="relative w-40 h-40 mx-auto flex items-center justify-center my-4">
                <div className={`absolute inset-0 rounded-full bg-purple-200/60 ${isBreathingActive ? 'radar-ring' : ''}`} />
                <div className="w-32 h-32 rounded-full bg-white border-2 border-[#7E3FF2] flex flex-col items-center justify-center relative z-10 shadow-xl shadow-purple-500/10">
                  {isBreathingActive ? (
                    <>
                      <span className="text-4xl font-extrabold text-[#7E3FF2] font-mono tracking-tight">{breathingSeconds}s</span>
                      <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mt-0.5">
                        {breathingSeconds >= 5 ? 'Inhale...' : breathingSeconds >= 3 ? 'Hold...' : 'Exhale...'}
                      </span>
                    </>
                  ) : completedBreaths ? (
                    <>
                      <CheckCircle className="w-10 h-10 text-emerald-600 mb-0.5" />
                      <span className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider">Mind Awake</span>
                    </>
                  ) : (
                    <>
                      <Flame className="w-10 h-10 text-[#7E3FF2] mb-0.5" />
                      <span className="text-[10px] uppercase font-bold text-slate-600 tracking-wider">8s Gate Ready</span>
                    </>
                  )}
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                {isBreathingActive 
                  ? 'Feel your prefrontal cortex re-engage as dopamine cravings drop.'
                  : completedBreaths 
                    ? 'Urge dissolved! Notice how the mindless instinct to keep scrolling has completely faded.'
                    : 'Click below to test how an 8-second intentional pause snaps your brain out of the doomscroll trance.'}
              </p>

              <button
                onClick={startBreathingTest}
                disabled={isBreathingActive}
                className="w-full py-3.5 rounded-full bg-[#7E3FF2] hover:bg-[#6C2FE0] disabled:bg-purple-300 text-white font-bold text-xs shadow-md shadow-purple-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isBreathingActive ? `Breathing (${breathingSeconds}s)...` : 'Simulate 8-Second Friction Gate'}</span>
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
