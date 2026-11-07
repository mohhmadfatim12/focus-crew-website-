import React, { useState } from 'react';
import { Bell, Volume2, VolumeX, CheckCircle, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const DeepPurpleBanner: React.FC = () => {
  const [mathAnswer, setMathAnswer] = useState('');
  const [isBuzzerActive, setIsBuzzerActive] = useState(false);
  const [alarmSolved, setAlarmSolved] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleVerify = () => {
    if (mathAnswer.trim() === '42') {
      soundFx.stopTaskAlarmBuzzer((active) => setIsBuzzerActive(active));
      setAlarmSolved(true);
      setErrorMessage('');
      setTimeout(() => setAlarmSolved(false), 3500);
    } else {
      setErrorMessage('Incorrect. Solve 24 + 18 to silence.');
      setTimeout(() => setErrorMessage(''), 2500);
    }
  };

  return (
    <section className="py-24 bg-white border-t border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full-Width Deep Purple Container (Exact Zanderio Signature Style) */}
        <div className="rounded-3xl bg-gradient-to-br from-[#6A28E5] via-[#7E3FF2] to-[#9055FD] p-8 sm:p-12 lg:p-16 text-white shadow-xl shadow-purple-600/25 relative overflow-hidden text-left">
          
          {/* Subtle background glow circle */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest px-3.5 py-1 rounded-full bg-white/20 text-white font-bold border border-white/25 inline-flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3 h-3" />
                SYSTEM WAKE ENFORCEMENT
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                The Alarm You Can't Turn Off In Your Sleep
              </h2>

              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                Standard alarms let you hit snooze four times while you are still half-asleep. 
                FocusCrew's TaskAlarm locks your entire screen, cuts through Do Not Disturb, and makes you solve math equations before the sound stops.
              </p>

              {/* 3 White Pill Feature Badges (Exact Zanderio Pill Style) */}
              <div className="space-y-3 pt-2">
                <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white text-[#212529] text-xs sm:text-sm font-semibold shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#7E3FF2]" />
                  <span>Full-screen takeover—blocks home button and status bar</span>
                </div>
                <br />
                <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white text-[#212529] text-xs sm:text-sm font-semibold shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#7E3FF2]" />
                  <span>Bypasses Android Do Not Disturb and silent vibration mode</span>
                </div>
                <br />
                <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white text-[#212529] text-xs sm:text-sm font-semibold shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#7E3FF2]" />
                  <span>Forces your prefrontal cortex awake with arithmetic before silencing</span>
                </div>
              </div>
            </div>

            {/* Right: Embedded Interactive Alarm Card (White Card in Zanderio Style) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white p-6 sm:p-8 text-[#212529] shadow-2xl space-y-4 border border-purple-100">
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-purple-50 text-[#7E3FF2] flex items-center justify-center">
                      <Bell className="w-4 h-4 fill-current" />
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-slate-900">TaskAlarm Active</div>
                      <div className="text-[10px] text-slate-500 font-mono">06:00 AM • Morning Deep Work</div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      soundFx.toggleBuzzer((active) => setIsBuzzerActive(active));
                    }}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold border transition-colors cursor-pointer ${
                      isBuzzerActive 
                        ? 'bg-amber-500 text-slate-950 border-amber-600 animate-pulse' 
                        : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
                    }`}
                  >
                    {isBuzzerActive ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                    <span>{isBuzzerActive ? 'Buzzer Ringing' : 'Test Audio'}</span>
                  </button>
                </div>

                {/* Challenge UI */}
                <div className="p-4 rounded-2xl bg-[#FAF8FF] border border-purple-100 space-y-3">
                  <div className="text-[10px] font-mono uppercase text-[#7E3FF2] font-bold">
                    Anti-Snooze Cognitive Challenge
                  </div>
                  
                  <div className="text-sm font-extrabold text-slate-900">
                    Solve to Silence: <span className="font-mono text-[#7E3FF2] text-base">24 + 18 = ?</span>
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Answer"
                      value={mathAnswer}
                      onChange={(e) => setMathAnswer(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm font-mono focus:outline-none focus:border-[#7E3FF2] bg-white text-slate-900"
                    />
                    <button
                      onClick={handleVerify}
                      className="px-4 py-2 rounded-xl bg-[#7E3FF2] hover:bg-[#6C2FE0] text-white text-xs font-bold transition-all cursor-pointer whitespace-nowrap shadow-sm"
                    >
                      Verify
                    </button>
                  </div>

                  {errorMessage && (
                    <div className="text-[11px] text-red-600 font-bold font-mono">
                      {errorMessage}
                    </div>
                  )}

                  {alarmSolved && (
                    <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-bold bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Alarm Silenced! Morning Wake Verified.</span>
                    </div>
                  )}
                </div>

                <div className="text-[11px] text-slate-500 text-center font-mono">
                  * Full-screen system intent overrides Android home gestures
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
