import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '@/components/shared/section-heading';
import { pricingPlans, pricingFAQ } from '@/data/pricing';
import { Button } from '@/components/ui/button';
import { CTABanner } from '@/components/shared/cta-banner';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';
import { cn } from '@/lib/utils';

export function PricingPage() {
  return (
    <div className="pt-32 flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="section pb-12 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-hero -z-10" />
        <div className="container-tight relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <h1 className="text-display-lg mb-6">
              Simple, transparent <span className="text-gradient">pricing.</span>
            </h1>
            <p className="text-body-xl text-text-secondary">
              Start with a 14-day free trial. Upgrade when you need more power. No hidden fees or surprise charges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-12 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 blur-[100px] rounded-full pointer-events-none -z-10" />
        
        <div className="container-wide">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {pricingPlans.map((plan) => (
              <motion.div 
                key={plan.id}
                variants={staggerItem}
                className={cn(
                  "pricing-card h-full flex flex-col",
                  plan.featured ? "featured scale-105 z-10 bg-bg" : "bg-bg-surface/50 backdrop-blur-sm"
                )}
              >
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
                
                <div className="pricing-features flex-1 mt-8 pt-8 border-t border-border">
                  <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wide mb-4">What's included:</h4>
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
        </div>
      </section>



      {/* Pricing FAQ */}
      <section className="section">
        <div className="container max-w-4xl">
          <SectionHeading title="Pricing FAQ" />
          
          <div className="grid md:grid-cols-2 gap-8">
            {pricingFAQ.map((faq, index) => (
              <motion.div 
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-bg-surface p-6 rounded-2xl border border-border"
              >
                <h4 className="text-lg font-semibold mb-3">{faq.question}</h4>
                <p className="text-text-secondary text-sm leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
