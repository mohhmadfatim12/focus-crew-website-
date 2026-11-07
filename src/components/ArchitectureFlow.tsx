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
    <section className="py-24 bg-white relative border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700 shadow-2xs">
            <Network className="w-3.5 h-3.5 text-blue-600" />
            ZERO-SERVER LOCAL LOOPBACK
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How FocusCrew blocks without a proxy.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Commercial VPN blockers route your private browsing traffic through their cloud servers. 
            FocusCrew uses Android's local loopback to filter DNS in memory on your phone.
          </p>
        </div>

        {/* Visual Architectural Diagram */}
        <div className="max-w-5xl mx-auto p-6 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm text-left">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            
            {/* Step 1: Android Apps */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Stage 01: Ingress</span>
                <h4 className="text-sm font-bold text-slate-900 mt-0.5">Android Apps</h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Chrome, Brave, Reddit, Instagram, or games initiate standard DNS queries on Port 53.
              </p>
            </div>

            {/* Step 2: TUN Interface */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center">
                <Network className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-indigo-600 uppercase font-semibold">Stage 02: Interception</span>
                <h4 className="text-sm font-bold text-slate-900 mt-0.5">10.0.0.2 TUN Socket</h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Android VpnService traps DNS packets locally. Traffic NEVER leaves the physical device.
              </p>
            </div>

            {/* Step 3: DnsPacketParser */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-purple-600 uppercase font-semibold">Stage 03: Decision</span>
                <h4 className="text-sm font-bold text-slate-900 mt-0.5">In-Memory Engine</h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                150K domain signatures & regex keywords inspected in RAM under 0.3 milliseconds.
              </p>
            </div>

            {/* Step 4: Binary Action */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-emerald-600 uppercase font-semibold">Stage 04: Egress</span>
                <h4 className="text-sm font-bold text-slate-900 mt-0.5">Instant Resolution</h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Threats receive 0.0.0.0 (NXDOMAIN). Safe requests forward to upstream DNS clean.
              </p>
            </div>

          </div>

          {/* Privacy Proof Points */}
          <div className="mt-8 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200">
              <EyeOff className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-slate-900">Zero HTTPS Decryption</h5>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  FocusCrew only inspects DNS hostnames. It cannot read your bank details, chats, or passwords.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200">
              <Server className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-slate-900">No Central Server</h5>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Even if FocusCrew's developers vanished, your app continues functioning on-device forever.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200">
              <Zap className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-slate-900">Sub-1% Battery Overhead</h5>
                <p className="text-[11px] text-slate-500 mt-0.5">
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
