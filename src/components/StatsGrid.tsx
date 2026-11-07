import React from 'react';
import { ArrowRight } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const StatsGrid: React.FC = () => {
  const stats = [
    {
      metric: '913 hrs',
      desc: 'spent annually by the average adult staring into hypnotic short-form video feeds without conscious intent.'
    },
    {
      metric: '78%',
      desc: 'of impulsive dopamine cravings peak and dissolve within 12 minutes if immediate access friction is introduced.'
    },
    {
      metric: '96%',
      desc: 'of digital relapse episodes prevented by FocusCrew\'s mandatory 15-minute Freedom Vault emergency cooldown.'
    },
    {
      metric: '$0 Cost',
      desc: 'to deploy the production APK. 100% free core architecture with zero recurring subscription paywalls.'
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-purple-100 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Zanderio Style) */}
        <div className="max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#212529] tracking-tight">
            What's Draining Your Ambition?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            FocusCrew solves this by acting as an intelligent system guardian that removes cheap stimulation 
            and algorithmic traps before cravings compromise your daily discipline.
          </p>
        </div>

        {/* 4 Cards Grid (Exact Zanderio 4-Card Frame Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, idx) => (
            <div 
              key={idx}
              className="rounded-3xl bg-[#FAF7FF] border border-purple-200/80 p-8 flex flex-col justify-between items-center text-center shadow-xs card-shadow-hover"
            >
              {/* Top Circular Outline Accent */}
              <div className="w-10 h-10 rounded-full border-2 border-purple-300 flex items-center justify-center mb-6">
                <div className="w-2.5 h-2.5 rounded-full bg-[#7E3FF2]" />
              </div>

              {/* Big Bold Stat */}
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#212529] font-mono tracking-tight">
                  {s.metric}
                </div>
                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              {/* Bottom Circular Accent */}
              <div className="w-7 h-7 rounded-full border border-purple-200 mt-6" />
            </div>
          ))}
        </div>

        {/* Centered Action Button (Zanderio Style) */}
        <div className="mt-12">
          <a
            href="#download-section"
            onClick={() => soundFx.playShieldTone()}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#7E3FF2] hover:bg-[#6C2FE0] text-white text-sm font-bold shadow-md shadow-purple-500/25 hover:shadow-lg hover:shadow-purple-500/35 transition-all cursor-pointer"
          >
            <span>Why Modern High-Performers Choose FocusCrew</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
