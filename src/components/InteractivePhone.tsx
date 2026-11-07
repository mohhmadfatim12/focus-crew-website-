import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  ShieldCheck, 
  Smartphone, 
  Bell, 
  Lock, 
  Unlock, 
  Wifi, 
  Battery, 
  Volume2, 
  VolumeX, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  Flame,
  Zap,
  Eye
} from 'lucide-react';
import { soundFx } from '../utils/audio';

type ActiveTab = 'fortress' | 'reel' | 'alarm' | 'vault';

export const InteractivePhone: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('fortress');
  const [currentTime, setCurrentTime] = useState('14:30');
  
  // Titan Fortress State
  const [isShieldActive, setIsShieldActive] = useState(true);
  const [blockedQueriesCount, setBlockedQueriesCount] = useState(1428);
  const [lastBlockedDomain, setLastBlockedDomain] = useState<string | null>(null);

  // Reel Counter State
  const [reelCount, setReelCount] = useState(14);
  const [reelLimit] = useState(18);
  const [showFrictionModal, setShowFrictionModal] = useState(false);
  const [frictionSeconds, setFrictionSeconds] = useState(5);

  // TaskAlarm State
  const [isAlarmModalOpen, setIsAlarmModalOpen] = useState(false);
  const [isBuzzerActive, setIsBuzzerActive] = useState(false);
  const [mathAnswer, setMathAnswer] = useState('');

  // Freedom Vault State
  const [vaultPin, setVaultPin] = useState('');
  const [isVaultLocked, setIsVaultLocked] = useState(true);
  const [emergencyCountdown, setEmergencyCountdown] = useState<number | null>(null);

  // Live time ticker
  useEffect(() => {
    const update = () => {
      const now = new Date();
      const hrs = String(now.getHours()).padStart(2, '0');
      const mins = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${hrs}:${mins}`);
    };
    update();
    const interval = setInterval(update, 10000);
    return () => clearInterval(interval);
  }, []);

  // Friction modal timer countdown
  useEffect(() => {
    let timer: number;
    if (showFrictionModal && frictionSeconds > 0) {
      timer = window.setTimeout(() => setFrictionSeconds(frictionSeconds - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [showFrictionModal, frictionSeconds]);

  // Emergency countdown timer
  useEffect(() => {
    let timer: number;
    if (emergencyCountdown !== null && emergencyCountdown > 0) {
      timer = window.setTimeout(() => setEmergencyCountdown(emergencyCountdown - 1), 1000);
    } else if (emergencyCountdown === 0) {
      setIsVaultLocked(false);
      setEmergencyCountdown(null);
    }
    return () => clearTimeout(timer);
  }, [emergencyCountdown]);

  // Simulate Threat Block
  const simulateThreat = () => {
    soundFx.playShieldTone();
    const mockThreats = [
      'tracker.nsfw-network.xxx',
      'api.adult-stream-cdn.com',
      'popup.malicious-redirect.net',
      'analytics.dopamine-loop.io'
    ];
    const picked = mockThreats[Math.floor(Math.random() * mockThreats.length)];
    setBlockedQueriesCount(prev => prev + 1);
    setLastBlockedDomain(picked);
    setTimeout(() => setLastBlockedDomain(null), 3500);
  };

  // Simulate Reel Scroll
  const handleNextReel = () => {
    soundFx.playChime();
    const next = reelCount + 1;
    setReelCount(next);
    if (next >= reelLimit) {
      setShowFrictionModal(true);
      setFrictionSeconds(5);
    }
  };

  // Trigger Alarm Modal
  const triggerAlarmTest = () => {
    setIsAlarmModalOpen(true);
    setMathAnswer('');
    soundFx.startTaskAlarmBuzzer((active) => setIsBuzzerActive(active));
  };

  const dismissAlarm = () => {
    if (mathAnswer.trim() === '42') {
      soundFx.stopTaskAlarmBuzzer((active) => setIsBuzzerActive(active));
      setIsAlarmModalOpen(false);
    } else {
      alert('Wrong answer! Solve 24 + 18 to prove wakefulness.');
    }
  };

  const cancelAlarmModal = () => {
    soundFx.stopTaskAlarmBuzzer((active) => setIsBuzzerActive(active));
    setIsAlarmModalOpen(false);
  };

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[360px] select-none">
      
      {/* Outer Glow Halo */}
      <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-600/10 to-emerald-500/20 rounded-[55px] blur-2xl opacity-60 pointer-events-none" />

      {/* Titanium Hardware Phone Bezel */}
      <div className="relative rounded-[48px] p-3.5 bg-gradient-to-b from-[#222736] via-[#121622] to-[#0A0D15] border-2 border-slate-700/80 shadow-2xl shadow-black/80">
        
        {/* Subtle Side Button Highlights */}
        <div className="absolute -left-[5px] top-28 w-[3px] h-10 bg-slate-600 rounded-l-sm" />
        <div className="absolute -left-[5px] top-42 w-[3px] h-14 bg-slate-600 rounded-l-sm" />
        <div className="absolute -right-[5px] top-32 w-[3px] h-16 bg-slate-600 rounded-r-sm" />

        {/* Screen Display Area */}
        <div className="relative w-full h-[620px] rounded-[38px] bg-[#080B11] border border-slate-800/90 overflow-hidden flex flex-col justify-between text-slate-100 font-sans shadow-inner">
          
          {/* Top Notch & Punch-hole Camera + Status Bar */}
          <div className="pt-2 px-5 pb-1 flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-slate-900/60 bg-[#080B11]/90 z-20">
            <span className="font-semibold text-white tracking-wide">{currentTime}</span>
            
            {/* Punch-hole camera */}
            <div className="w-3.5 h-3.5 rounded-full bg-black border border-slate-800 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-bold text-cyan-400 bg-cyan-950/60 px-1 rounded">VPN</span>
              <Wifi className="w-3 h-3 text-slate-400" />
              <Battery className="w-3.5 h-3.5 text-emerald-400" />
            </div>
          </div>

          {/* App Header Inside Phone */}
          <div className="px-4 py-2 flex items-center justify-between border-b border-slate-800/40 bg-slate-950/40">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md overflow-hidden border border-cyan-500/40 bg-slate-900">
                <img src="/app-icon-round.png" alt="Icon" className="w-full h-full object-cover" />
              </div>
              <span className="text-xs font-extrabold text-white tracking-tight">FocusCrew</span>
            </div>
            
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">Fortress Live</span>
            </div>
          </div>

          {/* Main Scrollable Screen Content */}
          <div className="flex-1 overflow-y-auto px-4 py-3 relative text-left">
            
            {/* TAB 1: TITAN FORTRESS */}
            {activeTab === 'fortress' && (
              <div className="space-y-3 animate-fadeIn">
                
                {/* Shield Status Card */}
                <div className={`p-3.5 rounded-2xl border transition-all duration-300 ${
                  isShieldActive 
                    ? 'bg-gradient-to-br from-cyan-950/40 via-slate-900 to-slate-950 border-cyan-500/40 shadow-lg shadow-cyan-950/40' 
                    : 'bg-slate-900/60 border-slate-800'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`p-2 rounded-xl ${isShieldActive ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800 text-slate-500'}`}>
                        {isShieldActive ? <ShieldCheck className="w-5 h-5" /> : <Shield className="w-5 h-5" />}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Titan Anti-Porn</div>
                        <div className="text-[10px] font-mono text-slate-400">DNS Packet Filter</div>
                      </div>
                    </div>
                    
                    {/* Toggle Switch */}
                    <button
                      onClick={() => {
                        soundFx.playChime();
                        setIsShieldActive(!isShieldActive);
                      }}
                      className={`relative w-11 h-6 rounded-full transition-colors cursor-pointer ${
                        isShieldActive ? 'bg-cyan-500' : 'bg-slate-800'
                      }`}
                    >
                      <span className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-slate-950 transition-transform ${
                        isShieldActive ? 'translate-x-5' : 'translate-x-0'
                      }`} />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-3 pt-2.5 border-t border-slate-800/80">
                    <div className="bg-slate-950/60 p-2 rounded-xl border border-slate-800/60">
                      <div className="text-[9px] font-mono uppercase text-slate-400">Blocked Today</div>
                      <div className="text-base font-extrabold text-cyan-400 font-mono">{blockedQueriesCount.toLocaleString()}</div>
                    </div>
                    <div className="bg-slate-950/60 p-2 rounded-xl border border-slate-800/60">
                      <div className="text-[9px] font-mono uppercase text-slate-400">SafeSearch</div>
                      <div className="text-xs font-extrabold text-emerald-400 mt-0.5">Enforced</div>
                    </div>
                  </div>
                </div>

                {/* Threat Simulation Alert Flash */}
                {lastBlockedDomain && (
                  <div className="p-2.5 rounded-xl bg-rose-950/70 border border-rose-500/60 text-rose-200 text-[11px] font-mono flex items-center gap-2 animate-bounce">
                    <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                    <div className="truncate">
                      <span className="font-bold text-rose-300">BLOCKED:</span> {lastBlockedDomain}
                    </div>
                  </div>
                )}

                {/* Local VPN Engine Telemetry */}
                <div className="p-3 rounded-2xl bg-slate-900/40 border border-slate-800/70 space-y-2 text-[11px]">
                  <div className="flex items-center justify-between text-slate-400 font-mono text-[10px]">
                    <span>LOCAL VPN INTERFACE</span>
                    <span className="text-emerald-400 font-semibold">10.0.0.2:53 (TUN)</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400 font-mono text-[10px]">
                    <span>DNS PACKET PARSER</span>
                    <span className="text-cyan-400 font-semibold">Native DnsPacketParser.kt</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400 font-mono text-[10px]">
                    <span>CLOUD TELEMETRY</span>
                    <span className="text-rose-400 font-semibold">0 BYTES (DISABLED)</span>
                  </div>
                </div>

                {/* Action button: Test Attack Block */}
                <button
                  onClick={simulateThreat}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 text-xs font-bold text-slate-200 flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm active:scale-95"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>Simulate Adult Domain Query</span>
                </button>
              </div>
            )}

            {/* TAB 2: REEL & SHORTS COUNTER */}
            {activeTab === 'reel' && (
              <div className="space-y-3 animate-fadeIn">
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/30 border border-indigo-500/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400">
                        <Smartphone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Reel Habit Breaker</div>
                        <div className="text-[10px] text-slate-400">Doomscroll Friction Gate</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-500/30">
                      Active
                    </span>
                  </div>

                  {/* Reel Gauge Bar */}
                  <div className="mt-3 space-y-1.5">
                    <div className="flex justify-between text-[11px] font-mono">
                      <span className="text-slate-400">Reels Watched Today</span>
                      <span className={`font-bold ${reelCount >= reelLimit ? 'text-rose-400' : 'text-indigo-300'}`}>
                        {reelCount} / {reelLimit} max
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                      <div 
                        className={`h-full transition-all duration-300 ${
                          reelCount >= reelLimit 
                            ? 'bg-rose-500' 
                            : reelCount > 12 
                              ? 'bg-amber-500' 
                              : 'bg-indigo-500'
                        }`}
                        style={{ width: `${Math.min((reelCount / reelLimit) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Supported Apps List */}
                <div className="p-3 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-2 text-[11px]">
                  <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">Monitored Surfaces</div>
                  <div className="flex items-center justify-between text-slate-300 py-1 border-b border-slate-800/40">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                      Instagram Reels
                    </span>
                    <span className="text-slate-500 font-mono text-[10px]">Interception On</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300 py-1 border-b border-slate-800/40">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      YouTube Shorts
                    </span>
                    <span className="text-slate-500 font-mono text-[10px]">Interception On</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300 py-1">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      TikTok & Feeds
                    </span>
                    <span className="text-slate-500 font-mono text-[10px]">Interception On</span>
                  </div>
                </div>

                {/* Interactive Scroll Simulation Button */}
                <button
                  onClick={handleNextReel}
                  className="w-full py-2.5 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 active:scale-95 transition-all cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Simulate Next Reel Swipe (+1)</span>
                </button>
              </div>
            )}

            {/* TAB 3: TASK ALARM */}
            {activeTab === 'alarm' && (
              <div className="space-y-3 animate-fadeIn">
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-slate-900 to-amber-950/30 border border-amber-500/30">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                        <Bell className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Military TaskAlarm</div>
                        <div className="text-[10px] text-slate-400">Exact Wake-Lock Engine</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-[10px] font-mono text-amber-300 mt-2 bg-amber-950/40 p-2 rounded-lg border border-amber-500/20">
                    Next Task: 15:00 — Deep Code Review & Execution
                  </div>
                </div>

                {/* Scheduled Tasks in FocusCrew */}
                <div className="space-y-1.5">
                  <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="line-through text-slate-500">07:00 AM — Cold Shower & Run</span>
                    </div>
                    <span className="text-[9px] font-mono text-emerald-400 font-bold">DONE</span>
                  </div>
                  <div className="p-2 rounded-xl bg-amber-950/30 border border-amber-500/40 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0 animate-spin" />
                      <span className="font-semibold text-slate-200">15:00 — FocusCrew Sprint</span>
                    </div>
                    <span className="text-[9px] font-mono text-amber-400 font-bold">ALARM ARMED</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span className="text-slate-400">20:30 — Read 25 Pages</span>
                    </div>
                    <span className="text-[9px] font-mono text-slate-500">SCHEDULED</span>
                  </div>
                </div>

                {/* Trigger Alarm Test Button */}
                <button
                  onClick={triggerAlarmTest}
                  className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95 transition-all cursor-pointer"
                >
                  <Bell className="w-3.5 h-3.5 text-slate-950 fill-current" />
                  <span>Test Full-Screen Wake Alarm</span>
                </button>
              </div>
            )}

            {/* TAB 4: FREEDOM VAULT */}
            {activeTab === 'vault' && (
              <div className="space-y-3 animate-fadeIn">
                <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                  <div className="w-10 h-10 mx-auto rounded-full bg-slate-800/90 border border-slate-700 flex items-center justify-center mb-2">
                    {isVaultLocked ? <Lock className="w-5 h-5 text-rose-400" /> : <Unlock className="w-5 h-5 text-emerald-400" />}
                  </div>
                  <div className="text-xs font-bold text-white">Freedom Vault Encryption</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    {isVaultLocked ? 'Locked with 15-min cooldown delay' : 'Vault Temporarily Unlocked'}
                  </div>

                  {/* PIN Display */}
                  <div className="flex justify-center gap-3 my-3">
                    {[0, 1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className={`w-3.5 h-3.5 rounded-full border transition-all ${
                          vaultPin.length > i 
                            ? 'bg-cyan-400 border-cyan-300 shadow-sm shadow-cyan-400' 
                            : 'border-slate-700 bg-slate-950'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Emergency Delay Trigger */}
                  {emergencyCountdown !== null ? (
                    <div className="p-2 rounded-xl bg-amber-950/40 border border-amber-500/40 text-[10px] font-mono text-amber-300">
                      Emergency Unlock Cooldown: {emergencyCountdown}s remaining. Breathe and reflect.
                    </div>
                  ) : isVaultLocked ? (
                    <button
                      onClick={() => setEmergencyCountdown(15)}
                      className="text-[10px] font-mono text-slate-400 hover:text-slate-200 underline cursor-pointer"
                    >
                      Request Emergency Unlock (15m Delay)
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setIsVaultLocked(true);
                        setVaultPin('');
                      }}
                      className="text-[10px] font-mono text-cyan-400 hover:underline cursor-pointer"
                    >
                      Relock Freedom Vault Now
                    </button>
                  )}
                </div>

                {/* Simulated Keypad */}
                <div className="grid grid-cols-3 gap-1.5 p-2 rounded-2xl bg-slate-950/80 border border-slate-800/80">
                  {['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', '✓'].map((key) => (
                    <button
                      key={key}
                      onClick={() => {
                        soundFx.playChime();
                        if (key === 'C') {
                          setVaultPin('');
                        } else if (key === '✓') {
                          if (vaultPin.length === 4) {
                            alert('FocusCrew PIN verified. Settings accessible.');
                          }
                        } else {
                          if (vaultPin.length < 4) setVaultPin(prev => prev + key);
                        }
                      }}
                      className="py-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 font-mono text-xs font-semibold text-slate-200 active:bg-cyan-500 active:text-slate-950 transition-colors cursor-pointer"
                    >
                      {key}
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Bottom App Navigation Bar Inside Phone */}
          <div className="p-2 border-t border-slate-900/80 bg-[#06080D]/95 grid grid-cols-4 gap-1 z-20">
            <button
              onClick={() => {
                soundFx.playChime();
                setActiveTab('fortress');
              }}
              className={`flex flex-col items-center py-1.5 rounded-xl transition-all cursor-pointer ${
                activeTab === 'fortress' ? 'text-cyan-400 bg-cyan-950/40' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <Shield className="w-4 h-4 mb-0.5" />
              <span className="text-[9px] font-bold font-mono">Fortress</span>
            </button>

            <button
              onClick={() => {
                soundFx.playChime();
                setActiveTab('reel');
              }}
              className={`flex flex-col items-center py-1.5 rounded-xl transition-all cursor-pointer ${
                activeTab === 'reel' ? 'text-indigo-400 bg-indigo-950/40' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <Smartphone className="w-4 h-4 mb-0.5" />
              <span className="text-[9px] font-bold font-mono">ReelGate</span>
            </button>

            <button
              onClick={() => {
                soundFx.playChime();
                setActiveTab('alarm');
              }}
              className={`flex flex-col items-center py-1.5 rounded-xl transition-all cursor-pointer ${
                activeTab === 'alarm' ? 'text-amber-400 bg-amber-950/40' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <Bell className="w-4 h-4 mb-0.5" />
              <span className="text-[9px] font-bold font-mono">Alarm</span>
            </button>

            <button
              onClick={() => {
                soundFx.playChime();
                setActiveTab('vault');
              }}
              className={`flex flex-col items-center py-1.5 rounded-xl transition-all cursor-pointer ${
                activeTab === 'vault' ? 'text-rose-400 bg-rose-950/40' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <Lock className="w-4 h-4 mb-0.5" />
              <span className="text-[9px] font-bold font-mono">Vault</span>
            </button>
          </div>

          {/* Android Bottom Gesture Bar */}
          <div className="py-1 flex justify-center bg-[#06080D]">
            <div className="w-24 h-1 rounded-full bg-slate-700/80" />
          </div>

          {/* --- OVERLAY 1: CALM FRICTION SCREEN (WHEN REEL LIMIT HIT) --- */}
          {showFrictionModal && (
            <div className="absolute inset-0 z-30 bg-[#080B11]/95 backdrop-blur-md p-6 flex flex-col justify-between text-center animate-fadeIn">
              <div className="pt-8">
                <div className="w-14 h-14 mx-auto rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 mb-3 animate-pulse">
                  <Flame className="w-7 h-7" />
                </div>
                <h4 className="text-sm font-extrabold text-white">Dopamine Threshold Hit</h4>
                <p className="text-[11px] text-slate-300 mt-1">
                  You have watched {reelLimit} short-form reels today.
                </p>
                <div className="mt-4 p-3 rounded-2xl bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
                  <div className="text-[9px] uppercase font-mono text-cyan-400 font-bold mb-1">Mindful Interruption</div>
                  Take 3 slow breaths before deciding whether to keep scrolling or return to your real goals.
                </div>
              </div>

              <div className="space-y-2 pb-6">
                {frictionSeconds > 0 ? (
                  <div className="py-2.5 rounded-xl bg-slate-900 text-xs font-mono font-bold text-slate-400 border border-slate-800">
                    Friction Gate Active ({frictionSeconds}s)
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setShowFrictionModal(false);
                      setReelCount(0);
                    }}
                    className="w-full py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs cursor-pointer"
                  >
                    Close Feeds & Reclaim My Time
                  </button>
                )}
                
                <button
                  onClick={() => setShowFrictionModal(false)}
                  className="text-[10px] text-slate-500 hover:text-slate-300 underline cursor-pointer"
                >
                  Dismiss for 5 minutes
                </button>
              </div>
            </div>
          )}

          {/* --- OVERLAY 2: FULL-SCREEN TASKALARM WAKE-LOCK MODAL --- */}
          {isAlarmModalOpen && (
            <div className="absolute inset-0 z-40 bg-gradient-to-b from-amber-950/90 via-slate-950 to-black p-5 flex flex-col justify-between text-center animate-fadeIn border-2 border-amber-500/80">
              <div className="pt-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/30 border-2 border-amber-400 flex items-center justify-center text-amber-300 mb-2 animate-ping">
                  <Bell className="w-8 h-8 fill-current" />
                </div>
                <div className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-extrabold">
                  TaskAlarm Wake Lock
                </div>
                <h3 className="text-base font-extrabold text-white mt-1">Deep Work Sprint</h3>
                <p className="text-[11px] text-amber-200/80 mt-0.5">FocusCrew v1.0.0 Production</p>

                {/* Alarm Sound Status & Toggle */}
                <div className="mt-4 flex items-center justify-center gap-2">
                  <button
                    onClick={() => {
                      soundFx.toggleBuzzer((active) => setIsBuzzerActive(active));
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold border ${
                      isBuzzerActive 
                        ? 'bg-amber-500 text-slate-950 border-amber-400 animate-pulse' 
                        : 'bg-slate-900 text-slate-400 border-slate-700'
                    }`}
                  >
                    {isBuzzerActive ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                    <span>{isBuzzerActive ? 'Buzzer Ringing (Sound ON)' : 'Buzzer Muted'}</span>
                  </button>
                </div>

                {/* Wakefulness Challenge */}
                <div className="mt-5 p-3 rounded-2xl bg-black/80 border border-amber-500/40 text-left">
                  <div className="text-[10px] font-mono text-amber-400 font-bold uppercase">Wake Challenge (Anti-Snooze)</div>
                  <div className="text-xs text-white font-medium mt-1">Solve to prove alertness:</div>
                  <div className="text-sm font-mono font-bold text-amber-300 my-1">24 + 18 = ?</div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Answer"
                      value={mathAnswer}
                      onChange={(e) => setMathAnswer(e.target.value)}
                      className="w-24 px-2 py-1 rounded bg-slate-900 border border-slate-700 text-xs font-mono text-white focus:outline-none focus:border-amber-400"
                    />
                    <button
                      onClick={dismissAlarm}
                      className="px-3 py-1 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded font-sans cursor-pointer"
                    >
                      Verify & Dismiss
                    </button>
                  </div>
                </div>
              </div>

              <div className="pb-4">
                <button
                  onClick={cancelAlarmModal}
                  className="text-[10px] text-slate-500 hover:text-slate-400 underline cursor-pointer"
                >
                  Emergency Close Test Modal
                </button>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Simulator Device Caption */}
      <div className="mt-3 text-center">
        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-900/60 px-3 py-1 rounded-full border border-slate-800">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          Interactive Demo — Click tabs & buttons to test live
        </span>
      </div>

    </div>
  );
};
