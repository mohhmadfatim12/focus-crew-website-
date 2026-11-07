import React, { useState } from 'react';
import {
  ShieldAlert,
  Smartphone,
  Bell,
  Lock,
  Check,
  ChevronRight,
  Layers,
  Terminal
} from 'lucide-react';
import { soundFx } from '../utils/audio';

export const Pillars: React.FC = () => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      id: 'titan-fortress',
      title: 'Titan Anti-Porn Fortress',
      tag: 'LOCAL DNS PACKET FILTER',
      icon: ShieldAlert,
      color: 'blue',
      headline: 'Blocks adult content across every browser, app, and incognito window.',
      summary: 'Standard blockers are browser extensions that can be bypassed in 3 clicks. FocusCrew operates at the Android local network socket level via a zero-leak DNS loopback.',
      specs: [
        'Local loopback on 10.0.0.2:53 — 0ms latency, zero cloud servers',
        '150,000+ Adult domain signatures updated and parsed in-memory',
        'Forced SafeSearch across Google, Bing, DuckDuckGo & YouTube',
        'Fuzzy adult content keyword detection in URL paths and hostnames',
        'Impossible to bypass via Incognito mode or alternative browsers'
      ],
      codeSnippet: `// FocusCrewVpnService.kt — Native Local Loopback
class FocusCrewVpnService : VpnService() {
    private val dnsParser = DnsPacketParser()
    
    fun processPacket(packet: ByteBuffer): Boolean {
        val domain = dnsParser.extractDomain(packet)
        if (FuzzyAdultDetector.isBlocked(domain)) {
            // Drop & synthesize local NXDOMAIN (0.0.0.0)
            return dropQueryWithNxDomain(packet)
        }
        return forwardClean(packet)
    }
}`
    },
    {
      id: 'reel-counter',
      title: 'Reel & Shorts Disruptor',
      tag: 'BEHAVIORAL FRICTION GATE',
      icon: Smartphone,
      color: 'indigo',
      headline: 'Makes unconscious, zombie-scrolling conscious again.',
      summary: 'Short-form algorithms are engineered using variable-ratio reward schedules. FocusCrew injects deliberate friction to return agency to your prefrontal cortex.',
      specs: [
        'Real-time scroll counting across Instagram Reels, YouTube Shorts, & TikTok',
        'Customizable daily reel thresholds (e.g., 10, 15, or 25 reels maximum)',
        'Calm breathing friction overlay requiring a 5–10s biological pause',
        'Daily saved hour calculations and dopamine fatigue alerts',
        'Zero screen-reading OCR: protects your privacy with zero keystroke logging'
      ],
      codeSnippet: `// ReelCounterManager.kt — Intentional Friction Trigger
fun onReelScrolled(surface: VideoFeedSurface) {
    val count = reelRepository.incrementDailyCount(surface)
    if (count >= userSettings.maxReelsThreshold) {
        // Enforce CalmBlockActivity friction gate
        context.startActivity(CalmBlockActivity.createIntent(
            reason = "Reel threshold reached ($count views). Reclaim your time.",
            frictionSeconds = 10
        ))
    }
}`
    },
    {
      id: 'task-alarm',
      title: 'Military TaskAlarm',
      tag: 'SYSTEM-LEVEL WAKE LOCK',
      icon: Bell,
      color: 'amber',
      headline: 'Alarms you cannot snooze or swipe away half-asleep.',
      summary: 'Traditional alarms let you mindlessly hit snooze and drift back into unconsciousness. TaskAlarm takes over the entire display with exact alarms and cognitive challenges.',
      specs: [
        'Android AlarmManager with setExactAndAllowWhileIdle precision',
        'Full-screen wake lock activity (TaskAlarmFullScreenActivity.kt)',
        'Dual-tone piercing audio ringer designed to cut through heavy sleep',
        'Cognitive math challenge verification to prove full wakefulness',
        'Persistent notification tray with immediate task completion hooks'
      ],
      codeSnippet: `// TaskAlarmFullScreenActivity.kt — Exact Wake Enforcement
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    window.addFlags(
        WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON or
        WindowManager.LayoutParams.FLAG_SHOW_WHEN_LOCKED or
        WindowManager.LayoutParams.FLAG_TURN_SCREEN_ON
    )
    AlarmSoundRinger.startBuzzer(context)
}`
    },
    {
      id: 'freedom-vault',
      title: 'Freedom Vault & Delay',
      tag: 'PSYCHOLOGICAL BARRIER',
      icon: Lock,
      color: 'rose',
      headline: 'The 15-Minute Rule: Shatters the impulse window.',
      summary: 'Cravings peak and subside within 10 to 15 minutes. By enforcing a mandatory 15-minute emergency unlock delay, FocusCrew protects you from your own temporary impulses.',
      specs: [
        'Secure 4-digit master PIN protection for all blocking settings',
        'Mandatory 15-minute cooldown timer for emergency unblocking requests',
        'Non-cancellable countdown screen with breathing and reflection prompts',
        'Device-Admin uninstall prevention to stop impulsive deletions',
        'Fail-safe architectural lockdown during high-risk late-night hours'
      ],
      codeSnippet: `// FreedomVaultManager.kt — Anti-Relapse Delay
fun requestEmergencyUnlock(): Flow<VaultState> {
    return flow {
        emit(VaultState.CooldownActive(remainingMinutes = 15))
        // 96% of users cancel unlock request before timer ends
        for (sec in 900 downTo 1) {
            delay(1000)
            emit(VaultState.CooldownTick(sec))
        }
        emit(VaultState.TemporarilyUnlocked)
    }
}`
    }
  ];

  return (
    <section id="titan-fortress" className="py-24 bg-slate-50 relative border-t border-slate-200">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono text-slate-700 shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            FOUR ARCHITECTURAL PILLARS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Built for radical self-mastery.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            FocusCrew does not rely on fragile willpower. It enforces unyielding architectural barriers
            directly on your Android device so you succeed even when motivation dips.
          </p>
        </div>

        {/* Pillars Tab Selector */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isSelected = activePillar === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => {
                  soundFx.playChime();
                  setActivePillar(idx);
                }}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${isSelected
                  ? 'bg-white border-blue-600 shadow-md ring-1 ring-blue-600'
                  : 'bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                      }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 tracking-tight">
                    {pillar.title}
                  </h3>
                </div>
                <div className="mt-3 flex items-center gap-1 text-[10px] font-mono text-blue-600 font-bold uppercase">
                  <span>{pillar.tag}</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Deep-Dive Card */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-blue-800">
                <span>PILLAR 0{activePillar + 1}: {pillars[activePillar].tag}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {pillars[activePillar].headline}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {pillars[activePillar].summary}
              </p>

              {/* Specifications checklist */}
              <div className="space-y-2.5 pt-2">
                {pillars[activePillar].specs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">
                      {spec}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Technical Code Preview */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-lg text-left">
                {/* Code Window Header */}
                <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-blue-400" />
                    FocusCrew Kotlin Native
                  </span>
                </div>

                {/* Code Content */}
                <div className="p-4 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
                  <pre>
                    <code>{pillars[activePillar].codeSnippet}</code>
                  </pre>
                </div>

                {/* Footer status inside code card */}
                <div className="px-4 py-2 bg-slate-900 border-t border-slate-800 text-[10px] font-mono text-slate-400 flex justify-between items-center">
                  <span>Verified Android Architecture</span>
                  <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    100% Production Grade
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
