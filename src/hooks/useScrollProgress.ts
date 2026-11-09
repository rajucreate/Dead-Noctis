import { useEffect, useRef, useState, useCallback } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

export interface ScrollProgressState {
  progress: number; // 0.0 to 1.0 (smoothly lerped)
  rawProgress: number; // 0.0 to 1.0 (direct scroll)
  activeSection: string;
  scrollY: number;
}

const SECTION_IDS = ['home', 'about', 'events', 'rules', 'faq', 'register'];

// Global active-section listeners so Navbar never re-renders on continuous camera lerp ticks
const activeSectionListeners = new Set<(section: string) => void>();
let globalActiveSection = 'home';

function notifyActiveSection(section: string) {
  if (globalActiveSection === section) return;
  globalActiveSection = section;
  activeSectionListeners.forEach((fn) => fn(section));
}

/**
 * Dedicated, zero-re-render hook for Navbar and navigation components.
 * Only triggers a React state update when the active section ID actually changes!
 */
export function useActiveSection(): string {
  const [section, setSection] = useState(globalActiveSection);

  useEffect(() => {
    const listener = (newSection: string) => setSection(newSection);
    activeSectionListeners.add(listener);
    return () => {
      activeSectionListeners.delete(listener);
    };
  }, []);

  return section;
}

/**
 * High-performance scroll hook that calculates normalized page progress and active sections.
 * Uses cached section offsets to prevent forced layout reflows (getBoundingClientRect) on scroll.
 * Pauses rAF loop when the tab is hidden.
 */
export function useScrollProgress(): ScrollProgressState {
  const prefersReduced = usePrefersReducedMotion();
  const [state, setState] = useState<ScrollProgressState>({
    progress: 0,
    rawProgress: 0,
    activeSection: 'home',
    scrollY: 0,
  });

  const targetProgressRef = useRef<number>(0);
  const currentProgressRef = useRef<number>(0);
  const scrollYRef = useRef<number>(0);
  const activeSectionRef = useRef<string>('home');
  const isRunningRef = useRef<boolean>(false);
  const rafId = useRef<number | null>(null);

  // Cached section top offsets in page pixels, refreshed on resize/orientation
  const sectionTopsRef = useRef<{ id: string; top: number }[]>([]);

  const measureSections = useCallback(() => {
    const scrollY = window.scrollY || window.pageYOffset || 0;
    sectionTopsRef.current = SECTION_IDS.map((id) => {
      const el = document.getElementById(id);
      if (!el) return { id, top: 0 };
      const rect = el.getBoundingClientRect();
      return { id, top: rect.top + scrollY };
    });
  }, []);

  useEffect(() => {
    measureSections();

    const computeActiveSection = (scrollY: number) => {
      const viewportMid = scrollY + window.innerHeight * 0.35;
      let currentSection = 'home';
      const tops = sectionTopsRef.current;

      for (let i = tops.length - 1; i >= 0; i--) {
        const item = tops[i];
        if (item.top > 0 && viewportMid >= item.top - 60) {
          currentSection = item.id;
          break;
        }
      }

      if (activeSectionRef.current !== currentSection) {
        activeSectionRef.current = currentSection;
        notifyActiveSection(currentSection);
      }
      return currentSection;
    };

    const computeScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const rawProgress = docHeight > 0 ? Math.min(Math.max(scrollY / docHeight, 0), 1) : 0;

      scrollYRef.current = scrollY;
      targetProgressRef.current = rawProgress;
      computeActiveSection(scrollY);
    };

    const LERP_FACTOR = prefersReduced ? 1.0 : 0.08;
    const EPSILON = 0.0005;

    const loop = () => {
      if (document.hidden) {
        isRunningRef.current = false;
        rafId.current = null;
        return;
      }

      const target = targetProgressRef.current;
      const current = currentProgressRef.current;
      const diff = target - current;

      if (Math.abs(diff) > EPSILON) {
        currentProgressRef.current += diff * LERP_FACTOR;
        setState((prev) => ({
          ...prev,
          progress: currentProgressRef.current,
          rawProgress: target,
          activeSection: activeSectionRef.current,
          scrollY: scrollYRef.current,
        }));
        rafId.current = requestAnimationFrame(loop);
      } else {
        currentProgressRef.current = target;
        setState((prev) => ({
          ...prev,
          progress: target,
          rawProgress: target,
          activeSection: activeSectionRef.current,
          scrollY: scrollYRef.current,
        }));
        isRunningRef.current = false;
        rafId.current = null;
      }
    };

    const onScroll = () => {
      computeScroll();
      if (!isRunningRef.current && !document.hidden) {
        isRunningRef.current = true;
        rafId.current = requestAnimationFrame(loop);
      }
    };

    const onResize = () => {
      measureSections();
      computeScroll();
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        if (rafId.current !== null) {
          cancelAnimationFrame(rafId.current);
          rafId.current = null;
          isRunningRef.current = false;
        }
      } else {
        // Re-align on return
        computeScroll();
        if (Math.abs(targetProgressRef.current - currentProgressRef.current) > EPSILON) {
          isRunningRef.current = true;
          rafId.current = requestAnimationFrame(loop);
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange);

    // Initial check
    computeScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [measureSections, prefersReduced]);

  return state;
}
