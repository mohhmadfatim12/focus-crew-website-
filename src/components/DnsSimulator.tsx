import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ShieldAlert,
  Search,
  ArrowRight, 
  CheckCircle2, 
  Cpu,
  Lock
} from 'lucide-react';

export const DnsSimulator: React.FC = () => {
  const [inputDomain, setInputDomain] = useState('adult-content-stream.xxx');
  const [inspectionResult, setInspectionResult] = useState<{
    domain: string;
    isBlocked: boolean;
    isSearch: boolean;
    headline: string;
    description: string;
    latency: string;
    badgeText: string;
  }>({
    domain: 'adult-content-stream.xxx',
    isBlocked: true,
    isSearch: false,
    headline: 'Explicit Connection Blocked On-Device',
    description: 'This domain matches FocusCrew’s on-device threat signatures. The connection is dropped instantly inside local memory before any explicit images, videos, or scripts can load. Zero data leaves your phone.',
    latency: '0.18ms',
    badgeText: 'BLOCKED ON-DEVICE'
  });

  const testCategories = [
    { label: 'Explicit Domain', sample: 'adult-content-stream.xxx', type: 'bad' },
    { label: 'Google Search', sample: 'google.com', type: 'search' },
    { label: 'Wikipedia', sample: 'wikipedia.org', type: 'good' },
    { label: 'GitHub', sample: 'github.com', type: 'good' }
  ];

  const handleTestDomain = (domainToTest: string) => {
    const clean = domainToTest.trim().toLowerCase();
    
    const adultPatterns = ['porn', 'xxx', 'adult', 'sex', 'nsfw', 'xvideo', 'cam', 'erotic', 'onlyfans', 'tubegalore', 'stream.xxx'];
    const hasAdultPattern = adultPatterns.some(p => clean.includes(p));
    
    const isSearchEngine = clean.includes('google.') || clean.includes('bing.') || clean.includes('duckduckgo.') || clean.includes('yahoo.');

    if (hasAdultPattern) {
      setInspectionResult({
        domain: clean,
        isBlocked: true,
        isSearch: false,
        headline: 'Explicit Connection Blocked On-Device',
        description: 'This domain matches FocusCrew’s on-device threat signatures. The connection is dropped instantly inside local memory before any explicit images, videos, or scripts can load. Zero data leaves your phone.',
        latency: `${(Math.random() * 0.12 + 0.14).toFixed(2)}ms`,
        badgeText: 'BLOCKED ON-DEVICE'
      });
    } else if (isSearchEngine) {
      setInspectionResult({
        domain: clean,
        isBlocked: false,
        isSearch: true,
        headline: 'SafeSearch Enforced at Network Layer',
        description: 'FocusCrew rewrites DNS resolution to Google and Bing VIP endpoints. Search results are permanently locked in strict mode, filtering adult imagery and text directly at the provider.',
        latency: `${(Math.random() * 0.15 + 0.16).toFixed(2)}ms`,
        badgeText: 'SAFESEARCH LOCKED'
      });
    } else {
      setInspectionResult({
        domain: clean,
        isBlocked: false,
        isSearch: false,
        headline: 'Verified Clean Website',
        description: 'This host is clean and productive. Connection passes directly through at full device speed with zero buffering, zero proxy delay, and complete privacy.',
        latency: `${(Math.random() * 0.15 + 0.12).toFixed(2)}ms`,
        badgeText: 'CLEAN PASSTHROUGH'
      });
    }
  };

  return (
    <section id="dns-engine" className="py-20 md:py-28 bg-[#F7F5F0] border-b border-[#E5E2DA] text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="text-eyebrow text-[#9E6F28]">
            Interactive Shield Test
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1D1A] tracking-tight leading-tight">
            See how FocusCrew stops relapses before they happen.
          </h2>

          <p className="text-base text-[#525853] leading-relaxed">
            Test any website to see how FocusCrew’s 154,820 RAM signatures inspect and block adult content in local memory with zero delay.
          </p>
        </div>

        {/* Interactive Card */}
        <div className="pro-card p-6 sm:p-9 space-y-6">
          
          {/* Spacious Test Category Pills */}
          <div>
            <div className="text-xs font-semibold text-[#525853] mb-3">
              Try a Quick Preset:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {testCategories.map((cat) => (
                <button
                  key={cat.label}
                  onClick={() => {
                    setInputDomain(cat.sample);
                    handleTestDomain(cat.sample);
                  }}
                  className={`px-3.5 py-2.5 rounded-lg text-xs font-semibold border transition-all text-center cursor-pointer ${
                    inputDomain === cat.sample
                      ? 'border-[#9E6F28] bg-[#F5EAD8] text-[#1A1D1A] shadow-xs'
                      : 'border-[#E5E2DA] bg-white text-[#525853] hover:bg-[#F7F5F0] hover:border-[#C8C2B5]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Clean Domain Input Field */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                value={inputDomain}
                onChange={(e) => setInputDomain(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleTestDomain(inputDomain)}
                placeholder="Enter domain (e.g. porn-site.xxx or github.com)"
                className="w-full px-4 py-3 rounded-lg border border-[#E5E2DA] text-sm text-[#1A1D1A] bg-white focus:outline-2 focus:outline-[#9E6F28] transition-colors"
              />
            </div>

            <button
              onClick={() => handleTestDomain(inputDomain)}
              className="btn-accent text-sm !py-3 !px-6 whitespace-nowrap"
            >
              <span>Test Protection</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Clean Human Result Card */}
          <div className="rounded-xl bg-[#F7F5F0] border border-[#E5E2DA] p-6 space-y-5">
            
            {/* Top Verdict Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E5E2DA]">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                  inspectionResult.isBlocked
                    ? 'bg-red-100 text-red-600'
                    : inspectionResult.isSearch
                    ? 'bg-amber-100 text-amber-700'
                    : 'bg-emerald-100 text-[#234E37]'
                }`}>
                  {inspectionResult.isBlocked ? (
                    <ShieldAlert className="w-5 h-5" />
                  ) : inspectionResult.isSearch ? (
                    <Search className="w-5 h-5" />
                  ) : (
                    <ShieldCheck className="w-5 h-5" />
                  )}
                </div>

                <div>
                  <div className="text-xs text-[#7E857F] font-medium">
                    Tested Domain
                  </div>
                  <div className="text-base font-bold text-[#1A1D1A]">
                    {inspectionResult.domain}
                  </div>
                </div>
              </div>

              <span className={`self-start sm:self-auto px-3 py-1 rounded-full text-xs font-bold tracking-wide ${
                inspectionResult.isBlocked
                  ? 'bg-red-100 text-red-700 border border-red-200'
                  : inspectionResult.isSearch
                  ? 'bg-amber-100 text-amber-800 border border-amber-200'
                  : 'bg-emerald-100 text-[#234E37] border border-[#C8DCD0]'
              }`}>
                {inspectionResult.badgeText}
              </span>
            </div>

            {/* Verdict Detail */}
            <div className="space-y-1.5">
              <h4 className="text-base font-bold text-[#1A1D1A]">
                {inspectionResult.headline}
              </h4>
              <p className="text-sm text-[#525853] leading-relaxed">
                {inspectionResult.description}
              </p>
            </div>

            {/* 3 Metric Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-white border border-[#E5E2DA]">
                <div className="text-xs text-[#7E857F]">Filter Speed</div>
                <div className="text-sm font-bold text-[#1A1D1A] mt-0.5">
                  {inspectionResult.latency}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-white border border-[#E5E2DA]">
                <div className="text-xs text-[#7E857F]">Execution Engine</div>
                <div className="text-sm font-bold text-[#1A1D1A] mt-0.5">
                  Local RAM (On-Device)
                </div>
              </div>

              <div className="p-3 rounded-lg bg-white border border-[#E5E2DA]">
                <div className="text-xs text-[#7E857F]">Cloud Data Leak</div>
                <div className="text-sm font-bold text-[#234E37] mt-0.5">
                  0 Bytes Transmitted
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
export default DnsSimulator;
