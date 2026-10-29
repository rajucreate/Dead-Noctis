import gsap from 'gsap';
import { IntroAnimationElements, AnimationTimelineHandle } from '@/types/animation';

/**
 * Creates and orchestrates the master cinematic intro sequence.
 * 
 * SCREEN 01 — SYSTEM INITIALIZATION:
 * - Pure black / near-black empty viewport.
 * - Sparse tiny glowing green/cyan square digital pixels (with subtle flicker).
 * - Centered "SYSTEM INITIALIZING..." text with wide tracking.
 * - Minimal, thin, short green progress line filling to full underneath.
 * - Hold -> pixels intensify -> short glitch -> micro blackout.
 * 
 * SCREEN 02 — LOGO ASSEMBLE / GLITCH REVEAL:
 * - Upper-middle: "Google Developer Groups", then "P R E S E N T S".
 * - Sparse green digital fragments appear around title.
 * - "THE" flickers in (green).
 * - "DEAD NOTICS" assembles from fragmented horizontal slices with controlled RGB glitch.
 * - Slices rapidly stabilize into the clean, readable, dominant distressed title.
 * - "CTF - LEVEL 1" appears with strong bright green reveal directly beneath.
 * - Entire title settles with substantial black negative space.
 * - Smooth dissolve to live homepage.
 */
export function createIntroTimeline(
  elements: IntroAnimationElements,
  onComplete?: () => void
): AnimationTimelineHandle {
  const {
    overlay,
    step01Container,
    step01Text,
    step01ProgressBar,
    step01Pixels,
    step02Container,
    step02OrgText,
    step02PresentsText,
    step02Eyebrow,
    step02TitleContainer,
    step02TitleSlices,
    step02RgbGreen,
    step02RgbCyan,
    step02Subtitle,
    step02Pixels,
  } = elements;

  const validPixels01 = step01Pixels.filter((el): el is HTMLElement => el !== null);
  const validPixels02 = step02Pixels.filter((el): el is HTMLElement => el !== null);

  const finishIntro = () => {
    if (overlay) {
      overlay.style.pointerEvents = 'none';
      overlay.style.display = 'none';
    }
    if (onComplete) onComplete();
  };

  const tl = gsap.timeline({
    paused: true,
    onComplete: finishIntro,
  });

  // 1. Initial State Setup (Ensures Screen 01 starts almost completely black)
  if (overlay) {
    gsap.set(overlay, { display: 'flex', opacity: 1, pointerEvents: 'auto' });
  }
  if (step01Container) {
    gsap.set(step01Container, { display: 'flex', opacity: 1 });
  }
  if (step01Text) {
    gsap.set(step01Text, { opacity: 0, y: 0 });
  }
  if (step01ProgressBar) {
    gsap.set(step01ProgressBar, { scaleX: 0, transformOrigin: 'center center' });
  }
  if (validPixels01.length > 0) {
    gsap.set(validPixels01, { opacity: 0, scale: 0 });
  }

  // Screen 02 elements initially hidden in micro-blackout
  if (step02Container) {
    gsap.set(step02Container, { display: 'none', opacity: 0 });
  }
  if (step02OrgText) {
    gsap.set(step02OrgText, { opacity: 0, y: -6 });
  }
  if (step02PresentsText) {
    gsap.set(step02PresentsText, { opacity: 0, y: -4 });
  }
  if (step02Eyebrow) {
    gsap.set(step02Eyebrow, { opacity: 0, scale: 0.95 });
  }
  if (step02TitleContainer) {
    gsap.set(step02TitleContainer, { opacity: 0 });
  }
  if (step02TitleSlices.length > 0) {
    step02TitleSlices.forEach((slice, idx) => {
      const offsetX = idx % 2 === 0 ? -32 : 32;
      gsap.set(slice, { opacity: 0, x: offsetX });
    });
  }
  if (step02RgbGreen) {
    gsap.set(step02RgbGreen, { opacity: 0, x: 0 });
  }
  if (step02RgbCyan) {
    gsap.set(step02RgbCyan, { opacity: 0, x: 0 });
  }
  if (step02Subtitle) {
    gsap.set(step02Subtitle, { opacity: 0, y: 8 });
  }
  if (validPixels02.length > 0) {
    gsap.set(validPixels02, { opacity: 0, scale: 0 });
  }

  // =========================================================================
  // SCREEN 01 — SYSTEM INITIALIZATION
  // =========================================================================

  // 1. Brief pure black hold (0.15s)
  tl.to({}, { duration: 0.15 });

  // 2. Tiny green square digital pixels begin appearing sparsely
  if (validPixels01.length > 0) {
    tl.to(validPixels01, {
      opacity: (i) => (i % 2 === 0 ? 0.85 : 0.45),
      scale: 1,
      duration: 0.5,
      stagger: 0.08,
      ease: 'power1.out',
    });

    // 3. A couple of pixels subtly flicker
    const flickerPixel1 = validPixels01[0];
    const flickerPixel2 = validPixels01[3] || validPixels01[1];
    if (flickerPixel1 && flickerPixel2) {
      tl.to(
        [flickerPixel1, flickerPixel2],
        {
          opacity: 0.25,
          duration: 0.1,
          yoyo: true,
          repeat: 2,
          ease: 'steps(2)',
        },
        '-=0.2'
      );
    }
  }

  // 4. "SYSTEM INITIALIZING..." fades in cleanly in center
  if (step01Text) {
    tl.to(
      step01Text,
      {
        opacity: 1,
        duration: 0.45,
        ease: 'power2.out',
      },
      '-=0.2'
    );
  }

  // 5. Small minimal green loading line appears underneath and fills to full
  if (step01ProgressBar) {
    tl.to(
      step01ProgressBar,
      {
        scaleX: 1,
        duration: 1.5,
        ease: 'power2.inOut',
      },
      '+=0.1'
    );
  }

  // 6. Hold this state briefly
  tl.to({}, { duration: 0.25 });

  // 7. Transition: Pixels intensify -> short digital glitch flicker
  if (step01Text && step01ProgressBar) {
    tl.to([step01Text, step01ProgressBar], {
      x: -2,
      opacity: 0.85,
      duration: 0.05,
      yoyo: true,
      repeat: 1,
      ease: 'steps(1)',
    })
      .to([step01Text, step01ProgressBar], {
        x: 2,
        opacity: 0.9,
        duration: 0.05,
        yoyo: true,
        repeat: 1,
        ease: 'steps(1)',
      });
  }

  // 8. Screen 01 elements disappear -> micro blackout frame
  tl.to(
    step01Container,
    {
      opacity: 0,
      duration: 0.15,
      ease: 'power2.in',
      onComplete: () => {
        if (step01Container) step01Container.style.display = 'none';
        if (step02Container) step02Container.style.display = 'flex';
      },
    },
    '+=0.05'
  );

  // Micro blackout gap (0.18s of pure black stillness)
  tl.to({}, { duration: 0.18 });

  // =========================================================================
  // SCREEN 02 — LOGO ASSEMBLE / GLITCH REVEAL
  // =========================================================================

  // Fade in Screen 02 container
  tl.to(step02Container, {
    opacity: 1,
    duration: 0.05,
  });

  // 1. "Google Developer Groups" appears subtly
  if (step02OrgText) {
    tl.to(step02OrgText, {
      opacity: 1,
      y: 0,
      duration: 0.38,
      ease: 'power2.out',
    });
  }

  // 2. "P R E S E N T S" appears underneath
  if (step02PresentsText) {
    tl.to(
      step02PresentsText,
      {
        opacity: 1,
        y: 0,
        duration: 0.32,
        ease: 'power2.out',
      },
      '-=0.15'
    );
  }

  // 3. Small green digital fragments/pixels begin appearing around title area
  if (validPixels02.length > 0) {
    tl.to(
      validPixels02,
      {
        opacity: (i) => (i % 2 === 0 ? 0.75 : 0.4),
        scale: 1,
        duration: 0.35,
        stagger: 0.04,
        ease: 'power1.out',
      },
      '-=0.1'
    );
  }

  // 4. "THE" flickers into existence (green)
  if (step02Eyebrow) {
    tl.to(
      step02Eyebrow,
      {
        opacity: 1,
        scale: 1,
        duration: 0.25,
        ease: 'steps(2)',
      },
      '-=0.15'
    );
  }

  // 5. "DEAD NOTICS" begins assembling from fragmented horizontal pieces
  if (step02TitleContainer) {
    tl.to(
      step02TitleContainer,
      {
        opacity: 1,
        duration: 0.15,
        ease: 'power1.out',
      },
      '-=0.1'
    );
  }

  // 6. Horizontal glitch slices briefly offset and snap to 0
  if (step02TitleSlices.length > 0) {
    tl.to(
      step02TitleSlices,
      {
        opacity: 1,
        x: 0,
        duration: 0.35,
        stagger: 0.02,
        ease: 'back.out(2.2)',
      },
      '-=0.1'
    );
  }

  // 7. RGB / color-channel separation flash (Green & Cyan burst)
  if (step02RgbGreen && step02RgbCyan) {
    tl.to(
      [step02RgbGreen, step02RgbCyan],
      {
        opacity: 0.8,
        duration: 0.06,
        ease: 'steps(1)',
      },
      '-=0.15'
    )
      .to(
        step02RgbGreen,
        {
          x: -6,
          duration: 0.06,
          ease: 'power1.out',
        },
        '<'
      )
      .to(
        step02RgbCyan,
        {
          x: 6,
          duration: 0.06,
          ease: 'power1.out',
        },
        '<'
      )
      .to([step02RgbGreen, step02RgbCyan], {
        opacity: 0,
        x: 0,
        duration: 0.08,
        ease: 'power1.in',
      });
  }

  // 8. The letters rapidly stabilize
  // 9. "CTF - LEVEL 1" appears with a stronger green reveal directly beneath
  if (step02Subtitle) {
    tl.to(
      step02Subtitle,
      {
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: 'power2.out',
      },
      '-=0.1'
    );
  }

  // 10. The entire title settles into the final clean state.
  // Hold the settled composition with substantial black negative space (2.6s)
  tl.to({}, { duration: 2.6 });

  // Transition: Smooth cinematic dissolve of blackout overlay to reveal live homepage
  tl.to(overlay, {
    opacity: 0,
    duration: 0.85,
    ease: 'power2.inOut',
  });

  return {
    timeline: tl,
    play: () => tl.play(),
    pause: () => tl.pause(),
    kill: () => tl.kill(),
    revert: () => tl.revert(),
    skip: () => {
      tl.progress(1);
      finishIntro();
    },
  };
}
