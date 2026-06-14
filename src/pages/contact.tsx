import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { fadeUp, fadeLeft, fadeRight } from '@/lib/animations';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  company: z.string().optional(),
  subject: z.string().min(2, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden flex flex-col">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="container-wide flex-1 flex flex-col">
        <motion.div 
          variants={fadeUp} 
          initial="hidden" 
          animate="visible"
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h1 className="text-display-lg mb-6">
            Get in <span className="text-primary">touch.</span>
          </h1>
          <p className="text-body-xl text-text-secondary">
            Have questions about Avorix AI? Our team is ready to help. Fill out the form below or reach out directly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto w-full flex-1">
          
          {/* Left: Contact Info */}
          <motion.div 
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <div className="card h-full flex flex-col justify-center">
              <h3 className="text-heading-3 mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Email Us</h4>
                    <p className="text-text-secondary mb-1">We'll respond within 24 hours.</p>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary hover:underline font-medium">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Call Us</h4>
                    <p className="text-text-secondary mb-1">Mon-Fri from 9am to 6pm EST.</p>
                    <a href={`tel:${SITE_CONFIG.phone}`} className="text-primary hover:underline font-medium">
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Visit Us</h4>
                    <p className="text-text-secondary">
                      100 Innovation Drive<br />
                      Suite 400<br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div 
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            <div className="card relative overflow-hidden">
              <AnimatePresence>
                {isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-bg-card/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-8"
                  >
                    <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-accent" />
                    </div>
                    <h3 className="text-heading-3 mb-2">Message Sent!</h3>
                    <p className="text-text-secondary">We've received your message and will get back to you shortly.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <h3 className="text-heading-3 mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input 
                      {...register('name')} 
                      className={cn("form-input", errors.name && "border-destructive")} 
                      placeholder="Jane Doe"
                    />
                    {errors.name && <p className="form-error">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="form-label">Email Address *</label>
                    <input 
                      {...register('email')} 
                      type="email"
                      className={cn("form-input", errors.email && "border-destructive")} 
                      placeholder="jane@example.com"
                    />
                    {errors.email && <p className="form-error">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">Company (Optional)</label>
                    <input 
                      {...register('company')} 
                      className="form-input" 
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div>
                    <label className="form-label">Subject *</label>
                    <input 
                      {...register('subject')} 
                      className={cn("form-input", errors.subject && "border-destructive")} 
                      placeholder="How can we help?"
                    />
                    {errors.subject && <p className="form-error">{errors.subject.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="form-label">Message *</label>
                  <textarea 
                    {...register('message')} 
                    className={cn("form-textarea", errors.message && "border-destructive")} 
                    placeholder="Tell us a bit about your needs..."
                    rows={5}
                  />
                  {errors.message && <p className="form-error">{errors.message.message}</p>}
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  isLoading={isSubmitting}
                  rightIcon={!isSubmitting ? <Send className="w-5 h-5" /> : undefined}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Founders / Startup Owners Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto w-full mt-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-heading-2 mb-4">Direct Contact with Founders</h2>
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
              Want to discuss strategic partnerships, enterprise integrations, or investment opportunities? Reach out directly to our founders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Owner 1: Nidhi Modi */}
            <div className="card flex flex-col md:flex-row items-center md:items-start gap-6 relative overflow-hidden group hover:border-primary transition-all duration-300">
              <div className="absolute top-0 right-0 bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-bl-xl">
                Co-Founder & CEO
              </div>
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white text-2xl font-bold shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300">
                NM
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-heading-3 mb-2">Nidhi Modi</h3>
                <p className="text-sm font-semibold text-text-muted mb-4">Startup Owner</p>
                
                <div className="space-y-2.5">
                  <a href="mailto:nidhimodi970@gmail.com" className="flex items-center justify-center md:justify-start gap-2.5 text-text-secondary hover:text-primary transition-colors text-sm">
                    <Mail className="w-4 h-4 text-primary" />
                    nidhimodi970@gmail.com
                  </a>
                  <a href="tel:8490901517" className="flex items-center justify-center md:justify-start gap-2.5 text-text-secondary hover:text-accent transition-colors text-sm">
                    <Phone className="w-4 h-4 text-accent" />
                    +91 84909 01517
                  </a>
                </div>
              </div>
            </div>

            {/* Owner 2: Parth Hindiya */}
            <div className="card flex flex-col md:flex-row items-center md:items-start gap-6 relative overflow-hidden group hover:border-accent transition-all duration-300">
              <div className="absolute top-0 right-0 bg-accent/10 text-accent text-xs font-semibold px-4 py-1.5 rounded-bl-xl">
                Co-Founder & CTO
              </div>
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-accent to-primary flex items-center justify-center text-white text-2xl font-bold shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300">
                PH
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-heading-3 mb-2">Parth Hindiya</h3>
                <p className="text-sm font-semibold text-text-muted mb-4">Startup Owner</p>
                
                <div className="space-y-2.5">
                  <a href="mailto:parth.hindiya@gmail.com" className="flex items-center justify-center md:justify-start gap-2.5 text-text-secondary hover:text-primary transition-colors text-sm">
                    <Mail className="w-4 h-4 text-primary" />
                    parth.hindiya@gmail.com
                  </a>
                  <a href="tel:9664713124" className="flex items-center justify-center md:justify-start gap-2.5 text-text-secondary hover:text-accent transition-colors text-sm">
                    <Phone className="w-4 h-4 text-accent" />
                    +91 96647 13124
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
