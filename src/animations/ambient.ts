import gsap from 'gsap';
import { AmbientAnimationElements, AnimationTimelineHandle } from '@/types/animation';
import { siteConfig } from '@/config/site';

/**
 * Creates the ongoing ambient idle loop timeline.
 * Corresponds to Storyboard Step 09:
 * - Slow floating particles
 * - Subtle fog movement
 * - Occasional glitch on title every 8-12 seconds
 * - Gentle portal green breathing/pulse
 *
 * @param elements DOM elements for ambient animations
 * @returns AnimationTimelineHandle controller
 */
export function createAmbientTimeline(
  elements: AmbientAnimationElements
): AnimationTimelineHandle {
  const tl = gsap.timeline({
    repeat: -1,
    paused: true,
  });

  // TODO: Implement ambient idle loops
  void elements;
  void siteConfig;

  return {
    timeline: tl,
    play: () => tl.play(),
    pause: () => tl.pause(),
    kill: () => tl.kill(),
    revert: () => tl.revert(),
    skip: () => tl.progress(1),
  };
}
