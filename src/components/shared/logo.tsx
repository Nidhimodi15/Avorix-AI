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
      <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-primary via-primary-hover to-accent shadow-lg shadow-primary/20 overflow-hidden flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        <div className="absolute inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-50" />
        <Hexagon className="w-5 h-5 text-white z-10 stroke-[2.5]" />
      </div>
      {withText && (
        <span className="font-display font-bold text-2xl tracking-tight text-text-primary">
          Avorix<span className="text-primary font-light ml-[1px]">AI</span>
        </span>
      )}
    </Link>
  );
}
