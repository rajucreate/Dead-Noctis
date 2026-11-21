import React, { useState, useMemo } from 'react';
import { rules } from '@/content/siteContent';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { cn } from '@/utils/cn';

interface RulesSectionProps {
  className?: string;
}

/**
 * High-tech Vector Icons for each Rule Category
 */
const CategoryIcon: React.FC<{ categoryId: string; className?: string }> = ({
  categoryId,
  className = 'w-5 h-5',
}) => {
  switch (categoryId) {
    case 'participation':
      // Operatives / Eligibility ID Badge
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 'guidelines':
      // Competition Guidelines / Flag & Operational Matrix
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
          <line x1="4" y1="22" x2="4" y2="15" />
        </svg>
      );
    case 'fair-play':
      // Fair Play & Ethics / Shield with Cryptographic Checkmark
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case 'technical-restrictions':
      // Technical Restrictions / Firewall Perimeter Shield
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
          <line x1="10" y1="10" x2="14" y2="14" />
          <line x1="14" y1="10" x2="10" y2="14" />
        </svg>
      );
    case 'disqualification':
      // Disqualification / Alert & Revocation Barrier
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
        </svg>
      );
    case 'organizer-authority':
      // Organizer Authority / Supreme Arbiter Seal
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      );
  }
};

/**
 * Redesigned Rules & Regulations Section:
 * - 6 Organized Categories with Accordion Cards
 * - Responsive 2-column Desktop Grid utilizing full horizontal viewport
 * - Search & Filter Pills for rapid rulebook exploration
 * - Clear organizer draft review indicators
 * - Accessible keyboard navigation & ARIA semantics
 */
export const RulesSection: React.FC<RulesSectionProps> = ({ className }) => {
  // Track open state of accordion cards. All start open by default for immediate discoverability.
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    rules.categories.forEach((cat) => {
      initial[cat.id] = true;
    });
    return initial;
  });

  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Toggle a single category
  const toggleCategory = (id: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Expand or Collapse All
  const areAllExpanded = useMemo(() => {
    return rules.categories.every((cat) => openCategories[cat.id]);
  }, [openCategories]);

  const handleToggleAll = () => {
    const nextState = !areAllExpanded;
    const updated: Record<string, boolean> = {};
    rules.categories.forEach((cat) => {
      updated[cat.id] = nextState;
    });
    setOpenCategories(updated);
  };

  // Filtered categories based on selected tab and search query
  const filteredCategories = useMemo(() => {
    return rules.categories.filter((cat) => {
      // Tab filter
      if (activeFilter !== 'all' && cat.id !== activeFilter) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesCategory =
          cat.title.toLowerCase().includes(q) ||
          cat.tag.toLowerCase().includes(q) ||
          cat.codename.toLowerCase().includes(q);
        const matchesRules = cat.rules.some(
          (r) =>
            r.title.toLowerCase().includes(q) ||
            r.description.toLowerCase().includes(q)
        );
        return matchesCategory || matchesRules;
      }
      return true;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section
      id="rules"
      data-bg="rules"
      className={cn(
        'relative min-h-screen w-full py-28 sm:py-36 md:py-40 select-none overflow-hidden bg-[#080B09]',
        className
      )}
      aria-label="Competition Rules & Regulations Dead Noctis CTF"
    >
      {/* Background Contrast Scrim: Soft dark overlay protecting text & card readability */}
      <div
        className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-b from-[#080B09]/80 via-[#080B09]/75 to-[#080B09]/85"
        aria-hidden="true"
      />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* ── Section Header ─────────────────────────────────────────────── */}
        <div className="max-w-4xl text-left mb-10 sm:mb-12">
          {/* Section Overline Label */}
          <div className="mb-4 sm:mb-5">
            <SectionLabel>{rules.label}</SectionLabel>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold font-rajdhani tracking-tight text-white uppercase leading-[1.08] mb-3 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            {rules.heading}
          </h2>

          {/* Subheading Quote */}
          <p className="font-nav font-semibold text-lg sm:text-xl md:text-2xl text-[#39FF14] tracking-wide mb-4">
            &ldquo;{rules.subheading}&rdquo;
          </p>

          {/* Short Description */}
          <p className="text-[#A0AAA2] text-sm sm:text-base leading-relaxed max-w-3xl">
            {rules.description}
          </p>

          {/* Status & Review Notice Chips */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 mt-6 font-mono text-[10px] sm:text-xs">
            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(57,255,20,0.08)] border border-[rgba(57,255,20,0.28)] text-[#39FF14] uppercase font-bold tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14] animate-pulse" />
              {rules.statusTag}
            </span>

            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(255,255,255,0.04)] border border-white/15 text-[#A0AAA2] uppercase tracking-wider">
              <span className="text-[#39FF14]">//</span>
              <span>06 RULE CATEGORIES</span>
            </span>

            <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(234,179,8,0.06)] border border-yellow-500/30 text-yellow-400/90 text-[10px] tracking-wide">
              <span>⚠</span>
              <span>{rules.reviewNote}</span>
            </span>
          </div>
        </div>

        {/* ── Control Bar: Category Filters & Expand/Collapse All ─────────── */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 pb-5 border-b border-white/[0.08]">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={cn(
                'px-3 sm:px-3.5 py-1.5 rounded-full font-nav font-bold text-xs uppercase tracking-wider transition-all duration-150 whitespace-nowrap cursor-pointer',
                activeFilter === 'all'
                  ? 'bg-[rgba(57,255,20,0.14)] text-[#39FF14] border border-[#39FF14] shadow-[0_0_12px_rgba(57,255,20,0.25)]'
                  : 'bg-[rgba(255,255,255,0.03)] text-[#A0AAA2] border border-transparent hover:text-white hover:bg-[rgba(255,255,255,0.06)]'
              )}
            >
              ALL (6)
            </button>
            {rules.categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                className={cn(
                  'px-3 sm:px-3.5 py-1.5 rounded-full font-nav font-bold text-xs uppercase tracking-wider transition-all duration-150 whitespace-nowrap cursor-pointer',
                  activeFilter === cat.id
                    ? 'bg-[rgba(57,255,20,0.14)] text-[#39FF14] border border-[#39FF14] shadow-[0_0_12px_rgba(57,255,20,0.25)]'
                    : 'bg-[rgba(255,255,255,0.03)] text-[#A0AAA2] border border-transparent hover:text-white hover:bg-[rgba(255,255,255,0.06)]'
                )}
              >
                {cat.tag}
              </button>
            ))}
          </div>

          {/* Action Row: Search Input & Toggle All Button */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Quick Keyword Search */}
            <div className="relative flex-1 md:w-56">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search directives..."
                aria-label="Search rule directives"
                className="w-full px-3.5 py-1.5 pl-8 rounded-full bg-[rgba(6,12,8,0.65)] border border-white/10 text-xs text-white placeholder:text-[#A0AAA2]/60 focus:outline-none focus:border-[#39FF14] focus:ring-1 focus:ring-[#39FF14] transition-all"
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

        {/* ── 6 Rule Category Cards (Balanced 2-Column Desktop Grid) ──────── */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-xl bg-[rgba(7,13,9,0.5)] border border-white/10">
            <p className="font-nav text-lg text-white font-semibold mb-2">No directives match your filter.</p>
            <p className="text-sm text-[#A0AAA2] mb-4">Try clearing the search query or selecting &quot;ALL&quot;.</p>
            <button
              type="button"
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-full bg-[rgba(57,255,20,0.12)] border border-[#39FF14] text-[#39FF14] font-nav font-bold text-xs uppercase tracking-wider hover:bg-[rgba(57,255,20,0.22)] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-start"
            role="list"
            aria-label="Rule Categories"
          >
            {filteredCategories.map((category) => {
              const isOpen = !!openCategories[category.id];
              const contentId = `rule-category-content-${category.id}`;
              const headerId = `rule-category-header-${category.id}`;

              return (
                <div
                  key={category.id}
                  role="listitem"
                  className={cn(
                    'relative rounded-xl overflow-hidden transition-all duration-200',
                    'bg-[rgba(7,14,10,0.78)] backdrop-blur-xl',
                    'border transition-colors duration-200',
                    isOpen
                      ? 'border-[rgba(57,255,20,0.30)] shadow-[0_8px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(57,255,20,0.06)]'
                      : 'border-white/[0.08] hover:border-white/20'
                  )}
                >
                  {/* Subtle top specular sheen */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                  {/* Left accent indicator line */}
                  <div
                    className={cn(
                      'absolute left-0 top-0 bottom-0 w-1 transition-colors duration-200 pointer-events-none',
                      isOpen ? 'bg-[#39FF14] shadow-[0_0_8px_#39FF14]' : 'bg-white/10'
                    )}
                    aria-hidden="true"
                  />

                  {/* Category Card Header (Accordion Button) */}
                  <button
                    id={headerId}
                    type="button"
                    onClick={() => toggleCategory(category.id)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left select-none cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#39FF14] rounded-t-xl"
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 pr-3">
                      {/* Category Icon Badge */}
                      <div
                        className={cn(
                          'w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-200',
                          isOpen
                            ? 'bg-[rgba(57,255,20,0.12)] border-[#39FF14] text-[#39FF14] shadow-[0_0_12px_rgba(57,255,20,0.25)]'
                            : 'bg-white/[0.04] border-white/10 text-[#A0AAA2] group-hover:text-white group-hover:border-white/20'
                        )}
                        aria-hidden="true"
                      >
                        <CategoryIcon categoryId={category.id} />
                      </div>

                      {/* Header Titles */}
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-[10px] tracking-[0.2em] text-[#39FF14] font-semibold uppercase">
                            {category.code}
                          </span>
                          <span className="text-white/20 text-xs">•</span>
                          <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/10 text-[#A0AAA2] uppercase tracking-wider">
                            {category.rules.length} Directives
                          </span>
                        </div>

                        <h3 className="font-rajdhani font-bold text-lg sm:text-xl text-white tracking-wide group-hover:text-[#39FF14] transition-colors leading-tight truncate">
                          {category.title}
                        </h3>
                      </div>
                    </div>

                    {/* Right Toggle Control (Rotating Chevron) */}
                    <div className="shrink-0 flex items-center gap-2">
                      <span className="hidden sm:inline font-mono text-[9px] uppercase tracking-wider text-[#A0AAA2]">
                        {isOpen ? 'COLLAPSE' : 'EXPAND'}
                      </span>
                      <div
                        className={cn(
                          'w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-200',
                          isOpen
                            ? 'bg-[rgba(57,255,20,0.15)] border-[#39FF14] text-[#39FF14]'
                            : 'bg-white/[0.04] border-white/15 text-[#A0AAA2] group-hover:text-white group-hover:border-white/30'
                        )}
                        aria-hidden="true"
                      >
                        <svg
                          className={cn('w-3.5 h-3.5 transition-transform duration-200', isOpen ? 'rotate-180' : '')}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </div>
                  </button>

                  {/* Category Card Body (Accordion Content) */}
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className={cn(
                      'grid transition-all duration-300 ease-in-out',
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="p-4 sm:p-5 pt-1 sm:pt-2 border-t border-white/[0.06] space-y-3 sm:space-y-3.5">
                        {category.rules.map((rule, idx) => (
                          <div
                            key={rule.id}
                            className="p-3 sm:p-3.5 rounded-lg bg-[rgba(3,8,5,0.45)] border border-white/[0.05] hover:border-[rgba(57,255,20,0.22)] transition-colors duration-150"
                          >
                            <div className="flex items-start gap-3">
                              {/* Rule Index Tag */}
                              <span className="shrink-0 font-mono text-[10px] font-bold text-[#39FF14] bg-[rgba(57,255,20,0.08)] border border-[rgba(57,255,20,0.25)] px-1.5 py-0.5 rounded mt-0.5">
                                0{idx + 1}
                              </span>

                              <div className="flex-1 min-w-0">
                                {/* Rule Title */}
                                <h4 className="font-nav font-bold text-sm sm:text-base text-white tracking-wide mb-1 leading-snug">
                                  {rule.title}
                                </h4>

                                {/* Rule Description */}
                                <p className="text-xs sm:text-sm text-[#A0AAA2] leading-relaxed">
                                  {rule.description}
                                </p>

                                {/* Organizer Review Flag if present */}
                                {'reviewNote' in rule && rule.reviewNote && (
                                  <div className="mt-2 flex items-start gap-1.5 font-mono text-[10px] text-yellow-400/80 bg-yellow-500/[0.06] border border-yellow-500/20 px-2.5 py-1 rounded">
                                    <span className="text-yellow-400 font-bold shrink-0">REVIEW NOTE:</span>
                                    <span>{rule.reviewNote}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Card Footer Readout */}
                      <div className="px-4 sm:px-5 py-2.5 bg-[rgba(2,5,3,0.6)] border-t border-white/[0.05] flex items-center justify-between font-mono text-[9px] text-[#A0AAA2]/70">
                        <span className="flex items-center gap-1.5 uppercase tracking-wider text-[#39FF14]/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14]" />
                          <span>STATUS: ACTIVE & ENFORCED</span>
                        </span>
                        <span className="tracking-widest uppercase">
                          // {category.codename}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ── Section Footer Disclaimer ───────────────────────────────────── */}
        <div className="mt-12 sm:mt-14 p-4 sm:p-5 rounded-xl bg-[rgba(6,12,8,0.5)] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14]" />
            <span className="font-nav font-bold text-xs sm:text-sm text-white tracking-wide">
              COMPETITION INTEGRITY ADVISORY
            </span>
          </div>
          <p className="font-mono text-[10px] sm:text-xs text-[#A0AAA2]">
            For real-time rule inquiries or reporting platform anomalies, contact the arbiter desk on official event channels.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
