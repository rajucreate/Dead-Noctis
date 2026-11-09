import gsap from 'gsap';
import { PortalTransitionElements, AnimationTimelineHandle } from '@/types/animation';

/**
 * Creates the CTA portal click transition timeline.
 * Corresponds strictly to Storyboard Frame 08:
 * - On clicking 'REGISTER NOW':
 *   1. Localized portal energy increase
 *   2. Intensify emerald portal glow
 *   3. Brief green exposure flash
 *   4. Controlled pixel dispersion
 *   5. Smooth transition to registration destination
 *
 * @param elements DOM elements for portal transition
 * @param onComplete Callback invoked when transition sequence finishes
 * @returns AnimationTimelineHandle controller
 */
export function createPortalTransitionTimeline(
  elements: PortalTransitionElements,
  onComplete?: () => void
): AnimationTimelineHandle {
  const { portal, screenFlash, pixelParticles } = elements;

  const tl = gsap.timeline({
    paused: true,
    onComplete: () => {
      if (onComplete) onComplete();
    },
  });

  // Ensure initial states
  if (screenFlash) {
    gsap.set(screenFlash, { opacity: 0, display: 'block' });
  }

  if (pixelParticles && pixelParticles.length > 0) {
    pixelParticles.forEach((pixel) => {
      gsap.set(pixel, { opacity: 0, scale: 0, x: 0, y: 0 });
    });
  }

  // 1. Localized Portal Energy Surge (0.00s -> 0.28s)
  if (portal) {
    tl.to(
      portal,
      {
        scale: 1.35,
        filter: 'brightness(2.2) drop-shadow(0 0 40px #22ff88)',
        duration: 0.28,
        ease: 'power2.in',
      },
      0
    );
  }

  // 2. Green Exposure Flash (0.15s -> 0.35s in, then 0.35s -> 0.65s out)
  if (screenFlash) {
    tl.to(
      screenFlash,
      {
        opacity: 0.75,
        duration: 0.2,
        ease: 'power2.in',
      },
      0.12
    );

    tl.to(
      screenFlash,
      {
        opacity: 0,
        duration: 0.32,
        ease: 'power2.out',
      },
      0.32
    );
  }

  // 3. Controlled Pixel Dispersion Outward from Portal (0.18s -> 0.58s)
  if (pixelParticles && pixelParticles.length > 0) {
    tl.to(
      pixelParticles,
      {
        opacity: 1,
        scale: () => 0.8 + Math.random() * 0.8,
        duration: 0.1,
        stagger: 0.005,
      },
      0.16
    );

    tl.to(
      pixelParticles,
      {
        x: () => (Math.random() - 0.5) * 500,
        y: () => (Math.random() - 0.5) * 400,
        rotation: () => (Math.random() - 0.5) * 180,
        scale: 0,
        opacity: 0,
        duration: 0.42,
        ease: 'power3.out',
        stagger: 0.005,
      },
      0.22
    );
  }

  // 4. Return Portal to Normal Glow (0.35s -> 0.65s)
  if (portal) {
    tl.to(
      portal,
      {
        scale: 1.0,
        filter: 'brightness(1.0) drop-shadow(0 0 15px rgba(34,255,136,0.3))',
        duration: 0.3,
        ease: 'power2.out',
      },
      0.35
    );
  }

  return {
    timeline: tl,
    play: () => tl.play(0),
    pause: () => tl.pause(),
    kill: () => tl.kill(),
    revert: () => tl.revert(),
    skip: () => {
      tl.progress(1);
      if (onComplete) onComplete();
    },
  };
}
