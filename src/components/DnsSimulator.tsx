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
    reason: 'Adult & Explicit Category Signature Match',
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
        reason: 'Clean Productive Domain — No Threat Found',
        rule: 'Standard Passthrough via Local DNS Parser',
        action: 'FORWARDED -> Upstream Clean Resolver (1.1.1.3)',
        latency: `${(Math.random() * 0.3 + 0.2).toFixed(2)}ms`,
        hexHeader: `0x${Math.floor(Math.random() * 0xFFFF).toString(16).toUpperCase()} 0x8180 0x0001 0x0001 0x0000 0x0000`
      });
    }
  };

  return (
    <section id="dns-engine" className="py-24 bg-white relative border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700 shadow-2xs">
            <Cpu className="w-3.5 h-3.5 text-blue-600" />
            ON-DEVICE PACKET DIAGNOSTICS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Test the local DNS packet engine.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Every DNS query on port 53 is intercepted inside your Android kernel on <code className="text-blue-700 font-mono font-semibold bg-blue-50 px-1 py-0.5 rounded">10.0.0.2</code>. 
            Test any domain below to see how FocusCrew makes instant binary routing decisions.
          </p>
        </div>

        {/* Interactive Lab Container */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 shadow-sm p-6 sm:p-8 text-left">
          
          {/* Domain Input Field */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 font-mono text-xs">
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
                className="w-full pl-20 pr-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 font-mono text-sm placeholder:text-slate-400 focus:outline-none focus:border-blue-600 shadow-2xs transition-colors"
              />
            </div>
            
            <button
              onClick={() => handleTestDomain(inputDomain)}
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm active:scale-95 shrink-0"
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
                    ? 'bg-rose-50 border-rose-200 text-rose-700 hover:bg-rose-100' 
                    : preset.type === 'search'
                      ? 'bg-amber-50 border-amber-200 text-amber-800 hover:bg-amber-100'
                      : 'bg-emerald-50 border-emerald-200 text-emerald-800 hover:bg-emerald-100'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>

          {/* Result Card */}
          {inspectionResult && (
            <div className="mt-6 rounded-2xl bg-white border border-slate-200 p-5 font-mono text-xs shadow-sm">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-blue-600" />
                  <span className="text-slate-700 font-bold">FocusCrew In-Memory Packet Analysis</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-slate-500">Latency:</span>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    {inspectionResult.latency}
                  </span>
                </div>
              </div>

              {/* Status Banner */}
              <div className={`p-4 rounded-xl border flex items-center gap-3 mb-4 ${
                inspectionResult.isBlocked
                  ? 'bg-rose-50 border-rose-200 text-rose-900'
                  : 'bg-emerald-50 border-emerald-200 text-emerald-900'
              }`}>
                {inspectionResult.isBlocked ? (
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                ) : (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                )}
                <div>
                  <div className="font-bold text-sm tracking-wide">
                    {inspectionResult.isBlocked ? 'THREAT INTERCEPTED & DROPPED' : 'QUERY RESOLVED CLEANLY'}
                  </div>
                  <div className="text-[11px] text-slate-600 mt-0.5">
                    {inspectionResult.reason}
                  </div>
                </div>
              </div>

              {/* Breakdown Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] text-slate-700">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 space-y-1">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Target Domain</span>
                  <div className="font-bold text-slate-900 truncate">{inspectionResult.domain}</div>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 space-y-1">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Synthesized Action</span>
                  <div className={`font-bold truncate ${inspectionResult.isBlocked ? 'text-rose-700' : 'text-emerald-700'}`}>
                    {inspectionResult.action}
                  </div>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 space-y-1">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Enforcement Rule</span>
                  <div className="font-semibold text-blue-700 truncate">{inspectionResult.rule}</div>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 space-y-1">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Raw DNS Header</span>
                  <div className="font-mono text-slate-600 text-[10px] truncate">{inspectionResult.hexHeader}</div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
                <span>Local Socket: 10.0.0.2:53 (Android VpnService)</span>
                <span className="text-slate-700 font-semibold">Zero External Network Logs</span>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
