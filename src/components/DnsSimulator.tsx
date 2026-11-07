import React, { useState } from 'react';
import { 
  Terminal, 
  ArrowRight, 
  CheckCircle2, 
  XCircle,
  Search,
  Zap
} from 'lucide-react';
import { soundFx } from '../utils/audio';

export const DnsSimulator: React.FC = () => {
  const [inputDomain, setInputDomain] = useState('adult-content-stream.xxx');
  const [inspectionResult, setInspectionResult] = useState<{
    domain: string;
    isBlocked: boolean;
    isSearch: boolean;
    reason: string;
    action: string;
    latency: string;
  }>({
    domain: 'adult-content-stream.xxx',
    isBlocked: true,
    isSearch: false,
    reason: 'Explicit Adult Domain Signature Match',
    action: 'SYNTHESIZED NXDOMAIN (0.0.0.0) — Query Dropped in RAM',
    latency: '0.19ms'
  });

  const testPresets = [
    { label: 'xvideos.com', type: 'bad' },
    { label: 'pornhub.com', type: 'bad' },
    { label: 'nsfw-tracker.net', type: 'bad' },
    { label: 'google.com', type: 'search' },
    { label: 'github.com', type: 'good' },
    { label: 'wikipedia.org', type: 'good' }
  ];

  const handleTestDomain = (domainToTest: string) => {
    soundFx.playShieldTone();
    const clean = domainToTest.trim().toLowerCase();
    
    const adultPatterns = ['porn', 'xxx', 'adult', 'sex', 'nsfw', 'xvideo', 'cam', 'erotic', 'onlyfans', 'tubegalore'];
    const hasAdultPattern = adultPatterns.some(p => clean.includes(p));
    
    const isSearchEngine = clean.includes('google.') || clean.includes('bing.') || clean.includes('duckduckgo.');

    if (hasAdultPattern) {
      setInspectionResult({
        domain: clean,
        isBlocked: true,
        isSearch: false,
        reason: 'Adult & Explicit Website Signature',
        action: 'DROPPED IN MEMORY -> Returned 0.0.0.0 NXDOMAIN (0KB Sent)',
        latency: `${(Math.random() * 0.15 + 0.12).toFixed(2)}ms`
      });
    } else if (isSearchEngine) {
      setInspectionResult({
        domain: clean,
        isBlocked: false,
        isSearch: true,
        reason: 'Search Engine (SafeSearch Rule Applied)',
        action: 'ROUTED TO FORCED SAFESEARCH (All explicit search results hidden)',
        latency: `${(Math.random() * 0.2 + 0.18).toFixed(2)}ms`
      });
    } else {
      setInspectionResult({
        domain: clean,
        isBlocked: false,
        isSearch: false,
        reason: 'Clean Work & Productivity Domain',
        action: 'RESOLVED -> Passed to Clean DNS Resolver (1.1.1.3)',
        latency: `${(Math.random() * 0.2 + 0.15).toFixed(2)}ms`
      });
    }
  };

  return (
    <section className="py-24 bg-[#FAF7FF] border-t border-purple-100 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-purple-200 text-xs font-semibold text-[#7E3FF2] shadow-2xs">
            <Zap className="w-3.5 h-3.5" />
            <span>INTERACTIVE DNS LAB</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#212529] tracking-tight">
            Test Any Domain in Real Time
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            See how FocusCrew inspects and blocks requests inside your phone's memory before your browser can even connect.
          </p>
        </div>

        {/* Interactive Lab Card (Light Theme) */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-purple-200/90 p-6 sm:p-10 shadow-sm">
          
          {/* Quick Presets */}
          <div className="mb-6">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider font-mono block mb-2.5">
              One-Click Test Presets:
            </label>
            <div className="flex flex-wrap gap-2">
              {testPresets.map((preset) => (
                <button
                  key={preset.label}
                  onClick={() => {
                    setInputDomain(preset.label);
                    handleTestDomain(preset.label);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold border transition-all cursor-pointer ${
                    preset.type === 'bad'
                      ? 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100'
                      : preset.type === 'search'
                      ? 'bg-purple-50 text-[#7E3FF2] border-purple-200 hover:bg-purple-100'
                      : 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Domain Input */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <div className="relative flex-1">
              <input
                type="text"
                value={inputDomain}
                onChange={(e) => setInputDomain(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleTestDomain(inputDomain)}
                placeholder="Enter domain (e.g. adult-site.xxx or github.com)"
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm font-mono text-slate-900 bg-[#FAF8FF] focus:outline-none focus:border-[#7E3FF2] focus:bg-white transition-all"
              />
              <span className="absolute right-4 top-3.5 text-xs text-slate-400 font-mono">PORT 53</span>
            </div>

            <button
              onClick={() => handleTestDomain(inputDomain)}
              className="px-6 py-3 rounded-2xl bg-[#7E3FF2] hover:bg-[#6C2FE0] text-white text-xs font-bold font-mono flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Inspect Query</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Live Packet Result Console */}
          <div className="rounded-2xl bg-[#FAF8FF] border border-purple-100 p-5 sm:p-7 space-y-4 font-mono text-xs">
            
            {/* Header Status */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-purple-100 text-slate-500">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#7E3FF2]" />
                <span className="font-bold text-slate-700">SOCKET 10.0.0.2:53 • PACKET REPORT</span>
              </div>
              <div className="flex items-center gap-3">
                <span>Latency: <strong className="text-slate-900">{inspectionResult.latency}</strong></span>
                <span>•</span>
                <span className="text-purple-700 font-bold">100% On-Device</span>
              </div>
            </div>

            {/* Verdict Banner */}
            <div className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
              inspectionResult.isBlocked
                ? 'bg-red-50 border-red-200 text-red-800'
                : inspectionResult.isSearch
                ? 'bg-purple-50 border-purple-200 text-purple-900'
                : 'bg-emerald-50 border-emerald-200 text-emerald-800'
            }`}>
              <div className="flex items-center gap-2.5">
                {inspectionResult.isBlocked ? (
                  <XCircle className="w-5 h-5 text-red-600 shrink-0" />
                ) : inspectionResult.isSearch ? (
                  <Search className="w-5 h-5 text-[#7E3FF2] shrink-0" />
                ) : (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                )}
                <div>
                  <div className="font-bold text-sm">
                    {inspectionResult.domain}
                  </div>
                  <div className="text-[11px] opacity-80 mt-0.5">
                    {inspectionResult.reason}
                  </div>
                </div>
              </div>

              <div className="self-start sm:self-auto">
                <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${
                  inspectionResult.isBlocked
                    ? 'bg-red-600 text-white'
                    : inspectionResult.isSearch
                    ? 'bg-[#7E3FF2] text-white'
                    : 'bg-emerald-600 text-white'
                }`}>
                  {inspectionResult.isBlocked ? 'BLOCKED' : inspectionResult.isSearch ? 'SAFESEARCH' : 'CLEAN'}
                </span>
              </div>
            </div>

            {/* Action Details */}
            <div className="p-3.5 rounded-xl bg-white border border-purple-100 space-y-1.5 text-slate-700 text-[11px]">
              <div>
                <span className="text-slate-400">ACTION TAKEN:</span>{' '}
                <span className="font-bold text-slate-900">{inspectionResult.action}</span>
              </div>
              <div>
                <span className="text-slate-400">NETWORK LEAK:</span>{' '}
                <span className="font-bold text-emerald-700">0 KB transmitted (Intercepted before radio antenna)</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
