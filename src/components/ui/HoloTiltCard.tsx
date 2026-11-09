import React, { useRef, useState, useEffect, useCallback } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { cn } from '@/utils/cn';

export interface HoloTiltCardProps {
  children: React.ReactNode | ((props: { isHovered: boolean }) => React.ReactNode);
  className?: string;
  /** Index for staggered perspective entrance animation while scrolling */
  index?: number;
  /** Custom max tilt in degrees (default: 6deg) */
  maxTilt?: number;
  /** Whether to use chamfered cyber polygon clip path (default: true) */
  chamfered?: boolean;
  /** Custom click handler or role */
  onClick?: () => void;
  role?: string;
  'aria-label'?: string;
}

/**
 * Depth Layer wrapper to provide restrained 3D Z-translation to inner elements
 * (icons, headings, badges) relative to the parent card perspective.
 */
export const HoloTiltLayer: React.FC<{
  children: React.ReactNode;
  depth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  isHovered?: boolean;
}> = ({ children, depth = 'sm', className, isHovered = false }) => {
  const baseZ =
    depth === 'xl' ? 44 : depth === 'lg' ? 32 : depth === 'md' ? 20 : depth === 'sm' ? 12 : 6;
  const activeZ = isHovered ? baseZ + (depth === 'xl' || depth === 'lg' ? 12 : 8) : baseZ;

  return (
    <div
      className={cn('will-change-transform', className)}
      style={{
        transform: `translateZ(${activeZ}px)`,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {children}
    </div>
  );
};

/**
 * Premium 3D Holographic Tilt + Emerald Edge-Reveal Card Container.
 *
 * Core Features:
 * 1. Staggered 3D perspective reveal on scroll (subtle perspective tilt + fade).
 * 2. Smooth cursor-responsive 3D tilt with restrained depth separation (max ~5.5-6.5°).
 * 3. Dynamic Emerald Edge-Reveal: 1.2px perimeter highlight tracking pointer position.
 * 4. Subtle diagonal holographic light sweep moving across the dark obsidian glass face.
 * 5. Smooth weighted restoration on pointer leave (cubic-bezier easing).
 * 6. Full accessibility: gracefully disables 3D tilts for reduced motion or touch screens.
 */
export const HoloTiltCard: React.FC<HoloTiltCardProps> = ({
  children,
  className,
  index = 0,
  maxTilt = 6,
  chamfered = true,
  onClick,
  role,
  'aria-label': ariaLabel,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const prefersReduced = usePrefersReducedMotion();

  // Scroll entrance state
  const [hasEntered, setHasEntered] = useState(false);

  // Interaction hover state (only changes on enter/leave, never on pointermove)
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // 1. Scroll-driven staggered perspective entrance
  useEffect(() => {
    if (prefersReduced) {
      setHasEntered(true);
      return;
    }

    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Apply subtle stagger based on card index (e.g. 100ms per card)
            const timer = setTimeout(() => {
              setHasEntered(true);
            }, index * 100);
            observer.unobserve(entry.target);
            return () => clearTimeout(timer);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(card);
    return () => {
      observer.disconnect();
    };
  }, [index, prefersReduced]);

  // Detect touch device to prevent unwanted sticky tilts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }
  }, []);

  // 2. Cursor-responsive 3D tilt calculations via direct CSS custom properties (0 React re-renders)
  const handlePointerEnter = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (e.pointerType === 'touch' || isTouchDevice || prefersReduced) return;
      setIsHovered(true);
    },
    [isTouchDevice, prefersReduced]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (e.pointerType === 'touch' || isTouchDevice || prefersReduced) return;
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Normalized coordinates: -1 (left/top) to +1 (right/bottom)
      const normX = Math.max(-1, Math.min(1, (x / rect.width - 0.5) * 2));
      const normY = Math.max(-1, Math.min(1, (y / rect.height - 0.5) * 2));

      // Restrained, sophisticated tilt angles
      const rx = -normY * maxTilt;
      const ry = normX * (maxTilt * 1.15);
      const glowX = (x / rect.width) * 100;
      const glowY = (y / rect.height) * 100;

      card.style.setProperty('--card-rx', `${rx.toFixed(2)}deg`);
      card.style.setProperty('--card-ry', `${ry.toFixed(2)}deg`);
      card.style.setProperty('--card-glow-x', `${glowX.toFixed(1)}%`);
      card.style.setProperty('--card-glow-y', `${glowY.toFixed(1)}%`);
    },
    [isTouchDevice, maxTilt, prefersReduced]
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

  // Determine active transform
  const getTransform = () => {
    if (prefersReduced) return undefined;
    if (!hasEntered) {
      // Pre-entrance state: subtle perspective tilt down and recessed Z
      return 'perspective(1000px) rotateX(10deg) translateY(24px) scale(0.97)';
    }
    if (isHovered && !isTouchDevice) {
      // Hovered state: smooth cursor-responsive tilt with restrained Z-lift (+10px)
      return 'perspective(900px) rotateX(var(--card-rx, 0deg)) rotateY(var(--card-ry, 0deg)) translateZ(10px)';
    }
    // Idle entered state
    return 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
  };

  return (
    <div
      ref={cardRef}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={onClick}
      role={role}
      aria-label={ariaLabel}
      className={cn(
        'relative group select-none overflow-hidden w-full h-full flex flex-col justify-between',
        // Dark obsidian / glass surface
        'bg-[#020b06]/88 border border-accent-green/30 hover:border-accent-green/80',
        'backdrop-blur-sm shadow-[0_12px_36px_rgba(0,0,0,0.85)] hover:shadow-[0_0_35px_rgba(34,255,136,0.22)]',
        // Smooth entrance opacity transition
        hasEntered ? 'opacity-100' : 'opacity-0',
        className
      )}
      style={{
        clipPath: chamfered
          ? 'polygon(0% 0%, calc(100% - 16px) 0%, 100% 16px, 100% 100%, 16px 100%, 0% calc(100% - 16px))'
          : undefined,
        transform: getTransform(),
        transformStyle: 'preserve-3d',
        transition: !hasEntered
          ? 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
          : isHovered
            ? 'transform 0.12s cubic-bezier(0.25, 0.46, 0.45, 0.94), border-color 0.25s ease, box-shadow 0.25s ease'
            : 'transform 0.65s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.4s ease, box-shadow 0.4s ease',
      }}
    >
      {/* 0. Subtle Obsidian Dimensional Glass Sheen */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity duration-500 z-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(34, 255, 136, 0.06) 0%, transparent 40%, rgba(138, 255, 193, 0.10) 50%, transparent 60%, rgba(0, 255, 102, 0.04) 100%)',
        }}
        aria-hidden="true"
      />

      {/* ─────────────────────────────────────────────────────────────
          1. EMERALD EDGE-REVEAL (Thin 1.2px Dynamic Perimeter Glow)
          ─────────────────────────────────────────────────────────── */}
      <div
        className={cn(
          'absolute inset-0 pointer-events-none transition-opacity duration-300 z-10',
          isHovered ? 'opacity-100' : 'opacity-0'
        )}
        style={{
          background: 'radial-gradient(280px circle at var(--card-glow-x, 50%) var(--card-glow-y, 50%), rgba(34, 255, 136, 0.4), transparent 75%)',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          padding: '1.2px',
        }}
        aria-hidden="true"
      />

      {/* ─────────────────────────────────────────────────────────────
          1b. TRAVELING EMERALD BORDER RAY (Thin Perimeter Light Pulse)
          ─────────────────────────────────────────────────────────── */}
      <div
        className={cn(
          'absolute inset-0 pointer-events-none rounded-[inherit] overflow-hidden transition-opacity duration-300 z-10',
          isHovered ? 'opacity-90' : 'opacity-25'
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
              'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(34, 255, 136, 0.8) 18deg, transparent 38deg, transparent 360deg)',
          }}
        />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. SUBTLE DIAGONAL HOLOGRAPHIC LIGHT SWEEP ACROSS SURFACE
          ─────────────────────────────────────────────────────────── */}
      <div
        className={cn(
          'absolute inset-0 pointer-events-none overflow-hidden transition-opacity duration-500 z-10',
          isHovered ? 'opacity-100' : 'opacity-0'
        )}
        aria-hidden="true"
      >
        <div
          className="absolute -inset-[120%] pointer-events-none will-change-transform"
          style={{
            background:
              'linear-gradient(125deg, transparent 40%, rgba(34, 255, 136, 0.04) 47%, rgba(0, 255, 102, 0.10) 50%, rgba(34, 255, 136, 0.04) 53%, transparent 60%)',
            transform: isHovered
              ? 'translate3d(calc((var(--card-glow-x, 50%) - 50%) * 0.75), calc((var(--card-glow-y, 50%) - 50%) * 0.75), 0)'
              : 'translate3d(-15%, -15%, 0)',
            transition: isHovered ? 'transform 0.16s ease-out' : 'transform 0.6s ease',
          }}
        />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. RESTRAINED CURSOR GLARE SPOTLIGHT (Backdrop Depth)
          ─────────────────────────────────────────────────────────── */}
      {isHovered && !prefersReduced && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-150 z-0"
          style={{
            background: 'radial-gradient(180px circle at var(--card-glow-x, 50%) var(--card-glow-y, 50%), rgba(34, 255, 136, 0.14), transparent 70%)',
          }}
          aria-hidden="true"
        />
      )}

      {/* ─────────────────────────────────────────────────────────────
          4. CARD CONTENT WITH 3D DEPTH SLOTS
          ─────────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {typeof children === 'function'
          ? (children as (props: { isHovered: boolean }) => React.ReactNode)({ isHovered })
          : children}
      </div>
    </div>
  );
};

export default HoloTiltCard;
