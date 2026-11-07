import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const Faq: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Does FocusCrew route my traffic through your servers or sell my data?',
      a: 'Absolutely not. FocusCrew has zero central servers, zero analytics SDKs, and zero cloud accounts. The VPN interface runs entirely on Android\'s local loopback at 10.0.0.2:53. DNS queries are parsed inside your phone\'s RAM. Your internet traffic never touches any external FocusCrew infrastructure.'
    },
    {
      q: 'Why can\'t I just bypass FocusCrew when I feel an urge or craving?',
      a: 'Most blockers fail because they are trivial to turn off. FocusCrew locks all configuration behind the Freedom Vault PIN and enforces a mandatory 15-minute emergency delay. Dopamine urges are neurochemically acute and typically peak within 8 to 12 minutes. By forcing a biological pause, FocusCrew allows your rational prefrontal cortex to regain control before you can act.'
    },
    {
      q: 'Will the local VPN blocker drain my phone battery?',
      a: 'No. Commercial VPNs drain battery because they compress and encrypt entire data streams to remote servers thousands of miles away. FocusCrew only intercepts lightweight UDP Port 53 DNS queries (less than 1KB each) and passes standard web traffic directly through your normal Wi-Fi or cellular connection. Total battery impact is under 1% per 24 hours.'
    },
    {
      q: 'Does TaskAlarm wake my phone if it is on Do Not Disturb or silent mode?',
      a: 'Yes. TaskAlarm is engineered using Android\'s AlarmManager with setExactAndAllowWhileIdle and full-screen window wake locks (FLAG_TURN_SCREEN_ON, FLAG_SHOW_WHEN_LOCKED). It uses a dedicated high-priority alarm audio channel that punches through system Do Not Disturb and requires solving wakefulness challenges to dismiss.'
    },
    {
      q: 'Can FocusCrew read my WhatsApp chats, passwords, or banking details?',
      a: 'No. FocusCrew operates exclusively at the DNS layer (Port 53), which only sees domain names (e.g. google.com or adult-site.xxx). FocusCrew does not perform SSL/TLS certificate interception and has zero capability to inspect encrypted HTTPS web contents, keystrokes, personal messages, or payment data.'
    },
    {
      q: 'Is FocusCrew free, or is there a hidden subscription trap?',
      a: 'FocusCrew v1.0.0 is an independent production release created by Mohammad Fatim Hasnain. The core APK with Titan Anti-Porn, Reel Counter, TaskAlarm, and Freedom Vault is 100% free with no recurring subscription paywalls.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white border-t border-purple-100 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split FAQ Layout (Exact Zanderio FAQ Structure) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (Sticky Title & Action) */}
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7E3FF2] px-3 py-1 rounded-full bg-[#FAF7FF] border border-purple-200 inline-block">
              HELP & ARCHITECTURE
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#212529] tracking-tight">
              Frequently Asked Questions
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Everything You Need to Know, All in One Place. Direct architectural answers with zero marketing spin.
            </p>

            <div className="pt-3">
              <a
                href="#download-section"
                onClick={() => soundFx.playShieldTone()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#7E3FF2] hover:bg-[#6C2FE0] text-white text-sm font-bold shadow-md shadow-purple-500/20 transition-all cursor-pointer"
              >
                <span>Get FocusCrew v1.0.0</span>
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
                  className="rounded-2xl border border-purple-100 bg-[#FAF7FF]/60 hover:bg-[#FAF7FF] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => {
                      soundFx.playChime();
                      setOpenIdx(isOpen ? null : idx);
                    }}
                    className="w-full p-5 flex items-center justify-between text-left transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900 pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#7E3FF2]' : ''
                    }`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-purple-100/60 bg-white/60 animate-fadeIn">
                      <p>{faq.a}</p>
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
