import React from 'react';
import { cn } from '@/utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  /** Render as a hoverable interactive card */
  interactive?: boolean;
  as?: 'div' | 'article' | 'li';
}

/**
 * Base surface card with 1-2px green border and pixel-notch (chamfer) corners.
 * Used as the foundation for InfoCard, NumberedRow, and standalone content blocks.
 */
export const Card: React.FC<CardProps> = ({
  children,
  className,
  interactive = false,
  as: Tag = 'div',
}) => (
  <Tag
    className={cn(
      'relative bg-background-dark/85 border border-ctf-border/60 chamfer-sm backdrop-blur-sm',
      interactive &&
        'transition-all duration-200 hover:border-accent-green/70 hover:shadow-[0_0_18px_rgba(34,255,136,0.14)] focus-within:border-accent-green/70',
      className
    )}
  >
    {/* Top-edge scanline accent */}
    <span
      className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-green/40 to-transparent pointer-events-none"
      aria-hidden="true"
    />
    {children}
  </Tag>
);
