import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { Button } from '../ui/button';

interface CTABannerProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  withSparkles?: boolean;
}

export function CTABanner({
  title = "Ready to Transform Your WhatsApp?",
  description = "Join hundreds of businesses using Avorix AI to automate conversations, capture leads, and drive revenue 24/7.",
  primaryButtonText = "Book Free Demo",
  primaryButtonLink = "/demo",
  secondaryButtonText = "View Pricing",
  secondaryButtonLink = "/pricing",
  withSparkles = true,
}: CTABannerProps) {
  return (
    <section className="section py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-cta opacity-90 z-0" />
      <div className="absolute inset-0 bg-grid opacity-20 z-0 mix-blend-overlay" />
      
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-accent/30 rounded-full blur-[100px] z-0 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-primary/30 rounded-full blur-[100px] z-0 pointer-events-none" />

      <div className="container-tight relative z-10 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="glass-card rounded-[2rem] p-10 md:p-16 border-white/20 dark:border-white/10 shadow-2xl"
        >
          {withSparkles && (
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
          )}
          
          <h2 className="text-heading-2 md:text-heading-1 text-white mb-6 tracking-tight">
            {title}
          </h2>
          
          <p className="text-body-lg text-white/80 mb-10 max-w-2xl mx-auto">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={primaryButtonLink} className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 border-0 shadow-lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                {primaryButtonText}
              </Button>
            </Link>
            
            <Link to={secondaryButtonLink} className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto text-white border-white/30 hover:bg-white/10 hover:border-white/50"
              >
                {secondaryButtonText}
              </Button>
            </Link>
          </div>
          
          <p className="mt-6 text-sm text-white/60">
            No credit card required. Setup in 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
