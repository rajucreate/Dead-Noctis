import React, { useEffect, useMemo } from 'react';
import { siteConfig } from '@/config/site';
import { useIntro } from '@/components/animation/IntroSequence';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { cn } from '@/utils/cn';

import aboutBgImg from '@/assets/images/sections/about-background.jpg';
import eventsBgImg from '@/assets/images/sections/events-background.jpg';
import rulesBgImg from '@/assets/images/sections/rules-background.jpg';
import faqBgImg from '@/assets/images/sections/faq-background.jpg';

interface BackgroundStackProps {
  activeSection: string;
  className?: string;
}

interface BackgroundLayer {
  id: string;
  src: string;
  alt: string;
  isHero?: boolean;
}

/**
 * BackgroundStack:
 * Renders a fixed, full-viewport background stack behind all content (z-index: 0, pointer-events: none).
 * Each section image is stacked as an absolutely positioned layer.
 *
 * Transitions:
 * - Crossfade opacity over 1000ms using cubic-bezier(0.4, 0, 0.2, 1).
 * - Subtle scale on active layer (1.06 -> 1) over 1500ms.
 * - Hardware accelerated with will-change: opacity, transform.
 * - Respects prefers-reduced-motion (no scale, short fade).
 * - Preloads and decodes all images on mount to eliminate flash/stutter.
 * - Includes legibility vignette overlays inside the fixed container.
 */
export const BackgroundStack: React.FC<BackgroundStackProps> = ({
  activeSection,
  className,
}) => {
  const { hasHandoffStarted } = useIntro();
  const prefersReduced = usePrefersReducedMotion();

  // Normalize active section key:
  // "home" maps to "hero", "register" maps to "hero" as per requirement #3
  const normalizedActive = useMemo(() => {
    if (!activeSection || activeSection === 'home' || activeSection === 'hero' || activeSection === 'register') {
      return 'hero';
    }
    return activeSection;
  }, [activeSection]);

  const layers: BackgroundLayer[] = useMemo(
    () => [
      {
        id: 'hero',
        src: siteConfig.assetPaths.heroBackground,
        alt: 'The Dead Noctis Portal Dimension',
        isHero: true,
      },
      {
        id: 'about',
        src: aboutBgImg,
        alt: 'The Dead Noctis Cavern Dimension',
      },
      {
        id: 'events',
        src: eventsBgImg,
        alt: 'The Dead Noctis Floating Island Dimension',
      },
      {
        id: 'rules',
        src: rulesBgImg,
        alt: 'The Dead Noctis Rules Dimension',
      },
      {
        id: 'faq',
        src: faqBgImg,
        alt: 'The Dead Noctis FAQ Dimension',
      },
    ],
    []
  );

  // Preload and decode all background images immediately on mount
  useEffect(() => {
    layers.forEach((layer) => {
      const img = new Image();
      img.src = layer.src;
      if ('decode' in img) {
        img.decode().catch(() => {
          // Ignore decode errors if browser already cached
        });
      }
    });
  }, [layers]);

  // BackgroundStack only becomes visible after intro handoff starts (or if reduced motion is requested)
  const isVisible = prefersReduced || hasHandoffStarted;

  return (
    <div
      className={cn(
        'fixed inset-0 w-full h-[100svh] min-h-screen pointer-events-none z-0 overflow-hidden select-none transition-opacity duration-700 ease-out',
        isVisible ? 'opacity-100' : 'opacity-0',
        className
      )}
      aria-hidden="true"
    >
      {/* ── Stacked Section Image Layers ─────────────────────────────────── */}
      {layers.map((layer) => {
        const isActive = normalizedActive === layer.id;

        return (
          <div
            key={layer.id}
            className="absolute inset-0 w-full h-full will-change-[opacity,transform]"
            style={{
              opacity: isActive ? 1 : 0,
              transform: prefersReduced
                ? 'none'
                : isActive
                ? 'scale(1)'
                : 'scale(1.06)',
              transition: prefersReduced
                ? 'opacity 150ms ease-out'
                : 'opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1), transform 1500ms cubic-bezier(0.4, 0, 0.2, 1)',
              zIndex: isActive ? 2 : 1,
            }}
          >
            <img
              src={layer.src}
              alt={layer.alt}
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
              loading="eager"
              decoding="async"
              // @ts-expect-error fetchpriority is standard in modern HTML
              fetchpriority={layer.isHero ? 'high' : 'auto'}
            />
          </div>
        );
      })}

      {/* ── Dark Gradient & Vignette Overlay for Text Legibility ─────────── */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Subtle radial vignette softens extreme screen edges while keeping the focal artwork bright */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 62% 48%, transparent 40%, rgba(3, 9, 6, 0.35) 80%, rgba(2, 6, 4, 0.70) 100%)',
          }}
        />

        {/* Localized left-side reading corridor (behind text column) */}
        <div
          className="absolute inset-y-0 left-0 w-full sm:w-[58%] md:w-[50%] lg:w-[45%]"
          style={{
            background:
              'linear-gradient(to right, rgba(2, 6, 4, 0.50) 0%, rgba(2, 6, 4, 0.20) 70%, transparent 100%)',
          }}
        />

        {/* Top Header / Navigation Edge Mask */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-background-void/90 via-background-void/50 to-transparent" />

        {/* Bottom Ground / Scroll Edge Mask */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background-void/90 via-background-void/50 to-transparent" />
      </div>
    </div>
  );
};

export default BackgroundStack;
