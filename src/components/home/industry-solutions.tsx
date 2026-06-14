import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';
import { SectionHeading } from '../shared/section-heading';
import { industries } from '@/data/industries';
import { Button } from '../ui/button';

export function IndustrySolutions() {
  // Only show top 8 industries on home page
  const showcaseIndustries = industries.slice(0, 8);

  return (
    <section className="section overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
      
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <SectionHeading
            badge="Universal Application"
            title="Built for your industry"
            description="Whether you're booking patients or selling properties, Avorix AI adapts to your specific business needs."
            align="left"
            className="mb-0"
          />
          
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="shrink-0 pb-2"
          >
            <Link to="/industries">
              <Button variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>
                View All Industries
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {showcaseIndustries.map((industry) => {
            const Icon = industry.icon;
            return (
              <motion.div 
                key={industry.id}
                variants={staggerItem}
              >
                <Link 
                  to="/industries" 
                  className="card block h-full group hover:bg-primary hover:border-primary transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-bg-surface flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-white/20">
                    <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-heading-4 mb-3 transition-colors duration-300 group-hover:text-white">
                    {industry.name}
                  </h3>
                  
                  <p className="text-body-sm text-text-secondary mb-6 transition-colors duration-300 group-hover:text-white/80 line-clamp-2">
                    {industry.description}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-border transition-colors duration-300 group-hover:border-white/20 flex items-center justify-between">
                    <span className="text-sm font-semibold text-primary transition-colors duration-300 group-hover:text-white">
                      Learn more
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary transition-all duration-300 group-hover:text-white group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
