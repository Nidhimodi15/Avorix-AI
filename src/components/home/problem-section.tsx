import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';

const problems = [
  {
    title: 'Missed Leads.',
    description: 'Leads contact you after hours and go to competitors who respond faster.',
  },
  {
    title: 'Slow Responses.',
    description: 'Customers get frustrated waiting hours for simple answers.',
  },
  {
    title: 'Lost Revenue.',
    description: 'Unanswered queries turn into lost sales opportunities.',
  },
  {
    title: 'Staff Overload.',
    description: 'Your team wastes time answering the same repetitive questions.',
  },
  {
    title: 'Poor Follow-Ups.',
    description: 'Potential customers fall through the cracks without consistent follow-up.',
  },
  {
    title: 'Scattered Data.',
    description: 'Lead information is lost in notebooks instead of instantly syncing to your CRM.',
  }
];

export function ProblemSection() {
  return (
    <section className="section bg-bg">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6">
            The hidden cost of <br className="hidden md:block"/> manual communication.
          </h2>
          <p className="text-xl text-text-secondary font-light max-w-2xl">
            Relying on humans alone for customer support isn't just slow. It is actively costing you revenue, reputation, and scale.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col"
        >
          {problems.map((problem, index) => (
            <motion.div 
              key={index} 
              variants={staggerItem}
              className="group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 py-8 border-b border-white/5 transition-colors hover:border-white/20"
            >
              <h3 className="text-2xl font-medium text-white/50 group-hover:text-white transition-colors duration-300 md:w-1/3 shrink-0">
                {problem.title}
              </h3>
              <p className="text-lg text-text-secondary/50 group-hover:text-text-secondary transition-colors duration-300 font-light">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
