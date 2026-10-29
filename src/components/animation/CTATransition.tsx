import React, { useRef } from 'react';
import { useGSAPContext } from '@/hooks/useGSAPContext';
import { createPortalTransitionTimeline } from '@/animations/portalTransition';

interface CTATransitionProps {
  onTransitionComplete?: () => void;
  children?: React.ReactNode;
}

/**
 * Thin React wrapper around animations/portalTransition.ts for the CTA click reaction.
 * Plays portal glow -> screen flash -> pixel dispersal, then returns to hero.
 */
export const CTATransition: React.FC<CTATransitionProps> = ({
  onTransitionComplete,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAPContext(() => {
    // TODO (Later Task): Initialize transition handle and expose trigger via ref or context
    const transitionHandle = createPortalTransitionTimeline(
      {
        container: containerRef.current,
        portal: null,
        screenFlash: null,
        pixelParticles: null,
      },
      onTransitionComplete
    );

    void transitionHandle;
  }, containerRef);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {/* Green flash overlay element stub for Step 08 */}
      <div
        className="pointer-events-none fixed inset-0 z-40 bg-accent-glow opacity-0"
        aria-hidden="true"
      />
      {children}
    </div>
  );
};
