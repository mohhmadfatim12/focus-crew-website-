import React from 'react';
import { Check, X, Shield, Sparkles } from 'lucide-react';

export const ComparisonMatrix: React.FC = () => {
  const comparisonData = [
    {
      feature: 'Local DNS Loopback (100% On-Device)',
      focuscrew: true,
      opal: false,
      freedom: false,
      screenTime: false,
      note: 'FocusCrew never routes your browsing history through outside cloud servers'
    },
    {
      feature: '15-Minute Emergency Unlock Cooldown',
      focuscrew: true,
      opal: 'Limited',
      freedom: 'Partial',
      screenTime: false,
      note: 'Gives your rational mind time to take control during late-night impulses'
    },
    {
      feature: 'Reel Counter (Instagram / Shorts / TikTok)',
      focuscrew: true,
      opal: false,
      freedom: false,
      screenTime: false,
      note: 'Tracks individual video swipes and triggers an 8-second breathing gate'
    },
    {
      feature: 'Military TaskAlarm (Wake Lock + Math)',
      focuscrew: true,
      opal: false,
      freedom: false,
      screenTime: false,
      note: 'Takes over the entire screen, ignores DND, and requires arithmetic to silence'
    },
    {
      feature: 'Forced SafeSearch in All Browsers',
      focuscrew: true,
      opal: false,
      freedom: 'Partial',
      screenTime: 'Partial',
      note: 'Forces strict safe results across Google, Bing, and YouTube in any browser'
    },
    {
      feature: 'Zero Accounts & Zero Telemetry Tracking',
      focuscrew: true,
      opal: false,
      freedom: false,
      screenTime: false,
      note: 'No signups, no analytics SDKs, and zero telemetry leaving your phone'
    },
    {
      feature: 'Annual Price',
      focuscrew: '100% Free / Direct APK',
      opal: '$99.99 / year',
      freedom: '$39.99 / year',
      screenTime: 'Free (Bypassed in 3s)',
      note: 'No subscription traps or credit card requirements'
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-purple-100 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-[#7E3FF2] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HONEST COMPARISON</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#212529] tracking-tight">
            FocusCrew vs. Commercial Blockers
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Why paying $99/year for commercial blocker apps still ends in a relapse—and how FocusCrew is built different.
          </p>
        </div>

        {/* Comparison Table (Zanderio Style Table Card) */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#FAF7FF] border border-purple-200/90 shadow-sm overflow-hidden">
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-purple-200/70 bg-white">
                  <th className="py-5 px-6 text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Protection Feature
                  </th>
                  <th className="py-5 px-6 text-xs font-mono font-bold text-[#7E3FF2] uppercase tracking-wider bg-purple-50/80 border-x border-purple-200/60">
                    <div className="flex items-center gap-1.5">
                      <Shield className="w-4 h-4 fill-current" />
                      <span>FocusCrew (APK)</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                    Opal ($99/yr)
                  </th>
                  <th className="py-5 px-6 text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                    Freedom ($40/yr)
                  </th>
                  <th className="py-5 px-6 text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                    Android Screen Time
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-purple-100 text-xs sm:text-sm">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-purple-100/30 transition-colors">
                    
                    {/* Feature & Note */}
                    <td className="py-4 px-6 text-slate-900 font-semibold bg-white/70">
                      <div>{row.feature}</div>
                      <div className="text-[11px] text-slate-500 font-normal mt-0.5 font-sans">
                        {row.note}
                      </div>
                    </td>

                    {/* FocusCrew Column (Highlighted) */}
                    <td className="py-4 px-6 font-bold text-purple-950 bg-purple-50/50 border-x border-purple-200/60 text-center sm:text-left">
                      {typeof row.focuscrew === 'boolean' ? (
                        <div className="inline-flex items-center gap-1.5 text-[#7E3FF2] font-mono">
                          <Check className="w-4 h-4 stroke-[3]" />
                          <span>Included</span>
                        </div>
                      ) : (
                        <span className="inline-block px-2.5 py-1 rounded-md bg-[#7E3FF2] text-white font-mono text-xs font-bold shadow-2xs">
                          {row.focuscrew}
                        </span>
                      )}
                    </td>

                    {/* Opal */}
                    <td className="py-4 px-6 text-slate-600 text-center sm:text-left">
                      {typeof row.opal === 'boolean' ? (
                        row.opal ? <Check className="w-4 h-4 text-emerald-600" /> : <X className="w-4 h-4 text-slate-300" />
                      ) : (
                        <span className="text-slate-700 font-mono text-xs">{row.opal}</span>
                      )}
                    </td>

                    {/* Freedom */}
                    <td className="py-4 px-6 text-slate-600 text-center sm:text-left">
                      {typeof row.freedom === 'boolean' ? (
                        row.freedom ? <Check className="w-4 h-4 text-emerald-600" /> : <X className="w-4 h-4 text-slate-300" />
                      ) : (
                        <span className="text-slate-700 font-mono text-xs">{row.freedom}</span>
                      )}
                    </td>

                    {/* Screen Time */}
                    <td className="py-4 px-6 text-slate-500 text-center sm:text-left">
                      {typeof row.screenTime === 'boolean' ? (
                        row.screenTime ? <Check className="w-4 h-4 text-emerald-600" /> : <X className="w-4 h-4 text-slate-300" />
                      ) : (
                        <span className="text-slate-500 font-mono text-xs">{row.screenTime}</span>
                      )}
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </section>
  );
};
