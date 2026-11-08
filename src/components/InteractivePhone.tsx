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
      
      {/* Precision Device Chassis */}
      <div className="relative rounded-[40px] p-2 bg-[#1A1D1A] border border-[#2E332E] shadow-xl">
        
        {/* Screen Container */}
        <div className="relative w-full h-[580px] rounded-[32px] bg-white border border-[#E5E2DA] overflow-hidden flex flex-col justify-between text-[#1A1D1A] font-sans">
          
          {/* Status Bar */}
          <div className="pt-2 px-4 pb-1 flex items-center justify-between text-[11px] font-mono text-[#5E665F] bg-white z-20">
            <span className="font-semibold text-[#202621] tracking-tight">{currentTime}</span>
            
            {/* Camera Punch */}
            <div className="w-3.5 h-3.5 rounded-full bg-[#121413] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#202621]" />
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-bold text-[#284B39] bg-[#EAF1EC] px-1 py-0.2 rounded border border-[#C5DAC9]">
                DNS
              </span>
              <Wifi className="w-3 h-3 text-[#5E665F]" />
              <Battery className="w-3.5 h-3.5 text-[#284B39]" />
            </div>
          </div>

          {/* App Header Inside Phone */}
          <div className="px-4 py-2.5 flex items-center justify-between border-b border-[#E5DFD3] bg-[#F2EEE5]">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md overflow-hidden border border-[#D8D1C3] bg-[#121413] p-0.5 shadow-2xs">
                <img src="/app-icon-round.png" alt="Icon" className="w-full h-full object-cover rounded" />
              </div>
              <span className="text-xs font-extrabold text-[#202621] tracking-tight">FocusCrew</span>
            </div>
            
            <div className="flex items-center gap-1.5 bg-[#EAF1EC] px-2 py-0.5 rounded-full border border-[#C5DAC9]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#284B39]" />
              <span className="text-[10px] font-mono text-[#284B39] font-bold uppercase">Shield On</span>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 overflow-y-auto px-3.5 py-3 relative bg-white">
            
            {/* TAB 1: FORTRESS */}
            {activeTab === 'fortress' && (
              <div className="space-y-3">
                <div className={`p-3.5 rounded-2xl border transition-all duration-200 ${
                  isShieldActive 
                    ? 'bg-[#FBF9F5] border-[#E5DFD3] shadow-xs' 
                    : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`p-2 rounded-xl ${isShieldActive ? 'bg-[#284B39] text-white' : 'bg-slate-200 text-slate-500'}`}>
                        {isShieldActive ? <ShieldCheck className="w-4 h-4" /> : <Shield className="w-4 h-4" />}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#202621]">Titan Blocker</div>
                        <div className="text-[10px] font-mono text-[#5E665F]">Local Kernel Layer</div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => {
                        setIsShieldActive(!isShieldActive);
                      }}
                      className={`relative w-11 h-6 rounded-full transition-colors cursor-pointer ${
                        isShieldActive ? 'bg-[#284B39]' : 'bg-slate-300'
                      }`}
                    >
                      <span className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform shadow ${
                        isShieldActive ? 'translate-x-5' : 'translate-x-0'
                      }`} />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-3 pt-2.5 border-t border-[#E5DFD3]">
                    <div className="bg-white p-2 rounded-xl border border-[#E5DFD3] shadow-2xs">
                      <div className="text-[9px] font-mono uppercase text-[#5E665F]">Blocked Today</div>
                      <div className="text-sm font-extrabold text-[#A37A3E] font-mono mt-0.5">
                        {blockedQueriesCount.toLocaleString()}
                      </div>
                    </div>
                    <div className="bg-white p-2 rounded-xl border border-[#E5DFD3] shadow-2xs">
                      <div className="text-[9px] font-mono uppercase text-[#5E665F]">SafeSearch</div>
                      <div className="text-xs font-extrabold text-[#284B39] mt-0.5">Forced On</div>
                    </div>
                  </div>
                </div>

                {lastBlockedDomain && (
                  <div className="p-2 rounded-xl bg-[#FCE8E8] border border-[#E8BCBC] text-[#8F3B3B] text-[10px] font-mono flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-[#8F3B3B] shrink-0" />
                    <div className="truncate">
                      <span className="font-bold">BLOCKED:</span> {lastBlockedDomain}
                    </div>
                  </div>
                )}

                <div className="p-2.5 rounded-2xl bg-[#FBF9F5] border border-[#E5DFD3] space-y-1.5 text-[10px]">
                  <div className="flex items-center justify-between text-[#5E665F] font-mono">
                    <span>SECURITY SHIELD</span>
                    <span className="text-[#202621] font-bold">AUTONOMOUS ON-DEVICE</span>
                  </div>
                  <div className="flex items-center justify-between text-[#5E665F] font-mono">
                    <span>REMOTE TRAFFIC</span>
                    <span className="text-[#284B39] font-bold">0 BYTES (NO SERVERS)</span>
                  </div>
                </div>

                <button
                  onClick={simulateThreat}
                  className="w-full py-2.5 px-3 rounded-xl bg-[#A37A3E] hover:bg-[#8A642E] text-xs font-bold text-white flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm active:scale-95"
                >
                  <Zap className="w-3.5 h-3.5 text-[#F5EAD8]" />
                  <span>Test Adult Domain Block</span>
                </button>
              </div>
            )}

            {/* TAB 2: REEL */}
            {activeTab === 'reel' && (
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-[#FBF9F5] border border-[#E5DFD3]">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-[#A37A3E] text-white">
                        <Smartphone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#202621]">Reel Counter</div>
                        <div className="text-[10px] text-[#5E665F]">Instagram & Shorts Gate</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#F5EAD8] text-[#A37A3E] border border-[#E2CEB2]">
                      Active
                    </span>
                  </div>

                  <div className="mt-3 space-y-1.5">
                    <div className="flex justify-between text-[11px] font-mono">
                      <span className="text-[#5E665F]">Reels Swiped Today</span>
                      <span className={`font-bold ${reelCount >= reelLimit ? 'text-[#8F3B3B]' : 'text-[#202621]'}`}>
                        {reelCount} / {reelLimit} max
                      </span>
                    </div>
                    <div className="w-full h-2 bg-[#F2EEE5] rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-300 ${
                          reelCount >= reelLimit 
                            ? 'bg-[#8F3B3B]' 
                            : 'bg-[#A37A3E]'
                        }`}
                        style={{ width: `${Math.min((reelCount / reelLimit) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Monitored Apps */}
                <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 text-[10px]">
                  <div className="text-[9px] font-mono uppercase text-[#5E665F] tracking-wider font-semibold">
                    Monitored Feeds
                  </div>
                  <div className="flex items-center justify-between text-[#202621] py-1 border-b border-slate-200/60">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                      Instagram Reels
                    </span>
                    <span className="text-[#5E665F] font-mono text-[9px]">Monitored</span>
                  </div>
                  <div className="flex items-center justify-between text-[#202621] py-1 border-b border-slate-200/60">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      YouTube Shorts
                    </span>
                    <span className="text-[#5E665F] font-mono text-[9px]">Monitored</span>
                  </div>
                  <div className="flex items-center justify-between text-[#202621] py-1">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#284B39]" />
                      TikTok & Feeds
                    </span>
                    <span className="text-[#5E665F] font-mono text-[9px]">Monitored</span>
                  </div>
                </div>

                <button
                  onClick={handleNextReel}
                  className={`w-full py-2.5 px-3 rounded-xl bg-[#A37A3E] hover:bg-[#8A642E] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer ${
                    isSwiping ? 'scale-95 bg-[#8A642E]' : ''
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
                <div className="p-3.5 rounded-2xl bg-[#EAF1EC] border border-[#C5DAC9]">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-[#284B39] text-white font-bold">
                        <Search className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#202621]">SafeSearch VIP</div>
                        <div className="text-[10px] text-[#5E665F]">Google • Bing • YouTube</div>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-white text-[#284B39] border border-[#C5DAC9]">
                      STRICT LOCKED
                    </span>
                  </div>
                  <div className="text-[10px] font-mono text-[#284B39] font-semibold mt-2 bg-white/80 p-2 rounded-lg border border-[#C5DAC9]">
                    DNS Rewrite: forcesafesearch.google.com
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#284B39] shrink-0" />
                      <span className="font-semibold text-[#202621]">Google Images & Web</span>
                    </div>
                    <span className="text-[9px] font-mono text-[#284B39] font-bold">LOCKED</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#284B39] shrink-0" />
                      <span className="font-semibold text-[#202621]">YouTube Restricted Mode</span>
                    </div>
                    <span className="text-[9px] font-mono text-[#284B39] font-bold">LOCKED</span>
                  </div>
                </div>

                <button
                  onClick={handleSafeSearchTest}
                  className="w-full py-2.5 px-3 rounded-xl bg-[#284B39] hover:bg-[#1E382A] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all cursor-pointer"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Verify SafeSearch Filtering</span>
                </button>

                {searchTested && (
                  <div className="p-2.5 rounded-xl bg-[#EAF1EC] text-[#284B39] font-mono text-[10px] font-bold border border-[#C5DAC9] text-center animate-fadeIn">
                    ✓ VIP REWRITE CONFIRMED: 0 EXPLICIT RESULTS
                  </div>
                )}
              </div>
            )}

            {/* TAB 4: VAULT */}
            {activeTab === 'vault' && (
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-[#FBF9F5] border border-[#E5DFD3] text-center">
                  <div className="w-9 h-9 mx-auto rounded-full bg-white border border-[#D8D1C3] shadow-2xs flex items-center justify-center mb-1.5">
                    {isVaultLocked ? <Lock className="w-4 h-4 text-[#A37A3E]" /> : <Unlock className="w-4 h-4 text-[#284B39]" />}
                  </div>
                  <div className="text-xs font-bold text-[#202621]">Freedom Vault Master PIN</div>
                  <div className="text-[10px] text-[#5E665F] mt-0.5">
                    {isVaultLocked ? '15-minute emergency delay armed' : 'Vault Temporarily Open'}
                  </div>

                  <div className="flex justify-center gap-2.5 my-2.5">
                    {[0, 1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full border transition-all ${
                          vaultPin.length > i 
                            ? 'bg-[#A37A3E] border-[#A37A3E] shadow-2xs' 
                            : 'border-slate-300 bg-white'
                        }`}
                      />
                    ))}
                  </div>

                  {emergencyCountdown !== null ? (
                    <div className="p-2 rounded-xl bg-[#F5EAD8] border border-[#E2CEB2] text-[10px] font-mono text-[#8A642E]">
                      Emergency Delay: {emergencyCountdown}s left. Take a breath and reflect.
                    </div>
                  ) : isVaultLocked ? (
                    <button
                      onClick={() => setEmergencyCountdown(15)}
                      className="text-[10px] font-mono text-[#A37A3E] hover:text-[#8A642E] underline cursor-pointer"
                    >
                      Request Emergency Unlock (15m Delay)
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setIsVaultLocked(true);
                        setVaultPin('');
                      }}
                      className="text-[10px] font-mono text-[#A37A3E] hover:underline cursor-pointer"
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
                      className="py-1.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200/80 font-mono text-xs font-semibold text-slate-800 shadow-2xs active:bg-[#A37A3E] active:text-white transition-colors cursor-pointer"
                    >
                      {key}
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Bottom Tabs Inside Phone */}
          <div className="p-1.5 border-t border-[#E5DFD3] bg-[#F2EEE5] grid grid-cols-4 gap-1 z-20">
            <button
              onClick={() => {
                setActiveTab('fortress');
              }}
              className={`flex flex-col items-center py-1 rounded-xl transition-all cursor-pointer ${
                activeTab === 'fortress' ? 'text-[#284B39] bg-white font-bold shadow-2xs' : 'text-[#5E665F] hover:text-[#202621]'
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
                activeTab === 'reel' ? 'text-[#A37A3E] bg-white font-bold shadow-2xs' : 'text-[#5E665F] hover:text-[#202621]'
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
                activeTab === 'safesearch' ? 'text-[#284B39] bg-white font-bold shadow-2xs' : 'text-[#5E665F] hover:text-[#202621]'
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
                activeTab === 'vault' ? 'text-[#A37A3E] bg-white font-bold shadow-2xs' : 'text-[#5E665F] hover:text-[#202621]'
              }`}
            >
              <Lock className="w-3.5 h-3.5 mb-0.5" />
              <span className="text-[9px] font-mono">Vault</span>
            </button>
          </div>

          <div className="py-1 flex justify-center bg-[#F2EEE5]">
            <div className="w-20 h-1 rounded-full bg-[#D8D1C3]" />
          </div>

          {/* Friction Modal (Breathing Screen) */}
          {showFrictionModal && (
            <div className="absolute inset-0 z-30 bg-white/98 backdrop-blur-md p-5 flex flex-col justify-between text-center animate-fadeIn">
              <div className="pt-6">
                {/* Expanding Breathing Circle Animation */}
                <div className="relative w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-[#F5EAD8] radar-ring" />
                  <div className="w-12 h-12 rounded-full bg-[#F5EAD8] flex items-center justify-center text-[#A37A3E] relative z-10 border border-[#E2CEB2]">
                    <Flame className="w-6 h-6" />
                  </div>
                </div>

                <h4 className="text-sm font-extrabold text-[#202621]">Reel Limit Hit</h4>
                <p className="text-[11px] text-[#5E665F] mt-1">
                  You have watched {reelLimit} reels today. Take 3 slow breaths.
                </p>
                <div className="mt-3 p-3 rounded-2xl bg-[#FBF9F5] border border-[#E5DFD3] text-[11px] text-[#202621]">
                  <div className="text-[9px] uppercase font-mono text-[#A37A3E] font-bold mb-1">
                    Breathe In ... Breathe Out
                  </div>
                  Are you scrolling with intention, or is the algorithm driving?
                </div>
              </div>

              <div className="space-y-2 pb-4">
                {frictionSeconds > 0 ? (
                  <div className="py-2 rounded-xl bg-[#F2EEE5] text-xs font-mono font-bold text-[#5E665F] border border-[#E5DFD3]">
                    Pause Active: {frictionSeconds}s
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setShowFrictionModal(false);
                      setReelCount(0);
                    }}
                    className="w-full py-2.5 rounded-xl bg-[#A37A3E] text-white font-bold text-xs cursor-pointer shadow-sm hover:bg-[#8A642E]"
                  >
                    Close Feeds & Get Back to Work
                  </button>
                )}
                
                <button
                  onClick={() => setShowFrictionModal(false)}
                  className="text-[10px] text-[#5E665F] hover:text-[#202621] underline cursor-pointer"
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
