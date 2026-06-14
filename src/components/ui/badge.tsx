import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'primary' | 'accent';
  icon?: React.ReactNode;
}

export function Badge({ 
  children, 
  variant = 'default', 
  icon,
  className,
  ...props 
}: BadgeProps) {
  return (
    <div 
      className={cn(
        'badge',
        {
          'badge-primary': variant === 'primary',
          'badge-accent': variant === 'accent',
        },
        className
      )}
      {...props}
    >
      {icon && <span className="w-3.5 h-3.5 flex items-center justify-center">{icon}</span>}
      {children}
    </div>
  );
}
