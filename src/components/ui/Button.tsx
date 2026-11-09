import React, { useRef } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { cn } from '@/utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'nav' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  arrowDirection?: 'right' | 'down';
  magnetic?: boolean;
  children: React.ReactNode;
}

/**
 * Minecraft-crafted Button:
 * - Pixel-notch 90° stepped corners (clip-path).
 * - Authentic voxel bevel: light top/left edges, deep shadow bottom/right edges.
 * - Magnetic cursor tracking: subtle, restrained 3-4px pull with 3D lift.
 * - Refined emerald light sweep on hover.
 * - Pressed tactile feel: active:translate-y-[1px].
 * - Keyboard accessibility: high-contrast visible focus ring.
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  showArrow = false,
  arrowDirection = 'right',
  magnetic = true,
  children,
  className,
  onPointerMove,
  onPointerLeave,
  ...props
}) => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const prefersReduced = usePrefersReducedMotion();

  const handlePointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (onPointerMove) onPointerMove(e);
    if (prefersReduced || !magnetic || e.pointerType === 'touch') return;

    const btn = btnRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const relX = (e.clientX - (rect.left + rect.width / 2)) * 0.14;
    const relY = (e.clientY - (rect.top + rect.height / 2)) * 0.18;
    const clampedX = Math.max(-4, Math.min(4, relX));
    const clampedY = Math.max(-3, Math.min(3, relY));

    btn.style.transform = `translate3d(${clampedX.toFixed(1)}px, ${clampedY.toFixed(1)}px, 0) translateY(-2px)`;
  };

  const handlePointerLeave = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (onPointerLeave) onPointerLeave(e);
    if (btnRef.current) {
      btnRef.current.style.transform = '';
    }
  };

  const baseStyles = cn(
    'group relative inline-flex items-center justify-center font-nav uppercase font-bold tracking-cyber select-none cursor-pointer overflow-hidden',
    'transition-transform duration-200 ease-out',
    'active:translate-y-[1px]',
    // Visible focus ring
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2 focus-visible:ring-offset-background-void',
    'disabled:opacity-50 disabled:pointer-events-none'
  );

  const sizeStyles = {
    sm: 'text-xs px-4 py-1.5 h-9 min-h-[36px]',
    md: 'text-sm px-6 py-2.5 h-11 min-h-[44px]',
    lg: 'text-base px-8 py-3.5 h-12 min-h-[48px]',
  };

  const variantStyles = {
    primary: cn(
      'bg-[#050a07] text-accent-green border-2',
      'border-t-[#72ffab] border-l-[#48ff9f] border-r-[#0d4a2b] border-b-[#052113]',
      'shadow-[0_0_12px_rgba(34,255,136,0.22)]',
      'hover:bg-accent-green/15 hover:border-t-[#8affbe] hover:border-l-[#65ffb1] hover:shadow-[0_0_24px_rgba(34,255,136,0.45)]'
    ),
    secondary: cn(
      'bg-[#050a07]/80 text-ctf-text border-2',
      'border-t-[#8fa89a] border-l-[#688274] border-r-[#15291f] border-b-[#0b1711]',
      'hover:border-t-accent-green/80 hover:border-l-accent-green/70 hover:text-accent-green hover:bg-accent-green/10 hover:shadow-[0_0_16px_rgba(34,255,136,0.2)]'
    ),
    ghost: cn(
      'bg-transparent text-ctf-text border-2',
      'border-t-ctf-border border-l-ctf-border border-r-[#0d4a2b] border-b-[#052113]',
      'hover:border-t-accent-green hover:border-l-accent-green hover:text-accent-green hover:bg-accent-green/10 hover:shadow-[0_0_14px_rgba(34,255,136,0.25)]'
    ),
    nav: cn(
      'bg-transparent text-accent-green border-2',
      'border-t-[#72ffab]/70 border-l-[#48ff9f]/60 border-r-[#0d4a2b] border-b-[#052113]',
      'hover:bg-accent-green/10 hover:border-t-accent-green hover:border-l-accent-green hover:shadow-neon-sm',
      'text-xs px-5 py-2 h-9 min-h-[36px]'
    ),
  };

  return (
    <button
      ref={btnRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={cn(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        'pixel-notch',
        className
      )}
      {...props}
    >
      {/* Subtle Refined Emerald Light Sweep on Hover */}
      {!prefersReduced && (
        <span
          className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
          aria-hidden="true"
        >
          <span className="absolute -inset-[100%] bg-[linear-gradient(115deg,transparent_38%,rgba(34,255,136,0.22)_50%,transparent_62%)] animate-button-sweep will-change-transform" />
        </span>
      )}

      <span className="relative z-10 flex items-center gap-2">
        <span>{children}</span>
        {showArrow && (
          <span
            aria-hidden="true"
            className={cn(
              'transition-transform duration-150 inline-block [transition-timing-function:steps(2,jump-none)]',
              arrowDirection === 'right' && 'group-hover:translate-x-1',
              arrowDirection === 'down' && 'group-hover:translate-y-0.5'
            )}
          >
            {arrowDirection === 'right' ? '→' : '⌄'}
          </span>
        )}
      </span>
    </button>
  );
};
