import React, { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

/**
 * Minimal, elegant Cyber Cursor for desktop viewports.
 *
 * Features:
 * – Instant center emerald diamond accent (0ms latency).
 * – Smooth trailing ambient glow ring with lightweight rAF interpolation (lerp 0.22).
 * – Auto-sleeps rAF when cursor is stationary to preserve 100% CPU/GPU performance.
 * – Dynamic magnetic interaction feedback on hovering interactive elements (buttons, links).
 * – Gracefully disabled on touch devices and when prefers-reduced-motion is active.
 * – Pointer-events-none; native cursor retained with high precision.
 */
export const CyberCursor: React.FC = () => {
  const prefersReduced = usePrefersReducedMotion();
  const [enabled, setEnabled] = useState(false);

  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  // Position refs for lerping
  const targetPos = useRef({ x: -100, y: -100 });
  const currentRingPos = useRef({ x: -100, y: -100 });
  const isHoveringInteractive = useRef(false);
  const isLoopRunning = useRef(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on fine pointer (desktop mouse) and not reduced motion
    const hasFinePointer =
      typeof window !== 'undefined' &&
      window.matchMedia('(pointer: fine)').matches &&
      !prefersReduced;

    if (!hasFinePointer) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const LERP_FACTOR = 0.22;
    const EPSILON = 0.15;

    const renderLoop = () => {
      if (document.hidden) {
        isLoopRunning.current = false;
        rafId.current = null;
        return;
      }

      const t = targetPos.current;
      const c = currentRingPos.current;

      const dx = t.x - c.x;
      const dy = t.y - c.y;

      if (Math.abs(dx) > EPSILON || Math.abs(dy) > EPSILON) {
        c.x += dx * LERP_FACTOR;
        c.y += dy * LERP_FACTOR;

        if (ring) {
          const isInteractive = isHoveringInteractive.current;
          const scale = isInteractive ? 1.35 : 1.0;
          ring.style.transform = `translate3d(${c.x.toFixed(1)}px, ${c.y.toFixed(1)}px, 0) translate(-50%, -50%) scale(${scale})`;
        }

        rafId.current = requestAnimationFrame(renderLoop);
      } else {
        // Sleep when cursor is at rest
        c.x = t.x;
        c.y = t.y;
        if (ring) {
          const isInteractive = isHoveringInteractive.current;
          const scale = isInteractive ? 1.35 : 1.0;
          ring.style.transform = `translate3d(${c.x.toFixed(1)}px, ${c.y.toFixed(1)}px, 0) translate(-50%, -50%) scale(${scale})`;
        }
        isLoopRunning.current = false;
        rafId.current = null;
      }
    };

    const wakeLoop = () => {
      if (!isLoopRunning.current && !document.hidden) {
        isLoopRunning.current = true;
        rafId.current = requestAnimationFrame(renderLoop);
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;

      targetPos.current = { x: e.clientX, y: e.clientY };

      // Instant center dot update
      if (dot) {
        dot.style.transform = `translate3d(${e.clientX.toFixed(1)}px, ${e.clientY.toFixed(1)}px, 0) translate(-50%, -50%) rotate(45deg)`;
      }

      wakeLoop();
    };

    const handlePointerOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('button, a, [role="button"], input, select, .cursor-pointer');
      const isNowInteractive = !!interactive;

      if (isHoveringInteractive.current !== isNowInteractive) {
        isHoveringInteractive.current = isNowInteractive;
        if (ring) {
          if (isNowInteractive) {
            ring.classList.add('border-accent-glow', 'bg-accent-green/15', 'shadow-neon-sm');
            ring.classList.remove('border-accent-green/45', 'bg-accent-green/5');
          } else {
            ring.classList.remove('border-accent-glow', 'bg-accent-green/15', 'shadow-neon-sm');
            ring.classList.add('border-accent-green/45', 'bg-accent-green/5');
          }
        }
        wakeLoop();
      }
    };

    const handleMouseLeave = () => {
      if (dot) dot.style.opacity = '0';
      if (ring) ring.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      if (dot) dot.style.opacity = '1';
      if (ring) ring.style.opacity = '1';
    };

    const handleVisibilityChange = () => {
      if (document.hidden && rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
        isLoopRunning.current = false;
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseover', handlePointerOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseover', handlePointerOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [prefersReduced]);

  if (!enabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
      {/* 1. Trailing Ambient Glow Ring (Smooth Lerp) */}
      <div
        ref={ringRef}
        className="absolute top-0 left-0 w-7 h-7 rounded-full border border-accent-green/45 bg-accent-green/5 will-change-transform transition-[border-color,background-color,box-shadow] duration-200"
        style={{
          transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
        }}
      />

      {/* 2. Instant Center Emerald Diamond Accent */}
      <div
        ref={dotRef}
        className="absolute top-0 left-0 w-1.5 h-1.5 rounded-[0.5px] bg-accent-green shadow-[0_0_8px_rgba(34,255,136,0.95)] will-change-transform"
        style={{
          transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%) rotate(45deg)',
        }}
      />
    </div>
  );
};
