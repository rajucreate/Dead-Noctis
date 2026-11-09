import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { siteConfig } from '@/config/site';
import { brand } from '@/content/siteContent';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { cn } from '@/utils/cn';
import deadNoctisTitleImg from '@/assets/images/hero/dead-noctis-only.png';

export interface GlitchTitleHandle {
  container: HTMLDivElement | null;
  slices: HTMLElement[];
  triggerGlitch: (durationMs?: number) => void;
}

interface GlitchTitleProps {
  className?: string;
  imageSrc?: string;
  slicesCount?: number;
  autoGlitch?: boolean;
}

/**
 * Distressed 3D Title with original artwork text style and horizontal slices glitch.
 * - Restores the original approved custom text style of "DEAD NOCTIS".
 * - Features the original 7-slice horizontal glitch offset system and RGB screen splits.
 * - Periodic ambient glitch burst every 8-12 seconds for ~250ms.
 * - Semantic accessibility <h1> for screen readers.
 * - Displays "CTF - LEVEL 1" from siteContent directly below the title artwork.
 */
export const GlitchTitle = forwardRef<GlitchTitleHandle, GlitchTitleProps>(
  (
    {
      className,
      imageSrc = deadNoctisTitleImg,
      slicesCount = 7,
      autoGlitch = true,
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const slicesRef = useRef<(HTMLImageElement | null)[]>([]);
    const [isGlitching, setIsGlitching] = useState(false);
    const prefersReduced = usePrefersReducedMotion();
    const isVisibleRef = useRef(true);

    const triggerGlitch = (durationMs = 260) => {
      if (prefersReduced) return;
      setIsGlitching(true);
      setTimeout(() => {
        setIsGlitching(false);
      }, durationMs);
    };

    useImperativeHandle(ref, () => ({
      container: containerRef.current,
      slices: slicesRef.current.filter((el): el is HTMLImageElement => el !== null),
      triggerGlitch,
    }));

    // Periodic ambient glitch burst every 8-12s while hero is visible
    useEffect(() => {
      if (!autoGlitch || prefersReduced) return;

      const container = containerRef.current;
      if (!container) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isVisibleRef.current = entry.isIntersecting;
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(container);

      let timeoutId: number | null = null;
      let active = true;

      const scheduleNextGlitch = () => {
        if (!active) return;
        const { minIntervalSeconds, maxIntervalSeconds } = siteConfig.glitch;
        const randomSeconds =
          minIntervalSeconds + Math.random() * (maxIntervalSeconds - minIntervalSeconds);

        timeoutId = window.setTimeout(() => {
          if (!active) return;
          // Only trigger if title is visible and tab is active
          if (isVisibleRef.current && document.visibilityState === 'visible') {
            setIsGlitching(true);
            setTimeout(() => {
              if (active) setIsGlitching(false);
            }, 260);
          }
          scheduleNextGlitch();
        }, randomSeconds * 1000);
      };

      scheduleNextGlitch();

      // Proximity glow: tracks cursor distance to title center with zero React re-renders
      const handlePointerMove = (e: MouseEvent) => {
        if (!isVisibleRef.current) return;
        const rect = container.getBoundingClientRect();
        if (rect.bottom < -100 || rect.top > window.innerHeight + 100) return;

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);

        const MAX_RADIUS = 380;
        const proximity = Math.max(0, 1 - dist / MAX_RADIUS);
        const intensity = Math.pow(proximity, 1.6); // smooth exponential falloff

        container.style.setProperty('--title-proximity', intensity.toFixed(3));
      };

      const handlePointerLeave = () => {
        container.style.setProperty('--title-proximity', '0');
      };

      window.addEventListener('mousemove', handlePointerMove, { passive: true });
      document.addEventListener('mouseleave', handlePointerLeave);

      return () => {
        active = false;
        observer.disconnect();
        window.removeEventListener('mousemove', handlePointerMove);
        document.removeEventListener('mouseleave', handlePointerLeave);
        if (timeoutId !== null) clearTimeout(timeoutId);
      };
    }, [autoGlitch, prefersReduced]);

    const sliceArray = Array.from({ length: slicesCount }, (_, i) => i);
    // If the image already contains the baked subtitle (e.g. title.png), avoid duplicate subtitle
    const hasBakedSubtitle = imageSrc.includes('title.png') || imageSrc.includes('title-raw');

    return (
      <div className={cn('relative inline-flex flex-col items-start select-none', className)}>
        {/* Accessible Visually-Hidden Headline */}
        <h1 className="sr-only">{brand.eventTitle} {brand.eventSubtitle}</h1>

        {/* Visual Glitch & Slices Presentation (Screen readers skip via aria-hidden) */}
        <div
          ref={containerRef}
          aria-hidden="true"
          className={cn(
            'relative inline-block select-none overflow-visible w-full',
            isGlitching && !prefersReduced && 'is-glitching'
          )}
          style={{
            filter: prefersReduced
              ? undefined
              : 'drop-shadow(0 0 calc(var(--title-proximity, 0) * 14px) rgba(34, 255, 136, calc(var(--title-proximity, 0) * 0.45)))',
            transition: 'filter 0.3s ease-out',
          }}
        >
          {/* Base Layer: Original Distressed Artwork Image */}
          <img
            src={imageSrc}
            alt=""
            className="title-base-layer relative z-10 w-full h-auto object-contain block drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]"
            loading="eager"
            decoding="async"
            draggable={false}
          />

          {/* Subtle Periodic Emerald Light Shimmer (Masked strictly to letterforms) */}
          {!prefersReduced && (
            <div
              className="absolute inset-0 z-14 pointer-events-none overflow-hidden"
              style={{
                WebkitMaskImage: `url(${imageSrc})`,
                maskImage: `url(${imageSrc})`,
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskPosition: 'left top',
                maskPosition: 'left top',
              }}
              aria-hidden="true"
            >
              <div className="title-shimmer-beam absolute -inset-[120%] will-change-transform" />
            </div>
          )}

          {/* RGB Split Layers (Screen blend) */}
          {!prefersReduced && (
            <>
              <img
                src={imageSrc}
                alt=""
                className="title-rgb-green absolute inset-0 z-15 w-full h-auto object-contain pointer-events-none"
                aria-hidden="true"
                draggable={false}
              />
              <img
                src={imageSrc}
                alt=""
                className="title-rgb-cyan absolute inset-0 z-15 w-full h-auto object-contain pointer-events-none"
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

        {/* Subtitle: "CTF - LEVEL 1" (rendered only when using the dead-noctis-only artwork) */}
        {!hasBakedSubtitle && (
          <div className="mt-3.5 sm:mt-4 flex items-center gap-3">
            <span
              className={cn(
                'inline-block font-mono text-xs sm:text-sm md:text-base font-bold tracking-[0.28em] uppercase',
                'text-accent-green drop-shadow-[0_0_10px_rgba(34,255,136,0.5)]',
                isGlitching && !prefersReduced && 'translate-x-[2px] opacity-90'
              )}
            >
              {brand.eventSubtitle}
            </span>
            <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-accent-green/80 to-transparent" />
          </div>
        )}
      </div>
    );
  }
);

GlitchTitle.displayName = 'GlitchTitle';
