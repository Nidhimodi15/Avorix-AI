import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { SectionHeading } from '../shared/section-heading';
import { Globe, Workflow, MessageCircle, Search, Headphones, Megaphone, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: <Headphones className="w-6 h-6 text-primary" />,
    title: "WhatsApp AI Employee",
    description: "An intelligent AI agent inside WhatsApp that handles customer queries, books appointments, captures leads, and provides 24/7 support.",
    status: "Live"
  },
  {
    icon: <Globe className="w-6 h-6 text-accent" />,
    title: "Custom Website Development",
    description: "Premium, conversion-focused websites built from scratch — tailored to your brand, optimized for speed, and designed to turn visitors into customers.",
    status: "Live"
  },
  {
    icon: <Workflow className="w-6 h-6 text-blue-500" />,
    title: "Business Process Automation",
    description: "Custom automation workflows that eliminate repetitive tasks — connecting your CRM, emails, invoicing, and tools into seamless pipelines.",
    status: "Live"
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-pink-500" />,
    title: "AI Chatbots — All Platforms",
    description: "Deploy intelligent chatbots on Instagram, Telegram, your website, and Messenger — all trained on your business data with a unified inbox.",
    status: "Live"
  },
  {
    icon: <Search className="w-6 h-6 text-orange-500" />,
    title: "Digital Marketing & SEO",
    description: "Data-driven SEO, Google & Meta Ads, content strategy, and social media growth campaigns that put your brand in front of the right audience.",
    status: "Live"
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-purple-500" />,
    title: "Sales & Lead Generation",
    description: "Capture, qualify, and route leads automatically — 24/7 across all channels, with CRM integration and smart scoring.",
    status: "Live"
  },
  {
    icon: <Megaphone className="w-6 h-6 text-emerald-500" />,
    title: "Marketing & Retention",
    description: "WhatsApp broadcast campaigns with 98% open rates, automated re-engagement funnels, and personalized offers to maximize customer lifetime value.",
    status: "Live"
  }
];

export function FutureServices() {
  return (
    <section className="section bg-bg-surface overflow-hidden relative">
      <div className="container">
        <SectionHeading
          badge="Our Services"
          title="One partner. Every solution."
          description="Aeviq AI is not just one tool — it's a complete ecosystem of services designed to build, automate, and scale your entire business."
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={fadeUp}
              className="card relative overflow-hidden group hover:border-primary/50 transition-colors"
            >
              <div className={cn(
                "absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full",
                service.status === 'Live' 
                  ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-500' 
                  : 'bg-bg border border-border text-text-secondary'
              )}>
                {service.status === 'Live' && <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />}
                {service.status}
              </div>
              <div className="w-12 h-12 rounded-xl bg-bg border border-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-heading-4 mb-3">{service.title}</h3>
              <p className="text-body text-text-secondary">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
