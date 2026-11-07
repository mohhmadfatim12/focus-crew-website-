import React from 'react';
import { 
  Network, 
  ShieldCheck, 
  Smartphone,
  Zap,
  Lock
} from 'lucide-react';

export const ArchitectureFlow: React.FC = () => {
  return (
    <section className="py-24 bg-[#FAF7FF] border-t border-purple-100 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-purple-200 text-xs font-semibold text-[#7E3FF2] shadow-2xs">
            <Network className="w-3.5 h-3.5" />
            <span>ZERO-SERVER ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#212529] tracking-tight">
            How FocusCrew Blocks Without a Remote Proxy
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Commercial blockers route your browsing history through their cloud servers so they can log your data and charge you $12/month. 
            FocusCrew runs 100% locally on your phone.
          </p>
        </div>

        {/* Visual Architectural Diagram (Zanderio Style 4-Stage Connected Frame) */}
        <div className="max-w-5xl mx-auto p-6 sm:p-10 rounded-3xl bg-white border border-purple-200/90 shadow-sm relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-stretch relative z-10">
            
            {/* Step 1: Android Apps */}
            <div className="p-5 rounded-2xl bg-[#FAF8FF] border border-purple-100 space-y-3 flex flex-col justify-between card-shadow-hover">
              <div>
                <div className="w-9 h-9 rounded-xl bg-purple-100 text-[#7E3FF2] flex items-center justify-center mb-3">
                  <Smartphone className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Stage 01: Ingress</span>
                <h4 className="text-sm font-bold text-slate-900 mt-0.5">Android Apps</h4>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  Chrome, Brave, Reddit, or Instagram open a connection and send standard DNS requests on Port 53.
                </p>
              </div>
              <div className="text-[10px] font-mono text-purple-700 bg-white px-2 py-1 rounded border border-purple-100">
                PORT 53 • UDP QUERY
              </div>
            </div>

            {/* Step 2: TUN Interface */}
            <div className="p-5 rounded-2xl bg-[#FAF8FF] border border-purple-100 space-y-3 flex flex-col justify-between card-shadow-hover">
              <div>
                <div className="w-9 h-9 rounded-xl bg-purple-100 text-[#7E3FF2] flex items-center justify-center mb-3">
                  <Network className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-[#7E3FF2] uppercase font-semibold">Stage 02: Interception</span>
                <h4 className="text-sm font-bold text-slate-900 mt-0.5">10.0.0.2 TUN Socket</h4>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  Android routes the query into FocusCrew's local loopback tunnel directly inside your phone's memory.
                </p>
              </div>
              <div className="text-[10px] font-mono text-emerald-700 bg-white px-2 py-1 rounded border border-purple-100 font-bold">
                0.2MS LOCAL LOOKUP
              </div>
            </div>

            {/* Step 3: Local Engine */}
            <div className="p-5 rounded-2xl bg-[#FAF8FF] border border-purple-100 space-y-3 flex flex-col justify-between card-shadow-hover">
              <div>
                <div className="w-9 h-9 rounded-xl bg-purple-100 text-[#7E3FF2] flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-red-600 uppercase font-semibold">Stage 03: Fast Filter</span>
                <h4 className="text-sm font-bold text-slate-900 mt-0.5">RAM Pattern Check</h4>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  Checks 150,000+ adult domains. If matched, it immediately drops the packet and synthesizes 0.0.0.0.
                </p>
              </div>
              <div className="text-[10px] font-mono text-red-600 bg-white px-2 py-1 rounded border border-purple-100 font-bold">
                0.0.0.0 NXDOMAIN
              </div>
            </div>

            {/* Step 4: Upstream */}
            <div className="p-5 rounded-2xl bg-[#FAF8FF] border border-purple-100 space-y-3 flex flex-col justify-between card-shadow-hover">
              <div>
                <div className="w-9 h-9 rounded-xl bg-purple-100 text-[#7E3FF2] flex items-center justify-center mb-3">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-emerald-600 uppercase font-semibold">Stage 04: Passthrough</span>
                <h4 className="text-sm font-bold text-slate-900 mt-0.5">Clean Resolver</h4>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  Work domains pass through to Cloudflare 1.1.1.3 with strict SafeSearch enforced on Google & Bing.
                </p>
              </div>
              <div className="text-[10px] font-mono text-slate-700 bg-white px-2 py-1 rounded border border-purple-100">
                1.1.1.3 + SAFESEARCH
              </div>
            </div>

          </div>

          {/* Privacy Guarantee Note */}
          <div className="mt-8 pt-6 border-t border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#7E3FF2]" />
              <span><strong>Privacy Guarantee:</strong> Zero browsing logs are stored or transmitted. All filtering occurs strictly inside device memory.</span>
            </div>

            <span className="text-[11px] font-mono text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200 font-bold">
              0KB CLOUD TELEMETRY
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
