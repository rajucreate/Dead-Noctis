import React from 'react';
import { siteConfig } from '@/config/site';
import { useParallax, HERO_3D_CONFIG } from '@/hooks/useParallax';
import { AmbientCanvas } from '@/components/ui/AmbientCanvas';
import { useIntro } from '@/components/animation/IntroSequence';
import { cn } from '@/utils/cn';
import aboutBgImg from '@/assets/images/sections/about-background.jpg';
import eventsBgImg from '@/assets/images/sections/events-background.jpg';
import rulesBgImg from '@/assets/images/sections/rules-background.jpg';

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

  // ── 3D Scene Refs ─────────────────────────────────────────────────────────
  const sceneContainerRef = React.useRef<HTMLDivElement | null>(null);
  const bgParallaxRef = React.useRef<HTMLDivElement | null>(null);
  const aboutBgParallaxRef = React.useRef<HTMLDivElement | null>(null);
  const eventsBgParallaxRef = React.useRef<HTMLDivElement | null>(null);
  const rulesBgParallaxRef = React.useRef<HTMLDivElement | null>(null);
  const portalParallaxRef = React.useRef<HTMLDivElement | null>(null);
  const characterParallaxRef = React.useRef<HTMLDivElement | null>(null);

  // Wire up imperative 3D tilt & parallax (starts only after intro completes)
  useParallax(
    {
      sceneContainerRef,
      backgroundRef: bgParallaxRef,
      aboutBackgroundRef: aboutBgParallaxRef,
      eventsBackgroundRef: eventsBgParallaxRef,
      rulesBackgroundRef: rulesBgParallaxRef,
      characterRef: characterParallaxRef,
      portalRef: portalParallaxRef,
    },
    hasHandoffStarted
  );

  // ── Cinematic Scroll Camera Transforms ──────────────────────────────────────
  // Restrained, smooth dimensional dolly: avoids sudden camera shifts or excessive zoom
  const cameraScale = 1.0 + Math.sin(scrollProgress * Math.PI) * 0.09;
  const cameraTranslateX = -scrollProgress * 32;
  const cameraTranslateY = -scrollProgress * 52;

  const isAboutActive = activeSection === 'about';
  const isEventsActive = activeSection === 'events';
  const isRulesActive = activeSection === 'rules';

  // ── Smooth Scroll-Linked World Continuity ───────────────────────────────────
  // About cavern plate: fades in seamlessly over hero as user scrolls down from Home
  const aboutCavernOpacity = isAboutActive
    ? 1.0
    : isEventsActive || isRulesActive
    ? 0
    : scrollProgress < 0.45
    ? Math.min(1, Math.max(0, (scrollProgress - 0.04) * 4.0))
    : Math.max(0, 1 - (scrollProgress - 0.45) * 4.0);

  // Hero obsidian portal plate: stays fully bright and cleanly dissolves into About Cavern (no dark dips)
  const heroSceneOpacity = isAboutActive || isEventsActive || isRulesActive
    ? 0
    : Math.max(0, 1 - aboutCavernOpacity);
  const heroPortalOpacity = 0;
  const characterOpacity = 0;
  const characterTranslateY = scrollProgress * 120;

  // Events floating island plate: emerges during Events section (scroll 0.38 - 0.72)
  const eventsIslandOpacity = isEventsActive
    ? 1.0
    : isAboutActive || isRulesActive
    ? 0
    : scrollProgress < 0.68
    ? Math.min(1, Math.max(0, (scrollProgress - 0.38) * 3.5))
    : Math.max(0, 1 - (scrollProgress - 0.68) * 4.0);

  // Rules security matrix plate: emerges during Rules section (scroll > 0.58)
  const rulesSceneOpacity = isRulesActive
    ? 1.0
    : isAboutActive || isEventsActive
    ? 0
    : Math.min(1, Math.max(0, (scrollProgress - 0.58) * 3.5));

  const finalGatewayOpacity = Math.max(0, (scrollProgress - 0.85) * 4.0);
  const interiorHazeOpacity = isAboutActive ? 0 : Math.min(1, Math.max(0, (scrollProgress - 0.48) * 2.5)) * (1 - finalGatewayOpacity);

  const isRulesOrFaq = activeSection === 'rules' || activeSection === 'faq';
  const { containerScale, perspective } = HERO_3D_CONFIG;

  return (
    <div
      className={cn(
        'fixed inset-0 z-0 overflow-hidden pointer-events-none select-none',
        className
      )}
      style={{ perspective: `${perspective}px` }}
      aria-hidden="true"
    >
      {/* 3D Scene Perspective Tilt Container */}
      <div
        ref={sceneContainerRef}
        className="absolute inset-0 will-change-transform"
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.1s cubic-bezier(0.2, 0, 0.2, 1)',
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

        {/* 1.3 Events Floating Island Scene Plate (Storyboard 03. EVENTS / DETAILS) */}
        <div
          className="absolute will-change-transform transition-opacity duration-700 ease-out z-6"
          style={{
            inset: `-${Math.round((containerScale - 1) * 70 + 20)}px`,
            transform: `translate3d(${cameraTranslateX * 0.7}px, ${cameraTranslateY * 0.7}px, 0) scale(${cameraScale * containerScale})`,
            transformOrigin: '75% 45%',
            transformStyle: 'preserve-3d',
            opacity: eventsIslandOpacity,
            display: eventsIslandOpacity <= 0.001 ? 'none' : 'block',
          }}
        >
          <div
            ref={eventsBgParallaxRef}
            className="absolute inset-0 bg-cover bg-[position:71.5%_31.5%] will-change-transform"
            style={{
              backgroundImage: `url(${eventsBgImg})`,
              transform: `translate3d(0, 0, ${HERO_3D_CONFIG.layers.background.z}px)`,
            }}
          />

          {/* Glowing Green Cubic Monolith atop the Floating Island - locked precisely to cube coordinates (71.5%, 31.5%) */}
          <div
            className="absolute w-[220px] md:w-[300px] h-[220px] md:h-[300px] rounded-full bg-accent-glow/40 blur-[60px] pointer-events-none portal-pulse-core"
            style={{ left: '71.5%', top: '31.5%', transform: 'translate(-50%, -50%)' }}
          />
          <div
            className="absolute w-[120px] md:w-[160px] h-[120px] md:h-[160px] rounded-full bg-accent-green/60 blur-[32px] pointer-events-none portal-pulse-haze"
            style={{ left: '71.5%', top: '31.5%', transform: 'translate(-50%, -50%)' }}
          />

          {/* Dimensional Island Mist & Aura */}
          <div
            className="absolute w-[520px] md:w-[740px] h-[280px] rounded-full bg-accent-green/15 blur-[85px] pointer-events-none ambient-fog"
            style={{ left: '71.5%', top: '50%', transform: 'translate(-50%, -50%)' }}
          />
        </div>

        {/* 1.4 Rules Security Matrix Plate (Storyboard 04. RULES) */}
        <div
          className="absolute will-change-transform transition-opacity duration-700 ease-out z-7"
          style={{
            inset: `-${Math.round((containerScale - 1) * 70 + 20)}px`,
            transform: `translate3d(${cameraTranslateX * 0.75}px, ${cameraTranslateY * 0.75}px, 0) scale(${cameraScale * containerScale})`,
            transformOrigin: '75% 45%',
            transformStyle: 'preserve-3d',
            opacity: rulesSceneOpacity,
            display: rulesSceneOpacity <= 0.001 ? 'none' : 'block',
          }}
        >
          <div
            ref={rulesBgParallaxRef}
            className="absolute inset-0 bg-cover bg-[position:85%_center] md:bg-[position:78%_center] will-change-transform"
            style={{
              backgroundImage: `url(${rulesBgImg})`,
              transform: `translate3d(0, 0, ${HERO_3D_CONFIG.layers.background.z}px)`,
            }}
          />

          {/* Holographic Security Grid Ambient Core */}
          <div className="absolute right-[14%] md:right-[20%] top-[18%] md:top-[22%] w-[260px] md:w-[350px] h-[260px] md:h-[350px] rounded-full bg-accent-glow/30 blur-[70px] pointer-events-none portal-pulse-core" />
          <div className="absolute right-[16%] md:right-[23%] top-[20%] md:top-[25%] w-[140px] md:w-[190px] h-[140px] md:h-[190px] rounded-full bg-accent-green/45 blur-[40px] pointer-events-none portal-pulse-haze" />

          {/* Deep Void Ambient Mist */}
          <div className="absolute right-[6%] md:right-[14%] bottom-[16%] md:bottom-[22%] w-[540px] md:w-[760px] h-[290px] rounded-full bg-accent-green/12 blur-[85px] pointer-events-none ambient-fog" />
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
            ref={portalParallaxRef}
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
          ref={characterParallaxRef}
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

        {/* 4. Atmospheric Fog Mist Layer (active during continuous world navigation past About) */}
        <div
          className="absolute inset-0 z-11 pointer-events-none ambient-fog transition-opacity duration-500"
          style={{
            opacity: isEventsActive || isRulesActive || isRulesOrFaq ? 0.3 : Math.min(0.3, Math.max(0, (scrollProgress - 0.45) * 2.0)),
            background:
              'radial-gradient(ellipse at 75% 45%, rgba(34, 255, 136, 0.14) 0%, transparent 65%)',
          }}
        />

        {/* 6. Interior Dimension Atmosphere */}
        <div
          className="absolute inset-0 transition-opacity duration-700 ease-out z-12 pointer-events-none"
          style={{ opacity: interiorHazeOpacity }}
        >
          <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#22ff88_1px,transparent_1px),linear-gradient(to_bottom,#22ff88_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-accent-green/10 blur-[120px]" />
          <div className="absolute top-[40%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-green/20 to-transparent" />
        </div>

        {/* 7. Section 07 Final Illuminated Gateway Aura */}
        <div
          className="absolute inset-0 transition-opacity duration-700 ease-out z-14 pointer-events-none"
          style={{ opacity: finalGatewayOpacity }}
        >
          <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[480px] md:w-[640px] h-[480px] rounded-full bg-accent-glow/20 blur-[100px] portal-pulse-core" />
          <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[280px] md:w-[360px] h-[360px] rounded-full bg-accent-green/30 blur-[60px]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[180px] h-[70%] bg-gradient-to-t from-accent-glow/25 via-accent-green/10 to-transparent blur-[40px]" />
        </div>

        {/* 8. Floating Square Pixel Canvas Engine with Cavern Wind Dynamics */}
        <AmbientCanvas
          className="z-18"
          enabled={hasHandoffStarted && activeSection !== 'home'}
          particleCount={45}
          speedMultiplier={1.0}
          scrollProgress={scrollProgress}
          activeSection={activeSection}
        />

        {/* 9. Soft Left Blend Gradient Corridor Mask (active during Events/Rules to blend text surface with continuous world) */}
        <div
          className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-500"
          style={{
            opacity: isEventsActive || isRulesActive || isRulesOrFaq ? 1.0 : Math.min(1.0, Math.max(0, (scrollProgress - 0.45) * 3.5)),
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, #020604 0%, #020604 46%, rgba(2, 6, 4, 0.96) 54%, rgba(2, 6, 4, 0.78) 66%, rgba(2, 6, 4, 0.35) 80%, transparent 92%)',
            }}
          />

          {/* Contrast veil active only for rules/faq reading surfaces */}
          <div
            className={cn(
              'absolute inset-0 transition-opacity duration-500',
              isRulesOrFaq ? 'opacity-85 bg-background-void' : 'opacity-0'
            )}
          />

          {/* Top Header Mask */}
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-background-void via-background-void/70 to-transparent" />

          {/* Bottom Ground Mask */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background-void via-background-void/75 to-transparent" />
        </div>

        {/* 10. Atmospheric Depth & Edge Vignette (active during Events/Rules) */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(2,6,4,0.85)_100%)] z-22 pointer-events-none transition-opacity duration-500"
          style={{
            opacity: isEventsActive || isRulesActive || isRulesOrFaq ? 1.0 : Math.min(1.0, Math.max(0, (scrollProgress - 0.45) * 3.5)),
          }}
        />
      </div>
    </div>
  );
};
