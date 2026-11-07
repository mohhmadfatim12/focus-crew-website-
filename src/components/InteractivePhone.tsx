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

  // Live clock
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

  // Friction modal timer
  useEffect(() => {
    let timer: number;
    if (showFrictionModal && frictionSeconds > 0) {
      timer = window.setTimeout(() => setFrictionSeconds(frictionSeconds - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [showFrictionModal, frictionSeconds]);

  // Emergency countdown
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

  const handleNextReel = () => {
    soundFx.playChime();
    const next = reelCount + 1;
    setReelCount(next);
    if (next >= reelLimit) {
      setShowFrictionModal(true);
      setFrictionSeconds(5);
    }
  };

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
    <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[340px] select-none text-left">
      
      {/* Soft Zanderio ambient glow */}
      <div className="absolute -inset-3 bg-[#7E3FF2]/10 rounded-[52px] blur-xl opacity-75 pointer-events-none" />

      {/* Titanium White Hardware Bezel */}
      <div className="relative rounded-[44px] p-2.5 bg-gradient-to-b from-[#EDE9FE] via-[#F3E8FF] to-[#EDE9FE] border-2 border-purple-200/80 shadow-xl">
        
        {/* Buttons */}
        <div className="absolute -left-[3px] top-24 w-[2px] h-9 bg-purple-300 rounded-l-sm" />
        <div className="absolute -left-[3px] top-36 w-[2px] h-12 bg-purple-300 rounded-l-sm" />
        <div className="absolute -right-[3px] top-28 w-[2px] h-14 bg-purple-300 rounded-r-sm" />

        {/* Screen */}
        <div className="relative w-full h-[580px] rounded-[36px] bg-white border border-purple-100 overflow-hidden flex flex-col justify-between text-[#212529] font-sans shadow-inner">
          
          {/* Status Bar */}
          <div className="pt-2 px-4 pb-1 flex items-center justify-between text-[11px] font-mono text-slate-500 bg-white z-20">
            <span className="font-semibold text-slate-900 tracking-tight">{currentTime}</span>
            
            {/* Camera Punch */}
            <div className="w-3.5 h-3.5 rounded-full bg-slate-900 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-bold text-[#7E3FF2] bg-[#F5F0FF] px-1 py-0.2 rounded border border-purple-200">
                VPN
              </span>
              <Wifi className="w-3 h-3 text-slate-500" />
              <Battery className="w-3.5 h-3.5 text-emerald-600" />
            </div>
          </div>

          {/* App Header Inside Phone */}
          <div className="px-4 py-2.5 flex items-center justify-between border-b border-purple-100 bg-[#FAF7FF]">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md overflow-hidden border border-purple-200 bg-white p-0.5">
                <img src="/app-icon-round.png" alt="Icon" className="w-full h-full object-cover rounded" />
              </div>
              <span className="text-xs font-extrabold text-slate-900 tracking-tight">FocusCrew</span>
            </div>
            
            <div className="flex items-center gap-1.5 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-mono text-emerald-700 font-bold uppercase">Shield Live</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-y-auto px-3.5 py-3 relative bg-white">
            
            {/* TAB 1: FORTRESS */}
            {activeTab === 'fortress' && (
              <div className="space-y-3">
                <div className={`p-3.5 rounded-2xl border transition-all duration-200 ${
                  isShieldActive 
                    ? 'bg-[#FAF7FF] border-purple-200 shadow-xs' 
                    : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`p-2 rounded-xl ${isShieldActive ? 'bg-[#7E3FF2] text-white' : 'bg-slate-200 text-slate-500'}`}>
                        {isShieldActive ? <ShieldCheck className="w-4 h-4" /> : <Shield className="w-4 h-4" />}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Titan Anti-Porn</div>
                        <div className="text-[10px] font-mono text-slate-500">Local DNS Loopback</div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => {
                        soundFx.playChime();
                        setIsShieldActive(!isShieldActive);
                      }}
                      className={`relative w-11 h-6 rounded-full transition-colors cursor-pointer ${
                        isShieldActive ? 'bg-[#7E3FF2]' : 'bg-slate-300'
                      }`}
                    >
                      <span className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform shadow ${
                        isShieldActive ? 'translate-x-5' : 'translate-x-0'
                      }`} />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-3 pt-2.5 border-t border-purple-100">
                    <div className="bg-white p-2 rounded-xl border border-purple-100 shadow-2xs">
                      <div className="text-[9px] font-mono uppercase text-slate-500">Blocked Today</div>
                      <div className="text-sm font-extrabold text-[#7E3FF2] font-mono mt-0.5">
                        {blockedQueriesCount.toLocaleString()}
                      </div>
                    </div>
                    <div className="bg-white p-2 rounded-xl border border-purple-100 shadow-2xs">
                      <div className="text-[9px] font-mono uppercase text-slate-500">SafeSearch</div>
                      <div className="text-xs font-extrabold text-emerald-600 mt-0.5">Enforced</div>
                    </div>
                  </div>
                </div>

                {lastBlockedDomain && (
                  <div className="p-2 rounded-xl bg-rose-50 border border-rose-300 text-rose-800 text-[10px] font-mono flex items-center gap-1.5 animate-bounce">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                    <div className="truncate">
                      <span className="font-bold">BLOCKED:</span> {lastBlockedDomain}
                    </div>
                  </div>
                )}

                <div className="p-2.5 rounded-2xl bg-[#FAF8FF] border border-purple-100 space-y-1.5 text-[10px]">
                  <div className="flex items-center justify-between text-slate-600 font-mono">
                    <span>LOCAL SOCKET</span>
                    <span className="text-slate-900 font-bold">10.0.0.2:53 (TUN)</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600 font-mono">
                    <span>DNS PACKET PARSER</span>
                    <span className="text-[#7E3FF2] font-bold">DnsPacketParser.kt</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600 font-mono">
                    <span>CLOUD TELEMETRY</span>
                    <span className="text-emerald-700 font-bold">0 BYTES (DISABLED)</span>
                  </div>
                </div>

                <button
                  onClick={simulateThreat}
                  className="w-full py-2.5 px-3 rounded-xl bg-[#7E3FF2] hover:bg-[#6C2FE0] text-xs font-bold text-white flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm active:scale-95"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-300" />
                  <span>Simulate Adult Domain Query</span>
                </button>
              </div>
            )}

            {/* TAB 2: REEL */}
            {activeTab === 'reel' && (
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-[#FAF8FF] border border-purple-100">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-[#7E3FF2] text-white">
                        <Smartphone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Reel Habit Breaker</div>
                        <div className="text-[10px] text-slate-500">Short-Form Friction Gate</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#F5F0FF] text-[#7E3FF2] border border-purple-200">
                      Armed
                    </span>
                  </div>

                  <div className="mt-3 space-y-1.5">
                    <div className="flex justify-between text-[11px] font-mono">
                      <span className="text-slate-600">Reels Watched Today</span>
                      <span className={`font-bold ${reelCount >= reelLimit ? 'text-rose-600' : 'text-slate-900'}`}>
                        {reelCount} / {reelLimit} max
                      </span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-300 ${
                          reelCount >= reelLimit 
                            ? 'bg-rose-500' 
                            : 'bg-[#7E3FF2]'
                        }`}
                        style={{ width: `${Math.min((reelCount / reelLimit) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 text-[10px]">
                  <div className="text-[9px] font-mono uppercase text-slate-500 tracking-wider font-semibold">
                    Monitored Surfaces
                  </div>
                  <div className="flex items-center justify-between text-slate-700 py-1 border-b border-slate-200/60">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                      Instagram Reels
                    </span>
                    <span className="text-slate-500 font-mono text-[9px]">Active</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-700 py-1 border-b border-slate-200/60">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      YouTube Shorts
                    </span>
                    <span className="text-slate-500 font-mono text-[9px]">Active</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-700 py-1">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
                      TikTok & Feeds
                    </span>
                    <span className="text-slate-500 font-mono text-[9px]">Active</span>
                  </div>
                </div>

                <button
                  onClick={handleNextReel}
                  className="w-full py-2.5 px-3 rounded-xl bg-[#7E3FF2] hover:bg-[#6C2FE0] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Simulate Next Reel Swipe (+1)</span>
                </button>
              </div>
            )}

            {/* TAB 3: ALARM */}
            {activeTab === 'alarm' && (
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="p-2 rounded-xl bg-amber-500 text-slate-950 font-bold">
                      <Bell className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">TaskAlarm & Planner</div>
                      <div className="text-[10px] text-slate-500">System Wake Lock</div>
                    </div>
                  </div>
                  <div className="text-[10px] font-mono text-amber-900 font-semibold mt-2 bg-amber-100/70 p-2 rounded-lg border border-amber-200">
                    Next Task: 15:00 — Deep Code Review & Execution
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="line-through text-slate-400">07:00 AM — Morning Run</span>
                    </div>
                    <span className="text-[9px] font-mono text-emerald-700 font-bold">DONE</span>
                  </div>
                  <div className="p-2 rounded-xl bg-amber-50 border border-amber-300 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span className="font-semibold text-slate-900">15:00 — FocusCrew Sprint</span>
                    </div>
                    <span className="text-[9px] font-mono text-amber-700 font-bold">ARMED</span>
                  </div>
                </div>

                <button
                  onClick={triggerAlarmTest}
                  className="w-full py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all cursor-pointer"
                >
                  <Bell className="w-3.5 h-3.5 fill-current" />
                  <span>Test Full-Screen Wake Alarm</span>
                </button>
              </div>
            )}

            {/* TAB 4: VAULT */}
            {activeTab === 'vault' && (
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-[#FAF8FF] border border-purple-100 text-center">
                  <div className="w-9 h-9 mx-auto rounded-full bg-white border border-purple-200 shadow-2xs flex items-center justify-center mb-1.5">
                    {isVaultLocked ? <Lock className="w-4 h-4 text-[#7E3FF2]" /> : <Unlock className="w-4 h-4 text-emerald-600" />}
                  </div>
                  <div className="text-xs font-bold text-slate-900">Freedom Vault Master Lock</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">
                    {isVaultLocked ? 'Protected by 15-minute emergency delay' : 'Vault Temporarily Unlocked'}
                  </div>

                  <div className="flex justify-center gap-2.5 my-2.5">
                    {[0, 1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full border transition-all ${
                          vaultPin.length > i 
                            ? 'bg-[#7E3FF2] border-[#7E3FF2] shadow-2xs' 
                            : 'border-slate-300 bg-white'
                        }`}
                      />
                    ))}
                  </div>

                  {emergencyCountdown !== null ? (
                    <div className="p-2 rounded-xl bg-amber-50 border border-amber-300 text-[10px] font-mono text-amber-900">
                      Emergency Delay: {emergencyCountdown}s remaining. Breathe and pause.
                    </div>
                  ) : isVaultLocked ? (
                    <button
                      onClick={() => setEmergencyCountdown(15)}
                      className="text-[10px] font-mono text-purple-700 hover:text-purple-900 underline cursor-pointer"
                    >
                      Request Emergency Unlock (15m Delay)
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setIsVaultLocked(true);
                        setVaultPin('');
                      }}
                      className="text-[10px] font-mono text-[#7E3FF2] hover:underline cursor-pointer"
                    >
                      Relock Freedom Vault Now
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-1 p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
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
                      className="py-1.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200/80 font-mono text-xs font-semibold text-slate-800 shadow-2xs active:bg-[#7E3FF2] active:text-white transition-colors cursor-pointer"
                    >
                      {key}
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Bottom Tabs */}
          <div className="p-1.5 border-t border-purple-100 bg-[#FAF7FF] grid grid-cols-4 gap-1 z-20">
            <button
              onClick={() => {
                soundFx.playChime();
                setActiveTab('fortress');
              }}
              className={`flex flex-col items-center py-1 rounded-xl transition-all cursor-pointer ${
                activeTab === 'fortress' ? 'text-[#7E3FF2] bg-white font-bold shadow-2xs' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Shield className="w-3.5 h-3.5 mb-0.5" />
              <span className="text-[9px] font-mono">Fortress</span>
            </button>

            <button
              onClick={() => {
                soundFx.playChime();
                setActiveTab('reel');
              }}
              className={`flex flex-col items-center py-1 rounded-xl transition-all cursor-pointer ${
                activeTab === 'reel' ? 'text-[#7E3FF2] bg-white font-bold shadow-2xs' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5 mb-0.5" />
              <span className="text-[9px] font-mono">ReelGate</span>
            </button>

            <button
              onClick={() => {
                soundFx.playChime();
                setActiveTab('alarm');
              }}
              className={`flex flex-col items-center py-1 rounded-xl transition-all cursor-pointer ${
                activeTab === 'alarm' ? 'text-amber-600 bg-white font-bold shadow-2xs' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Bell className="w-3.5 h-3.5 mb-0.5" />
              <span className="text-[9px] font-mono">Alarm</span>
            </button>

            <button
              onClick={() => {
                soundFx.playChime();
                setActiveTab('vault');
              }}
              className={`flex flex-col items-center py-1 rounded-xl transition-all cursor-pointer ${
                activeTab === 'vault' ? 'text-slate-900 bg-white font-bold shadow-2xs' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Lock className="w-3.5 h-3.5 mb-0.5" />
              <span className="text-[9px] font-mono">Vault</span>
            </button>
          </div>

          <div className="py-1 flex justify-center bg-[#FAF7FF]">
            <div className="w-20 h-1 rounded-full bg-slate-300" />
          </div>

          {/* Friction Modal */}
          {showFrictionModal && (
            <div className="absolute inset-0 z-30 bg-white/98 backdrop-blur-md p-5 flex flex-col justify-between text-center animate-fadeIn">
              <div className="pt-6">
                <div className="w-12 h-12 mx-auto rounded-full bg-purple-50 border border-purple-200 flex items-center justify-center text-[#7E3FF2] mb-2">
                  <Flame className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-extrabold text-slate-900">Dopamine Limit Reached</h4>
                <p className="text-[11px] text-slate-600 mt-1">
                  You have watched {reelLimit} short-form reels today.
                </p>
                <div className="mt-3 p-3 rounded-2xl bg-[#FAF8FF] border border-purple-100 text-[11px] text-slate-700">
                  <div className="text-[9px] uppercase font-mono text-[#7E3FF2] font-bold mb-1">Mindful Interruption</div>
                  Take 3 deep breaths before returning to your true mission.
                </div>
              </div>

              <div className="space-y-2 pb-4">
                {frictionSeconds > 0 ? (
                  <div className="py-2 rounded-xl bg-slate-100 text-xs font-mono font-bold text-slate-600 border border-slate-200">
                    Friction Gate Active ({frictionSeconds}s)
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setShowFrictionModal(false);
                      setReelCount(0);
                    }}
                    className="w-full py-2.5 rounded-xl bg-[#7E3FF2] text-white font-bold text-xs cursor-pointer"
                  >
                    Close Feeds & Reclaim My Time
                  </button>
                )}
                
                <button
                  onClick={() => setShowFrictionModal(false)}
                  className="text-[10px] text-slate-500 hover:text-slate-800 underline cursor-pointer"
                >
                  Dismiss for 5 minutes
                </button>
              </div>
            </div>
          )}

          {/* Alarm Modal */}
          {isAlarmModalOpen && (
            <div className="absolute inset-0 z-40 bg-white p-5 flex flex-col justify-between text-center animate-fadeIn border-2 border-amber-400 shadow-2xl">
              <div className="pt-5">
                <div className="w-14 h-14 mx-auto rounded-full bg-amber-100 border-2 border-amber-400 flex items-center justify-center text-amber-700 mb-2">
                  <Bell className="w-7 h-7 fill-current" />
                </div>
                <div className="text-[10px] font-mono text-amber-800 uppercase tracking-widest font-extrabold">
                  TaskAlarm Wake Lock
                </div>
                <h3 className="text-base font-extrabold text-slate-900 mt-1">Deep Work Sprint</h3>
                <p className="text-[11px] text-slate-600 mt-0.5">FocusCrew v1.0.0 Production</p>

                <div className="mt-3 flex items-center justify-center gap-2">
                  <button
                    onClick={() => {
                      soundFx.toggleBuzzer((active) => setIsBuzzerActive(active));
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold border ${
                      isBuzzerActive 
                        ? 'bg-amber-500 text-slate-950 border-amber-600 shadow' 
                        : 'bg-slate-100 text-slate-700 border-slate-300'
                    }`}
                  >
                    {isBuzzerActive ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                    <span>{isBuzzerActive ? 'Buzzer Ringing (Sound ON)' : 'Buzzer Muted'}</span>
                  </button>
                </div>

                <div className="mt-4 p-3 rounded-2xl bg-amber-50/70 border border-amber-200 text-left">
                  <div className="text-[10px] font-mono text-amber-900 font-bold uppercase">Wake Challenge (Anti-Snooze)</div>
                  <div className="text-xs text-slate-700 font-medium mt-1">Solve to prove alertness:</div>
                  <div className="text-sm font-mono font-bold text-slate-900 my-1">24 + 18 = ?</div>
                  <div className="flex gap-2 mt-1.5">
                    <input
                      type="text"
                      placeholder="Answer"
                      value={mathAnswer}
                      onChange={(e) => setMathAnswer(e.target.value)}
                      className="w-20 px-2 py-1 rounded-lg bg-white border border-slate-300 text-xs font-mono text-slate-900 focus:outline-none focus:border-amber-500"
                    />
                    <button
                      onClick={dismissAlarm}
                      className="px-3 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg font-sans cursor-pointer shadow-sm"
                    >
                      Verify & Dismiss
                    </button>
                  </div>
                </div>
              </div>

              <div className="pb-3">
                <button
                  onClick={cancelAlarmModal}
                  className="text-[10px] text-slate-500 hover:text-slate-800 underline cursor-pointer"
                >
                  Emergency Close Test Modal
                </button>
              </div>
            </div>
          )}

        </div>
      </div>

    </div>
  );
};
