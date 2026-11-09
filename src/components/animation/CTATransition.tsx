import React, { useRef, useState } from 'react';
import { createPortalTransitionTimeline } from '@/animations/portalTransition';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { PortalTransitionContext, usePortalTransition } from './PortalTransitionContext';

export { usePortalTransition };

interface CTATransitionProps {
  children?: React.ReactNode;
}

const PIXEL_COUNT = 32;

/**
 * Storyboard Frame 08: Registration Click Transition Overlay.
 *
 * When REGISTER NOW is clicked:
 * 1. Intensifies localized portal energy
 * 2. Triggers an emerald exposure screen flash
 * 3. Scatters controlled pixel fragments outward
 * 4. Hands off smoothly to registration destination
 */
export const CTATransition: React.FC<CTATransitionProps> = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const portalGlowRef = useRef<HTMLDivElement | null>(null);
  const screenFlashRef = useRef<HTMLDivElement | null>(null);
  const pixelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prefersReduced = usePrefersReducedMotion();

  const triggerTransition = (onComplete?: () => void) => {
    if (prefersReduced) {
      if (onComplete) onComplete();
      return;
    }

    if (isTransitioning) return; // Prevent overlapping triggers
    setIsTransitioning(true);

    const validPixels = pixelRefs.current.filter((el): el is HTMLDivElement => el !== null);

    const handle = createPortalTransitionTimeline(
      {
        container: null,
        portal: portalGlowRef.current,
        screenFlash: screenFlashRef.current,
        pixelParticles: validPixels,
      },
      () => {
        setIsTransitioning(false);
        if (onComplete) onComplete();
      }
    );

    handle.play();
  };

  const pixelArray = Array.from({ length: PIXEL_COUNT }, (_, i) => i);

  return (
    <PortalTransitionContext.Provider value={{ triggerTransition, isTransitioning }}>
      {children}

      {/* Frame 08 Overlay Layer: Active only during user-initiated registration transition */}
      <div
        className="fixed inset-0 pointer-events-none z-[80] overflow-hidden select-none"
        aria-hidden="true"
      >
        {/* 1. Localized Portal Energy Burst Flare (Anchored over portal coordinates) */}
        <div
          ref={portalGlowRef}
          className="absolute right-[12%] md:right-[16%] top-[16%] md:top-[22%] w-[280px] md:w-[380px] h-[400px] md:h-[500px] rounded-full bg-accent-glow/40 blur-[50px] opacity-0"
        />

        {/* 2. Green Exposure Screen Flash */}
        <div
          ref={screenFlashRef}
          className="absolute inset-0 bg-accent-green/80 mix-blend-screen opacity-0"
        />

        {/* 3. Controlled Pixel Dispersion Particles */}
        <div className="absolute right-[18%] md:right-[22%] top-[30%] md:top-[35%] w-0 h-0">
          {pixelArray.map((idx) => {
            const size = 6 + (idx % 4) * 4; // 6px to 18px voxel pixels
            const isCyan = idx % 3 === 0;
            return (
              <div
                key={idx}
                ref={(el) => {
                  pixelRefs.current[idx] = el;
                }}
                className="absolute opacity-0 rounded-none shadow-neon-sm"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  backgroundColor: isCyan ? '#00f5b8' : '#22ff88',
                  boxShadow: '0 0 10px rgba(34, 255, 136, 0.8)',
                }}
              />
            );
          })}
        </div>
      </div>
    </PortalTransitionContext.Provider>
  );
};
