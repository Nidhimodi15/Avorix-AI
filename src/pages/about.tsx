import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Shield, Zap } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { CTABanner } from '@/components/shared/cta-banner';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';

const values = [
  {
    icon: Target,
    title: 'Customer First',
    description: 'We build technology that serves the end customer just as much as the business using it.'
  },
  {
    icon: Zap,
    title: 'Speed is a Feature',
    description: 'In today\'s world, delayed responses mean lost revenue. We engineer for instant interactions.'
  },
  {
    icon: Shield,
    title: 'Trust & Privacy',
    description: 'We treat our clients\' data, and their customers\' data, with the highest level of security.'
  },
  {
    icon: Heart,
    title: 'Human-Centric AI',
    description: 'We believe AI should empower humans, taking over repetitive tasks so people can focus on meaningful work.'
  }
];

// Founders
const team = [
  { name: 'Nidhi', role: 'Technical Consultant', initials: 'N' },
  { name: 'Parth', role: 'Lead Consultant', initials: 'P' }
];

export function AboutPage() {
  return (
    <div className="pt-32 flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="section pb-12 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-hero -z-10" />
        <div className="container-tight relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <h1 className="text-display-lg mb-6">
              Building the future of <span className="text-gradient">business automation.</span>
            </h1>
            <p className="text-body-xl text-text-secondary">
              We're on a mission to help businesses of all sizes provide enterprise-grade experiences, from AI employees to custom software development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-bg-section border-y border-border/50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-heading-2 mb-6">Our Story</h2>
              <div className="space-y-4 text-body-lg text-text-secondary">
                <p>
                  Aeviq AI was born out of a simple frustration: why is it so hard for businesses to automate their workflows and scale efficiently?
                </p>
                <p>
                  We saw local businesses losing leads because of outdated tech. We saw teams drowning in repetitive queries and manual data entry. We knew there had to be a better way.
                </p>
                <p>
                  So we built a complete technology partner. Not just another software agency, but a dynamic team that provides AI chatbots, custom web development, digital marketing, and full business automation under one roof.
                </p>
                <p className="font-semibold text-text-primary">
                  Today, Aeviq AI powers digital transformations for businesses globally.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative h-[400px] rounded-3xl overflow-hidden bg-bg border border-border flex items-center justify-center p-12"
            >
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="relative z-10 text-center">
                <div className="text-display-xl font-bold text-primary mb-2">10x</div>
                <p className="text-heading-4 text-text-secondary">Average Business Growth</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading
            title="Our Values"
            description="The core principles that guide how we build our product and serve our customers."
          />
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div key={index} variants={staggerItem} className="card h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-heading-4 mb-3">{value.title}</h3>
                  <p className="text-body-sm text-text-secondary">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-bg-section border-y border-border/50">
        <div className="container-wide">
          <SectionHeading
            title="Meet the Founders"
            description="Aeviq AI is built by passionate founders solving real problems."
          />
          
          <div className="flex justify-center gap-16">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center"
              >
                <div className="w-36 h-36 mx-auto rounded-full bg-bg border border-border flex items-center justify-center mb-5 shadow-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5" />
                  <span className="text-3xl font-bold text-text-muted">{member.initials}</span>
                </div>
                <h4 className="text-lg font-semibold text-text-primary">{member.name}</h4>
                <p className="text-sm text-text-secondary">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
