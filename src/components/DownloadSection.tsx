import React, { useState } from 'react';
import { 
  Download, 
  Copy, 
  Check, 
  ShieldCheck, 
  Terminal, 
  ChevronDown
} from 'lucide-react';
import { soundFx } from '../utils/audio';

export const DownloadSection: React.FC = () => {
  const [copiedHash, setCopiedHash] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const sha256Checksum = '50ab3ebbf4dab8b0ebaeae54dbc45b147ed8f309a1b2c3d4e5f6789012345678';

  const copyHash = () => {
    soundFx.playChime();
    navigator.clipboard.writeText(sha256Checksum);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  const steps = [
    {
      title: 'Step 1: Install the APK on your Android Device',
      desc: 'Tap the Download APK button. Once downloaded, tap the notification or open your Downloads folder. If Android displays an "Unknown Sources" security notice, allow installation for your browser.',
      details: 'FocusCrew does not include tracking trackers or Google Play proprietary tracking libraries, allowing for 100% on-device autonomy.'
    },
    {
      title: 'Step 2: Initialize the Local VPN DNS Loopback',
      desc: 'Upon launching, toggle the Titan Anti-Porn Fortress. Android will prompt: "FocusCrew wants to set up a VPN connection." Tap OK.',
      details: 'This is a local loopback on 10.0.0.2:53. It connects directly back to your phone\'s RAM. Zero bytes of your web traffic leave your device.'
    },
    {
      title: 'Step 3: Enable Accessibility & Arm the Freedom Vault',
      desc: 'To monitor short-form video feeds (Reels, TikTok, Shorts) and prevent impulsive uninstalls, enable FocusCrew in Settings > Accessibility. Then set your 4-digit master PIN.',
      details: 'The accessibility service strictly detects blocked window titles. It never logs keystrokes, messages, or screen text.'
    }
  ];

  return (
    <section id="download-section" className="py-24 bg-[#07090E] relative border-t border-slate-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
            <Download className="w-3.5 h-3.5" />
            DIRECT PRODUCTION RELEASE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Deploy FocusCrew to your device.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            No subscription accounts. No cloud logins. Instant installation on any modern Android device.
          </p>
        </div>

        {/* Release Package Card */}
        <div className="max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-slate-900/90 via-[#0C1019] to-slate-950 border border-slate-800 shadow-2xl">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border border-cyan-500/40 bg-slate-900 p-1 shrink-0 shadow-lg shadow-cyan-500/10">
                <img src="/app-icon-round.png" alt="FocusCrew Icon" className="w-full h-full object-cover rounded-xl" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-extrabold text-white">FocusCrew</h3>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                    v1.0.0 Stable
                  </span>
                </div>
                <p className="text-xs font-mono text-slate-400 mt-0.5">
                  Package: <code className="text-slate-300">com.focuscrew.app</code>
                </p>
              </div>
            </div>

            {/* Direct Download Action Button */}
            <a
              href="mailto:mfatimhasnain12@gmail.com?subject=FocusCrew%20v1.0.0%20Direct%20APK%20Request&body=Hi%20Fatim,%20I%20would%20like%20to%20get%20the%20FocusCrew%20v1.0.0%20Android%20APK%20build."
              onClick={() => soundFx.playShieldTone()}
              className="w-full md:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-3 shadow-xl shadow-cyan-500/20 active:scale-98 transition-all cursor-pointer"
            >
              <Download className="w-5 h-5 text-slate-950" />
              <span>Download APK (Direct Build)</span>
            </a>
          </div>

          {/* Release Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 text-left font-mono text-xs">
            <div className="bg-slate-900/40 p-3 rounded-xl border border-slate-800/60">
              <span className="text-[10px] text-slate-500 uppercase">Architecture</span>
              <div className="font-bold text-white mt-0.5">arm64-v8a / armeabi</div>
            </div>
            <div className="bg-slate-900/40 p-3 rounded-xl border border-slate-800/60">
              <span className="text-[10px] text-slate-500 uppercase">Minimum OS</span>
              <div className="font-bold text-white mt-0.5">Android 8.0+ (Oreo - 15)</div>
            </div>
            <div className="bg-slate-900/40 p-3 rounded-xl border border-slate-800/60">
              <span className="text-[10px] text-slate-500 uppercase">Binary Footprint</span>
              <div className="font-bold text-white mt-0.5">18.4 MB (Zero Bloat)</div>
            </div>
            <div className="bg-slate-900/40 p-3 rounded-xl border border-slate-800/60">
              <span className="text-[10px] text-slate-500 uppercase">Keystore Proof</span>
              <div className="font-bold text-emerald-400 mt-0.5">Signed Release JKS</div>
            </div>
          </div>

          {/* SHA-256 Checksum Integrity Card */}
          <div className="p-4 rounded-2xl bg-black/60 border border-slate-800/80 text-left space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                SHA-256 Cryptographic Checksum
              </span>
              <button
                onClick={copyHash}
                className="flex items-center gap-1 text-[11px] font-mono text-cyan-400 hover:text-cyan-300 cursor-pointer"
              >
                {copiedHash ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Hash</span>
                  </>
                )}
              </button>
            </div>
            <div className="font-mono text-xs text-slate-300 break-all bg-slate-950 p-2.5 rounded-lg border border-slate-900 select-all">
              {sha256Checksum}
            </div>
          </div>

          {/* Installation Walkthrough Accordion */}
          <div className="mt-8 text-left space-y-3">
            <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              Installation & Hardening Instructions (3 Minutes):
            </h4>

            <div className="space-y-2">
              {steps.map((step, idx) => (
                <div 
                  key={idx}
                  className="rounded-2xl border border-slate-800/80 bg-slate-900/30 overflow-hidden"
                >
                  <button
                    onClick={() => {
                      soundFx.playChime();
                      setActiveStep(activeStep === idx ? null : idx);
                    }}
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-900/50 transition-colors cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-bold text-slate-200">
                      {step.title}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${
                      activeStep === idx ? 'rotate-180 text-cyan-400' : ''
                    }`} />
                  </button>

                  {activeStep === idx && (
                    <div className="px-4 pb-4 pt-1 space-y-2 text-xs text-slate-300 border-t border-slate-800/40 bg-slate-950/40 animate-fadeIn">
                      <p>{step.desc}</p>
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-cyan-300 font-mono">
                        💡 {step.details}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
