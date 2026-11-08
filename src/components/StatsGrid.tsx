import React from 'react';
import { Clock, ShieldCheck, Zap, Shield } from 'lucide-react';

export const StatsGrid: React.FC = () => {
  const metrics = [
    {
      value: '913 Hours',
      label: 'Annual Lost Attention',
      desc: 'Spent by the average smartphone user in passive algorithmic feeds (Reels, Shorts, TikTok) each year.',
      icon: Clock
    },
    {
      value: '12 Minutes',
      label: 'Craving Half-Life',
      desc: 'The biological peak duration of an impulsive dopamine urge. The Freedom Vault enforces a 15-minute cooldown to outlast it.',
      icon: Zap
    },
    {
      value: '154,820',
      label: 'RAM Threat Signatures',
      desc: 'Adult domains and explicit query patterns stored in an in-memory Bloom filter for instant sub-millisecond drops.',
      icon: ShieldCheck
    },
    {
      value: '0 Bytes',
      label: 'Cloud Data Leakage',
      desc: 'No remote DNS relays, no analytics SDKs, and zero subscription paywalls. All filtering happens 100% locally on Android.',
      icon: Shield
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-white border-b border-[#E5E2DA] text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="text-eyebrow text-[#9E6F28]">
            Quantitative Baseline
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1D1A] tracking-tight leading-tight">
            The measurable toll of modern phone addiction.
          </h2>
          <p className="text-base text-[#525853] leading-relaxed">
            Engineered around verifiable biological and technical parameters rather than vague productivity promises.
          </p>
        </div>

        {/* 4-Card Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="pro-card p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="w-9 h-9 rounded-lg bg-[#F7F5F0] border border-[#E5E2DA] flex items-center justify-center text-[#1A1D1A]">
                    <Icon className="w-4 h-4 text-[#9E6F28]" />
                  </div>
                  <div className="text-2xl font-bold tracking-tight text-[#1A1D1A] pt-2">
                    {item.value}
                  </div>
                  <div className="text-sm font-semibold text-[#1A1D1A]">
                    {item.label}
                  </div>
                </div>

                <p className="text-sm text-[#525853] leading-relaxed pt-3 border-t border-[#E5E2DA]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
export default StatsGrid;
