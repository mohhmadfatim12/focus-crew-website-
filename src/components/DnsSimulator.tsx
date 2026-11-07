import React, { useState } from 'react';
import { 
  Cpu, 
  Terminal, 
  ArrowRight, 
  CheckCircle2, 
  XCircle
} from 'lucide-react';
import { soundFx } from '../utils/audio';

export const DnsSimulator: React.FC = () => {
  const [inputDomain, setInputDomain] = useState('adult-content-stream.xxx');
  const [inspectionResult, setInspectionResult] = useState<{
    domain: string;
    isBlocked: boolean;
    reason: string;
    rule: string;
    action: string;
    latency: string;
    hexHeader: string;
  } | null>({
    domain: 'adult-content-stream.xxx',
    isBlocked: true,
    reason: 'Adult & Explicit Domain Category Match',
    rule: 'FuzzyAdultDetector: Rule #A92 [xxx, adult, stream]',
    action: 'NXDOMAIN Synthesized (0.0.0.0) — Query Dropped Locally',
    latency: '0.24ms',
    hexHeader: '0x1A2B 0x8183 0x0001 0x0000 0x0000 0x0000'
  });

  const testPresets = [
    { label: 'adult-portal.com', type: 'bad' },
    { label: 'xvideos.com', type: 'bad' },
    { label: 'tracker-nsfw.net', type: 'bad' },
    { label: 'google.com', type: 'good' },
    { label: 'github.com', type: 'good' },
    { label: 'wikipedia.org', type: 'good' },
    { label: 'bing.com', type: 'search' }
  ];

  const handleTestDomain = (domainToTest: string) => {
    soundFx.playShieldTone();
    const clean = domainToTest.trim().toLowerCase();
    
    // Adult keywords detector simulation
    const adultPatterns = ['porn', 'xxx', 'adult', 'sex', 'nsfw', 'xvideo', 'cam', 'erotic', 'onlyfans'];
    const hasAdultPattern = adultPatterns.some(p => clean.includes(p));
    
    const isSearchEngine = clean.includes('google.') || clean.includes('bing.') || clean.includes('duckduckgo.');

    if (hasAdultPattern) {
      setInspectionResult({
        domain: clean,
        isBlocked: true,
        reason: 'Explicit Adult & High-Dopamine Threat Match',
        rule: 'FuzzyAdultDetector: Exact signature match',
        action: 'DROPPED LOCALLY -> Synthesized NXDOMAIN 0.0.0.0',
        latency: `${(Math.random() * 0.3 + 0.15).toFixed(2)}ms`,
        hexHeader: `0x${Math.floor(Math.random() * 0xFFFF).toString(16).toUpperCase()} 0x8183 0x0001 0x0000 0x0000 0x0000`
      });
    } else if (isSearchEngine) {
      setInspectionResult({
        domain: clean,
        isBlocked: false,
        reason: 'Search Engine Domain (SafeSearch Rewritten)',
        rule: 'SafeSearchEnforcer: IP routed to forcesafesearch.google.com / strict.bing.com',
        action: 'PERMITTED WITH FORCED SAFESEARCH (No adult results possible)',
        latency: `${(Math.random() * 0.4 + 0.2).toFixed(2)}ms`,
        hexHeader: `0x${Math.floor(Math.random() * 0xFFFF).toString(16).toUpperCase()} 0x8180 0x0001 0x0001 0x0000 0x0000`
      });
    } else {
      setInspectionResult({
        domain: clean,
        isBlocked: false,
        reason: 'Clean Domain — No Threat Found',
        rule: 'Standard Passthrough via Local DNS Parser',
        action: 'FORWARDED -> Upstream Clean Resolver (1.1.1.3)',
        latency: `${(Math.random() * 0.3 + 0.2).toFixed(2)}ms`,
        hexHeader: `0x${Math.floor(Math.random() * 0xFFFF).toString(16).toUpperCase()} 0x8180 0x0001 0x0001 0x0000 0x0000`
      });
    }
  };

  return (
    <section id="dns-engine" className="py-24 bg-[#05070B] relative border-t border-slate-900">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
            <Cpu className="w-3.5 h-3.5" />
            LIVE DNS PACKET LABORATORY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Test the on-device packet engine.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Every DNS query on port 53 is intercepted inside your Android kernel on <code className="text-cyan-400 font-mono">10.0.0.2</code>. 
            Test any domain below to see how FocusCrew makes instant binary routing decisions.
          </p>
        </div>

        {/* Interactive Lab Container */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-950/80 border border-slate-800 shadow-2xl p-6 sm:p-8">
          
          {/* Domain Input Field */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500 font-mono text-xs">
                UDP:53 //
              </div>
              <input
                type="text"
                value={inputDomain}
                onChange={(e) => setInputDomain(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleTestDomain(inputDomain);
                }}
                placeholder="Type any domain (e.g. adult-site.com, github.com)..."
                className="w-full pl-22 pr-4 py-3 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-white font-mono text-sm placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>
            
            <button
              onClick={() => handleTestDomain(inputDomain)}
              className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-cyan-500/20 active:scale-95 shrink-0"
            >
              <span>Inspect Query</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Presets */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-500 mr-1">Quick Presets:</span>
            {testPresets.map((preset) => (
              <button
                key={preset.label}
                onClick={() => {
                  setInputDomain(preset.label);
                  handleTestDomain(preset.label);
                }}
                className={`text-xs font-mono px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                  preset.type === 'bad' 
                    ? 'bg-rose-950/30 border-rose-800/40 text-rose-300 hover:border-rose-500' 
                    : preset.type === 'search'
                      ? 'bg-amber-950/30 border-amber-800/40 text-amber-300 hover:border-amber-500'
                      : 'bg-emerald-950/30 border-emerald-800/40 text-emerald-300 hover:border-emerald-500'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>

          {/* Live Telemetry Terminal Screen */}
          {inspectionResult && (
            <div className="mt-6 rounded-2xl bg-[#090C12] border border-slate-800/90 p-5 font-mono text-xs text-left shadow-inner">
              
              {/* Terminal Title */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-slate-400 font-bold">FocusCrew In-Memory Packet Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-slate-500">Latency:</span>
                  <span className="text-emerald-400 font-bold">{inspectionResult.latency}</span>
                </div>
              </div>

              {/* Status Banner */}
              <div className={`p-3.5 rounded-xl border flex items-center gap-3 mb-4 ${
                inspectionResult.isBlocked
                  ? 'bg-rose-950/40 border-rose-500/60 text-rose-200'
                  : 'bg-emerald-950/40 border-emerald-500/60 text-emerald-200'
              }`}>
                {inspectionResult.isBlocked ? (
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                ) : (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                )}
                <div>
                  <div className="font-bold text-sm tracking-wide">
                    {inspectionResult.isBlocked ? 'THREAT INTERCEPTED & DROPPED' : 'QUERY RESOLVED CLEANLY'}
                  </div>
                  <div className="text-[11px] opacity-80 mt-0.5">
                    {inspectionResult.reason}
                  </div>
                </div>
              </div>

              {/* Telemetry Breakdown Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] text-slate-300">
                <div className="bg-slate-900/40 p-2.5 rounded-xl border border-slate-800/60 space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase">Target Domain</span>
                  <div className="font-bold text-white truncate">{inspectionResult.domain}</div>
                </div>

                <div className="bg-slate-900/40 p-2.5 rounded-xl border border-slate-800/60 space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase">Synthesized Action</span>
                  <div className={`font-bold truncate ${inspectionResult.isBlocked ? 'text-rose-400' : 'text-emerald-400'}`}>
                    {inspectionResult.action}
                  </div>
                </div>

                <div className="bg-slate-900/40 p-2.5 rounded-xl border border-slate-800/60 space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase">Enforcement Rule</span>
                  <div className="font-semibold text-cyan-300 truncate">{inspectionResult.rule}</div>
                </div>

                <div className="bg-slate-900/40 p-2.5 rounded-xl border border-slate-800/60 space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase">Raw DNS Packet Header</span>
                  <div className="font-mono text-slate-400 text-[10px] truncate">{inspectionResult.hexHeader}</div>
                </div>
              </div>

              {/* Privacy Guarantee Note */}
              <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-[10px] text-slate-500">
                <span>Local Socket: 10.0.0.2:53 (Android VpnService)</span>
                <span className="text-cyan-400 font-semibold">Zero External Network Logs</span>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
