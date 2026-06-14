import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { fadeUp } from '@/lib/animations';
import { SectionHeading } from '../shared/section-heading';
import { faqData } from '@/data/faq';
import { cn } from '@/lib/utils';

export function FAQPreview() {
  // Get top 5 questions from the first category
  const topQuestions = faqData[0].questions.slice(0, 5);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section bg-bg">
      <div className="container max-w-4xl">
        <SectionHeading
          badge="Got Questions?"
          title="Frequently asked questions"
          description="Everything you need to know about the product and billing."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="divide-y divide-border border-y border-border"
        >
          {topQuestions.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div key={index} className="py-6">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center justify-between w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold text-text-primary pr-8">
                    {faq.question}
                  </span>
                  <div className={cn(
                    "w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300",
                    isOpen ? "border-primary bg-primary text-white rotate-180" : "border-border bg-bg-surface text-text-secondary"
                  )}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-text-secondary leading-relaxed pr-12">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-text-secondary mb-4">Have a different question?</p>
          <Link to="/faq">
            <button className="btn btn-secondary">
              View all FAQs <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
