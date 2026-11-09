export interface NavItem {
  id: string;
  label: string;
  href: string;
  isCta?: boolean;
}

export interface SiteLogos {
  klUniversity: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  gdg: {
    src: string;
    alt: string;
    wordmark: string;
    presentsText: string;
    width: number;
    height: number;
  };
  whh: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface HeroCopy {
  presenterLine1: string;
  presenterLine2: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  tagline: {
    prefix: string;
    highlight: string;
  };
  primaryCta: string;
  secondaryCta: string;
  scrollLabel: string;
  showMetadataRow: boolean;
}

export interface LoaderCopy {
  initializing: string;
  loading: string;
}

export interface ParallaxLayerConfig {
  maxOffset: number;
  friction: number;
}

export interface ParallaxConfig {
  enabled: boolean;
  header: ParallaxLayerConfig;
  background: ParallaxLayerConfig;
  character: ParallaxLayerConfig;
  portal: ParallaxLayerConfig;
}

export interface GlitchConfig {
  enabled: boolean;
  minIntervalSeconds: number;
  maxIntervalSeconds: number;
  durationSeconds: number;
}

export interface IntroTimingConfig {
  step01InitialLoadDuration: number;
  step02LogoAssembleDuration: number;
  step03WorldFadeInDuration: number;
  step04TextAppearDuration: number;
  step05CtaNavDuration: number;
  step06FinalStateDuration: number;
  step08CtaClickDuration: number;
}

export interface ThemeColors {
  backgroundDark: string;
  backgroundVoid: string;
  accentGreen: string;
  accentGlow: string;
  textPrimary: string;
  textMuted: string;
}

export interface SiteConfig {
  meta: {
    title: string;
    description: string;
  };
  navigation: NavItem[];
  logos: SiteLogos;
  hero: HeroCopy;
  loader: LoaderCopy;
  colors: ThemeColors;
  parallax: ParallaxConfig;
  glitch: GlitchConfig;
  introTimings: IntroTimingConfig;
  assetPaths: {
    heroBackground: string;
    aboutBackground?: string;
    eventsBackground?: string;
    titleImage: string;
    portalLayer?: string;
    characterLayer?: string;
    fogLayer?: string;
  };
}
