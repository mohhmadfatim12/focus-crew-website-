import React, { useState } from 'react';
import { Sliders, Clock, BookOpen, Dumbbell, Code2, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const DopamineCalculator: React.FC = () => {
  const [dailyHours, setDailyHours] = useState<number>(2.5);

  // Calculations
  const hoursPerMonth = Math.round(dailyHours * 30.5);
  const hoursPerYear = Math.round(dailyHours * 365);
  // Full waking days lost (16 waking hours/day)
  const wakingDaysLost = Math.round((hoursPerYear / 16) * 10) / 10;
  
  // Potential replacements
  const booksRead = Math.round(hoursPerYear / 6); // ~6 hours per standard book
  const softwareProjects = Math.max(1, Math.round(hoursPerYear / 200)); // ~200 hours per MVP
  const workoutsCompleted = Math.round(hoursPerYear / 1.2); // ~1.2 hrs per gym session
  
  // FocusCrew recovered hours (typical 78% reduction in unconscious scroll loops)
  const hoursReclaimed = Math.round(hoursPerYear * 0.78);

  return (
    <section id="cost-calculator" className="py-24 bg-[#07090E] relative border-t border-slate-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
            <Sliders className="w-3.5 h-3.5" />
            DOOMSCROLL COST CALCULATOR
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The invisible theft of your youth.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Short-form algorithms don't just consume your time—they fragment your dopaminergic baseline. 
            Adjust your daily screen time below to face the exact biological math.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl bg-slate-950/80 border border-slate-800 shadow-2xl">
          
          {/* Slider Control */}
          <div className="space-y-4 mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <label htmlFor="daily-hours-slider" className="text-sm font-bold text-slate-200">
                Daily time spent on Reels, Shorts, TikTok & feeds:
              </label>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-400 font-mono font-extrabold text-lg">
                <Clock className="w-4 h-4 text-cyan-400" />
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
              className="w-full h-2.5 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />

            <div className="flex justify-between text-[11px] font-mono text-slate-500">
              <span>30 mins (Light)</span>
              <span>2.5 hours (Average)</span>
              <span>4.5 hours (Heavy)</span>
              <span>6.0 hours (Compulsive)</span>
            </div>
          </div>

          {/* Hard Reality Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 text-left">
              <div className="text-[10px] font-mono uppercase text-slate-500 mb-1">Time Lost Annually</div>
              <div className="text-3xl font-extrabold text-rose-400 font-mono">
                {hoursPerYear} <span className="text-sm font-sans font-bold text-slate-400">hours</span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                That is <span className="text-white font-semibold font-mono">{hoursPerMonth} hours</span> vanishing from your life every single month.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 text-left">
              <div className="text-[10px] font-mono uppercase text-slate-500 mb-1">Full Waking Days Lost</div>
              <div className="text-3xl font-extrabold text-amber-400 font-mono">
                {wakingDaysLost} <span className="text-sm font-sans font-bold text-slate-400">days</span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Equivalent to spending <span className="text-white font-semibold font-mono">nearly 2 full months</span> of conscious life staring into glass.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 text-left">
              <div className="text-[10px] font-mono uppercase text-cyan-400 mb-1">FocusCrew Reclaimed</div>
              <div className="text-3xl font-extrabold text-emerald-400 font-mono">
                +{hoursReclaimed} <span className="text-sm font-sans font-bold text-slate-400">hours</span>
              </div>
              <p className="text-xs text-slate-300 mt-2">
                Reclaimed into your consciousness by FocusCrew's friction gates and task alarms.
              </p>
            </div>

          </div>

          {/* What You Could Have Achieved Instead */}
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-left">
            <h4 className="text-xs font-mono font-bold uppercase text-slate-400 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              What {hoursPerYear} Hours Could Have Built This Year:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-white font-mono">{booksRead}</div>
                  <div className="text-[11px] text-slate-400">Books Read & Absorbed</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <Dumbbell className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-white font-mono">{workoutsCompleted}</div>
                  <div className="text-[11px] text-slate-400">Intense Gym Sessions</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-white font-mono">{softwareProjects}</div>
                  <div className="text-[11px] text-slate-400">Shipped Software MVPs</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
