import React from 'react';
import { Shield, Compass } from 'lucide-react';

export const FounderManifesto: React.FC = () => {
  return (
    <section className="py-24 bg-[#05070B] relative border-t border-slate-900">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900/90 via-[#0B0F18] to-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Watermark Badge */}
          <div className="absolute top-6 right-6 opacity-5 pointer-events-none">
            <Shield className="w-48 h-48 text-cyan-400" />
          </div>

          <div className="relative z-10 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-400">
              <Compass className="w-3.5 h-3.5" />
              FOUNDER MANIFESTO
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              "You don't lack willpower. You are fighting supercomputers engineered to harvest your attention."
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                Every year, trillions of dollars are poured into neural behavioral modeling, variable-ratio dopamine rewards, 
                and algorithmic feeds designed with a single goal: to keep you scrolling, numb, and unfulfilled.
              </p>
              
              <p>
                When you try to quit pornography, binge-scrolling, or morning procrastination with conventional apps, you fail 
                not because you are weak, but because those apps were designed to be soft. They give you a convenient 
                <em> "Ignore limit for 15 minutes"</em> button. They allow instantaneous uninstalls. They prioritize user retention 
                over your radical transformation.
              </p>

              <p>
                I built <strong className="text-white">FocusCrew</strong> as an uncompromising fortress. When you lock the 
                Freedom Vault, your highest future self holds the keys. Local DNS interception kills adult queries before they hit the wire. 
                TaskAlarm demands active cognitive proof that you are awake. 
              </p>

              <p className="font-semibold text-cyan-300">
                True freedom isn't the ability to indulge every cheap impulse—it is the strength to direct your mind where it belongs.
              </p>
            </div>

            {/* Author Signature Line */}
            <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-white text-base">Mohammad Fatim Hasnain</h4>
                <p className="text-xs font-mono text-slate-400">Founder & Systems Architect, FocusCrew</p>
              </div>
              <div className="text-right">
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-md border border-emerald-500/30">
                  Android Native v1.0.0
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
