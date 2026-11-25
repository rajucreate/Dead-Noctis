import React, { useState, useEffect } from 'react';
import { ticker } from '@/content/siteContent';
import { cn } from '@/utils/cn';

interface TickerBarProps {
  className?: string;
}

// Target: January 17th, 2027 at 09:00 AM IST (UTC+05:30)
const TARGET_ONLINE_DATE = new Date('2027-01-17T09:00:00+05:30').getTime();

function calculateTimeRemaining() {
  const now = Date.now();
  const diff = Math.max(0, TARGET_ONLINE_DATE - now);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  return { days, hours, mins, secs };
}

/**
 * Flag Symbol Component: renders high-visibility glowing cyber flag symbol for CTF countdowns
 */
const FlagSymbol: React.FC<{ className?: string }> = ({ className }) => (
  <span
    className={cn(
      'inline-flex items-center justify-center text-lg sm:text-xl text-[#85d997] drop-shadow-[0_0_10px_rgba(133,217,151,0.75)] animate-pulse select-none',
      className
    )}
    role="img"
    aria-label="CTF Flag"
  >
    <span className="material-symbols-outlined text-[20px] sm:text-[22px]">flag</span>
  </span>
);

export const TickerBar: React.FC<TickerBarProps> = ({ className }) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    mins: number;
    secs: number;
  }>(calculateTimeRemaining);

  useEffect(() => {
    // Initial sync
    setTimeLeft(calculateTimeRemaining());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={cn(
        'w-full bg-[#0c0f0d] border-y border-[#6FAD68]/20 shadow-2xl relative z-20 select-none',
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-stretch">
          {/* ── Left Column: Dual Timers Stack (Online Round & Offline Round) ── */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-3">
            {/* 1. Online Round Countdown Timer */}
            <div className="bg-[#191c1a] border border-[#6FAD68]/30 px-4 py-3 rounded-xl shadow-inner flex flex-col justify-between relative overflow-hidden group hover:border-[#6FAD68]/60 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5 font-mono text-[11px] tracking-wider uppercase font-bold text-[#a2d96d]">
                  <span className="w-2 h-2 rounded-full bg-[#a2d96d] animate-pulse" />
                  <span>ONLINE ROUND // INITIATION</span>
                </div>
                <span className="font-mono text-[10px] text-[#8c9382] bg-[#282b28] px-2 py-0.5 rounded border border-white/5">
                  JAN 17, 2027 • 09:00 AM IST
                </span>
              </div>

              {/* Countdown Digits */}
              <div className="grid grid-cols-4 gap-2 text-center font-mono">
                <div className="bg-[#282b28]/80 py-1.5 px-1 rounded-lg border border-white/5 group-hover:border-[#6FAD68]/20 transition-colors">
                  <span className="text-[#a2d96d] font-bold text-base sm:text-lg block tracking-tight">
                    {String(timeLeft.days).padStart(2, '0')}
                  </span>
                  <span className="block text-[9px] text-[#8c9382] uppercase font-semibold tracking-wider">
                    DAYS
                  </span>
                </div>
                <div className="bg-[#282b28]/80 py-1.5 px-1 rounded-lg border border-white/5 group-hover:border-[#6FAD68]/20 transition-colors">
                  <span className="text-[#a2d96d] font-bold text-base sm:text-lg block tracking-tight">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="block text-[9px] text-[#8c9382] uppercase font-semibold tracking-wider">
                    HOURS
                  </span>
                </div>
                <div className="bg-[#282b28]/80 py-1.5 px-1 rounded-lg border border-white/5 group-hover:border-[#6FAD68]/20 transition-colors">
                  <span className="text-[#a2d96d] font-bold text-base sm:text-lg block tracking-tight">
                    {String(timeLeft.mins).padStart(2, '0')}
                  </span>
                  <span className="block text-[9px] text-[#8c9382] uppercase font-semibold tracking-wider">
                    MINS
                  </span>
                </div>
                <div className="bg-[#282b28]/80 py-1.5 px-1 rounded-lg border border-white/5 group-hover:border-[#6FAD68]/20 transition-colors">
                  <span className="text-[#85d997] font-bold text-base sm:text-lg block tracking-tight">
                    {String(timeLeft.secs).padStart(2, '0')}
                  </span>
                  <span className="block text-[9px] text-[#8c9382] uppercase font-semibold tracking-wider">
                    SECS
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Offline Round Timer (Beneath Online Round Timer) */}
            <div className="bg-[#191c1a] border border-[#85d997]/20 px-4 py-3 rounded-xl shadow-inner flex flex-col justify-between relative overflow-hidden group hover:border-[#85d997]/50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5 font-mono text-[11px] tracking-wider uppercase font-bold text-[#85d997]">
                  <span className="w-2 h-2 rounded-full bg-[#85d997] animate-ping" />
                  <span>OFFLINE ROUND // PHYSICAL ARENA</span>
                </div>
                <span className="font-mono text-[10px] text-yellow-300 font-bold bg-yellow-400/10 px-2 py-0.5 rounded border border-yellow-400/30 uppercase tracking-widest">
                  STARTS SOON
                </span>
              </div>

              {/* Offline Round Countdown Boxes with Flag Symbols in place of Days, Hours, Mins, Secs */}
              <div className="grid grid-cols-4 gap-2 text-center font-mono">
                <div className="bg-[#282b28]/80 py-1.5 px-1 rounded-lg border border-white/5 group-hover:border-[#85d997]/30 transition-colors flex flex-col items-center justify-center">
                  <FlagSymbol />
                  <span className="block text-[9px] text-[#8c9382] uppercase font-semibold tracking-wider mt-0.5">
                    DAYS
                  </span>
                </div>
                <div className="bg-[#282b28]/80 py-1.5 px-1 rounded-lg border border-white/5 group-hover:border-[#85d997]/30 transition-colors flex flex-col items-center justify-center">
                  <FlagSymbol />
                  <span className="block text-[9px] text-[#8c9382] uppercase font-semibold tracking-wider mt-0.5">
                    HOURS
                  </span>
                </div>
                <div className="bg-[#282b28]/80 py-1.5 px-1 rounded-lg border border-white/5 group-hover:border-[#85d997]/30 transition-colors flex flex-col items-center justify-center">
                  <FlagSymbol />
                  <span className="block text-[9px] text-[#8c9382] uppercase font-semibold tracking-wider mt-0.5">
                    MINS
                  </span>
                </div>
                <div className="bg-[#282b28]/80 py-1.5 px-1 rounded-lg border border-white/5 group-hover:border-[#85d997]/30 transition-colors flex flex-col items-center justify-center">
                  <FlagSymbol />
                  <span className="block text-[9px] text-[#8c9382] uppercase font-semibold tracking-wider mt-0.5">
                    SECS
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column: 3 Strategic Metrics Cards ── */}
          <div className="col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {/* Metric 1: Bounty Vault */}
            <div className="flex flex-col justify-between bg-[#191c1a] border border-white/5 hover:border-[#6FAD68]/40 transition-colors p-4 rounded-xl shadow-inner">
              <span className="font-mono text-[10px] tracking-wider uppercase text-[#8c9382] font-semibold">
                {ticker.metrics[0].label}
              </span>
              <div className="my-1">
                <span className="font-headline text-2xl sm:text-3xl font-bold text-[#e1e3df] tracking-tight block">
                  {ticker.metrics[0].value}
                </span>
                <span className="font-mono text-[10px] text-[#85d997] block mt-0.5">
                  {ticker.metrics[0].note}
                </span>
              </div>
              <div className="w-full h-1 bg-[#282b28] rounded-full mt-2 overflow-hidden">
                <div className="w-4/5 h-full bg-[#85d997] rounded-full" />
              </div>
            </div>

            {/* Metric 2: Engagement Format */}
            <div className="flex flex-col justify-between bg-[#191c1a] border border-white/5 hover:border-[#6FAD68]/40 transition-colors p-4 rounded-xl shadow-inner">
              <span className="font-mono text-[10px] tracking-wider uppercase text-[#8c9382] font-semibold">
                {ticker.metrics[1].label}
              </span>
              <div className="my-1">
                <span className="font-headline text-2xl sm:text-3xl font-bold text-[#e1e3df] tracking-tight block">
                  {ticker.metrics[1].value}
                </span>
                <span className="font-mono text-[10px] text-[#c2c9b6] block mt-0.5">
                  {ticker.metrics[1].note}
                </span>
              </div>
              <div className="w-full h-1 bg-[#282b28] rounded-full mt-2 overflow-hidden">
                <div className="w-3/5 h-full bg-[#a2d96d] rounded-full" />
              </div>
            </div>

            {/* Metric 3: Enlisted Cadres */}
            <div className="flex flex-col justify-between bg-[#191c1a] border border-white/5 hover:border-[#6FAD68]/40 transition-colors p-4 rounded-xl shadow-inner">
              <span className="font-mono text-[10px] tracking-wider uppercase text-[#8c9382] font-semibold">
                {ticker.metrics[2].label}
              </span>
              <div className="my-1">
                <span className="font-headline text-2xl sm:text-3xl font-bold text-[#a2d96d] tracking-tight block">
                  {ticker.metrics[2].value}
                </span>
                <span className="font-mono text-[10px] text-[#acf992] block mt-0.5">
                  {ticker.metrics[2].note}
                </span>
              </div>
              <div className="w-full h-1 bg-[#282b28] rounded-full mt-2 overflow-hidden">
                <div className="w-full h-full bg-[#a2d96d] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TickerBar;
