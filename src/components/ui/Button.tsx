import React from 'react';
import { cn } from '@/utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'nav';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  arrowDirection?: 'right' | 'down';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  showArrow = false,
  arrowDirection = 'right',
  children,
  className,
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-nav uppercase font-semibold tracking-cyber transition-all duration-300 select-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-accent-green disabled:opacity-50 disabled:pointer-events-none';

  const sizeStyles = {
    sm: 'text-xs px-4 py-1.5',
    md: 'text-sm px-6 py-2.5',
    lg: 'text-base px-8 py-3.5',
  };

  const variantStyles = {
    primary:
      'bg-background-dark/90 text-accent-green border border-accent-green/80 shadow-neon-sm hover:bg-accent-green/10 hover:shadow-neon-glow hover:border-accent-green',
    secondary:
      'bg-background-dark/60 text-ctf-text border border-ctf-border hover:border-accent-green/60 hover:text-accent-green hover:bg-background-dark/90',
    nav: 'bg-transparent text-accent-green border border-accent-green/60 hover:border-accent-green hover:shadow-neon-sm text-xs px-5 py-2',
  };

  return (
    <button
      className={cn(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        'chamfer-btn',
        className
      )}
      {...props}
    >
      <span className="flex items-center gap-2">
        <span>{children}</span>
        {showArrow && (
          <span
            aria-hidden="true"
            className={cn(
              'transition-transform duration-200 inline-block',
              arrowDirection === 'right' && 'group-hover:translate-x-1',
              arrowDirection === 'down' && 'group-hover:translate-y-0.5'
            )}
          >
            {arrowDirection === 'right' ? '→' : '⌄'}
          </span>
        )}
      </span>
    </button>
  );
};
