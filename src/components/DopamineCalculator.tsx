import React, { useState } from 'react';
import { BookOpen, Dumbbell, Code2, Sparkles, ArrowRight, AlertCircle, TrendingUp } from 'lucide-react';

export const DopamineCalculator: React.FC = () => {
  const [dailyHours, setDailyHours] = useState<number>(2.5);

  const presets = [
    { label: '30m Light', val: 0.5 },
    { label: '1.5h Moderate', val: 1.5 },
    { label: '2.5h Average', val: 2.5 },
    { label: '4h Heavy', val: 4.0 },
    { label: '6h Severe', val: 6.0 }
  ];

  // Mathematical Telemetry
  const hoursPerMonth = Math.round(dailyHours * 30.5);
  const hoursPerYear = Math.round(dailyHours * 365);
  const wakingDaysLost = Math.round((hoursPerYear / 16) * 10) / 10;
  const percentWakingLife = Math.round(((hoursPerYear / (365 * 16)) * 100) * 10) / 10;

  // Reclaimed Potential
  const booksRead = Math.max(2, Math.round(hoursPerYear / 8));
  const softwareProjects = Math.max(1, Math.round(hoursPerYear / 180));
  const workoutsCompleted = Math.max(15, Math.round(hoursPerYear / 1.5));
  const hoursReclaimed = Math.round(hoursPerYear * 0.78);

  // Slider progress percentage
  const sliderPercentage = ((dailyHours - 0.5) / (6.0 - 0.5)) * 100;

  return (
    <section id="cost-calculator" className="py-24 bg-white border-t border-purple-100 text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/80 text-xs font-bold text-[#7E3FF2] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>REAL-TIME COGNITIVE AUDIT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#212529] tracking-tight leading-tight">
            How Much of Your Life is <br className="hidden sm:inline" />
            <span className="text-[#7E3FF2]">Doomscrolling Stealing?</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Drag the slider or choose a preset to audit the true annual cost of short-form feeds—and see the tangible superpowers you unlock when you reclaim that time.
          </p>
        </div>

        {/* Master Interactive Ceramic Container */}
        <div className="rounded-3xl bg-white border border-slate-200/80 shadow-[0_20px_50px_rgba(126,63,242,0.06)] p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          
          {/* Subtle Ambient Decorative Gradient Glows */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-purple-100/50 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-emerald-50/50 blur-3xl pointer-events-none" />

          {/* Top Controls: Preset Pills & Slider */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-6 mb-12">
            
            {/* Quick Preset Selector Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              {presets.map((p) => {
                const isSelected = dailyHours === p.val;
                return (
                  <button
                    key={p.label}
                    onClick={() => setDailyHours(p.val)}
                    className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-[#7E3FF2] text-white shadow-md shadow-purple-500/25 scale-105'
                        : 'bg-slate-100/80 hover:bg-slate-200 text-slate-700 border border-slate-200/60'
                    }`}
                  >
                    {p.label}
                  </button>
                );
              })}
            </div>

            {/* Slider Header Metric */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pt-2">
              <span className="text-xs sm:text-sm font-bold text-slate-800 uppercase font-mono tracking-wider">
                Daily Feed Consumption:
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#7E3FF2] font-mono tracking-tight">
                  {dailyHours.toFixed(1)}
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-500">hours every day</span>
                <span className="text-[11px] font-mono text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-0.5 rounded-full font-semibold ml-1">
                  ~{Math.round(dailyHours * 18)} short videos
                </span>
              </div>
            </div>

            {/* Custom Interactive Range Track */}
            <div className="relative pt-1">
              <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200 relative">
                <div 
                  className="h-full bg-gradient-to-r from-[#7E3FF2] to-[#9055FD] rounded-full transition-all duration-150"
                  style={{ width: `${sliderPercentage}%` }}
                />
              </div>

              <input
                id="daily-hours-slider"
                type="range"
                min="0.5"
                max="6.0"
                step="0.5"
                value={dailyHours}
                onChange={(e) => setDailyHours(parseFloat(e.target.value))}
                aria-label="Daily time spent on reels"
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
              />

              <div className="flex justify-between items-center text-[11px] font-mono text-slate-400 mt-2.5">
                <span>30 mins (Casual)</span>
                <span className="text-slate-600 font-semibold">2.5 hrs (National Avg)</span>
                <span>6.0 hrs (Severe Addiction)</span>
              </div>
            </div>

          </div>

          {/* Two-Column Telemetry Split Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-10">
            
            {/* Left Card: The Cost of Doomscrolling */}
            <div className="lg:col-span-6 rounded-2xl bg-gradient-to-b from-[#FAF7FF] to-white border border-purple-100 p-6 sm:p-8 flex flex-col justify-between shadow-2xs">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-purple-100 text-[#7E3FF2] flex items-center justify-center">
                      <AlertCircle className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                      The Annual Cognitive Cost
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-[#7E3FF2]">
                    {percentWakingLife}% of waking life
                  </span>
                </div>

                {/* Hero Number */}
                <div className="py-2">
                  <div className="text-4xl sm:text-5xl font-extrabold text-[#212529] font-mono tracking-tight">
                    {wakingDaysLost} Days
                  </div>
                  <div className="text-xs font-bold text-slate-600 mt-1">
                    of complete 16-hour waking consciousness erased annually
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  When you spend {dailyHours} hours daily on short-form loops, you don't just lose minutes—you fragment your brain's prefrontal cortex, crippling your ability to focus deeply.
                </p>
              </div>

              {/* Sub-Metrics Strip */}
              <div className="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-purple-100/70">
                <div className="p-3 rounded-xl bg-white border border-purple-100/80">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold">Lost Per Month</span>
                  <div className="text-xl font-extrabold text-slate-900 font-mono mt-0.5">{hoursPerMonth} Hours</div>
                  <span className="text-[10px] text-slate-500">evaporated into feeds</span>
                </div>

                <div className="p-3 rounded-xl bg-white border border-purple-100/80">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold">Lost Per Year</span>
                  <div className="text-xl font-extrabold text-[#7E3FF2] font-mono mt-0.5">{hoursPerYear} Hours</div>
                  <span className="text-[10px] text-slate-500">stolen by algorithms</span>
                </div>
              </div>
            </div>

            {/* Right Card: The FocusCrew Superpower (What You Build Instead) */}
            <div className="lg:col-span-6 rounded-2xl bg-gradient-to-b from-[#F0FDF4]/40 to-white border border-emerald-200/80 p-6 sm:p-8 flex flex-col justify-between shadow-2xs">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-900">
                      Reclaimed Potential
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    With FocusCrew 15-Reel Cap
                  </span>
                </div>

                {/* Hero Number */}
                <div className="py-2">
                  <div className="text-4xl sm:text-5xl font-extrabold text-emerald-700 font-mono tracking-tight">
                    +{hoursReclaimed} Hours
                  </div>
                  <div className="text-xs font-bold text-slate-800 mt-1">
                    of pure deep work returned to your life every single year
                  </div>
                </div>

                {/* 3 Real Life Accomplishments */}
                <div className="space-y-2.5 pt-1">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-emerald-100 shadow-2xs">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                        <Code2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-bold text-slate-800">Full-Stack Software Projects</span>
                    </div>
                    <span className="text-sm font-extrabold font-mono text-emerald-700">+{softwareProjects} Shipped</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-emerald-100 shadow-2xs">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                        <BookOpen className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-bold text-slate-800">Complete Non-Fiction Books</span>
                    </div>
                    <span className="text-sm font-extrabold font-mono text-emerald-700">+{booksRead} Mastered</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-emerald-100 shadow-2xs">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                        <Dumbbell className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-bold text-slate-800">Intense Gym & Cardio Sessions</span>
                    </div>
                    <span className="text-sm font-extrabold font-mono text-emerald-700">+{workoutsCompleted} Finished</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 text-[11px] text-slate-500 font-mono text-center border-t border-emerald-100/60 mt-4">
                * Based on FocusCrew's verified 8-second mindful pause & 15-reel daily guardrail.
              </div>
            </div>

          </div>

          {/* Bottom Action Bar */}
          <div className="relative z-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-600 text-center sm:text-left">
              Built by <strong className="text-slate-900">Mohammad Fatim Hasnain</strong> to dismantle short-form addiction at the system level.
            </div>

            <a
              href="#download-section"
              className="acs-btn"
            >
              <span>Reclaim Your Time — Get APK Free</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
