import React from 'react';
import { siteConfig } from '@/config/site';
import { home } from '@/content/siteContent';
import { GlitchTitle } from '@/components/ui/GlitchTitle';
import { Button } from '@/components/ui/Button';
import { VoxelScene } from './VoxelScene';
import { AmbientCanvas } from '@/components/ui/AmbientCanvas';
import { CyberCursor } from '@/components/ui/CyberCursor';
import { useIntro } from '@/components/animation/IntroSequence';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { cn } from '@/utils/cn';

interface HeroSectionProps {
  onRegisterClick?: () => void;
  onLearnMoreClick?: () => void;
  embedWorld?: boolean;
  className?: string;
}

/**
 * Storyboard Frame 04-06: Hero Section.
 * Implements coordinated cascade entrance of typography and CTA buttons
 * following intro hand-off and portal activation.
 */
export const HeroSection: React.FC<HeroSectionProps> = ({
  onRegisterClick,
  onLearnMoreClick,
  embedWorld = false,
  className,
}) => {
  const { hasHandoffStarted } = useIntro();
  const prefersReduced = usePrefersReducedMotion();
  const isEntered = prefersReduced || hasHandoffStarted;

  const primaryLabel = home.primaryCta;
  const secondaryLabel = home.secondaryCta;

  const handleLearnMore = () => {
    if (onLearnMoreClick) {
      onLearnMoreClick();
    } else {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRegister = () => {
    if (onRegisterClick) {
      onRegisterClick();
    } else {
      document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className={cn(
        'relative min-h-screen w-full flex items-center justify-start overflow-hidden select-none',
        className
      )}
    >
      {/* Optional Embedded 3D Scene (if rendered standalone outside ContinuousWorld) */}
      {embedWorld && (
        <>
          <VoxelScene />
          <AmbientCanvas />
        </>
      )}

      {/* Elegant Minimal Desktop Cyber Cursor */}
      {isEntered && <CyberCursor />}

      {/* Hero Foreground Content Area */}
      <div className="relative z-30 w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-24 sm:py-28 md:py-32">
        <div className="max-w-2xl flex flex-col items-start pb-12 sm:pb-16">
          {/* Frame 04.1: Presenter Overhead Lines */}
          <div
            className={cn(
              'mb-2 flex flex-col items-start select-none transition-all duration-500 ease-out',
              isEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            )}
            style={{ transitionDelay: isEntered && !prefersReduced ? '60ms' : '0ms' }}
          >
            <span className="text-xs sm:text-sm font-bold tracking-wider text-white/95 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {siteConfig.hero.presenterLine1}
            </span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#8fa89a] uppercase mt-0.5">
              {siteConfig.hero.presenterLine2}
            </span>
          </div>

          {/* Frame 04.3: Eyebrow ("THE") */}
          <div
            className={cn(
              'mb-1.5 select-none transition-all duration-500 ease-out',
              isEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            )}
            style={{ transitionDelay: isEntered && !prefersReduced ? '140ms' : '0ms' }}
          >
            <span className="inline-block text-xs sm:text-sm font-bold tracking-[0.28em] text-[#22ff88] uppercase drop-shadow-[0_0_8px_rgba(34,255,136,0.4)]">
              {siteConfig.hero.eyebrow}
            </span>
          </div>

          {/* Frame 04.2: Distressed Artwork Title with Horizontal Slices Glitch */}
          <div
            className={cn(
              'mb-4 w-full transition-all duration-500 ease-out',
              isEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            )}
            style={{ transitionDelay: isEntered && !prefersReduced ? '240ms' : '0ms' }}
          >
            <GlitchTitle
              className="w-[300px] sm:w-[420px] md:w-[480px] lg:w-[540px] xl:w-[580px] max-w-[85vw]"
            />
          </div>

          {/* Frame 04.4: Tagline: ENTER THE DIMENSION WITH WHH */}
          <div
            className={cn(
              'mb-7 select-none transition-all duration-500 ease-out',
              isEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            )}
            style={{ transitionDelay: isEntered && !prefersReduced ? '360ms' : '0ms' }}
          >
            <p className="text-xs sm:text-sm md:text-base font-semibold tracking-cyber uppercase text-ctf-muted">
              {siteConfig.hero.tagline.prefix}
              <span className="text-accent-green font-bold shadow-neon-sm ml-1">
                {siteConfig.hero.tagline.highlight}
              </span>
            </p>
          </div>

          {/* Frame 05: Action CTA Buttons (REGISTER NOW and LEARN MORE) */}
          <div
            className={cn(
              'flex flex-wrap items-center gap-4 sm:gap-5 transition-all duration-500 ease-out',
              isEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            )}
            style={{ transitionDelay: isEntered && !prefersReduced ? '480ms' : '0ms' }}
          >
            <Button
              variant="primary"
              size="md"
              showArrow
              arrowDirection="right"
              onClick={handleRegister}
            >
              {primaryLabel}
            </Button>

            <Button
              variant="secondary"
              size="md"
              showArrow
              arrowDirection="down"
              onClick={handleLearnMore}
            >
              {secondaryLabel}
            </Button>
          </div>
        </div>

        {/* Bottom-Left Scroll Indicator
            - Fixed to bottom-left with safe padding
            - Never overlaps CTA buttons at any viewport height
            - Gracefully hides on short viewport heights (<680px) to prevent any obstruction
        */}
        <div
          className={cn(
            'absolute bottom-6 left-6 sm:left-10 md:left-16 lg:left-20 xl:left-28',
            'hidden sm:flex items-center gap-3 select-none pointer-events-none transition-all duration-700 ease-out',
            'max-h-[660px]:hidden',
            isEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
          style={{ transitionDelay: isEntered && !prefersReduced ? '600ms' : '0ms' }}
          aria-hidden="true"
        >
          <div className="w-px h-8 bg-gradient-to-b from-accent-green/80 via-ctf-border to-transparent" />
          <span className="text-[9px] font-mono tracking-cyber-widest text-ctf-muted uppercase [writing-mode:vertical-lr] rotate-180">
            {siteConfig.hero.scrollLabel}
          </span>
        </div>
      </div>
    </section>
  );
};
