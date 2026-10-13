import React, { useEffect, createContext, useContext, useRef } from 'react';
import Lenis from 'lenis';

interface ScrollToOptions {
  offset?: number;
  immediate?: boolean;
  duration?: number;
  easing?: (t: number) => number;
}

interface LenisContextValue {
  lenis: Lenis | null;
  scrollTo: (target: number | string | HTMLElement, options?: ScrollToOptions) => void;
}

const LenisContext = createContext<LenisContextValue>({
  lenis: null,
  scrollTo: () => {},
});

export const useLenis = () => useContext(LenisContext);

interface SmoothScrollProps {
  children: React.ReactNode;
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Initialize Lenis with smooth momentum physics
    const lenis = new Lenis({
      duration: 1.35,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential deceleration
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.88, // Calibrated wheel multiplier so scroll pace allows animations to be admired
      touchMultiplier: 1.1,
      infinite: false,
      autoRaf: false,
    });

    lenisRef.current = lenis;

    // Bind requestAnimationFrame loop
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Global reference for diagnostics or direct access
    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    // Observe document resize to ensure scroll limits update dynamically
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    if (document.body) {
      resizeObserver.observe(document.body);
    }

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      lenis.destroy();
      lenisRef.current = null;
      delete (window as unknown as { lenis?: Lenis }).lenis;
    };
  }, []);

  const scrollTo = (target: number | string | HTMLElement, options?: ScrollToOptions) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        offset: options?.offset ?? 0,
        immediate: options?.immediate ?? false,
        duration: options?.duration ?? 1.2,
        easing: options?.easing,
      });
    } else if (typeof target === 'number') {
      window.scrollTo({
        top: target,
        behavior: options?.immediate ? 'auto' : 'smooth',
      });
    } else if (typeof target === 'string') {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: options?.immediate ? 'auto' : 'smooth' });
      }
    } else if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: options?.immediate ? 'auto' : 'smooth' });
    }
  };

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current, scrollTo }}>
      {children}
    </LenisContext.Provider>
  );
};
