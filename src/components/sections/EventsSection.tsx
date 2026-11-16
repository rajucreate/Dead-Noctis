import React, { useRef, useState, useEffect } from 'react';
import { events } from '@/content/siteContent';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { HoloTiltCard, HoloTiltLayer } from '@/components/ui/HoloTiltCard';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { cn } from '@/utils/cn';

interface EventsSectionProps {
  className?: string;
}

/**
 * Animated Holographic Radar HUD:
 * - Concentric reticle rings & crosshairs
 * - Crisp SVG icons (Calendar / Location Pin / Multi-User Network)
 * - Slow idle radar beam sweep (6s duration) that accelerates slightly on hover
 * - Zero blurry halos for maximum sharpness
 */
const HolographicRadarHUD: React.FC<{
  isHovered?: boolean;
  type: 'date' | 'venue' | 'scope';
}> = ({ isHovered, type }) => {
  const prefersReduced = usePrefersReducedMotion();

  return (
    <div className="relative w-24 h-24 sm:w-26 sm:h-26 flex items-center justify-center pointer-events-none select-none">
      {/* 1. Concentric Rangefinder Reticle Rings */}
      <svg
        className="absolute inset-0 w-full h-full text-accent-green/30 transition-transform duration-500 group-hover:scale-105"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <circle cx="50" cy="50" r="18" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" />
        <line x1="50" y1="4" x2="50" y2="96" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 4" />
        <line x1="4" y1="50" x2="96" y2="50" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 4" />
      </svg>

      {/* 2. Slow Idle 360° Rotating Radar Sweep (Local to Icon Disc) */}
      {!prefersReduced && (
        <div
          className={cn(
            'absolute inset-1 rounded-full pointer-events-none mix-blend-screen will-change-transform animate-spin',
            isHovered ? 'duration-[2.5s]' : 'duration-[6s]'
          )}
          style={{
            background:
              'conic-gradient(from 0deg at 50% 50%, rgba(34, 255, 136, 0.35) 0deg, rgba(0, 255, 102, 0.12) 40deg, transparent 85deg, transparent 360deg)',
          }}
          aria-hidden="true"
        />
      )}

      {/* 3. Subtle Holographic Base Lens */}
      <div className="absolute bottom-1 w-12 h-2 rounded-full bg-accent-green/30 blur-[2px] border border-accent-glow/50" />

      {/* 4. Crisp Vector Holographic Icons (Identical Sharpness) */}
      <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
        {type === 'date' && (
          <svg
            className="w-8 h-8 text-accent-green drop-shadow-[0_0_8px_rgba(34,255,136,0.65)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="4" width="18" height="17" rx="2" strokeWidth="1.8" />
            <line x1="3" y1="9" x2="21" y2="9" />
            <line x1="8" y1="2" x2="8" y2="5" strokeWidth="2" />
            <line x1="16" y1="2" x2="16" y2="5" strokeWidth="2" />
            <circle cx="12" cy="15" r="3" strokeWidth="1.4" />
            <polyline points="12 13.8 12 15 13.2 15" strokeWidth="1.5" />
          </svg>
        )}

        {type === 'venue' && (
          <svg
            className="w-8 h-8 text-accent-green drop-shadow-[0_0_8px_rgba(34,255,136,0.65)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" strokeWidth="1.8" />
            <circle cx="12" cy="9" r="2.8" strokeWidth="1.4" />
            <circle cx="12" cy="9" r="1.2" fill="currentColor" className="text-accent-glow" />
          </svg>
        )}

        {type === 'scope' && (
          <svg
            className="w-8 h-8 text-accent-green drop-shadow-[0_0_8px_rgba(34,255,136,0.65)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="9" cy="7" r="3.5" strokeWidth="1.8" />
            <path d="M2.5 19c0-3.3 2.7-6 6.5-6s6.5 2.7 6.5 6" strokeWidth="1.8" />
            <circle cx="17.5" cy="8.5" r="2.5" strokeWidth="1.6" />
            <path d="M16 13.5c2.2.4 4.5 1.9 4.5 4.5" strokeWidth="1.6" strokeDasharray="2 2" />
          </svg>
        )}
      </div>
    </div>
  );
};

const CYBER_MATRIX_CHARS = '0123456789ABCDEF#@$%&*<>/';

/**
 * DecryptScramble:
 * - Total duration ~1.5s per value
 * - Characters lock in left-to-right (~70ms per character)
 * - Random characters refresh every ~60ms
 * - Invisible placeholder guarantees stable layout (zero width jumps)
 * - Final text accessible via aria-label
 * - Plays only once per card per page load
 * - Respects prefers-reduced-motion (shows final text immediately)
 */
const DecryptScramble: React.FC<{
  text: string;
  isTriggered: boolean;
  className?: string;
}> = ({ text, isTriggered, className }) => {
  const prefersReduced = usePrefersReducedMotion();
  const [displayText, setDisplayText] = useState(text);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (prefersReduced) {
      setDisplayText(text);
      return;
    }

    if (isTriggered && !hasAnimatedRef.current) {
      hasAnimatedRef.current = true;

      const startTime = performance.now();
      const TOTAL_DURATION = 1500; // ~1.5s total duration
      const CHAR_LOCK_INTERVAL = 70; // ~70ms per character lock-in
      // Warmup phase of full cyber matrix scramble before left-to-right resolution begins
      const INITIAL_SCRAMBLE_MS = Math.max(250, TOTAL_DURATION - text.length * CHAR_LOCK_INTERVAL);

      const interval = setInterval(() => {
        const now = performance.now();
        const elapsed = now - startTime;

        if (elapsed >= TOTAL_DURATION) {
          clearInterval(interval);
          setDisplayText(text);
          return;
        }

        // Calculate how many characters have locked in left-to-right
        let lockedCount = 0;
        if (elapsed > INITIAL_SCRAMBLE_MS) {
          lockedCount = Math.min(
            text.length,
            Math.floor((elapsed - INITIAL_SCRAMBLE_MS) / CHAR_LOCK_INTERVAL)
          );
        }

        const scrambled = text
          .split('')
          .map((char, idx) => {
            if (char === ' ') return ' ';
            if (idx < lockedCount) return char;
            return CYBER_MATRIX_CHARS[Math.floor(Math.random() * CYBER_MATRIX_CHARS.length)];
          })
          .join('');

        setDisplayText(scrambled);
      }, 60); // Random characters refresh every ~60ms

      return () => clearInterval(interval);
    }
  }, [isTriggered, text, prefersReduced]);

  return (
    <span className={cn('relative inline-block', className)} aria-label={text}>
      {/* Invisible placeholder reserving exact width & height at all screen sizes */}
      <span className="invisible select-none opacity-0" aria-hidden="true">
        {text}
      </span>
      {/* Animated scrambled text positioned over placeholder */}
      <span className="absolute inset-0 select-none whitespace-normal lg:whitespace-nowrap" aria-hidden="true">
        {displayText}
      </span>
    </span>
  );
};

interface EventCardData {
  id: 'date' | 'venue' | 'scope';
  indexTag: string;
  label: string;
  value: string;
  supportingLine: string;
  statusBadge: string;
}

const EVENT_CARDS: EventCardData[] = [
  {
    id: 'date',
    indexTag: '// 01',
    label: 'WHEN',
    value: 'COMING SOON',
    supportingLine: 'Schedule to be announced',
    statusBadge: 'PENDING',
  },
  {
    id: 'venue',
    indexTag: '// 02',
    label: 'WHERE',
    value: 'KL UNIVERSITY',
    supportingLine: 'Vaddeswaram, AP',
    statusBadge: 'LOCK',
  },
  {
    id: 'scope',
    indexTag: '// 03',
    label: 'WHO CAN JOIN',
    value: 'OPEN TO ALL',
    supportingLine: 'Open to all',
    statusBadge: 'PUBLIC',
  },
];

/**
 * TelemetryBeaconPod:
 * - Uses HoloTiltCard for 3D tilt behavior (kept untouched)
 * - Frosted dark glass surface with 14px blur and thin emerald border
 * - Top-level collision fix between index tag and status badge
 * - Cursor-following soft green spotlight child overlay
 * - HUD corner brackets sliding in on hover
 */
const TelemetryBeaconPod: React.FC<{
  data: EventCardData;
  index: number;
  isScrambleTriggered: boolean;
}> = ({ data, index, isScrambleTriggered }) => {
  return (
    <HoloTiltCard
      index={index}
      chamfered={false}
      className={cn(
        'p-5 sm:p-6 lg:p-7 pt-6 sm:pt-7 relative overflow-hidden',
        'bg-gradient-to-br from-[#030f08]/85 via-[#020b06]/85 to-[#020805]/90',
        'backdrop-blur-[14px] border border-accent-green/35 hover:border-accent-green/75',
        'shadow-[0_12px_36px_rgba(0,0,0,0.85)] hover:shadow-[0_0_30px_rgba(34,255,136,0.20)]'
      )}
    >
      {({ isHovered }) => (
        <>
          {/* 1. HUD Corner Brackets that slide in snugly on hover */}
          <span className="absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-accent-green/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5 pointer-events-none z-20" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 border-t-2 border-r-2 border-accent-green/60 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:translate-y-0.5 pointer-events-none z-20" />
          <span className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b-2 border-l-2 border-accent-green/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 pointer-events-none z-20" />
          <span className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b-2 border-r-2 border-accent-green/60 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 pointer-events-none z-20" />

          {/* 2. Left Cyber Accent Bar */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-glow via-accent-green/50 to-transparent pointer-events-none z-20"
            aria-hidden="true"
          />

          {/* 3. Cursor-Following Soft Green Spotlight Inside Card */}
          <div
            className={cn(
              'absolute inset-0 pointer-events-none transition-opacity duration-300 z-10',
              isHovered ? 'opacity-100' : 'opacity-0'
            )}
            style={{
              background:
                'radial-gradient(320px circle at var(--card-glow-x, 50%) var(--card-glow-y, 50%), rgba(34, 255, 136, 0.14), transparent 70%)',
            }}
            aria-hidden="true"
          />

          {/* 4. Top Telemetry Header (Index Tag + Label on Left, Status Badge on Right - No Overlap) */}
          <HoloTiltLayer depth="sm" isHovered={isHovered} className="pb-3 mb-2 border-b border-ctf-border/30">
            <div className="flex items-center justify-between gap-2">
              {/* Left Column: Index Number + Small Uppercase Category Label */}
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-accent-green/80 font-bold shrink-0">
                  {data.indexTag}
                </span>
                <span className="font-mono text-[11px] sm:text-xs font-bold tracking-wider text-accent-green uppercase whitespace-nowrap">
                  {data.label}
                </span>
              </div>

              {/* Right Column: Status Chip */}
              <span
                className={cn(
                  'font-mono text-[9px] px-2 py-0.5 rounded-xs tracking-wider uppercase font-bold shrink-0 transition-all duration-200',
                  isHovered
                    ? 'bg-accent-green text-[#020604] border border-accent-glow shadow-neon-sm'
                    : 'bg-accent-green/15 text-accent-green border border-accent-green/40'
                )}
              >
                {data.statusBadge}
              </span>
            </div>
          </HoloTiltLayer>

          {/* 5. Center Stage: Holographic Radar HUD Icon with Slow Idle Sweep */}
          <HoloTiltLayer depth="lg" isHovered={isHovered} className="my-2 flex flex-col items-center justify-center">
            <HolographicRadarHUD isHovered={isHovered} type={data.id} />
          </HoloTiltLayer>

          {/* 6. Typography Block: Large Value & High-Contrast Sublabel */}
          <HoloTiltLayer depth="md" isHovered={isHovered} className="mb-2 flex-1 flex flex-col justify-end text-center sm:text-left pt-2">
            <h3 className="text-lg sm:text-xl lg:text-[22px] font-bold font-rajdhani tracking-wider uppercase mb-1.5 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] leading-tight">
              <DecryptScramble
                text={data.value}
                isTriggered={isScrambleTriggered}
              />
            </h3>

            {/* Sublabel raised to ~70% white for optimal contrast over bright fog */}
            <p className="text-xs sm:text-sm text-white/70 group-hover:text-white/90 tracking-wide font-sans font-medium transition-colors">
              {data.supportingLine}
            </p>
          </HoloTiltLayer>

          {/* 7. Bottom Tactical HUD Accent Line */}
          <HoloTiltLayer depth="xs" isHovered={isHovered} className="pt-2 mt-auto border-t border-ctf-border/30">
            <div className="flex items-center justify-between font-mono text-[9px] text-accent-green/60">
              <span className="tracking-widest uppercase flex items-center gap-1.5">
                <span className={cn('w-1 h-1 rounded-full transition-all', isHovered ? 'bg-accent-glow animate-ping' : 'bg-accent-green/50')} />
                <span>ACTIVE NODE</span>
              </span>

              {/* Status blip dots */}
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green/50" />
                <span className={cn('w-1.5 h-1.5 rounded-full transition-all', isHovered ? 'bg-accent-glow shadow-neon-sm scale-125' : 'bg-accent-green/20')} />
              </div>
            </div>
          </HoloTiltLayer>
        </>
      )}
    </HoloTiltCard>
  );
};

/**
 * EventCardWrapper:
 * - Individual IntersectionObserver attached to this card element
 * - threshold ~0.6 and rootMargin "0px 0px -15% 0px"
 * - Triggers card entrance reveal first (with 120ms stagger)
 * - Triggers scramble decrypt ~300ms after reveal begins
 * - Disconnects observer immediately after first trigger
 * - Supports fast scrolling & prefers-reduced-motion
 */
const EventCardWrapper: React.FC<{
  card: EventCardData;
  index: number;
}> = ({ card, index }) => {
  const prefersReduced = usePrefersReducedMotion();
  const [isRevealed, setIsRevealed] = useState(prefersReduced);
  const [isScrambleTriggered, setIsScrambleTriggered] = useState(prefersReduced);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (prefersReduced) {
      setIsRevealed(true);
      setIsScrambleTriggered(true);
      return;
    }

    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Play once per card, then disconnect observer immediately
            observer.disconnect();

            // 1. Entrance reveal with stagger (120ms per card index)
            const revealDelay = (index % 3) * 120;
            const revealTimer = setTimeout(() => {
              setIsRevealed(true);

              // 2. Start scramble ~300ms after entrance reveal begins
              const scrambleTimer = setTimeout(() => {
                setIsScrambleTriggered(true);
              }, 300);

              return () => clearTimeout(scrambleTimer);
            }, revealDelay);

            return () => clearTimeout(revealTimer);
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: '0px 0px -15% 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [index, prefersReduced]);

  return (
    <div
      ref={cardRef}
      role="listitem"
      className={cn(
        'h-full flex flex-col will-change-[transform,opacity]',
        prefersReduced
          ? 'opacity-100'
          : cn(
              'transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1)',
              isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
              isRevealed && 'hover:-translate-y-1.5 duration-300'
            )
      )}
    >
      <TelemetryBeaconPod
        data={card}
        index={index}
        isScrambleTriggered={isScrambleTriggered}
      />
    </div>
  );
};

/**
 * Storyboard Frame 03: Events Section ("03. EVENTS / DETAILS")
 *
 * Upgraded Info Cards with Per-Card Precision Timing:
 * - Dedicated per-card IntersectionObserver (threshold: 0.6, rootMargin: "0px 0px -15% 0px")
 * - Sequence: Entrance reveal -> +300ms delay -> Scramble begins
 * - Scramble duration: ~1.5s, 70ms lock interval left-to-right, 60ms character refresh
 * - Preserves all visual styling, HUD elements, and accessibility standards
 */
export const EventsSection: React.FC<EventsSectionProps> = ({ className }) => {
  return (
    <section
      id="events"
      data-bg="events"
      className={cn(
        'relative min-h-screen w-full flex items-center justify-start py-28 sm:py-36 md:py-40 overflow-hidden select-none bg-transparent',
        className
      )}
      aria-label="Events Details The Dead Noctis CTF"
    >
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28">
        {/* Left Column Content Container */}
        <div className="max-w-xl md:max-w-2xl lg:max-w-[720px] xl:max-w-[760px] text-left">
          {/* Section Overline Label: "EVENTS" */}
          <div className="mb-4 sm:mb-6">
            <SectionLabel>{events.label}</SectionLabel>
          </div>

          {/* Main Headline: "CTF - LEVEL 1" */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold font-rajdhani tracking-tight text-white uppercase leading-[1.06] mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            {events.heading}
          </h2>

          {/* Body Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-ctf-muted leading-relaxed font-sans max-w-lg mb-10 sm:mb-12 font-normal">
            {events.body}
          </p>

          {/* Three Distinct Info Cards with Per-Card Precision Trigger */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 pt-2 items-stretch"
            role="list"
            aria-label="Event Information"
          >
            {EVENT_CARDS.map((card, idx) => (
              <EventCardWrapper key={card.id} card={card} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
