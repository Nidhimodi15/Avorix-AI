import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { SectionHeading } from '../shared/section-heading';
import { PhoneCall, Mail, LineChart } from 'lucide-react';

const upcomingServices = [
  {
    icon: <PhoneCall className="w-6 h-6 text-primary" />,
    title: "AI Voice Call Center",
    description: "Inbound and outbound AI voice agents that sound entirely human, booking appointments and resolving issues 24/7.",
    status: "Coming Soon"
  },
  {
    icon: <Mail className="w-6 h-6 text-accent" />,
    title: "Email Outreach Automation",
    description: "Hyper-personalized cold email campaigns generated and managed by AI to maximize reply rates and meeting bookings.",
    status: "In Development"
  },
  {
    icon: <LineChart className="w-6 h-6 text-green-500" />,
    title: "Predictive Analytics",
    description: "Actionable business intelligence that analyzes your sales data to predict trends and optimize operations.",
    status: "Planned"
  }
];

export function FutureServices() {
  return (
    <section className="section bg-bg-surface overflow-hidden relative">
      <div className="container">
        <SectionHeading
          badge="Product Roadmap"
          title="This is just the beginning"
          description="WhatsApp AI is our flagship service, but Aeviq AI is building a complete ecosystem of AI employees to automate your entire business."
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8 mt-12"
        >
          {upcomingServices.map((service, index) => (
            <motion.div 
              key={index}
              variants={fadeUp}
              className="card relative overflow-hidden group hover:border-primary/50 transition-colors"
            >
              <div className="absolute top-4 right-4 text-xs font-semibold px-2 py-1 rounded-full bg-bg border border-border text-text-secondary">
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
