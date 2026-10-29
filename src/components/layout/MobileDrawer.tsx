import { useEffect, useRef } from 'react';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/cn';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeId: string;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  activeId,
}) => {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);

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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Drawer"
    >
      {/* Dimmed backdrop - click to close */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        ref={drawerRef}
        className="fixed inset-y-0 right-0 w-3/4 max-w-xs bg-background-dark/95 border-l border-ctf-border/60 p-6 flex flex-col justify-between shadow-2xl z-10"
      >
        <div>
          {/* Header with Close ✕ Button */}
          <div className="flex items-center justify-between pb-6 border-b border-ctf-border/30">
            <span className="text-xs uppercase tracking-cyber-widest text-ctf-muted">
              NAVIGATION
            </span>
            <button
              ref={closeBtnRef}
              type="button"
              onClick={onClose}
              className="w-11 h-11 flex items-center justify-center text-ctf-muted hover:text-accent-green focus:outline-none focus:ring-1 focus:ring-accent-green rounded transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6 stroke-current"
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

          {/* Nav Items List */}
          <nav className="mt-8 flex flex-col gap-6" aria-label="Mobile Navigation Links">
            {siteConfig.navigation
              .filter((item) => !item.isCta)
              .map((item) => {
                const isActive = item.id === activeId;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onClose();
                      // TODO: Connect router when pages added
                    }}
                    className={cn(
                      'text-base uppercase font-semibold tracking-cyber transition-colors flex items-center justify-between py-1',
                      isActive
                        ? 'text-accent-green'
                        : 'text-ctf-text hover:text-accent-green'
                    )}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-green shadow-neon-sm" />
                    )}
                  </a>
                );
              })}
          </nav>
        </div>

        {/* Bottom Chamfered REGISTER Button */}
        <div className="pt-6 border-t border-ctf-border/30">
          <Button
            variant="primary"
            className="w-full justify-center"
            onClick={() => {
              onClose();
              // TODO: Connect router when pages added (/register)
            }}
          >
            REGISTER
          </Button>
        </div>
      </div>
    </div>
  );
};
