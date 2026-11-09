import React from 'react';
import { events } from '@/content/siteContent';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { HoloTiltCard, HoloTiltLayer } from '@/components/ui/HoloTiltCard';
import { cn } from '@/utils/cn';

interface EventsSectionProps {
  className?: string;
}

/**
 * Animated 360° Holographic Radar / Sonar Emitter:
 * Distinctive special effect for the Events section.
 * Renders rotating laser radar sweep, concentric range rings, and ping targets.
 */
const HolographicRadarHUD: React.FC<{ isHovered?: boolean; type: 'date' | 'venue' | 'scope' }> = ({
  isHovered,
  type,
}) => {
  return (
    <div className="relative w-28 h-28 flex items-center justify-center pointer-events-none select-none">
      {/* 1. Concentric Rangefinder Reticle Rings */}
      <svg
        className="absolute inset-0 w-full h-full text-accent-green/30 transition-transform duration-500 group-hover:scale-105"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <circle cx="50" cy="50" r="18" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" />
        {/* Crosshair Axes */}
        <line x1="50" y1="4" x2="50" y2="96" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 4" />
        <line x1="4" y1="50" x2="96" y2="50" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 4" />
      </svg>

      {/* 2. Concentric Expanding Sonar Ping Ripples */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible">
        <div className="w-16 h-16 rounded-full border border-accent-green/80 animate-sonar-ping pointer-events-none" />
        <div className="w-16 h-16 rounded-full border border-accent-glow/60 animate-sonar-ping-delayed pointer-events-none" />
      </div>

      {/* 3. Active 360° Rotating Radar Sweep Beam */}
      <div
        className={cn(
          'absolute inset-0 rounded-full pointer-events-none mix-blend-screen will-change-transform',
          isHovered ? 'animate-spin duration-[1.4s]' : 'animate-spin duration-[3.8s]'
        )}
        style={{
          background:
            'conic-gradient(from 0deg at 50% 50%, rgba(34, 255, 136, 0.40) 0deg, rgba(0, 255, 102, 0.15) 45deg, transparent 95deg, transparent 360deg)',
        }}
      />

      {/* 4. Upward Holographic Light Emitter Flare */}
      <div
        className={cn(
          'absolute bottom-1 w-20 h-16 bg-gradient-to-t from-accent-green/35 via-accent-glow/20 to-transparent transition-opacity duration-300 pointer-events-none',
          isHovered ? 'opacity-100' : 'opacity-40'
        )}
        style={{
          clipPath: 'polygon(20% 100%, 80% 100%, 100% 0%, 0% 0%)',
        }}
      />

      {/* 5. Base Emitter Lens Ring */}
      <div className="absolute bottom-1 w-16 h-3 rounded-full bg-accent-green/40 blur-[3px] border border-accent-glow/60" />

      {/* 6. Type-Specific Floating Holographic Icon with 3D levitation bob & micro-glitch */}
      <div className="relative z-10 animate-holo-float">
        <div className={cn("transition-transform duration-300", isHovered ? "scale-110" : "scale-100 animate-holo-glitch")}>
          {type === 'date' && (
            <svg
              className="w-9 h-9 text-accent-green drop-shadow-[0_0_12px_rgba(34,255,136,0.85)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Holographic Chronometer Calendar */}
              <rect x="3" y="4" width="18" height="17" rx="2" strokeWidth="1.8" />
              <line x1="3" y1="9" x2="21" y2="9" />
              <line x1="8" y1="2" x2="8" y2="5" strokeWidth="2.2" />
              <line x1="16" y1="2" x2="16" y2="5" strokeWidth="2.2" />
              {/* Radar Dial */}
              <circle cx="12" cy="15" r="3.5" stroke="currentColor" strokeWidth="1.2" />
              <polyline points="12 13.5 12 15 13.5 15" strokeWidth="1.6" />
            </svg>
          )}

          {type === 'venue' && (
            <svg
              className="w-9 h-9 text-accent-green drop-shadow-[0_0_12px_rgba(34,255,136,0.85)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* GPS Radar Target Pin */}
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" strokeWidth="1.8" />
              <circle cx="12" cy="9" r="2.8" stroke="currentColor" strokeWidth="1.4" />
              <circle cx="12" cy="9" r="1.2" fill="currentColor" className="text-accent-glow" />
            </svg>
          )}

          {type === 'scope' && (
            <svg
              className="w-9 h-9 text-accent-green drop-shadow-[0_0_12px_rgba(34,255,136,0.85)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Global Scope / Atomic Nexus */}
              <circle cx="12" cy="12" r="8.5" strokeWidth="1.8" />
              <line x1="3.5" y1="12" x2="20.5" y2="12" strokeDasharray="2 2" />
              <ellipse cx="12" cy="12" rx="4" ry="8.5" strokeWidth="1.2" />
              <ellipse cx="12" cy="12" rx="9.5" ry="3.5" transform="rotate(-30 12 12)" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="12" cy="12" r="1.8" fill="currentColor" className="text-accent-glow" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

interface EventTelemetryData {
  id: 'date' | 'venue' | 'scope';
  title: string;
  subtitle: string;
  radarCode: string;
  telemetryType: string;
  frequency: string;
  statusBadge: string;
  terminalFooter: string;
}

const EVENT_TELEMETRY: Record<string, EventTelemetryData> = {
  date: {
    id: 'date',
    title: 'COMING SOON',
    subtitle: 'Event Date',
    radarCode: 'CHRONO // 01',
    telemetryType: 'TEMPORAL PING',
    frequency: 'DELTA-T: TBD',
    statusBadge: 'PENDING',
    terminalFooter: 'TARGET: SCHEDULE MATRIX',
  },
  venue: {
    id: 'venue',
    title: 'KL UNIVERSITY',
    subtitle: 'Venue',
    radarCode: 'RADAR // 02',
    telemetryType: 'BEACON LOCK',
    frequency: '16.44°N 80.62°E',
    statusBadge: 'LOCK: 100%',
    terminalFooter: 'TARGET: VADDESWARAM AP',
  },
  scope: {
    id: 'scope',
    title: 'NATIONAL LEVEL',
    subtitle: 'Open to all',
    radarCode: 'DOMAIN // 03',
    telemetryType: 'OPEN BROADCAST',
    frequency: 'SCOPE: INDIA (ALL)',
    statusBadge: 'PUBLIC',
    terminalFooter: 'TIER: LEVEL 1 OPERATIVES',
  },
};

/**
 * Distinct Holographic Telemetry Pod Card:
 *
 * Implements the premium 3D Holographic Tilt + Emerald Edge-Reveal system:
 * - Subtle staggered 3D perspective scroll entrance
 * - Smooth, cursor-responsive 3D tilt with restrained depth separation
 * - Thin emerald light dynamically traveling along the card border
 * - Dynamic 1.2px emerald edge-reveal perimeter beam tracking the cursor
 * - Subtle diagonal holographic light sweep across the card surface
 * - Icons, HUD reticle, headings, and labels responding with slight Z-depth translation
 * - Smooth weighted return to original orientation on mouse leave
 */
const TelemetryBeaconPod: React.FC<{
  data: EventTelemetryData;
  index: number;
}> = ({ data, index }) => {
  return (
    <HoloTiltCard index={index} className="p-6 sm:p-7">
      {({ isHovered }) => (
        <>
          {/* Top-Right Chamfer Corner Accent Tag */}
          <div
            className={cn(
              'absolute top-0 right-0 w-6 h-6 border-b border-l border-accent-green/60 flex items-center justify-center font-mono text-[8px] font-bold transition-all duration-300 z-20',
              isHovered ? 'bg-accent-green text-[#020604] shadow-neon-sm' : 'bg-accent-green/15 text-accent-glow'
            )}
          >
            {data.radarCode.slice(-2)}
          </div>

          {/* Left Cyber Circuit Spine */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-glow via-accent-green/50 to-transparent pointer-events-none z-20"
            aria-hidden="true"
          />

          {/* 1. Top Telemetry Status Header (Depth: SM) */}
          <HoloTiltLayer depth="sm" isHovered={isHovered} className="pb-3 mb-4 border-b border-ctf-border/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {/* Pulsing Sonar Ping Point */}
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-glow opacity-80" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green shadow-neon-sm" />
                </span>
                <span className="font-mono text-[10px] tracking-[0.22em] text-accent-green uppercase font-semibold">
                  {data.radarCode}
                </span>
              </div>

              {/* Live Audio / Frequency Spectrum Equalizer & Status Chip */}
              <div className="flex items-center gap-2">
                {/* 5-Band Dynamic Frequency Equalizer */}
                <div
                  className="flex items-end gap-[2px] h-3 px-1.5 py-0.5 rounded bg-accent-green/10 border border-accent-green/30"
                  title="Telemetry Spectrum Waveform"
                  aria-hidden="true"
                >
                  <span className="w-[2px] bg-accent-green rounded-full animate-eq-1 h-full block" />
                  <span className="w-[2px] bg-accent-green rounded-full animate-eq-2 h-full block" />
                  <span className="w-[2px] bg-accent-glow rounded-full animate-eq-3 h-full block shadow-neon-sm" />
                  <span className="w-[2px] bg-accent-green rounded-full animate-eq-4 h-full block" />
                  <span className="w-[2px] bg-accent-green rounded-full animate-eq-5 h-full block" />
                </div>

                {/* Status Chip */}
                <span
                  className={cn(
                    'font-mono text-[9px] px-2 py-0.5 rounded-sm tracking-wider uppercase font-bold transition-all duration-200',
                    isHovered
                      ? 'bg-accent-green text-[#020604] border border-accent-glow shadow-neon-sm scale-105'
                      : 'bg-accent-green/15 text-accent-green border border-accent-green/40'
                  )}
                >
                  {isHovered ? 'ACTIVE' : data.statusBadge}
                </span>
              </div>
            </div>
          </HoloTiltLayer>

          {/* 2. Center Stage: Holographic Radar Emitter & Floating Icon (Depth: LG) */}
          <HoloTiltLayer depth="lg" isHovered={isHovered} className="my-3 flex flex-col items-center justify-center">
            <HolographicRadarHUD isHovered={isHovered} type={data.id} />
            {/* Dynamic Telemetry Frequency Badge below radar */}
            <div className="mt-1 flex items-center gap-1.5 font-mono text-[9px] tracking-[0.25em] text-accent-green/80 uppercase">
              <span className={cn('w-1 h-1 rounded-full', isHovered ? 'bg-accent-glow animate-ping' : 'bg-accent-green/60')} />
              <span>{data.frequency}</span>
            </div>
          </HoloTiltLayer>

          {/* 3. Typography Block (Depth: MD) */}
          <HoloTiltLayer depth="md" isHovered={isHovered} className="mb-4 flex-1 flex flex-col justify-start text-center sm:text-left pt-2">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-rajdhani tracking-[0.16em] uppercase mb-1.5 text-white group-hover:text-accent-green transition-colors duration-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] flex items-center justify-between sm:justify-start gap-2">
              <span>{data.title}</span>
              {isHovered && (
                <span className="font-mono text-[9px] text-accent-glow tracking-widest font-normal animate-pulse hidden sm:inline">
                  [TELEMETRY OK]
                </span>
              )}
            </h3>

            <p className="text-xs sm:text-sm text-[#97b3a4] group-hover:text-[#b4d1c2] tracking-wide leading-relaxed font-sans font-medium transition-colors min-h-[38px] sm:min-h-[44px]">
              {data.subtitle}
            </p>
          </HoloTiltLayer>

          {/* 4. Bottom Telemetry Terminal Status Bar (Depth: XS) */}
          <HoloTiltLayer depth="xs" isHovered={isHovered} className="pt-3 mt-auto border-t border-ctf-border/30">
            <div className="flex items-center justify-between font-mono text-[9px] text-ctf-muted/70">
              <span className="tracking-widest uppercase text-accent-green/75 group-hover:text-accent-green transition-colors flex items-center gap-1.5">
                <span className={cn('w-1 h-1 rounded-full transition-all', isHovered ? 'bg-accent-glow animate-ping' : 'bg-accent-green/50')} />
                <span>{data.terminalFooter}</span>
              </span>

              {/* Live HUD Radar Blip Dots & Link Indicator */}
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="font-mono text-[8px] text-accent-green/60 uppercase tracking-widest hidden sm:inline">
                  {isHovered ? 'TRANSMITTING' : 'LINK: 100%'}
                </span>
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
 * Storyboard Frame 03: Events Section ("03. EVENTS / DETAILS")
 *
 * Features:
 * - Positioned on the left with crystal-clear contrast over obsidian void (#020604)
 * - Typography exactly matched to About section for consistent styling
 * - Distinct 3D Holographic Telemetry Pod design with live 360° animated radar sweep
 * - Equal height & width across all 3 event pods
 * - Seamless background continuity with the right-hand floating island & monolith
 */
export const EventsSection: React.FC<EventsSectionProps> = ({ className }) => {
  return (
    <section
      id="events"
      className={cn(
        'relative min-h-screen w-full flex items-center justify-start py-28 sm:py-36 md:py-40 overflow-hidden select-none',
        className
      )}
      aria-label="Events Details The Dead Noctis CTF"
    >
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28">
        {/* Left Column Content Container (Matches Storyboard Frame 03) */}
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

          {/* Three Distinct 3D Holographic Telemetry Pods: COMING SOON // KL UNIVERSITY // NATIONAL LEVEL */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 pt-2 items-stretch"
            role="list"
            aria-label="Event Information"
          >
            {events.infoCards.map((item, idx) => {
              const telemetry = EVENT_TELEMETRY[item.id] || {
                id: item.id as 'date' | 'venue' | 'scope',
                title: item.title,
                subtitle: item.subtitle,
                radarCode: 'NODE // 01',
                telemetryType: 'TELEMETRY',
                frequency: 'LINK: OK',
                statusBadge: 'ONLINE',
                terminalFooter: 'TARGET: NODE',
              };

              return (
                <div key={item.id} role="listitem" className="h-full flex flex-col">
                  <TelemetryBeaconPod data={telemetry} index={idx} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
