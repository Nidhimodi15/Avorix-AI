import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

export function MeetAIEmployee() {
  return (
    <section className="section bg-bg border-t border-white/5">
      <div className="container max-w-4xl mx-auto py-12 md:py-24">
        
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1] mb-12">
            Your new <br className="hidden md:block"/>
            top performer <br className="hidden md:block"/>
            <span className="text-white/40">never sleeps.</span>
          </h2>
          
          <div className="space-y-12 max-w-2xl">
            <div className="border-l border-white/10 pl-6 md:pl-8">
              <h3 className="text-2xl font-medium text-white mb-3">Sub-3 second responses.</h3>
              <p className="text-lg text-text-secondary/70 font-light">
                While competitors make customers wait until Monday, your AI employee qualifies leads and books appointments at 2 AM on a Sunday.
              </p>
            </div>
            
            <div className="border-l border-white/10 pl-6 md:pl-8">
              <h3 className="text-2xl font-medium text-white mb-3">Understands context.</h3>
              <p className="text-lg text-text-secondary/70 font-light">
                It doesn't just look for keywords. It understands natural language, intent, and nuance exactly like a human would.
              </p>
            </div>
            
            <div className="border-l border-white/10 pl-6 md:pl-8">
              <h3 className="text-2xl font-medium text-white mb-3">Takes real action.</h3>
              <p className="text-lg text-text-secondary/70 font-light">
                It doesn't just chat. It instantly updates your CRM, checks your calendar, and books appointments seamlessly.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
