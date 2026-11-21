import React, { useRef, useState, useEffect, useCallback } from 'react';
import { about } from '@/content/siteContent';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { cn } from '@/utils/cn';

interface AboutSectionProps {
  className?: string;
}

/**
 * High-definition 3D Voxel / Holographic SVG Icons for the Highlights:
 * - LEARN: Cyber Terminal Console with pulsing command cursor and CRT scanlines
 * - SOLVE: 3D Isometric Translucent Voxel Cube with illuminated core
 * - CONNECT: Neural Network Nodes with glowing data links
 */
const HighlightIcon3D: React.FC<{ id: string; isHovered?: boolean }> = ({ id, isHovered }) => {
  switch (id) {
    case 'learn':
      return (
        <svg
          className={cn(
            'w-7 h-7 transition-all duration-300',
            isHovered
              ? 'drop-shadow-[0_0_14px_rgba(34,255,136,0.85)] scale-105'
              : 'drop-shadow-[0_0_8px_rgba(34,255,136,0.45)]'
          )}
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Outer Screen Bevel */}
          <rect
            x="2"
            y="3"
            width="24"
            height="18"
            rx="2"
            className="stroke-accent-green"
            strokeWidth="1.8"
            fill="rgba(4, 20, 11, 0.75)"
          />
          {/* Inner CRT Screen Area */}
          <rect
            x="4"
            y="5"
            width="20"
            height="14"
            rx="1"
            className="stroke-accent-green/40"
            strokeWidth="1"
            fill="rgba(34, 255, 136, 0.08)"
          />
          {/* Command Prompt Chevrons */}
          <path
            d="M7 9L11 12L7 15"
            className="stroke-accent-glow"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Pulsing Command Cursor Line */}
          <line
            x1="13.5"
            y1="14.5"
            x2="19"
            y2="14.5"
            className={cn('stroke-accent-green transition-opacity', isHovered ? 'animate-pulse' : 'opacity-85')}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Screen Top Scanline */}
          <line
            x1="5"
            y1="7.5"
            x2="23"
            y2="7.5"
            className="stroke-accent-green/30"
            strokeWidth="0.8"
            strokeDasharray="2 2"
          />
          {/* Terminal Pedestal Base */}
          <path
            d="M9 25H19M14 21V25"
            className="stroke-accent-green/80"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'solve':
      return (
        <svg
          className={cn(
            'w-7 h-7 transition-all duration-300',
            isHovered
              ? 'drop-shadow-[0_0_16px_rgba(34,255,136,0.9)] scale-105'
              : 'drop-shadow-[0_0_10px_rgba(34,255,136,0.5)]'
          )}
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Isometric Voxel Cube Outline */}
          <path
            d="M14 2.5L24.5 8.5V20.5L14 26.5L3.5 20.5V8.5L14 2.5Z"
            className="stroke-accent-green"
            strokeWidth="1.8"
            fill="rgba(4, 20, 11, 0.75)"
          />
          {/* Inner Voxel Facets */}
          <path
            d="M14 2.5V14.5M14 14.5L24.5 8.5M14 14.5L3.5 8.5"
            className="stroke-accent-glow"
            strokeWidth="1.8"
          />
          <path
            d="M14 14.5V26.5"
            className="stroke-accent-green/70"
            strokeWidth="1.5"
          />
          {/* Top Highlight Facet Tint */}
          <polygon
            points="14,3.5 23.5,8.8 14,14 4.5,8.8"
            fill="rgba(72, 255, 159, 0.28)"
          />
          {/* Right Facet Tint */}
          <polygon
            points="14,14.5 24,9 24,20 14,25.5"
            fill="rgba(34, 255, 136, 0.15)"
          />
          {/* Central Glowing Energy Core */}
          <circle
            cx="14"
            cy="14.5"
            r="2.2"
            fill="#48ff9f"
            className={cn('drop-shadow-[0_0_6px_#00ff66] transition-transform', isHovered ? 'scale-125' : '')}
          />
        </svg>
      );

    case 'connect':
    default:
      return (
        <svg
          className={cn(
            'w-7 h-7 transition-all duration-300',
            isHovered
              ? 'drop-shadow-[0_0_14px_rgba(34,255,136,0.85)] scale-105'
              : 'drop-shadow-[0_0_8px_rgba(34,255,136,0.45)]'
          )}
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Interconnected Neural/Network Links */}
          <line
            x1="7"
            y1="8"
            x2="21"
            y2="8"
            className="stroke-accent-green/60"
            strokeWidth="1.6"
            strokeDasharray="3 3"
          />
          <line
            x1="7"
            y1="8"
            x2="14"
            y2="21"
            className="stroke-accent-green"
            strokeWidth="1.8"
          />
          <line
            x1="21"
            y1="8"
            x2="14"
            y2="21"
            className="stroke-accent-green"
            strokeWidth="1.8"
          />
          {/* Center Nexus Pulse Lines */}
          <circle
            cx="14"
            cy="12.5"
            r="3"
            className="stroke-accent-glow/40"
            strokeWidth="1"
            fill="rgba(34,255,136,0.06)"
          />
          {/* Node 1 (Top Left) */}
          <circle cx="7" cy="8" r="3.2" fill="#03140a" className="stroke-accent-green" strokeWidth="1.8" />
          <circle cx="7" cy="8" r="1.5" fill="#48ff9f" />
          {/* Node 2 (Top Right) */}
          <circle cx="21" cy="8" r="3.2" fill="#03140a" className="stroke-accent-green" strokeWidth="1.8" />
          <circle cx="21" cy="8" r="1.5" fill="#48ff9f" />
          {/* Node 3 (Bottom Central Hub) */}
          <circle cx="14" cy="21" r="3.6" fill="#03140a" className="stroke-accent-glow" strokeWidth="2" />
          <circle cx="14" cy="21" r="1.8" fill="#00ff66" className={isHovered ? 'animate-pulse' : ''} />
        </svg>
      );
  }
};

interface HighlightItemData {
  id: string;
  title: string;
  subtitle: string;
  protocolTag: string;
  statusText: string;
  indexStr: string;
  index: number;
  sectionEntered: boolean;
}

const HIGHLIGHT_METADATA: Record<string, { protocolTag: string; statusText: string; indexStr: string }> = {
  learn: {
    protocolTag: 'PROTOCOL // 01',
    statusText: 'ACTIVE',
    indexStr: '01',
  },
  solve: {
    protocolTag: 'MATRIX // 02',
    statusText: 'DEPLOYED',
    indexStr: '02',
  },
  connect: {
    protocolTag: 'NETWORK // 03',
    statusText: 'SYNCED',
    indexStr: '03',
  },
};

/**
 * 3D Rendered Cyber Intelligence Briefing Card:
 *
 * Refined Features:
 * - Subtle depth between the terminal surface, borders, icons, and text (preserve-3d)
 * - Restrained emerald border illumination with dynamic perimeter highlight
 * - Occasional gentle light sweep on the terminal surface
 * - Smooth cursor-responsive perspective tilt (restrained to ~5° max)
 * - Gentle elevation on hover without excessive scaling (translateZ 10px, translateY -3px)
 * - Zero React state updates on pointer movement (direct CSS custom properties)
 * - Full accessibility: keyboard focus with visible ring, touch-safe, prefers-reduced-motion
 */
const AttractiveVoxelCard: React.FC<HighlightItemData> = ({
  id,
  title,
  subtitle,
  protocolTag,
  statusText,
  indexStr,
  index,
  sectionEntered,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const prefersReduced = usePrefersReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }
  }, []);

  // Update cursor tilt via CSS custom properties (0 React re-renders)
  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (prefersReduced || isTouchDevice) return;
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Normalized coordinates: -1 to 1
      const normX = Math.max(-1, Math.min(1, (x / rect.width - 0.5) * 2));
      const normY = Math.max(-1, Math.min(1, (y / rect.height - 0.5) * 2));

      // Subtle, restrained tilt angles (~5° max)
      const rx = -normY * 4.8;
      const ry = normX * 5.5;
      const glowX = (x / rect.width) * 100;
      const glowY = (y / rect.height) * 100;

      card.style.setProperty('--card-rx', `${rx.toFixed(2)}deg`);
      card.style.setProperty('--card-ry', `${ry.toFixed(2)}deg`);
      card.style.setProperty('--card-glow-x', `${glowX.toFixed(1)}%`);
      card.style.setProperty('--card-glow-y', `${glowY.toFixed(1)}%`);
    },
    [isTouchDevice, prefersReduced]
  );

  const handlePointerEnter = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (e.pointerType === 'touch' || isTouchDevice || prefersReduced) return;
      setIsHovered(true);
    },
    [isTouchDevice, prefersReduced]
  );

  const handlePointerLeave = useCallback(() => {
    setIsHovered(false);
    const card = cardRef.current;
    if (card) {
      card.style.setProperty('--card-rx', '0deg');
      card.style.setProperty('--card-ry', '0deg');
      card.style.setProperty('--card-glow-x', '50%');
      card.style.setProperty('--card-glow-y', '50%');
    }
  }, []);

  const handleFocus = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsHovered(false);
    const card = cardRef.current;
    if (card) {
      card.style.setProperty('--card-rx', '0deg');
      card.style.setProperty('--card-ry', '0deg');
      card.style.setProperty('--card-glow-x', '50%');
      card.style.setProperty('--card-glow-y', '50%');
    }
  }, []);

  // Compute active transform
  const getTransform = () => {
    if (prefersReduced) return undefined;
    if (!sectionEntered) {
      return 'translateY(24px)';
    }
    if (isHovered && !isTouchDevice) {
      return 'perspective(900px) rotateX(var(--card-rx, 0deg)) rotateY(var(--card-ry, 0deg)) translateZ(10px) translateY(-3px)';
    }
    return 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px) translateY(0px)';
  };

  // Compute transition timing
  const getTransition = () => {
    if (prefersReduced) return undefined;
    if (!sectionEntered) {
      const delay = index * 100 + 340;
      return `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;
    }
    if (isHovered) {
      return 'transform 0.12s cubic-bezier(0.25, 0.46, 0.45, 0.94), border-color 0.25s ease, box-shadow 0.25s ease';
    }
    return 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease, box-shadow 0.35s ease';
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={0}
      role="article"
      aria-label={`${title}: ${subtitle}`}
      className={cn(
        'relative group p-4 sm:p-5 lg:p-6 xl:p-7 select-none cursor-default overflow-hidden backdrop-blur-md',
        'w-full h-full flex flex-col justify-between',
        // Obsidian terminal surface with restrained emerald illumination
        'border border-accent-green/35 hover:border-accent-green/80',
        'shadow-[0_12px_36px_rgba(0,0,0,0.88)] hover:shadow-[0_0_30px_rgba(34,255,136,0.24)]',
        'chamfer-sm will-change-transform',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2 focus-visible:ring-offset-[#020604]',
        sectionEntered ? 'opacity-100' : 'opacity-0'
      )}
      style={{
        backgroundColor: 'rgba(3, 10, 6, 0.92)',
        transform: getTransform(),
        transformStyle: 'preserve-3d',
        transition: getTransition(),
      }}
    >
      {/* 1. Holographic Matrix Grid Backdrop Pattern (Z: 0px) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-35 transition-opacity duration-300"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(34, 255, 136, 0.28) 1px, transparent 1px)',
          backgroundSize: '14px 14px',
        }}
        aria-hidden="true"
      />

      {/* 2. Occasional Gentle Diagonal Light Sweep Across Terminal Surface */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <div
          className="absolute -inset-[100%] animate-intel-sweep pointer-events-none will-change-transform"
          style={{
            background:
              'linear-gradient(115deg, transparent 40%, rgba(34, 255, 136, 0.04) 47%, rgba(72, 255, 159, 0.12) 50%, rgba(34, 255, 136, 0.04) 53%, transparent 60%)',
          }}
        />
      </div>

      {/* 3. Traveling Emerald Border Ray (Thin perimeter pulse) */}
      <div
        className={cn(
          'absolute inset-0 pointer-events-none overflow-hidden transition-opacity duration-300 z-10',
          isHovered ? 'opacity-80' : 'opacity-20'
        )}
        style={{
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          padding: '1.2px',
        }}
        aria-hidden="true"
      >
        <div
          className="absolute -inset-[100%] animate-border-ray will-change-transform"
          style={{
            background:
              'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(34, 255, 136, 0.75) 16deg, transparent 36deg, transparent 360deg)',
          }}
        />
      </div>

      {/* 4. Illuminated Cyber Corner Brackets ⌜ ⌝ ⌞ ⌟ */}
      <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t-2 border-l-2 border-accent-green/60 group-hover:border-accent-glow transition-all duration-200 pointer-events-none" />
      <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t-2 border-r-2 border-accent-green/60 group-hover:border-accent-glow transition-all duration-200 pointer-events-none" />
      <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b-2 border-l-2 border-accent-green/60 group-hover:border-accent-glow transition-all duration-200 pointer-events-none" />
      <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b-2 border-r-2 border-accent-green/60 group-hover:border-accent-glow transition-all duration-200 pointer-events-none" />
      <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b-2 border-r-2 border-accent-green/60 group-hover:border-accent-glow transition-all duration-200 pointer-events-none" />

      {/* 7. Top Protocol Header & Live Status LED (Depth: Z: 14px) */}
      <div
        className="flex items-center justify-between gap-1.5 pb-3 mb-4 sm:pb-3.5 sm:mb-5 border-b border-ctf-border/40 will-change-transform"
        style={{
          transform: prefersReduced ? undefined : 'translateZ(14px)',
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="flex items-center gap-1.5 min-w-0">
          {/* Blinking Status LED */}
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-glow opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green shadow-neon-sm" />
          </span>
          <span className="font-mono text-[8.5px] sm:text-[9.5px] lg:text-[10px] tracking-wider text-accent-green/90 uppercase font-semibold truncate">
            {protocolTag}
          </span>
        </div>

        {/* Status Tag Chip */}
        <span className="font-mono text-[7.5px] sm:text-[8.5px] lg:text-[9px] px-1.5 py-0.5 bg-accent-green/10 text-accent-green border border-accent-green/30 tracking-widest uppercase shrink-0 font-medium">
          {statusText}
        </span>
      </div>

      {/* 8. Floating 3D Voxel Icon Chamber (Depth: Z: 28px -> 36px on hover) */}
      <div
        className="mb-5 flex items-center justify-between will-change-transform"
        style={{
          transform: prefersReduced ? undefined : `translateZ(${isHovered ? 36 : 26}px)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Illuminated 3D Pedestal with smooth hover response (shifts left on hover) */}
        <div
          className={cn(
            'w-12 h-12 p-2 rounded-xs flex items-center justify-center transition-all duration-300',
            'bg-[#06150c]/90 border border-accent-green/45 group-hover:border-accent-glow',
            'shadow-[0_0_16px_rgba(34,255,136,0.18)] group-hover:shadow-[0_0_24px_rgba(34,255,136,0.5)]',
            'group-hover:rotate-[-3deg] group-hover:scale-105 group-hover:-translate-x-1.5'
          )}
        >
          <HighlightIcon3D id={id} isHovered={isHovered} />
        </div>

        {/* Large Decorative Matrix Watermark Index (visible at idle, shifts right and highlights on hover) */}
        <span
          className={cn(
            'font-rajdhani font-bold text-3xl sm:text-4xl select-none will-change-transform',
            'transition-all duration-300 ease-out',
            'text-accent-green/55 group-hover:text-accent-glow',
            'group-hover:translate-x-2 group-hover:drop-shadow-[0_0_16px_rgba(34,255,136,0.9)]'
          )}
          style={{
            transform: prefersReduced ? undefined : 'translateZ(14px)',
          }}
        >
          {indexStr}
        </span>
      </div>

      {/* 9. Typography Block with refined hierarchy (Depth: Z: 20px) */}
      <div
        className="will-change-transform mb-5 flex-1 flex flex-col justify-start"
        style={{
          transform: prefersReduced ? undefined : 'translateZ(20px)',
          transformStyle: 'preserve-3d',
        }}
      >
        <h3 className="text-lg sm:text-xl font-bold font-rajdhani tracking-[0.16em] uppercase mb-2 text-white group-hover:text-accent-green transition-colors duration-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          {title}
        </h3>

        <p className="text-xs sm:text-sm text-[#a3cbb5] group-hover:text-[#d0ebe0] tracking-wide leading-relaxed font-sans font-normal transition-colors">
          {subtitle}
        </p>
      </div>

      {/* 10. Bottom Segmented 3-Bar Voxel Power Gauge (Depth: Z: 12px) */}
      <div
        className="pt-3.5 mt-auto border-t border-ctf-border/40 flex items-center justify-between font-mono text-[9px] text-ctf-muted/70 will-change-transform"
        style={{
          transform: prefersReduced ? undefined : 'translateZ(12px)',
          transformStyle: 'preserve-3d',
        }}
      >
        <span className="tracking-widest uppercase text-accent-green/85 group-hover:text-accent-green font-semibold transition-colors">
          LINK: 100% OK
        </span>

        {/* 3 Segmented Power Blocks */}
        <div className="flex items-center gap-1" aria-hidden="true">
          <span className="w-2 h-1.5 bg-accent-green shadow-neon-sm" />
          <span className="w-2 h-1.5 bg-accent-green shadow-neon-sm" />
          <span
            className={cn(
              'w-2 h-1.5 transition-all duration-200',
              isHovered ? 'bg-accent-glow shadow-neon-sm' : 'bg-accent-green/30'
            )}
          />
        </div>
      </div>
    </div>
  );
};

/**
 * Storyboard Frame 02: About Section ("02. ABOUT")
 * Interactive Intelligence Briefing:
 * - Positioned on the left with crystal-clear contrast over obsidian void (#020604)
 * - Smooth viewport entrance fade-and-rise reveal with subtle stagger
 * - Section label: "ABOUT"
 * - Large heading: "A NEW DIMENSION AWAITS"
 * - High readability body copy matching single source of truth (src/content/siteContent.ts)
 * - 3 Interactive Intelligence Highlight Cards (LEARN, SOLVE, CONNECT) with restrained 3D tilt & depth
 * - Preserves exact content, dimensions, and seamless continuous world integration
 */
export const AboutSection: React.FC<AboutSectionProps> = ({ className }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const prefersReduced = usePrefersReducedMotion();

  // Smooth viewport entrance observer (triggers only once upon entrance)
  useEffect(() => {
    if (prefersReduced) {
      setHasEntered(true);
      return;
    }

    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasEntered(true);
            observer.disconnect(); // Never re-triggers repeatedly on small scroll movements
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [prefersReduced]);

  return (
    <section
      id="about"
      data-bg="about"
      ref={sectionRef}
      className={cn(
        'relative min-h-screen w-full flex items-center justify-center py-28 sm:py-36 md:py-40 overflow-hidden select-none bg-[#080B09]',
        className
      )}
      aria-label="About The Dead Noctis CTF"
    >
      {/* Subtle Atmospheric Backdrop Scrim & Portal Softening Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* 1. Global ambient darkening: refined deep charcoal black/green overlay to sit behind content */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(8, 11, 9, 0.68) 0%, rgba(8, 11, 9, 0.44) 30%, rgba(8, 11, 9, 0.50) 70%, rgba(8, 11, 9, 0.76) 100%)',
          }}
        />

        {/* 2. Softened portal light baffle: tempers the bright glowing voxel portal light source without overpowering cards */}
        <div
          className="absolute top-[8%] right-[5%] sm:right-[10%] w-[520px] md:w-[660px] h-[520px] md:h-[660px] rounded-full"
          style={{
            background:
              'radial-gradient(circle at 60% 40%, rgba(8, 11, 9, 0.62) 0%, rgba(8, 11, 9, 0.35) 48%, transparent 74%)',
          }}
        />

        {/* 3. Reading bed behind header text (upper left) for effortless typography readability */}
        <div
          className="absolute top-0 left-0 w-full sm:w-[65%] md:w-[55%] h-[60%]"
          style={{
            background:
              'radial-gradient(ellipse at 25% 35%, rgba(8, 11, 9, 0.56) 0%, transparent 78%)',
          }}
        />

        {/* 4. Reading bed behind the three cards for grounded contrast */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[65%]"
          style={{
            background:
              'linear-gradient(to top, rgba(8, 11, 9, 0.58) 0%, rgba(8, 11, 9, 0.26) 70%, transparent 100%)',
          }}
        />

        {/* 5. Top & Bottom subtle seamless edge blending */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#080B09] via-[#080B09]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#080B09] via-[#080B09]/60 to-transparent" />
      </div>

      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20">
        {/* Full-Width Header Area */}
        <div className="w-full text-left mb-8 sm:mb-10 lg:mb-12">
          {/* Stagger Item 1: Section Overline Label & Tactical Intelligence Briefing Telemetry */}
          <div
            className="mb-4 sm:mb-6 flex flex-wrap items-center justify-between gap-3 will-change-transform"
            style={{
              transform: !hasEntered && !prefersReduced ? 'translateY(20px)' : 'translateY(0)',
              opacity: !hasEntered && !prefersReduced ? 0 : 1,
              transition:
                'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0ms, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0ms',
            }}
          >
            <div className="px-2.5 py-1 bg-[#03140a]/85 border border-accent-green/35 inline-flex items-center gap-2 select-none">
              <span className="w-1.5 h-1.5 bg-accent-green shadow-neon-sm" aria-hidden="true" />
              <span className="font-mono text-xs font-semibold tracking-[0.25em] text-accent-green uppercase">
                {about.label}
              </span>
            </div>

            {/* Tactical Briefing Status Indicator */}
            <div className="flex items-center gap-3 sm:gap-4 font-mono text-[10px] sm:text-xs">
              <span className="text-accent-green/75 tracking-wider font-mono hidden sm:inline">
                [SYS_ENTRY // 0xDEAD_NOCTIS]
              </span>
              <div className="flex items-center gap-2 tracking-widest text-accent-green/90 uppercase font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-glow opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green" />
                </span>
                <span>CLASSIFIED // LEVEL 1</span>
              </div>
            </div>
          </div>

          {/* Stagger Item 2: Main Headline ("A NEW DIMENSION AWAITS") */}
          <div
            className="will-change-transform mb-6 sm:mb-8"
            style={{
              transform: !hasEntered && !prefersReduced ? 'translateY(24px)' : 'translateY(0)',
              opacity: !hasEntered && !prefersReduced ? 0 : 1,
              transition:
                'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) 120ms, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 120ms',
            }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold font-rajdhani tracking-tight uppercase leading-[0.98] select-none">
              <span className="block text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                A NEW DIMENSION
              </span>
              <span className="block text-accent-green drop-shadow-[0_0_24px_rgba(34,255,136,0.85)]">
                AWAITS
              </span>
            </h2>
          </div>

          {/* Stagger Item 3: Description & Telemetry Status Badges (Following ref_style.jpg) */}
          <div
            className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 sm:gap-6 will-change-transform"
            style={{
              transform: !hasEntered && !prefersReduced ? 'translateY(24px)' : 'translateY(0)',
              opacity: !hasEntered && !prefersReduced ? 0 : 1,
              transition:
                'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) 240ms, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 240ms',
            }}
          >
            {/* Terminal Dossier Box */}
            <div className="relative flex-1 p-4 sm:p-5 bg-[#030906]/80 border border-accent-green/25 rounded-none overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-accent-green" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-accent-green" />

              <p className="font-mono text-xs sm:text-sm text-[#cbd5e1] leading-relaxed font-normal">
                The <span className="text-accent-green font-semibold">Dead Noctis CTF</span> is a beginner friendly capture the flag event organized by{' '}
                <span className="text-white font-semibold">Google Developer Groups, KL University</span> in collaboration with{' '}
                <span className="text-white font-semibold">White Hat Hackers</span>.
              </p>
            </div>

            {/* 2x2 Telemetry Metric Chips */}
            <div className="grid grid-cols-2 gap-2 sm:gap-2.5 w-full lg:w-auto shrink-0 font-mono text-[10px] sm:text-xs">
              <div className="px-3.5 py-2.5 bg-[#030906]/85 border border-accent-green/25 text-accent-green tracking-wider uppercase flex items-center justify-center font-medium whitespace-nowrap">
                TARGET: ALL SKILL LEVELS
              </div>
              <div className="px-3.5 py-2.5 bg-[#030906]/85 border border-accent-green/25 text-accent-green tracking-wider uppercase flex items-center justify-center font-medium whitespace-nowrap">
                TYPE: JEOPARDY / CTF
              </div>
              <div className="px-3.5 py-2.5 bg-[#030906]/85 border border-accent-green/25 text-accent-green tracking-wider uppercase flex items-center justify-center font-medium whitespace-nowrap">
                MODE: TEAMS / SOLO
              </div>
              <div className="px-3.5 py-2.5 bg-[#030906]/85 border border-accent-green/25 text-accent-green tracking-wider uppercase flex items-center justify-center font-medium whitespace-nowrap gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-glow shadow-neon-sm animate-pulse" />
                SYS: ONLINE
              </div>
            </div>
          </div>
        </div>

        {/* Stagger Item 4: Three Interactive Intelligence Highlight Cards (LEARN // SOLVE // CONNECT) */}
        {/* Full-width balanced 3-column system across the container */}
        <div
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 xl:gap-8 items-stretch"
          role="list"
          aria-label="Event Highlights"
        >
          {about.highlights.map((item, idx) => {
            const meta = HIGHLIGHT_METADATA[item.id] || {
              protocolTag: 'MODULE // 01',
              statusText: 'READY',
              indexStr: '01',
            };

            return (
              <div key={item.id} role="listitem" className="h-full flex flex-col">
                <AttractiveVoxelCard
                  id={item.id}
                  title={item.title}
                  subtitle={item.subtitle}
                  protocolTag={meta.protocolTag}
                  statusText={meta.statusText}
                  indexStr={meta.indexStr}
                  index={idx}
                  sectionEntered={hasEntered}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;