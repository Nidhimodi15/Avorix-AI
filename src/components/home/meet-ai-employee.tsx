import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeLeft, fadeRight } from '@/lib/animations';
import { Bot, User, CheckCircle2, Calendar } from 'lucide-react';

export function MeetAIEmployee() {
  return (
    <section className="section bg-bg relative overflow-hidden">
      {/* Visual background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Text: Punchy & Short */}
          <div className="lg:w-5/12">
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                The Solution
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-text-primary mb-6 leading-[1.1]">
                An employee that <br/>
                <span className="text-gradient">never sleeps.</span>
              </h2>
              
              <p className="text-lg text-text-secondary font-light max-w-md mb-10">
                Aeviq AI seamlessly plugs into WhatsApp and your CRM to handle your entire front-line sales process on autopilot.
              </p>

              <div className="space-y-6">
                {[
                  'Responds instantly to every lead',
                  'Understands natural language and intent',
                  'Books appointments directly to calendar',
                  'Updates CRM data automatically'
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-text-primary/80 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Visual: Sleek Chat UI Mockup */}
          <div className="lg:w-7/12 w-full">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent p-[1px] shadow-2xl"
            >
              <div className="absolute inset-0 bg-primary/10 blur-[100px] -z-10 rounded-[2.5rem]" />
              
              <div className="bg-bg-surface/80 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden flex flex-col h-[500px]">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-border bg-bg/50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Bot className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-text-primary font-medium">Aeviq AI Assistant</h3>
                      <p className="text-sm text-primary flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-primary" /> Online
                      </p>
                    </div>
                  </div>
                </div>

                {/* Chat Body */}
                <div className="flex-1 p-6 space-y-6 overflow-y-auto custom-scrollbar flex flex-col justify-end">
                  
                  {/* User Message */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="self-end max-w-[80%] bg-bg-surface border border-border rounded-2xl rounded-tr-sm p-4"
                  >
                    <p className="text-text-primary/90 text-sm md:text-base">Hi, do you build custom websites for law firms? Need something fast.</p>
                    <span className="text-xs text-text-muted mt-2 block text-right">11:42 PM</span>
                  </motion.div>

                  {/* AI Response */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="self-start max-w-[80%] bg-primary/10 border border-primary/20 rounded-2xl rounded-tl-sm p-4"
                  >
                    <p className="text-text-primary/90 text-sm md:text-base leading-relaxed">
                      Yes! We specialize in lightning-fast, premium websites for law firms that convert visitors into clients. 
                      <br/><br/>
                      Would you like to schedule a quick 15-minute discovery call tomorrow to discuss your requirements?
                    </p>
                    <span className="text-xs text-primary/60 mt-2 block">11:42 PM</span>
                  </motion.div>

                  {/* User Message */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                    className="self-end max-w-[80%] bg-bg-surface border border-border rounded-2xl rounded-tr-sm p-4"
                  >
                    <p className="text-text-primary/90 text-sm md:text-base">Tomorrow at 10 AM works for me.</p>
                  </motion.div>
                  
                  {/* AI Interactive Card */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.0 }}
                    className="self-start w-[80%] max-w-sm bg-bg border border-border rounded-2xl overflow-hidden shadow-lg"
                  >
                    <div className="p-4 bg-primary/10 border-b border-border flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="text-text-primary font-medium">Appointment Confirmed</span>
                    </div>
                    <div className="p-4 bg-bg-surface space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-text-secondary">Date:</span>
                        <span className="text-text-primary">Tomorrow, 10:00 AM</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-text-secondary">Event:</span>
                        <span className="text-text-primary">Discovery Call</span>
                      </div>
                      <div className="mt-4 pt-4 border-t border-border text-xs text-primary text-center">
                        Invite sent to calendar & CRM updated.
                      </div>
                    </div>
                  </motion.div>

                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
