import { useState, useRef } from 'react';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';
import { MobileDrawer } from './MobileDrawer';
import { cn } from '@/utils/cn';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const activeNavId = 'home';

  const handleCloseDrawer = () => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      triggerRef.current?.focus();
    }, 50);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300',
        'bg-gradient-to-b from-background-void/90 via-background-void/50 to-transparent backdrop-blur-[2px]',
        className
      )}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 h-20 sm:h-24 flex items-center justify-between">
        {/* Left: Organization Logos & Presenter Branding (KL University | GDG | WHH) */}
        <div className="flex items-center gap-2.5 sm:gap-4 select-none">
          {/* 1. KL University Logo */}
          <div className="flex items-center">
            <img
              src={siteConfig.logos.klUniversity.src}
              alt={siteConfig.logos.klUniversity.alt}
              className="h-7 sm:h-8 md:h-9 w-auto object-contain"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Vertical Divider 1 */}
          <div className="h-4 sm:h-5 w-px bg-ctf-muted/30" aria-hidden="true" />

          {/* 2. Google Developer Groups Brackets Logo */}
          <div className="flex items-center gap-2">
            <img
              src={siteConfig.logos.gdg.src}
              alt={siteConfig.logos.gdg.alt}
              className="h-5 sm:h-6 md:h-7 w-auto object-contain"
              loading="eager"
              decoding="async"
            />
            <span className="hidden lg:inline-block text-xs sm:text-sm font-semibold text-ctf-text tracking-wide whitespace-nowrap">
              {siteConfig.logos.gdg.wordmark}
            </span>
          </div>

          {/* Vertical Divider 2 */}
          <div className="h-4 sm:h-5 w-px bg-ctf-muted/30" aria-hidden="true" />

          {/* 3. White Hat Hackers Logo Badge */}
          <div className="flex items-center">
            <img
              src={siteConfig.logos.whh.src}
              alt={siteConfig.logos.whh.alt}
              className="h-6 sm:h-7 md:h-8 w-auto object-contain rounded-full shadow-neon-sm"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        {/* Right: Desktop Navigation Links (Shown at >=768px, Hidden below 768px) */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-5 lg:gap-8"
        >
          {siteConfig.navigation.map((item) => {
            if (item.isCta) {
              return (
                <Button
                  key={item.id}
                  variant="nav"
                  size="sm"
                  onClick={() => {
                    // TODO: Connect router when pages added (/register)
                  }}
                >
                  {item.label}
                </Button>
              );
            }

            const isActive = item.id === activeNavId;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  // TODO: Connect router when pages added
                }}
                className={cn(
                  'text-xs lg:text-sm uppercase font-semibold tracking-cyber transition-colors relative py-1.5',
                  isActive
                    ? 'text-accent-green'
                    : 'text-ctf-muted hover:text-ctf-text'
                )}
              >
                {item.label}
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-green shadow-neon-sm"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button: 3 neon-green lines, 44x44px tap target, visible <768px, hidden >=768px */}
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden w-11 h-11 min-w-[44px] min-h-[44px] flex flex-col items-center justify-center gap-1.5 p-2 rounded focus:outline-none focus:ring-1 focus:ring-accent-green transition-all"
          aria-label="Open menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="w-6 h-0.5 bg-accent-green rounded-full shadow-neon-sm block" />
          <span className="w-6 h-0.5 bg-accent-green rounded-full shadow-neon-sm block" />
          <span className="w-6 h-0.5 bg-accent-green rounded-full shadow-neon-sm block" />
        </button>
      </div>

      {/* Mobile Slide-in Drawer */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={handleCloseDrawer}
        activeId={activeNavId}
      />
    </header>
  );
};
