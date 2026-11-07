import React, { useState } from 'react';
import { Sliders, Clock, BookOpen, Dumbbell, Code2, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const DopamineCalculator: React.FC = () => {
  const [dailyHours, setDailyHours] = useState<number>(2.5);

  // Calculations
  const hoursPerMonth = Math.round(dailyHours * 30.5);
  const hoursPerYear = Math.round(dailyHours * 365);
  const wakingDaysLost = Math.round((hoursPerYear / 16) * 10) / 10;
  
  const booksRead = Math.round(hoursPerYear / 6);
  const softwareProjects = Math.max(1, Math.round(hoursPerYear / 200));
  const workoutsCompleted = Math.round(hoursPerYear / 1.2);
  
  const hoursReclaimed = Math.round(hoursPerYear * 0.78);

  return (
    <section id="cost-calculator" className="py-24 bg-slate-50 relative border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono text-slate-700 shadow-2xs">
            <Sliders className="w-3.5 h-3.5 text-blue-600" />
            DOOMSCROLL TIME AUDIT
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The invisible theft of your youth.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Short-form algorithms don't just consume your time—they fragment your dopaminergic baseline. 
            Adjust your daily screen time below to face the exact biological math.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm text-left">
          
          {/* Slider Control */}
          <div className="space-y-4 mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <label htmlFor="daily-hours-slider" className="text-sm font-bold text-slate-800">
                Daily time spent on Reels, Shorts, TikTok & feeds:
              </label>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 font-mono font-extrabold text-lg">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>{dailyHours} hours / day</span>
              </div>
            </div>

            <input
              id="daily-hours-slider"
              type="range"
              min="0.5"
              max="6.0"
              step="0.5"
              value={dailyHours}
              onChange={(e) => {
                soundFx.playChime();
                setDailyHours(parseFloat(e.target.value));
              }}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />

            <div className="flex justify-between text-[11px] font-mono text-slate-500">
              <span>30 mins (Light)</span>
              <span>2.5 hours (Average)</span>
              <span>4.5 hours (Heavy)</span>
              <span>6.0 hours (Compulsive)</span>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-[10px] font-mono uppercase text-slate-500 mb-1 font-semibold">Time Lost Annually</div>
              <div className="text-3xl font-extrabold text-rose-600 font-mono">
                {hoursPerYear} <span className="text-sm font-sans font-bold text-slate-500">hours</span>
              </div>
              <p className="text-xs text-slate-600 mt-2">
                That is <span className="text-slate-900 font-semibold font-mono">{hoursPerMonth} hours</span> vanishing from your life every single month.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-[10px] font-mono uppercase text-slate-500 mb-1 font-semibold">Full Waking Days Lost</div>
              <div className="text-3xl font-extrabold text-amber-600 font-mono">
                {wakingDaysLost} <span className="text-sm font-sans font-bold text-slate-500">days</span>
              </div>
              <p className="text-xs text-slate-600 mt-2">
                Equivalent to spending <span className="text-slate-900 font-semibold font-mono">nearly 2 full months</span> of conscious life staring into glass.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200">
              <div className="text-[10px] font-mono uppercase text-emerald-800 mb-1 font-bold">FocusCrew Reclaimed</div>
              <div className="text-3xl font-extrabold text-emerald-700 font-mono">
                +{hoursReclaimed} <span className="text-sm font-sans font-bold text-emerald-800">hours</span>
              </div>
              <p className="text-xs text-emerald-800/80 mt-2">
                Reclaimed into your consciousness by FocusCrew's friction gates and task alarms.
              </p>
            </div>

          </div>

          {/* Achievable Milestones */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <h4 className="text-xs font-mono font-bold uppercase text-slate-600 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              What {hoursPerYear} Hours Could Have Built This Year:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="p-2 rounded-lg bg-blue-50 text-blue-700">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-slate-900 font-mono">{booksRead}</div>
                  <div className="text-[11px] text-slate-500">Books Read & Absorbed</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700">
                  <Dumbbell className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-slate-900 font-mono">{workoutsCompleted}</div>
                  <div className="text-[11px] text-slate-500">Intense Gym Sessions</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="p-2 rounded-lg bg-purple-50 text-purple-700">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-slate-900 font-mono">{softwareProjects}</div>
                  <div className="text-[11px] text-slate-500">Shipped Software MVPs</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
