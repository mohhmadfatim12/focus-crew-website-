import React, { useState } from 'react';
import { Star, ShieldCheck, Terminal, GraduationCap, Briefcase, ArrowRight } from 'lucide-react';

interface Story {
  id: string;
  name: string;
  role: string;
  badge: string;
  stat1: { val: string; label: string };
  stat2: { val: string; label: string };
  stat3: { val: string; label: string };
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
        stat1: { val: '184', label: 'Days Clean' },
        stat2: { val: '+4.2h', label: 'Coding / Day' },
        stat3: { val: '0', label: 'Relapses' },
        avatarText: 'TM',
        headline: '“Every other blocker is a joke when you know how DNS works. FocusCrew is the first one I couldn\'t break.”',
        quote: 'As an engineer, I used to bypass every blocker in literally 10 seconds—changing Private DNS, using alternative browsers, or killing services. FocusCrew\'s local loopback at 10.0.0.2:53 catches UDP queries at the socket layer. Even in incognito or random apps, nothing slips through. The 15-minute emergency delay saved me when late-night burnout hit.',
        tags: ['Zero-Leak DNS', '15m Cooldown', 'Incognito-Proof']
      },
      {
        id: 'eng-2',
        name: 'Alexandre C.',
        role: 'Backend Go Engineer',
        badge: 'Samsung S23 Ultra',
        stat1: { val: '15/15', label: 'Reels Cap' },
        stat2: { val: '+3.5h', label: 'Deep Work' },
        stat3: { val: '100%', label: 'On-Device' },
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
        stat1: { val: 'Top 1%', label: 'Exam Percentile' },
        stat2: { val: '14 hrs', label: 'Daily Focus' },
        stat3: { val: '0', label: 'Relapses' },
        avatarText: 'ZK',
        headline: '“The 15-minute Freedom Vault completely killed my late-night study cravings.”',
        quote: 'During high-stress medical board exam preparation, late-night exhaustion used to trigger mindless browsing and relapses. FocusCrew\'s local DNS shield dropped every explicit domain instantly, and the 15-minute emergency unlock buffer gave my rational brain time to cool off and go to sleep.',
        tags: ['Freedom Vault Delay', 'Local DNS Shield', 'Zero Relapse']
      },
      {
        id: 'stu-2',
        name: 'David P.',
        role: 'CS Undergrad & Competitive Programmer',
        badge: 'Xiaomi 13',
        stat1: { val: '3.8', label: 'Current GPA' },
        stat2: { val: '92', label: 'Clean Days' },
        stat3: { val: '100%', label: 'SafeSearch' },
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
        stat1: { val: '2 Apps', label: 'Shipped in 90d' },
        stat2: { val: '0 Byte', label: 'Data Logged' },
        stat3: { val: '$0', label: 'Subscriptions' },
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
        stat1: { val: '82', label: 'Days Streak' },
        stat2: { val: '15m', label: 'Unlock Buffer' },
        stat3: { val: '96%', label: 'Urge Stopped' },
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
        
        {/* Section Heading Row (Exact Zanderio Success Stories Heading Row) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#212529] tracking-tight">
            Success Stories
          </h2>

          <a
            href="#download-section"
            className="px-5 py-2 rounded-full bg-purple-50 hover:bg-purple-100 text-[#7E3FF2] border border-purple-200 text-xs font-bold transition-all self-start sm:self-auto cursor-pointer"
          >
            View All Stories →
          </a>
        </div>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mb-12">
          FocusCrew is the complete on-device wellness guardian for people who want more than basic timer blocks. 
          Here is what happens when you replace weak willpower with an unshakeable system on your phone.
        </p>

        {/* Category Tab Switcher (Zanderio Interactive Pill Tabs) */}
        <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
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
              {/* Star rating in top-right */}
              <div className="absolute top-8 right-8">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>

              <div>
                {/* 3-Stat Metric Row (Exact Zanderio Card-Success-Stats Frame) */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-white border border-purple-200/80 shadow-2xs mb-6 text-center">
                  <div>
                    <div className="text-xl sm:text-2xl font-extrabold text-[#7E3FF2] font-mono leading-none">
                      {story.stat1.val}
                    </div>
                    <div className="text-[10px] text-slate-500 font-semibold mt-1">
                      {story.stat1.label}
                    </div>
                  </div>

                  <div className="border-x border-purple-100">
                    <div className="text-xl sm:text-2xl font-extrabold text-[#212529] font-mono leading-none">
                      {story.stat2.val}
                    </div>
                    <div className="text-[10px] text-slate-500 font-semibold mt-1">
                      {story.stat2.label}
                    </div>
                  </div>

                  <div>
                    <div className="text-xl sm:text-2xl font-extrabold text-emerald-600 font-mono leading-none">
                      {story.stat3.val}
                    </div>
                    <div className="text-[10px] text-slate-500 font-semibold mt-1">
                      {story.stat3.label}
                    </div>
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

                <span className="text-[10px] font-mono text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                  {story.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Big CTA Button (Exact Zanderio Success Stories CTA Button) */}
        <div className="mt-14 text-center">
          <a
            href="#download-section"
            className="acs-btn"
          >
            <span>View How FocusCrew Reclaims Your Life</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
