import React from 'react';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/cn';

interface RegisterSectionProps {
  onRegisterClick?: () => void;
  className?: string;
}

export const RegisterSection: React.FC<RegisterSectionProps> = ({
  onRegisterClick,
  className,
}) => {
  const primaryLabel = siteConfig.hero.primaryCta.replace(/[→⌄]/g, '').trim();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRegister = () => {
    if (onRegisterClick) {
      onRegisterClick();
    } else {
      // Default: smooth scroll to top or registration portal link
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="register"
      className={cn(
        'relative min-h-[85vh] w-full flex items-center justify-center py-28 md:py-36 overflow-hidden select-none',
        className
      )}
    >
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 text-center flex flex-col items-center">
        {/* Terminal Header Tag */}
        <div className="flex items-center gap-2 mb-4 justify-center">
          <span className="w-2.5 h-2.5 bg-accent-green shadow-neon-sm animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-[0.28em] text-accent-green uppercase">
            // 05 FINAL GATEWAY & DEPLOYMENT
          </span>
        </div>

        {/* Grand Destination Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase max-w-4xl mb-6">
          READY TO ENTER THE{' '}
          <span className="text-accent-green drop-shadow-[0_0_20px_rgba(34,255,136,0.5)]">
            DIGITAL REALM?
          </span>
        </h2>

        {/* Short invitation */}
        <p className="text-sm sm:text-base md:text-lg text-ctf-text/90 max-w-2xl font-medium leading-relaxed mb-10">
          Capture your first flags, collaborate with fellow operatives, and uncover hidden exploits in
          a purpose-built Level 1 cybersecurity environment. Free entry for all university students.
        </p>

        {/* Terminal Status Card */}
        <div className="bg-background-dark/90 border border-accent-green/40 p-6 sm:p-8 max-w-xl w-full mb-10 chamfer-btn backdrop-blur-md shadow-[0_0_35px_rgba(34,255,136,0.15)]">
          <div className="grid grid-cols-2 gap-4 text-left font-mono text-xs">
            <div>
              <span className="text-ctf-muted block text-[10px] uppercase">EVENT PROTOCOL</span>
              <span className="text-white font-bold">DEAD NOCTIS CTF</span>
            </div>
            <div>
              <span className="text-ctf-muted block text-[10px] uppercase">DIFFICULTY LEVEL</span>
              <span className="text-accent-green font-bold">LEVEL 1 (BEGINNER)</span>
            </div>
            <div>
              <span className="text-ctf-muted block text-[10px] uppercase">ORGANIZERS</span>
              <span className="text-white font-bold">GDG KLU × WHH</span>
            </div>
            <div>
              <span className="text-ctf-muted block text-[10px] uppercase">ADMISSION</span>
              <span className="text-accent-green font-bold">OPEN // 100% FREE</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <Button
            variant="primary"
            size="lg"
            showArrow
            arrowDirection="right"
            onClick={handleRegister}
            className="shadow-[0_0_25px_rgba(34,255,136,0.35)]"
          >
            {primaryLabel}
          </Button>

          <Button
            variant="secondary"
            size="lg"
            onClick={handleScrollTop}
          >
            RETURN TO TOP ⌃
          </Button>
        </div>
      </div>
    </section>
  );
};
