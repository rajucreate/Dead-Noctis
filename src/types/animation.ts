import gsap from 'gsap';

export type GSAPTimeline = ReturnType<typeof gsap.timeline>;

export interface IntroAnimationElements {
  overlay: HTMLElement | null;
  // Step 01: System Initialization
  step01Container: HTMLElement | null;
  step01Text: HTMLElement | null;
  step01ProgressBar: HTMLElement | null;
  step01Pixels: (HTMLElement | null)[];
  // Step 02: Logo Assemble & Glitch Reveal
  step02Container: HTMLElement | null;
  step02OrgText: HTMLElement | null;
  step02PresentsText: HTMLElement | null;
  step02Eyebrow: HTMLElement | null;
  step02TitleContainer: HTMLElement | null;
  step02TitleSlices: HTMLElement[];
  step02RgbGreen: HTMLElement | null;
  step02RgbCyan: HTMLElement | null;
  step02Subtitle: HTMLElement | null;
  step02Pixels: (HTMLElement | null)[];
}

export interface PortalTransitionElements {
  container: HTMLElement | null;
  portal: HTMLElement | null;
  screenFlash: HTMLElement | null;
  pixelParticles: HTMLElement[] | null;
}

export interface AmbientAnimationElements {
  canvas: HTMLCanvasElement | null;
  fogLayer: HTMLElement | null;
  portalPulse: HTMLElement | null;
  titleGlitch: HTMLElement | null;
}

export interface AnimationTimelineHandle {
  timeline: GSAPTimeline | null;
  play: () => void;
  pause: () => void;
  kill: () => void;
  revert: () => void;
  skip?: () => void;
}
