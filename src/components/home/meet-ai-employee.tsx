import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Brain, BoltIcon, X } from 'lucide-react';
import { fadeUp, fadeLeft, fadeRight } from '@/lib/animations';
import { SectionHeading } from '../shared/section-heading';
import { Badge } from '../ui/badge';

export function MeetAIEmployee() {
  return (
    <section className="section overflow-hidden bg-bg relative">
      {/* Background gradients */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container relative z-10">
        <SectionHeading
          badge="The Solution"
          title="Meet your new top performer"
          description="Aeviq AI isn't just a chatbot. It's an intelligent employee that understands context, takes action, and drives revenue."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Premium Glassmorphic Comparison UI */}
          <motion.div 
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative p-1 rounded-3xl bg-gradient-to-b from-border/50 to-bg-surface shadow-2xl overflow-hidden"
          >
            <div className="bg-bg rounded-[22px] overflow-hidden flex flex-col md:flex-row relative z-10">
              
              {/* Before Column (Muted) */}
              <div className="flex-1 p-8 bg-bg-surface/50 border-r border-border/50">
                <div className="flex items-center justify-between mb-8">
                  <h4 className="text-heading-4 text-text-muted">Human-only Support</h4>
                  <div className="bg-destructive/10 text-destructive text-xs font-bold px-3 py-1 rounded-full">Before</div>
                </div>
                <ul className="space-y-5">
                  {[
                    'Hours to respond to leads', 
                    'Missed inquiries after 5 PM', 
                    'Staff overwhelmed by FAQs', 
                    'Inconsistent brand voice'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-muted text-sm leading-relaxed">
                      <X className="w-4 h-4 text-destructive/70 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* After Column (Glowing/Premium) */}
              <div className="flex-1 p-8 bg-gradient-to-br from-primary/5 to-transparent relative">
                {/* Subtle inner glow */}
                <div className="absolute inset-0 bg-primary/5 rounded-[22px] pointer-events-none border border-primary/20" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <h4 className="text-heading-4 text-white">Your AI Employee</h4>
                    <div className="bg-primary text-white shadow-glow-sm text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Zap className="w-3 h-3 fill-current" /> Aeviq AI
                    </div>
                  </div>
                  <ul className="space-y-5">
                    {[
                      'Sub-3 second instant responses', 
                      'Captures and qualifies leads 24/7', 
                      'Frees staff for high-value sales', 
                      'Perfectly consistent answers always'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed font-medium">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 drop-shadow-sm" />
                        <span className="text-white/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
            <Badge variant="accent" className="mb-6 shadow-glow-sm">Works While You Sleep</Badge>
            <h3 className="text-heading-2 mb-6 leading-tight">
              Never miss another <br/>
              <span className="text-gradient">sales opportunity.</span>
            </h3>
            
            <p className="text-body-lg text-text-secondary mb-10 leading-relaxed">
              While your competitors are making customers wait until Monday morning, your AI employee is qualifying leads, booking appointments, and closing deals at 2 AM on a Sunday.
            </p>

            <div className="space-y-8">
              <div className="flex gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <Brain className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="text-heading-4 mb-2 text-white">Understands Context</h4>
                  <p className="text-body-md text-text-secondary leading-relaxed">It doesn't just look for keywords. It understands natural language, intent, and nuance just like a human would.</p>
                </div>
              </div>
              
              <div className="flex gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                  <BoltIcon className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h4 className="text-heading-4 mb-2 text-white">Takes Real Action</h4>
                  <p className="text-body-md text-text-secondary leading-relaxed">It doesn't just chat. It instantly updates your CRM, checks your calendar, and books appointments.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
