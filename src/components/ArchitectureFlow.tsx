import React from 'react';
import { 
  Network, 
  ShieldCheck, 
  Server, 
  Cpu, 
  Smartphone,
  EyeOff,
  Zap
} from 'lucide-react';

export const ArchitectureFlow: React.FC = () => {
  return (
    <section className="py-24 bg-[#05070B] relative border-t border-slate-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
            <Network className="w-3.5 h-3.5" />
            ZERO-SERVER ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How FocusCrew blocks without a proxy.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Commercial VPN blockers route all your private internet traffic through their cloud servers. 
            FocusCrew uses Android's local loopback to filter DNS in memory on your phone.
          </p>
        </div>

        {/* Visual Architectural Diagram */}
        <div className="max-w-5xl mx-auto p-6 sm:p-10 rounded-3xl bg-slate-950/80 border border-slate-800 shadow-2xl">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center text-left">
            
            {/* Step 1: Android Apps */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 relative">
              <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase">Stage 01: Ingress</span>
                <h4 className="text-sm font-bold text-white mt-0.5">Android Apps</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Chrome, Brave, Reddit, Instagram, or System apps initiate standard DNS queries on Port 53.
              </p>
            </div>

            {/* Step 2: TUN Interface */}
            <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 space-y-3 relative">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <Network className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-cyan-400 uppercase">Stage 02: Interception</span>
                <h4 className="text-sm font-bold text-white mt-0.5">10.0.0.2 TUN Socket</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Android VpnService traps DNS packets locally. Traffic NEVER leaves the device.
              </p>
            </div>

            {/* Step 3: DnsPacketParser */}
            <div className="p-5 rounded-2xl bg-indigo-950/20 border border-indigo-500/30 space-y-3 relative">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-indigo-400 uppercase">Stage 03: Decision</span>
                <h4 className="text-sm font-bold text-white mt-0.5">In-Memory Engine</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                150K domain signatures & regex keywords inspected in RAM under 0.3 milliseconds.
              </p>
            </div>

            {/* Step 4: Binary Action */}
            <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-3 relative">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-emerald-400 uppercase">Stage 04: Egress</span>
                <h4 className="text-sm font-bold text-white mt-0.5">Instant Resolution</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Threats receive 0.0.0.0 (NXDOMAIN). Safe requests forward to upstream DNS clean.
              </p>
            </div>

          </div>

          {/* Core Privacy & Security Proof Points */}
          <div className="mt-8 pt-8 border-t border-slate-900 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/30 border border-slate-800/80">
              <EyeOff className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-white">Zero HTTPS Decryption</h5>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  FocusCrew only reads DNS query hostnames. It cannot read your bank details, chats, or passwords.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/30 border border-slate-800/80">
              <Server className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-white">No Central Server</h5>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Even if FocusCrew's developers vanished, your app continues functioning on-device forever.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/30 border border-slate-800/80">
              <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-white">Sub-1% Battery Overhead</h5>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Because processing happens via native Linux C/Kotlin buffers, battery impact is imperceptible.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
