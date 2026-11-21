import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigation } from '@/content/siteContent';
import { MobileDrawer } from './MobileDrawer';
import { useActiveSection } from '@/hooks/useScrollProgress';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { cn } from '@/utils/cn';

interface NavbarProps {
  activeSection?: string;
  onRegisterClick?: () => void;
  className?: string;
}

/**
 * Green Hooded Cyber/Hacker Mascot SVG matching reference aesthetic.
 */
export const HackerMascot: React.FC<{ className?: string }> = ({ className = 'w-7 h-7 sm:w-8 sm:h-8' }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('shrink-0 filter drop-shadow-[0_0_8px_rgba(57,255,20,0.7)]', className)}
    aria-hidden="true"
  >
    {/* Outer Hood & Body Silhouette */}
    <path
      d="M20 2C15 2 10.5 6 9 12C7.8 17 8.5 21 7 24C6.2 25.2 6.8 26.8 8.2 27.2C9.5 27.6 11 27 12 25.8C12.8 26.8 14 27.8 15.5 28.5L13.5 34C13 35.5 14.2 37 15.8 37L24.2 37C25.8 37 27 35.5 26.5 34L24.5 28.5C26 27.8 27.2 26.8 28 25.8C29 27 30.5 27.6 31.8 27.2C33.2 26.8 33.8 25.2 33 24C31.5 21 32.2 17 31 12C29.5 6 25 2 20 2Z"
      fill="#39FF14"
    />
    {/* Left Shoulder Armor Wing */}
    <path
      d="M6 31C3.5 31.5 1.5 33 1 34.5C0.8 35.2 1.2 36 2 36L10.5 36L11.8 31.5C9.8 30.8 7.8 30.6 6 31Z"
      fill="#39FF14"
    />
    {/* Right Shoulder Armor Wing */}
    <path
      d="M34 31C36.5 31.5 38.5 33 39 34.5C39.2 35.2 38.8 36 38 36L29.5 36L28.2 31.5C30.2 30.8 32.2 30.6 34 31Z"
      fill="#39FF14"
    />
    {/* Inner Face Cavity (Dark void) */}
    <path
      d="M20 7C16 7 12.5 10.5 11.8 15.5C11 19.5 12 22.5 13.5 24C15.2 25.8 17.5 26.5 20 26.5C22.5 26.5 24.8 25.8 26.5 24C28 22.5 29 19.5 28.2 15.5C27.5 10.5 24 7 20 7Z"
      fill="#040704"
    />
    {/* Slanted Glowing Green Cyber Eyes */}
    <path
      d="M15.5 16.5L18.5 18M24.5 16.5L21.5 18"
      stroke="#39FF14"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    {/* Collar / zipper cutout */}
    <path
      d="M17.5 30L20 33L22.5 30"
      stroke="#040704"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const navIcons: Record<string, React.ReactNode> = {
  home: (
    <svg className="w-4 h-4 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  about: (
    <svg className="w-4 h-4 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  events: (
    <svg className="w-4 h-4 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21v-4m0 0V5l9 3 9-3v9l-9 3-9-3z" />
    </svg>
  ),
  rules: (
    <svg className="w-4 h-4 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l8 4v6c0 5.25-3.5 10-8 12-4.5-2-8-6.75-8-12V6l8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  faq: (
    <svg className="w-4 h-4 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3m.08 4h.01" />
    </svg>
  ),
};

export const registerIcon = (
  <svg className="w-4 h-4 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 4H5a1 1 0 00-1 1v14a1 1 0 001 1h4" />
    <path d="M14 7l5 5-5 5" />
    <path d="M8 12h11" />
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
  const prefersReduced = usePrefersReducedMotion();

  // Real-time zero-lag active section detection & instant click feedback
  const [manualActive, setManualActive] = useState<string | null>(null);
  const [directActive, setDirectActive] = useState<string>('home');
  const manualTimerRef = useRef<NodeJS.Timeout | null>(null);

  const isHomeRoute = location.pathname === '/' || location.pathname === '';

  // Direct passive scroll listener ensuring zero-latency detection for all sections (including rules)
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
      const ids = ['home', 'about', 'events', 'rules', 'faq'];
      for (let i = ids.length - 1; i >= 0; i--) {
        const id = ids[i];
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= threshold && rect.bottom > threshold) {
          setDirectActive(id);
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
      const el = document.getElementById(item.id);
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
        'fixed top-3 sm:top-5 inset-x-0 mx-auto z-50 w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] max-w-5xl lg:max-w-6xl pointer-events-none transition-all duration-200',
        className
      )}
    >
      {/* Outer ambient neon-green light diffusion / reflection beneath the navbar */}
      <div
        className="absolute -bottom-3 inset-x-12 sm:inset-x-20 h-6 bg-gradient-to-r from-transparent via-[#39FF14]/35 to-transparent blur-xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-1 left-8 sm:left-14 w-32 h-5 bg-[#39FF14]/25 blur-lg pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div
        className={cn(
          'relative w-full flex items-center justify-between',
          'px-3.5 sm:px-5 lg:px-6 py-2 sm:py-2.5',
          'rounded-full pointer-events-auto',
          'bg-[rgba(8,12,9,0.85)] backdrop-blur-2xl backdrop-saturate-[180%]',
          'border border-[rgba(57,255,20,0.30)]',
          'shadow-[0_16px_40px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.14),0_0_20px_rgba(57,255,20,0.12)]'
        )}
      >
        {/* Specular glass reflection & sheen overlay */}
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-black/30" />
          <div className="absolute inset-x-12 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#39FF14]/35 to-transparent" />
        </div>

        {/* Left Section: Hacker Mascot + DEAD NOCTIS & CTF SEASON 01 */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/"
            onClick={handleBrandClick}
            className="flex items-center gap-2.5 sm:gap-3 select-none group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#39FF14] rounded-md py-0.5"
            aria-label="Dead Noctis CTF Home"
          >
            <HackerMascot className="w-7 h-7 sm:w-8 sm:h-8" />
            <div className="flex flex-col text-left leading-tight">
              <span className="font-nav font-bold text-sm sm:text-base tracking-[0.14em] text-[#F1F5F1] group-hover:text-[#39FF14] transition-colors duration-200">
                DEAD NOCTIS
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.22em] text-[#39FF14] font-semibold">
                CTF SEASON 01
              </span>
            </div>
          </Link>

          {/* Vertical Divider */}
          <div className="hidden md:block h-5 w-px bg-white/20 mx-1.5 lg:mx-2.5" aria-hidden="true" />
        </div>

        {/* Center Section: Navigation Links with Icons */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 sm:gap-1.5 lg:gap-2.5"
        >
          {navLinks.map((item) => {
            const isActive = isHomeRoute
              ? item.id === currentActive
              : location.pathname === item.path;

            const displayLabel =
              item.id === 'faq'
                ? 'FAQ'
                : item.label.charAt(0) + item.label.slice(1).toLowerCase();

            return (
              <Link
                key={item.id}
                to={item.path}
                onClick={(e) => handleItemClick(e, item)}
                className={cn(
                  'relative flex items-center gap-2 px-3.5 lg:px-4 py-1.5 rounded-full font-nav text-xs lg:text-sm tracking-wide select-none cursor-pointer',
                  'transition-[color,background-color,border-color,box-shadow,transform] duration-180 ease-out will-change-transform',
                  !prefersReduced && 'hover:-translate-y-[1.5px]',
                  isActive
                    ? 'bg-[rgba(57,255,20,0.12)] text-[#F1F5F1] font-semibold border border-[#39FF14] shadow-[0_0_14px_rgba(57,255,20,0.32)]'
                    : 'text-[#A0AAA2] font-medium border border-transparent hover:text-[#F1F5F1] hover:bg-[rgba(57,255,20,0.06)] hover:border-[rgba(57,255,20,0.22)]'
                )}
              >
                <span className={cn('transition-colors', isActive ? 'text-[#39FF14]' : 'text-[#A0AAA2] group-hover:text-[#39FF14]')}>
                  {navIcons[item.id]}
                </span>
                <span>{displayLabel}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Section: Status Indicator & Primary Registration CTA */}
        <div className="hidden md:flex items-center gap-2.5 lg:gap-3">
          {/* Status Indicator Pill: ● CTF ACTIVE */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(57,255,20,0.06)] border border-[rgba(57,255,20,0.25)] select-none">
            <span className="w-2 h-2 rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14] animate-pulse" />
            <span className="font-nav font-bold text-xs tracking-wider text-[#39FF14]">
              CTF ACTIVE
            </span>
          </div>

          {/* Primary CTA: [→] Register */}
          {ctaItem && (
            <Link
              to={ctaItem.path}
              onClick={(e) => handleItemClick(e, ctaItem)}
              className={cn(
                'flex items-center gap-2 px-4 lg:px-5 py-1.5 rounded-full font-nav font-bold text-xs lg:text-sm tracking-wide select-none cursor-pointer',
                'border border-[#39FF14] bg-[rgba(57,255,20,0.08)] text-[#39FF14]',
                'shadow-[0_0_12px_rgba(57,255,20,0.25)]',
                'transition-all duration-200 ease-out',
                !prefersReduced && 'hover:-translate-y-[1.5px]',
                'hover:brightness-110 hover:bg-[rgba(57,255,20,0.18)] hover:shadow-[0_0_18px_rgba(57,255,20,0.45)]',
                'active:translate-y-0 active:brightness-95',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#39FF14]',
                (isHomeRoute ? currentActive === ctaItem.id : location.pathname === ctaItem.path) &&
                  'bg-[rgba(57,255,20,0.22)] shadow-[0_0_14px_rgba(57,255,20,0.4)]'
              )}
            >
              {registerIcon}
              <span>Register</span>
            </Link>
          )}
        </div>

        {/* Mobile Right: Compact CTF ACTIVE dot & Hamburger Button (>=44x44px target) */}
        <div className="md:hidden flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[rgba(57,255,20,0.08)] border border-[rgba(57,255,20,0.25)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] shadow-[0_0_6px_#39FF14] animate-pulse" />
            <span className="font-nav font-bold text-[10px] tracking-wider text-[#39FF14]">
              ACTIVE
            </span>
          </div>

          <button
            ref={triggerRef}
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="w-11 h-11 min-w-[44px] min-h-[44px] flex flex-col items-center justify-center gap-1.5 p-2 rounded-full text-[#F1F5F1] hover:text-[#39FF14] hover:bg-[rgba(57,255,20,0.08)] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#39FF14] transition-colors duration-200 cursor-pointer"
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="w-5 h-0.5 bg-[#39FF14] rounded-full shadow-[0_0_6px_rgba(57,255,20,0.4)] block" />
            <span className="w-5 h-0.5 bg-[#39FF14] rounded-full shadow-[0_0_6px_rgba(57,255,20,0.4)] block" />
            <span className="w-5 h-0.5 bg-[#39FF14] rounded-full shadow-[0_0_6px_rgba(57,255,20,0.4)] block" />
          </button>
        </div>
      </div>

      {/* Mobile Glass Menu Drawer */}
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
