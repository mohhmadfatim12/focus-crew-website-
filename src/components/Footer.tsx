import React from 'react';
import { ArrowUp, Mail, ShieldCheck, Smartphone } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-[#E5DFD3] pt-16 pb-12 text-[#5E665F] text-xs font-sans text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E5DFD3]">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl overflow-hidden border border-[#E5DFD3] bg-[#FBF9F5] p-1 flex items-center justify-center">
                <img src="/app-icon-round.png" alt="FocusCrew" className="w-full h-full object-cover rounded-lg" />
              </div>
              <span className="font-extrabold text-lg text-[#202621] tracking-tight font-serif">FocusCrew</span>
            </div>

            <p className="text-[#5E665F] text-xs leading-relaxed max-w-sm">
              The sovereign Android digital wellness suite that neutralizes adult threats via 154,820 RAM Bloom filters, 
              dismantles short-form doomscrolling, and restores prefrontal focus with Binaural Gamma audio and strict Ulysses locks.
            </p>

            <div className="space-y-1.5 text-xs">
              <div className="flex items-center gap-2 text-[#202621]">
                <Mail className="w-3.5 h-3.5 text-[#A37A3E] shrink-0" />
                <a href="mailto:mfatimhasnain12@gmail.com" className="hover:text-[#A37A3E] underline font-medium">
                  mfatimhasnain12@gmail.com
                </a>
              </div>
              <div className="text-[#5E665F] font-mono text-[11px]">
                Owner & Creator: <strong className="text-[#202621]">Mohammad Fatim Hasnain</strong>
              </div>
              <div className="text-[#284B39] font-mono text-[11px]">
                WhatsApp: <a href="https://wa.me/923312466885" target="_blank" rel="noopener noreferrer" className="hover:underline font-bold">+92 331 2466885</a>
              </div>
            </div>
          </div>

          {/* Links Column 1: FocusCrew */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#202621] uppercase tracking-wider">
              FocusCrew
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#features" className="hover:text-[#A37A3E] transition-colors">About App</a></li>
              <li><a href="#titan-fortress" className="hover:text-[#A37A3E] transition-colors">Titan Shield</a></li>
              <li><a href="#dns-engine" className="hover:text-[#A37A3E] transition-colors">DNS Lab</a></li>
              <li><a href="#faq" className="hover:text-[#A37A3E] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Links Column 2: Features */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#202621] uppercase tracking-wider">
              Features
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#features" className="hover:text-[#A37A3E] transition-colors">Reel Counter</a></li>
              <li><a href="#features" className="hover:text-[#A37A3E] transition-colors">Titan Shield Engine</a></li>
              <li><a href="#features" className="hover:text-[#A37A3E] transition-colors">Freedom Vault</a></li>
              <li><a href="#features" className="hover:text-[#A37A3E] transition-colors">Binaural Audio (40Hz)</a></li>
              <li><a href="#features" className="hover:text-[#A37A3E] transition-colors">Task Alarm Overlay</a></li>
            </ul>
          </div>

          {/* Links Column 3: Platform */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#202621] uppercase tracking-wider">
              Platform
            </h4>
            <ul className="space-y-2 text-xs">
              <li><span className="text-[#5E665F]">Android 8.0 - 15</span></li>
              <li><span className="text-[#5E665F]">On-Device Sovereign Shield</span></li>
              <li><span className="text-[#5E665F]">Zero Cloud Routing</span></li>
              <li><span className="text-[#5E665F]">11.0 MB Binary</span></li>
            </ul>
          </div>

          {/* Trust Badges */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#202621] uppercase tracking-wider">
              Verified
            </h4>
            <div className="space-y-2">
              <div className="p-2.5 rounded-xl bg-[#FBF9F5] border border-[#E5DFD3] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#284B39]" />
                <span className="text-[11px] font-bold text-[#202621]">100% On-Device</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#FBF9F5] border border-[#E5DFD3] flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-[#A37A3E]" />
                <span className="text-[11px] font-bold text-[#202621]">Android 15 Ready</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#8A958D] text-[11px]">
          <div>
            Owned & Created by Mohammad Fatim Hasnain. Copyright © 2026 FocusCrew. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FBF9F5] border border-[#E5DFD3] text-[#202621] hover:text-[#A37A3E] hover:bg-[#F5EAD8] transition-all cursor-pointer shadow-2xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
