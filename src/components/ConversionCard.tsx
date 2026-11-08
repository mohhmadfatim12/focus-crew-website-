import React, { useState } from 'react';
import { Download, Copy, Check, ShieldCheck, Mail, MessageSquare } from 'lucide-react';

export const ConversionCard: React.FC = () => {
  const [copiedHash, setCopiedHash] = useState(false);

  const sha256Checksum = 'c75614867eaf70fea91a6bfbe1dc28dd658afad3e3566d817ef1655ab5872dc6';

  const copyHash = () => {
    navigator.clipboard.writeText(sha256Checksum);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  return (
    <section id="download-section" className="py-20 md:py-24 bg-white border-b border-[#E5E2DA] text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="pro-card p-8 sm:p-12 space-y-8 bg-[#F7F5F0]">
          
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#9E6F28]">
              Verified Binary Distribution
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1D1A] tracking-tight">
              Install FocusCrew on Android.
            </h2>

            <p className="text-sm sm:text-base text-[#525853] leading-relaxed">
              No account creation, no credit card, and zero cloud data relays. Download the signed Android APK to initialize autonomous on-device habit defense immediately.
            </p>
          </div>

          {/* Download & Verification Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="/FocusCrew.apk"
              download="FocusCrew.apk"
              className="btn-accent text-sm !py-3 !px-6 shadow-sm flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download FocusCrew APK (11 MB)</span>
            </a>

            <button
              type="button"
              onClick={copyHash}
              className="btn-secondary text-xs !py-3 !px-4 flex items-center justify-center gap-2 font-mono"
            >
              {copiedHash ? (
                <>
                  <Check className="w-4 h-4 text-[#234E37]" />
                  <span className="text-[#234E37] font-semibold">SHA-256 Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#7E857F]" />
                  <span>Copy SHA-256 Checksum</span>
                </>
              )}
            </button>
          </div>

          {/* Technical Metadata */}
          <div className="pt-6 border-t border-[#E5E2DA] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-[#525853]">
            <div>
              <span className="text-[#7E857F] block">Package:</span>
              <span className="font-semibold text-[#1A1D1A]">com.focuscrew.app</span>
            </div>
            <div>
              <span className="text-[#7E857F] block">Platform:</span>
              <span className="font-semibold text-[#1A1D1A]">Android 8.0 to 15</span>
            </div>
            <div>
              <span className="text-[#7E857F] block">Binary Size:</span>
              <span className="font-semibold text-[#1A1D1A]">11.0 MB</span>
            </div>
            <div>
              <span className="text-[#7E857F] block">Telemetry:</span>
              <span className="font-semibold text-[#234E37]">0 Bytes Transmitted</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default ConversionCard;
