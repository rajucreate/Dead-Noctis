import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
import { navigation } from '@/content/siteContent';
import { ArrowUpRight } from './Navbar';
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
        const el = document.getElementById('registration') || document.getElementById('register');
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
      aria-label="Mobile Navigation Menu"
    >
      {/* Dimmed backdrop - click to close */}
      <div
        className="fixed inset-0 bg-black/80 transition-opacity duration-200 cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Solid Black Floating Mobile Menu Panel */}
      <div
        ref={drawerRef}
        className={cn(
          'relative w-full max-w-sm mx-auto mt-2 sm:mt-3 overflow-hidden',
          'bg-[#080B09]',
          'border border-[#6FAD68]/25 rounded-xl sm:rounded-2xl',
          'p-5 flex flex-col gap-4',
          'shadow-[0_16px_40px_rgba(0,0,0,0.95)]',
          'z-10 max-h-[calc(100vh-2rem)] overflow-y-auto'
        )}
      >
        {/* Header with DEAD NOCTIS text branding & Close ✕ Button */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <span className="font-nav font-bold text-[21px] tracking-[0.14em] text-white">
            DEAD NOCTIS
          </span>

          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#C8D1CA] hover:text-[#6FAD68] hover:bg-white/5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#6FAD68] rounded-lg transition-colors cursor-pointer"
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

        {/* Nav Items List (Text-only) */}
        <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation Links">
          {navigation
            .filter((item) => !('isCta' in item && item.isCta))
            .map((item) => {
              const isActive = activeId === item.path || activeId === item.id;

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
                    'min-h-[44px] px-4 py-2.5 rounded-lg font-nav font-semibold text-[19px] tracking-wider uppercase transition-colors duration-200 flex items-center justify-between cursor-pointer',
                    isActive
                      ? 'bg-[#6FAD68]/12 text-[#6FAD68] border border-[#6FAD68]/35'
                      : 'text-[#C8D1CA] border border-transparent hover:text-[#6FAD68] hover:bg-white/5'
                  )}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#6FAD68] shadow-[0_0_6px_#6FAD68]" />
                  )}
                </Link>
              );
            })}
        </nav>

        {/* Bottom CTA: JOIN CTF ↗ */}
        <div className="pt-2 border-t border-white/10">
          <button
            type="button"
            className="group w-full min-h-[44px] flex items-center justify-center gap-2 font-nav font-bold tracking-wider uppercase text-[19px] rounded-lg border border-[#6FAD68]/40 bg-[#6FAD68]/12 text-[#6FAD68] hover:bg-[#6FAD68]/22 hover:border-[#6FAD68]/80 transition-all duration-200 cursor-pointer"
            onClick={handleRegisterClick}
          >
            <span>JOIN CTF</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default MobileDrawer;
