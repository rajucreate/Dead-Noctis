import { useRef } from 'react';
import { useAmbient } from '@/hooks/useAmbient';
import { cn } from '@/utils/cn';

interface AmbientCanvasProps {
  className?: string;
  /**
   * Pass `hasHandoffStarted` from useIntro() to gate the canvas until after
   * the intro sequence has finished. Defaults to true (always on when standalone).
   */
  enabled?: boolean;
  /** Number of floating square pixel particles (clamped to 30-50 internally). */
  particleCount?: number;
  speedMultiplier?: number;
  scrollProgress?: number;
  activeSection?: string;
}

export const AmbientCanvas: React.FC<AmbientCanvasProps> = ({
  className,
  enabled = true,
  particleCount = 40,
  speedMultiplier = 1,
  scrollProgress = 0,
  activeSection = 'home',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useAmbient({
    canvasRef,
    enabled,
    particleCount,
    speedMultiplier,
    scrollProgress,
    activeSection,
  });

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        'pointer-events-none absolute inset-0 z-0 h-full w-full',
        className
      )}
      aria-hidden="true"
    />
  );
};
