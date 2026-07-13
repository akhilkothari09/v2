import Lenis from 'lenis';
import { useEffect } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion.js';

export function useLenis(options = {}) {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || options.enabled === false) {
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      ...options,
    });

    let animationFrameId = 0;

    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, [options, prefersReducedMotion]);
}
