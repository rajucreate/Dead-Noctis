import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { siteConfig } from '@/config/site';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { cn } from '@/utils/cn';

export interface GlitchTitleHandle {
  container: HTMLDivElement | null;
  slices: HTMLElement[];
  triggerGlitch: (durationMs?: number) => void;
}

interface GlitchTitleProps {
  className?: string;
  imageSrc?: string;
  slicesCount?: number;
}

export const GlitchTitle = forwardRef<GlitchTitleHandle, GlitchTitleProps>(
  ({ className, imageSrc = siteConfig.assetPaths.titleImage, slicesCount = 7 }, ref) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const slicesRef = useRef<(HTMLImageElement | null)[]>([]);
    const [isGlitching, setIsGlitching] = useState(false);
    const prefersReduced = usePrefersReducedMotion();

    useImperativeHandle(ref, () => ({
      container: containerRef.current,
      slices: slicesRef.current.filter((el): el is HTMLImageElement => el !== null),
      triggerGlitch: (durationMs = 220) => {
        if (prefersReduced) return;
        setIsGlitching(true);
        setTimeout(() => {
          setIsGlitching(false);
        }, durationMs);
      },
    }));

    const sliceArray = Array.from({ length: slicesCount }, (_, i) => i);

    return (
      <div className={cn('relative inline-block', className)}>
        {/* Accessible Visually-Hidden Headline */}
        <h1 className="sr-only">THE DEAD NOCTIS CTF - LEVEL 1</h1>

        {/* Visual Glitch & Slices Presentation (Screen readers skip via aria-hidden) */}
        <div
          ref={containerRef}
          aria-hidden="true"
          className={cn(
            'relative inline-block select-none overflow-visible',
            isGlitching && !prefersReduced && 'is-glitching'
          )}
        >
          {/* Base Layer: Original Image */}
          <img
            src={imageSrc}
            alt=""
            className="title-base-layer relative z-10 w-full h-auto object-contain block drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]"
            loading="eager"
            decoding="async"
            draggable={false}
          />

          {/* RGB Split Layers (Screen blend) */}
          {!prefersReduced && (
            <>
              <img
                src={imageSrc}
                alt=""
                className="title-rgb-green absolute inset-0 z-15 w-full h-auto object-contain"
                aria-hidden="true"
                draggable={false}
              />
              <img
                src={imageSrc}
                alt=""
                className="title-rgb-cyan absolute inset-0 z-15 w-full h-auto object-contain"
                aria-hidden="true"
                draggable={false}
              />
            </>
          )}

          {/* Sliced Duplicates (Clipped via clip-path: inset) */}
          {!prefersReduced &&
            sliceArray.map((idx) => {
              const isEven = idx % 2 === 0;
              return (
                <img
                  key={idx}
                  ref={(el) => {
                    slicesRef.current[idx] = el;
                  }}
                  src={imageSrc}
                  alt=""
                  data-slice-index={idx}
                  className={cn(
                    'title-slice absolute inset-0 z-20 w-full h-auto object-contain pointer-events-none will-change-transform',
                    `slice-${idx}`,
                    isEven ? 'slice-even' : 'slice-odd'
                  )}
                  aria-hidden="true"
                  draggable={false}
                />
              );
            })}
        </div>
      </div>
    );
  }
);

GlitchTitle.displayName = 'GlitchTitle';
