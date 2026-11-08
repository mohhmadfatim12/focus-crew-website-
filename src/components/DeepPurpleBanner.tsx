import React from 'react';
import { ShieldCheck, Cpu, Lock, Terminal } from 'lucide-react';

export const DeepPurpleBanner: React.FC = () => {
  return (
    <section id="architecture" className="py-20 md:py-28 bg-[#141715] text-white border-b border-[#2C322E] text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#D4AF37]">
            Technical Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            How FocusCrew executes without cloud lag or battery drain.
          </h2>
          <p className="text-sm sm:text-base text-[#A1AAA2] leading-relaxed">
            Unlike cloud-based blockers that route heavy web traffic through distant proxy servers, FocusCrew executes entirely inside the Android kernel layer on your local hardware.
          </p>
        </div>

        {/* 4 Architectural Layers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          <div className="p-6 rounded-xl bg-[#1C201D] border border-[#2C322E] space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-[#D4AF37]">
              <span>LAYER 01</span>
              <Cpu className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <h4 className="text-base font-bold text-white">Local VpnService Loopback</h4>
            <p className="text-xs text-[#A1AAA2] leading-relaxed">
              Binds to 127.0.0.1 to inspect only small UDP DNS packets (&lt; 1KB). Video, music, and streaming data pass untouched over your standard network.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#1C201D] border border-[#2C322E] space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-[#D4AF37]">
              <span>LAYER 02</span>
              <Terminal className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <h4 className="text-base font-bold text-white">RAM Bloom Filter</h4>
            <p className="text-xs text-[#A1AAA2] leading-relaxed">
              154,820 adult domains and keyword hashes loaded into high-speed device memory. Zero disk I/O and zero network round-trips.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#1C201D] border border-[#2C322E] space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-[#D4AF37]">
              <span>LAYER 03</span>
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <h4 className="text-base font-bold text-white">SafeSearch VIP Rewrite</h4>
            <p className="text-xs text-[#A1AAA2] leading-relaxed">
              Rewrites DNS responses for Google, Bing, DuckDuckGo, and YouTube to force strict restricted modes at the network packet level.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#1C201D] border border-[#2C322E] space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-[#D4AF37]">
              <span>LAYER 04</span>
              <Lock className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <h4 className="text-base font-bold text-white">Window Event Callbacks</h4>
            <p className="text-xs text-[#A1AAA2] leading-relaxed">
              Uses Android Accessibility window state notifications to count vertical short-form video swipes with zero camera or screen-recording permissions.
            </p>
          </div>

        </div>

        {/* Clean Monospace Architecture Flow Block */}
        <div className="rounded-xl bg-[#0E100F] border border-[#2C322E] p-6 font-mono text-xs text-[#A1AAA2]">
          <div className="text-[#D4AF37] font-bold mb-3 uppercase tracking-wider text-[11px]">
            Packet Execution Pathway
          </div>
          <div className="space-y-1.5 leading-relaxed text-[11px] sm:text-xs">
            <div>[Browser Socket] &gt; App issues DNS query for host destination</div>
            <div>[Local Tun0]       &gt; FocusCrew intercepts UDP:53 on loopback interface (0.02ms)</div>
            <div>[RAM Filter]      &gt; Evaluates Bloom Filter bitmap across 154,820 rules (0.16ms)</div>
            <div className="text-emerald-400 font-semibold">&gt;&gt; CLEAN DOMAIN   : Return verified upstream IP address directly</div>
            <div className="text-amber-400 font-semibold">&gt;&gt; SEARCH ENGINE  : Rewrite resolution to forcesafesearch VIP (Strict Mode)</div>
            <div className="text-red-400 font-semibold">&gt;&gt; EXPLICIT HOST  : Return NXDOMAIN or loopback drop (0 bytes transmitted)</div>
          </div>
        </div>

      </div>
    </section>
  );
};
export default DeepPurpleBanner;
