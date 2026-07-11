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
          className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-full text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-1 transition-all duration-300"
          aria-label="Call Us"
        >
          <Phone className="w-5 h-5" />
        </a>
      </motion.div>
    </AnimatePresence>
  );
}
