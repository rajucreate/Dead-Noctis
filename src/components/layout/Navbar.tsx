import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '@/config/site';
import { navigation } from '@/content/siteContent';
import { Button } from '@/components/ui/Button';
import { MobileDrawer } from './MobileDrawer';
import { useActiveSection } from '@/hooks/useScrollProgress';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { cn } from '@/utils/cn';

interface NavbarProps {
  activeSection?: string;
  onRegisterClick?: () => void;
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection: propActiveSection,
  onRegisterClick,
  className,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const location = useLocation();
  const scrollActiveSection = useActiveSection();
  const prefersReduced = usePrefersReducedMotion();

  const navRef = useRef<HTMLElement | null>(null);
  const linkRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  // Sliding underline position, width, and visibility
  const [slider, setSlider] = useState<{ left: number; width: number; opacity: number }>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const currentActive = propActiveSection ?? scrollActiveSection;
  const isHomeRoute = location.pathname === '/' || location.pathname === '';

  // Measure and calculate the active link position relative to the nav container
  useEffect(() => {
    const updateSlider = () => {
      const activeItem = navigation.find((item) =>
        isHomeRoute ? item.id === currentActive : location.pathname === item.path
      );

      if (activeItem && !('isCta' in activeItem && activeItem.isCta)) {
        const linkEl = linkRefs.current[activeItem.id];
        const navEl = navRef.current;
        if (linkEl && navEl) {
          const navRect = navEl.getBoundingClientRect();
          const linkRect = linkEl.getBoundingClientRect();
          const left = linkRect.left - navRect.left;
          const width = linkRect.width;

          setSlider({
            left,
            width,
            opacity: 1,
          });
          return;
        }
      }
      setSlider((prev) => ({ ...prev, opacity: 0 }));
    };

    // Initial and deferred measurement for web font readiness
    updateSlider();
    const frameId = requestAnimationFrame(updateSlider);
    const timer = setTimeout(updateSlider, 120);

    window.addEventListener('resize', updateSlider, { passive: true });
    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(timer);
      window.removeEventListener('resize', updateSlider);
    };
  }, [currentActive, location.pathname, isHomeRoute]);

  const handleCloseDrawer = () => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      triggerRef.current?.focus();
    }, 50);
  };

  const handleBrandClick = (e: React.MouseEvent) => {
    if (isHomeRoute) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300',
        'bg-gradient-to-b from-background-void/95 via-background-void/70 to-transparent backdrop-blur-[4px]',
        className
      )}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 h-20 sm:h-24 flex items-center justify-between">
        {/* Left: Organization Logos & Presenter Branding (KL University | GDG | WHH) */}
        <Link
          to="/"
          onClick={handleBrandClick}
          className="flex items-center gap-2.5 sm:gap-4 select-none group"
          aria-label="Dead Noctis CTF Home"
        >
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
            <span className="hidden lg:inline-block text-xs sm:text-sm font-semibold text-ctf-text tracking-wide whitespace-nowrap group-hover:text-accent-green transition-colors">
              {siteConfig.logos.gdg.wordmark}
            </span>
          </div>
        </Link>

        {/* Right: Desktop Navigation Links with Smooth Sliding Indicator */}
        <nav
          ref={navRef}
          aria-label="Main Navigation"
          className="relative hidden md:flex items-center gap-5 lg:gap-8 py-2"
        >
          {navigation.map((item) => {
            const isActive = isHomeRoute
              ? item.id === currentActive
              : location.pathname === item.path;

            const handleItemClick = (e: React.MouseEvent) => {
              if (item.id === 'register' && onRegisterClick) {
                e.preventDefault();
                onRegisterClick();
                return;
              }
              if (isHomeRoute && item.id !== 'register') {
                if (item.id === 'home') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  return;
                }
                const el = document.getElementById(item.id);
                if (el) {
                  e.preventDefault();
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }
            };

            if ('isCta' in item && item.isCta) {
              return (
                <Link key={item.id} to={item.path} onClick={handleItemClick}>
                  <Button
                    variant="nav"
                    size="sm"
                    className={cn(
                      isActive && 'bg-accent-green/20 border-accent-green shadow-neon-sm'
                    )}
                  >
                    {item.label}
                  </Button>
                </Link>
              );
            }

            return (
              <Link
                key={item.id}
                ref={(el) => {
                  linkRefs.current[item.id] = el;
                }}
                to={item.path}
                onClick={handleItemClick}
                className={cn(
                  'text-xs lg:text-sm uppercase font-semibold tracking-cyber transition-colors duration-200 relative py-1 cursor-pointer select-none',
                  isActive
                    ? 'text-accent-green'
                    : 'text-ctf-muted hover:text-ctf-text'
                )}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Smooth Sliding Neon Underline Bar (glides horizontally left & right) */}
          <span
            className="absolute -bottom-0.5 h-[2.5px] bg-accent-green pointer-events-none rounded-full will-change-transform"
            style={{
              transform: `translate3d(${slider.left}px, 0, 0)`,
              width: `${slider.width}px`,
              opacity: slider.opacity,
              boxShadow: '0 0 10px rgba(34, 255, 136, 0.85), 0 0 18px rgba(0, 255, 102, 0.5)',
              transition: prefersReduced
                ? 'none'
                : 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), width 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s ease-out',
            }}
            aria-hidden="true"
          >
            {/* Glowing specular center energy core */}
            <span className="absolute inset-0 bg-white/70 blur-[0.8px] rounded-full" />
            {/* Pixel notch accent dot at the slider edge */}
            <span className="absolute -top-[1.5px] right-0 w-1.5 h-1.5 bg-[#48ff9f] shadow-[0_0_6px_#00ff66]" />
          </span>
        </nav>

        {/* Mobile Hamburger Button: 3 neon-green lines, 44x44px tap target */}
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
        activeId={isHomeRoute ? currentActive : location.pathname}
        onRegisterClick={onRegisterClick}
      />
    </header>
  );
};

export default Navbar;
