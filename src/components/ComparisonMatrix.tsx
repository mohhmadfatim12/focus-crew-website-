import React from 'react';
import { Check, X, Shield } from 'lucide-react';

export const ComparisonMatrix: React.FC = () => {
  const comparisonData = [
    {
      feature: 'Local DNS Loopback (100% On-Device)',
      focuscrew: true,
      opal: false,
      freedom: false,
      screenTime: false,
      note: 'FocusCrew never routes your browsing through remote cloud proxies'
    },
    {
      feature: '15-Minute Impulse Unlock Friction',
      focuscrew: true,
      opal: 'Limited',
      freedom: 'Partial',
      screenTime: false,
      note: 'Enforces a biological pause that breaks neurochemical craving loops'
    },
    {
      feature: 'Short-Form Reel Counter (Reels/Shorts/TikTok)',
      focuscrew: true,
      opal: false,
      freedom: false,
      screenTime: false,
      note: 'Monitors individual short-form video swipes with mindful friction'
    },
    {
      feature: 'Unignorable TaskAlarm (Wake Lock & Math Challenges)',
      focuscrew: true,
      opal: false,
      freedom: false,
      screenTime: false,
      note: 'System-level full-screen activity that cuts through heavy sleep'
    },
    {
      feature: 'Forced SafeSearch across All Engines',
      focuscrew: true,
      opal: false,
      freedom: 'Partial',
      screenTime: 'Partial',
      note: 'Locks Google, Bing, DuckDuckGo to strict safe results in all browsers'
    },
    {
      feature: 'Zero Account & Zero Telemetry Tracking',
      focuscrew: true,
      opal: false,
      freedom: false,
      screenTime: false,
      note: 'Zero user accounts, zero analytics SDKs, zero data monetization'
    },
    {
      feature: 'Subscription Cost',
      focuscrew: '100% Free Core / Direct APK',
      opal: '$99.99 / year',
      freedom: '$39.99 / year',
      screenTime: 'Free (Inflexible)',
      note: 'No recurring subscription paywalls or artificial limitations'
    }
  ];

  return (
    <section className="py-24 bg-[#07090E] relative border-t border-slate-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
            <Shield className="w-3.5 h-3.5" />
            UNCOMPROMISING COMPARISON
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why conventional blockers fail.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Most wellbeing apps are built for venture capitalists, not for your recovery. 
            They make bypasses trivial so users don't churn. FocusCrew is built for total mastery.
          </p>
        </div>

        {/* Table Container */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-slate-950/80 border border-slate-800 shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/60 font-mono text-xs">
                  <th className="p-4 sm:p-5 text-slate-400 font-semibold w-1/3">Capability</th>
                  <th className="p-4 sm:p-5 text-cyan-400 font-extrabold bg-cyan-950/30 border-x border-cyan-500/30 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      <span>FocusCrew</span>
                    </div>
                  </th>
                  <th className="p-4 sm:p-5 text-slate-400 font-medium text-center">Opal</th>
                  <th className="p-4 sm:p-5 text-slate-400 font-medium text-center">Freedom</th>
                  <th className="p-4 sm:p-5 text-slate-400 font-medium text-center">Default OS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/30 transition-colors">
                    
                    {/* Feature description */}
                    <td className="p-4 sm:p-5 font-semibold text-slate-200">
                      <div>{row.feature}</div>
                      <div className="text-[10px] text-slate-500 font-normal mt-0.5">{row.note}</div>
                    </td>

                    {/* FocusCrew Column */}
                    <td className="p-4 sm:p-5 bg-cyan-950/15 border-x border-cyan-500/20 text-center font-bold">
                      {typeof row.focuscrew === 'boolean' ? (
                        <div className="w-6 h-6 mx-auto rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                          <Check className="w-4 h-4 text-cyan-300" />
                        </div>
                      ) : (
                        <span className="text-cyan-400 font-mono">{row.focuscrew}</span>
                      )}
                    </td>

                    {/* Opal Column */}
                    <td className="p-4 sm:p-5 text-center text-slate-400">
                      {typeof row.opal === 'boolean' ? (
                        row.opal ? (
                          <Check className="w-4 h-4 mx-auto text-emerald-400" />
                        ) : (
                          <X className="w-4 h-4 mx-auto text-slate-600" />
                        )
                      ) : (
                        <span className="font-mono text-slate-400">{row.opal}</span>
                      )}
                    </td>

                    {/* Freedom Column */}
                    <td className="p-4 sm:p-5 text-center text-slate-400">
                      {typeof row.freedom === 'boolean' ? (
                        row.freedom ? (
                          <Check className="w-4 h-4 mx-auto text-emerald-400" />
                        ) : (
                          <X className="w-4 h-4 mx-auto text-slate-600" />
                        )
                      ) : (
                        <span className="font-mono text-slate-400">{row.freedom}</span>
                      )}
                    </td>

                    {/* Default OS Column */}
                    <td className="p-4 sm:p-5 text-center text-slate-400">
                      {typeof row.screenTime === 'boolean' ? (
                        row.screenTime ? (
                          <Check className="w-4 h-4 mx-auto text-emerald-400" />
                        ) : (
                          <X className="w-4 h-4 mx-auto text-slate-600" />
                        )
                      ) : (
                        <span className="font-mono text-slate-400">{row.screenTime}</span>
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
