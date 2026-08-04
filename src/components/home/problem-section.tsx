import React from 'react';
import { motion } from 'framer-motion';
import { Clock, TrendingDown, Users, Frown, XCircle, Database } from 'lucide-react';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';
import { SectionHeading } from '../shared/section-heading';

const problems = [
  {
    icon: Clock,
    title: 'Missed Leads',
    description: 'Leads contact you after hours and go to competitors who respond faster.',
  },
  {
    icon: Frown,
    title: 'Slow Responses',
    description: 'Customers get frustrated waiting hours for simple answers.',
  },
  {
    icon: TrendingDown,
    title: 'Lost Revenue',
    description: 'Unanswered queries turn into lost sales opportunities.',
  },
  {
    icon: Users,
    title: 'Staff Overload',
    description: 'Your team wastes time answering the same repetitive questions.',
  },
  {
    icon: XCircle,
    title: 'Poor Follow-Ups',
    description: 'Potential customers fall through the cracks without consistent follow-up.',
  },
  {
    icon: Database,
    title: 'Scattered Data',
    description: 'Lead information is lost in notebooks instead of instantly syncing to your CRM.',
  }
];

export function ProblemSection() {
  return (
    <section className="section bg-bg-surface relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-destructive/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container relative z-10">
        <SectionHeading
          badge="Sound Familiar?"
          title="The cost of manual communication"
          description="Relying on humans alone for customer communication is costing you leads, revenue, and satisfaction."
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
        >
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div 
                key={index} 
                variants={staggerItem}
                className="group relative bg-bg p-8 rounded-2xl border border-border/50 hover:border-destructive/30 transition-all duration-500 overflow-hidden"
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-bg-surface border border-border/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-destructive/20 transition-all duration-500 shadow-sm">
                    <Icon className="w-6 h-6 text-destructive group-hover:text-destructive/80 transition-colors" />
                  </div>
                  <h3 className="text-heading-4 mb-3 text-text-primary group-hover:text-white transition-colors">{problem.title}</h3>
                  <p className="text-body-md text-text-secondary leading-relaxed">{problem.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
