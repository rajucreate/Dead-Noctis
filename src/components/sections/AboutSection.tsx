import React from 'react';
import { about } from '@/content/siteContent';
import { cn } from '@/utils/cn';

interface AboutSectionProps {
  className?: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ className }) => {
  return (
    <section
      id="about"
      data-bg="about"
      className={cn(
        'w-full py-20 sm:py-28 relative select-none bg-[#111412] text-[#e1e3df] overflow-hidden',
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-white/5">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#a2d96d] mb-2 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#a2d96d] animate-pulse" />
              <span>{about.code}</span>
            </div>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight uppercase">
              {about.heading}
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#c2c9b6] max-w-md leading-relaxed">
            {about.body}
          </p>
        </div>

        {/* Narrative Bento / Split Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Visual Window with Floating Spire Backdrop */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden min-h-[400px] bg-[#191c1a] border border-[#6FAD68]/20 shadow-2xl group flex flex-col justify-between">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(9,12,10,0.2) 0%, rgba(9,12,10,0.9) 100%), url('${about.spireImage}')`,
              }}
              role="img"
              aria-label="Monolithic floating stone obsidian spires suspended over green dimensional abyss"
            />
            <div className="relative z-10 h-full p-6 sm:p-8 flex flex-col justify-between gap-8">
              {/* Top Tag & Hub Icon */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-md bg-[#0c0f0d]/85 border border-[#6FAD68]/30 font-mono text-[11px] text-[#a2d96d] uppercase font-semibold tracking-wider backdrop-blur-sm">
                  {about.spireCoordinate}
                </span>
                <span className="material-symbols-outlined text-[#acf992] text-2xl drop-shadow-md">
                  hub
                </span>
              </div>

              {/* Bottom Glass Card: The Origin Manifesto */}
              <div className="bg-[#0c0f0d]/90 border border-white/10 backdrop-blur-md p-5 sm:p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a2d96d]" />
                  <p className="font-mono text-xs text-[#a2d96d] uppercase tracking-widest font-bold">
                    {about.manifestoTitle}
                  </p>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#e1e3df] leading-relaxed">
                  {about.manifesto}
                </p>
              </div>
            </div>
          </div>

          {/* Right: 3 Distinctive Tactical Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {about.vectors.map((vector) => {
              const isPrimary = vector.accent === 'primary';
              const isSecondary = vector.accent === 'secondary';
              const accentColor = isPrimary ? '#a2d96d' : isSecondary ? '#85d997' : '#acf992';

              return (
                <div
                  key={vector.id}
                  className="bg-[#191c1a] border border-white/5 hover:border-[#6FAD68]/40 hover:bg-[#202321] transition-all duration-300 p-6 rounded-2xl flex flex-col justify-between shadow-lg group relative overflow-hidden"
                >
                  <div className="flex flex-col gap-4">
                    <div
                      className={cn(
                        'w-11 h-11 rounded-xl bg-[#282b28] flex items-center justify-center transition-colors border border-white/5',
                        isPrimary && 'text-[#a2d96d] group-hover:bg-[#a2d96d] group-hover:text-[#1f3708]',
                        isSecondary && 'text-[#85d997] group-hover:bg-[#85d997] group-hover:text-[#1a512c]',
                        !isPrimary && !isSecondary && 'text-[#acf992] group-hover:bg-[#acf992] group-hover:text-[#285117]'
                      )}
                    >
                      <span className="material-symbols-outlined text-2xl">{vector.icon}</span>
                    </div>

                    <div>
                      <span
                        className="font-mono text-[11px] font-bold tracking-widest uppercase block mb-1"
                        style={{ color: accentColor }}
                      >
                        {vector.num}
                      </span>
                      <h3 className="font-headline text-lg sm:text-xl font-bold text-white uppercase tracking-tight">
                        {vector.title}
                      </h3>
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-[#c2c9b6] leading-relaxed">
                      {vector.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-white/5">
                    <span className="font-mono text-[10px] text-[#8c9382] uppercase tracking-wider block font-semibold mb-0.5">
                      {vector.phase}
                    </span>
                    <span
                      className="font-sans text-xs sm:text-sm font-semibold block"
                      style={{ color: accentColor }}
                    >
                      {vector.subtext}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
