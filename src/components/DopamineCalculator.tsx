import React, { useState } from 'react';
import { Sliders, Clock, BookOpen, Dumbbell, Code2, Sparkles, ArrowRight } from 'lucide-react';
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

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setDailyHours(val);
    if (Math.random() > 0.6) {
      soundFx.playChime();
    }
  };

  return (
    <section id="cost-calculator" className="py-24 bg-white border-t border-purple-100 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-[#7E3FF2] shadow-2xs">
            <Sliders className="w-3.5 h-3.5" />
            <span>REAL TIME AUDIT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#212529] tracking-tight">
            How Much of Your Life is Doomscrolling Stealing?
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Be honest with yourself. Drag the slider to see how many days you lose every year to short-form video feeds—and what you could build instead.
          </p>
        </div>

        {/* Calculator Main Box (Light Theme) */}
        <div className="max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl bg-[#FAF7FF] border border-purple-200/90 shadow-sm">
          
          {/* Slider Control */}
          <div className="space-y-4 mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <label htmlFor="daily-hours-slider" className="text-sm font-bold text-slate-900">
                Daily time spent on Reels, Shorts, TikTok & feeds:
              </label>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-purple-200 text-[#7E3FF2] font-mono font-extrabold text-lg shadow-2xs">
                <Clock className="w-4 h-4" />
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
              onChange={handleSliderChange}
              className="w-full h-3 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-[#7E3FF2]"
            />

            <div className="flex justify-between text-[11px] font-mono text-slate-400">
              <span>30 mins (Casual)</span>
              <span>2.5 hrs (Average Adult)</span>
              <span>6 hrs (Severe Doomscroll)</span>
            </div>
          </div>

          {/* Big Impact Numbers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-2xs text-center space-y-1">
              <span className="text-[10px] font-mono uppercase text-slate-400 font-bold">Lost Per Month</span>
              <div className="text-3xl font-extrabold text-[#212529] font-mono">{hoursPerMonth} Hours</div>
              <span className="text-xs text-slate-500">wasted every 30 days</span>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-2xs text-center space-y-1">
              <span className="text-[10px] font-mono uppercase text-slate-400 font-bold">Lost Per Year</span>
              <div className="text-3xl font-extrabold text-[#7E3FF2] font-mono">{hoursPerYear} Hours</div>
              <span className="text-xs text-slate-500">gone forever into feeds</span>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-red-200 shadow-2xs text-center space-y-1 bg-red-50/40">
              <span className="text-[10px] font-mono uppercase text-red-600 font-bold">Waking Days Lost</span>
              <div className="text-3xl font-extrabold text-red-600 font-mono">{wakingDaysLost} Days</div>
              <span className="text-xs text-red-700/80">of 16-hour waking life erased</span>
            </div>
          </div>

          {/* What You Could Build Instead */}
          <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-2xs space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase font-mono tracking-wider">
              <Sparkles className="w-4 h-4 text-[#7E3FF2]" />
              <span>What You Could Build With That Time:</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF8FF] border border-purple-100">
                <div className="w-9 h-9 rounded-lg bg-purple-100 text-[#7E3FF2] flex items-center justify-center shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-slate-900 font-mono">{booksRead} Books</div>
                  <div className="text-[11px] text-slate-500">Read & internalized</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF8FF] border border-purple-100">
                <div className="w-9 h-9 rounded-lg bg-purple-100 text-[#7E3FF2] flex items-center justify-center shrink-0">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-slate-900 font-mono">{softwareProjects} Projects</div>
                  <div className="text-[11px] text-slate-500">Built & deployed</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF8FF] border border-purple-100">
                <div className="w-9 h-9 rounded-lg bg-purple-100 text-[#7E3FF2] flex items-center justify-center shrink-0">
                  <Dumbbell className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-slate-900 font-mono">{workoutsCompleted} Workouts</div>
                  <div className="text-[11px] text-slate-500">Completed at the gym</div>
                </div>
              </div>
            </div>

            {/* FocusCrew Reclaim stat */}
            <div className="pt-3 border-t border-purple-50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
              <div>
                With FocusCrew's 15-reel cap, you reclaim an estimated <strong className="text-[#7E3FF2] font-mono text-sm">+{hoursReclaimed} hours/year</strong> of clear, undistracted focus.
              </div>

              <a
                href="#download-section"
                onClick={() => soundFx.playShieldTone()}
                className="px-4 py-2 rounded-xl bg-[#7E3FF2] hover:bg-[#6C2FE0] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer whitespace-nowrap self-start sm:self-auto"
              >
                <span>Reclaim Your Time</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
