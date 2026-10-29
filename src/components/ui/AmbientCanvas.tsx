import { useRef } from 'react';
import { useAmbient } from '@/hooks/useAmbient';
import { cn } from '@/utils/cn';

interface AmbientCanvasProps {
  className?: string;
  enabled?: boolean;
  cubeCount?: number;
  speedMultiplier?: number;
}

export const AmbientCanvas: React.FC<AmbientCanvasProps> = ({
  className,
  enabled = true,
  cubeCount = 34,
  speedMultiplier = 1,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useAmbient({ canvasRef, enabled, cubeCount, speedMultiplier });

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
