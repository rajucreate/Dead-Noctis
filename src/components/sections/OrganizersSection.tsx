import React from 'react';
import { organizersAlliance } from '@/content/siteContent';
import { cn } from '@/utils/cn';

interface OrganizersSectionProps {
  className?: string;
}

export const OrganizersSection: React.FC<OrganizersSectionProps> = ({ className }) => {
  return (
    <section
      id="alliance"
      className={cn(
        'w-full py-20 sm:py-28 bg-[#0c0f0d] relative text-[#e1e3df] select-none overflow-hidden',
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 pb-2">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#a2d96d] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#a2d96d] animate-pulse" />
            <span>{organizersAlliance.label}</span>
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight uppercase">
            {organizersAlliance.heading}
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#c2c9b6] max-w-xl leading-relaxed">
            {organizersAlliance.subtitle}
          </p>
        </div>

        {/* 3 Key Consortium Partner Cards with Authentic Logos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {organizersAlliance.partners.map((partner) => {
            const isPrimary = partner.accentColor === 'primary';
            const isSecondary = partner.accentColor === 'secondary';
            const accentColor = isPrimary ? '#a2d96d' : isSecondary ? '#85d997' : '#acf992';

            return (
              <div
                key={partner.id}
                className="bg-[#191c1a] hover:bg-[#202321] border border-white/5 hover:border-[#6FAD68]/40 transition-all duration-300 p-6 sm:p-8 rounded-2xl flex flex-col items-center text-center justify-between shadow-xl group"
              >
                <div className="flex flex-col items-center gap-5 w-full">
                  {/* Logo Container */}
                  <div className="h-20 w-full flex items-center justify-center p-3 bg-[#282b28]/50 rounded-xl border border-white/5 group-hover:border-white/10 transition-colors">
                    <img
                      src={partner.logoUrl}
                      alt={partner.name}
                      onError={(e) => {
                        // Fallback to local asset if remote URL fails
                        (e.target as HTMLImageElement).src = partner.localFallback;
                      }}
                      className="max-h-12 max-w-[85%] object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div>
                    <span
                      className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-widest block mb-1"
                      style={{ color: accentColor }}
                    >
                      {partner.role}
                    </span>
                    <h3 className="font-headline text-lg sm:text-xl font-bold text-white uppercase tracking-tight">
                      {partner.name}
                    </h3>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-[#c2c9b6] leading-relaxed">
                    {partner.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 w-full">
                  <span className="font-mono text-[11px] text-[#8c9382] uppercase tracking-wider font-semibold">
                    {partner.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OrganizersSection;
