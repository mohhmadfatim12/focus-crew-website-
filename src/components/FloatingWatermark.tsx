import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

export const FloatingWatermark: React.FC = () => {
  return (
    <aside 
      aria-label="Intellectual Property Protection Notice"
      className="fixed bottom-4 right-4 z-40 hidden sm:flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FBF9F5]/95 backdrop-blur-md border border-[#E5DFD3] shadow-lg shadow-black/10 text-xs font-mono select-none"
    >
      <div className="w-5 h-5 rounded-full bg-[#A37A3E] text-white flex items-center justify-center shrink-0">
        <ShieldCheck className="w-3 h-3" />
      </div>
      
      <div className="flex items-center gap-1.5 text-[#202621]">
        <span className="font-extrabold text-[#A37A3E]">FocusCrew™</span>
        <span className="text-[#8A958D]">•</span>
        <span className="text-[11px] text-[#5E665F] font-semibold">Sole Owner: Mohammad Fatim Hasnain</span>
      </div>

      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#E1EDE5] text-[10px] font-bold text-[#284B39] border border-[#284B39]/20 ml-1">
        <Lock className="w-2.5 h-2.5" />
        <span>PROTECTED IP</span>
      </span>
    </aside>
  );
};

