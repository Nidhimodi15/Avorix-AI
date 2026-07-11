import React from 'react';
import { Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function FloatingCallButton() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: 1, // slight delay so it pops in after initial load
        }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
      >
        <a
          href="tel:+919664713124"
          className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-full text-white shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-1 transition-all duration-300"
          aria-label="Call Us"
        >
          {/* Pulsing rings behind the button */}
          <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-20 duration-1000"></span>
          
          <Phone className="w-6 h-6" />
        </a>
      </motion.div>
    </AnimatePresence>
  );
}
