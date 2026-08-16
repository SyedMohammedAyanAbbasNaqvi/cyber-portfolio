import Lenis from "lenis";
import { gsap } from "./gsap";

let lenisInstance: Lenis | null = null;
let updateLenisRaf: ((time: number) => void) | null = null;

export function initLenis(): Lenis {
  if (typeof window === "undefined") return null as unknown as Lenis;
  
  if (lenisInstance) {
    return lenisInstance;
  }

  // Check reduced motion preference
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    return null as unknown as Lenis;
  }

  lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  updateLenisRaf = (time: number) => {
    lenisInstance?.raf(time * 1000);
  };

  gsap.ticker.add(updateLenisRaf);
  gsap.ticker.lagSmoothing(0);

  return lenisInstance;
}

export function destroyLenis() {
  if (updateLenisRaf) {
    gsap.ticker.remove(updateLenisRaf);
    updateLenisRaf = null;
  }
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
}


export function getLenis(): Lenis | null {
  return lenisInstance;
}
