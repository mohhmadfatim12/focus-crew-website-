import React from 'react';
import { Mail, MessageSquare, ShieldCheck } from 'lucide-react';

export const FounderStory: React.FC = () => {
  return (
    <section id="creator" className="py-20 md:py-28 bg-[#F7F5F0] border-b border-[#E5E2DA] text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-10 space-y-3">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#9E6F28]">
            Founder Note
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1D1A] tracking-tight">
            Why I built FocusCrew.
          </h2>
        </div>

        {/* Editorial Letter Card */}
        <div className="pro-card p-8 sm:p-12 space-y-6">
          
          <div className="space-y-4 text-sm sm:text-base text-[#525853] leading-relaxed">
            <p>
              I spent years cycling through every screen-time and porn-blocking application on Android. They all shared the same fundamental defect: they were designed for ideal willpower, not moments of acute cognitive fatigue.
            </p>
            <p>
              When a midnight urge or a compulsive doomscroll habit struck, every app could be circumvented in under 5 seconds—by tapping "remind me in 15 minutes", disabling Accessibility permissions, or opening an incognito browser tab. Worse, most charged \$80 to \$120 per year while quietly routing private browsing queries through external cloud servers.
            </p>
            <p>
              I built FocusCrew to enforce boundaries at the operating system level. When the <strong>Freedom Vault</strong> is locked, turning it off requires an unskippable 15-minute cooldown. The <strong>Titan DNS engine</strong> inspects 154,820 adult domains directly in device RAM in 0.18ms without sending a single byte to an outside server. And the <strong>Reel Counter HUD</strong> forces a mindful breathing pause right when the algorithm starts to capture your focus.
            </p>
            <p className="font-semibold text-[#1A1D1A]">
              FocusCrew is 100% free, runs without subscriptions or tracking SDKs, and will always respect your data sovereignty.
            </p>
          </div>

          {/* Author Block */}
          <div className="pt-8 border-t border-[#E5E2DA] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-base font-bold text-[#1A1D1A]">Mohammad Fatim Hasnain</div>
              <div className="text-xs font-mono text-[#7E857F]">Software Engineer & Creator, FocusCrew</div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="mailto:mfatimhasnain12@gmail.com"
                className="btn-secondary text-xs !py-2 !px-3"
              >
                <Mail className="w-3.5 h-3.5 text-[#525853]" />
                <span>Email Fatim</span>
              </a>

              <a
                href="https://wa.me/923312466885"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs !py-2 !px-3"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default FounderStory;
