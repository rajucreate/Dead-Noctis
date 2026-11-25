import React from 'react';
import { footer } from '@/content/siteContent';
import dnLogo from '@/assets/images/hero/dead-noctis-only.png';
import { cn } from '@/utils/cn';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  const handleScroll = (href: string) => (e: React.MouseEvent) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer
      className={cn(
        'w-full bg-[#0c0f0d] border-t border-white/5 select-none relative z-20 text-[#e1e3df]',
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 flex flex-col gap-12 sm:gap-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Col 1: Brand & Intel (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-4 max-w-md">
            <div className="flex items-center gap-3">
              <img
                src={dnLogo}
                alt="Dead Noctis"
                className="h-8 w-auto object-contain"
              />
            </div>

            <p className="font-mono text-xs uppercase tracking-widest text-[#a2d96d] font-bold">
              {footer.tagline}
            </p>

            <p className="font-sans text-xs sm:text-sm text-[#c2c9b6] leading-relaxed">
              {footer.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-2 font-mono text-[11px] text-[#8c9382]">
              <span className="flex items-center gap-1.5 text-[#a2d96d]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a2d96d] animate-pulse" />
                {footer.secStatus}
              </span>
              <span>•</span>
              <span>{footer.coordinates}</span>
            </div>
          </div>

          {/* Col 2: Directory (Span 2) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#a2d96d] font-bold">
              DIRECTORY
            </span>
            <div className="flex flex-col gap-2 font-sans text-xs sm:text-sm text-[#c2c9b6]">
              {footer.directory.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={handleScroll(item.href)}
                  className="hover:text-[#a2d96d] transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Terminal Channels (Span 2) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#a2d96d] font-bold">
              TERMINAL CHANNELS
            </span>
            <div className="flex flex-col gap-2 font-sans text-xs sm:text-sm text-[#c2c9b6]">
              {footer.channels.map((chan, idx) => (
                <a
                  key={idx}
                  href={chan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#a2d96d] transition-colors cursor-pointer"
                >
                  {chan.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 4: Organizing Consortium (Span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#a2d96d] font-bold">
              ORGANIZING CONSORTIUM
            </span>
            <p className="font-sans text-xs sm:text-sm text-[#c2c9b6] leading-relaxed">
              {footer.consortium}
            </p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 font-mono text-[11px] text-[#8c9382]">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <span>{footer.copyright}</span>
            <span>•</span>
            <a
              href="#rules"
              onClick={handleScroll('#rules')}
              className="hover:text-[#a2d96d] transition-colors cursor-pointer uppercase"
            >
              {footer.rulesLabel}
            </a>
          </div>

          <div className="flex items-center gap-2 text-[#85d997]">
            <span className="w-2 h-2 rounded-full bg-[#1a512c]" />
            <span>{footer.campusTag}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
