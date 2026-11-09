import React, { useState } from 'react';
import { cn } from '@/utils/cn';

interface AccordionItem {
  question: string;
  /** Empty string = TODO placeholder; renders a styled placeholder instead. */
  answer?: string;
  category?: string;
  categoryLabel?: string;
  highlight?: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

/**
 * Keyboard-accessible accordion for the FAQ section.
 * - Single-open (closes others when a new one opens).
 * - Smooth height transition via CSS grid trick.
 * - Stepped open/close indicator with chamfer corners.
 * - Empty answers render a "COMING SOON" placeholder.
 */
export const Accordion: React.FC<AccordionProps> = ({ items, className }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => setOpenIndex((prev) => (prev === idx ? null : idx));

  return (
    <div className={cn('flex flex-col gap-2.5', className)} role="list">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const panelId = `accordion-panel-${idx}`;
        const buttonId = `accordion-btn-${idx}`;

        return (
          <div
            key={idx}
            role="listitem"
            className={cn(
              'border chamfer-sm bg-background-dark/85 backdrop-blur-sm',
              'transition-colors duration-150',
              isOpen
                ? 'border-accent-green/70 shadow-[0_0_16px_rgba(34,255,136,0.10)]'
                : 'border-ctf-border/50 hover:border-accent-green/40'
            )}
          >
            {/* Trigger */}
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(idx)}
              className={cn(
                'w-full flex items-center justify-between gap-4 text-left',
                'px-5 py-4 sm:px-6 sm:py-5',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-inset',
                'cursor-pointer'
              )}
            >
              <span className="text-sm sm:text-base font-bold tracking-wide uppercase text-ctf-text">
                {item.question}
              </span>

              {/* Stepped +/− indicator */}
              <span
                aria-hidden="true"
                className={cn(
                  'flex-shrink-0 w-7 h-7 flex items-center justify-center',
                  'font-mono text-sm border chamfer-sm',
                  // stepped micro-animation
                  'transition-[background-color,color,border-color] duration-[50ms] [animation-timing-function:steps(1,jump-none)]',
                  isOpen
                    ? 'bg-accent-green text-background-void border-accent-green'
                    : 'bg-transparent text-accent-green border-accent-green/40 hover:border-accent-green/70'
                )}
              >
                {isOpen ? '−' : '+'}
              </span>
            </button>

            {/* Collapsible panel — CSS grid trick for smooth height */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                'grid transition-[grid-template-rows,opacity] duration-300 ease-in-out',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              )}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 border-t border-ctf-border/30 pt-4">
                  {item.answer ? (
                    <p className="text-sm text-ctf-muted leading-relaxed">{item.answer}</p>
                  ) : (
                    /* TODO: Replace with real answer once provided by organizers */
                    <p className="text-sm text-ctf-muted/50 italic tracking-wide">
                      Answer coming soon — check back for updates.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
