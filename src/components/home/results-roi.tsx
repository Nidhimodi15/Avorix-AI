import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { STATS } from '@/lib/constants';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';

function AnimatedCounter({ value, suffix, duration = 2 }: { value: number, suffix: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Easing function for smoother animation (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * value));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [value, duration, isInView]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export function ResultsROI() {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent skew-x-12 translate-x-20" />
      
      <div className="container-wide relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-x divide-white/20"
        >
          {STATS.map((stat, index) => (
            <motion.div 
              key={index}
              variants={staggerItem}
              className="px-4 text-center first:border-l-0 border-white/20"
            >
              <div className="text-display-lg lg:text-display-xl font-bold mb-2 tracking-tight">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-body-lg font-medium text-white/80">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
