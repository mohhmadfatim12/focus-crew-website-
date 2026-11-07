import React, { useState } from 'react';
import { 
  Terminal, 
  ArrowRight, 
  CheckCircle2, 
  XCircle,
  Search,
  Zap
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
    action: 'NEUTRALIZED ON-DEVICE — Threat Terminated Instantly',
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
        reason: 'Adult & Explicit Website Signature',
        action: 'NEUTRALIZED ON-DEVICE -> 0KB Transmitted (Radio Silent)',
        latency: `${(Math.random() * 0.15 + 0.12).toFixed(2)}ms`
      });
    } else if (isSearchEngine) {
      setInspectionResult({
        domain: clean,
        isBlocked: false,
        isSearch: true,
        reason: 'Search Engine (SafeSearch Rule Applied)',
        action: 'ROUTED TO STRICT SAFESEARCH (All explicit search results hidden)',
        latency: `${(Math.random() * 0.2 + 0.18).toFixed(2)}ms`
      });
    } else {
      setInspectionResult({
        domain: clean,
        isBlocked: false,
        isSearch: false,
        reason: 'Clean Work & Productivity Domain',
        action: 'VERIFIED PRODUCTIVE -> Direct Secure Passthrough',
        latency: `${(Math.random() * 0.2 + 0.15).toFixed(2)}ms`
      });
    }
  };

  return (
    <section className="py-24 bg-[#FBF9F5] border-t border-[#E5DFD3] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E5DFD3] text-xs font-semibold text-[#A37A3E] shadow-2xs">
            <Zap className="w-3.5 h-3.5" />
            <span>INTERACTIVE DNS LAB</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202621] tracking-tight font-serif">
            Test Any Domain in Real Time
          </h2>

          <p className="text-sm sm:text-base text-[#5E665F] leading-relaxed">
            See how FocusCrew inspects and blocks requests inside your phone's memory via Titan Bloom Filter before your browser can even connect.
          </p>
        </div>

        {/* Interactive Lab Card (Warm Linen Surface) */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-[#E5DFD3] p-6 sm:p-10 shadow-sm">
          
          {/* Quick Presets */}
          <div className="mb-6">
            <label className="text-xs font-bold text-[#5E665F] uppercase tracking-wider font-mono block mb-2.5">
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
                      ? 'bg-[#FCE8E8] text-[#8F3B3B] border-[#8F3B3B]/20 hover:bg-[#8F3B3B]/10'
                      : preset.type === 'search'
                      ? 'bg-[#F5EAD8] text-[#A37A3E] border-[#A37A3E]/30 hover:bg-[#F5EAD8]/80'
                      : 'bg-[#E1EDE5] text-[#284B39] border-[#284B39]/20 hover:bg-[#284B39]/10'
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
                className="w-full px-4 py-3 rounded-2xl border border-[#D5CEBF] text-sm font-mono text-[#202621] bg-[#FBF9F5] focus:outline-none focus:border-[#A37A3E] focus:bg-white transition-all"
              />
              <span className="absolute right-4 top-3.5 text-xs text-[#5E665F] font-mono">LIVE SHIELD</span>
            </div>

            <button
              onClick={() => handleTestDomain(inputDomain)}
              className="px-6 py-3 rounded-2xl bg-[#A37A3E] hover:bg-[#8A642E] text-white text-xs font-bold font-mono flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Inspect Query</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Live Packet Result Console */}
          <div className="rounded-2xl bg-[#FBF9F5] border border-[#E5DFD3] p-5 sm:p-7 space-y-4 font-mono text-xs">
            
            {/* Header Status */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#E5DFD3] text-[#5E665F]">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#A37A3E]" />
                <span className="font-bold text-[#202621]">ON-DEVICE REAL-TIME SHIELD REPORT</span>
              </div>
              <div className="flex items-center gap-3">
                <span>Latency: <strong className="text-[#202621]">{inspectionResult.latency}</strong></span>
                <span>•</span>
                <span className="text-[#284B39] font-bold">100% On-Device</span>
              </div>
            </div>

            {/* Verdict Banner */}
            <div className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
              inspectionResult.isBlocked
                ? 'bg-[#FCE8E8] border-[#8F3B3B]/30 text-[#8F3B3B]'
                : inspectionResult.isSearch
                ? 'bg-[#F5EAD8] border-[#A37A3E]/30 text-[#8A642E]'
                : 'bg-[#E1EDE5] border-[#284B39]/30 text-[#284B39]'
            }`}>
              <div className="flex items-center gap-2.5">
                {inspectionResult.isBlocked ? (
                  <XCircle className="w-5 h-5 text-[#8F3B3B] shrink-0" />
                ) : inspectionResult.isSearch ? (
                  <Search className="w-5 h-5 text-[#A37A3E] shrink-0" />
                ) : (
                  <CheckCircle2 className="w-5 h-5 text-[#284B39] shrink-0" />
                )}
                <div>
                  <div className="font-bold text-sm">
                    {inspectionResult.domain}
                  </div>
                  <div className="text-[11px] opacity-90 mt-0.5">
                    {inspectionResult.reason}
                  </div>
                </div>
              </div>

              <div className="self-start sm:self-auto">
                <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${
                  inspectionResult.isBlocked
                    ? 'bg-[#8F3B3B] text-white'
                    : inspectionResult.isSearch
                    ? 'bg-[#A37A3E] text-white'
                    : 'bg-[#284B39] text-white'
                }`}>
                  {inspectionResult.isBlocked ? 'BLOCKED' : inspectionResult.isSearch ? 'SAFESEARCH' : 'CLEAN'}
                </span>
              </div>
            </div>

            {/* Action Details */}
            <div className="p-3.5 rounded-xl bg-white border border-[#E5DFD3] space-y-1.5 text-[#5E665F] text-[11px]">
              <div>
                <span className="text-[#5E665F]/80">ACTION TAKEN:</span>{' '}
                <span className="font-bold text-[#202621]">{inspectionResult.action}</span>
              </div>
              <div>
                <span className="text-[#5E665F]/80">NETWORK LEAK:</span>{' '}
                <span className="font-bold text-[#284B39]">0 KB transmitted (Neutralized in RAM before radio)</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
