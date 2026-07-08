import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { industries } from '@/data/industries';
import { CTABanner } from '@/components/shared/cta-banner';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';

export function IndustriesPage() {
  return (
    <div className="pt-32 flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="section pb-12 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-hero -z-10" />
        <div className="container-tight relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <h1 className="text-display-lg mb-6">
              AI built for <span className="text-gradient">your industry.</span>
            </h1>
            <p className="text-body-xl text-text-secondary">
              Discover how businesses in your sector are using Aeviq AI to automate workflows, capture leads, and serve customers better.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-12 section-alt border-y border-border/50">
        <div className="container-wide">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <motion.div key={industry.id} variants={staggerItem}>
                  <div className="card h-full flex flex-col group hover:border-primary transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <h3 className="text-heading-4 mb-3">{industry.name}</h3>
                    <p className="text-body-sm text-text-secondary mb-6 flex-1">
                      {industry.description}
                    </p>
                    
                    <div className="p-4 bg-bg-surface rounded-xl border border-border mb-6">
                      <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Common Use Cases</h4>
                      <ul className="text-sm text-text-secondary space-y-1">
                        {industry.useCases.slice(0, 3).map((useCase, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-primary/50" />
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-6 border-t border-border flex items-center justify-between">
                       <div className="flex flex-col">
                          <span className="text-sm font-bold text-primary leading-none mb-1">
                            Tailored Solutions
                          </span>
                        </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
