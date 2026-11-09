import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { IntroCanvas3D } from './IntroCanvas3D';

export interface IntroContextType {
  isIntroActive: boolean;
  hasHandoffStarted: boolean;
}

export const IntroContext = createContext<IntroContextType>({
  isIntroActive: false,
  hasHandoffStarted: true,
});

export const useIntro = () => useContext(IntroContext);

interface IntroSequenceProps {
  onIntroComplete?: () => void;
  children?: React.ReactNode;
}

/**
 * Orchestrates the True 3D WebGL Cinematic Intro Sequence.
 * - Runs for maximum 4.0s (finishes naturally at ~2.70s).
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
  const [hasHandoffStarted, setHasHandoffStarted] = useState(prefersReduced);

  useEffect(() => {
    if (prefersReduced) {
      setHasHandoffStarted(true);
      return;
    }
    // Storyboard Frame 03-04: Handoff cascade begins at 2.30s as intro fade-out begins
    const timer = setTimeout(() => {
      setHasHandoffStarted(true);
    }, 2300);
    return () => clearTimeout(timer);
  }, [prefersReduced]);

  const handleComplete = useCallback(() => {
    setHasHandoffStarted(true);
    setIsIntroActive(false);
    if (onIntroComplete) onIntroComplete();
  }, [onIntroComplete]);

  // Keyboard shortcut: Press Escape to skip intro immediately
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isIntroActive) {
        handleComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isIntroActive, handleComplete]);

  return (
    <IntroContext.Provider value={{ isIntroActive, hasHandoffStarted }}>
      {/* 3D WebGL Cinematic Intro Overlay */}
      {isIntroActive && (
        <div
          className="fixed inset-0 z-[100] select-none overflow-hidden"
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
    </IntroContext.Provider>
  );
};
