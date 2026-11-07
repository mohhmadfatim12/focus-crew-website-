import React, { useState } from 'react';
import { ChevronDown, ArrowRight, MessageSquare } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const Faq: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Does FocusCrew see my browsing history, messages, or sell my data?',
      a: 'Never. FocusCrew has zero servers, zero cloud databases, and zero tracking SDKs. It runs 100% on your phone using Android\'s local loopback at 10.0.0.2:53. It only inspects domain names (DNS Port 53) in memory. It cannot see your encrypted HTTPS traffic, passwords, messages, or photos.'
    },
    {
      q: 'Why can\'t I just turn off FocusCrew when I get an urge?',
      a: 'Most blockers fail because turning them off takes 3 seconds. FocusCrew locks everything behind a PIN and an unskippable 15-minute emergency delay. Urges usually peak and die down within 10 minutes. The 15-minute buffer gives your rational mind enough time to calm down and put the phone away.'
    },
    {
      q: 'Will running the blocker kill my phone battery?',
      a: 'No. Normal VPN apps drain battery because they stream all your video and audio through distant servers. FocusCrew only intercepts tiny DNS domain queries (less than 1KB) right on your phone, while normal video and web traffic goes directly through your standard Wi-Fi. It uses less than 1% battery per day.'
    },
    {
      q: 'Does TaskAlarm wake me up if my phone is on silent or Do Not Disturb?',
      a: 'Yes. TaskAlarm uses Android\'s high-priority alarm channel and full-screen wake lock. It turns your screen on, cuts through Do Not Disturb, and rings until you solve the math problem on the screen. You can\'t just tap snooze in your sleep.'
    },
    {
      q: 'Can I use other apps and browsers normally?',
      a: 'Yes! FocusCrew only blocks adult content, explicit domains, and excessive short-form doomscrolling. Google Docs, YouTube educational videos, WhatsApp, Slack, Spotify, banking apps, and normal websites work at full speed.'
    },
    {
      q: 'Is FocusCrew really 100% free?',
      a: 'Yes. FocusCrew was built by Mohammad Fatim Hasnain as an open tool for anyone who wants to reclaim their focus. There are no paid tiers, no subscription traps, and no credit card required.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white border-t border-purple-100 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split FAQ Layout (Exact Zanderio FAQ Structure) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (Sticky Title & Action) */}
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7E3FF2] px-3.5 py-1 rounded-full bg-[#FAF7FF] border border-purple-200 inline-block shadow-2xs">
              CLEAR ANSWERS
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#212529] tracking-tight">
              Frequently Asked Questions
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              No marketing double-speak. Here are straight, technical answers about how FocusCrew works on your phone.
            </p>

            <div className="pt-2">
              <a
                href="https://wa.me/923312466885?text=Hi%20Fatim,%20I%20have%20a%20question%20about%20FocusCrew"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playChime()}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#7E3FF2] hover:text-[#6C2FE0] bg-purple-50 px-4 py-2.5 rounded-full border border-purple-200 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Have a specific question? Ask founder on WhatsApp →</span>
              </a>
            </div>

            <div className="pt-3">
              <a
                href="#download-section"
                onClick={() => soundFx.playShieldTone()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#7E3FF2] hover:bg-[#6C2FE0] text-white text-sm font-bold shadow-md shadow-purple-500/20 transition-all cursor-pointer"
              >
                <span>Get FocusCrew Production APK</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column (Accordion Items) */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl border border-purple-100 bg-[#FAF7FF]/70 hover:bg-[#FAF7FF] overflow-hidden transition-all duration-200 shadow-2xs"
                >
                  <button
                    onClick={() => {
                      soundFx.playChime();
                      setOpenIdx(isOpen ? null : idx);
                    }}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#212529] font-sans">
                      {faq.q}
                    </span>
                    <div className={`w-7 h-7 rounded-full bg-white border border-purple-200 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-purple-100 text-[#7E3FF2]' : 'text-slate-400'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-purple-100/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
