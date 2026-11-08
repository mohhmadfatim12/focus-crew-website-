import React, { useState } from 'react';
import { 
  Terminal, 
  ArrowRight, 
  CheckCircle2, 
  XCircle,
  Search
} from 'lucide-react';

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
    action: 'Query dropped on-device (NXDOMAIN returned)',
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
    const clean = domainToTest.trim().toLowerCase();
    
    const adultPatterns = ['porn', 'xxx', 'adult', 'sex', 'nsfw', 'xvideo', 'cam', 'erotic', 'onlyfans', 'tubegalore'];
    const hasAdultPattern = adultPatterns.some(p => clean.includes(p));
    
    const isSearchEngine = clean.includes('google.') || clean.includes('bing.') || clean.includes('duckduckgo.');

    if (hasAdultPattern) {
      setInspectionResult({
        domain: clean,
        isBlocked: true,
        isSearch: false,
        reason: 'Explicit Adult Domain Signature Match',
        action: 'Query dropped on-device (NXDOMAIN returned)',
        latency: `${(Math.random() * 0.15 + 0.12).toFixed(2)}ms`
      });
    } else if (isSearchEngine) {
      setInspectionResult({
        domain: clean,
        isBlocked: false,
        isSearch: true,
        reason: 'Search Engine Domain (SafeSearch Enforced)',
        action: 'DNS response rewritten to forcesafesearch VIP',
        latency: `${(Math.random() * 0.2 + 0.18).toFixed(2)}ms`
      });
    } else {
      setInspectionResult({
        domain: clean,
        isBlocked: false,
        isSearch: false,
        reason: 'Verified Clean Productive Host',
        action: 'Direct secure passthrough to upstream DNS',
        latency: `${(Math.random() * 0.2 + 0.15).toFixed(2)}ms`
      });
    }
  };

  return (
    <section id="dns-engine" className="py-20 md:py-28 bg-[#F7F5F0] border-b border-[#E5E2DA] text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#9E6F28]">
            Interactive Telemetry Lab
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1D1A] tracking-tight">
            Inspect Bloom filter resolution in real time.
          </h2>

          <p className="text-sm sm:text-base text-[#525853] leading-relaxed">
            Test any hostname to observe how FocusCrew inspects and resolves queries in local RAM before a socket connection can transmit data.
          </p>
        </div>

        {/* Interactive Lab Card */}
        <div className="pro-card p-6 sm:p-8">
          
          {/* Quick Presets */}
          <div className="mb-6 space-y-2">
            <label className="text-xs font-mono text-[#525853] block">
              Quick Test Presets:
            </label>
            <div className="flex flex-wrap gap-2">
              {testPresets.map((preset) => (
                <button
                  key={preset.label}
                  onClick={() => {
                    setInputDomain(preset.label);
                    handleTestDomain(preset.label);
                  }}
                  className={`px-3 py-1 rounded-md text-xs font-mono border transition-colors cursor-pointer ${
                    preset.type === 'bad'
                      ? 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100'
                      : preset.type === 'search'
                      ? 'bg-[#F5EAD8] text-[#9E6F28] border-[#E5DFD3] hover:bg-[#EFE4D0]'
                      : 'bg-[#EBF2ED] text-[#234E37] border-[#C8DCD0] hover:bg-[#DEEBE1]'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Domain Input */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              type="text"
              value={inputDomain}
              onChange={(e) => setInputDomain(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleTestDomain(inputDomain)}
              placeholder="Enter domain (e.g. adult-site.xxx or github.com)"
              className="flex-1 px-4 py-2.5 rounded-lg border border-[#E5E2DA] text-sm font-mono text-[#1A1D1A] bg-white focus:outline-2 focus:outline-[#9E6F28]"
            />

            <button
              onClick={() => handleTestDomain(inputDomain)}
              className="btn-accent text-xs !py-2.5 !px-5 whitespace-nowrap"
            >
              <span>Inspect Query</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Live Packet Result Console */}
          <div className="rounded-lg bg-[#F7F5F0] border border-[#E5E2DA] p-5 space-y-3 font-mono text-xs">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#E5E2DA] text-[#525853] text-[11px]">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#9E6F28]" />
                <span className="font-semibold text-[#1A1D1A]">On-Device Query Telemetry</span>
              </div>
              <div>
                Latency: <strong className="text-[#1A1D1A]">{inspectionResult.latency}</strong>
              </div>
            </div>

            {/* Verdict Banner */}
            <div className="p-3.5 rounded-md bg-white border border-[#E5E2DA] flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                {inspectionResult.isBlocked ? (
                  <XCircle className="w-4 h-4 text-red-600 shrink-0" />
                ) : inspectionResult.isSearch ? (
                  <Search className="w-4 h-4 text-[#9E6F28] shrink-0" />
                ) : (
                  <CheckCircle2 className="w-4 h-4 text-[#234E37] shrink-0" />
                )}
                <div>
                  <div className="font-bold text-xs text-[#1A1D1A]">
                    {inspectionResult.domain}
                  </div>
                  <div className="text-[11px] text-[#525853]">
                    {inspectionResult.reason}
                  </div>
                </div>
              </div>

              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                inspectionResult.isBlocked
                  ? 'bg-red-100 text-red-700'
                  : inspectionResult.isSearch
                  ? 'bg-amber-100 text-amber-800'
                  : 'bg-emerald-100 text-emerald-800'
              }`}>
                {inspectionResult.isBlocked ? 'BLOCKED' : inspectionResult.isSearch ? 'SAFESEARCH' : 'CLEAN'}
              </span>
            </div>

            {/* Action Details */}
            <div className="text-[11px] text-[#525853] space-y-1">
              <div>
                <span>Action:</span> <strong className="text-[#1A1D1A]">{inspectionResult.action}</strong>
              </div>
              <div>
                <span>Network Leakage:</span> <strong className="text-[#234E37]">0 Bytes transmitted</strong>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
export default DnsSimulator;
