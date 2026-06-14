import React from 'react';
import { TRUSTED_COMPANIES } from '@/lib/constants';

export function TrustedBy() {
  return (
    <section className="py-12 border-y border-border/50 bg-bg-surface/30">
      <div className="container-wide">
        <p className="text-center text-sm font-semibold text-text-muted uppercase tracking-wider mb-8">
          Trusted by innovative teams worldwide
        </p>
        
        <div className="marquee-container">
          <div className="marquee-track">
            {/* Double the array for seamless infinite scroll */}
            {[...TRUSTED_COMPANIES, ...TRUSTED_COMPANIES].map((company, index) => (
              <div 
                key={`${company}-${index}`}
                className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              >
                {/* Fallback to text if we don't have SVG logos yet */}
                <span className="font-display font-bold text-xl text-text-primary whitespace-nowrap">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
