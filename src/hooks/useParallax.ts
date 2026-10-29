import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';
import { siteConfig } from '@/config/site';

export interface ParallaxOffsets {
  header: { x: number; y: number };
  background: { x: number; y: number };
  character: { x: number; y: number };
  portal: { x: number; y: number };
}

const ZERO_OFFSETS: ParallaxOffsets = {
  header: { x: 0, y: 0 },
  background: { x: 0, y: 0 },
  character: { x: 0, y: 0 },
  portal: { x: 0, y: 0 },
};

/**
 * Hook to compute smooth mouse parallax offsets according to layer configuration.
 * Disabled automatically if prefersReducedMotion is active or disabled in config.
 */
export function useParallax(): ParallaxOffsets {
  const prefersReduced = usePrefersReducedMotion();
  const [offsets, setOffsets] = useState<ParallaxOffsets>(ZERO_OFFSETS);
  const targetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (prefersReduced || !siteConfig.parallax.enabled) {
      setOffsets(ZERO_OFFSETS);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse between -1 and 1
      const normalizedX = (e.clientX / window.innerWidth) * 2 - 1;
      const normalizedY = (e.clientY / window.innerHeight) * 2 - 1;
      targetRef.current = { x: normalizedX, y: normalizedY };
    };

    const updateParallax = () => {
      const { x, y } = targetRef.current;
      const { header, background, character, portal } = siteConfig.parallax;

      setOffsets({
        header: { x: x * header.maxOffset, y: y * header.maxOffset },
        background: { x: x * background.maxOffset, y: y * background.maxOffset },
        character: { x: x * character.maxOffset, y: y * character.maxOffset },
        portal: { x: x * portal.maxOffset, y: y * portal.maxOffset },
      });

      rafId.current = requestAnimationFrame(updateParallax);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId.current = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [prefersReduced]);

  return offsets;
}
