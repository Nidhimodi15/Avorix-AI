import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { SectionHeading } from '../shared/section-heading';
import { testimonials } from '@/data/testimonials';
import { staggerContainer, staggerItem } from '@/lib/animations';

// Color palette for avatar gradients
const GRADIENTS = [
  'linear-gradient(135deg, #2563EB, #7C3AED)',
  'linear-gradient(135deg, #10B981, #0EA5E9)',
  'linear-gradient(135deg, #F59E0B, #EF4444)',
  'linear-gradient(135deg, #8B5CF6, #EC4899)',
  'linear-gradient(135deg, #06B6D4, #3B82F6)',
  'linear-gradient(135deg, #14B8A6, #10B981)',
];

export function Testimonials() {
  return (
    <section className="section overflow-hidden" style={{ background: 'var(--bg-section)' }}>
      <div className="container-wide">
        <SectionHeading
          badge="Success Stories"
          title="Loved by teams worldwide"
          description="Businesses across every industry trust Avorix AI to drive growth and delight customers."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4"
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              variants={staggerItem}
              className="group relative flex flex-col bg-bg-card border border-border rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{
                // Subtle top accent glow on hover via CSS variable trick
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: GRADIENTS[index % GRADIENTS.length] }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4"
                    style={{ color: '#F59E0B', fill: '#F59E0B' }}
                  />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-body text-text-secondary leading-relaxed flex-1 mb-6">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-base shrink-0 shadow-md"
                  style={{ background: GRADIENTS[index % GRADIENTS.length] }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm text-text-primary">{t.name}</p>
                  <p className="text-xs text-text-muted">{t.role}</p>
                </div>
                <span
                  className="ml-auto text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    background: 'var(--primary-light)',
                    color: 'var(--primary)',
                  }}
                >
                  {t.industry}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
