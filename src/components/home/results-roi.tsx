import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { STATS } from '@/lib/constants';
import { staggerContainer, staggerItem } from '@/lib/animations';

function AnimatedCounter({ value, suffix, duration = 2 }: { value: number, suffix: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * value));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [value, duration, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function ResultsROI() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Multi-layered gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 40%, #7C3AED 70%, #1E3A8A 100%)',
          backgroundSize: '300% 300%',
          animation: 'aurora 14s ease infinite',
        }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
      {/* Radial top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] -z-10 opacity-30"
        style={{
          background: 'radial-gradient(ellipse, rgba(255,255,255,0.5) 0%, transparent 70%)',
        }}
      />

      <div className="container-wide relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-bold uppercase tracking-[0.18em] text-white/60 mb-12"
        >
          Results that speak for themselves
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4"
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="text-center px-4 group"
            >
              {/* Divider between items */}
              <div
                className="text-display-lg lg:text-display-xl font-bold mb-3 tracking-tight text-white transition-transform duration-300 group-hover:scale-110"
                style={{ textShadow: '0 0 40px rgba(255,255,255,0.3)' }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-body-lg font-medium text-white/75">{stat.label}</p>
              {/* Underline accent */}
              <div
                className="mx-auto mt-3 w-8 h-0.5 rounded-full opacity-0 group-hover:opacity-100 group-hover:w-16 transition-all duration-500"
                style={{ background: 'rgba(255,255,255,0.6)' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
