import React from 'react';
import { cn } from '@/utils/cn';

interface PageShellProps {
  children: React.ReactNode;
  /** Optional full-bleed background image URL */
  backgroundImage?: string;
  className?: string;
  /** Accessible label for the main landmark */
  ariaLabel?: string;
}

/**
 * PageShell — the common layout wrapper for every routed page (post-intro).
 *
 * Structure:
 *   - Full-bleed background image slot (optional; falls back to bg-background-void)
 *   - Dark left-to-right gradient overlay for readability
 *   - Vignette (radial dark edges)
 *   - Film-grain texture overlay (CSS noise pattern)
 *   - Left-aligned content column, max-width ~560px, standard padding
 *   - Fade-in on mount (respects prefers-reduced-motion via CSS)
 *
 * Accessibility:
 *   - `<main>` landmark with skip-link target id="main-content"
 *   - Semantic structure; children provide headings
 */
export const PageShell: React.FC<PageShellProps> = ({
  children,
  backgroundImage,
  className,
  ariaLabel,
}) => (
  <div
    className={cn(
      'relative min-h-screen w-full overflow-hidden',
      // Fade-in on mount — the CSS class triggers the animation.
      // prefers-reduced-motion disables it via global rule in index.css.
      'page-shell-enter',
      className
    )}
  >
    {/* ── Background layer ─────────────────────────────────────── */}
    {backgroundImage ? (
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-hidden="true"
      />
    ) : (
      <div className="absolute inset-0 bg-background-void" aria-hidden="true" />
    )}

    {/* ── Left-to-right dark gradient overlay (readability) ───── */}
    <div
      className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,6,4,0.97)_0%,rgba(2,6,4,0.90)_45%,rgba(2,6,4,0.65)_70%,rgba(2,6,4,0.30)_100%)]"
      aria-hidden="true"
    />

    {/* ── Radial vignette ──────────────────────────────────────── */}
    <div
      className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(2,6,4,0.80)_100%)]"
      aria-hidden="true"
    />

    {/* ── Film grain (CSS SVG noise, no JS, no network) ────────── */}
    <div
      className="absolute inset-0 opacity-[0.025] pointer-events-none page-shell-grain"
      aria-hidden="true"
    />

    {/* ── Scrollable content column ────────────────────────────── */}
    <main
      id="main-content"
      aria-label={ariaLabel}
      className="relative z-10 w-full px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-32 sm:py-36"
    >
      {/* Left-aligned content column, capped at ~560px */}
      <div className="max-w-[560px]">{children}</div>
    </main>
  </div>
);
