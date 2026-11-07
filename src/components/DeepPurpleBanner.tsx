import React, { useState } from 'react';
import { ShieldCheck, Sparkles, CheckCircle2, Zap } from 'lucide-react';

export const DeepPurpleBanner: React.FC = () => {
  const [testDomain, setTestDomain] = useState('adult-explicit-sample.com');
  const [testResult, setTestResult] = useState<null | { domain: string; latency: string; status: string }>(null);

  const handleTestBlock = () => {
    setTestResult({
      domain: testDomain || 'unknown-adult-source.xxx',
      latency: '0.18ms',
      status: 'THREAT INTERCEPTED & DROPPED (0 BYTES LEAKED)'
    });
  };

  return (
    <section className="py-24 bg-white border-t border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full-Width Deep Purple Container (Exact Zanderio Signature Style) */}
        <div className="rounded-3xl bg-gradient-to-br from-[#6A28E5] via-[#7E3FF2] to-[#9055FD] p-8 sm:p-12 lg:p-16 text-white shadow-xl shadow-purple-600/25 relative overflow-hidden text-left">
          
          {/* Subtle background glow circle */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest px-3.5 py-1 rounded-full bg-white/20 text-white font-bold border border-white/25 inline-flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3 h-3" />
                ON-DEVICE SOVEREIGN FORTRESS
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                The Blocker You Can't Bypass In Moments of Craving
              </h2>

              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                Standard blocker apps are easily uninstalled or toggled off when an urge strikes at midnight.
                FocusCrew enforces instant zero-latency protection, strict search lockdown, and an unskippable 15-minute urge dissolution buffer right on your device.
              </p>

              {/* 3 White Pill Feature Badges (Exact Zanderio Pill Style) */}
              <div className="space-y-3 pt-2">
                <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white text-[#212529] text-xs sm:text-sm font-semibold shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#7E3FF2]" />
                  <span>On-device protection — 150,000+ adult domains neutralized locally with zero cloud lag</span>
                </div>
                <br />
                <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white text-[#212529] text-xs sm:text-sm font-semibold shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#7E3FF2]" />
                  <span>Strict SafeSearch VIP rewrite — locks Google, Bing & YouTube restricted mode</span>
                </div>
                <br />
                <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white text-[#212529] text-xs sm:text-sm font-semibold shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#7E3FF2]" />
                  <span>15-minute Freedom Vault delay — dissolves 96% of relapse cravings before unlock</span>
                </div>
              </div>
            </div>

            {/* Right: Interactive DNS Socket Inspector Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white p-6 sm:p-8 text-[#212529] shadow-2xl space-y-4 border border-purple-100">
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-purple-50 text-[#7E3FF2] flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-slate-900">Titan Shield Engine</div>
                      <div className="text-[10px] text-slate-500 font-mono">On-Device Autonomous Security</div>
                    </div>
                  </div>

                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>ARMED</span>
                  </span>
                </div>

                {/* Live Diagnostics Block */}
                <div className="p-4 rounded-2xl bg-[#FAF8FF] border border-purple-100 space-y-3">
                  <div className="text-[10px] font-mono uppercase text-[#7E3FF2] font-bold flex items-center justify-between">
                    <span>Live Shield Diagnostics</span>
                    <span className="text-slate-400">0.2ms latency</span>
                  </div>
                  
                  <div className="space-y-1.5 text-xs font-mono">
                    <div className="flex justify-between py-1 border-b border-purple-100/60 text-slate-600">
                      <span>Threat Rules Database:</span>
                      <span className="font-bold text-slate-900">154,820 rules</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-purple-100/60 text-slate-600">
                      <span>SafeSearch VIP:</span>
                      <span className="font-bold text-emerald-600">Google / Bing / YT</span>
                    </div>
                    <div className="flex justify-between py-1 text-slate-600">
                      <span>Freedom Vault:</span>
                      <span className="font-bold text-purple-700">15-Min Buffer Active</span>
                    </div>
                  </div>

                  {/* Interactive Domain Check */}
                  <div className="pt-2">
                    <label className="text-[11px] font-bold text-slate-700 block mb-1.5 font-sans">
                      Test Instant Loopback Intercept:
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={testDomain}
                        onChange={(e) => setTestDomain(e.target.value)}
                        placeholder="example-domain.com"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-mono focus:outline-none focus:border-[#7E3FF2] bg-white text-slate-900"
                      />
                      <button
                        onClick={handleTestBlock}
                        className="px-4 py-2 rounded-xl bg-[#7E3FF2] hover:bg-[#6C2FE0] text-white text-xs font-bold transition-all cursor-pointer whitespace-nowrap shadow-sm flex items-center gap-1.5"
                      >
                        <Zap className="w-3.5 h-3.5" />
                        <span>Query</span>
                      </button>
                    </div>
                  </div>

                  {testResult && (
                    <div className="flex items-center gap-2 text-xs text-emerald-800 font-mono font-bold bg-emerald-50 p-2.5 rounded-xl border border-emerald-200 mt-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <div>
                        <div>{testResult.status}</div>
                        <div className="text-[10px] text-emerald-600 font-normal">Intercepted in {testResult.latency} • 0 bytes transmitted</div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="text-[11px] text-slate-500 text-center font-mono">
                  * 100% on-device processing. Zero data ever leaves your device.
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
