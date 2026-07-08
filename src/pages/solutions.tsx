import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, Megaphone, TrendingUp, CheckCircle2, Globe, Workflow, MessageCircle, Search } from 'lucide-react';
import { CTABanner } from '@/components/shared/cta-banner';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { SectionHeading } from '@/components/shared/section-heading';

const solutions = [
  {
    id: 'whatsapp-ai',
    icon: Headphones,
    title: 'WhatsApp AI Employee',
    subtitle: 'Your 24/7 AI-powered team member',
    description: 'An intelligent AI agent that lives inside WhatsApp — handling customer queries, capturing leads, booking appointments, and providing support around the clock without missing a single message.',
    benefits: [
      'Instant replies — zero wait time',
      '80% reduction in support tickets',
      'Automated lead qualification & CRM sync',
      'Seamless human handoff with full context'
    ],
    color: 'primary'
  },
  {
    id: 'custom-websites',
    icon: Globe,
    title: 'Custom Website Development',
    subtitle: 'Stunning, conversion-focused websites',
    description: 'We design and develop premium, high-performance websites tailored to your brand — from sleek landing pages to full-stack web applications. Every pixel is crafted to convert visitors into customers.',
    benefits: [
      'Fully custom design — no templates',
      'Mobile-first responsive development',
      'SEO-optimized from day one',
      'Fast deployment with ongoing support'
    ],
    color: 'accent'
  },
  {
    id: 'automation',
    icon: Workflow,
    title: 'Business Process Automation',
    subtitle: 'Eliminate repetitive manual work',
    description: 'We build custom automation workflows that connect your tools and eliminate tedious manual tasks — from invoice processing and email follow-ups to data entry and inventory management. Work smarter, not harder.',
    benefits: [
      'Custom workflows tailored to your ops',
      'CRM, email, invoicing & tool integrations',
      'Reduce human error by 90%',
      'Save 20+ hours per week per team member'
    ],
    color: 'blue'
  },
  {
    id: 'sales-lead-gen',
    icon: TrendingUp,
    title: 'Sales & Lead Generation',
    subtitle: 'Capture and qualify leads on autopilot',
    description: 'Stop losing leads who contact you after hours. Aeviq AI engages prospects instantly, qualifies them based on your criteria, and routes hot leads to your sales team — all automatically.',
    benefits: [
      '24/7 lead capture across channels',
      'Automated qualification scoring',
      'Direct CRM integration',
      'Higher conversion rates'
    ],
    color: 'purple'
  },
  {
    id: 'ai-chatbots',
    icon: MessageCircle,
    title: 'AI Chatbots for Every Platform',
    subtitle: 'Instagram, Telegram, Website & more',
    description: 'Extend your AI employee beyond WhatsApp. We deploy intelligent chatbots on Instagram DMs, Telegram, your website, and Facebook Messenger — all trained on your business data with a unified dashboard.',
    benefits: [
      'Multi-platform — one AI, everywhere',
      'Trained on your products & FAQs',
      'Unified inbox for all conversations',
      'Automated DM-to-sale funnels'
    ],
    color: 'pink'
  },
  {
    id: 'digital-marketing',
    icon: Search,
    title: 'Digital Marketing & SEO',
    subtitle: 'Get found, get clicks, get customers',
    description: 'From search engine optimization and Google Ads to social media strategy and content marketing — we build data-driven campaigns that put your brand in front of the right audience and drive measurable results.',
    benefits: [
      'Technical & on-page SEO optimization',
      'Google & Meta ad campaign management',
      'Content strategy & social media growth',
      'Monthly analytics & ROI reporting'
    ],
    color: 'orange'
  },
  {
    id: 'marketing-retention',
    icon: Megaphone,
    title: 'Marketing & Retention',
    subtitle: 'Engage customers where they are',
    description: 'Bypass crowded email inboxes with WhatsApp broadcasts. Send personalized offers, updates, and re-engagement campaigns with 98% open rates that bring customers back again and again.',
    benefits: [
      '98% message open rates',
      'Personalized broadcast campaigns',
      'Automated re-engagement funnels',
      'Higher customer lifetime value'
    ],
    color: 'green'
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
              Everything your business needs to <span className="text-gradient">grow & scale.</span>
            </h1>
            <p className="text-body-xl text-text-secondary">
              From AI-powered automation and custom websites to lead generation and digital marketing — Aeviq AI is your complete technology partner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-12 section-alt border-y border-border/50">
        <div className="container-wide">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              const colorClasses: Record<string, { bg: string; text: string }> = {
                primary: { bg: 'bg-primary/10', text: 'text-primary' },
                accent: { bg: 'bg-accent/10', text: 'text-accent' },
                blue: { bg: 'bg-blue-500/10', text: 'text-blue-500' },
                purple: { bg: 'bg-purple-500/10', text: 'text-purple-500' },
                pink: { bg: 'bg-pink-500/10', text: 'text-pink-500' },
                orange: { bg: 'bg-orange-500/10', text: 'text-orange-500' },
                green: { bg: 'bg-emerald-500/10', text: 'text-emerald-500' },
              };
              const colors = colorClasses[solution.color] || colorClasses.primary;

              return (
                <motion.div 
                  key={solution.id}
                  variants={fadeUp}
                  transition={{ delay: index * 0.08 }}
                  className="card flex flex-col h-full group hover:border-primary/40 transition-all duration-300"
                >
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300",
                    colors.bg, colors.text
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
                          <CheckCircle2 className={cn("w-5 h-5 shrink-0 mt-0.5", colors.text)} />
                          <span className="text-body-sm font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
