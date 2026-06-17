import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { CTABanner } from '@/components/shared/cta-banner';
import { faqData } from '@/data/faq';
import { fadeUp } from '@/lib/animations';
import { cn } from '@/lib/utils';

export function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(faqData[0].category);
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Filter FAQs based on search query
  const filteredData = faqData.map((category, catIndex) => {
    const filteredQuestions = category.questions.filter(
      q => q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
           q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    return {
      ...category,
      originalIndex: catIndex,
      questions: filteredQuestions
    };
  }).filter(category => category.questions.length > 0);

  const displayData = searchQuery ? filteredData : faqData.filter(c => c.category === activeCategory);

  return (
    <div className="pt-32 flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="section pb-12 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-hero -z-10" />
        <div className="container-tight relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <h1 className="text-display-lg mb-6">
              Frequently asked <span className="text-gradient">questions.</span>
            </h1>
            <p className="text-body-xl text-text-secondary mb-10">
              Everything you need to know about Aeviq AI, billing, and technical integration.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-bg-surface text-text-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="pb-24">
        <div className="container max-w-4xl">
          
          {/* Category Tabs (only show if not searching) */}
          {!searchQuery && (
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {faqData.map((category) => (
                <button
                  key={category.category}
                  onClick={() => setActiveCategory(category.category)}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border",
                    activeCategory === category.category
                      ? "bg-primary border-primary text-white shadow-md"
                      : "bg-bg-surface border-border text-text-secondary hover:border-primary/50"
                  )}
                >
                  {category.category}
                </button>
              ))}
            </div>
          )}

          {/* Search Results Summary */}
          {searchQuery && (
            <div className="mb-8 text-center text-text-secondary">
              Found {filteredData.reduce((acc, cat) => acc + cat.questions.length, 0)} results for "{searchQuery}"
            </div>
          )}

          {/* FAQ Accordion List */}
          <div className="space-y-8">
            {displayData.map((category, cIdx) => {
              const actualCatIndex = 'originalIndex' in category ? Number((category as any).originalIndex) : faqData.findIndex(c => c.category === category.category);
              
              return (
                <motion.div 
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {searchQuery && (
                    <h3 className="text-heading-4 mb-4 text-primary">{category.category}</h3>
                  )}
                  
                  <div className="divide-y divide-border border-y border-border">
                    {category.questions.map((faq, qIdx) => {
                      const itemKey = `${actualCatIndex}-${qIdx}`;
                      // Auto-open first item if not searching, or all items if searching
                      const isOpen = searchQuery ? true : openItems[itemKey] ?? (cIdx === 0 && qIdx === 0);

                      return (
                        <div key={qIdx} className="py-6">
                          <button
                            onClick={() => toggleItem(actualCatIndex, qIdx)}
                            className="flex items-center justify-between w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg group"
                            aria-expanded={isOpen}
                          >
                            <span className="text-lg font-semibold text-text-primary pr-8 group-hover:text-primary transition-colors">
                              {faq.question}
                            </span>
                            <div className={cn(
                              "w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300",
                              isOpen ? "border-primary bg-primary text-white rotate-180" : "border-border bg-bg-surface text-text-secondary group-hover:border-primary/50"
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
                  </div>
                </motion.div>
              );
            })}

            {displayData.length === 0 && (
              <div className="text-center py-12">
                <p className="text-body-lg text-text-secondary mb-4">No results found for "{searchQuery}"</p>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="text-primary hover:underline font-medium"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <CTABanner 
        title="Still have questions?"
        description="Our team is here to help. Reach out to us and we'll get back to you as soon as possible."
        primaryButtonText="Contact Support"
        primaryButtonLink="/contact"
        secondaryButtonText="Book a Demo"
        secondaryButtonLink="/demo"
        withSparkles={false}
      />
    </div>
  );
}
