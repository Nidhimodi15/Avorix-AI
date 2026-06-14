import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../theme-provider';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-bg-surface border border-border text-text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      aria-label="Toggle theme"
    >
      <Sun className="w-5 h-5 absolute transition-all scale-100 rotate-0 dark:scale-0 dark:-rotate-90" />
      <Moon className="w-5 h-5 absolute transition-all scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
    </button>
  );
}
