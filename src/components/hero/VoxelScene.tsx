import React from 'react';
import { siteConfig } from '@/config/site';
import { useParallax, PARALLAX_CONFIG } from '@/hooks/useParallax';
import { useIntro } from '@/components/animation/IntroSequence';
import { cn } from '@/utils/cn';

interface VoxelSceneProps {
  className?: string;
}

/**
 * Standalone embedded hero scene (used only when HeroSection is rendered with
 * embedWorld={true}). In production the ContinuousWorld component is used instead.
 * Updated to use the imperative ref-based useParallax hook.
 */
export const VoxelScene: React.FC<VoxelSceneProps> = ({ className }) => {
  const { hasHandoffStarted } = useIntro();
  const { containerScale } = PARALLAX_CONFIG;

  const bgRef = React.useRef<HTMLDivElement | null>(null);
  const portalRef = React.useRef<HTMLDivElement | null>(null);
  const characterRef = React.useRef<HTMLDivElement | null>(null);
  const headerRef = React.useRef<HTMLElement | null>(null);
  const ctaRef = React.useRef<HTMLElement | null>(null);

  useParallax(
    {
      backgroundRef: bgRef as React.RefObject<HTMLElement | null>,
      portalRef: portalRef as React.RefObject<HTMLElement | null>,
      characterRef: characterRef as React.RefObject<HTMLElement | null>,
      headerRef,
      ctaRef,
    },
    hasHandoffStarted
  );

  return (
    <div
      className={cn(
        'absolute inset-0 z-0 overflow-hidden pointer-events-none select-none',
        className
      )}
      aria-hidden="true"
    >
      {/* Layer 1: Background Plate – oversized so parallax travel never shows raw edges */}
      <div
        ref={bgRef}
        className="absolute bg-cover bg-[position:65%_center] md:bg-center will-change-transform"
        style={{
          inset: `-${Math.round((containerScale - 1) * 60 + 10)}px`,
          backgroundImage: `url(${siteConfig.assetPaths.heroBackground})`,
        }}
      />

      {/* Layer 2: Volumetric Portal Lighting on Right Side */}
      <div
        ref={portalRef}
        className="absolute inset-0 will-change-transform z-10"
      >
        <div className="absolute right-[10%] md:right-[15%] top-[14%] md:top-[18%] w-[260px] md:w-[320px] h-[380px] md:h-[460px] rounded-full bg-accent-green/35 blur-[45px] portal-pulse-core" />
        <div className="absolute right-[6%] md:right-[10%] top-[8%] md:top-[12%] w-[420px] md:w-[520px] h-[520px] md:h-[620px] rounded-full bg-accent-glow/15 blur-[90px] portal-pulse-haze" />
        <div className="absolute right-[14%] md:right-[18%] top-[2%] w-[120px] md:w-[160px] h-[320px] bg-gradient-to-t from-accent-glow/20 via-accent-green/10 to-transparent blur-[35px]" />
        <div className="absolute right-[11%] md:right-[15%] top-[60%] md:top-[64%] w-[280px] md:w-[360px] h-[130px] md:h-[160px] rounded-full bg-accent-green/22 blur-[45px] portal-pulse-stairs" />
        <div className="absolute right-[17%] md:right-[22%] bottom-[6%] w-[220px] md:w-[280px] h-[65px] rounded-full bg-accent-green/15 blur-[35px]" />
      </div>

      {/* Layer 3: Foreground Character Lighting */}
      <div
        ref={characterRef}
        className="absolute inset-0 will-change-transform z-15"
      >
        <div className="absolute right-[28%] md:right-[33%] bottom-[12%] md:bottom-[15%] w-[180px] md:w-[220px] h-[280px] md:h-[340px] rounded-full bg-gradient-to-l from-accent-green/30 via-accent-glow/15 to-transparent blur-[35px]" />
        <div className="absolute right-[27%] md:right-[31%] bottom-[5%] w-[180px] md:w-[220px] h-[35px] rounded-full bg-background-void/90 blur-[15px]" />
      </div>

      {/* Layer 4: Atmospheric Depth Fog */}
      <div className="absolute inset-0 bg-gradient-to-t from-background-void/80 via-transparent to-background-void/50 opacity-70 z-20 pointer-events-none" />

      {/* Layer 5: Text Protection Mask */}
      <div className="absolute inset-0 z-25 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#020604_0%,#020604_46%,rgba(2,6,4,0.98)_51%,rgba(2,6,4,0.85)_55%,rgba(2,6,4,0.3)_62%,transparent_70%)]" />
        <div className="absolute left-[44%] md:left-[46%] top-[26%] md:top-[28%] w-[140px] h-[120px] bg-[radial-gradient(ellipse_at_center,rgba(2,6,4,0.98)_0%,rgba(2,6,4,0.8)_50%,transparent_100%)] blur-[8px]" />
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-background-void via-background-void via-55% to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background-void via-background-void/75 to-transparent" />
      </div>

      {/* Layer 6: Edge Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(2,6,4,0.85)_100%)] z-30 pointer-events-none" />
    </div>
  );
};
