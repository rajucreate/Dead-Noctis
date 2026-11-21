import React from 'react';
import { siteConfig } from '@/config/site';
import { HERO_3D_CONFIG } from '@/hooks/useParallax';
import { AmbientCanvas } from '@/components/ui/AmbientCanvas';
import { useIntro } from '@/components/animation/IntroSequence';
import { cn } from '@/utils/cn';
import aboutBgImg from '@/assets/images/sections/about-background.jpg';
import eventsBgImg from '@/assets/images/sections/events-background.jpg';
import rulesBgImg from '@/assets/images/sections/rules-background.jpg';
import faqBgImg from '@/assets/images/sections/faq-background.jpg';

interface ContinuousWorldProps {
  scrollProgress: number; // 0.0 to 1.0 (smoothly lerped)
  activeSection: string;
  className?: string;
}

/**
 * CONTINUOUS 3D MINECRAFT-INSPIRED WORLD
 *
 * Enhanced with:
 * - 3D Perspective Container (1200px perspective, preserve-3d)
 * - Pointer-driven rotateX / rotateY tilt with rAF lerp smoothing (factor 0.08)
 * - Receding Z-depth on layers: background (z: -40px), character (z: 20px), portal (z: 45px), cubes (z: 55px)
 * - Dynamic scroll-linked crossfade: Hero Obsidian Portal -> Storyboard 02 Cavern -> Storyboard 03 Floating Island
 * - Volumetric streaming light rays radiating from portal (mix-blend-screen)
 * - Floating translucent 3D voxel cubes (6-faced preserve-3d) responding dynamically to scroll
 * - Glowing Cubic Monolith atop the Floating Island (Storyboard 03)
 * - Soft multi-stop feathered gradient corridor mask blending the artwork seamlessly into the left void
 */
export const ContinuousWorld: React.FC<ContinuousWorldProps> = ({
  scrollProgress,
  activeSection,
  className,
}) => {
  const { hasHandoffStarted } = useIntro();

  const isAboutActive = activeSection === 'about';
  const isEventsActive = activeSection === 'events';
  const isRulesActive = activeSection === 'rules';
  const isFaqActive = activeSection === 'faq';

  // ── Smooth Scroll-Linked World Continuity ───────────────────────────────────
  // About cavern plate: fades in seamlessly over hero as user scrolls down from Home
  const aboutCavernOpacity = isAboutActive
    ? 1.0
    : isEventsActive || isRulesActive || isFaqActive
    ? 0
    : scrollProgress < 0.45
    ? Math.min(1, Math.max(0, (scrollProgress - 0.04) * 4.0))
    : Math.max(0, 1 - (scrollProgress - 0.45) * 4.0);

  // Hero obsidian portal plate: stays fully bright and cleanly dissolves into About Cavern (no dark dips)
  const heroSceneOpacity = isAboutActive || isEventsActive || isRulesActive || isFaqActive
    ? 0
    : Math.max(0, 1 - aboutCavernOpacity);
  const heroPortalOpacity = 0;
  const characterOpacity = 0;
  const characterTranslateY = scrollProgress * 120;

  // Events floating island plate: emerges during Events section (scroll 0.38 - 0.72)
  const eventsIslandOpacity = isEventsActive
    ? 1.0
    : isRulesActive || isFaqActive
    ? 0
    : scrollProgress < 0.68
    ? Math.min(1, Math.max(0, (scrollProgress - 0.38) * 3.5))
    : Math.max(0, 1 - (scrollProgress - 0.68) * 4.0);

  // Rules security matrix plate: emerges during Rules section (scroll 0.58 - 0.85)
  const rulesSceneOpacity = isRulesActive
    ? 1.0
    : isAboutActive
    ? 0
    : scrollProgress < 0.82
    ? Math.min(1, Math.max(0, (scrollProgress - 0.58) * 3.5))
    : Math.max(0, 1 - (scrollProgress - 0.82) * 4.0);

  // FAQ cyber archive plate: emerges seamlessly over Rules as user scrolls down into FAQ (scroll > 0.75)
  const faqSceneOpacity = isFaqActive
    ? 1.0
    : isAboutActive || isEventsActive
    ? 0
    : Math.min(1, Math.max(0, (scrollProgress - 0.75) * 4.0));

  const { perspective } = HERO_3D_CONFIG;

  return (
    <div
      className={cn(
        'fixed inset-0 z-0 overflow-hidden pointer-events-none select-none',
        className
      )}
      style={{
        perspective: `${perspective}px`,
        backgroundColor: isAboutActive || isEventsActive || isRulesActive || isFaqActive ? '#080B09' : '#020604',
        transition: 'background-color 600ms ease-out',
      }}
      aria-hidden="true"
    >
      {/* 3D Scene Perspective Container */}
      <div
        className="absolute inset-0"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* 1.1 Hero Background Plate (Obsidian Portal Scene) - Exact 1:1 Clean Rendering */}
        <div
          className="absolute inset-0 will-change-transform transition-opacity duration-300 ease-out"
          style={{
            opacity: heroSceneOpacity,
            display: heroSceneOpacity <= 0.001 ? 'none' : 'block',
          }}
        >
          <img
            src={siteConfig.assetPaths.heroBackground}
            alt="The Dead Noctis Portal"
            className="hero-background absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* 1.2 About Cavern Scene Plate (Storyboard 02. ABOUT) - Exact 1:1 Clean Rendering */}
        <div
          className="absolute inset-0 will-change-transform transition-opacity duration-500 ease-out z-5"
          style={{
            opacity: aboutCavernOpacity,
            display: aboutCavernOpacity <= 0.001 ? 'none' : 'block',
          }}
        >
          <img
            src={aboutBgImg}
            alt="The Dead Noctis Cavern Dimension"
            className="about-background absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* 1.3 Events Floating Island Scene Plate (Storyboard 03. EVENTS / DETAILS) - Exact 1:1 Clean Rendering */}
        <div
          className="absolute inset-0 will-change-transform transition-opacity duration-500 ease-out z-6"
          style={{
            opacity: eventsIslandOpacity,
            display: eventsIslandOpacity <= 0.001 ? 'none' : 'block',
          }}
        >
          <img
            src={eventsBgImg}
            alt="The Dead Noctis Floating Island Dimension"
            className="events-background absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* 1.4 Rules Security Matrix Plate (Storyboard 04. RULES) - Exact 1:1 Clean Rendering */}
        <div
          className="absolute inset-0 will-change-transform transition-opacity duration-500 ease-out z-7"
          style={{
            opacity: rulesSceneOpacity,
            display: rulesSceneOpacity <= 0.001 ? 'none' : 'block',
          }}
        >
          <img
            src={rulesBgImg}
            alt="The Dead Noctis Rules Dimension"
            className="rules-background absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* 1.5 FAQ Intelligence Archive Plate (Storyboard 05. FAQ) - Exact 1:1 Clean Rendering */}
        <div
          className="absolute inset-0 will-change-transform transition-opacity duration-500 ease-out z-8"
          style={{
            opacity: faqSceneOpacity,
            display: faqSceneOpacity <= 0.001 ? 'none' : 'block',
          }}
        >
          <img
            src={faqBgImg}
            alt="The Dead Noctis FAQ Dimension"
            className="faq-background absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* 2. Hero Volumetric Portal Lighting & Beams (Right side) */}
        <div
          className="absolute inset-0 transition-opacity duration-500 ease-out z-10"
          style={{
            opacity: heroPortalOpacity,
            display: heroPortalOpacity <= 0.001 ? 'none' : 'block',
            transform: `scale(${1 + scrollProgress * 0.5})`,
            transformOrigin: '82% 45%',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Inner parallax + Z-depth layer */}
          <div
            className="absolute inset-0 will-change-transform"
            style={{
              transform: `translate3d(0, 0, ${HERO_3D_CONFIG.layers.portal.z}px)`,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* 2.1 Volumetric Radiant Light Rays streaming outward */}
            <div className="absolute right-[8%] md:right-[14%] top-[12%] md:top-[16%] w-[480px] md:w-[620px] h-[480px] md:h-[620px] pointer-events-none mix-blend-screen opacity-70">
              <div
                className="portal-volumetric-ray-1 absolute inset-0 rounded-full"
                style={{
                  background:
                    'conic-gradient(from 220deg at 50% 50%, transparent 0deg, rgba(34, 255, 136, 0.25) 30deg, transparent 65deg, rgba(0, 255, 102, 0.20) 110deg, transparent 150deg)',
                  filter: 'blur(16px)',
                }}
              />
              <div
                className="portal-volumetric-ray-2 absolute top-[15%] left-[-20%] w-[380px] h-[160px] rounded-full"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(34, 255, 136, 0.28) 0%, rgba(0, 255, 102, 0.12) 50%, transparent 80%)',
                  transform: 'rotate(-20deg)',
                  filter: 'blur(20px)',
                }}
              />
              <div
                className="portal-volumetric-ray-3 absolute top-[5%] right-[10%] w-[240px] h-[340px] rounded-full"
                style={{
                  background:
                    'linear-gradient(205deg, rgba(72, 255, 159, 0.3) 0%, rgba(34, 255, 136, 0.1) 60%, transparent 90%)',
                  filter: 'blur(18px)',
                }}
              />
            </div>

            {/* 2.2 Portal Core Radiant Glow */}
            <div className="absolute right-[10%] md:right-[15%] top-[14%] md:top-[18%] w-[260px] md:w-[320px] h-[380px] md:h-[460px] rounded-full bg-accent-green/40 blur-[45px] portal-pulse-core" />

            {/* 2.3 Broad Volumetric Bloom Haze */}
            <div className="absolute right-[6%] md:right-[10%] top-[8%] md:top-[12%] w-[440px] md:w-[560px] h-[540px] md:h-[660px] rounded-full bg-accent-glow/20 blur-[90px] portal-pulse-haze" />

            {/* 2.4 Upward Energy Portal Column */}
            <div className="absolute right-[14%] md:right-[18%] top-[2%] w-[130px] md:w-[170px] h-[340px] bg-gradient-to-t from-accent-glow/25 via-accent-green/15 to-transparent blur-[35px]" />

            {/* 2.5 Green Light Spill onto Stairs */}
            <div className="absolute right-[11%] md:right-[15%] top-[60%] md:top-[64%] w-[280px] md:w-[360px] h-[140px] md:h-[170px] rounded-full bg-accent-green/28 blur-[40px] portal-pulse-stairs" />

            {/* 2.6 Wet Obsidian Ground Specular Sheen & Motivated Light Bounce */}
            <div className="absolute right-[16%] md:right-[21%] bottom-[5%] w-[260px] md:w-[340px] h-[85px] rounded-full bg-gradient-to-t from-accent-green/25 via-accent-glow/15 to-transparent blur-[25px] mix-blend-screen pointer-events-none" />
            <div className="absolute right-[20%] md:right-[24%] bottom-[7%] w-[160px] md:w-[220px] h-[38px] rounded-full bg-[#8affc1]/20 blur-[15px] mix-blend-screen pointer-events-none" />
          </div>
        </div>

        {/* 3. Hero Foreground Character Layer */}
        <div
          className="absolute inset-0 transition-opacity duration-300 ease-out z-15 will-change-transform"
          style={{
            opacity: characterOpacity,
            display: characterOpacity <= 0.001 ? 'none' : 'block',
            transform: `translate3d(0, 0, ${HERO_3D_CONFIG.layers.character.z}px)`,
            transformStyle: 'preserve-3d',
          }}
        >
          <div
            style={{ transform: `translate3d(0, ${characterTranslateY}px, 0)` }}
            className="absolute inset-0"
          >
            {/* Motivated Portal Rim Light */}
            <div className="absolute right-[28%] md:right-[33%] bottom-[12%] md:bottom-[15%] w-[180px] md:w-[220px] h-[280px] md:h-[340px] rounded-full bg-gradient-to-l from-accent-green/30 via-accent-glow/15 to-transparent blur-[35px]" />
            {/* Ground Contact Shadow */}
            <div className="absolute right-[27%] md:right-[31%] bottom-[5%] w-[180px] md:w-[220px] h-[35px] rounded-full bg-background-void/90 blur-[15px]" />
          </div>
        </div>

        {/* 4. Atmospheric Fog Mist Layer (disabled to maintain 100% true HD artwork colors) */}
        <div
          className="absolute inset-0 z-11 pointer-events-none ambient-fog transition-opacity duration-500 opacity-0"
          style={{
            background:
              'radial-gradient(ellipse at 75% 45%, rgba(34, 255, 136, 0.14) 0%, transparent 65%)',
          }}
        />

        {/* 6. Interior Dimension Atmosphere */}
        <div
          className="absolute inset-0 transition-opacity duration-700 ease-out z-12 pointer-events-none opacity-0"
        />

        {/* 7. Section 07 Final Illuminated Gateway Aura */}
        <div
          className="absolute inset-0 transition-opacity duration-700 ease-out z-14 pointer-events-none opacity-0"
        />

        {/* 8. Floating Square Pixel Canvas Engine with Cavern Wind Dynamics */}
        <AmbientCanvas
          className="z-18"
          enabled={hasHandoffStarted && activeSection !== 'home'}
          particleCount={45}
          speedMultiplier={1.0}
          scrollProgress={scrollProgress}
          activeSection={activeSection}
        />

        {/* 9. Top & Bottom Subtle Edge Vignette Masks for Nav & Footer readability */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {/* Top Header Mask */}
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-background-void via-background-void/70 to-transparent" />

          {/* Bottom Ground Mask */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background-void via-background-void/75 to-transparent" />
        </div>
      </div>
    </div>
  );
};
