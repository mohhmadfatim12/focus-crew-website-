import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

export const FloatingWatermark: React.FC = () => {
  return (
    <aside 
      aria-label="Intellectual Property Protection Notice"
      className="fixed bottom-4 right-4 z-40 hidden sm:flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-purple-200/90 shadow-lg shadow-purple-500/10 text-xs font-mono select-none"
    >
      <div className="w-5 h-5 rounded-full bg-[#7E3FF2] text-white flex items-center justify-center shrink-0">
        <ShieldCheck className="w-3 h-3" />
      </div>
      
      <div className="flex items-center gap-1.5 text-slate-800">
        <span className="font-extrabold text-[#7E3FF2]">FocusCrew™</span>
        <span className="text-slate-400">•</span>
        <span className="text-[11px] text-slate-600 font-semibold">Sole Owner: Mohammad Fatim Hasnain</span>
      </div>

      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-purple-50 text-[10px] font-bold text-purple-700 border border-purple-200 ml-1">
        <Lock className="w-2.5 h-2.5" />
        <span>PROTECTED IP</span>
      </span>
    </aside>
  );
};

