import React from 'react';
import { Link } from 'react-router-dom';
import { Hexagon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  withText?: boolean;
}

export function Logo({ className, withText = true }: LogoProps) {
  return (
    <Link to="/" className={cn("flex items-center gap-3 group", className)}>
      <img 
        src="/logo.png" 
        alt="Aeviq AI Logo" 
        className="h-10 w-auto object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-105" 
      />
      {withText && (
        <span className="font-display font-bold text-2xl tracking-tight text-text-primary">
          Aeviq<span className="text-primary font-light ml-[4px]">- AI</span>
        </span>
      )}
    </Link>
  );
}
