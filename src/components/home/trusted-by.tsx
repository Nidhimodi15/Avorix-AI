import React from 'react';
import { TRUSTED_COMPANIES } from '@/lib/constants';

export function TrustedBy() {
  const doubled = [...TRUSTED_COMPANIES, ...TRUSTED_COMPANIES];

  return (
    <section className="py-10 border-b border-border/40 overflow-hidden" style={{ background: 'var(--bg)' }}>
      <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted mb-7">
        Trusted by innovative teams worldwide
      </p>

      {/* Single clean marquee row */}
      <div className="marquee-container">
        <div className="marquee-track">
          {doubled.map((company, index) => (
            <div
              key={`${company}-${index}`}
              className="flex items-center shrink-0"
            >
              <span
                className="text-sm font-bold whitespace-nowrap transition-all duration-300 cursor-default px-5 py-2 rounded-full border border-transparent hover:border-border hover:bg-bg-surface"
                style={{
                  color: 'var(--text-muted)',
                  letterSpacing: '-0.01em',
                  fontFamily: "'Inter', sans-serif",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)';
                }}
              >
                {company}
              </span>
              {/* Dot separator */}
              <span className="mx-3 w-1 h-1 rounded-full shrink-0" style={{ background: 'var(--border)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
