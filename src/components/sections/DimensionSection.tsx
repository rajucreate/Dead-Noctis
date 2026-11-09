import React from 'react';
import { cn } from '@/utils/cn';

interface DimensionSectionProps {
  className?: string;
}

export const DimensionSection: React.FC<DimensionSectionProps> = ({ className }) => {
  const pillars = [
    {
      code: '01',
      title: 'LEVEL 1 ENTRY',
      description: 'Structured specifically for novices and beginners. No prior CTF experience required.',
    },
    {
      code: '02',
      title: 'GDG × WHH',
      description: 'Organized by Google Developer Groups KL University in collaboration with White Hat Hackers.',
    },
    {
      code: '03',
      title: 'HANDS-ON PROVING GROUND',
      description: 'Practical security puzzles spanning web systems, cryptography, forensics, and reverse engineering.',
    },
    {
      code: '04',
      title: 'COMMUNITY & LEARNING',
      description: 'Collaborate with fellow operatives in a supportive, zero-gatekeeping competitive environment.',
    },
  ];

  return (
    <section
      id="dimension"
      className={cn(
        'relative min-h-[85vh] w-full flex items-center justify-center py-28 md:py-36 overflow-hidden select-none',
        className
      )}
    >
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-accent-green shadow-neon-sm rounded-none" />
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-accent-green uppercase">
              // PHASE 02: THE THRESHOLD
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 uppercase">
            STEP BEYOND THE{' '}
            <span className="text-accent-green drop-shadow-[0_0_15px_rgba(34,255,136,0.4)]">
              OBSIDIAN PORTAL
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-ctf-text/90 leading-relaxed max-w-2xl font-medium">
            Dead Noctis CTF transforms cybersecurity education into an exploratory digital realm.
            Organized by Google Developer Groups (GDG) on Campus KL University in collaboration
            with White Hat Hackers (WHH), Level 1 challenges participants to investigate, decipher,
            and capture flags across multiple security domains.
          </p>
        </div>

        {/* 4 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {pillars.map((item) => (
            <div
              key={item.code}
              className="group relative bg-background-dark/85 border border-ctf-border/60 hover:border-accent-green/70 p-6 md:p-7 transition-all duration-300 backdrop-blur-md chamfer-sm hover:shadow-[0_0_20px_rgba(34,255,136,0.15)]"
            >
              {/* Corner Accent Glow */}
              <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden pointer-events-none">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-green/20 group-hover:bg-accent-green/40 transition-colors rotate-45" />
              </div>

              <span className="text-xs font-mono font-bold tracking-wider text-accent-green/80 block mb-3">
                [{item.code}]
              </span>

              <h3 className="text-base sm:text-lg font-bold tracking-wider text-white uppercase mb-2 group-hover:text-accent-green transition-colors">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-ctf-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
