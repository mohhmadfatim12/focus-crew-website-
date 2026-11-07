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
    <section className="py-24 bg-white border-t border-[#E5DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full-Width Luxury Obsidian Container with Honey Brass & Sage Accents */}
        <div className="rounded-3xl bg-gradient-to-br from-[#1C221D] via-[#121413] to-[#1F2722] p-8 sm:p-12 lg:p-16 text-white shadow-2xl shadow-black/30 border border-[#A37A3E]/30 relative overflow-hidden text-left">
          
          {/* Subtle warm amber/brass glow circle */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#A37A3E]/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#284B39]/20 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#A37A3E]/20 text-[#D4AF37] font-bold border border-[#A37A3E]/40 inline-flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3 h-3 text-[#A37A3E]" />
                ON-DEVICE SOVEREIGN FORTRESS
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white font-serif">
                The Blocker You Can't Bypass In Moments of Craving
              </h2>

              <p className="text-[#C5CDC6] text-sm sm:text-base leading-relaxed">
                Standard blocker apps are easily uninstalled or toggled off when an urge strikes at midnight.
                FocusCrew enforces instant on-device RAM Bloom filtering, strict search VIP rewrite, and an unskippable 15-minute urge dissolution buffer right on your device.
              </p>

              {/* 3 Pill Feature Badges */}
              <div className="space-y-3 pt-2">
                <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#FBF9F5] text-[#202621] text-xs sm:text-sm font-semibold shadow-sm border border-[#E5DFD3]">
                  <span className="w-2 h-2 rounded-full bg-[#A37A3E]" />
                  <span>On-device protection — 154,820 adult domains neutralized in RAM with zero cloud lag</span>
                </div>
                <br />
                <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#FBF9F5] text-[#202621] text-xs sm:text-sm font-semibold shadow-sm border border-[#E5DFD3]">
                  <span className="w-2 h-2 rounded-full bg-[#284B39]" />
                  <span>Strict SafeSearch VIP rewrite — locks Google, Bing & YouTube restricted mode</span>
                </div>
                <br />
                <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#FBF9F5] text-[#202621] text-xs sm:text-sm font-semibold shadow-sm border border-[#E5DFD3]">
                  <span className="w-2 h-2 rounded-full bg-[#A37A3E]" />
                  <span>15-minute Freedom Vault delay — dissolves 96% of relapse cravings before unlock</span>
                </div>
              </div>
            </div>

            {/* Right: Interactive DNS Socket Inspector Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#FBF9F5] p-6 sm:p-8 text-[#202621] shadow-2xl space-y-4 border border-[#E5DFD3]">
                
                <div className="flex items-center justify-between pb-3 border-b border-[#E5DFD3]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[#F5EAD8] text-[#A37A3E] flex items-center justify-center font-bold">
                      <ShieldCheck className="w-5 h-5 text-[#A37A3E]" />
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-[#202621]">Titan Shield Engine</div>
                      <div className="text-[10px] text-[#5E665F] font-mono">On-Device Autonomous Security</div>
                    </div>
                  </div>

                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#E1EDE5] text-[#284B39] border border-[#284B39]/20">
                    <span className="w-2 h-2 rounded-full bg-[#284B39] animate-pulse" />
                    <span>ARMED</span>
                  </span>
                </div>

                {/* Live Diagnostics Block */}
                <div className="p-4 rounded-2xl bg-[#F2EEE5] border border-[#E5DFD3] space-y-3">
                  <div className="text-[10px] font-mono uppercase text-[#A37A3E] font-bold flex items-center justify-between">
                    <span>Live Shield Diagnostics</span>
                    <span className="text-[#5E665F]">0.18ms RAM latency</span>
                  </div>
                  
                  <div className="space-y-1.5 text-xs font-mono">
                    <div className="flex justify-between py-1 border-b border-[#E5DFD3] text-[#5E665F]">
                      <span>Threat Rules Database:</span>
                      <span className="font-bold text-[#202621]">154,820 rules (Bloom Filter)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#E5DFD3] text-[#5E665F]">
                      <span>SafeSearch VIP:</span>
                      <span className="font-bold text-[#284B39]">Google / Bing / YT Forced</span>
                    </div>
                    <div className="flex justify-between py-1 text-[#5E665F]">
                      <span>Freedom Vault:</span>
                      <span className="font-bold text-[#A37A3E]">15-Min Buffer Active</span>
                    </div>
                  </div>

                  {/* Interactive Domain Check */}
                  <div className="pt-2">
                    <label className="text-[11px] font-bold text-[#202621] block mb-1.5 font-sans">
                      Test Instant Loopback Intercept:
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={testDomain}
                        onChange={(e) => setTestDomain(e.target.value)}
                        placeholder="example-domain.com"
                        className="w-full px-3 py-2 rounded-xl border border-[#D5CEBF] text-xs font-mono focus:outline-none focus:border-[#A37A3E] bg-white text-[#202621]"
                      />
                      <button
                        onClick={handleTestBlock}
                        className="px-4 py-2 rounded-xl bg-[#A37A3E] hover:bg-[#8A642E] text-white text-xs font-bold transition-all cursor-pointer whitespace-nowrap shadow-sm flex items-center gap-1.5"
                      >
                        <Zap className="w-3.5 h-3.5" />
                        <span>Query</span>
                      </button>
                    </div>
                  </div>

                  {testResult && (
                    <div className="flex items-center gap-2 text-xs text-[#284B39] font-mono font-bold bg-[#E1EDE5] p-2.5 rounded-xl border border-[#284B39]/30 mt-2">
                      <CheckCircle2 className="w-4 h-4 text-[#284B39] shrink-0" />
                      <div>
                        <div>{testResult.status}</div>
                        <div className="text-[10px] text-[#284B39] font-normal">Intercepted in {testResult.latency} • 0 bytes transmitted</div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="text-[11px] text-[#5E665F] text-center font-mono">
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
