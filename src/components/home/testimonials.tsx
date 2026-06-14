import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { SectionHeading } from '../shared/section-heading';
import { testimonials } from '@/data/testimonials';
import { cn } from '@/lib/utils';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="section bg-bg-surface overflow-hidden">
      <div className="container">
        <SectionHeading
          badge="Success Stories"
          title="Don't just take our word for it"
          description="See how businesses across industries are using Avorix AI to drive growth and save time."
        />

        <div className="relative max-w-4xl mx-auto h-[400px] md:h-[300px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0 w-full"
            >
              <div className="glass-card h-full p-8 md:p-12 rounded-[2rem] border-white/20 dark:border-white/5 flex flex-col justify-center items-center text-center relative shadow-xl">
                <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/10 -scale-x-100" />
                
                <p className="text-body-xl md:text-heading-4 font-medium text-text-primary mb-8 relative z-10 max-w-3xl">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-glow">
                    {testimonials[currentIndex].initials}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-text-primary">{testimonials[currentIndex].name}</h4>
                    <p className="text-sm text-text-secondary">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button 
            onClick={prev}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 w-12 h-12 rounded-full bg-bg shadow-md border border-border flex items-center justify-center text-text-secondary hover:text-primary transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={next}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 w-12 h-12 rounded-full bg-bg shadow-md border border-border flex items-center justify-center text-text-secondary hover:text-primary transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Pagination Dots */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  index === currentIndex ? "bg-primary w-8" : "bg-border hover:bg-text-muted"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
