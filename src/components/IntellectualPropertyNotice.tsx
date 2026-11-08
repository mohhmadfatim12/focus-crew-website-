import React from 'react';
import { Shield, FileCheck, Lock } from 'lucide-react';

export const IntellectualPropertyNotice: React.FC = () => {
  return (
    <section id="ip-protection" className="py-16 md:py-20 bg-white border-b border-[#E5E2DA] text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="pro-card p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#9E6F28]">
            <Shield className="w-4 h-4 text-[#9E6F28]" />
            <span className="font-semibold uppercase tracking-wider">Intellectual Property Notice</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-[#1A1D1A]">
            Original Architecture & Software Copyright
          </h3>

          <p className="text-xs sm:text-sm text-[#525853] leading-relaxed">
            FocusCrew™ and its underlying behavioral architecture—including the on-device RAM Bloom filter pipeline, SafeSearch VIP enforcement rules, Unskippable Task Alarm cognitive gates, and the Freedom Vault urge delay mechanism—are original engineering assets created and owned exclusively by <strong>Mohammad Fatim Hasnain</strong>.
          </p>

          <div className="pt-3 border-t border-[#E5E2DA] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-[#525853]">
            <div>
              <span className="text-[#7E857F]">Developer & Owner:</span>
              <div className="font-bold text-[#1A1D1A]">Mohammad Fatim Hasnain</div>
            </div>
            <div>
              <span className="text-[#7E857F]">Android Identifier:</span>
              <div className="font-bold text-[#1A1D1A]">com.focuscrew.app</div>
            </div>
            <div>
              <span className="text-[#7E857F]">Copyright:</span>
              <div className="font-bold text-[#1A1D1A]">© 2026 All Rights Reserved</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
export default IntellectualPropertyNotice;
