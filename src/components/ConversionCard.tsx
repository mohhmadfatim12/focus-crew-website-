import React, { useState } from 'react';
import { Download, Copy, Check, ShieldCheck, Smartphone, Settings, ShieldAlert, CheckCircle2, Lock, ArrowRight, ExternalLink } from 'lucide-react';

export const ConversionCard: React.FC = () => {
  const [copiedHash, setCopiedHash] = useState(false);

  const sha256Checksum = '90d6a60f3d85bb9836bdecf366699411e85401fc16a45612cf9b37ac76768a69';

  const copyHash = () => {
    navigator.clipboard.writeText(sha256Checksum);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  const steps = [
    {
      step: '01',
      title: 'Download FocusCrew APK',
      subtitle: 'From this official website',
      icon: Download,
      instructions: [
        'Tap the **Download FocusCrew APK (11 MB)** button above.',
        'If Chrome or your browser asks *"File might be harmful"*, tap **Download anyway** (standard warning for any direct APK).',
        '**If saved as .zip:** Some phone browsers rename `.apk` to `.zip`. Do not extract it! In your Files app, tap **Rename**, change `.zip` back to `.apk`, and tap to install (or use the GitHub Mirror button below).'
      ]
    },
    {
      step: '02',
      title: 'Turn Off Google Play Protect',
      subtitle: 'Required for independent security APKs',
      icon: ShieldAlert,
      instructions: [
        'Open the **Google Play Store** on your phone.',
        'Tap your **Profile Icon** in the top-right corner.',
        'Tap **Play Protect** from the menu.',
        'Tap the **Settings icon ⚙️** at the top-right corner.',
        'Toggle **OFF** *"Scan apps with Play Protect"*.',
        'Now open your downloads and **Install FocusCrew**.'
      ]
    },
    {
      step: '03',
      title: 'Allow Restricted Settings',
      subtitle: 'Android 13, 14 & 15 security requirement',
      icon: Settings,
      instructions: [
        'Open your phone’s **Settings** app → go to **Apps** (or **App Info**).',
        'Find and tap **FocusCrew** in the list.',
        'Tap the **Three Dots menu (⋮)** in the top-right corner.',
        'Tap **"Allow restricted settings"** and confirm with your phone PIN or fingerprint.'
      ]
    },
    {
      step: '04',
      title: 'Turn On Accessibility Shield',
      subtitle: 'Activates instant reel & porn blocking',
      icon: ShieldCheck,
      instructions: [
        'Open the **FocusCrew** app on your phone.',
        'Tap the main **"Enable Shield"** button.',
        'It will open **Accessibility Settings** → tap **Installed Apps** (or **Downloaded Apps**).',
        'Turn **FocusCrew Blocker Service** to **ON**.',
        '**Done!** FocusCrew is fully active and protecting your device.'
      ]
    }
  ];

  return (
    <section id="download-section" className="py-20 md:py-28 bg-white border-b border-[#E5E2DA] text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="pro-card p-6 sm:p-12 space-y-10 bg-[#F7F5F0]">
          
          {/* Section Header */}
          <div className="max-w-2xl space-y-3">
            <div className="text-eyebrow text-[#9E6F28]">
              Official Android Installation
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1D1A] tracking-tight leading-tight">
              Get FocusCrew on your Android phone.
            </h2>

            <p className="text-base sm:text-lg text-[#1A1D1A] leading-relaxed">
              No account creation, no subscription paywalls, and zero cloud tracking. Download the signed APK directly to your phone.
            </p>
          </div>

          {/* Download & Verification Action Bar */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
            <a
              href="/FocusCrew.apk"
              download="FocusCrew.apk"
              className="btn-accent text-base !py-4 !px-8 shadow-sm flex items-center justify-center gap-2 font-bold"
            >
              <Download className="w-5 h-5" />
              <span>Download FocusCrew APK (11 MB)</span>
            </a>

            <a
              href="https://github.com/mohhmadfatim12/focus-crew/releases/download/v1.0.0-stable/FocusCrew.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm !py-4 !px-5 flex items-center justify-center gap-2 font-semibold"
              title="Official GitHub Releases CDN Direct Download"
            >
              <ExternalLink className="w-4 h-4 text-[#1A1D1A]" />
              <span>GitHub Mirror (Direct APK)</span>
            </a>

            <button
              type="button"
              onClick={copyHash}
              className="btn-secondary text-sm !py-4 !px-5 flex items-center justify-center gap-2 font-medium"
            >
              {copiedHash ? (
                <>
                  <Check className="w-4 h-4 text-[#234E37]" />
                  <span className="text-[#234E37] font-semibold">SHA-256 Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#1A1D1A]" />
                  <span className="text-[#1A1D1A]">Copy SHA-256 Checksum</span>
                </>
              )}
            </button>
          </div>

          {/* Simple Step-by-Step Installation Guide */}
          <div className="pt-8 border-t border-[#E5E2DA] space-y-6">
            <div className="space-y-1">
              <div className="text-eyebrow text-[#234E37]">
                Easy 4-Step Setup
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A1D1A] tracking-tight">
                How to Install & Activate (Takes 60 Seconds)
              </h3>
              <p className="text-base text-[#1A1D1A] leading-relaxed">
                Follow these 4 simple steps to install the APK and give FocusCrew permission to block reels and adult content.
              </p>
            </div>

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {steps.map((st) => {
                const Icon = st.icon;
                return (
                  <div 
                    key={st.step} 
                    className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E5E2DA] space-y-4 shadow-xs flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      {/* Step Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-[#ECE8E0]">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1A1D1A] text-white text-xs font-bold">
                          {st.step}
                        </span>
                        <div className="w-9 h-9 rounded-lg bg-[#F7F5F0] border border-[#E5E2DA] flex items-center justify-center text-[#9E6F28]">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-[#1A1D1A] leading-snug">
                          {st.title}
                        </h4>
                        <div className="text-xs font-medium text-[#7E857F] mt-0.5">
                          {st.subtitle}
                        </div>
                      </div>

                      {/* Instructions with Bold Highlights */}
                      <ul className="space-y-2 pt-1">
                        {st.instructions.map((inst, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm sm:text-[15px] text-[#1A1D1A] leading-relaxed">
                            <ArrowRight className="w-4 h-4 text-[#9E6F28] shrink-0 mt-1" />
                            <span 
                              dangerouslySetInnerHTML={{ 
                                __html: inst.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#1A1D1A] font-bold">$1</strong>') 
                              }} 
                            />
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-[#ECE8E0] flex items-center justify-between text-xs text-[#234E37] font-semibold">
                      <span>Step {st.step} of 04</span>
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Technical Metadata */}
          <div className="pt-6 border-t border-[#E5E2DA] grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-[#1A1D1A]">
            <div className="p-3 rounded-lg bg-white border border-[#E5E2DA]">
              <span className="text-xs text-[#7E857F] block">Package:</span>
              <strong className="text-[#1A1D1A] font-semibold">com.focuscrew.app</strong>
            </div>
            <div className="p-3 rounded-lg bg-white border border-[#E5E2DA]">
              <span className="text-xs text-[#7E857F] block">Platform:</span>
              <strong className="text-[#1A1D1A] font-semibold">Android 8.0 to 15</strong>
            </div>
            <div className="p-3 rounded-lg bg-white border border-[#E5E2DA]">
              <span className="text-xs text-[#7E857F] block">Binary Format:</span>
              <strong className="text-[#1A1D1A] font-semibold">Direct .APK (11.0 MB)</strong>
            </div>
            <div className="p-3 rounded-lg bg-white border border-[#E5E2DA]">
              <span className="text-xs text-[#7E857F] block">Privacy:</span>
              <strong className="text-[#234E37] font-semibold">100% On-Device RAM</strong>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default ConversionCard;
