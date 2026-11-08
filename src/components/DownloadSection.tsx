import React, { useState } from 'react';
import { 
  Download, 
  Copy, 
  Check, 
  ShieldCheck, 
  Terminal, 
  ChevronDown
} from 'lucide-react';

export const DownloadSection: React.FC = () => {
  const [copiedHash, setCopiedHash] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const sha256Checksum = 'fa0588e0e57e51570bb800b1621e9fac2fecc91d9441c70c39387ee46ffa666b';

  const copyHash = () => {
    navigator.clipboard.writeText(sha256Checksum);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  const steps = [
    {
      title: 'Step 1: Install the APK on your Android Device',
      desc: 'Tap the Download APK button. Once downloaded, tap the notification or open your Downloads folder. If Android displays an "Unknown Sources" security notice, allow installation for your browser.',
      details: 'FocusCrew does not include Google tracking libraries or commercial ad SDKs, allowing for 100% on-device autonomy.'
    },
    {
      title: 'Step 2: Initialize On-Device Shield Protection',
      desc: 'Upon launching, toggle the Titan Anti-Porn Fortress. Android will prompt: "FocusCrew wants to set up a secure local connection." Tap OK.',
      details: 'This establishes an autonomous on-device shield operating directly in RAM. Zero bytes of your web traffic ever leave your device.'
    },
    {
      title: 'Step 3: Enable Accessibility & Arm the Freedom Vault',
      desc: 'To monitor short-form video feeds (Reels, TikTok, Shorts) and prevent impulsive uninstalls, enable FocusCrew in Settings > Accessibility. Then set your 4-digit master PIN.',
      details: 'The accessibility service strictly detects blocked window titles. It never logs keystrokes, messages, or screen text.'
    }
  ];

  return (
    <section id="download-section" className="py-24 bg-white relative border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700 shadow-2xs">
            <Download className="w-3.5 h-3.5 text-blue-600" />
            DIRECT PRODUCTION RELEASE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Deploy FocusCrew to your device.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            No subscription accounts. No cloud logins. Instant installation on any modern Android device.
          </p>
        </div>

        {/* Release Package Card */}
        <div className="max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm text-left">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-200">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border border-slate-200 bg-white p-1 shrink-0 shadow-xs">
                <img src="/app-icon-round.png" alt="FocusCrew Icon" className="w-full h-full object-cover rounded-xl" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-extrabold text-slate-900">FocusCrew</h3>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                    v1.0.0 Stable
                  </span>
                </div>
                <p className="text-xs font-mono text-slate-500 mt-0.5">
                  Package: <code className="text-slate-700">com.focuscrew.app</code>
                </p>
              </div>
            </div>

            {/* Direct Download Action Button */}
            <a
              href="/FocusCrew.apk"
              download="FocusCrew.apk"
              className="w-full md:w-auto px-8 py-3.5 rounded-xl bg-[#A37A3E] hover:bg-[#8A642E] text-white font-bold text-sm flex items-center justify-center gap-3 shadow-sm hover:shadow transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 text-white" />
              <span>Download APK (11 MB Direct)</span>
            </a>
          </div>

          {/* Release Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 text-left font-mono text-xs">
            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
              <span className="text-[10px] text-slate-400 uppercase font-semibold">Architecture</span>
              <div className="font-bold text-slate-900 mt-0.5">arm64-v8a / armeabi</div>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
              <span className="text-[10px] text-slate-400 uppercase font-semibold">Minimum OS</span>
              <div className="font-bold text-slate-900 mt-0.5">Android 8.0+ (Oreo - 15)</div>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
              <span className="text-[10px] text-slate-400 uppercase font-semibold">Binary Footprint</span>
              <div className="font-bold text-slate-900 mt-0.5">11.0 MB (Zero Bloat)</div>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
              <span className="text-[10px] text-slate-400 uppercase font-semibold">Keystore Proof</span>
              <div className="font-bold text-emerald-700 mt-0.5">Signed Release JKS</div>
            </div>
          </div>

          {/* SHA-256 Checksum Integrity Card */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 text-left space-y-2 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-600 flex items-center gap-1.5 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                SHA-256 Cryptographic Checksum
              </span>
              <button
                onClick={copyHash}
                className="flex items-center gap-1 text-[11px] font-mono text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
              >
                {copiedHash ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Hash</span>
                  </>
                )}
              </button>
            </div>
            <div className="font-mono text-xs text-slate-700 break-all bg-slate-50 p-2.5 rounded-lg border border-slate-200 select-all">
              {sha256Checksum}
            </div>
          </div>

          {/* Installation Walkthrough Accordion */}
          <div className="mt-8 text-left space-y-3">
            <h4 className="text-xs font-bold text-slate-700 font-mono uppercase tracking-wider flex items-center gap-2">
              <Terminal className="w-4 h-4 text-blue-600" />
              Installation & Hardening Instructions (3 Minutes):
            </h4>

            <div className="space-y-2">
              {steps.map((step, idx) => (
                <div 
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-white shadow-2xs overflow-hidden"
                >
                  <button
                    onClick={() => {
                      setActiveStep(activeStep === idx ? null : idx);
                    }}
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                      {step.title}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${
                      activeStep === idx ? 'rotate-180 text-blue-600' : ''
                    }`} />
                  </button>

                  {activeStep === idx && (
                    <div className="px-4 pb-4 pt-1 space-y-2 text-xs text-slate-600 border-t border-slate-100 bg-slate-50/60 animate-fadeIn">
                      <p>{step.desc}</p>
                      <div className="p-2.5 rounded-lg bg-blue-50/80 border border-blue-200 text-[11px] text-blue-900 font-mono">
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
