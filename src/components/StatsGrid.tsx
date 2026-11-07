import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const StatsGrid: React.FC = () => {
  const stats = [
    {
      metric: '913 Hours',
      desc: 'The average adult spends 2.5 hours every single day swiping short-form video feeds. That is 38 full 24-hour days lost every year.'
    },
    {
      metric: '12 Minutes',
      desc: 'How long an impulsive craving actually lasts. FocusCrew\'s 15-minute emergency delay outlasts the urge, preventing 96% of relapses.'
    },
    {
      metric: '150,000+',
      desc: 'Adult domains and explicit keywords blocked right inside your device\'s RAM in 0.2ms before the browser can even open a socket.'
    },
    {
      metric: '$0 Free',
      desc: 'No subscription traps, no $12/month paywalls, and zero cloud tracking. Download the official production APK directly for free.'
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-purple-100 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Zanderio Style) */}
        <div className="max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-[#7E3FF2] shadow-2xs">
            <Flame className="w-3.5 h-3.5" />
            <span>THE HARD NUMBERS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#212529] tracking-tight">
            Why Willpower Alone Always Fails
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Willpower is like a phone battery: it runs out by the end of the day. At 11 PM when you are exhausted, 
            self-control breaks down. FocusCrew never gets tired.
          </p>
        </div>

        {/* 4 Cards Grid (Exact Zanderio 4-Card Frame Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, idx) => (
            <div 
              key={idx}
              className="rounded-3xl bg-[#FAF7FF] border border-purple-200/80 p-8 flex flex-col justify-between items-center text-center shadow-xs card-shadow-hover relative overflow-hidden group"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Top Circular Outline Accent (Zanderio Signature) */}
              <div className="w-10 h-10 rounded-full border-2 border-purple-300 flex items-center justify-center mb-6">
                <div className="w-2.5 h-2.5 rounded-full bg-[#7E3FF2]" />
              </div>

              {/* Big Bold Stat */}
              <div className="relative z-10">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#212529] font-mono tracking-tight">
                  {s.metric}
                </div>
                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {s.desc}
                </p>
              </div>

              {/* Bottom Circular Accent (Zanderio Signature) */}
              <div className="w-7 h-7 rounded-full border border-purple-200 mt-6 group-hover:border-purple-400 transition-colors" />
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
            <span>Stop Leaving Your Discipline to Chance</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
