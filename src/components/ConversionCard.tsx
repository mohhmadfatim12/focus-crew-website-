import React, { useState } from 'react';
import { Download, Copy, Check } from 'lucide-react';

export const ConversionCard: React.FC = () => {
  const [copiedHash, setCopiedHash] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sha256Checksum = 'c75614867eaf70fea91a6bfbe1dc28dd658afad3e3566d817ef1655ab5872dc6';

  const copyHash = () => {
    navigator.clipboard.writeText(sha256Checksum);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  const handleDownloadRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    const link = document.createElement('a');
    link.href = '/FocusCrew.apk';
    link.download = 'FocusCrew.apk';
    link.click();
  };

  return (
    <section id="download-section" className="py-20 bg-white border-t border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Modern Card (Exact Zanderio "Request a Demo Now" Style) */}
        <div className="rounded-3xl bg-[#1A1A2E] text-white p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden text-left">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* Left Column: Form & Direct Actions */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-purple-300 border border-white/10 inline-block">
                DIRECT APK PRODUCTION RELEASE • v1.0.0
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Deploy FocusCrew to your Android device now.
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                No credit card required. No cloud account logins. Install the verified Android APK 
                and immediately initialize autonomous on-device shield protection.
              </p>

              {/* Instant Form & Direct Download */}
              <div className="space-y-3 pt-2">
                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <a
                    href="/FocusCrew.apk"
                    download="FocusCrew.apk"
                    className="px-8 py-3.5 rounded-xl bg-[#7E3FF2] hover:bg-[#6C2FE0] text-white font-bold text-sm shadow-lg shadow-purple-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download FocusCrew APK (11 MB)</span>
                  </a>
                  
                  <button
                    type="button"
                    onClick={copyHash}
                    className="px-4 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 border border-white/15 text-xs font-mono flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    {copiedHash ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">SHA-256 Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Checksum</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs text-slate-400 font-mono">
                  Verified Clean: Zero trackers • Zero ads • 100% on-device local engine
                </p>
              </div>

              {/* Checksum snippet */}
              <div className="pt-2 text-[11px] font-mono text-slate-400">
                Package: <span className="text-white">com.focuscrew.app</span> • Min: Android 8.0+ • 11.0 MB • Signed Release JKS
              </div>
            </div>

            {/* Right Column: Founder & Trust Badge */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8 space-y-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center font-bold text-lg text-white shadow-md">
                    FH
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Mohammad Fatim Hasnain</h4>
                    <p className="text-xs text-slate-400 font-mono">Founder & Creator of FocusCrew</p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed italic">
                  "I built FocusCrew for myself when every other blocker gave me an easy 15-minute ignore button. 
                  Real sovereignty requires unshakeable, on-device boundaries."
                </p>

                <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <div className="text-[10px] text-slate-400">TELEMETRY</div>
                    <div className="text-emerald-400 font-bold mt-0.5">0 BYTES LOGGED</div>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <div className="text-[10px] text-slate-400">LICENSE</div>
                    <div className="text-purple-300 font-bold mt-0.5">100% FREE CORE</div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2">
                  <a
                    href="https://wa.me/923312466885?text=Hi%20Fatim,%20I%20have%20a%20question%20about%20FocusCrew"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>WhatsApp: +92 331 2466885</span>
                  </a>
                  <a
                    href="mailto:mfatimhasnain12@gmail.com"
                    className="py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 text-xs font-mono flex items-center justify-center transition-colors"
                  >
                    <span>Email Fatim</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
