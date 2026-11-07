import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;

export function initSmoothScroll(): () => void {
  // Only init once in browser environment
  if (typeof window === 'undefined') return () => {};

  if (lenisInstance) {
    lenisInstance.destroy();
  }

  lenisInstance = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  // Sync GSAP ScrollTrigger with Lenis
  lenisInstance.on('scroll', ScrollTrigger.update);

  const tickerCallback = (time: number) => {
    lenisInstance?.raf(time * 1000);
  };

  gsap.ticker.add(tickerCallback);
  gsap.ticker.lagSmoothing(0);

  // Return cleanup
  return () => {
    gsap.ticker.remove(tickerCallback);
    lenisInstance?.destroy();
    lenisInstance = null;
  };
}

export function animateOnScroll(selector: string, vars: gsap.TweenVars) {
  if (typeof window === 'undefined') return;
  
  return gsap.from(selector, {
    scrollTrigger: {
      trigger: selector,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
    ...vars,
  });
}

