import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { IntroCanvas3D } from './IntroCanvas3D';

interface IntroSequenceProps {
  onIntroComplete?: () => void;
  children?: React.ReactNode;
}

/**
 * Orchestrates the True 3D WebGL Cinematic Intro Sequence.
 * - Runs for maximum 4.0s (finishes naturally at ~3.80s).
 * - Automatically hands off and reveals the existing landing page.
 * - Provides immediate escape key skip.
 * - Respects prefers-reduced-motion.
 */
export const IntroSequence: React.FC<IntroSequenceProps> = ({
  onIntroComplete,
  children,
}) => {
  const prefersReduced = usePrefersReducedMotion();
  const [isIntroActive, setIsIntroActive] = useState(!prefersReduced);

  const handleComplete = () => {
    setIsIntroActive(false);
    if (onIntroComplete) onIntroComplete();
  };

  // Keyboard shortcut: Press Escape to skip intro immediately
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isIntroActive) {
        handleComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isIntroActive]);

  return (
    <>
      {/* 3D WebGL Cinematic Intro Overlay */}
      {isIntroActive && (
        <div
          className="fixed inset-0 z-[100] bg-[#000000] select-none overflow-hidden"
          role="status"
          aria-live="polite"
        >
          {/* Top-Right Discreet Skip Button */}
          <button
            type="button"
            onClick={handleComplete}
            className="absolute top-6 right-6 z-[110] text-[10px] font-mono tracking-cyber-widest uppercase text-ctf-muted/70 hover:text-accent-green border border-ctf-border/30 hover:border-accent-green px-3 py-1 rounded chamfer-sm transition-colors cursor-pointer"
            aria-label="Skip intro animation"
          >
            SKIP [ESC]
          </button>

          {/* Real 3D Perspective WebGL Renderer */}
          <IntroCanvas3D onComplete={handleComplete} />
        </div>
      )}

      {/* Main Landing Page Content (Preserved exactly as built) */}
      {children}
    </>
  );
};
