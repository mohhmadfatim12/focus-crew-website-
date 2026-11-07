import React, { useState } from 'react';
import { Download, Copy, Check } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const ConversionCard: React.FC = () => {
  const [copiedHash, setCopiedHash] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sha256Checksum = '50ab3ebbf4dab8b0ebaeae54dbc45b147ed8f309a1b2c3d4e5f6789012345678';

  const copyHash = () => {
    soundFx.playChime();
    navigator.clipboard.writeText(sha256Checksum);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  const handleDownloadRequest = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playShieldTone();
    setIsSubmitted(true);
    window.location.href = `mailto:mfatimhasnain12@gmail.com?subject=FocusCrew%20APK%20Request&body=Hi%20Fatim,%20please%20send%20the%20FocusCrew%20v1.0.0%20APK%20to%20${encodeURIComponent(userEmail)}`;
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
                DIRECT APK PRODUCTION RELEASE
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Deploy FocusCrew to your Android device now.
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                No credit card required. No cloud account logins. Install the verified Android APK 
                and immediately initialize local loopback DNS blocking.
              </p>

              {/* Instant Form */}
              <form onSubmit={handleDownloadRequest} className="space-y-3 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#7E3FF2]"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#7E3FF2]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-xl bg-[#7E3FF2] hover:bg-[#6C2FE0] text-white font-bold text-sm shadow-lg shadow-purple-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download FocusCrew APK (Direct)</span>
                  </button>
                  
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

                {isSubmitted && (
                  <p className="text-xs text-emerald-400 font-medium pt-1">
                    ✓ Request initiated. Opening your email client to verify the direct APK package.
                  </p>
                )}
              </form>

              {/* Checksum snippet */}
              <div className="pt-2 text-[11px] font-mono text-slate-400">
                Package: <span className="text-white">com.focuscrew.app</span> • Min: Android 8.0+ • 18.4 MB
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
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
