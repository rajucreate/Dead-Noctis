import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '@/config/site';
import { navigation } from '@/content/siteContent';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-20 border-t border-ctf-border/40 bg-background-void/90 py-12 sm:py-16 select-none backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Organization Logos */}
        <Link to="/" className="flex items-center gap-3 sm:gap-4" aria-label="Dead Noctis CTF Home">
          <img
            src={siteConfig.logos.klUniversity.src}
            alt={siteConfig.logos.klUniversity.alt}
            className="h-6 sm:h-7 w-auto object-contain"
          />
          <div className="h-4 w-px bg-ctf-muted/30" aria-hidden="true" />
          <img
            src={siteConfig.logos.gdg.src}
            alt={siteConfig.logos.gdg.alt}
            className="h-5 sm:h-6 w-auto object-contain"
          />
          <div className="h-4 w-px bg-ctf-muted/30" aria-hidden="true" />
          <img
            src={siteConfig.logos.whh.src}
            alt={siteConfig.logos.whh.alt}
            className="h-6 sm:h-7 w-auto object-contain rounded-full"
          />
        </Link>

        {/* Center: Quick Links */}
        <nav
          aria-label="Footer Navigation"
          className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs font-semibold tracking-cyber uppercase text-ctf-muted"
        >
          {navigation.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="hover:text-accent-green transition-colors cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: Copyright & Status */}
        <div className="text-center md:text-right font-mono text-[10px] text-ctf-muted/70">
          <p>© 2026 DEAD NOCTIS CTF // LEVEL 1</p>
          <p className="text-accent-green/80 mt-1">GDG KL UNIVERSITY × WHH</p>
        </div>
      </div>
    </footer>
  );
};
