import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Brain, BoltIcon } from 'lucide-react';
import { fadeUp, fadeLeft, fadeRight } from '@/lib/animations';
import { SectionHeading } from '../shared/section-heading';
import { Badge } from '../ui/badge';

export function MeetAIEmployee() {
  return (
    <section className="section overflow-hidden">
      <div className="container">
        <SectionHeading
          badge="The Solution"
          title="Meet your new top performer"
          description="Aeviq AI isn't just a chatbot. It's an intelligent employee that understands context, takes action, and drives revenue."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual/Before-After */}
          <motion.div 
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl -m-6 -z-10" />
            
            <div className="flex flex-col gap-6">
              {/* Before */}
              <div className="card-flat border-dashed border-2 bg-transparent opacity-60 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-destructive text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Before</div>
                <h4 className="text-heading-4 mb-4 text-text-muted">Human-only Support</h4>
                <ul className="space-y-3">
                  {['Hours to respond', 'Missed leads after 5 PM', 'Overwhelmed staff', 'Inconsistent answers'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-text-muted">
                      <div className="w-5 h-5 rounded-full border border-destructive flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 rounded-full bg-destructive" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* After (Aeviq AI) */}
              <div className="card relative overflow-hidden border-primary shadow-glow">
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1">
                  <Zap className="w-3 h-3 fill-current" /> With Aeviq AI
                </div>
                <h4 className="text-heading-4 mb-4 text-primary">Your AI Employee</h4>
                <ul className="space-y-3">
                  {['Sub-3 second responses', 'Captures leads 24/7/365', 'Staff focuses on high-value tasks', 'Perfectly consistent answers'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Badge variant="accent" className="mb-6">Works While You Sleep</Badge>
            <h3 className="text-heading-2 mb-6">
              Never miss another <br/>
              <span className="text-gradient">sales opportunity.</span>
            </h3>
            
            <p className="text-body-lg text-text-secondary mb-8">
              While your competitors are making customers wait until Monday morning, your AI employee is qualifying leads, booking appointments, and closing deals at 2 AM on a Sunday.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-heading-4 mb-1">Understands Context</h4>
                  <p className="text-body text-text-secondary">It doesn't just look for keywords. It understands natural language, intent, and nuance just like a human would.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center shrink-0">
                  <BoltIcon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-heading-4 mb-1">Takes Real Action</h4>
                  <p className="text-body text-text-secondary">It doesn't just chat. It updates your CRM, checks your calendar, and books appointments instantly.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
