import React from 'react';
import { ShieldAlert, Lock, CheckCircle2, FileText, Scale } from 'lucide-react';

export const IntellectualPropertyNotice: React.FC = () => {
  return (
    <section id="ip-protection" className="py-20 bg-[#FAF7FF] border-t border-purple-100 text-left relative overflow-hidden">
      
      {/* Background Watermark Stamp Pattern */}
      <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none flex flex-wrap items-center justify-center gap-12 font-mono text-xs font-bold text-slate-900 tracking-widest rotate-[-12deg] scale-125">
        {[...Array(30)].map((_, i) => (
          <span key={i}>
            PROPRIETARY IP • SOLE OWNER: MOHAMMAD FATIM HASNAIN • © 2026 FOCUSCREW • ALL RIGHTS RESERVED • DO NOT COPY •
          </span>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-100/80 border border-purple-200 text-xs font-bold text-[#7E3FF2] shadow-2xs">
            <Scale className="w-3.5 h-3.5" />
            <span>LEGAL & INTELLECTUAL PROPERTY PROTECTION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#212529] tracking-tight">
            Proprietary Technology & Startup Protection
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            FocusCrew is an independent startup built and owned exclusively by <strong>Mohammad Fatim Hasnain</strong>. 
            All concepts, behavioral interventions, and designs are legally protected.
          </p>
        </div>

        {/* Master IP Defense Certificate Card */}
        <div className="rounded-3xl bg-white border-2 border-purple-200/90 shadow-[0_20px_50px_rgba(126,63,242,0.06)] p-6 sm:p-10 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Official Certificate Seal & Specs */}
            <div className="lg:col-span-5 rounded-2xl bg-[#FAF8FF] border border-purple-200 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#7E3FF2] text-white flex items-center justify-center shadow-md shadow-purple-500/25">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#7E3FF2] font-extrabold tracking-wider">
                    Official IP Registry
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900">
                    FocusCrew™ Startup Defense
                  </h3>
                </div>
              </div>

              <div className="space-y-2 pt-2 text-xs font-mono">
                <div className="flex items-center justify-between py-1.5 border-b border-purple-100 text-slate-600">
                  <span className="text-slate-400">ORIGINAL CREATOR:</span>
                  <strong className="text-slate-900">Mohammad Fatim Hasnain</strong>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-purple-100 text-slate-600">
                  <span className="text-slate-400">SOLE PROPRIETOR:</span>
                  <span className="font-bold text-purple-700">100% Verified Sole Owner</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-purple-100 text-slate-600">
                  <span className="text-slate-400">COPYRIGHT YEAR:</span>
                  <span className="font-bold text-slate-900">© 2026 All Rights Reserved</span>
                </div>

                <div className="flex items-center justify-between py-1.5 text-slate-600">
                  <span className="text-slate-400">LEGAL STATUS:</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                    PROTECTED ASSET
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-purple-100 text-[11px] text-slate-500 flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#7E3FF2] shrink-0" />
                <span>Trade secret protections & architectural safeguards actively enforced.</span>
              </div>
            </div>

            {/* Right: Strict Warning & Anti-Cloning Statement */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-rose-600" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-700">
                  Strict Prohibition Against Copying & Replication
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-extrabold text-[#212529] tracking-tight leading-snug">
                Unauthorized cloning, imitation, or reverse-engineering is strictly forbidden.
              </h4>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                <p>
                  The workflow mechanics, behavioral friction gates (including the 8-second mindful pause and swipe counter), 
                  the emergency unlock cooldown buffer, and unique user experience patterns of <strong>FocusCrew™</strong> are the original 
                  intellectual property and proprietary invention of <strong>Mohammad Fatim Hasnain</strong>.
                </p>

                <p>
                  No individual, company, or organization is granted permission to clone, copy, decompile, adapt, or distribute 
                  derivative versions of this startup concept, software implementation, or branding without explicit written authorization from the creator.
                </p>
              </div>

              {/* 3 Protection Seals */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>DMCA Protected</span>
                </div>

                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Trade Dress Guard</span>
                </div>

                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sole Proprietorship</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
