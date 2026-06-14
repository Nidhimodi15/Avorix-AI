import React from 'react';
import { motion } from 'framer-motion';
import { TRUSTED_COMPANIES } from '@/lib/constants';

export function TrustedBy() {
  // Duplicate 3× for a very smooth infinite loop
  const items = [...TRUSTED_COMPANIES, ...TRUSTED_COMPANIES, ...TRUSTED_COMPANIES];

  return (
    <section className="py-14 border-y border-border/50 overflow-hidden" style={{ background: 'var(--bg-surface)' }}>
      <div className="container-wide mb-8">
        <p className="text-center text-xs font-bold text-text-muted uppercase tracking-[0.18em]">
          Trusted by innovative teams worldwide
        </p>
      </div>

      {/* Marquee row 1 — left scroll */}
      <div className="marquee-container mb-4">
        <div className="marquee-track">
          {items.map((company, index) => (
            <div
              key={`a-${company}-${index}`}
              className="flex items-center justify-center px-2 opacity-40 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
            >
              <span
                className="font-bold text-lg whitespace-nowrap"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                }}
              >
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee row 2 — right scroll (reversed) */}
      <div className="marquee-container">
        <div
          className="marquee-track"
          style={{ animationDirection: 'reverse', animationDuration: '50s' }}
        >
          {[...items].reverse().map((company, index) => (
            <div
              key={`b-${company}-${index}`}
              className="flex items-center justify-center px-2 opacity-25 hover:opacity-80 transition-all duration-300 grayscale hover:grayscale-0"
            >
              <span
                className="font-bold text-base whitespace-nowrap"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: 'var(--text-secondary)',
                  letterSpacing: '-0.01em',
                }}
              >
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
