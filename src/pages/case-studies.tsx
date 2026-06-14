import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Clock, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CTABanner } from '@/components/shared/cta-banner';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';

const caseStudies = [
  {
    id: 1,
    company: 'Meridian Health',
    industry: 'Healthcare',
    logo: 'MH',
    title: 'How Meridian Health cut patient wait times by 85%',
    description: 'By implementing Avorix AI to handle routine appointment booking and FAQs, Meridian Health freed up their reception staff to focus on high-priority patient care.',
    metrics: [
      { label: 'Reduction in wait time', value: '85%' },
      { label: 'Appointments booked via AI', value: '4,200+' },
      { label: 'Staff hours saved monthly', value: '320' }
    ],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 2,
    company: 'Apex Real Estate',
    industry: 'Real Estate',
    logo: 'AR',
    title: 'Doubling lead conversion rates with instant WhatsApp follow-ups',
    description: 'Apex Real Estate stopped losing leads to competitors by using Avorix AI to instantly engage inquiries, qualify budgets, and schedule viewings 24/7.',
    metrics: [
      { label: 'Increase in conversions', value: '114%' },
      { label: 'Average response time', value: '< 2s' },
      { label: 'Additional revenue generated', value: '$2.4M' }
    ],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 3,
    company: 'Lumière E-commerce',
    industry: 'Retail',
    logo: 'LE',
    title: 'Recovering $45k in abandoned carts monthly',
    description: 'Lumière replaced their low-converting email sequences with automated WhatsApp reminders, offering instant support for checkout issues.',
    metrics: [
      { label: 'Cart recovery rate', value: '42%' },
      { label: 'Monthly revenue recovered', value: '$45k' },
      { label: 'Customer satisfaction score', value: '4.9/5' }
    ],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop'
  }
];

export function CaseStudiesPage() {
  return (
    <div className="pt-32 flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="section pb-12 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-hero -z-10" />
        <div className="container-tight relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <h1 className="text-display-lg mb-6">
              Real businesses. <span className="text-gradient">Real results.</span>
            </h1>
            <p className="text-body-xl text-text-secondary">
              See how companies across industries are transforming their customer communication and driving revenue with Avorix AI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-12 pb-24">
        <div className="container-wide space-y-24">
          {caseStudies.map((study, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div key={study.id} className="relative">
                {/* Decorative connector line between studies */}
                {index !== caseStudies.length - 1 && (
                  <div className="absolute left-1/2 top-full w-px h-24 bg-border hidden lg:block" />
                )}
                
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Image/Visual */}
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className={`relative rounded-3xl overflow-hidden h-[400px] lg:h-[600px] shadow-2xl ${!isEven ? 'lg:order-2' : ''}`}
                  >
                    <img 
                      src={study.image} 
                      alt={study.company}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/40 to-transparent" />
                    
                    {/* Floating Logo Badge */}
                    <div className="absolute top-8 left-8 w-16 h-16 rounded-2xl bg-bg/90 backdrop-blur-md flex items-center justify-center text-xl font-bold text-text-primary shadow-lg border border-white/10">
                      {study.logo}
                    </div>
                    
                    {/* Floating Metric Card */}
                    <div className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-2xl border border-white/20 shadow-xl">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-text-muted uppercase tracking-wider font-semibold">Key Result</p>
                          <p className="font-semibold text-text-primary">{study.metrics[0].label}</p>
                        </div>
                      </div>
                      <div className="text-4xl font-bold text-primary">
                        {study.metrics[0].value}
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Content */}
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className={!isEven ? 'lg:order-1' : ''}
                  >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-bg-surface text-text-secondary text-sm font-semibold mb-6">
                      {study.industry}
                    </div>
                    
                    <h2 className="text-heading-2 mb-6">
                      {study.title}
                    </h2>
                    
                    <p className="text-body-lg text-text-secondary mb-10">
                      {study.description}
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-6 mb-10">
                      {study.metrics.slice(1).map((metric, i) => (
                        <div key={i} className="p-5 rounded-2xl bg-bg-surface border border-border">
                          <div className="text-3xl font-bold text-text-primary mb-2">
                            {metric.value}
                          </div>
                          <div className="text-sm font-medium text-text-secondary">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <Link to={`/case-studies/${study.id}`}>
                      <button className="btn btn-primary w-full sm:w-auto">
                        Read Full Case Study <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </Link>
                  </motion.div>
                  
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
