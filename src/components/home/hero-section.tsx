import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, Star } from 'lucide-react';
import { fadeUp, fadeLeft, fadeRight } from '@/lib/animations';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { WhatsAppMockup } from '../shared/whatsapp-mockup';

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-hero">
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy */}
          <div className="max-w-3xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <Badge variant="primary" className="mb-6">
                <span className="flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-primary text-primary" />
                  Your New AI Employee
                </span>
              </Badge>
            </motion.div>
            
            <motion.h1 
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-display-lg lg:text-display-xl mb-6 text-text-primary"
            >
              Turn WhatsApp Into Your <br className="hidden lg:block" />
              <span className="text-gradient">24/7 AI Employee</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-body-xl text-text-secondary mb-10 max-w-2xl"
            >
              Avorix AI helps businesses instantly respond to customers, capture leads, automate support, and drive growth—even while your team sleeps.
            </motion.p>
            
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row items-center gap-4 mb-10"
            >
              <Link to="/demo" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Book Free Demo
                </Button>
              </Link>
              <Link to="/demo" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-white dark:bg-slate-800" leftIcon={<Play className="w-5 h-5 fill-current" />}>
                  Watch Live Demo
                </Button>
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-4 text-sm text-text-muted"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                    alt="User avatar" 
                    className="w-8 h-8 rounded-full border-2 border-bg"
                  />
                ))}
              </div>
              <p>Trusted by <span className="font-semibold text-text-primary">500+</span> businesses globally</p>
            </motion.div>
          </div>

          {/* Right Column: Mockup */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            className="relative lg:ml-auto w-full max-w-[480px] mx-auto lg:mx-0"
          >
            {/* Floating Stats Cards */}
            <motion.div 
              className="absolute -left-12 top-1/4 z-20 hidden md:flex animate-float"
            >
              <div className="glass-card rounded-xl p-4 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold text-lg">3x</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">More Leads</p>
                  <p className="text-xs text-text-muted">Captured today</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="absolute -right-8 bottom-1/4 z-20 hidden md:flex animate-float-delayed"
            >
              <div className="glass-card rounded-xl p-4 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">95%</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">Response Rate</p>
                  <p className="text-xs text-text-muted">Under 3 seconds</p>
                </div>
              </div>
            </motion.div>

            <WhatsAppMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
