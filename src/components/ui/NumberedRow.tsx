import React from 'react';
import { cn } from '@/utils/cn';

interface NumberedRowProps {
  num: number;
  children: React.ReactNode;
  className?: string;
}

/**
 * A single numbered rule row with a green chamfer-bordered index badge.
 * Uses stepped hover micro-animation on the number badge.
 */
export const NumberedRow: React.FC<NumberedRowProps> = ({ num, children, className }) => (
  <li
    className={cn(
      'group flex items-start gap-4 p-5 border border-ctf-border/50',
      'bg-background-dark/80 chamfer-sm backdrop-blur-sm',
      'transition-colors duration-150 hover:border-accent-green/60',
      className
    )}
  >
    {/* Number badge with stepped hover */}
    <span
      className={cn(
        'flex-shrink-0 w-9 h-9 flex items-center justify-center',
        'font-mono text-sm font-bold text-accent-green',
        'border border-accent-green/40 bg-accent-green/10 chamfer-sm',
        // stepped micro-animation on group hover (prefers-reduced-motion safe via CSS)
        'transition-[background-color,border-color] duration-[50ms] [animation-timing-function:steps(2,jump-none)]',
        'group-hover:bg-accent-green/20 group-hover:border-accent-green/70 group-hover:shadow-neon-sm'
      )}
      aria-hidden="true"
    >
      {String(num).padStart(2, '0')}
    </span>

    <p className="text-sm sm:text-base text-ctf-text leading-relaxed pt-1.5">{children}</p>
  </li>
);
