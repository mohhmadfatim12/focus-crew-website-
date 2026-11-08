import React, { useState } from 'react';
import { Clock, TrendingUp, Sparkles, ShieldCheck } from 'lucide-react';

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
  const hoursReclaimed = Math.round(hoursPerYear * 0.75);

  return (
    <section id="cost-calculator" className="py-20 md:py-28 bg-white border-b border-[#E5E2DA] text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#9E6F28]">
            Attention Audit
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1D1A] tracking-tight">
            Calculate your annual attention recovery.
          </h2>

          <p className="text-sm sm:text-base text-[#5E665F] leading-relaxed">
            Quantify how much waking time is claimed by short-form feeds, and what an enforced daily limit returns to your schedule.
          </p>
        </div>

        {/* Audit Container */}
        <div className="pro-card p-6 sm:p-10 space-y-8">
          
          {/* Controls: Presets and Slider */}
          <div className="space-y-6 max-w-2xl mx-auto">
            
            {/* Presets */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {presets.map((p) => {
                const isSelected = dailyHours === p.val;
                return (
                  <button
                    key={p.label}
                    onClick={() => setDailyHours(p.val)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#1A1D1A] text-white'
                        : 'bg-[#F7F5F0] text-[#525853] hover:text-[#1A1D1A] border border-[#E5E2DA]'
                    }`}
                  >
                    {p.label}
                  </button>
                );
              })}
            </div>

            {/* Slider Value Indicator */}
            <div className="flex items-baseline justify-between pt-2">
              <span className="text-xs font-mono text-[#525853]">Estimated Daily Scrolling:</span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-extrabold font-mono text-[#9E6F28]">{dailyHours.toFixed(1)}</span>
                <span className="text-xs text-[#525853]">hours / day</span>
              </div>
            </div>

            {/* Range Input */}
            <input
              type="range"
              min="0.5"
              max="6.0"
              step="0.5"
              value={dailyHours}
              onChange={(e) => setDailyHours(parseFloat(e.target.value))}
              className="w-full h-2 bg-[#E5E2DA] rounded-lg appearance-none cursor-pointer accent-[#9E6F28]"
            />
            
            <div className="flex justify-between text-[11px] font-mono text-[#7E857F]">
              <span>30 minutes</span>
              <span>3 hours</span>
              <span>6 hours</span>
            </div>

          </div>

          {/* Calculated Output Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-[#E5E2DA]">
            
            <div className="p-4 rounded-lg bg-[#F7F5F0] border border-[#E5E2DA] space-y-1">
              <div className="text-xs font-mono text-[#7E857F]">Monthly Time Lost</div>
              <div className="text-2xl font-bold font-mono text-[#1A1D1A]">{hoursPerMonth} hrs</div>
              <div className="text-[11px] text-[#525853]">Direct attention spent inside feeds</div>
            </div>

            <div className="p-4 rounded-lg bg-[#F7F5F0] border border-[#E5E2DA] space-y-1">
              <div className="text-xs font-mono text-[#7E857F]">Annual Time Lost</div>
              <div className="text-2xl font-bold font-mono text-[#1A1D1A]">{hoursPerYear} hrs</div>
              <div className="text-[11px] text-[#525853]">Cumulative annual drain</div>
            </div>

            <div className="p-4 rounded-lg bg-[#F7F5F0] border border-[#E5E2DA] space-y-1">
              <div className="text-xs font-mono text-[#7E857F]">Waking Days Consumed</div>
              <div className="text-2xl font-bold font-mono text-red-700">{wakingDaysLost} days</div>
              <div className="text-[11px] text-[#525853]">Based on 16 waking hours/day</div>
            </div>

            <div className="p-4 rounded-lg bg-[#EBF2ED] border border-[#C8DCD0] space-y-1">
              <div className="text-xs font-mono text-[#234E37]">Hours Reclaimable</div>
              <div className="text-2xl font-bold font-mono text-[#234E37]">{hoursReclaimed} hrs/yr</div>
              <div className="text-[11px] text-[#234E37]">With FocusCrew 15-reel daily cap</div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
export default DopamineCalculator;
