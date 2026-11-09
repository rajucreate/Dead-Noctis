import React, { useState } from 'react';
import { rules } from '@/content/siteContent';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { HoloTiltCard, HoloTiltLayer } from '@/components/ui/HoloTiltCard';
import { cn } from '@/utils/cn';

interface RulesSectionProps {
  className?: string;
}

interface RuleProtocolData {
  num: number;
  body: string;
  protocolCode: string;
  codename: string;
  penaltyTag: string;
  securityTier: string;
  checksum: string;
}

const RULE_PROTOCOLS: Record<number, {
  protocolCode: string;
  codename: string;
  penaltyTag: string;
  securityTier: string;
  checksum: string;
}> = {
  1: {
    protocolCode: 'PROTOCOL // 01',
    codename: 'SOLO OPERATIVE',
    penaltyTag: 'STRICTLY SOLO',
    securityTier: 'IDENTITY INTEGRITY',
    checksum: '0x8F4A',
  },
  2: {
    protocolCode: 'FIREWALL // 02',
    codename: 'ANTI-DOS & ATTACKS',
    penaltyTag: 'ZERO TOLERANCE',
    securityTier: 'NETWORK DEFENSE',
    checksum: '0x3C1B',
  },
  3: {
    protocolCode: 'ISOLATION // 03',
    codename: 'ZERO COLLUSION',
    penaltyTag: 'NO FLAG SHARING',
    securityTier: 'CRYPTO VERIFICATION',
    checksum: '0x99D2',
  },
  4: {
    protocolCode: 'SANDBOX // 04',
    codename: 'INFRASTRUCTURE SCOPE',
    penaltyTag: 'TARGET SPECIFIED',
    securityTier: 'CONTAINER ISOLATION',
    checksum: '0x62E8',
  },
  5: {
    protocolCode: 'ARBITER // 05',
    codename: 'FINAL AUTHORITY',
    penaltyTag: 'BINDING DECISION',
    securityTier: 'SUPREME CONSENSUS',
    checksum: '0xFF00',
  },
};

/**
 * Animated Vector Cyber Security Shield Icons for each Rule Directive:
 */
const RuleSecurityIcon: React.FC<{ num: number; isHovered?: boolean }> = ({ num, isHovered }) => {
  return (
    <div className="relative w-14 h-14 flex items-center justify-center select-none pointer-events-none">
      {/* Hexagonal Outer Frame */}
      <svg
        className={cn(
          'absolute inset-0 w-full h-full text-accent-green/30 transition-transform duration-500',
          isHovered ? 'scale-110 text-accent-green/60' : 'scale-100'
        )}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="28,3 51,16 51,40 28,53 5,40 5,16"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="rgba(2, 14, 8, 0.45)"
        />
        <polygon
          points="28,8 46,18 46,38 28,48 10,38 10,18"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeDasharray="2 3"
          opacity="0.6"
        />
      </svg>

      {/* Hexagonal Ambient Deflector Halo */}
      <div
        className={cn(
          'absolute inset-2 rounded-full bg-accent-glow/20 blur-[8px] transition-opacity duration-300',
          isHovered ? 'opacity-100 animate-hex-shield' : 'opacity-35'
        )}
      />

      {/* Thematic Icon Vector based on Rule */}
      <div className="relative z-10 text-accent-green drop-shadow-[0_0_10px_rgba(34,255,136,0.7)]">
        {num === 1 && (
          // Solo Operative Biometric Reticle
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="7" r="4" strokeWidth="2" />
            <path d="M5.5 21a6.5 6.5 0 0 1 13 0" strokeWidth="2" />
            <circle cx="12" cy="7" r="1.5" fill="currentColor" className="text-accent-glow" />
            <line x1="2" y1="12" x2="4" y2="12" strokeWidth="2" />
            <line x1="20" y1="12" x2="22" y2="12" strokeWidth="2" />
          </svg>
        )}

        {num === 2 && (
          // Anti-DoS Firewall Barrier Shield
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="2" />
            <line x1="9" y1="9" x2="15" y2="15" strokeWidth="2" />
            <line x1="15" y1="9" x2="9" y2="15" strokeWidth="2" />
          </svg>
        )}

        {num === 3 && (
          // Zero Collusion Cryptographic Padlock & Sealed Hash
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="11" width="16" height="11" rx="2" strokeWidth="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeWidth="2" />
            <circle cx="12" cy="16" r="1.5" fill="currentColor" />
            <line x1="12" y1="17.5" x2="12" y2="19.5" strokeWidth="1.8" />
          </svg>
        )}

        {num === 4 && (
          // Sandboxed Infrastructure Gateway / Cluster
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="6" rx="1" strokeWidth="1.8" />
            <rect x="3" y="14" width="18" height="6" rx="1" strokeWidth="1.8" />
            <line x1="7" y1="7" x2="7.01" y2="7" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="7" y1="17" x2="7.01" y2="17" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="12" y1="10" x2="12" y2="14" strokeWidth="1.8" strokeDasharray="2 2" />
          </svg>
        )}

        {num === 5 && (
          // Supreme Arbiter Core / Gavel Matrix
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15 8 22 9 17 14 18 21 12 17.5 6 21 7 14 2 9 9 8 12 2" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="2.5" fill="currentColor" className="text-accent-glow" />
          </svg>
        )}
      </div>
    </div>
  );
};

/**
 * Individual Cyber Security Protocol Directive Card
 */
const RuleProtocolCard: React.FC<{
  data: RuleProtocolData;
  index: number;
  fullWidth?: boolean;
}> = ({ data, index, fullWidth = false }) => {
  const [acknowledged, setAcknowledged] = useState(false);

  return (
    <HoloTiltCard
      index={index}
      maxTilt={5}
      onClick={() => setAcknowledged((prev) => !prev)}
      role="button"
      aria-label={`Rule ${data.num}: ${data.body}`}
      className={cn(
        'p-5 sm:p-6 transition-all duration-300 cursor-pointer',
        fullWidth ? 'md:col-span-2' : ''
      )}
    >
      {({ isHovered }) => (
        <>
          {/* Top-Right Chamfer Corner Accent Tag */}
          <div
            className={cn(
              'absolute top-0 right-0 w-7 h-7 border-b border-l border-accent-green/60 flex items-center justify-center font-mono text-[9px] font-bold transition-all duration-300 z-20',
              isHovered || acknowledged
                ? 'bg-accent-green text-[#020604] shadow-neon-sm'
                : 'bg-accent-green/15 text-accent-glow'
            )}
          >
            0{data.num}
          </div>

          {/* Left Security Trace Spine */}
          <div
            className={cn(
              'absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 pointer-events-none z-20',
              isHovered || acknowledged
                ? 'bg-gradient-to-b from-accent-glow via-accent-green to-transparent shadow-neon-sm'
                : 'bg-gradient-to-b from-accent-green/40 to-transparent'
            )}
            aria-hidden="true"
          />

          {/* Vertical Laser Security Diagnostic Scanner on hover */}
          <div
            className={cn(
              'absolute top-0 bottom-0 w-[2px] pointer-events-none z-20',
              'bg-gradient-to-b from-transparent via-accent-glow to-transparent',
              'shadow-[0_0_12px_rgba(34,255,136,0.95)]',
              isHovered ? 'animate-laser-scanner opacity-100' : 'opacity-0 transition-opacity duration-300'
            )}
            aria-hidden="true"
          />

          {/* 1. Header Protocol Bar (Depth: SM) */}
          <HoloTiltLayer depth="sm" isHovered={isHovered} className="pb-3 mb-3 border-b border-ctf-border/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-glow opacity-80" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green shadow-neon-sm" />
                </span>
                <span className="font-mono text-[10px] tracking-[0.22em] text-accent-green uppercase font-semibold">
                  {data.protocolCode}
                </span>
              </div>

              {/* Security Tier & Checksum Badge */}
              <div className="flex items-center gap-2">
                <span className="hidden sm:inline font-mono text-[8px] text-accent-green/60 tracking-wider">
                  {data.checksum}
                </span>
                <span
                  className={cn(
                    'font-mono text-[9px] px-2 py-0.5 rounded-sm tracking-wider uppercase font-bold transition-all duration-200',
                    isHovered || acknowledged
                      ? 'bg-accent-green text-[#020604] border border-accent-glow shadow-neon-sm'
                      : 'bg-accent-green/10 text-accent-green/90 border border-accent-green/35'
                  )}
                >
                  {acknowledged ? 'VERIFIED' : data.penaltyTag}
                </span>
              </div>
            </div>
          </HoloTiltLayer>

          {/* 2. Middle Body: Thematic Security Icon + Directive Body (Depth: MD) */}
          <HoloTiltLayer depth="md" isHovered={isHovered} className="my-2 flex items-start gap-4 flex-1">
            <div className="shrink-0 mt-0.5">
              <RuleSecurityIcon num={data.num} isHovered={isHovered} />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="font-mono text-[9px] tracking-[0.2em] text-accent-green/75 uppercase font-medium">
                  // {data.codename}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-accent-green/30 to-transparent" />
              </div>

              <h3 className="text-base sm:text-lg md:text-xl font-bold font-rajdhani text-white group-hover:text-accent-green transition-colors duration-200 tracking-wide uppercase leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                {data.body}
              </h3>
            </div>
          </HoloTiltLayer>

          {/* 3. Bottom Directive Status Footer (Depth: XS) */}
          <HoloTiltLayer depth="xs" isHovered={isHovered} className="pt-3 mt-3 border-t border-ctf-border/30">
            <div className="flex items-center justify-between font-mono text-[9px] text-ctf-muted/70">
              <span className="tracking-widest uppercase text-accent-green/75 group-hover:text-accent-green transition-colors flex items-center gap-1.5">
                <span className={cn('w-1.5 h-1.5 rounded-full transition-all', isHovered ? 'bg-accent-glow animate-ping' : 'bg-accent-green/50')} />
                <span>{data.securityTier}</span>
              </span>

              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="font-mono text-[8px] text-accent-green/60 uppercase tracking-widest">
                  {isHovered ? 'ENFORCED' : 'STATUS: OK'}
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
 * Storyboard Frame 04: Rules Section ("04. RULES / DIRECTIVES")
 *
 * Features:
 * - Direct copy from `rules` in `src/content/siteContent.ts`: "PLAY FAIR HACK HARD" + 5 exact rule items
 * - High-tech Cyber Security Directive Slab form-factor (distinct from About cartridges and Events radar pods)
 * - 3D Holographic Tilt + Emerald Edge-Reveal animation architecture
 * - Thematic SVG security badges (Biometric Solo, Anti-DoS Shield, Crypto Isolation, Sandbox Cluster, Arbiter Core)
 * - Interactive horizontal laser security diagnostic scan on hover
 * - Full responsive 2-column + full-width finale layout
 */
export const RulesSection: React.FC<RulesSectionProps> = ({ className }) => {
  return (
    <section
      id="rules"
      className={cn(
        'relative min-h-screen w-full flex items-center justify-start py-28 sm:py-36 md:py-40 overflow-hidden select-none',
        className
      )}
      aria-label="Competition Rules The Dead Noctis CTF"
    >
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28">
        {/* Left Column Content Container (Matches Storyboard Frame 04) */}
        <div className="max-w-xl md:max-w-2xl lg:max-w-[740px] xl:max-w-[800px] text-left">
          {/* Section Overline Label: "RULES" */}
          <div className="mb-4 sm:mb-6">
            <SectionLabel>{rules.label}</SectionLabel>
          </div>

          {/* Main Headline: "PLAY FAIR HACK HARD" */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold font-rajdhani tracking-tight text-white uppercase leading-[1.06] mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            {rules.heading}
          </h2>

          {/* Security Clearance Subheader Readout */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 mb-8 sm:mb-10 font-mono text-[10px] sm:text-xs">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-accent-green/10 border border-accent-green/30 text-accent-green uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-glow animate-ping" />
              FIREWALL STATUS: ENFORCED
            </span>
            <span className="text-ctf-muted/80 tracking-widest uppercase">
              // 05 PROTOCOLS ACTIVE
            </span>
          </div>

          {/* 5 Distinct Cyber Security Protocol Directive Cards */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 pt-2 items-stretch"
            role="list"
            aria-label="Rules and Protocols"
          >
            {rules.items.map((item, idx) => {
              const protocol = RULE_PROTOCOLS[item.num] || {
                protocolCode: `RULE // 0${item.num}`,
                codename: 'DIRECTIVE',
                penaltyTag: 'ENFORCED',
                securityTier: 'SECURITY PROTOCOL',
                checksum: `0x${item.num}F`,
              };

              const fullData: RuleProtocolData = {
                num: item.num,
                body: item.body,
                ...protocol,
              };

              // Item 5 (Organizers' decision is final) spans full width across both columns on desktop!
              const isFullWidth = item.num === 5;

              return (
                <div key={item.num} role="listitem" className={cn('h-full flex flex-col', isFullWidth ? 'md:col-span-2' : '')}>
                  <RuleProtocolCard data={fullData} index={idx} fullWidth={isFullWidth} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
