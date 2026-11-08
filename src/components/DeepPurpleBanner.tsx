import React from 'react';
import { ShieldCheck, Cpu, Lock, Radio, Zap } from 'lucide-react';

export const DeepPurpleBanner: React.FC = () => {
  return (
    <section id="architecture" className="py-20 md:py-28 bg-[#141715] text-white border-b border-[#2C322E] text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="text-eyebrow text-[#D4AF37]">
            Technical Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            How FocusCrew executes without cloud lag or battery drain.
          </h2>
          <p className="text-base text-[#A1AAA2] leading-relaxed">
            Unlike cloud-based blockers that route your web traffic through distant proxy servers, FocusCrew executes entirely inside the Android kernel layer on your local hardware.
          </p>
        </div>

        {/* 4 Architectural Layers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          <div className="p-6 rounded-xl bg-[#1C201D] border border-[#2C322E] space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold text-[#D4AF37]">
              <span>LAYER 01</span>
              <Cpu className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <h4 className="text-base font-bold text-white">Local VpnService Loopback</h4>
            <p className="text-sm text-[#A1AAA2] leading-relaxed">
              Binds to local loopback to inspect only small UDP DNS packets (&lt; 1KB). Video, music, and streaming pass untouched over your standard network.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#1C201D] border border-[#2C322E] space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold text-[#D4AF37]">
              <span>LAYER 02</span>
              <Zap className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <h4 className="text-base font-bold text-white">RAM Bloom Filter</h4>
            <p className="text-sm text-[#A1AAA2] leading-relaxed">
              154,820 adult domains and keyword hashes loaded into high-speed device memory. Zero disk I/O and zero network round-trips.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#1C201D] border border-[#2C322E] space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold text-[#D4AF37]">
              <span>LAYER 03</span>
              <Radio className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <h4 className="text-base font-bold text-white">SafeSearch VIP Rewrite</h4>
            <p className="text-sm text-[#A1AAA2] leading-relaxed">
              Rewrites DNS responses for Google, Bing, DuckDuckGo, and YouTube to force strict restricted modes at the network packet level.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#1C201D] border border-[#2C322E] space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold text-[#D4AF37]">
              <span>LAYER 04</span>
              <Lock className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <h4 className="text-base font-bold text-white">Window Event Callbacks</h4>
            <p className="text-sm text-[#A1AAA2] leading-relaxed">
              Uses Android Accessibility window state notifications to count vertical short-form video swipes with zero camera or screen-recording permissions.
            </p>
          </div>

        </div>

        {/* Human Architecture Guarantees: 3 Clean Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-6 sm:p-7 rounded-xl bg-[#1C201D] border border-[#2C322E] space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#242A25] border border-[#3A423D] flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white">Zero Cloud Data Routing</h4>
            <p className="text-sm text-[#A1AAA2] leading-relaxed">
              Every DNS query and app check executes strictly on your physical Android hardware. No browsing logs, visited domains, or screen activities ever leave your device.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-xl bg-[#1C201D] border border-[#2C322E] space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#242A25] border border-[#3A423D] flex items-center justify-center text-amber-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white">Sub-Millisecond Speed</h4>
            <p className="text-sm text-[#A1AAA2] leading-relaxed">
              With 154,820 threat hashes pre-compiled into local RAM, evaluation takes just 0.18ms. Your phone enjoys full speeds with zero browsing lag or battery drain.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-xl bg-[#1C201D] border border-[#2C322E] space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#242A25] border border-[#3A423D] flex items-center justify-center text-[#D4AF37]">
              <Lock className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white">Unbreakable Lockout</h4>
            <p className="text-sm text-[#A1AAA2] leading-relaxed">
              Incognito tabs, SafeSearch settings tampering, and task-killer bypasses are automatically intercepted at the system service level before urges can take over.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
export default DeepPurpleBanner;
