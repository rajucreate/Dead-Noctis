import React, { useState, useRef, useCallback } from 'react';
import { faq } from '@/content/siteContent';
import { cn } from '@/utils/cn';

interface FaqSectionProps {
  className?: string;
  onContactClick?: () => void;
}

/**
 * FAQ & Intelligence Archive Section:
 * - Strictly 6 Important Questions as per specification
 * - Matches the exact visual language and design tokens of the finalized Stitch design (Section 05)
 * - Clean, accessible accordion layout with smooth CSS grid expansion
 * - Closing element with configurable "CONTACT ORGANIZERS" action
 */
export const FaqSection: React.FC<FaqSectionProps> = ({ className, onContactClick }) => {
  // By default, keep the first question open for immediate discovery
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'what-is-dead-noctis': true,
  });

  const [showContactNotice, setShowContactNotice] = useState(false);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Toggle single accordion item
  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Expand / Collapse All
  const areAllExpanded = faq.items.every((item) => openItems[item.id]);

  const handleToggleAll = () => {
    const nextState = !areAllExpanded;
    const updated: Record<string, boolean> = {};
    faq.items.forEach((item) => {
      updated[item.id] = nextState;
    });
    setOpenItems(updated);
  };

  // Handle Contact Organizers button click
  const handleContactClick = (e: React.MouseEvent) => {
    if (onContactClick) {
      e.preventDefault();
      onContactClick();
      return;
    }
    if (faq.contact.destinationUrl) {
      window.open(faq.contact.destinationUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    // Polite non-intrusive feedback when destination URL is not yet configured
    e.preventDefault();
    setShowContactNotice(true);
  };

  // Keyboard navigation across accordion headers (WAI-ARIA Pattern)
  const handleKeyDown = useCallback((e: React.KeyboardEvent, index: number) => {
    const count = faq.items.length;
    let nextIndex: number | null = null;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        nextIndex = (index + 1) % count;
        break;
      case 'ArrowUp':
        e.preventDefault();
        nextIndex = (index - 1 + count) % count;
        break;
      case 'Home':
        e.preventDefault();
        nextIndex = 0;
        break;
      case 'End':
        e.preventDefault();
        nextIndex = count - 1;
        break;
      default:
        break;
    }

    if (nextIndex !== null) {
      buttonRefs.current[nextIndex]?.focus();
    }
  }, []);

  return (
    <section
      id="faq"
      data-bg="faq"
      className={cn(
        'relative min-h-screen w-full py-24 sm:py-32 md:py-36 select-none overflow-hidden bg-[#080B09]',
        className
      )}
      aria-label="Frequently Asked Questions Dead Noctis CTF"
    >
      {/* Background Contrast Scrim */}
      <div
        className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-b from-[#080B09]/80 via-[#080B09]/75 to-[#080B09]/85"
        aria-hidden="true"
      />

      <div className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Styled per Stitch Section 05 */}
        <div className="text-center flex flex-col items-center mb-10 sm:mb-12">
          {/* Eyebrow strip */}
          <div className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#6FAD68] mb-3 px-3 py-1 rounded-full bg-[#191c1a] border border-[#6FAD68]/20">
            <span className="w-2 h-2 rounded-full bg-[#6FAD68] shadow-[0_0_8px_#6FAD68] animate-pulse" />
            <span>{faq.tagline}</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-nav tracking-tight text-white uppercase mb-3 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            05 // KNOWLEDGE BASE —{' '}
            <span className="text-[#6FAD68] drop-shadow-[0_0_16px_rgba(111,173,104,0.4)]">
              FAQ
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-[#A0AAA2] text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-6 font-sans">
            {faq.subtitle}
          </p>

          {/* Expand / Collapse All control */}
          <div className="flex items-center justify-center">
            <button
              type="button"
              onClick={handleToggleAll}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#191c1a] hover:bg-[#282b28] border border-white/10 hover:border-[#6FAD68]/40 text-[#C8D1CA] hover:text-[#6FAD68] text-xs font-mono font-medium tracking-wider uppercase transition-colors duration-200 cursor-pointer"
            >
              <svg
                className={cn('w-3.5 h-3.5 transition-transform duration-200', areAllExpanded ? 'rotate-180' : '')}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
              <span>{areAllExpanded ? 'Collapse All [6/6]' : 'Expand All [6/6]'}</span>
            </button>
          </div>
        </div>

        {/* FAQ Accordion List — Strictly 6 Important Questions */}
        <div className="flex flex-col gap-3.5" role="region" aria-label="FAQ Accordion Items">
          {faq.items.map((item, idx) => {
            const isOpen = !!openItems[item.id];
            const panelId = `faq-panel-${item.id}`;
            const buttonId = `faq-btn-${item.id}`;

            return (
              <div
                key={item.id}
                className={cn(
                  'relative rounded-xl overflow-hidden transition-all duration-200 border',
                  'bg-[#191c1a]',
                  isOpen
                    ? 'border-[#6FAD68]/45 shadow-[0_8px_30px_rgba(0,0,0,0.85),0_0_16px_rgba(111,173,104,0.12)]'
                    : 'border-white/10 hover:border-[#6FAD68]/30 hover:bg-[#282b28]/40'
                )}
              >
                {/* Left accent indicator line */}
                <div
                  className={cn(
                    'absolute left-0 top-0 bottom-0 w-1 transition-colors duration-200 pointer-events-none',
                    isOpen ? 'bg-[#6FAD68] shadow-[0_0_8px_#6FAD68]' : 'bg-transparent'
                  )}
                  aria-hidden="true"
                />

                {/* Accordion Trigger Header */}
                <button
                  ref={(el) => {
                    buttonRefs.current[idx] = el;
                  }}
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleItem(item.id)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className={cn(
                    'w-full flex items-center justify-between gap-4 text-left p-4 sm:p-5 cursor-pointer select-none group',
                    'focus:outline-none focus-visible:ring-1 focus-visible:ring-[#6FAD68] rounded-xl'
                  )}
                >
                  <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                    <span
                      className={cn(
                        'font-mono text-xs sm:text-sm font-bold tracking-wider shrink-0 transition-colors',
                        isOpen ? 'text-[#6FAD68]' : 'text-[#6FAD68]/70 group-hover:text-[#6FAD68]'
                      )}
                    >
                      {item.number}
                    </span>
                    <span
                      className={cn(
                        'text-base sm:text-lg font-bold font-nav tracking-wide uppercase transition-colors duration-200 leading-snug',
                        isOpen
                          ? 'text-[#6FAD68] drop-shadow-[0_0_8px_rgba(111,173,104,0.3)]'
                          : 'text-white group-hover:text-[#6FAD68]'
                      )}
                    >
                      {item.question}
                    </span>
                  </div>

                  {/* Expand/Collapse Chevron Indicator */}
                  <span
                    aria-hidden="true"
                    className={cn(
                      'w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-200',
                      isOpen
                        ? 'bg-[#6FAD68]/15 border-[#6FAD68] text-[#6FAD68] shadow-[0_0_8px_rgba(111,173,104,0.3)]'
                        : 'bg-white/5 border-white/10 text-[#A0AAA2] group-hover:text-white group-hover:border-white/25'
                    )}
                  >
                    <svg
                      className={cn('w-4 h-4 transition-transform duration-200', isOpen ? 'rotate-180' : '')}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>

                {/* Animated Collapsible Answer Body */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={cn(
                    'grid transition-all duration-300 ease-in-out',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 pt-2 border-t border-white/5">
                      {/* Highlight chip */}
                      {item.highlight && (
                        <div className="mb-3 inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#6FAD68]/10 border border-[#6FAD68]/30 rounded-full font-mono text-[11px] text-[#6FAD68] tracking-wide">
                          <span className="w-1.5 h-1.5 bg-[#6FAD68] rounded-full shadow-[0_0_4px_#6FAD68]" />
                          <span>{item.highlight}</span>
                        </div>
                      )}

                      {/* Answer Body Copy */}
                      <p className="text-sm sm:text-base text-[#C8D1CA] leading-relaxed font-sans font-normal">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Element: STILL HAVE QUESTIONS? */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-[#191c1a] border border-white/10 border-b-[#6FAD68]/30 shadow-[0_16px_40px_rgba(0,0,0,0.85)] text-left relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#6FAD68] shadow-[0_0_8px_#6FAD68]" />
                <h3 className="font-nav font-bold text-xl sm:text-2xl text-white tracking-wide uppercase">
                  {faq.contact.heading}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#A0AAA2] leading-relaxed font-sans">
                {faq.contact.description}
              </p>
            </div>

            <button
              type="button"
              onClick={handleContactClick}
              className="px-5 py-2.5 rounded-lg font-nav font-bold text-xs sm:text-sm tracking-wider uppercase bg-[#6FAD68]/15 text-[#6FAD68] border border-[#6FAD68]/40 hover:bg-[#6FAD68]/25 hover:border-[#6FAD68]/80 transition-all duration-200 cursor-pointer shrink-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#6FAD68]"
            >
              {faq.contact.buttonLabel}
            </button>
          </div>

          {/* Polite Non-Intrusive In-App Notice when contact destination is not yet configured */}
          {showContactNotice && (
            <div
              role="status"
              className="mt-4 p-3.5 rounded-lg bg-[#080B09] border border-[#6FAD68]/35 text-xs font-mono text-[#C8D1CA] flex items-center justify-between gap-3 animate-fade-in"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6FAD68] animate-ping" />
                <span>Official communication channels (Discord / Support Dispatch) will be published with registration launch.</span>
              </div>
              <button
                type="button"
                onClick={() => setShowContactNotice(false)}
                className="text-[#6FAD68] hover:text-white font-bold px-2 py-0.5 cursor-pointer"
                aria-label="Dismiss notice"
              >
                ✕
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
