import React from 'react';
import { siteConfig } from '@/config/site';
import { GlitchTitle } from '@/components/ui/GlitchTitle';
import { Button } from '@/components/ui/Button';
import { VoxelScene } from './VoxelScene';
import { AmbientCanvas } from '@/components/ui/AmbientCanvas';
import { cn } from '@/utils/cn';

interface HeroSectionProps {
  onRegisterClick?: () => void;
  onLearnMoreClick?: () => void;
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onRegisterClick,
  onLearnMoreClick,
  className,
}) => {
  return (
    <section
      className={cn(
        'relative h-screen min-h-[640px] w-full flex items-center justify-start overflow-hidden select-none',
        className
      )}
    >
      {/* 1. Stacked 3D Voxel Parallax Scene */}
      <VoxelScene />

      {/* 2. Floating Ambient Dust Canvas */}
      <AmbientCanvas />

      {/* 3. Hero Foreground Content Area */}
      <div className="relative z-30 w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28">
        <div className="max-w-2xl flex flex-col items-start">
          {/* Presenter Overhead Lines */}
          <div className="mb-3 flex flex-col items-start select-none">
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-ctf-text">
              {siteConfig.hero.presenterLine1}
            </span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-cyber-widest text-ctf-muted uppercase mt-0.5">
              {siteConfig.hero.presenterLine2}
            </span>
          </div>

          {/* Eyebrow */}
          <div className="mb-2 select-none">
            <span className="text-xs sm:text-sm font-bold tracking-cyber-widest text-accent-green uppercase">
              {siteConfig.hero.eyebrow}
            </span>
          </div>

          {/* Title Artwork with Accessibility <h1> & Horizontal Slices Glitch */}
          <div className="mb-4 w-full">
            <GlitchTitle
              className="w-[300px] sm:w-[420px] md:w-[480px] lg:w-[540px] xl:w-[580px] max-w-[85vw]"
            />
          </div>

          {/* Tagline: ENTER THE DIMENSION WITH WHH */}
          <div className="mb-8 select-none">
            <p className="text-xs sm:text-sm md:text-base font-semibold tracking-cyber uppercase text-ctf-muted">
              {siteConfig.hero.tagline.prefix}
              <span className="text-accent-green font-bold shadow-neon-sm">
                {siteConfig.hero.tagline.highlight}
              </span>
            </p>
          </div>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            <Button
              variant="primary"
              size="md"
              showArrow
              arrowDirection="right"
              onClick={onRegisterClick}
            >
              {siteConfig.hero.primaryCta}
            </Button>

            <Button
              variant="secondary"
              size="md"
              showArrow
              arrowDirection="down"
              onClick={onLearnMoreClick}
            >
              {siteConfig.hero.secondaryCta}
            </Button>
          </div>
        </div>

        {/* Bottom-Left Scroll Indicator Matching Image 1 & 2 */}
        <div
          className="absolute bottom-8 left-6 sm:left-10 md:left-16 lg:left-20 xl:left-28 hidden sm:flex items-center gap-3 select-none pointer-events-none"
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
