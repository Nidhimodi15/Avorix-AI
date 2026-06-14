import React from 'react';
import { motion } from 'framer-motion';
import { Clock, TrendingDown, Users, Frown, XCircle } from 'lucide-react';
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
];

export function ProblemSection() {
  return (
    <section className="section bg-bg-surface">
      <div className="container">
        <SectionHeading
          badge="Sound Familiar?"
          title="The cost of manual communication"
          description="Relying on humans alone for WhatsApp communication is costing you leads, revenue, and customer satisfaction."
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto"
        >
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div 
                key={index} 
                variants={staggerItem}
                className={`card-flat ${index === 3 ? 'lg:col-start-1 lg:col-end-2 lg:ml-auto w-full lg:w-[calc(150%+12px)]' : ''} ${index === 4 ? 'lg:col-start-3 lg:col-end-4 lg:mr-auto w-full lg:w-[calc(150%+12px)] lg:-ml-[calc(50%+12px)]' : ''}`}
              >
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-heading-4 mb-3">{problem.title}</h3>
                <p className="text-body text-text-secondary">{problem.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
