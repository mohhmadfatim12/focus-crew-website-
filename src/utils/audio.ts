// FocusCrew Audio - Completely Silenced (Zero Audio Effects)

class SoundSynthesizer {
  playChime() {
    // Silenced
  }

  playShieldTone() {
    // Silenced
  }

  toggleBuzzer(callback?: (active: boolean) => void) {
    if (callback) callback(false);
  }

  stopTaskAlarmBuzzer(callback?: (active: boolean) => void) {
    if (callback) callback(false);
  }
}

export const soundFx = new SoundSynthesizer();
