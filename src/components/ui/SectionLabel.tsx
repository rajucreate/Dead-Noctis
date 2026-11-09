import React from 'react';
import { cn } from '@/utils/cn';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  as?: 'p' | 'span' | 'div';
}

/**
 * Small all-caps green overline label used above section headings.
 * Example: "ABOUT", "EVENTS", "RULES"
 */
export const SectionLabel: React.FC<SectionLabelProps> = ({
  children,
  className,
  as: Tag = 'p',
}) => (
  <Tag
    className={cn(
      'inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] text-accent-green uppercase select-none',
      className
    )}
  >
    {/* Pixel-square accent dot */}
    <span className="w-1.5 h-1.5 bg-accent-green shadow-neon-sm flex-shrink-0" aria-hidden="true" />
    {children}
  </Tag>
);
