import React from 'react';
import { cn } from '@/utils/cn';
import { Card } from './Card';

interface InfoCardProps {
  icon: string;
  title: string;
  subtitle: string;
  className?: string;
}

/**
 * Icon + title + subtitle information card.
 * Used in Events (date, venue, scope) and About highlights.
 * Icon is a pixel/unicode character rendered in accent green.
 */
export const InfoCard: React.FC<InfoCardProps> = ({ icon, title, subtitle, className }) => (
  <Card interactive className={cn('p-6 flex flex-col items-start gap-3', className)}>
    {/* Pixel-style icon */}
    <span
      className="text-2xl text-accent-green leading-none drop-shadow-[0_0_8px_rgba(34,255,136,0.5)]"
      aria-hidden="true"
    >
      {icon}
    </span>

    <div>
      <p className="text-base sm:text-lg font-bold tracking-wide uppercase text-ctf-text">
        {title}
      </p>
      <p className="text-xs sm:text-sm text-ctf-muted tracking-wider mt-0.5">{subtitle}</p>
    </div>
  </Card>
);
