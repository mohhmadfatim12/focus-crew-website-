import React, { useState } from 'react';
import { ChevronDown, ArrowRight, MessageSquare } from 'lucide-react';

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
    <section id="faq" className="py-24 bg-white border-t border-[#E5DFD3] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split FAQ Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (Sticky Title & Action) */}
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#A37A3E] px-3.5 py-1 rounded-full bg-[#F5EAD8] border border-[#A37A3E]/30 inline-block shadow-2xs">
              CLEAR ANSWERS
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202621] tracking-tight font-serif">
              Frequently Asked Questions
            </h2>
            
            <p className="text-[#5E665F] text-sm sm:text-base leading-relaxed">
              No marketing double-speak. Here are straight, technical answers about how FocusCrew works on your Android phone.
            </p>

            <div className="pt-2">
              <a
                href="https://wa.me/923312466885?text=Hi%20Fatim,%20I%20have%20a%20question%20about%20FocusCrew"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#284B39] hover:text-[#1E382B] bg-[#E1EDE5] px-4 py-2.5 rounded-full border border-[#284B39]/20 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Have a specific question? Ask Fatim on WhatsApp →</span>
              </a>
            </div>

            <div className="pt-3">
              <a
                href="#download-section"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#A37A3E] hover:bg-[#8A642E] text-white text-sm font-bold shadow-md shadow-[#A37A3E]/20 transition-all cursor-pointer"
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
                  className="rounded-2xl border border-[#E5DFD3] bg-[#FBF9F5] hover:bg-[#F2EEE5]/60 overflow-hidden transition-all duration-200 shadow-2xs"
                >
                  <button
                    onClick={() => {
                      setOpenIdx(isOpen ? null : idx);
                    }}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#202621] font-sans">
                      {faq.q}
                    </span>
                    <div className={`w-7 h-7 rounded-full bg-white border border-[#E5DFD3] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#F5EAD8] text-[#A37A3E]' : 'text-[#5E665F]'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#5E665F] leading-relaxed border-t border-[#E5DFD3] pt-3">
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
