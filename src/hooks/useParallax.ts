import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

// ─────────────────────────────────────────────────────────────────────────────
// HERO 3D & PARALLAX CONFIG
// All tuning values (tilt angles, offsets, lerp factors, depths) in one place.
// ─────────────────────────────────────────────────────────────────────────────
export const HERO_3D_CONFIG = {
  /** Perspective distance for 3D container in px */
  perspective: 1200,

  /** rAF lerp smoothing factor (0 = frozen, 1 = instant snap). Factor ~0.08 */
  lerpFactor: 0.08,

  /** Max 3D tilt angles on pointer move (degrees) */
  maxTilt: {
    rotateY: 3.0, // horizontal pointer movement causes Y-axis rotation (deg)
    rotateX: 2.0, // vertical pointer movement causes X-axis rotation (deg)
  },

  /**
   * Max layer parallax offsets (px) and translateZ depths (px).
   * translate3d only; larger offset = closer layer.
   */
  layers: {
    /** Background plate: slowest movement, pushed back in Z */
    background: { x: 3, y: 3, z: -40 },
    /** Motivated character rim light / contact shadow */
    character:  { x: 4, y: 4, z: 20 },
    /** Volumetric portal rays & core glow */
    portal:     { x: 6, y: 6, z: 45 },
    /** Floating voxel cubes group */
    voxelCubes: { x: 7, y: 7, z: 55 },
    /** Fixed Header / Navbar */
    header:     { x: 1.5, y: 1.5, z: 20 },
    /** Hero CTA buttons */
    cta:        { x: 1.5, y: 1.5, z: 25 },
  },

  /** Container scale to prevent edge-bleed during 3D rotation and translation */
  containerScale: 1.06,
} as const;

export const PARALLAX_CONFIG = HERO_3D_CONFIG;

export interface ParallaxRefs {
  sceneContainerRef?: React.RefObject<HTMLElement | null>;
  backgroundRef?: React.RefObject<HTMLElement | null>;
  aboutBackgroundRef?: React.RefObject<HTMLElement | null>;
  eventsBackgroundRef?: React.RefObject<HTMLElement | null>;
  rulesBackgroundRef?: React.RefObject<HTMLElement | null>;
  characterRef?: React.RefObject<HTMLElement | null>;
  portalRef?: React.RefObject<HTMLElement | null>;
  voxelCubesRef?: React.RefObject<HTMLElement | null>;
  headerRef?: React.RefObject<HTMLElement | null>;
  ctaRef?: React.RefObject<HTMLElement | null>;
  onTiltUpdate?: (tiltX: number, tiltY: number) => void;
}

/**
 * Imperative 3D tilt & parallax hook.
 *
 * – Does NOT store mouse position in React state per frame.
 * – Single event-woken rAF loop with lerp smoothing (0.08).
 * – Automatically sleeps rAF loop when cursor is stationary to save 100% CPU/GPU cycles.
 * – Automatically pauses when document is hidden (tab inactive).
 * – Applies rotateX / rotateY to scene container and translate3d to layers via refs.
 * – Disabled on touch devices and when prefers-reduced-motion is active.
 * – Only starts after introComplete is true (useIntro hasHandoffStarted).
 * – Cleans up all listeners and cancels rAF on unmount.
 */
export function useParallax(refs: ParallaxRefs, introComplete: boolean) {
  const prefersReduced = usePrefersReducedMotion();

  // Store refs in a stable container to avoid re-running effect on every render
  const refsHolder = useRef(refs);
  refsHolder.current = refs;

  // Normalized mouse target from center (-1 to 1)
  const mouseTarget = useRef({ x: 0, y: 0 });
  // Smoothed (lerped) current pointer position
  const mouseCurrent = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);
  const isLoopRunning = useRef(false);

  useEffect(() => {
    if (!introComplete) return;

    // Disable pointer tilt on touch / coarse-pointer devices
    const isTouch =
      typeof window !== 'undefined' &&
      (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768);

    if (isTouch || prefersReduced) return;

    const { lerpFactor, maxTilt, layers } = HERO_3D_CONFIG;
    const EPSILON = 0.0005;

    const applyTransforms = (cx: number, cy: number) => {
      const currentRefs = refsHolder.current;

      // 1. Rotate scene container (rotateY with X-movement, rotateX with -Y-movement)
      if (currentRefs.sceneContainerRef?.current) {
        const rotY = (cx * maxTilt.rotateY).toFixed(3);
        const rotX = (-cy * maxTilt.rotateX).toFixed(3);
        currentRefs.sceneContainerRef.current.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      }

      // 2. Parallax layers with translate3d
      if (currentRefs.backgroundRef?.current) {
        const x = (cx * layers.background.x).toFixed(2);
        const y = (cy * layers.background.y).toFixed(2);
        currentRefs.backgroundRef.current.style.transform = `translate3d(${x}px, ${y}px, ${layers.background.z}px)`;
      }

      if (currentRefs.aboutBackgroundRef?.current) {
        const x = (cx * layers.background.x).toFixed(2);
        const y = (cy * layers.background.y).toFixed(2);
        currentRefs.aboutBackgroundRef.current.style.transform = `translate3d(${x}px, ${y}px, ${layers.background.z}px)`;
      }

      if (currentRefs.eventsBackgroundRef?.current) {
        const x = (cx * layers.background.x).toFixed(2);
        const y = (cy * layers.background.y).toFixed(2);
        currentRefs.eventsBackgroundRef.current.style.transform = `translate3d(${x}px, ${y}px, ${layers.background.z}px)`;
      }

      if (currentRefs.rulesBackgroundRef?.current) {
        const x = (cx * layers.background.x).toFixed(2);
        const y = (cy * layers.background.y).toFixed(2);
        currentRefs.rulesBackgroundRef.current.style.transform = `translate3d(${x}px, ${y}px, ${layers.background.z}px)`;
      }

      if (currentRefs.characterRef?.current) {
        const x = (cx * layers.character.x).toFixed(2);
        const y = (cy * layers.character.y).toFixed(2);
        currentRefs.characterRef.current.style.transform = `translate3d(${x}px, ${y}px, ${layers.character.z}px)`;
      }

      if (currentRefs.portalRef?.current) {
        const x = (cx * layers.portal.x).toFixed(2);
        const y = (cy * layers.portal.y).toFixed(2);
        currentRefs.portalRef.current.style.transform = `translate3d(${x}px, ${y}px, ${layers.portal.z}px)`;
      }

      if (currentRefs.voxelCubesRef?.current) {
        const x = (cx * layers.voxelCubes.x).toFixed(2);
        const y = (cy * layers.voxelCubes.y).toFixed(2);
        currentRefs.voxelCubesRef.current.style.transform = `translate3d(${x}px, ${y}px, ${layers.voxelCubes.z}px)`;
      }

      if (currentRefs.headerRef?.current) {
        const x = (cx * layers.header.x).toFixed(2);
        const y = (cy * layers.header.y).toFixed(2);
        currentRefs.headerRef.current.style.transform = `translate3d(${x}px, ${y}px, ${layers.header.z}px)`;
      }

      if (currentRefs.ctaRef?.current) {
        const x = (cx * layers.cta.x).toFixed(2);
        const y = (cy * layers.cta.y).toFixed(2);
        currentRefs.ctaRef.current.style.transform = `translate3d(${x}px, ${y}px, ${layers.cta.z}px)`;
      }

      if (currentRefs.onTiltUpdate) {
        currentRefs.onTiltUpdate(cx, cy);
      }
    };

    const loop = () => {
      if (document.hidden) {
        isLoopRunning.current = false;
        rafId.current = null;
        return;
      }

      const t = mouseTarget.current;
      const c = mouseCurrent.current;

      const dx = t.x - c.x;
      const dy = t.y - c.y;

      if (Math.abs(dx) > EPSILON || Math.abs(dy) > EPSILON) {
        c.x += dx * lerpFactor;
        c.y += dy * lerpFactor;
        applyTransforms(c.x, c.y);
        rafId.current = requestAnimationFrame(loop);
      } else {
        // Target reached: snap to exact target, apply transform once, and put loop to sleep
        c.x = t.x;
        c.y = t.y;
        applyTransforms(c.x, c.y);
        isLoopRunning.current = false;
        rafId.current = null;
      }
    };

    const wakeLoop = () => {
      if (!isLoopRunning.current && !document.hidden) {
        isLoopRunning.current = true;
        rafId.current = requestAnimationFrame(loop);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseTarget.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      };
      wakeLoop();
    };

    const handleMouseLeave = () => {
      mouseTarget.current = { x: 0, y: 0 };
      wakeLoop();
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (rafId.current !== null) {
          cancelAnimationFrame(rafId.current);
          rafId.current = null;
          isLoopRunning.current = false;
        }
      } else {
        wakeLoop();
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Initial wake to lerp to rest position
    wakeLoop();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
      isLoopRunning.current = false;

      // Reset transforms cleanly
      const currentRefs = refsHolder.current;
      if (currentRefs.sceneContainerRef?.current) currentRefs.sceneContainerRef.current.style.transform = '';
      if (currentRefs.backgroundRef?.current) currentRefs.backgroundRef.current.style.transform = '';
      if (currentRefs.characterRef?.current) currentRefs.characterRef.current.style.transform = '';
      if (currentRefs.portalRef?.current) currentRefs.portalRef.current.style.transform = '';
      if (currentRefs.voxelCubesRef?.current) currentRefs.voxelCubesRef.current.style.transform = '';
      if (currentRefs.headerRef?.current) currentRefs.headerRef.current.style.transform = '';
      if (currentRefs.ctaRef?.current) currentRefs.ctaRef.current.style.transform = '';
    };
  }, [introComplete, prefersReduced]);
}
