import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, CheckCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export function WhatsAppMockup() {
  const [step, setStep] = useState(0);

  // Animation sequence for the chat
  useEffect(() => {
    const sequence = [
      { step: 1, delay: 1500 }, // User message appears
      { step: 2, delay: 2500 }, // AI starts typing
      { step: 3, delay: 4500 }, // AI message appears
      { step: 4, delay: 6000 }, // User second message
      { step: 5, delay: 7000 }, // AI typing again
      { step: 6, delay: 9000 }, // AI final message
    ];

    let timeouts: ReturnType<typeof setTimeout>[] = [];

    const runSequence = () => {
      setStep(0);
      timeouts.forEach(clearTimeout);
      timeouts = sequence.map((s) =>
        setTimeout(() => setStep(s.step), s.delay)
      );
    };

    runSequence();
    const interval = setInterval(runSequence, 12000); // Loop every 12s

    return () => {
      timeouts.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="whatsapp-mockup relative mx-auto lg:mx-0">
      {/* Decorative elements behind phone */}
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 to-accent/20 blur-[60px] rounded-full" />

      {/* Phone Frame */}
      <div className="bg-white dark:bg-[#111B21] rounded-[2.5rem] border-[8px] border-slate-800 dark:border-slate-700 shadow-2xl overflow-hidden relative">
        {/* Top notch */}
        <div className="absolute top-0 inset-x-0 h-6 bg-slate-800 dark:bg-slate-700 rounded-b-3xl w-40 mx-auto z-20" />

        {/* WhatsApp Header */}
        <div className="bg-[#008069] dark:bg-[#202C33] p-4 pt-8 text-white flex items-center gap-3 relative z-10">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center overflow-hidden shrink-0">
            <img src="https://ui-avatars.com/api/?name=Aeviq+AI&background=random&color=fff" alt="Aeviq AI" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="font-semibold leading-tight">Aeviq AI Employee</h3>
            <p className="text-xs text-white/80">Online</p>
          </div>
        </div>

        {/* Chat Body */}
        <div className="bg-[#EFEAE2] dark:bg-[#0B141A] h-[400px] p-4 flex flex-col gap-3 overflow-hidden relative">
          {/* Chat Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }} />

          {/* User Message 1 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: step >= 1 ? 1 : 0, y: step >= 1 ? 0 : 10 }}
            className={cn("chat-bubble outgoing", step >= 1 ? "block" : "hidden")}
          >
            <p>Hi, I need to book a consultation for tomorrow.</p>
            <div className="flex items-center justify-end gap-1 mt-1">
              <span className="time">10:42 AM</span>
              <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />
            </div>
          </motion.div>

          {/* AI Typing 1 */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="typing-indicator"
            >
              <span />
              <span />
              <span />
            </motion.div>
          )}

          {/* AI Message 1 */}
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95, originX: 0 }}
            animate={{ opacity: step >= 3 ? 1 : 0, y: step >= 3 ? 0 : 10, scale: step >= 3 ? 1 : 0.95 }}
            className={cn("chat-bubble incoming", step >= 3 ? "block" : "hidden")}
          >
            <p>Absolutely! I can help you with that. Are you looking for a morning or afternoon slot?</p>
            <div className="time">10:42 AM</div>
          </motion.div>

          {/* User Message 2 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: step >= 4 ? 1 : 0, y: step >= 4 ? 0 : 10 }}
            className={cn("chat-bubble outgoing", step >= 4 ? "block" : "hidden")}
          >
            <p>Morning would be great, maybe around 10 AM?</p>
            <div className="flex items-center justify-end gap-1 mt-1">
              <span className="time">10:43 AM</span>
              <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />
            </div>
          </motion.div>

          {/* AI Typing 2 */}
          {step === 5 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="typing-indicator"
            >
              <span />
              <span />
              <span />
            </motion.div>
          )}

          {/* AI Message 2 */}
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95, originX: 0 }}
            animate={{ opacity: step >= 6 ? 1 : 0, y: step >= 6 ? 0 : 10, scale: step >= 6 ? 1 : 0.95 }}
            className={cn("chat-bubble incoming", step >= 6 ? "block" : "hidden")}
          >
            <p>Perfect. I've booked your consultation for tomorrow at 10:00 AM. Here is your Google Meet link: <br/><a href="#" className="text-blue-500 hover:underline">meet.google.com/abc-defg-hij</a></p>
            <div className="time">10:43 AM</div>
          </motion.div>
        </div>

        {/* Input Area */}
        <div className="bg-[#F0F2F5] dark:bg-[#202C33] p-3 flex items-center gap-2">
          <div className="flex-1 bg-white dark:bg-[#2A3942] rounded-full h-10 px-4 flex items-center text-sm text-slate-400">
            Message
          </div>
          <div className="w-10 h-10 rounded-full bg-[#00A884] flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" width="24" height="24" className="text-white fill-current translate-x-[2px]">
              <path d="M1.101 21.757 23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
