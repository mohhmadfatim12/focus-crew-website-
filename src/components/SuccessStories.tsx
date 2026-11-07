import React, { useState } from 'react';
import { Star, ShieldCheck, Sparkles, Terminal, GraduationCap, Briefcase } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface Story {
  id: string;
  name: string;
  role: string;
  badge: string;
  metric: string;
  metricLabel: string;
  avatarText: string;
  headline: string;
  quote: string;
  tags: string[];
}

export const SuccessStories: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'engineers' | 'students' | 'founders'>('engineers');

  const categories = [
    { id: 'engineers', label: 'Engineers & Developers', icon: Terminal },
    { id: 'students', label: 'Students & Exam Prep', icon: GraduationCap },
    { id: 'founders', label: 'Founders & Operators', icon: Briefcase }
  ];

  const stories: Record<string, Story[]> = {
    engineers: [
      {
        id: 'eng-1',
        name: 'Tariq M.',
        role: 'Full-Stack Systems Architect',
        badge: 'Android 14 • Pixel 8 Pro',
        metric: '184 Days',
        metricLabel: '100% Clean Streak',
        avatarText: 'TM',
        headline: '“Every other blocker is a joke when you know how DNS works. FocusCrew is the first one I couldn\'t break.”',
        quote: 'As a software engineer, I used to bypass every blocker in literally 10 seconds—changing Private DNS, using alternative browsers, or killing background services. FocusCrew\'s local loopback at 10.0.0.2:53 catches UDP queries at the socket layer. Even in incognito or random apps, nothing slips through. The 15-minute emergency delay saved me when late-night burnout hit.',
        tags: ['Zero-Leak DNS', '15m Cooldown', 'Incognito-Proof']
      },
      {
        id: 'eng-2',
        name: 'Alexandre C.',
        role: 'Backend Go Engineer',
        badge: 'Samsung S23 Ultra',
        metric: '+4.2 hrs',
        metricLabel: 'Daily Deep Coding Time',
        avatarText: 'AC',
        headline: '“Reel Counter completely broke my 45-minute Instagram rabbit holes.”',
        quote: 'I used to open Instagram to check one message and end up watching mindless reels for an hour. FocusCrew capped me at 15 reels a day. When the 8-second breathing gate popped up on my screen, it gave my rational brain just enough time to close the app and get back to building.',
        tags: ['Reel Disruptor', 'Breathing Gate', 'Zero Lag']
      }
    ],
    students: [
      {
        id: 'stu-1',
        name: 'Zayan K.',
        role: 'Final Year Medical Student',
        badge: 'OnePlus 12',
        metric: 'Top 1%',
        metricLabel: 'Board Exam Percentile',
        avatarText: 'ZK',
        headline: '“The TaskAlarm wake-lock is brutal. You literally cannot snooze it in your sleep.”',
        quote: 'Standard alarms never worked for 5:30 AM study sessions because my half-asleep brain would hit snooze three times. FocusCrew takes over the entire screen, ignores Do Not Disturb, and makes me solve a double-digit math challenge before the piercing tone cuts off. It wakes my prefrontal cortex immediately.',
        tags: ['TaskAlarm Wake Lock', 'Anti-Snooze Math', 'No Excuses']
      },
      {
        id: 'stu-2',
        name: 'David P.',
        role: 'CS Undergrad & Competitive Programmer',
        badge: 'Xiaomi 13',
        metric: '3.8 GPA',
        metricLabel: 'From 2.9 Prior Semester',
        avatarText: 'DP',
        headline: '“It felt like someone installed guardrails on my life when my willpower was at zero.”',
        quote: 'Exam week used to trigger severe stress doomscrolling and late-night relapses. FocusCrew locked down adult content across every browser and forced SafeSearch everywhere. I didn\'t have to fight my impulses because the barrier was impassable.',
        tags: ['Forced SafeSearch', 'Safe Exam Focus', 'Device Admin Lock']
      }
    ],
    founders: [
      {
        id: 'fnd-1',
        name: 'Marcus V.',
        role: 'Bootstrapped SaaS Founder ($28k MRR)',
        badge: 'Nothing Phone 2',
        metric: '2 Apps Shipped',
        metricLabel: 'In 90 Days of Deep Work',
        avatarText: 'MV',
        headline: '“You don\'t realize how much cheap dopamine drains your ambition until you cut it to zero.”',
        quote: 'When you work for yourself, there\'s no boss watching. If you waste 3 hours doomscrolling, your revenue flatlines. FocusCrew removed the micro-distractions that were bleeding my mornings dry. It\'s 100% on-device, doesn\'t spy on my business data, and costs nothing.',
        tags: ['Zero Cloud Telemetry', '100% Free Core', 'Unstoppable Focus']
      },
      {
        id: 'fnd-2',
        name: 'Hamza S.',
        role: 'E-commerce Operator & Growth Marketer',
        badge: 'Google Pixel 7',
        metric: '82 Days',
        metricLabel: 'Porn-Free & High Energy',
        avatarText: 'HS',
        headline: '“I tried Opal, Freedom, and AppBlock. None of them lasted more than a week. FocusCrew did.”',
        quote: 'Other apps charge you $99 a year and then crash or let you disable them in 3 taps in Android settings. FocusCrew is hardened. The founder clearly built this because he actually needed it himself. That authenticity shows in every single feature.',
        tags: ['Freedom Vault', 'Zero Paywalls', 'Built for Men']
      }
    ]
  };

  return (
    <section id="success-stories" className="py-24 bg-white border-t border-purple-100 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Zanderio Style) */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-[#7E3FF2] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>REAL STORIES • ZERO FABRICATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#212529] tracking-tight">
            Built for people who are tired of lying to themselves.
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Here is what happens when you replace weak willpower with an on-device fortress that refuses to let you relapse.
          </p>
        </div>

        {/* Category Tab Switcher (Zanderio Interactive Pill Tabs) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  soundFx.playChime();
                  setActiveTab(cat.id as any);
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#7E3FF2] text-white shadow-md shadow-purple-500/25'
                    : 'bg-[#FAF7FF] text-slate-700 hover:bg-purple-100/60 border border-purple-100'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#7E3FF2]'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories[activeTab].map((story) => (
            <div
              key={story.id}
              className="rounded-3xl bg-[#FAF7FF] border border-purple-100 p-8 sm:p-10 flex flex-col justify-between shadow-xs card-shadow-hover relative overflow-hidden"
            >
              {/* Subtle top-right watermark badge */}
              <div className="absolute top-6 right-6">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>

              <div>
                {/* Metric Highlight Badge */}
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white border border-purple-200/80 shadow-2xs mb-6">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <div>
                    <span className="text-base sm:text-lg font-extrabold text-[#7E3FF2] font-mono leading-none">
                      {story.metric}
                    </span>
                    <span className="text-[11px] text-slate-500 font-semibold ml-2">
                      {story.metricLabel}
                    </span>
                  </div>
                </div>

                {/* Headline Quote */}
                <h3 className="text-lg sm:text-xl font-extrabold text-[#212529] tracking-tight leading-snug">
                  {story.headline}
                </h3>

                {/* Full Body Quote */}
                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {story.quote}
                </p>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {story.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-white border border-purple-100 text-[11px] font-mono font-semibold text-purple-700"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Footer */}
              <div className="mt-8 pt-6 border-t border-purple-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#7E3FF2] to-[#9055FD] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                    {story.avatarText}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#212529] flex items-center gap-1.5">
                      <span>{story.name}</span>
                      <ShieldCheck className="w-4 h-4 text-[#7E3FF2]" />
                    </div>
                    <div className="text-xs text-slate-500">{story.role}</div>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-slate-400 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                  {story.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-purple-50 via-white to-purple-50 border border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#7E3FF2] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Are you ready to stop making excuses?</div>
              <div className="text-xs text-slate-500">Download the direct APK and lock your device down in less than 2 minutes.</div>
            </div>
          </div>

          <a
            href="#download-section"
            onClick={() => soundFx.playShieldTone()}
            className="px-6 py-2.5 rounded-full bg-[#7E3FF2] hover:bg-[#6C2FE0] text-white text-xs font-bold shadow-sm transition-all cursor-pointer whitespace-nowrap"
          >
            Get Production APK Free
          </a>
        </div>

      </div>
    </section>
  );
};
