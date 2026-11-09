import React, { useState, useRef, useEffect, useCallback } from 'react';
import { faq } from '@/content/siteContent';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { cn } from '@/utils/cn';

interface FaqSectionProps {
  className?: string;
}

/**
 * Storyboard Frame 05: FAQ Section ("05. FAQ / INTELLIGENCE ARCHIVE")
 *
 * Implements:
 * - Left-aligned layout with crisp contrast over obsidian void (#020604)
 * - Viewport entrance fade-and-rise reveal with subtle stagger
 * - Interactive category filtering tabs with active neon indicators
 * - Cyber-Dossier accordion cards with stepped chamfer corners and corner brackets
 * - Dynamic emerald border illumination and smooth expand/collapse physics
 * - Full WAI-ARIA keyboard navigation (ArrowUp, ArrowDown, Home, End, Space/Enter)
 * - Respects prefers-reduced-motion and touch devices
 */
export const FaqSection: React.FC<FaqSectionProps> = ({ className }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default for immediate engagement
  const prefersReduced = usePrefersReducedMotion();

  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Viewport entrance observer (triggers once)
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
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [prefersReduced]);

  // Filter items by category
  const filteredItems = faq.items.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const handleToggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  // Keyboard navigation across accordion headers (WAI-ARIA Pattern)
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      const count = filteredItems.length;
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
    },
    [filteredItems.length]
  );

  return (
    <section
      id="faq"
      ref={sectionRef}
      className={cn(
        'relative min-h-screen w-full flex items-center justify-start py-28 sm:py-36 md:py-40 overflow-hidden select-none',
        className
      )}
      aria-label="Frequently Asked Questions Dead Noctis CTF"
    >
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28">
        {/* Left Column Content Container */}
        <div className="max-w-xl md:max-w-2xl lg:max-w-[760px] xl:max-w-[820px] text-left">
          {/* Stagger Item 1: Section Overline Label & Tactical Dossier Telemetry */}
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
              <SectionLabel>{faq.label}</SectionLabel>
              <span className="font-mono text-[10px] tracking-cyber text-accent-green/70 uppercase hidden xs:inline">
                // INTELLIGENCE ARCHIVE
              </span>
            </div>

            {/* Tactical Status Indicator */}
            <div className="flex items-center gap-2 font-mono text-[9px] sm:text-[10px] tracking-widest text-accent-green/80 uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-glow opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green" />
              </span>
              <span>DECLASSIFIED ARCHIVE // Q&A</span>
            </div>
          </div>

          {/* Stagger Item 2: Main Headline ("FREQUENTLY ASKED QUESTIONS") */}
          <div
            className="will-change-transform"
            style={{
              transform: !hasEntered && !prefersReduced ? 'translateY(24px)' : 'translateY(0)',
              opacity: !hasEntered && !prefersReduced ? 0 : 1,
              transition:
                'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) 120ms, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 120ms',
            }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold font-rajdhani tracking-tight text-white uppercase leading-[1.06] mb-5 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              FREQUENTLY ASKED{' '}
              <span className="text-accent-green drop-shadow-[0_0_16px_rgba(34,255,136,0.45)]">
                QUESTIONS
              </span>
            </h2>
          </div>

          {/* Stagger Item 3: Body Subtitle with enhanced contrast */}
          <div
            className="will-change-transform mb-8 sm:mb-10"
            style={{
              transform: !hasEntered && !prefersReduced ? 'translateY(24px)' : 'translateY(0)',
              opacity: !hasEntered && !prefersReduced ? 0 : 1,
              transition:
                'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) 240ms, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 240ms',
            }}
          >
            <p className="text-sm sm:text-base md:text-lg text-[#9ec4b0] leading-relaxed font-sans max-w-xl font-normal">
              {faq.subtitle}
            </p>
          </div>

          {/* Stagger Item 4: Interactive Category Filter Tabs */}
          <div
            className="mb-8 flex flex-wrap items-center gap-2 will-change-transform"
            style={{
              transform: !hasEntered && !prefersReduced ? 'translateY(24px)' : 'translateY(0)',
              opacity: !hasEntered && !prefersReduced ? 0 : 1,
              transition:
                'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) 340ms, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 340ms',
            }}
            role="tablist"
            aria-label="FAQ Categories"
          >
            {faq.categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count =
                cat.id === 'all'
                  ? faq.items.length
                  : faq.items.filter((i) => i.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setOpenIndex(0); // Open first item in newly filtered category
                  }}
                  className={cn(
                    'px-3.5 py-1.5 text-[11px] sm:text-xs font-mono tracking-wider uppercase chamfer-sm transition-all duration-200 cursor-pointer flex items-center gap-1.5',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green',
                    isActive
                      ? 'bg-accent-green text-background-void font-bold shadow-neon-sm border border-accent-green'
                      : 'bg-[#030906]/80 text-[#8fa89a] hover:text-white border border-accent-green/25 hover:border-accent-green/60'
                  )}
                >
                  <span>{cat.label}</span>
                  <span
                    className={cn(
                      'text-[9px] px-1 py-0.2 rounded-xs font-mono',
                      isActive ? 'bg-background-void/25 text-background-void' : 'text-accent-green/70'
                    )}
                  >
                    [{count}]
                  </span>
                </button>
              );
            })}
          </div>

          {/* Stagger Item 5: Cyber-Dossier Accordion List */}
          <div
            className="flex flex-col gap-3.5 will-change-transform"
            style={{
              transform: !hasEntered && !prefersReduced ? 'translateY(24px)' : 'translateY(0)',
              opacity: !hasEntered && !prefersReduced ? 0 : 1,
              transition:
                'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) 440ms, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 440ms',
            }}
          >
            {filteredItems.map((item, idx) => {
              const isOpen = openIndex === idx;
              const panelId = `faq-panel-${item.id}`;
              const buttonId = `faq-btn-${item.id}`;

              return (
                <div
                  key={item.id}
                  className={cn(
                    'relative group border transition-all duration-300 chamfer-sm overflow-hidden',
                    // Obsidian terminal surface with subtle illumination
                    'bg-[#030906]/92 backdrop-blur-sm',
                    isOpen
                      ? 'border-accent-green/85 shadow-[0_0_24px_rgba(34,255,136,0.18)] translate-y-[-2px]'
                      : 'border-accent-green/25 hover:border-accent-green/60 hover:shadow-[0_4px_20px_rgba(0,0,0,0.8)]'
                  )}
                >
                  {/* Subtle Corner Brackets ⌜ ⌝ ⌞ ⌟ */}
                  <div
                    className={cn(
                      'absolute top-1.5 left-1.5 w-2 h-2 border-t border-l pointer-events-none transition-colors duration-200',
                      isOpen ? 'border-accent-glow' : 'border-accent-green/40 group-hover:border-accent-green'
                    )}
                  />
                  <div
                    className={cn(
                      'absolute top-1.5 right-1.5 w-2 h-2 border-t border-r pointer-events-none transition-colors duration-200',
                      isOpen ? 'border-accent-glow' : 'border-accent-green/40 group-hover:border-accent-green'
                    )}
                  />
                  <div
                    className={cn(
                      'absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l pointer-events-none transition-colors duration-200',
                      isOpen ? 'border-accent-glow' : 'border-accent-green/40 group-hover:border-accent-green'
                    )}
                  />
                  <div
                    className={cn(
                      'absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r pointer-events-none transition-colors duration-200',
                      isOpen ? 'border-accent-glow' : 'border-accent-green/40 group-hover:border-accent-green'
                    )}
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
                    onClick={() => handleToggle(idx)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                    className={cn(
                      'w-full flex items-center justify-between gap-4 text-left p-4 sm:p-5 cursor-pointer',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-inset'
                    )}
                  >
                    <div className="flex flex-col items-start gap-1 pr-3 flex-1">
                      {/* Micro Category Metadata Tag */}
                      <div className="flex items-center gap-2">
                        <span
                          className={cn(
                            'w-1.5 h-1.5 rounded-full transition-colors',
                            isOpen ? 'bg-accent-glow shadow-neon-sm animate-pulse' : 'bg-accent-green/50'
                          )}
                        />
                        <span className="font-mono text-[9px] tracking-[0.2em] text-accent-green/80 uppercase font-semibold">
                          {item.categoryLabel}
                        </span>
                      </div>

                      {/* Question Headline */}
                      <span
                        className={cn(
                          'text-sm sm:text-base md:text-lg font-bold font-rajdhani tracking-[0.08em] uppercase transition-colors duration-200',
                          isOpen
                            ? 'text-accent-green drop-shadow-[0_0_8px_rgba(34,255,136,0.3)]'
                            : 'text-white group-hover:text-accent-green'
                        )}
                      >
                        {item.question}
                      </span>
                    </div>

                    {/* Stepped Cyber Expand/Collapse Toggle */}
                    <span
                      aria-hidden="true"
                      className={cn(
                        'w-8 h-8 flex items-center justify-center font-mono text-base border chamfer-sm shrink-0 transition-all duration-300',
                        isOpen
                          ? 'bg-accent-green text-background-void border-accent-green shadow-neon-sm rotate-180'
                          : 'bg-[#06150c]/80 text-accent-green border-accent-green/40 group-hover:border-accent-green group-hover:scale-105'
                      )}
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {/* Animated Collapsible Answer Body */}
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={cn(
                      'grid transition-all duration-300 ease-in-out',
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-3 border-t border-ctf-border/30">
                        {/* Key takeaway highlight chip */}
                        {item.highlight && (
                          <div className="mb-2.5 inline-flex items-center gap-1.5 px-2 py-0.5 bg-accent-green/10 border border-accent-green/30 rounded-xs font-mono text-[10px] text-accent-green tracking-wide">
                            <span className="w-1 h-1 bg-accent-green rounded-full" />
                            <span>{item.highlight}</span>
                          </div>
                        )}

                        {/* Detailed Answer Copy */}
                        <p className="text-xs sm:text-sm text-[#a8c7b6] leading-relaxed font-sans font-medium">
                          {item.answer}
                        </p>

                        {/* Declassified Security Checksum Footer */}
                        <div className="mt-3.5 pt-2.5 border-t border-accent-green/15 flex items-center justify-between font-mono text-[9px] text-[#6d8a7a]">
                          <span className="uppercase tracking-widest text-accent-green/60">
                            STATUS: DECLASSIFIED // VERIFIED
                          </span>
                          <span className="tracking-cyber hidden xs:inline">LEVEL: 01 // WHH</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Help Desk Callout Footer */}
          <div
            className="mt-10 sm:mt-12 p-4 sm:p-5 chamfer-sm bg-[#041209]/80 border border-accent-green/30 flex flex-col sm:flex-row items-center justify-between gap-4 will-change-transform"
            style={{
              transform: !hasEntered && !prefersReduced ? 'translateY(24px)' : 'translateY(0)',
              opacity: !hasEntered && !prefersReduced ? 0 : 1,
              transition:
                'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) 540ms, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 540ms',
            }}
          >
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-8 h-8 rounded-xs bg-accent-green/15 border border-accent-green/40 flex items-center justify-center shrink-0">
                <span className="text-accent-green font-mono text-xs">?</span>
              </div>
              <div>
                <h4 className="text-sm font-bold font-rajdhani uppercase tracking-wider text-white">
                  Still have questions?
                </h4>
                <p className="text-xs text-[#8fa89a]">
                  Reach out to the GDG &amp; White Hat Hackers organizer team directly.
                </p>
              </div>
            </div>

            <a
              href="mailto:contact@deadnoctis.dev"
              className={cn(
                'px-4 py-2 text-xs font-bold font-mono uppercase tracking-wider chamfer-sm whitespace-nowrap',
                'bg-accent-green/15 text-accent-green border border-accent-green/50 hover:bg-accent-green hover:text-background-void',
                'transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green'
              )}
            >
              Contact Organizers →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;