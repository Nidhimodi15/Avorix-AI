import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, Megaphone, TrendingUp, CheckCircle2 } from 'lucide-react';
import { CTABanner } from '@/components/shared/cta-banner';
import { fadeUp } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { SectionHeading } from '@/components/shared/section-heading';

const solutions = [
  {
    id: 'customer-support',
    icon: Headphones,
    title: 'Customer Support',
    subtitle: 'Resolve issues instantly, 24/7',
    description: 'Transform your customer service with AI that never sleeps. Resolve common queries instantly and escalate complex issues to human agents with full context.',
    benefits: [
      'Zero wait times for customers',
      '80% reduction in ticket volume',
      'Consistent, accurate answers',
      'Seamless human handoff'
    ],
    color: 'primary'
  },
  {
    id: 'sales-lead-gen',
    icon: TrendingUp,
    title: 'Sales & Lead Gen',
    subtitle: 'Capture and qualify leads on autopilot',
    description: 'Stop losing leads who contact you after hours. Aeviq AI engages prospects instantly, qualifies them based on your criteria, and routes hot leads to your sales team.',
    benefits: [
      '24/7 lead capture',
      'Automated qualification scoring',
      'Direct CRM integration',
      'Higher conversion rates'
    ],
    color: 'accent'
  },
  {
    id: 'marketing',
    icon: Megaphone,
    title: 'Marketing & Retention',
    subtitle: 'Engage customers where they are',
    description: 'Bypass crowded email inboxes with WhatsApp broadcasts. Send personalized offers, updates, and re-engagement campaigns with 98% open rates.',
    benefits: [
      '98% message open rates',
      'Personalized broadcast campaigns',
      'Automated re-engagement',
      'Higher customer lifetime value'
    ],
    color: 'blue'
  }
];

export function SolutionsPage() {
  return (
    <div className="pt-32 flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="section pb-12 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-hero -z-10" />
        <div className="container-tight relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <h1 className="text-display-lg mb-6">
              Solutions for every <span className="text-gradient">department.</span>
            </h1>
            <p className="text-body-xl text-text-secondary">
              Whether you want to automate support, drive sales, or run marketing campaigns, Aeviq AI has you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Details */}
      <section className="py-12 section-alt border-y border-border/50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div 
                  key={solution.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card flex flex-col h-full"
                >
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-8",
                    solution.color === 'primary' ? 'bg-primary/10 text-primary' :
                    solution.color === 'accent' ? 'bg-accent/10 text-accent' :
                    'bg-blue-500/10 text-blue-500'
                  )}>
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <h2 className="text-heading-3 mb-2">{solution.title}</h2>
                  <h3 className="text-body font-semibold text-text-muted uppercase tracking-wide mb-6">{solution.subtitle}</h3>
                  
                  <p className="text-body text-text-secondary mb-8">
                    {solution.description}
                  </p>
                  
                  <div className="mt-auto pt-8 border-t border-border">
                    <ul className="space-y-4">
                      {solution.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className={cn(
                            "w-5 h-5 shrink-0 mt-0.5",
                            solution.color === 'primary' ? 'text-primary' :
                            solution.color === 'accent' ? 'text-accent' :
                            'text-blue-500'
                          )} />
                          <span className="text-body-sm font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
