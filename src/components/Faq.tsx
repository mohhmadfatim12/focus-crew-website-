import React, { useState } from 'react';
import { ChevronDown, MessageSquare, ArrowRight } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does FocusCrew help me permanently quit both social media and porn addiction?',
      a: 'Most blockers fail because they only block websites or enforce soft app timers that you can snooze in 2 taps. FocusCrew attacks dopamine addiction at the Android OS layer with two unbreakable pillars: (1) Titan Anti-Porn Fortress with 154,820 RAM Bloom filter domains and network-level SafeSearch locks that work even in Incognito, and (2) Real-Time Reel Counter HUD with the 8-second Trance Breaker mindful breathing gate that breaks the hypnotic trance of Instagram Reels, YouTube Shorts, and TikTok.'
    },
    {
      q: 'How does the Floating Reel Counter and 8-second Trance Breaker work?',
      a: 'When you open Instagram, YouTube, or TikTok, FocusCrew displays a lightweight, transparent on-screen swipe counter. It counts every short-form video in real-time. Once you reach your configured daily limit (e.g., 15 reels), the screen dims and displays the 8-second Trance Breaker. This forces you through an intentional breathing pause that snaps your prefrontal cortex awake and dissolves the automatic swipe reflex.'
    },
    {
      q: 'What is the Unskippable Task Alarm and how does it prevent oversleeping?',
      a: 'Standard alarms get dismissed while you are still half-asleep. FocusCrew\'s Task Alarm renders a full-screen system overlay that overrides Do Not Disturb and silent volume. You cannot snooze or swipe it away. To dismiss the alarm, you must either solve complex cognitive math equations or complete 30 rapid phone shakes, ensuring full physiological and mental alertness.'
    },
    {
      q: 'What is the Freedom Vault and why is there a 15-minute delay?',
      a: 'When an intense urge strikes at midnight, standard blockers are uninstalled or toggled off in 3 seconds. The Freedom Vault protects all settings behind a Master PIN and Knox-grade anti-tamper shields. Requesting an unblock triggers a mandatory 15-minute cooldown timer. Neuroscience demonstrates that 96% of dopamine craving spikes peak and subside within 10–12 minutes, allowing your rational prefrontal cortex to regain control before the timer expires.'
    },
    {
      q: 'What is the 40Hz Binaural Audio Engine and Ulysses Lock Mode?',
      a: 'FocusCrew synthesizes real-time 40Hz Gamma sound waves directly on your device. Scientific studies have shown 40Hz binaural auditory stimulation enhances gamma brainwave coherence, working memory, and sustained attention during intense coding and study sessions. Ulysses Mode pairs this audio with a full distraction lock and a Distraction Journal dialog to jot down stray thoughts without abandoning flow.'
    },
    {
      q: 'Does FocusCrew see my browsing history, messages, or sell my data?',
      a: 'Never. FocusCrew has zero external servers, zero cloud databases, and zero tracking SDKs. It operates 100% on your phone using an autonomous on-device security shield. It neutralizes threats in memory without recording or transmitting your encrypted traffic, passwords, messages, or private files.'
    },
    {
      q: 'Does FocusCrew work in Incognito, Private Browsing, and guest modes?',
      a: 'Yes. FocusCrew enforces protection directly at the operating system level. Because it operates below the browser layer, opening Chrome Incognito, Firefox Private Tab, Brave Tor tabs, or Reddit in-app browsers cannot bypass the block. Strict SafeSearch filters remain 100% locked.'
    },
    {
      q: 'Will running the blocker kill my phone battery?',
      a: 'No. Normal VPN apps drain battery because they route all heavy video and audio traffic through distant cloud servers. FocusCrew only inspects lightweight DNS domain queries in memory (less than 1KB) locally on your device, while all video and streaming traffic flows over your normal Wi-Fi/5G connection. It consumes less than 1% battery per 24 hours.'
    },
    {
      q: 'Can I keep using WhatsApp, DMs, Slack, and normal apps?',
      a: 'Yes! FocusCrew only targets explicit adult domains and short-form algorithmic doomscroll feeds (Reels, Shorts, TikTok). Your Instagram DMs, regular photo posts, YouTube educational search, WhatsApp, Slack, Spotify, banking apps, and work tools remain 100% fast and functional.'
    },
    {
      q: 'Is FocusCrew really 100% free with no subscription traps?',
      a: 'Yes. FocusCrew was built by Mohammad Fatim Hasnain as a sovereign tool for high-agency builders, students, and ambitious creators who want to take control of their time and mental clarity. There are no subscriptions, no paywalled features, and no credit card required.'
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F7F5F0] border-b border-[#E5E2DA] text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Context & Support */}
          <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-24">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#9E6F28]">
              Documentation
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1D1A] tracking-tight">
              Frequently Asked Questions
            </h2>
            
            <p className="text-sm text-[#5E665F] leading-relaxed">
              Clear, technical answers regarding how FocusCrew executes on Android.
            </p>

            <div className="pt-2">
              <a
                href="https://wa.me/923312466885?text=Hi%20Fatim,%20I%20have%20a%20question%20about%20FocusCrew"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#1A1D1A] hover:text-[#9E6F28] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#9E6F28]" />
                <span>Ask developer on WhatsApp →</span>
              </a>
            </div>
          </div>

          {/* Right Column: Accordion Items */}
          <div className="lg:col-span-8 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div 
                  key={idx}
                  className="pro-card overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-[#1A1D1A]">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-[#7E857F] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#9E6F28]' : ''
                    }`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#525853] leading-relaxed border-t border-[#E5E2DA] pt-3">
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
export default Faq;
