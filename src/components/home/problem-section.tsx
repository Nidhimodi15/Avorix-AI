import React from 'react';
import { motion } from 'framer-motion';
import { Clock, TrendingDown, Users, Database } from 'lucide-react';
import { fadeUp, fadeLeft } from '@/lib/animations';

const problems = [
  {
    icon: Clock,
    title: 'Missed Leads',
    description: 'Leads contact you after hours and sign with competitors before morning.',
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20'
  },
  {
    icon: TrendingDown,
    title: 'Lost Revenue',
    description: 'Every 5-minute delay in response drops conversion rates by 80%.',
    color: 'text-red-500',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20'
  },
  {
    icon: Users,
    title: 'Staff Overload',
    description: 'Your highly-paid team wastes hours answering the same 5 questions.',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20'
  },
  {
    icon: Database,
    title: 'Scattered Data',
    description: 'Customer info is lost in notebooks instead of syncing to your CRM.',
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20'
  }
];

export function ProblemSection() {
  return (
    <section className="section bg-bg relative">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative items-start">
          
          {/* Sticky Left Column: Massive Visual Statement */}
          <div className="lg:w-1/2 lg:sticky lg:top-32 lg:h-[calc(100vh-16rem)] flex flex-col justify-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg-surface border border-border text-sm text-text-secondary mb-6">
                <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
                The Problem
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-text-primary mb-6 leading-tight">
                Manual support is <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-destructive to-orange-500">bleeding revenue.</span>
              </h2>
              <p className="text-lg text-text-secondary font-light max-w-md">
                In a hyper-competitive market, forcing customers to wait for human replies is a guaranteed way to lose them.
              </p>
            </motion.div>
          </div>

          {/* Scrolling Right Column: Highly Visual Cards */}
          <div className="lg:w-1/2 flex flex-col gap-8 pb-32 pt-16">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <motion.div 
                  key={index}
                  variants={fadeLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-bg-surface/50 backdrop-blur-xl border border-border/50 rounded-3xl p-8 hover:bg-bg-surface transition-colors duration-500"
                >
                  <div className={`w-16 h-16 rounded-2xl ${problem.bg} ${problem.border} border flex items-center justify-center mb-6`}>
                    <Icon className={`w-8 h-8 ${problem.color}`} />
                  </div>
                  <h3 className="text-2xl font-medium text-text-primary mb-3">{problem.title}</h3>
                  <p className="text-text-secondary text-lg font-light leading-relaxed">
                    {problem.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}
