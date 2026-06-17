import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';
import { SectionHeading } from '../shared/section-heading';
import { pricingPlans } from '@/data/pricing';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

export function PricingPreview() {
  return (
    <section className="section bg-bg-section border-y border-border/50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-wide relative z-10">
        <SectionHeading
          badge="Simple Pricing"
          title="Plans that scale with your business"
          description="Start for free, upgrade when you need more power. No hidden fees or surprise charges."
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={plan.id}
              variants={staggerItem}
              className={cn(
                "pricing-card h-full flex flex-col",
                plan.featured ? "featured scale-105 z-10 bg-bg" : "bg-bg-surface/50 backdrop-blur-sm"
              )}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-accent to-primary text-white text-[10px] font-bold uppercase tracking-wider py-1.5 px-4 rounded-bl-xl shadow-md z-20">
                  Most Popular
                </div>
              )}
              <div>
                <h3 className="text-heading-3 mb-2">{plan.name}</h3>
                <p className="text-body-sm text-text-secondary h-10 mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  {plan.price !== null ? (
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-text-primary">${plan.price}</span>
                      <span className="text-text-secondary ml-1">{plan.period}</span>
                    </div>
                  ) : (
                    <div className="text-4xl font-bold text-text-primary">Custom</div>
                  )}
                </div>
                
                <Link to={plan.price !== null ? "/demo" : "/contact"} className="block w-full">
                  <Button 
                    variant={plan.featured ? "primary" : "outline"} 
                    className="w-full"
                    rightIcon={!plan.featured ? <ArrowRight className="w-4 h-4" /> : undefined}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
              
              <div className="pricing-features flex-1">
                {plan.features.map((feature, i) => (
                  <div key={i} className="pricing-feature">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <Link to="/pricing" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-hover transition-colors">
            View full feature comparison <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
