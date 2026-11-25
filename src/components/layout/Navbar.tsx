import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigation } from '@/content/siteContent';
import { MobileDrawer } from './MobileDrawer';
import { useActiveSection } from '@/hooks/useScrollProgress';
import { cn } from '@/utils/cn';

interface NavbarProps {
  activeSection?: string;
  onRegisterClick?: () => void;
  className?: string;
}

/**
 * Clean diagonal upward-right arrow icon for JOIN CTF CTA.
 */
export const ArrowUpRight: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg
    className={cn('shrink-0 stroke-current', className)}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M4.5 11.5L11.5 4.5M11.5 4.5H6.5M11.5 4.5V9.5"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Navbar: React.FC<NavbarProps> = ({
  activeSection: propActiveSection,
  onRegisterClick,
  className,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const location = useLocation();
  const scrollActiveSection = useActiveSection();

  // Real-time zero-lag active section detection & instant click feedback
  const [manualActive, setManualActive] = useState<string | null>(null);
  const [directActive, setDirectActive] = useState<string>('home');
  const manualTimerRef = useRef<NodeJS.Timeout | null>(null);

  const isHomeRoute = location.pathname === '/' || location.pathname === '';

  // Direct passive scroll listener ensuring zero-latency detection for all sections
  useEffect(() => {
    if (!isHomeRoute) return;

    let rafId: number | null = null;
    const checkActive = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollY <= 60) {
        setDirectActive('home');
        return;
      }
      if (windowHeight + scrollY >= docHeight - 60) {
        setDirectActive('faq');
        return;
      }

      const threshold = windowHeight * 0.38;
      const ids = ['home', 'about', 'events', 'rules', 'faq', 'registration'];
      for (let i = ids.length - 1; i >= 0; i--) {
        const id = ids[i];
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= threshold && rect.bottom > threshold) {
          setDirectActive(id === 'registration' ? 'register' : id);
          return;
        }
      }
    };

    const handleScroll = () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(checkActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    checkActive();

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomeRoute]);

  const normalizedScroll = scrollActiveSection === 'hero' ? 'home' : scrollActiveSection;
  const currentActive = manualActive ?? propActiveSection ?? directActive ?? normalizedScroll;

  const handleCloseDrawer = () => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      triggerRef.current?.focus();
    }, 50);
  };

  const handleBrandClick = (e: React.MouseEvent) => {
    if (isHomeRoute) {
      e.preventDefault();
      setManualActive('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleItemClick = (
    e: React.MouseEvent,
    item: { id: string; path: string; isCta?: boolean }
  ) => {
    if (item.id === 'register' && onRegisterClick) {
      e.preventDefault();
      onRegisterClick();
      return;
    }
    if (isHomeRoute && item.id !== 'register') {
      if (manualTimerRef.current) clearTimeout(manualTimerRef.current);
      setManualActive(item.id);
      manualTimerRef.current = setTimeout(() => {
        setManualActive(null);
      }, 700);

      if (item.id === 'home') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const targetId = item.id === 'register' ? 'registration' : item.id;
      const el = document.getElementById(targetId) || document.getElementById(item.id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = navigation.filter((item) => !('isCta' in item && item.isCta));
  const ctaItem = navigation.find((item) => 'isCta' in item && item.isCta);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 w-full z-50',
        'bg-[#080B09] border-b border-[#6FAD68]/20',
        'shadow-[0_4px_24px_rgba(0,0,0,0.85)]',
        'transition-all duration-200',
        className
      )}
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-3 sm:py-3.5 flex items-center justify-between">
        {/* Brand Text: DEAD NOCTIS (Clean, text-only) */}
        <Link
          to="/"
          onClick={handleBrandClick}
          className="font-nav font-bold text-[21px] sm:text-[23px] tracking-[0.16em] text-white hover:text-[#6FAD68] transition-colors duration-200 select-none shrink-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#6FAD68] rounded py-0.5"
          aria-label="Dead Noctis CTF Home"
        >
          DEAD NOCTIS
        </Link>

        {/* Center: Navigation Items (Text-only) */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 sm:gap-3 lg:gap-5"
        >
          {navLinks.map((item) => {
            const isActive = isHomeRoute
              ? item.id === currentActive
              : location.pathname === item.path;

            return (
              <Link
                key={item.id}
                to={item.path}
                onClick={(e) => handleItemClick(e, item)}
                className={cn(
                  'relative px-3.5 py-1.5 rounded-md font-nav font-semibold text-[17px] sm:text-[18px] tracking-wider uppercase select-none cursor-pointer',
                  'transition-colors duration-200',
                  'focus:outline-none focus-visible:ring-1 focus-visible:ring-[#6FAD68]',
                  isActive
                    ? 'text-[#6FAD68]'
                    : 'text-[#C8D1CA] hover:text-[#6FAD68]'
                )}
              >
                <span>{item.label}</span>
                {/* Thin active underline indicator */}
                {isActive && (
                  <span
                    className="absolute bottom-0 inset-x-3 h-[2px] bg-[#6FAD68] rounded-full"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Primary CTA (JOIN CTF ↗) */}
        <div className="hidden md:flex items-center">
          {ctaItem && (
            <Link
              to={ctaItem.path}
              onClick={(e) => handleItemClick(e, ctaItem)}
              className={cn(
                'group inline-flex items-center gap-2 px-4 py-1.5 rounded-lg font-nav font-bold text-[17px] tracking-wider uppercase select-none cursor-pointer',
                'bg-[#6FAD68]/12 text-[#6FAD68] border border-[#6FAD68]/40',
                'hover:bg-[#6FAD68]/22 hover:border-[#6FAD68]/80 transition-all duration-200 ease-out',
                'active:scale-[0.98]',
                'focus:outline-none focus-visible:ring-1 focus-visible:ring-[#6FAD68]',
                (isHomeRoute ? currentActive === ctaItem.id : location.pathname === ctaItem.path) &&
                  'bg-[#6FAD68]/25 border-[#6FAD68]'
              )}
            >
              <span>JOIN CTF</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          )}
        </div>

        {/* Mobile Hamburger Toggle Button (>=40px tap target) */}
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden w-10 h-10 min-w-[40px] min-h-[40px] flex flex-col items-center justify-center gap-1.5 p-2 rounded-lg text-white hover:text-[#6FAD68] hover:bg-white/5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#6FAD68] transition-colors duration-200 cursor-pointer"
          aria-label="Open navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="w-5 h-0.5 bg-white rounded-full block" />
          <span className="w-5 h-0.5 bg-[#6FAD68] rounded-full block" />
          <span className="w-5 h-0.5 bg-white rounded-full block" />
        </button>
      </div>

      {/* Mobile Drawer */}
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
