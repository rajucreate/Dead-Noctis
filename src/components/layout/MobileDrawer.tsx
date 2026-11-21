import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
import { navigation } from '@/content/siteContent';
import { HackerMascot, navIcons, registerIcon } from './Navbar';
import { cn } from '@/utils/cn';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeId: string;
  onRegisterClick?: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  activeId,
  onRegisterClick,
}) => {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  // Focus trap / move focus to close button when drawer opens, and handle ESC key
  useEffect(() => {
    if (!isOpen) return;

    // Lock body scroll
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Move focus into drawer
    const timer = setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen, onClose]);

  const handleRegisterClick = () => {
    onClose();
    if (onRegisterClick) {
      onRegisterClick();
    } else {
      if (window.location.pathname === '/') {
        const el = document.getElementById('register');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      navigate('/register');
    }
  };

  if (!isOpen || typeof document === 'undefined') return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[120] md:hidden flex flex-col justify-start p-3 sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Drawer"
    >
      {/* Dimmed backdrop - click to close */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-200 cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Floating Glass Mobile Menu Panel */}
      <div
        ref={drawerRef}
        className={cn(
          'relative w-full max-w-sm mx-auto mt-2 sm:mt-3 overflow-hidden',
          'bg-[rgba(8,12,9,0.88)] backdrop-blur-2xl backdrop-saturate-[180%]',
          'border border-[rgba(57,255,20,0.30)] rounded-2xl',
          'p-5 sm:p-6 flex flex-col gap-4',
          'shadow-[0_24px_60px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.14),0_0_24px_rgba(57,255,20,0.15)]',
          'z-10 max-h-[calc(100vh-2rem)] overflow-y-auto'
        )}
      >
        {/* Specular glass reflection & sheen overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] via-transparent to-black/30 pointer-events-none rounded-2xl" />
        <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#39FF14]/35 to-transparent pointer-events-none rounded-full" />

        {/* Top-edge ambient neon-green specular ray */}
        <div className="absolute inset-x-6 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#39FF14]/80 to-transparent pointer-events-none rounded-full" />

        {/* Header with Hacker Mascot, DEAD NOCTIS text branding & Close ✕ Button */}
        <div className="flex items-center justify-between pb-3 border-b border-[rgba(57,255,20,0.18)]">
          <div className="flex items-center gap-2.5">
            <HackerMascot className="w-7 h-7" />
            <div className="flex flex-col text-left leading-tight">
              <span className="font-nav font-bold text-base tracking-[0.16em] text-[#F1F5F1]">
                DEAD NOCTIS
              </span>
              <span className="font-mono text-[9px] tracking-[0.2em] text-[#39FF14] font-semibold">
                CTF SEASON 01
              </span>
            </div>
          </div>

          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#A0AAA2] hover:text-[#39FF14] hover:bg-[rgba(57,255,20,0.08)] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#39FF14] rounded-full transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <svg
              className="w-5 h-5 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Status Indicator Badge */}
        <div className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-[rgba(57,255,20,0.06)] border border-[rgba(57,255,20,0.2)]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14] animate-pulse" />
            <span className="font-nav font-bold text-xs tracking-wider text-[#39FF14]">
              CTF STATUS: ACTIVE
            </span>
          </div>
          <span className="font-mono text-[10px] text-[#A0AAA2]">LIVE</span>
        </div>

        {/* Nav Items List with Icons */}
        <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation Links">
          {navigation
            .filter((item) => !('isCta' in item && item.isCta))
            .map((item) => {
              const isActive = activeId === item.path || activeId === item.id;
              const displayLabel =
                item.id === 'faq'
                  ? 'FAQ'
                  : item.label.charAt(0) + item.label.slice(1).toLowerCase();

              return (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => {
                    onClose();
                    if (window.location.pathname === '/' && item.id !== 'register') {
                      if (item.id === 'home') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        return;
                      }
                      const el = document.getElementById(item.id);
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                  className={cn(
                    'min-h-[44px] px-4 py-2.5 rounded-xl font-nav font-semibold text-sm tracking-wide transition-all duration-200 flex items-center justify-between cursor-pointer',
                    isActive
                      ? 'bg-[rgba(57,255,20,0.12)] text-[#F1F5F1] border border-[#39FF14] shadow-[0_0_12px_rgba(57,255,20,0.3)]'
                      : 'text-[#A0AAA2] border border-transparent hover:text-[#F1F5F1] hover:bg-[rgba(57,255,20,0.06)]'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className={cn('transition-colors', isActive ? 'text-[#39FF14]' : 'text-[#A0AAA2]')}>
                      {navIcons[item.id]}
                    </span>
                    <span>{displayLabel}</span>
                  </div>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#39FF14] shadow-[0_0_6px_#39FF14]" />
                  )}
                </Link>
              );
            })}
        </nav>

        {/* Bottom CTA ([→] Register) */}
        <div className="pt-2 border-t border-[rgba(57,255,20,0.18)]">
          <button
            type="button"
            className="w-full min-h-[44px] flex items-center justify-center gap-2 font-nav font-bold tracking-wide text-sm rounded-xl border border-[#39FF14] bg-[rgba(57,255,20,0.15)] text-[#39FF14] hover:bg-[rgba(57,255,20,0.25)] hover:brightness-110 shadow-[0_0_12px_rgba(57,255,20,0.25)] transition-all duration-200 cursor-pointer"
            onClick={handleRegisterClick}
          >
            {registerIcon}
            <span>Register</span>
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
