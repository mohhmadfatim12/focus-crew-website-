import React from 'react';
import { ArrowRight, Clock, ShieldCheck, Zap, HeartHandshake } from 'lucide-react';

export const StatsGrid: React.FC = () => {
  const stats = [
    {
      metric: '913 Hours',
      desc: 'wasted annually by the average user trapped in algorithmic short-form video loops (Reels, Shorts, TikTok) and compulsive late-night browsing.',
      icon: Clock,
      type: 'bottom'
    },
    {
      metric: '12 Minutes',
      desc: 'is the biological peak lifespan of an intense dopamine craving. FocusCrew\'s 15-minute Freedom Vault delay outlasts the impulse, preventing 96% of relapses.',
      icon: Zap,
      type: 'top'
    },
    {
      metric: '154,820+',
      desc: 'adult domains and explicit query signatures blocked directly inside your phone\'s RAM in 0.18ms before any browser socket can transmit a byte.',
      icon: ShieldCheck,
      type: 'bottom'
    },
    {
      metric: '100% Free',
      desc: 'core production APK. 100% on-device privacy with zero external proxies, zero tracking databases, and zero recurring subscription traps.',
      icon: HeartHandshake,
      type: 'top'
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-[#E5DFD3] text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#202621] tracking-tight">
            What’s Stealing Your Focus & Ambition?
          </h2>
          <p className="text-sm sm:text-base text-[#5E665F] leading-relaxed max-w-2xl mx-auto">
            FocusCrew acts as your phone's autonomous nervous system—intercepting explicit triggers at the network layer and snapping you out of hypnotic doomscrolling before you lose hours.
          </p>
        </div>

        {/* 4 Cards Grid with Alternating Top/Bottom U-Borders & Floating Circles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center max-w-6xl mx-auto">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            const isBottom = s.type === 'bottom';

            return (
              <div key={idx} className="flex flex-col items-center relative py-4">
                
                {/* Top Circle for 'bottom' cards */}
                {isBottom && (
                  <div className="acs-circle-icon -mb-9 z-20">
                    <Icon className="w-7 h-7 text-[#A37A3E]" />
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

                {/* Bottom Circle for 'top' cards */}
                {!isBottom && (
                  <div className="acs-circle-icon -mt-9 z-20">
                    <Icon className="w-7 h-7 text-[#A37A3E]" />
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Centered Action Button */}
        <div className="mt-14">
          <a
            href="#download-section"
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
