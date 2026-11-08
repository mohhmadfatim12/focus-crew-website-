import React, { useState } from 'react';
import { Download, Copy, Check, ShieldCheck, ArrowRight, Smartphone, Settings, Eye } from 'lucide-react';

export const ConversionCard: React.FC = () => {
  const [copiedHash, setCopiedHash] = useState(false);

  const sha256Checksum = 'd92829cc9f2a83c95343a9fa04485212e08680fe8ce49022d11cfc76b370aa57';

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
            <div className="text-eyebrow text-[#9E6F28]">
              Verified Binary Distribution
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1D1A] tracking-tight leading-tight">
              Install FocusCrew on Android.
            </h2>

            <p className="text-base text-[#525853] leading-relaxed">
              No account creation, no credit card, and zero cloud data relays. Download the direct Android APK to initialize autonomous on-device habit defense immediately.
            </p>
          </div>

          {/* Download & Verification Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="/FocusCrew.apk"
              download="FocusCrew.apk"
              className="btn-accent text-sm !py-3.5 !px-7 shadow-sm flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download FocusCrew APK (11 MB)</span>
            </a>

            <button
              type="button"
              onClick={copyHash}
              className="btn-secondary text-xs !py-3.5 !px-5 flex items-center justify-center gap-2"
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

          {/* Quick 3-Step Installation Guide */}
          <div className="pt-6 border-t border-[#E5E2DA] space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-[#1A1D1A]">
                Quick 3-Step Installation Guide
              </h3>
              <span className="text-xs text-[#7E857F]">
                Takes &lt; 60 seconds
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-white border border-[#E5E2DA] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#9E6F28]">STEP 01</span>
                  <Smartphone className="w-4 h-4 text-[#9E6F28]" />
                </div>
                <h4 className="text-sm font-bold text-[#1A1D1A]">Download & Confirm</h4>
                <p className="text-xs text-[#525853] leading-relaxed">
                  Tap <strong>Download FocusCrew APK</strong>. If your browser prompts <em>"File might be harmful"</em>, tap <strong>Download anyway</strong> (standard security prompt for direct APKs).
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E5E2DA] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#9E6F28]">STEP 02</span>
                  <ShieldCheck className="w-4 h-4 text-[#9E6F28]" />
                </div>
                <h4 className="text-sm font-bold text-[#1A1D1A]">Play Protect Prompt</h4>
                <p className="text-xs text-[#525853] leading-relaxed">
                  Open the downloaded file. When Google Play Protect flags an unrecognized developer, tap <strong>More details</strong> → <strong>Install anyway</strong>.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E5E2DA] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#9E6F28]">STEP 03</span>
                  <Settings className="w-4 h-4 text-[#9E6F28]" />
                </div>
                <h4 className="text-sm font-bold text-[#1A1D1A]">Enable Accessibility</h4>
                <p className="text-xs text-[#525853] leading-relaxed">
                  Open FocusCrew and tap <strong>Enable Shield</strong>. In Android Settings → Accessibility → Installed Apps, turn <strong>FocusCrew Blocker Service</strong> ON. Done!
                </p>
              </div>
            </div>
          </div>

          {/* Technical Metadata */}
          <div className="pt-6 border-t border-[#E5E2DA] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-[#525853]">
            <div>
              <span className="text-[#7E857F] block">Package:</span>
              <span className="font-semibold text-[#1A1D1A]">com.focuscrew.app</span>
            </div>
            <div>
              <span className="text-[#7E857F] block">Platform:</span>
              <span className="font-semibold text-[#1A1D1A]">Android 8.0 to 15</span>
            </div>
            <div>
              <span className="text-[#7E857F] block">Binary Format:</span>
              <span className="font-semibold text-[#1A1D1A]">Direct .APK (11.0 MB)</span>
            </div>
            <div>
              <span className="text-[#7E857F] block">Privacy:</span>
              <span className="font-semibold text-[#234E37]">100% On-Device RAM</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default ConversionCard;
