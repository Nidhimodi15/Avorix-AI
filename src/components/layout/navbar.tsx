import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Logo } from '../shared/logo';
import { ThemeToggle } from '../shared/theme-toggle';
import { Button } from '../ui/button';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          'navbar flex items-center',
          { 'scrolled': isScrolled || isMobileMenuOpen }
        )}
      >
        <div className="container-wide flex items-center justify-between gap-10">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 mx-auto">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    'relative text-sm font-semibold tracking-wide transition-colors pb-0.5 whitespace-nowrap',
                    isActive
                      ? 'text-primary'
                      : 'text-text-secondary hover:text-primary'
                  )}
                >
                  {link.label}
                  {/* Animated active underline */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                      style={{ background: 'var(--primary)' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <ThemeToggle />
            <Link to="/demo">
              <Button variant="primary" size="sm">
                Book Free Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -mr-2 text-text-primary"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={cn('mobile-menu-overlay', { 'active': isMobileMenuOpen })}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <div className={cn('mobile-menu', { 'active': isMobileMenuOpen })}>
        <div className="flex items-center justify-between mb-8">
          <Logo />
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 -mr-2 text-text-primary"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="flex flex-col gap-2 mb-8 flex-1 overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="mobile-menu-link"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex flex-col gap-4 mt-auto">
          <Link to="/demo" className="w-full">
            <Button variant="primary" className="w-full">
              Book Free Demo
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
