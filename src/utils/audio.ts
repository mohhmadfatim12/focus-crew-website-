// FocusCrew Synthetic Audio Generator (Web Audio API)
// Recreates the native alarm buzzer & alert tones on-demand without external mp3 dependencies

class SoundSynthesizer {
  private ctx: AudioContext | null = null;
  private isBuzzerPlaying = false;
  private buzzerTimer: number | null = null;

  private getContext(): AudioContext {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  // Tactical Alert Beep (Single clean chime)
  playChime() {
    try {
      const ctx = this.getContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5

      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    } catch {
      // Audio autoplay policy fallback
    }
  }

  // Success / Threat Blocked Confirmation Tone
  playShieldTone() {
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;
      
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now); // A4
      osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
      osc.frequency.setValueAtTime(880, now + 0.16); // A5

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.35);
    } catch {
      // Audio fallback
    }
  }

  // Pulsing Military Alarm Buzzer (Simulates FocusCrew TaskAlarm)
  startTaskAlarmBuzzer(onTick?: (active: boolean) => void) {
    if (this.isBuzzerPlaying) return;
    this.isBuzzerPlaying = true;
    if (onTick) onTick(true);

    const pulse = () => {
      if (!this.isBuzzerPlaying) return;
      try {
        const ctx = this.getContext();
        const now = ctx.currentTime;

        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();

        // Dual dissonant square wave pulse for urgency
        osc1.type = 'sawtooth';
        osc1.frequency.setValueAtTime(820, now);
        
        osc2.type = 'square';
        osc2.frequency.setValueAtTime(826, now);

        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.22);

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(ctx.destination);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 0.24);
        osc2.stop(now + 0.24);
      } catch {
        // Fallback
      }

      this.buzzerTimer = window.setTimeout(pulse, 450);
    };

    pulse();
  }

  stopTaskAlarmBuzzer(onTick?: (active: boolean) => void) {
    this.isBuzzerPlaying = false;
    if (this.buzzerTimer) {
      clearTimeout(this.buzzerTimer);
      this.buzzerTimer = null;
    }
    if (onTick) onTick(false);
  }

  toggleBuzzer(onStateChange?: (active: boolean) => void): boolean {
    if (this.isBuzzerPlaying) {
      this.stopTaskAlarmBuzzer(onStateChange);
      return false;
    } else {
      this.startTaskAlarmBuzzer(onStateChange);
      return true;
    }
  }
}

export const soundFx = new SoundSynthesizer();

