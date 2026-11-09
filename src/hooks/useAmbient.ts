import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

export interface UseAmbientOptions {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  /**
   * Pass `hasHandoffStarted` from useIntro() so the canvas only starts
   * after the intro has finished. Setting to false pauses/prevents rendering.
   */
  enabled?: boolean;
  /** Number of floating particle squares (30-50 recommended). */
  particleCount?: number;
  speedMultiplier?: number;
  /**
   * Scroll progress (0.0 to 1.0) and active section for scroll-driven particle dynamics.
   * Particles shift trajectory, drift vector, and sway when scrolling into the cavern.
   */
  scrollProgress?: number;
  activeSection?: string;
}

interface Particle {
  x: number;
  y: number;
  size: number;         // 1-3 px square
  depthTier: 0 | 1 | 2; // 0 = far background, 1 = midground, 2 = foreground
  speedY: number;       // upward drift speed
  speedX: number;       // lateral drift
  swaySpeed: number;    // horizontal sway frequency
  swayAmp: number;      // horizontal sway amplitude
  swayPhase: number;
  baseAlpha: number;
  alphaPulseSpeed: number;
  alphaPulsePhase: number;
  isPortalSpore: boolean;
}

/**
 * Ambient cyber-voxel particle canvas:
 * Minecraft-inspired dimensional energy motes drifting across the continuous obsidian void.
 *
 * Enhanced with:
 * – Multi-depth layer separation (far background dust, mid-plane embers, foreground voxel motes).
 * – Portal energy emission in the Hero section (particles materialize from the obsidian portal).
 * – Dynamic environmental drafts: cavern drafts in About, updrafts around Events floating monolith, matrix vectors in Rules.
 *
 * Performance rules:
 * – Animates strictly via canvas2d, 0 layout thrash.
 * – DPR capped at 2.
 * – rAF auto-pauses when tab is hidden (visibilitychange).
 * – All listeners + rAF cancelled on unmount.
 * – Only starts when `enabled` is true (gated on intro-complete).
 * – Respects prefers-reduced-motion.
 */
export function useAmbient({
  canvasRef,
  enabled = true,
  particleCount = 45,
  speedMultiplier = 1,
  scrollProgress = 0,
  activeSection = 'home',
}: UseAmbientOptions) {
  const prefersReduced = usePrefersReducedMotion();

  // Track scroll state in refs to prevent recreating the canvas/particles on scroll
  const scrollProgressRef = useRef(scrollProgress);
  const activeSectionRef = useRef(activeSection);

  useEffect(() => {
    scrollProgressRef.current = scrollProgress;
    activeSectionRef.current = activeSection;
  }, [scrollProgress, activeSection]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !enabled || prefersReduced) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // DPR capped at 2 to avoid overdraw on HiDPI
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = canvas.parentElement?.clientWidth || window.innerWidth;
    let height = canvas.parentElement?.clientHeight || window.innerHeight;

    const setSize = () => {
      width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.parentElement?.clientHeight || window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };
    setSize();

    const handleResize = () => {
      setSize();
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Clamp particle count to 35-50 range for optimum performance
    const count = Math.min(50, Math.max(35, particleCount));

    const createParticle = (spawnAtPortal = false): Particle => {
      const isPortal = spawnAtPortal && Math.random() < 0.35;
      const tier: 0 | 1 | 2 = Math.random() < 0.45 ? 0 : Math.random() < 0.8 ? 1 : 2;
      const size = tier === 0 ? 1 : tier === 1 ? 2 : 3;

      let initX = Math.random() * width;
      let initY = Math.random() * (height + 60);

      let initSpeedX = 0;
      if (isPortal) {
        // Spawn near the right-hand obsidian portal center (75% X, 38% Y)
        initX = width * 0.74 + (Math.random() - 0.5) * 120;
        initY = height * 0.38 + (Math.random() - 0.5) * 180;
        initSpeedX = (Math.random() - 0.55) * 0.6; // gentle lateral dispersal
      }

      const speedFactor = tier === 0 ? 0.65 : tier === 1 ? 1.0 : 1.35;

      return {
        x: initX,
        y: initY,
        size,
        depthTier: tier,
        speedY: (0.2 + Math.random() * 0.45) * speedMultiplier * speedFactor,
        speedX: initSpeedX,
        swaySpeed: 0.003 + Math.random() * 0.007,
        swayAmp: (4 + Math.random() * 14) * (tier === 0 ? 0.6 : 1.0),
        swayPhase: Math.random() * Math.PI * 2,
        baseAlpha: tier === 0 ? 0.25 + Math.random() * 0.3 : tier === 1 ? 0.45 + Math.random() * 0.4 : 0.65 + Math.random() * 0.3,
        alphaPulseSpeed: 0.01 + Math.random() * 0.02,
        alphaPulsePhase: Math.random() * Math.PI * 2,
        isPortalSpore: isPortal,
      };
    };

    const particles: Particle[] = Array.from({ length: count }, (_, i) =>
      createParticle(i < 12)
    );

    let time = 0;
    let rafId: number;
    let running = true;

    const render = () => {
      if (!running) return;
      time += 1;
      ctx.clearRect(0, 0, width, height);

      const sp = scrollProgressRef.current;
      const active = activeSectionRef.current;
      const isAbout = active === 'about';
      const isEvents = active === 'events';
      const isRules = active === 'rules';

      // Environmental draft dynamics based on current world section
      let envDraftX = 0;
      let envDraftYMultiplier = 1.0;

      if (sp < 0.22) {
        // Hero: portal updraft & subtle left dispersal
        envDraftX = -0.15;
      } else if (isAbout || (sp >= 0.22 && sp < 0.48)) {
        // Cavern: gentle lateral draft towards glowing aperture
        envDraftX = 0.55;
      } else if (isEvents || (sp >= 0.48 && sp < 0.72)) {
        // Floating Island: strong thermal updraft
        envDraftYMultiplier = 1.45;
        envDraftX = -0.1;
      } else if (isRules || sp >= 0.72) {
        // Matrix: crisp directional stream
        envDraftX = 0.25;
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Vertical drift with depth scaling & environmental updraft
        p.y -= p.speedY * envDraftYMultiplier;

        // Lateral drift & sway
        p.x += p.speedX + envDraftX * (p.depthTier === 0 ? 0.5 : 1.0);

        // Respawn boundaries
        if (p.y < -p.size) {
          // If in hero view, respawn a portion at the portal
          const respawnAtPortal = sp < 0.25 && Math.random() < 0.4;
          if (respawnAtPortal) {
            p.x = width * 0.74 + (Math.random() - 0.5) * 100;
            p.y = height * 0.38 + (Math.random() - 0.5) * 160;
            p.speedX = (Math.random() - 0.6) * 0.6;
          } else {
            p.y = height + p.size;
            p.x = Math.random() * width;
            p.speedX = 0;
          }
        }

        // Horizontal screen wrapping
        if (p.x > width + p.size) {
          p.x = -p.size;
        } else if (p.x < -p.size) {
          p.x = width + p.size;
        }

        // Horizontal harmonic sway
        const renderX = p.x + Math.sin(time * p.swaySpeed + p.swayPhase) * p.swayAmp;

        // Pulsing opacity & edge fading
        const alphaPulse = 0.5 + 0.5 * Math.sin(time * p.alphaPulseSpeed + p.alphaPulsePhase);
        const edgeFadeY = Math.min(1, Math.max(0, p.y / 70));
        const alpha = p.baseAlpha * (0.7 + 0.3 * alphaPulse) * edgeFadeY;

        if (alpha <= 0.01) continue;

        // Multi-depth pixel rendering
        const rx = Math.round(renderX);
        const ry = Math.round(p.y);

        if (p.depthTier === 2) {
          // Foreground glowing voxel mote: bright center with soft emerald aura
          ctx.fillStyle = `rgba(34, 255, 136, ${(alpha * 0.35).toFixed(3)})`;
          ctx.fillRect(rx - 1, ry - 1, p.size + 2, p.size + 2);

          ctx.fillStyle = `rgba(180, 255, 215, ${alpha.toFixed(3)})`;
          ctx.fillRect(rx, ry, p.size, p.size);
        } else if (p.depthTier === 1) {
          // Mid-depth cyber emerald pixel
          ctx.fillStyle = `rgba(34, 255, 136, ${alpha.toFixed(3)})`;
          ctx.fillRect(rx, ry, p.size, p.size);
        } else {
          // Far background deep void dust
          ctx.fillStyle = `rgba(15, 160, 80, ${(alpha * 0.65).toFixed(3)})`;
          ctx.fillRect(rx, ry, p.size, p.size);
        }
      }

      rafId = requestAnimationFrame(render);
    };

    // Pause the rAF loop when the tab is hidden to save power.
    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
      } else {
        rafId = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    rafId = requestAnimationFrame(render);

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [canvasRef, enabled, particleCount, speedMultiplier, prefersReduced]);
}
