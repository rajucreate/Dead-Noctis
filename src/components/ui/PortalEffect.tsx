import React from 'react';
import { cn } from '@/utils/cn';

interface PortalEffectProps {
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  children?: React.ReactNode;
}

export const PortalEffect: React.FC<PortalEffectProps> = ({
  className,
  intensity = 'medium',
  children,
}) => {
  const intensityMap = {
    low: 'opacity-40 blur-xl',
    medium: 'opacity-65 blur-2xl',
    high: 'opacity-85 blur-3xl',
  };

  return (
    <div className={cn('relative', className)}>
      {/* Ambient green portal bloom */}
      <div
        className={cn(
          'pointer-events-none absolute -inset-4 rounded-full bg-accent-glow/30 transition-opacity duration-700',
          intensityMap[intensity]
        )}
        aria-hidden="true"
      />
      {children}
    </div>
  );
};
