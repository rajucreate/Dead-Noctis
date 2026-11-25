import React, { useState, useMemo } from 'react';
import { rules } from '@/content/siteContent';
import { cn } from '@/utils/cn';

interface RulesSectionProps {
  className?: string;
}

/**
 * Clean Vector Icons for each Rule Category
 */
const CategoryIcon: React.FC<{ categoryId: string; className?: string }> = ({
  categoryId,
  className = 'w-5 h-5',
}) => {
  switch (categoryId) {
    case 'participation':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 'guidelines':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
          <line x1="4" y1="22" x2="4" y2="15" />
        </svg>
      );
    case 'fair-play':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case 'technical-restrictions':
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
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
        </svg>
      );
    case 'organizer-authority':
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

export const RulesSection: React.FC<RulesSectionProps> = ({ className }) => {
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    rules.categories.forEach((cat) => {
      initial[cat.id] = true;
    });
    return initial;
  });

  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleCategory = (id: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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

  const filteredCategories = useMemo(() => {
    return rules.categories.filter((cat) => {
      if (activeFilter !== 'all' && cat.id !== activeFilter) {
        return false;
      }
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
        'w-full py-20 sm:py-28 relative select-none bg-[#111412] text-[#e1e3df] overflow-hidden',
        className
      )}
      aria-label="Competition Rules & Regulations Dead Noctis CTF"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 sm:gap-14 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-white/5">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#a2d96d] mb-2 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#a2d96d] animate-pulse" />
              <span>RULES OF ENGAGEMENT // DIRECTIVES</span>
            </div>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight uppercase">
              {rules.heading}
            </h2>
            <p className="font-mono text-xs sm:text-sm text-[#85d997] mt-1 font-semibold">
              &ldquo;{rules.subheading}&rdquo;
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#191c1a] border border-[#6FAD68]/40 text-[#a2d96d] uppercase font-bold tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a2d96d] animate-pulse" />
              {rules.statusTag}
            </span>
            <span className="px-3 py-1 rounded-md bg-[#191c1a] border border-white/10 text-[#c2c9b6] uppercase font-semibold">
              06 SECTORS ENFORCED
            </span>
          </div>
        </div>

        {/* Control Bar: Filters & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-4 border-b border-white/5">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={cn(
                'px-3.5 py-1.5 rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap cursor-pointer',
                activeFilter === 'all'
                  ? 'bg-[#a2d96d] text-[#1f3708] shadow-md'
                  : 'bg-[#191c1a] text-[#c2c9b6] border border-white/5 hover:text-white hover:bg-[#202321]'
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
                  'px-3 py-1.5 rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap cursor-pointer',
                  activeFilter === cat.id
                    ? 'bg-[#a2d96d] text-[#1f3708] shadow-md'
                    : 'bg-[#191c1a] text-[#c2c9b6] border border-white/5 hover:text-white hover:bg-[#202321]'
                )}
              >
                {cat.tag}
              </button>
            ))}
          </div>

          {/* Action Row: Search & Toggle All */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="relative flex-1 md:w-56">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search directives..."
                aria-label="Search rule directives"
                className="w-full px-3.5 py-1.5 pl-8 rounded-lg bg-[#191c1a] border border-white/10 text-xs text-white placeholder:text-[#8c9382] focus:outline-none focus:border-[#6FAD68] transition-all"
              />
              <svg
                className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#8c9382]"
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
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#8c9382] hover:text-white"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={handleToggleAll}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#191c1a] hover:bg-[#202321] border border-white/10 hover:border-[#6FAD68]/40 text-[#e1e3df] text-xs font-mono font-bold tracking-wider uppercase transition-colors cursor-pointer whitespace-nowrap"
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

        {/* 6 Rule Category Cards Grid */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-2xl bg-[#191c1a] border border-white/5">
            <p className="font-headline text-lg text-white font-bold mb-2">No directives match your filter.</p>
            <p className="text-xs sm:text-sm text-[#8c9382] mb-4">Try clearing the search query or selecting &quot;ALL&quot;.</p>
            <button
              type="button"
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-lg bg-[#a2d96d] text-[#1f3708] font-mono font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start" role="list" aria-label="Rule Categories">
            {filteredCategories.map((category) => {
              const isOpen = !!openCategories[category.id];
              const contentId = `rule-category-content-${category.id}`;
              const headerId = `rule-category-header-${category.id}`;

              return (
                <div
                  key={category.id}
                  role="listitem"
                  className={cn(
                    'rounded-2xl overflow-hidden transition-all duration-300 bg-[#191c1a] shadow-xl',
                    isOpen
                      ? 'border border-[#6FAD68]/40 shadow-[0_4px_24px_rgba(0,0,0,0.6)]'
                      : 'border border-white/5 hover:border-white/15'
                  )}
                >
                  {/* Category Card Header */}
                  <button
                    id={headerId}
                    type="button"
                    onClick={() => toggleCategory(category.id)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left select-none cursor-pointer group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#6FAD68]"
                  >
                    <div className="flex items-center gap-4 min-w-0 pr-2">
                      <div
                        className={cn(
                          'w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-200',
                          isOpen
                            ? 'bg-[#282b28] border-[#6FAD68] text-[#a2d96d]'
                            : 'bg-[#202321] border-white/5 text-[#8c9382] group-hover:text-white'
                        )}
                        aria-hidden="true"
                      >
                        <CategoryIcon categoryId={category.id} />
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-[10px] tracking-wider text-[#a2d96d] font-bold uppercase">
                            {category.code}
                          </span>
                          <span className="text-white/20 text-xs">•</span>
                          <span className="font-mono text-[10px] text-[#8c9382] uppercase">
                            {category.rules.length} Directives
                          </span>
                        </div>

                        <h3 className="font-headline font-bold text-base sm:text-lg text-white group-hover:text-[#a2d96d] transition-colors leading-tight truncate">
                          {category.title}
                        </h3>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-2">
                      <div
                        className={cn(
                          'w-7 h-7 rounded-lg flex items-center justify-center border transition-all duration-200',
                          isOpen
                            ? 'bg-[#282b28] border-[#6FAD68] text-[#a2d96d]'
                            : 'bg-[#202321] border-white/10 text-[#8c9382] group-hover:text-white'
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

                  {/* Category Rules Content (Accordion Body) */}
                  {isOpen && (
                    <div id={contentId} role="region" aria-labelledby={headerId} className="px-5 sm:px-6 pb-6 pt-2 border-t border-white/5 flex flex-col gap-3">
                      {category.rules.map((rule, idx) => (
                        <div
                          key={rule.id}
                          className="p-3.5 rounded-xl bg-[#202321]/60 border border-white/5 hover:border-[#6FAD68]/20 transition-colors"
                        >
                          <div className="flex items-start gap-2.5">
                            <span className="font-mono text-[11px] font-bold text-[#a2d96d] shrink-0 mt-0.5">
                              {String(idx + 1).padStart(2, '0')}.
                            </span>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-headline text-sm font-bold text-white mb-1">
                                {rule.title}
                              </h4>
                              <p className="font-sans text-xs text-[#c2c9b6] leading-relaxed">
                                {rule.description}
                              </p>
                              {'reviewNote' in rule && rule.reviewNote && (
                                <p className="font-mono text-[10px] text-yellow-400/80 mt-1.5 flex items-center gap-1">
                                  <span>⚠</span>
                                  <span>{rule.reviewNote}</span>
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default RulesSection;
