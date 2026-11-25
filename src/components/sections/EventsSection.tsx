import React from 'react';
import { combatDomains, deploymentRunway, bountyVault } from '@/content/siteContent';
import { cn } from '@/utils/cn';

interface EventsSectionProps {
  className?: string;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ className }) => {
  return (
    <div id="events" data-bg="events" className={cn('w-full relative select-none', className)}>
      {/* =========================================================================
          SECTION 02 // COMBAT DOMAINS
      ========================================================================= */}
      <section id="challenges" className="w-full py-20 sm:py-28 bg-[#0c0f0d]/60 relative text-[#e1e3df] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-16 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-white/5">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#a2d96d] mb-2 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#a2d96d] animate-pulse" />
                <span>{combatDomains.label}</span>
              </div>
              <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight uppercase">
                {combatDomains.heading}
              </h2>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#191c1a] border border-[#6FAD68]/20 self-start md:self-end">
              <span className="font-mono text-[11px] text-[#8c9382] uppercase font-semibold">AGGREGATE POTENTIAL:</span>
              <span className="font-mono text-xs text-[#a2d96d] font-bold tracking-wider">
                {combatDomains.aggregatePotential}
              </span>
            </div>
          </div>

          {/* 7 Distinct Challenge Category Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {combatDomains.domains.map((domain) => {
              const isPrimary = domain.color === 'primary';
              const isSecondary = domain.color === 'secondary';
              const accentColor = isPrimary ? '#a2d96d' : isSecondary ? '#85d997' : '#acf992';

              return (
                <div
                  key={domain.id}
                  className={cn(
                    'group bg-[#191c1a] hover:bg-[#202321] border border-white/5 hover:border-[#6FAD68]/40 transition-all duration-300 p-6 rounded-2xl flex flex-col justify-between shadow-lg relative overflow-hidden',
                    'span2' in domain && domain.span2 && 'md:col-span-2 lg:col-span-3 xl:col-span-2'
                  )}
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div
                        className={cn(
                          'w-11 h-11 rounded-xl bg-[#282b28] flex items-center justify-center transition-colors border border-white/5',
                          isPrimary && 'text-[#a2d96d] group-hover:bg-[#a2d96d] group-hover:text-[#1f3708]',
                          isSecondary && 'text-[#85d997] group-hover:bg-[#85d997] group-hover:text-[#1a512c]',
                          !isPrimary && !isSecondary && 'text-[#acf992] group-hover:bg-[#acf992] group-hover:text-[#285117]'
                        )}
                      >
                        <span className="material-symbols-outlined text-2xl">{domain.icon}</span>
                      </div>
                      <span
                        className="px-2.5 py-1 rounded-md bg-[#282b28] border border-white/5 font-mono text-[11px] font-bold tracking-wider"
                        style={{ color: accentColor }}
                      >
                        {domain.points}
                      </span>
                    </div>

                    <h3 className="font-headline text-lg sm:text-xl font-bold text-white uppercase tracking-tight">
                      {domain.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-[#c2c9b6] leading-relaxed">
                      {domain.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                    {domain.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-[#202321] text-[#c2c9b6] font-mono text-[10px] font-medium border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03 // TIMELINE & DEPLOYMENT RUNWAY
      ========================================================================= */}
      <section id="timeline" className="w-full py-20 sm:py-28 relative text-[#e1e3df] overflow-hidden bg-[#111412]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-16 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-white/5">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#a2d96d] mb-2 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#a2d96d] animate-pulse" />
                <span>{deploymentRunway.label}</span>
              </div>
              <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight uppercase">
                {deploymentRunway.heading}
              </h2>
            </div>
            <p className="font-sans text-sm sm:text-base text-[#c2c9b6] max-w-sm leading-relaxed">
              {deploymentRunway.subtitle}
            </p>
          </div>

          {/* Roadmap Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative">
            {deploymentRunway.phases.map((phase) => {
              const isClimax = 'isClimax' in phase && phase.isClimax;
              const isPrimary = phase.color === 'primary';
              const isSecondary = phase.color === 'secondary';
              const accentColor = isPrimary ? '#a2d96d' : isSecondary ? '#85d997' : '#acf992';

              return (
                <div
                  key={phase.id}
                  className={cn(
                    'p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 relative group shadow-lg',
                    isClimax
                      ? 'bg-[#282b28] border-2 border-[#6FAD68] shadow-[0_0_35px_rgba(111,173,104,0.25)] hover:bg-[#323533]'
                      : 'bg-[#191c1a] border border-white/5 hover:border-[#6FAD68]/40 hover:bg-[#202321]'
                  )}
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span
                        className="font-mono text-xs font-bold tracking-widest uppercase"
                        style={{ color: accentColor }}
                      >
                        {phase.code}
                      </span>
                      {isClimax ? (
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a2d96d] opacity-75" />
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#a2d96d]" />
                        </span>
                      ) : (
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: accentColor }}
                        />
                      )}
                    </div>

                    <h3 className="font-headline text-lg sm:text-xl font-bold text-white uppercase tracking-tight">
                      {phase.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-[#c2c9b6] leading-relaxed">
                      {phase.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/10">
                    <span
                      className="font-mono text-xs font-bold block mb-1"
                      style={{ color: accentColor }}
                    >
                      {phase.date}
                    </span>
                    <span className="font-mono text-[10px] text-[#8c9382] uppercase tracking-wider block font-semibold">
                      {phase.venue}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Live Arena Visual Banner */}
          <div className="w-full h-44 sm:h-52 rounded-2xl overflow-hidden relative shadow-2xl border border-[#6FAD68]/20 group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(9,12,10,0.92) 0%, rgba(9,12,10,0.45) 50%, rgba(9,12,10,0.92) 100%), url('${deploymentRunway.arenaBannerImage}')`,
              }}
              role="img"
              aria-label="Ancient monolithic stone pillars with glowing green runes in subterranean arena"
            />
            <div className="relative z-10 h-full p-6 sm:p-8 flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#a2d96d] animate-pulse" />
                <span className="font-mono text-xs text-[#a2d96d] uppercase font-bold tracking-widest">
                  PHYSICAL BASTION ARENA // LIVE DEPLOYMENT
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <span className="font-headline text-lg sm:text-2xl font-bold text-white uppercase tracking-tight">
                  KL UNIVERSITY CYBER BASTION • ANDHRA PRADESH
                </span>
                <span className="font-mono text-[11px] text-[#85d997] font-semibold bg-[#0c0f0d]/80 px-3 py-1 rounded border border-[#6FAD68]/30 backdrop-blur-sm self-start sm:self-auto">
                  50 FINALIST CADRES • AIR-GAPPED FABRIC
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04 // BOUNTY VAULT
      ========================================================================= */}
      <section id="prizes" className="w-full py-20 sm:py-28 bg-[#0c0f0d] relative text-[#e1e3df] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-16 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-white/5">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#a2d96d] mb-2 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#a2d96d] animate-pulse" />
                <span>{bountyVault.label}</span>
              </div>
              <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight uppercase">
                {bountyVault.heading}
              </h2>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#85d997] bg-[#191c1a] border border-[#6FAD68]/30 px-3.5 py-1.5 rounded-lg self-start md:self-end">
              <span className="material-symbols-outlined text-lg">verified</span>
              <span className="font-semibold">{bountyVault.escrowNote}</span>
            </div>
          </div>

          {/* 3 Tier Bounty Podium Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            {bountyVault.tiers.map((tier) => {
              const isApex = 'isApex' in tier && tier.isApex;
              const isPrimary = tier.color === 'primary';
              const isSecondary = tier.color === 'secondary';
              const accentColor = isPrimary ? '#a2d96d' : isSecondary ? '#85d997' : '#acf992';

              return (
                <div
                  key={tier.id}
                  className={cn(
                    'transition-all duration-300 p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-2xl relative',
                    tier.order,
                    isApex
                      ? 'bg-[#202321] border-2 border-[#a2d96d] md:-mt-6 shadow-[0_0_45px_rgba(162,217,109,0.22)]'
                      : 'bg-[#191c1a] border border-white/10 hover:border-[#6FAD68]/40'
                  )}
                >
                  {isApex && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#a2d96d] text-[#1f3708] font-mono text-xs font-black uppercase tracking-widest shadow-md">
                      {tier.badge}
                    </div>
                  )}

                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span
                        className="font-mono text-xs font-bold tracking-widest uppercase"
                        style={{ color: accentColor }}
                      >
                        {tier.rank}
                      </span>
                      <span
                        className="material-symbols-outlined text-3xl"
                        style={{ color: accentColor }}
                      >
                        {tier.icon}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-headline text-lg sm:text-xl font-bold text-white uppercase tracking-tight">
                        {tier.title}
                      </h3>
                      <p
                        className="font-headline text-3xl sm:text-4xl font-extrabold mt-1 tracking-tight"
                        style={{ color: accentColor }}
                      >
                        {tier.amount}
                      </p>
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-[#c2c9b6] leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-2.5">
                    {tier.perks.map((perk, idx) => (
                      <div key={idx} className="flex items-center gap-2 font-sans text-xs sm:text-sm text-[#e1e3df]">
                        <span
                          className="material-symbols-outlined text-base shrink-0"
                          style={{ color: accentColor }}
                        >
                          check_circle
                        </span>
                        <span className={isApex && idx === 0 ? 'font-bold text-[#a2d96d]' : ''}>
                          {perk}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Category Bounties Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            {bountyVault.bonusPools.map((bonus, idx) => {
              const isPrimary = bonus.color === 'primary';
              const isSecondary = bonus.color === 'secondary';
              const accentColor = isPrimary ? '#a2d96d' : isSecondary ? '#85d997' : '#acf992';

              return (
                <div
                  key={idx}
                  className="p-5 bg-[#191c1a] border border-white/5 hover:border-[#6FAD68]/30 rounded-xl flex items-center justify-between shadow-lg"
                >
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-[#8c9382] uppercase tracking-wider font-semibold">
                      {bonus.label}
                    </span>
                    <span className="font-headline text-base font-bold text-white mt-0.5">
                      {bonus.title}
                    </span>
                  </div>
                  <span
                    className="font-mono text-xs sm:text-sm font-bold tracking-wider"
                    style={{ color: accentColor }}
                  >
                    {bonus.pool}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsSection;
