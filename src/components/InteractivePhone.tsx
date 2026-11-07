import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  ShieldCheck, 
  Smartphone, 
  Search, 
  Lock, 
  Unlock, 
  Wifi, 
  Battery, 
  AlertTriangle, 
  CheckCircle2, 
  Flame, 
  Zap, 
  Eye
} from 'lucide-react';

type ActiveTab = 'fortress' | 'reel' | 'safesearch' | 'vault';

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
  const [isSwiping, setIsSwiping] = useState(false);

  // SafeSearch State
  const [searchTested, setSearchTested] = useState(false);

  // Freedom Vault State
  const [vaultPin, setVaultPin] = useState('');
  const [isVaultLocked, setIsVaultLocked] = useState(true);
  const [emergencyCountdown, setEmergencyCountdown] = useState<number | null>(null);

  // Live Clock
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

  const simulateThreat = () => {
    const mockThreats = [
      'tracker.nsfw-network.xxx',
      'api.adult-stream-cdn.com',
      'popup.malicious-redirect.net',
      'ad-tracker.dopamine-loop.io'
    ];
    const picked = mockThreats[Math.floor(Math.random() * mockThreats.length)];
    setBlockedQueriesCount(prev => prev + 1);
    setLastBlockedDomain(picked);
    setTimeout(() => setLastBlockedDomain(null), 3500);
  };

  const handleNextReel = () => {
    setIsSwiping(true);
    setTimeout(() => {
      setIsSwiping(false);
      const next = reelCount + 1;
      setReelCount(next);
      if (next >= reelLimit) {
        setShowFrictionModal(true);
        setFrictionSeconds(5);
      }
    }, 200);
  };

  const handleSafeSearchTest = () => {
    setSearchTested(true);
    setTimeout(() => setSearchTested(false), 3000);
  };

  return (
    <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[340px] select-none text-left">
      
      {/* Soft Ambient Shadow */}
      <div className="absolute -inset-3 bg-[#7E3FF2]/10 rounded-[52px] blur-xl opacity-75 pointer-events-none" />

      {/* Titanium White Hardware Bezel */}
      <div className="relative rounded-[44px] p-2.5 bg-gradient-to-b from-[#EDE9FE] via-[#F3E8FF] to-[#EDE9FE] border-2 border-purple-200/80 shadow-xl">
        
        {/* Hardware Buttons */}
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
              <div className="w-6 h-6 rounded-md overflow-hidden border border-purple-200 bg-white p-0.5 shadow-2xs">
                <img src="/app-icon-round.png" alt="Icon" className="w-full h-full object-cover rounded" />
              </div>
              <span className="text-xs font-extrabold text-slate-900 tracking-tight">FocusCrew</span>
            </div>
            
            <div className="flex items-center gap-1.5 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-mono text-emerald-700 font-bold uppercase">Shield On</span>
            </div>
          </div>

          {/* Main Content Area */}
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
                        <div className="text-xs font-bold text-slate-900">Titan Blocker</div>
                        <div className="text-[10px] font-mono text-slate-500">System DNS Layer</div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => {
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
                      <div className="text-xs font-extrabold text-emerald-600 mt-0.5">Forced On</div>
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
                    <span>LOOPBACK SOCKET</span>
                    <span className="text-slate-900 font-bold">10.0.0.2:53 (TUN)</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600 font-mono">
                    <span>REMOTE TRAFFIC</span>
                    <span className="text-emerald-700 font-bold">0 BYTES (NO SERVERS)</span>
                  </div>
                </div>

                <button
                  onClick={simulateThreat}
                  className="w-full py-2.5 px-3 rounded-xl bg-[#7E3FF2] hover:bg-[#6C2FE0] text-xs font-bold text-white flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm active:scale-95"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-300" />
                  <span>Test Adult Domain Block</span>
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
                        <div className="text-xs font-bold text-slate-900">Reel Counter</div>
                        <div className="text-[10px] text-slate-500">Instagram & Shorts Gate</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#F5F0FF] text-[#7E3FF2] border border-purple-200">
                      Active
                    </span>
                  </div>

                  <div className="mt-3 space-y-1.5">
                    <div className="flex justify-between text-[11px] font-mono">
                      <span className="text-slate-600">Reels Swiped Today</span>
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

                {/* Monitored Apps */}
                <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 text-[10px]">
                  <div className="text-[9px] font-mono uppercase text-slate-500 tracking-wider font-semibold">
                    Monitored Feeds
                  </div>
                  <div className="flex items-center justify-between text-slate-700 py-1 border-b border-slate-200/60">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                      Instagram Reels
                    </span>
                    <span className="text-slate-500 font-mono text-[9px]">Monitored</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-700 py-1 border-b border-slate-200/60">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      YouTube Shorts
                    </span>
                    <span className="text-slate-500 font-mono text-[9px]">Monitored</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-700 py-1">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
                      TikTok & Feeds
                    </span>
                    <span className="text-slate-500 font-mono text-[9px]">Monitored</span>
                  </div>
                </div>

                <button
                  onClick={handleNextReel}
                  className={`w-full py-2.5 px-3 rounded-xl bg-[#7E3FF2] hover:bg-[#6C2FE0] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer ${
                    isSwiping ? 'scale-95 bg-purple-800' : ''
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Simulate Next Reel Swipe (+1)</span>
                </button>
              </div>
            )}

            {/* TAB 3: SAFESEARCH */}
            {activeTab === 'safesearch' && (
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-emerald-600 text-white font-bold">
                        <Search className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">SafeSearch VIP</div>
                        <div className="text-[10px] text-slate-500">Google • Bing • YouTube</div>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                      STRICT LOCKED
                    </span>
                  </div>
                  <div className="text-[10px] font-mono text-emerald-900 font-semibold mt-2 bg-emerald-100/70 p-2 rounded-lg border border-emerald-200">
                    DNS Rewrite: forcesafesearch.google.com
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="font-semibold text-slate-900">Google Images & Web</span>
                    </div>
                    <span className="text-[9px] font-mono text-emerald-700 font-bold">LOCKED</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="font-semibold text-slate-900">YouTube Restricted Mode</span>
                    </div>
                    <span className="text-[9px] font-mono text-emerald-700 font-bold">LOCKED</span>
                  </div>
                </div>

                <button
                  onClick={handleSafeSearchTest}
                  className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all cursor-pointer"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Verify SafeSearch Filtering</span>
                </button>

                {searchTested && (
                  <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-900 font-mono text-[10px] font-bold border border-emerald-300 text-center animate-fadeIn">
                    ✓ VIP REWRITE CONFIRMED: 0 EXPLICIT RESULTS
                  </div>
                )}
              </div>
            )}

            {/* TAB 4: VAULT */}
            {activeTab === 'vault' && (
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-[#FAF8FF] border border-purple-100 text-center">
                  <div className="w-9 h-9 mx-auto rounded-full bg-white border border-purple-200 shadow-2xs flex items-center justify-center mb-1.5">
                    {isVaultLocked ? <Lock className="w-4 h-4 text-[#7E3FF2]" /> : <Unlock className="w-4 h-4 text-emerald-600" />}
                  </div>
                  <div className="text-xs font-bold text-slate-900">Freedom Vault Master PIN</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">
                    {isVaultLocked ? '15-minute emergency delay armed' : 'Vault Temporarily Open'}
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
                      Emergency Delay: {emergencyCountdown}s left. Take a breath and reflect.
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

          {/* Bottom Tabs Inside Phone */}
          <div className="p-1.5 border-t border-purple-100 bg-[#FAF7FF] grid grid-cols-4 gap-1 z-20">
            <button
              onClick={() => {
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
                setActiveTab('safesearch');
              }}
              className={`flex flex-col items-center py-1 rounded-xl transition-all cursor-pointer ${
                activeTab === 'safesearch' ? 'text-emerald-700 bg-white font-bold shadow-2xs' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Search className="w-3.5 h-3.5 mb-0.5" />
              <span className="text-[9px] font-mono">SafeSearch</span>
            </button>

            <button
              onClick={() => {
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

          {/* Friction Modal (Breathing Screen) */}
          {showFrictionModal && (
            <div className="absolute inset-0 z-30 bg-white/98 backdrop-blur-md p-5 flex flex-col justify-between text-center animate-fadeIn">
              <div className="pt-6">
                {/* Expanding Breathing Circle Animation */}
                <div className="relative w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-purple-200 radar-ring" />
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-[#7E3FF2] relative z-10">
                    <Flame className="w-6 h-6" />
                  </div>
                </div>

                <h4 className="text-sm font-extrabold text-slate-900">Reel Limit Hit</h4>
                <p className="text-[11px] text-slate-600 mt-1">
                  You have watched {reelLimit} reels today. Take 3 slow breaths.
                </p>
                <div className="mt-3 p-3 rounded-2xl bg-[#FAF8FF] border border-purple-100 text-[11px] text-slate-700">
                  <div className="text-[9px] uppercase font-mono text-[#7E3FF2] font-bold mb-1">
                    Breathe In ... Breathe Out
                  </div>
                  Are you scrolling with intention, or is the algorithm driving?
                </div>
              </div>

              <div className="space-y-2 pb-4">
                {frictionSeconds > 0 ? (
                  <div className="py-2 rounded-xl bg-slate-100 text-xs font-mono font-bold text-slate-600 border border-slate-200">
                    Pause Active: {frictionSeconds}s
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setShowFrictionModal(false);
                      setReelCount(0);
                    }}
                    className="w-full py-2.5 rounded-xl bg-[#7E3FF2] text-white font-bold text-xs cursor-pointer shadow-sm"
                  >
                    Close Feeds & Get Back to Work
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



        </div>
      </div>

    </div>
  );
};
