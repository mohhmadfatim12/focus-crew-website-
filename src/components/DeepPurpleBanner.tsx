import React, { useState } from 'react';
import { Bell, Volume2, VolumeX, CheckCircle } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const DeepPurpleBanner: React.FC = () => {
  const [mathAnswer, setMathAnswer] = useState('');
  const [isBuzzerActive, setIsBuzzerActive] = useState(false);
  const [alarmSolved, setAlarmSolved] = useState(false);

  const handleVerify = () => {
    if (mathAnswer.trim() === '42') {
      soundFx.stopTaskAlarmBuzzer((active) => setIsBuzzerActive(active));
      setAlarmSolved(true);
      setTimeout(() => setAlarmSolved(false), 3000);
    } else {
      alert('Solve 24 + 18 = ? to verify wakefulness.');
    }
  };

  return (
    <section className="py-20 bg-white border-t border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full-Width Deep Purple Container (Exact Zanderio Signature Style) */}
        <div className="rounded-3xl bg-gradient-to-br from-[#6A28E5] via-[#7E3FF2] to-[#9055FD] p-8 sm:p-12 lg:p-16 text-white shadow-xl shadow-purple-600/25 relative overflow-hidden text-left">
          
          {/* Subtle background glow circle */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-white/20 text-white font-bold border border-white/20 inline-block">
                SYSTEM WAKE ENFORCEMENT
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Visual Habit Interruption & Military TaskAlarm
              </h2>

              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                Standard alarms let you sleepwalk through your morning with reflexive snooze taps. 
                FocusCrew overrides system Do Not Disturb and demands active proof of cognitive alertness.
              </p>

              {/* 3 White Pill Feature Badges (Exact Zanderio Pill Style) */}
              <div className="space-y-3 pt-2">
                <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white text-[#212529] text-xs sm:text-sm font-semibold shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#7E3FF2]" />
                  <span>Identifies short-form video surfaces in real-time</span>
                </div>
                <br />
                <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white text-[#212529] text-xs sm:text-sm font-semibold shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#7E3FF2]" />
                  <span>Enforces 10-second biological breathing pause gates</span>
                </div>
                <br />
                <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white text-[#212529] text-xs sm:text-sm font-semibold shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#7E3FF2]" />
                  <span>Full-screen wake lock activity cuts through sleep</span>
                </div>
              </div>
            </div>

            {/* Right: Embedded Interactive Alarm Card (White Card in Zanderio Style) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white p-6 sm:p-8 text-[#212529] shadow-2xl space-y-4 border border-purple-100">
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#7E3FF2] flex items-center justify-center">
                      <Bell className="w-4 h-4 fill-current" />
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-slate-900">TaskAlarm Active</div>
                      <div className="text-[10px] text-slate-500 font-mono">07:00 AM • Deep Work</div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      soundFx.toggleBuzzer((active) => setIsBuzzerActive(active));
                    }}
                    className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-bold border transition-colors ${
                      isBuzzerActive 
                        ? 'bg-amber-500 text-slate-950 border-amber-600 animate-pulse' 
                        : 'bg-slate-100 text-slate-700 border-slate-300'
                    }`}
                  >
                    {isBuzzerActive ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                    <span>{isBuzzerActive ? 'Buzzer ON' : 'Test Tone'}</span>
                  </button>
                </div>

                {/* Challenge UI */}
                <div className="p-4 rounded-2xl bg-[#FAF8FF] border border-purple-100 space-y-2">
                  <div className="text-[10px] font-mono uppercase text-[#7E3FF2] font-bold">
                    Anti-Snooze Cognitive Challenge
                  </div>
                  <div className="text-xs text-slate-600">
                    Prove wakefulness to silence the alarm:
                  </div>
                  <div className="text-base font-mono font-extrabold text-slate-900">
                    24 + 18 = ?
                  </div>

                  <div className="flex gap-2 pt-1">
                    <input
                      type="text"
                      placeholder="Answer"
                      value={mathAnswer}
                      onChange={(e) => setMathAnswer(e.target.value)}
                      className="w-24 px-3 py-2 rounded-xl bg-white border border-purple-200 text-xs font-mono text-slate-900 focus:outline-none focus:border-[#7E3FF2]"
                    />
                    <button
                      onClick={handleVerify}
                      className="px-4 py-2 rounded-xl bg-[#7E3FF2] hover:bg-[#6C2FE0] text-white font-bold text-xs shadow-xs cursor-pointer"
                    >
                      Verify & Dismiss
                    </button>
                  </div>

                  {alarmSolved && (
                    <div className="text-xs font-bold text-emerald-700 mt-2 flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" />
                      Alertness verified! Alarm dismissed.
                    </div>
                  )}
                </div>

                <div className="text-[11px] text-slate-500 text-center font-mono">
                  FLAG_SHOW_WHEN_LOCKED • High Priority Audio Channel
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
