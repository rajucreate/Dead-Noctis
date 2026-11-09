import React, { useRef, useState, useEffect, useCallback } from 'react';
import { about } from '@/content/siteContent';
import { SectionLabel } from '@/components/ui/SectionLabel';
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
        'relative group p-5 sm:p-6 select-none cursor-default overflow-hidden',
        'w-full h-full flex flex-col justify-between',
        // Obsidian terminal surface with restrained emerald illumination
        'bg-[#030906]/92 border border-accent-green/30 hover:border-accent-green/85',
        'shadow-[0_8px_32px_rgba(0,0,0,0.85)] hover:shadow-[0_0_30px_rgba(34,255,136,0.22)]',
        'chamfer-sm will-change-transform',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2 focus-visible:ring-offset-[#020604]',
        sectionEntered ? 'opacity-100' : 'opacity-0'
      )}
      style={{
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

      {/* 3. Dynamic Emerald Edge Highlight tracking pointer position */}
      <div
        className={cn(
          'absolute inset-0 pointer-events-none transition-opacity duration-300 z-10',
          isHovered ? 'opacity-100' : 'opacity-0'
        )}
        style={{
          background:
            'radial-gradient(220px circle at var(--card-glow-x, 50%) var(--card-glow-y, 50%), rgba(34, 255, 136, 0.5), transparent 72%)',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          padding: '1.2px',
        }}
        aria-hidden="true"
      />

      {/* 4. Traveling Emerald Border Ray (Thin perimeter pulse) */}
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

      {/* 5. Cursor-Following Specular Radial Glare (Z: 4px) */}
      {isHovered && !prefersReduced && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-150 z-0"
          style={{
            background:
              'radial-gradient(180px circle at var(--card-glow-x, 50%) var(--card-glow-y, 50%), rgba(34, 255, 136, 0.14), transparent 72%)',
          }}
          aria-hidden="true"
        />
      )}

      {/* 6. Illuminated Cyber Corner Brackets ⌜ ⌝ ⌞ ⌟ */}
      <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t-2 border-l-2 border-accent-green/60 group-hover:border-accent-glow transition-all duration-200 pointer-events-none" />
      <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t-2 border-r-2 border-accent-green/60 group-hover:border-accent-glow transition-all duration-200 pointer-events-none" />
      <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b-2 border-l-2 border-accent-green/60 group-hover:border-accent-glow transition-all duration-200 pointer-events-none" />
      <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b-2 border-r-2 border-accent-green/60 group-hover:border-accent-glow transition-all duration-200 pointer-events-none" />

      {/* 7. Top Protocol Header & Live Status LED (Depth: Z: 14px) */}
      <div
        className="flex items-center justify-between pb-3.5 mb-5 border-b border-ctf-border/40 will-change-transform"
        style={{
          transform: prefersReduced ? undefined : 'translateZ(14px)',
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="flex items-center gap-2">
          {/* Blinking Status LED */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-glow opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green shadow-neon-sm" />
          </span>
          <span className="font-mono text-[10px] tracking-[0.2em] text-accent-green/90 uppercase font-semibold">
            {protocolTag}
          </span>
        </div>

        {/* Status Tag Chip */}
        <span className="font-mono text-[9px] px-1.5 py-0.5 bg-accent-green/10 text-accent-green border border-accent-green/30 tracking-widest uppercase">
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
        {/* Illuminated 3D Pedestal with smooth hover response */}
        <div
          className={cn(
            'w-12 h-12 p-2 rounded-xs flex items-center justify-center transition-all duration-300',
            'bg-[#06150c]/90 border border-accent-green/45 group-hover:border-accent-glow',
            'shadow-[0_0_16px_rgba(34,255,136,0.18)] group-hover:shadow-[0_0_24px_rgba(34,255,136,0.5)]',
            'group-hover:rotate-[-3deg] group-hover:scale-105'
          )}
        >
          <HighlightIcon3D id={id} isHovered={isHovered} />
        </div>

        {/* Large Decorative Matrix Watermark Index */}
        <span
          className="font-rajdhani font-bold text-3xl sm:text-4xl text-accent-green/15 group-hover:text-accent-green/35 transition-colors select-none will-change-transform"
          style={{
            transform: prefersReduced ? undefined : 'translateZ(8px)',
          }}
        >
          {indexStr}
        </span>
      </div>

      {/* 9. Typography Block with refined hierarchy (Depth: Z: 20px) */}
      <div
        className="will-change-transform mb-4 flex-1 flex flex-col justify-start"
        style={{
          transform: prefersReduced ? undefined : 'translateZ(20px)',
          transformStyle: 'preserve-3d',
        }}
      >
        <h3 className="text-lg sm:text-xl font-bold font-rajdhani tracking-[0.16em] uppercase mb-1.5 text-white group-hover:text-accent-green transition-colors duration-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          {title}
        </h3>

        <p className="text-xs sm:text-sm text-[#9ec4b0] group-hover:text-[#c4ded1] tracking-wide leading-relaxed font-sans font-medium transition-colors min-h-[38px] sm:min-h-[44px]">
          {subtitle}
        </p>
      </div>

      {/* 10. Bottom Segmented 3-Bar Voxel Power Gauge (Depth: Z: 12px) */}
      <div
        className="pt-3 mt-auto border-t border-ctf-border/30 flex items-center justify-between font-mono text-[9px] text-ctf-muted/70 will-change-transform"
        style={{
          transform: prefersReduced ? undefined : 'translateZ(12px)',
          transformStyle: 'preserve-3d',
        }}
      >
        <span className="tracking-widest uppercase text-accent-green/75 group-hover:text-accent-green transition-colors">
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
      ref={sectionRef}
      className={cn(
        'relative min-h-screen w-full flex items-center justify-start py-28 sm:py-36 md:py-40 overflow-hidden select-none',
        className
      )}
      aria-label="About The Dead Noctis CTF"
    >
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28">
        {/* Left Column Content Container (Matches Storyboard Frame 02) */}
        <div className="max-w-xl md:max-w-2xl lg:max-w-[720px] xl:max-w-[760px] text-left">
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
            <div className="flex items-center gap-2.5">
              <SectionLabel>{about.label}</SectionLabel>
              <span className="font-mono text-[10px] tracking-cyber text-accent-green/70 uppercase hidden xs:inline">
                // INTEL BRIEFING
              </span>
            </div>

            {/* Tactical Briefing Status Indicator */}
            <div className="flex items-center gap-2 font-mono text-[9px] sm:text-[10px] tracking-widest text-accent-green/80 uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-glow opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green" />
              </span>
              <span>CLASSIFIED // LEVEL 1</span>
            </div>
          </div>

          {/* Stagger Item 2: Main Headline ("A NEW DIMENSION AWAITS") */}
          <div
            className="will-change-transform"
            style={{
              transform: !hasEntered && !prefersReduced ? 'translateY(24px)' : 'translateY(0)',
              opacity: !hasEntered && !prefersReduced ? 0 : 1,
              transition:
                'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) 120ms, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 120ms',
            }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold font-rajdhani tracking-tight text-white uppercase leading-[1.06] mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              A NEW DIMENSION
              <br />
              <span className="text-white">AWAITS</span>
            </h2>
          </div>

          {/* Stagger Item 3: Body Paragraph with enhanced typography hierarchy */}
          <div
            className="will-change-transform"
            style={{
              transform: !hasEntered && !prefersReduced ? 'translateY(24px)' : 'translateY(0)',
              opacity: !hasEntered && !prefersReduced ? 0 : 1,
              transition:
                'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) 240ms, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 240ms',
            }}
          >
            <p className="text-sm sm:text-base md:text-lg text-[#9ec4b0] leading-relaxed font-sans max-w-lg mb-10 sm:mb-12 font-normal">
              {about.body}
            </p>
          </div>

          {/* Stagger Item 4: Three Interactive Intelligence Highlight Cards (LEARN // SOLVE // CONNECT) */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 pt-2 items-stretch"
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
      </div>
    </section>
  );
};

export default AboutSection;