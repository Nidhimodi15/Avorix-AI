import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../shared/section-heading';
import { features } from '@/data/features';
import { cn } from '@/lib/utils';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FeatureShowcase() {
  // Only show top 6 features on home page
  const showcaseFeatures = features.slice(0, 6);
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="section bg-bg-section border-y border-border/50 overflow-hidden">
      <div className="container-wide">
        <SectionHeading
          badge="Features"
          title="Everything you need to automate WhatsApp"
          description="A complete suite of tools designed to turn your WhatsApp into a revenue-generating machine."
        />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left: Feature List (Tabs) */}
          <div className="lg:col-span-5 flex flex-col gap-2 relative z-10">
            {showcaseFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = index === activeFeature;
              
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(index)}
                  className={cn(
                    "text-left p-5 rounded-2xl transition-all duration-300 flex items-start gap-4 group relative",
                    isActive 
                      ? "bg-bg-card shadow-md border border-primary/20" 
                      : "hover:bg-bg-surface border border-transparent"
                  )}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="active-feature-bg"
                      className="absolute inset-0 bg-bg-card rounded-2xl shadow-md border border-primary/20 -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors",
                    isActive ? "bg-primary text-white" : "bg-bg-surface text-text-muted group-hover:text-primary"
                  )}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <div>
                    <h4 className={cn(
                      "text-heading-4 mb-1 transition-colors",
                      isActive ? "text-primary" : "text-text-primary"
                    )}>
                      {feature.title}
                    </h4>
                    <p className="text-body-sm text-text-secondary line-clamp-2">
                      {feature.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
            
            <div className="mt-6 pt-6 border-t border-border">
              <Link to="/features" className="group flex items-center gap-2 text-primary font-semibold hover:text-primary-hover transition-colors">
                View all 12 features 
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right: Feature Detail Display */}
          <div className="lg:col-span-7 relative h-full min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0"
              >
                <div className="card h-full flex flex-col relative overflow-hidden group">
                  {/* Decorative background glow based on active feature */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 group-hover:bg-primary/10 transition-colors duration-700" />
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                      {React.createElement(showcaseFeatures[activeFeature].icon, { className: "w-4 h-4" })}
                      {showcaseFeatures[activeFeature].title}
                    </div>
                    
                    <h3 className="text-heading-2 mb-4 pr-12">
                      {showcaseFeatures[activeFeature].solution}
                    </h3>
                    
                    <div className="my-8 p-6 rounded-2xl bg-bg-surface border border-border relative overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                      <p className="text-body-lg text-text-secondary italic">
                        "The problem: {showcaseFeatures[activeFeature].problem}"
                      </p>
                    </div>
                    
                    <div className="mt-auto">
                      <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">Key Benefits</h4>
                      <ul className="grid sm:grid-cols-2 gap-4">
                        {showcaseFeatures[activeFeature].benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                            <span className="text-body text-text-primary">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-border flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-display-lg text-primary leading-none mb-1">
                          {showcaseFeatures[activeFeature].stat.split(' ')[0]}
                        </span>
                        <span className="text-sm font-semibold text-text-secondary uppercase tracking-wide">
                          {showcaseFeatures[activeFeature].stat.substring(showcaseFeatures[activeFeature].stat.indexOf(' ') + 1)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
