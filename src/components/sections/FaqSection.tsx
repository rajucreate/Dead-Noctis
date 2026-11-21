import React, { useState, useRef, useMemo, useCallback } from 'react';
import { faq } from '@/content/siteContent';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { cn } from '@/utils/cn';

interface FaqSectionProps {
  className?: string;
  onContactClick?: () => void;
}

/**
 * Redesigned FAQ & Intelligence Archive Section:
 * - Subdued, cinematic background treatment with dark atmospheric overlay
 * - Six distinct FAQ categories covering complete CTF operational scope
 * - Live real-time FAQ search filtering across questions, answers, and tags
 * - Interactive accordion cards with smooth transitions and keyboard accessibility
 * - Dedicated "STILL HAVE QUESTIONS?" closing panel with configurable contact action
 */
export const FaqSection: React.FC<FaqSectionProps> = ({ className, onContactClick }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Track open state for individual items.
  // By default, open the first item in each category for immediate discoverability.
  const [openItems, setOpenItems] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    faq.items.slice(0, 3).forEach((item) => {
      initial[item.id] = true;
    });
    return initial;
  });

  const [showContactNotice, setShowContactNotice] = useState(false);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Filtered FAQ items based on active category and search query
  const filteredItems = useMemo(() => {
    return faq.items.filter((item) => {
      // Category filter
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesQuestion = item.question.toLowerCase().includes(q);
        const matchesAnswer = item.answer.toLowerCase().includes(q);
        const matchesHighlight = item.highlight?.toLowerCase().includes(q);
        const matchesCategory = item.categoryLabel.toLowerCase().includes(q);
        return matchesQuestion || matchesAnswer || matchesHighlight || matchesCategory;
      }
      return true;
    });
  }, [activeCategory, searchQuery]);

  // Toggle single accordion item
  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Expand / Collapse All
  const areAllExpanded = useMemo(() => {
    if (filteredItems.length === 0) return false;
    return filteredItems.every((item) => openItems[item.id]);
  }, [filteredItems, openItems]);

  const handleToggleAll = () => {
    const nextState = !areAllExpanded;
    const updated = { ...openItems };
    filteredItems.forEach((item) => {
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
      // Open configured contact destination
      window.open(faq.contact.destinationUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    // Polite non-intrusive feedback when destination URL is not yet configured
    e.preventDefault();
    setShowContactNotice(true);
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
      data-bg="faq"
      className={cn(
        'relative min-h-screen w-full py-28 sm:py-36 md:py-40 select-none overflow-hidden bg-[#080B09]',
        className
      )}
      aria-label="Frequently Asked Questions Dead Noctis CTF"
    >
      {/* ── Background Contrast Scrim: Identical to About, Events, Rules ──── */}
      <div
        className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-b from-[#080B09]/80 via-[#080B09]/75 to-[#080B09]/85"
        aria-hidden="true"
      />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* ── Section Header ─────────────────────────────────────────────── */}
        <div className="max-w-4xl text-left mb-10 sm:mb-12">
          {/* Section Overline Label */}
          <div className="mb-4 sm:mb-5">
            <SectionLabel>{faq.label}</SectionLabel>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold font-rajdhani tracking-tight text-white uppercase leading-[1.08] mb-3 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            FREQUENTLY ASKED{' '}
            <span className="text-[#39FF14] drop-shadow-[0_0_16px_rgba(57,255,20,0.4)]">
              QUESTIONS
            </span>
          </h2>

          {/* Body Subtitle */}
          <p className="text-[#A0AAA2] text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mb-6">
            {faq.subtitle}
          </p>

          {/* Operational Telemetry Chips */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 font-mono text-[10px] sm:text-xs">
            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(57,255,20,0.08)] border border-[rgba(57,255,20,0.28)] text-[#39FF14] uppercase font-bold tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14] animate-pulse" />
              DECLASSIFIED ARCHIVE // 18 INTEL ENTRIES
            </span>

            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(255,255,255,0.04)] border border-white/15 text-[#A0AAA2] uppercase tracking-wider">
              <span className="text-[#39FF14]">//</span>
              <span>06 CATEGORIES ACTIVE</span>
            </span>

            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(255,255,255,0.03)] border border-white/10 text-[#A0AAA2]/80 text-[10px] tracking-wide">
              <span>●</span>
              <span>LEVEL 01 SUPPORT</span>
            </span>
          </div>
        </div>

        {/* ── Control Bar: Search Input & Category Filter Tabs ────────────── */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 pb-5 border-b border-white/[0.08]">
          {/* Category Filter Pills (Scrollable on small screens) */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1" role="tablist" aria-label="FAQ Categories">
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
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat.id);
                  }}
                  className={cn(
                    'px-3 sm:px-3.5 py-1.5 rounded-full font-nav font-bold text-xs uppercase tracking-wider transition-all duration-150 whitespace-nowrap cursor-pointer flex items-center gap-1.5',
                    isActive
                      ? 'bg-[rgba(57,255,20,0.14)] text-[#39FF14] border border-[#39FF14] shadow-[0_0_12px_rgba(57,255,20,0.25)]'
                      : 'bg-[rgba(255,255,255,0.03)] text-[#A0AAA2] border border-transparent hover:text-white hover:bg-[rgba(255,255,255,0.06)]'
                  )}
                >
                  <span>{cat.shortLabel}</span>
                  <span
                    className={cn(
                      'text-[9px] px-1 py-0.2 rounded-xs font-mono',
                      isActive ? 'bg-[rgba(57,255,20,0.2)] text-[#39FF14]' : 'text-[#A0AAA2]/70'
                    )}
                  >
                    [{count}]
                  </span>
                </button>
              );
            })}
          </div>

          {/* Action Row: Live Search Input & Toggle All Button */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Live FAQ Search Field */}
            <div className="relative flex-1 md:w-64">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search FAQ archive..."
                aria-label="Search intelligence archive"
                className="w-full px-3.5 py-1.5 pl-8 rounded-full bg-[rgba(6,12,8,0.7)] border border-white/10 text-xs text-white placeholder:text-[#A0AAA2]/60 focus:outline-none focus:border-[#39FF14] focus:ring-1 focus:ring-[#39FF14] transition-all"
              />
              <svg
                className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#A0AAA2]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#A0AAA2] hover:text-white"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Expand / Collapse All */}
            <button
              type="button"
              onClick={handleToggleAll}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(57,255,20,0.08)] border border-white/15 hover:border-[#39FF14]/40 text-[#F1F5F1] hover:text-[#39FF14] text-xs font-nav font-bold tracking-wider uppercase transition-colors duration-200 cursor-pointer whitespace-nowrap"
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
              <span>{areAllExpanded ? 'Collapse All' : 'Expand All'}</span>
            </button>
          </div>
        </div>

        {/* ── FAQ Accordion List ──────────────────────────────────────────── */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-xl bg-[rgba(7,13,9,0.5)] border border-white/10">
            <p className="font-nav text-lg text-white font-semibold mb-2">No intelligence entries match your search.</p>
            <p className="text-sm text-[#A0AAA2] mb-4">Try different keywords or clear the filter to see all questions.</p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-full bg-[rgba(57,255,20,0.12)] border border-[#39FF14] text-[#39FF14] font-nav font-bold text-xs uppercase tracking-wider hover:bg-[rgba(57,255,20,0.22)] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-3.5" role="region" aria-label="FAQ Accordion Items">
            {filteredItems.map((item, idx) => {
              const isOpen = !!openItems[item.id];
              const panelId = `faq-panel-${item.id}`;
              const buttonId = `faq-btn-${item.id}`;

              return (
                <div
                  key={item.id}
                  className={cn(
                    'relative rounded-xl overflow-hidden transition-all duration-200 border',
                    'bg-[rgba(7,14,10,0.78)] backdrop-blur-xl',
                    isOpen
                      ? 'border-[rgba(57,255,20,0.35)] shadow-[0_8px_30px_rgba(0,0,0,0.75),0_0_16px_rgba(57,255,20,0.08)]'
                      : 'border-white/[0.08] hover:border-white/20'
                  )}
                >
                  {/* Subtle top edge sheen */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

                  {/* Left accent indicator line */}
                  <div
                    className={cn(
                      'absolute left-0 top-0 bottom-0 w-1 transition-colors duration-200 pointer-events-none',
                      isOpen ? 'bg-[#39FF14] shadow-[0_0_8px_#39FF14]' : 'bg-transparent'
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
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39FF14] focus-visible:ring-inset rounded-t-xl'
                    )}
                  >
                    <div className="flex flex-col items-start gap-1 pr-3 flex-1 min-w-0">
                      {/* Micro Category Metadata Tag */}
                      <div className="flex items-center gap-2">
                        <span
                          className={cn(
                            'w-1.5 h-1.5 rounded-full transition-colors',
                            isOpen ? 'bg-[#39FF14] shadow-[0_0_6px_#39FF14] animate-pulse' : 'bg-[#39FF14]/50'
                          )}
                        />
                        <span className="font-mono text-[9px] tracking-[0.2em] text-[#39FF14] uppercase font-semibold">
                          {item.categoryLabel}
                        </span>
                      </div>

                      {/* Question Headline */}
                      <span
                        className={cn(
                          'text-sm sm:text-base md:text-lg font-bold font-rajdhani tracking-[0.06em] uppercase transition-colors duration-200 leading-snug',
                          isOpen
                            ? 'text-[#39FF14] drop-shadow-[0_0_8px_rgba(57,255,20,0.3)]'
                            : 'text-white group-hover:text-[#39FF14]'
                        )}
                      >
                        {item.question}
                      </span>
                    </div>

                    {/* Stepped Cyber Expand/Collapse Toggle Button */}
                    <span
                      aria-hidden="true"
                      className={cn(
                        'w-8 h-8 rounded-lg flex items-center justify-center font-mono text-base border shrink-0 transition-all duration-200',
                        isOpen
                          ? 'bg-[rgba(57,255,20,0.15)] text-[#39FF14] border-[#39FF14] shadow-[0_0_10px_rgba(57,255,20,0.25)]'
                          : 'bg-white/[0.04] text-[#A0AAA2] border-white/10 group-hover:text-white group-hover:border-white/25'
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
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 sm:pt-2 border-t border-white/[0.06]">
                        {/* Key takeaway highlight chip */}
                        {item.highlight && (
                          <div className="mb-3 inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[rgba(57,255,20,0.08)] border border-[rgba(57,255,20,0.25)] rounded-full font-mono text-[10px] text-[#39FF14] tracking-wide">
                            <span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full shadow-[0_0_4px_#39FF14]" />
                            <span>{item.highlight}</span>
                          </div>
                        )}

                        {/* Detailed Answer Copy */}
                        <p className="text-xs sm:text-sm text-[#A0AAA2] leading-relaxed font-sans font-normal">
                          {item.answer}
                        </p>

                        {/* Review note if present */}
                        {'reviewNote' in item && item.reviewNote && (
                          <div className="mt-3 flex items-start gap-1.5 font-mono text-[10px] text-yellow-400/80 bg-yellow-500/[0.06] border border-yellow-500/20 px-2.5 py-1 rounded">
                            <span className="text-yellow-400 font-bold shrink-0">ADVISORY NOTE:</span>
                            <span>{item.reviewNote}</span>
                          </div>
                        )}

                        {/* Declassified Security Checksum Footer */}
                        <div className="mt-3.5 pt-2.5 border-t border-white/[0.05] flex items-center justify-between font-mono text-[9px] text-[#A0AAA2]/70">
                          <span className="uppercase tracking-widest text-[#39FF14]/80 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14]" />
                            <span>STATUS: DECLASSIFIED // VERIFIED</span>
                          </span>
                          <span className="tracking-widest uppercase hidden xs:inline">
                            DEAD NOCTIS // LEVEL 01
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ── Closing Element: Still Have Questions? ─────────────────────── */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-[rgba(7,14,10,0.78)] backdrop-blur-xl border border-white/[0.12] border-t-white/[0.2] border-b-[rgba(57,255,20,0.28)] shadow-[0_16px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(57,255,20,0.05)] text-left relative overflow-hidden">
          {/* Subtle green ambient light pool in top right corner */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#39FF14]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            <div className="max-w-2xl">
              {/* Heading */}
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14]" />
                <h3 className="font-rajdhani font-bold text-xl sm:text-2xl text-white tracking-wide uppercase">
                  {faq.contact.heading}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#A0AAA2] leading-relaxed">
                {faq.contact.description}
              </p>
            </div>

            {/* Configurable Contact Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full lg:w-auto">
              <button
                type="button"
                onClick={handleContactClick}
                className={cn(
                  'flex items-center justify-center gap-2 px-6 py-3 rounded-full font-nav font-bold text-xs sm:text-sm tracking-wider uppercase select-none cursor-pointer',
                  'border border-[#39FF14] bg-[rgba(57,255,20,0.12)] text-[#39FF14]',
                  'shadow-[0_0_14px_rgba(57,255,20,0.25)]',
                  'transition-all duration-200 ease-out hover:brightness-110 hover:bg-[rgba(57,255,20,0.22)] hover:shadow-[0_0_20px_rgba(57,255,20,0.45)]',
                  'active:scale-[0.98]',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#39FF14]'
                )}
              >
                <span>{faq.contact.buttonLabel}</span>
                <svg
                  className="w-4 h-4 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>

          {/* Polite In-App Notice if Contact Link is pending configuration */}
          {showContactNotice && (
            <div className="mt-5 p-3.5 rounded-lg bg-[rgba(57,255,20,0.06)] border border-[rgba(57,255,20,0.25)] flex items-start justify-between gap-3 text-xs text-[#F1F5F1] animate-in fade-in duration-200">
              <div className="flex items-start gap-2">
                <span className="text-[#39FF14] font-bold">ℹ</span>
                <span>
                  Official organizer contact channels and direct helpdesk links will be published on official GDG and WHH broadcast feeds prior to competition kickoff.
                </span>
              </div>
              <button
                type="button"
                onClick={() => setShowContactNotice(false)}
                className="text-[#A0AAA2] hover:text-white text-xs px-1.5 py-0.5 rounded cursor-pointer"
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
