import React, { useState, useEffect } from 'react';
import { CheckCircle2, Play, RotateCcw } from 'lucide-react';

export const StopDoomscrollSection: React.FC = () => {
  const [breathingSeconds, setBreathingSeconds] = useState(8);
  const [isBreathingActive, setIsBreathingActive] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);

  useEffect(() => {
    let interval: number;
    if (isBreathingActive && breathingSeconds > 0) {
      interval = window.setTimeout(() => setBreathingSeconds(prev => prev - 1), 1000);
    } else if (breathingSeconds === 0) {
      setIsBreathingActive(false);
      setHasCompleted(true);
    }
    return () => clearTimeout(interval);
  }, [isBreathingActive, breathingSeconds]);

  const startBreathingTest = () => {
    setBreathingSeconds(8);
    setHasCompleted(false);
    setIsBreathingActive(true);
  };

  const resetTest = () => {
    setBreathingSeconds(8);
    setIsBreathingActive(false);
    setHasCompleted(false);
  };

  return (
    <section id="friction-science" className="py-20 md:py-28 bg-[#F7F5F0] border-b border-[#E5E2DA] text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Scientific Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-eyebrow text-[#9E6F28]">
              Behavioral Friction Engineering
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1D1A] tracking-tight leading-tight">
              Why willpower alone fails against short-form video algorithms.
            </h2>

            <div className="space-y-4 text-base text-[#525853] leading-relaxed">
              <p>
                Short-form video feeds operate on variable-ratio dopamine reinforcement schedules—the exact psychological mechanism used by slot machines. Each vertical swipe is a gamble on whether the next 15-second clip will deliver novelty.
              </p>
              <p>
                Within minutes of scrolling, your prefrontal cortex shifts into a passive, semi-automatic state. Trying to "remember" to close the app fails because the conscious self-monitoring circuit is suppressed.
              </p>
              <p>
                FocusCrew’s <strong>8-Second Trance Breaker</strong> restores agency by introducing an unskippable physiological pause. By forcing an intentional breath, your executive brain re-engages and breaks the motor-reflex swipe loop before hours disappear.
              </p>
            </div>

            {/* Factual Core Mechanisms */}
            <div className="pt-4 border-t border-[#E5E2DA] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-white border border-[#E5E2DA]">
                <div className="text-sm font-bold text-[#1A1D1A]">Automated Reflex Interruption</div>
                <p className="text-xs text-[#525853] mt-1 leading-normal">
                  Shifts cognition from automatic motor habit back to deliberate decision-making.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white border border-[#E5E2DA]">
                <div className="text-sm font-bold text-[#1A1D1A]">15-Minute Craving Decay</div>
                <p className="text-xs text-[#525853] mt-1 leading-normal">
                  Chemical dopamine surges peak and subside within 10 to 12 minutes when access is gated.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Tactile 8-Second Simulator */}
          <div className="lg:col-span-5">
            <div className="pro-card p-8 text-center space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E2DA] text-xs font-semibold text-[#525853]">
                <span>TRANCE BREAKER ENGINE</span>
                <span className="text-[#234E37] font-semibold">ACTIVE</span>
              </div>

              {/* Minimalist Breathing Circle */}
              <div className="py-4 flex flex-col items-center justify-center">
                <div className="w-32 h-32 rounded-full border-2 border-[#E5E2DA] bg-[#F7F5F0] flex flex-col items-center justify-center transition-all duration-300">
                  {isBreathingActive ? (
                    <>
                      <span className="text-4xl font-extrabold text-[#9E6F28]">
                        {breathingSeconds}s
                      </span>
                      <span className="text-xs font-semibold text-[#525853] uppercase mt-1">
                        {breathingSeconds > 4 ? 'Inhale...' : 'Exhale...'}
                      </span>
                    </>
                  ) : hasCompleted ? (
                    <>
                      <CheckCircle2 className="w-8 h-8 text-[#234E37] mb-1" />
                      <span className="text-xs font-bold text-[#234E37]">Mind Awake</span>
                    </>
                  ) : (
                    <>
                      <span className="text-3xl font-extrabold text-[#1A1D1A]">8s</span>
                      <span className="text-xs font-semibold text-[#7E857F] uppercase mt-1">Pause Gate</span>
                    </>
                  )}
                </div>
              </div>

              {/* Status Explanation */}
              <p className="text-sm text-[#525853] leading-relaxed max-w-xs mx-auto">
                {isBreathingActive 
                  ? 'Focus on your breath. Notice how the compulsion to scroll immediately drops.'
                  : hasCompleted
                    ? 'Agency restored. You can now consciously decide whether to close the app or return to work.'
                    : 'Simulate the exact 8-second friction gate that appears when reaching your daily reel allowance.'}
              </p>

              {/* Actions */}
              <div className="flex items-center justify-center gap-2">
                {!isBreathingActive ? (
                  <button
                    onClick={startBreathingTest}
                    className="btn-accent text-xs w-full"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>{hasCompleted ? 'Run Simulation Again' : 'Test 8-Second Pause'}</span>
                  </button>
                ) : (
                  <button
                    onClick={resetTest}
                    className="btn-secondary text-xs w-full"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset</span>
                  </button>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default StopDoomscrollSection;
