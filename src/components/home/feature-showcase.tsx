import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../shared/section-heading';
import { features } from '@/data/features';
import { cn } from '@/lib/utils';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const selected = activeFeature !== null ? features[activeFeature] : null;

  return (
    <section className="section bg-bg-section border-y border-border/50 overflow-hidden">
      <div className="container-wide">
        <SectionHeading
          badge="Features"
          title="Everything you need to automate WhatsApp"
          description="Click any feature to explore it in detail. Scroll to see all features."
        />

        {/* Feature Grid — all features visible */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = index === activeFeature;

            return (
              <motion.button
                key={feature.id}
                onClick={() => setActiveFeature(isActive ? null : index)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  'text-left p-5 rounded-2xl transition-all duration-300 flex items-start gap-4 group border w-full',
                  isActive
                    ? 'bg-primary text-white border-primary shadow-lg'
                    : 'bg-bg-card border-border hover:border-primary/40 hover:shadow-md'
                )}
              >
                {/* Icon */}
                <div className={cn(
                  'w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300',
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'bg-bg-surface text-text-muted group-hover:bg-primary/10 group-hover:text-primary'
                )}>
                  <Icon className="w-5 h-5" />
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <h4 className={cn(
                    'font-semibold text-sm mb-1 transition-colors',
                    isActive ? 'text-white' : 'text-text-primary group-hover:text-primary'
                  )}>
                    {feature.title}
                  </h4>
                  <p className={cn(
                    'text-xs leading-relaxed line-clamp-2',
                    isActive ? 'text-white/80' : 'text-text-muted'
                  )}>
                    {feature.subtitle}
                  </p>
                </div>

                {/* Active indicator */}
                {isActive && (
                  <div className="shrink-0 ml-auto">
                    <X className="w-4 h-4 text-white/70" />
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Expanded Detail Panel — shows when a feature is selected */}
        <AnimatePresence>
          {selected && activeFeature !== null && (
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="overflow-hidden"
            >
              <div className="card relative overflow-hidden mb-6">
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />

                <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-start">
                  {/* Left: Detail */}
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-5">
                      {React.createElement(selected.icon, { className: 'w-4 h-4' })}
                      {selected.title}
                    </div>

                    <h3 className="text-heading-2 mb-4">{selected.solution}</h3>

                    <div className="p-5 rounded-2xl bg-bg-surface border border-border relative overflow-hidden mb-6">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l" />
                      <p className="text-body text-text-secondary italic pl-2">
                        "{selected.problem}"
                      </p>
                    </div>

                    <div className="flex items-baseline gap-3">
                      <span className="text-display-lg text-primary font-bold leading-none">
                        {selected.stat.split(' ')[0]}
                      </span>
                      <span className="text-sm font-semibold text-text-secondary uppercase tracking-wide">
                        {selected.stat.substring(selected.stat.indexOf(' ') + 1)}
                      </span>
                    </div>
                  </div>

                  {/* Right: Benefits */}
                  <div>
                    <h4 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-4">Key Benefits</h4>
                    <ul className="flex flex-col gap-3">
                      {selected.benefits.map((benefit, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.07 }}
                          className="flex items-start gap-3 p-3 rounded-xl bg-bg-surface border border-border"
                        >
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span className="text-sm text-text-primary">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom link */}
        <div className="pt-2 flex justify-center">
          <Link
            to="/features"
            className="group inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-hover transition-colors"
          >
            Explore all features in detail
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
