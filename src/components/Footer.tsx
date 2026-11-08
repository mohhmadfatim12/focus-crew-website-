import React from 'react';
import { ArrowUp, Mail, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-[#E5E2DA] pt-14 pb-12 text-[#525853] text-xs font-sans text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#E5E2DA]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md overflow-hidden border border-[#D8D4C8] bg-[#141715] p-0.5 flex items-center justify-center shrink-0">
                <img src="/app-icon-round.png" alt="FocusCrew" className="w-full h-full object-cover rounded-sm" />
              </div>
              <span className="font-bold text-base text-[#1A1D1A] tracking-tight">FocusCrew</span>
            </div>

            <p className="text-xs text-[#525853] leading-relaxed max-w-sm">
              On-device Android defense against doomscrolling and adult content. Powered by a 154,820 RAM Bloom filter, SafeSearch locks, and the 15-minute Freedom Vault.
            </p>

            <div className="space-y-1 text-xs font-mono text-[#7E857F] pt-1">
              <div>Creator: <strong className="text-[#1A1D1A]">Mohammad Fatim Hasnain</strong></div>
              <div>Contact: <a href="mailto:mfatimhasnain12@gmail.com" className="text-[#1A1D1A] hover:underline">mfatimhasnain12@gmail.com</a></div>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="md:col-span-2 space-y-2">
            <h4 className="text-xs font-bold text-[#1A1D1A] font-mono uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-1.5 text-xs text-[#525853]">
              <li><a href="#features" className="hover:text-[#1A1D1A] transition-colors">Features</a></li>
              <li><a href="#walkthrough" className="hover:text-[#1A1D1A] transition-colors">Walkthrough</a></li>
              <li><a href="#friction-science" className="hover:text-[#1A1D1A] transition-colors">Friction Science</a></li>
              <li><a href="#architecture" className="hover:text-[#1A1D1A] transition-colors">Architecture</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-2 space-y-2">
            <h4 className="text-xs font-bold text-[#1A1D1A] font-mono uppercase tracking-wider">
              Tools
            </h4>
            <ul className="space-y-1.5 text-xs text-[#525853]">
              <li><a href="#dns-engine" className="hover:text-[#1A1D1A] transition-colors">DNS Simulator</a></li>
              <li><a href="#cost-calculator" className="hover:text-[#1A1D1A] transition-colors">Time Audit</a></li>
              <li><a href="#faq" className="hover:text-[#1A1D1A] transition-colors">FAQ</a></li>
              <li><a href="#download-section" className="hover:text-[#1A1D1A] transition-colors">Download APK</a></li>
            </ul>
          </div>

          {/* Specs */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-bold text-[#1A1D1A] font-mono uppercase tracking-wider">
              Distribution
            </h4>
            <div className="p-3 rounded-lg bg-[#F7F5F0] border border-[#E5E2DA] space-y-1 text-[11px] font-mono">
              <div className="flex items-center gap-1.5 text-[#234E37] font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>100% On-Device Engine</span>
              </div>
              <div className="text-[#525853]">Android 8.0 - 15 • 11.0 MB</div>
              <div className="text-[#7E857F]">SHA-256 Verified Release</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#7E857F] text-[11px]">
          <div>
            Built by Mohammad Fatim Hasnain. Copyright © 2026 FocusCrew. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F7F5F0] border border-[#E5E2DA] text-[#1A1D1A] hover:bg-[#EFECE4] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
