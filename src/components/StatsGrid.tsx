import React from 'react';
import { ArrowRight, Clock, ShieldCheck, Zap, HeartHandshake } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const StatsGrid: React.FC = () => {
  const stats = [
    {
      metric: '913 Hours',
      desc: 'spent annually by the average adult staring into mindless short-form video feeds without conscious intent.',
      icon: Clock,
      type: 'bottom'
    },
    {
      metric: '12 Minutes',
      desc: 'is how long an impulsive craving actually lasts. FocusCrew\'s 15-minute emergency delay outlasts the urge, preventing 96% of relapses.',
      icon: Zap,
      type: 'top'
    },
    {
      metric: '150,000+',
      desc: 'adult domains and explicit keywords blocked inside your phone\'s RAM in 0.2ms before the browser can even transmit a byte.',
      icon: ShieldCheck,
      type: 'bottom'
    },
    {
      metric: '$0 Free',
      desc: 'core production APK. 100% free with no recurring subscription traps, credit card paywalls, or cloud data logging.',
      icon: HeartHandshake,
      type: 'top'
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-purple-100 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Exact Zanderio Typography) */}
        <div className="max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#212529] tracking-tight">
            What’s Draining Your Ambition?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            FocusCrew solves this by acting as an on-device system guardian, delivering zero-latency DNS protection 
            and mindful friction gates that stop mindless scrolling before it takes over your day.
          </p>
        </div>

        {/* 4 Cards Grid with Exact Zanderio Alternating Top/Bottom U-Borders & Floating Circles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center max-w-6xl mx-auto">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            const isBottom = s.type === 'bottom';

            return (
              <div key={idx} className="flex flex-col items-center relative py-4">
                
                {/* Top Circle for 'bottom' cards (Cards 1 & 3) */}
                {isBottom && (
                  <div className="acs-circle-icon -mb-9 z-20">
                    <Icon className="w-7 h-7 text-[#7E3FF2]" />
                  </div>
                )}

                {/* U-Shaped Gradient Card Container */}
                <div className={isBottom ? 'acs-card-u-bottom w-full' : 'acs-card-u-top w-full'}>
                  <div className="acs-stat-card">
                    {/* Top space for bottom cards if icon overlaps */}
                    {isBottom && <div className="h-4" />}

                    <div className="acs-stat-value font-mono">
                      {s.metric}
                    </div>

                    <p className="acs-stat-text">
                      {s.desc}
                    </p>

                    {/* Bottom space for top cards if icon overlaps */}
                    {!isBottom && <div className="h-4" />}
                  </div>
                </div>

                {/* Bottom Circle for 'top' cards (Cards 2 & 4) */}
                {!isBottom && (
                  <div className="acs-circle-icon -mt-9 z-20">
                    <Icon className="w-7 h-7 text-[#7E3FF2]" />
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Centered Action Button (Exact Zanderio Pill Button) */}
        <div className="mt-14">
          <a
            href="#download-section"
            onClick={() => soundFx.playShieldTone()}
            className="acs-btn"
          >
            <span>Why Modern High-Performers Choose FocusCrew</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
