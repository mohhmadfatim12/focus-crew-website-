import React, { useState, useEffect } from 'react';
import { Flame, CheckCircle } from 'lucide-react';
import { soundFx } from '../utils/audio';

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
    soundFx.playChime();
    setBreathingSeconds(8);
    setCompletedBreaths(false);
    setIsBreathingActive(true);
  };

  return (
    <section className="py-20 bg-white border-t border-purple-100 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Grid (Exact Zanderio Engage Section Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7E3FF2] px-3 py-1 rounded-full bg-[#FAF7FF] border border-purple-200 inline-block shadow-2xs">
              BEHAVIORAL FRICTION ENGINE
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#212529] tracking-tight leading-tight">
              Stop doomscrolling before you waste 3 hours.
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              You open Instagram or YouTube to reply to one message, and 45 minutes later you're still swiping. 
              FocusCrew counts every reel in the background. When you hit your threshold, it gently halts the feed 
              with a mandatory biological pause so your rational mind can take over.
            </p>

            {/* Big Statistics (Zanderio Style) */}
            <div className="grid grid-cols-2 gap-8 pt-4 border-t border-purple-100">
              <div>
                <div className="text-4xl font-extrabold text-[#212529] font-mono tracking-tight">
                  78%
                </div>
                <div className="text-xs font-bold text-slate-800 mt-1">Urges Stopped</div>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Dissolves impulsive scrolling loops within 10 seconds of friction.
                </p>
              </div>

              <div>
                <div className="text-4xl font-extrabold text-[#7E3FF2] font-mono tracking-tight">
                  3.2x
                </div>
                <div className="text-xs font-bold text-slate-800 mt-1">Deep Work Reclaimed</div>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  More focused study and coding hours every single day.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Breathing Gate Simulator */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#FAF7FF] border border-purple-100 p-8 shadow-sm text-center space-y-5">
              
              <div className="text-xs font-mono font-bold uppercase text-[#7E3FF2] tracking-wider">
                Interactive Friction Simulator
              </div>

              {/* Pulsing Breathing Circle Animation */}
              <div className="relative w-32 h-32 mx-auto flex items-center justify-center my-4">
                <div className={`absolute inset-0 rounded-full bg-purple-200 ${isBreathingActive ? 'radar-ring' : ''}`} />
                <div className="w-24 h-24 rounded-full bg-white border-2 border-[#7E3FF2] flex flex-col items-center justify-center relative z-10 shadow-md">
                  {isBreathingActive ? (
                    <>
                      <span className="text-2xl font-extrabold text-[#7E3FF2] font-mono">{breathingSeconds}s</span>
                      <span className="text-[9px] uppercase font-bold text-slate-500">Breathe</span>
                    </>
                  ) : completedBreaths ? (
                    <>
                      <CheckCircle className="w-8 h-8 text-emerald-600 mb-0.5" />
                      <span className="text-[9px] uppercase font-bold text-emerald-700">Clear Mind</span>
                    </>
                  ) : (
                    <>
                      <Flame className="w-8 h-8 text-[#7E3FF2] mb-0.5" />
                      <span className="text-[9px] uppercase font-bold text-slate-600">Gate Armed</span>
                    </>
                  )}
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                {isBreathingActive 
                  ? 'Inhale slowly for 4 seconds... Exhale slowly for 4 seconds.'
                  : completedBreaths 
                    ? 'Urge neutralized. Notice how your urge to keep scrolling has vanished.'
                    : 'Click below to test how a 8-second intentional pause breaks the dopamine loop.'}
              </p>

              <button
                onClick={startBreathingTest}
                disabled={isBreathingActive}
                className="w-full py-3 rounded-xl bg-[#7E3FF2] hover:bg-[#6C2FE0] disabled:bg-purple-300 text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
              >
                {isBreathingActive ? `Breathing (${breathingSeconds}s)...` : 'Simulate 8-Second Friction Gate'}
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
