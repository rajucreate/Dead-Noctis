import { SiteConfig } from '@/types';
import klUniversityLogo from '@/assets/images/logos/kl-university.png';
import gdgLogo from '@/assets/images/logos/gdg.png';
import whhLogo from '@/assets/images/logos/whh.png';
import heroBackgroundImg from '@/assets/images/hero/hero-concept.jpg';
import aboutBackgroundImg from '@/assets/images/sections/about-background.jpg';
import eventsBackgroundImg from '@/assets/images/sections/events-background.jpg';
import titleImageImg from '@/assets/images/hero/title.png';

export const siteConfig: SiteConfig = {
  meta: {
    title: 'DEAD NOCTIS CTF – Level 1 | GDG KL University x WHH',
    description:
      'Dead Noctis CTF is a beginner-friendly capture the flag event organized by Google Developer Groups (GDG), KL University in collaboration with White Hat Hackers (WHH).',
  },

  navigation: [
    { id: 'home', label: 'HOME', href: '#' }, // TODO: Connect router when pages added
    { id: 'about', label: 'ABOUT', href: '#' }, // TODO: Connect router when pages added
    { id: 'events', label: 'EVENTS', href: '#' }, // TODO: Connect router when pages added
    { id: 'rules', label: 'RULES', href: '#' }, // TODO: Connect router when pages added
    { id: 'faq', label: 'FAQ', href: '#' }, // TODO: Connect router when pages added
    { id: 'register', label: 'REGISTER', href: '#', isCta: true }, // TODO: Connect router when pages added
  ],

  logos: {
    klUniversity: {
      src: klUniversityLogo,
      alt: 'KL University',
      width: 140,
      height: 40,
    },
    gdg: {
      src: gdgLogo,
      alt: 'Google Developer Groups',
      wordmark: 'Google Developer Groups',
      presentsText: 'PRESENTS',
      width: 48,
      height: 28,
    },
    whh: {
      src: whhLogo,
      alt: 'White Hat Hackers',
      width: 40,
      height: 40,
    },
  },

  hero: {
    presenterLine1: 'Google Developer Groups',
    presenterLine2: 'PRESENTS',
    eyebrow: 'THE',
    title: 'DEAD NOCTIS',
    subtitle: 'CTF - LEVEL 1 -',
    tagline: {
      prefix: 'ENTER THE DIMENSION WITH ',
      highlight: 'WHH',
    },
    primaryCta: 'REGISTER NOW →',
    secondaryCta: 'LEARN MORE ⌄',
    scrollLabel: 'SCROLL',
    showMetadataRow: false, // Disabled per specification: no event date or metadata row on hero
  },

  loader: {
    initializing: 'SYSTEM INITIALIZING...',
    loading: 'LOADING...',
  },

  colors: {
    backgroundVoid: '#020604',
    backgroundDark: '#050a07',
    accentGreen: '#22ff88',
    accentGlow: '#00ff66',
    textPrimary: '#e8f5ee',
    textMuted: '#8fa89a',
  },

  parallax: {
    enabled: true,
    header: {
      maxOffset: 2, // 1–2px
      friction: 0.08,
    },
    background: {
      maxOffset: 4, // 2–4px
      friction: 0.06,
    },
    character: {
      maxOffset: 5, // 3–5px
      friction: 0.05,
    },
    portal: {
      maxOffset: 8, // 5–8px
      friction: 0.04,
    },
  },

  glitch: {
    enabled: true,
    minIntervalSeconds: 8,
    maxIntervalSeconds: 12,
    durationSeconds: 0.35,
  },

  introTimings: {
    step01InitialLoadDuration: 1.2,
    step02LogoAssembleDuration: 1.0,
    step03WorldFadeInDuration: 1.4,
    step04TextAppearDuration: 0.8,
    step05CtaNavDuration: 0.6,
    step06FinalStateDuration: 0.4,
    step08CtaClickDuration: 1.5,
  },

  assetPaths: {
    heroBackground: heroBackgroundImg,
    aboutBackground: aboutBackgroundImg,
    eventsBackground: eventsBackgroundImg,
    titleImage: titleImageImg,
    portalLayer: undefined,
    characterLayer: undefined,
    fogLayer: undefined,
  },
};
