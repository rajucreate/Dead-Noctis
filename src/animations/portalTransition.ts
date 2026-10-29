import gsap from 'gsap';
import { PortalTransitionElements, AnimationTimelineHandle } from '@/types/animation';
import { siteConfig } from '@/config/site';

/**
 * Creates the CTA portal click transition timeline.
 * Corresponds to Storyboard Step 08:
 * - On clicking 'Register Now', portal glows -> screen flashes green -> pixels break apart
 * - For current scope: plays portal animation, then returns to hero (no routing yet)
 *
 * @param elements DOM elements for portal transition
 * @param onComplete Callback invoked when transition sequence finishes
 * @returns AnimationTimelineHandle controller
 */
export function createPortalTransitionTimeline(
  elements: PortalTransitionElements,
  onComplete?: () => void
): AnimationTimelineHandle {
  const tl = gsap.timeline({
    paused: true,
    onComplete: () => {
      if (onComplete) onComplete();
    },
  });

  // TODO: Implement Step 08 portal glow -> screen flash -> pixel breakout
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
