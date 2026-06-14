import React from 'react';
import { motion } from 'framer-motion';
import { features } from '@/data/features';
import { CTABanner } from '@/components/shared/cta-banner';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FeaturesPage() {
  return (
    <div className="pt-32 flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="section pb-12 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-hero -z-10" />
        <div className="container-tight relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <h1 className="text-display-lg mb-6">
              Features that drive <span className="text-gradient">real results.</span>
            </h1>
            <p className="text-body-xl text-text-secondary">
              Everything you need to automate conversations, capture leads, and provide 24/7 support—built directly into WhatsApp.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Detail Sections */}
      <section className="py-12">
        {features.map((feature, index) => {
          const isEven = index % 2 === 0;
          const Icon = feature.icon;

          return (
            <div 
              key={feature.id} 
              id={feature.id}
              className={cn(
                "py-20 lg:py-32",
                !isEven && "bg-bg-section border-y border-border/50"
              )}
            >
              <div className="container-wide">
                <div className={cn(
                  "grid lg:grid-cols-2 gap-16 items-center",
                  !isEven && "lg:flex-row-reverse"
                )}>
                  
                  {/* Text Content */}
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className={cn(!isEven && "lg:order-2")}
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                      <Icon className="w-4 h-4" />
                      {feature.title}
                    </div>
                    
                    <h2 className="text-heading-2 mb-6">
                      {feature.subtitle}
                    </h2>
                    
                    <div className="p-6 rounded-2xl bg-bg-surface border border-border relative overflow-hidden mb-8">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-destructive" />
                      <p className="text-sm font-semibold text-destructive mb-2 uppercase tracking-wide">The Problem</p>
                      <p className="text-body text-text-secondary">
                        {feature.problem}
                      </p>
                    </div>
                    
                    <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 relative overflow-hidden mb-8">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                      <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">The Solution</p>
                      <p className="text-body font-medium">
                        {feature.solution}
                      </p>
                    </div>
                    
                    <h4 className="font-semibold text-text-primary mb-4">Key Benefits:</h4>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-body text-text-secondary">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                  
                  {/* Visual Placeholder (in a real app, this would be product screenshots) */}
                  <motion.div
                    variants={isEven ? fadeUp : fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className={cn(
                      "relative h-[400px] lg:h-[500px] w-full rounded-[2rem] overflow-hidden border border-border/50 flex items-center justify-center",
                      isEven ? "bg-gradient-to-tr from-primary/5 to-accent/5" : "bg-gradient-to-bl from-accent/5 to-primary/5",
                      !isEven && "lg:order-1"
                    )}
                  >
                    {/* Abstract visual representation */}
                    <div className="absolute inset-0 bg-grid opacity-30" />
                    <div className="relative z-10 glass-card p-8 rounded-2xl max-w-sm w-full mx-auto shadow-2xl flex flex-col gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="h-4 bg-border rounded-full w-3/4 mx-auto" />
                      <div className="h-4 bg-border rounded-full w-1/2 mx-auto" />
                      <div className="h-20 bg-bg-surface rounded-xl mt-4 border border-border/50" />
                      
                      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
                      <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
                    </div>
                    
                    {/* Stat Badge */}
                    <div className="absolute bottom-8 right-8 glass-card py-3 px-6 rounded-xl border border-white/20 shadow-lg flex flex-col">
                      <span className="text-2xl font-bold text-primary leading-none mb-1">
                        {feature.stat.split(' ')[0]}
                      </span>
                      <span className="text-xs font-semibold text-text-secondary uppercase">
                        {feature.stat.substring(feature.stat.indexOf(' ') + 1)}
                      </span>
                    </div>
                  </motion.div>
                  
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <CTABanner />
    </div>
  );
}
