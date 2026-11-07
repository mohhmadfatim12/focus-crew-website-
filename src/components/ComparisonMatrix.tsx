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
    <section className="py-24 bg-slate-50 relative border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono text-slate-700 shadow-2xs">
            <Shield className="w-3.5 h-3.5 text-blue-600" />
            UNCOMPROMISING COMPARISON
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why conventional blockers fail.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Most wellbeing apps are built for retention, not recovery. 
            They make bypasses trivial so users don't cancel their subscriptions. FocusCrew is built for total mastery.
          </p>
        </div>

        {/* Table Container */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden text-left">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 font-mono text-xs">
                  <th className="p-4 sm:p-5 text-slate-600 font-semibold w-1/3">Capability</th>
                  <th className="p-4 sm:p-5 text-blue-700 font-extrabold bg-blue-50/70 border-x border-blue-200 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-600" />
                      <span>FocusCrew</span>
                    </div>
                  </th>
                  <th className="p-4 sm:p-5 text-slate-600 font-medium text-center">Opal</th>
                  <th className="p-4 sm:p-5 text-slate-600 font-medium text-center">Freedom</th>
                  <th className="p-4 sm:p-5 text-slate-600 font-medium text-center">Default OS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    
                    {/* Feature description */}
                    <td className="p-4 sm:p-5 font-semibold text-slate-800">
                      <div>{row.feature}</div>
                      <div className="text-[10px] text-slate-500 font-normal mt-0.5">{row.note}</div>
                    </td>

                    {/* FocusCrew Column */}
                    <td className="p-4 sm:p-5 bg-blue-50/30 border-x border-blue-100 text-center font-bold">
                      {typeof row.focuscrew === 'boolean' ? (
                        <div className="w-6 h-6 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      ) : (
                        <span className="text-blue-700 font-mono font-bold">{row.focuscrew}</span>
                      )}
                    </td>

                    {/* Opal Column */}
                    <td className="p-4 sm:p-5 text-center text-slate-600">
                      {typeof row.opal === 'boolean' ? (
                        row.opal ? (
                          <Check className="w-4 h-4 mx-auto text-emerald-600" />
                        ) : (
                          <X className="w-4 h-4 mx-auto text-slate-300" />
                        )
                      ) : (
                        <span className="font-mono text-slate-600">{row.opal}</span>
                      )}
                    </td>

                    {/* Freedom Column */}
                    <td className="p-4 sm:p-5 text-center text-slate-600">
                      {typeof row.freedom === 'boolean' ? (
                        row.freedom ? (
                          <Check className="w-4 h-4 mx-auto text-emerald-600" />
                        ) : (
                          <X className="w-4 h-4 mx-auto text-slate-300" />
                        )
                      ) : (
                        <span className="font-mono text-slate-600">{row.freedom}</span>
                      )}
                    </td>

                    {/* Default OS Column */}
                    <td className="p-4 sm:p-5 text-center text-slate-600">
                      {typeof row.screenTime === 'boolean' ? (
                        row.screenTime ? (
                          <Check className="w-4 h-4 mx-auto text-emerald-600" />
                        ) : (
                          <X className="w-4 h-4 mx-auto text-slate-300" />
                        )
                      ) : (
                        <span className="font-mono text-slate-600">{row.screenTime}</span>
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
