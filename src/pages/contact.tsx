import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle2, ArrowRight, Sparkles, Phone } from 'lucide-react';
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
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error('Failed to send message');
      }

      setIsSuccess(true);
      reset();

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      console.warn('Backend email send failed:', err);
      alert('There was a problem sending your message. Please try emailing us directly.');
    } finally {
      setIsSubmitting(false);
    }
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
            Have questions about Aeviq AI? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto w-full flex-1">

          {/* Left: Contact Info */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex flex-col gap-6"
          >


            {/* Founder Direct Email Cards */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-text-muted uppercase tracking-widest px-1">Reach Our Team Directly</h4>

              {/* Technical Support */}
              <a
                href="mailto:nidhimodi970@gmail.com"
                className="card flex items-center gap-5 group hover:border-primary/50 transition-all duration-300 cursor-pointer !p-5"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-text-primary">Technical Support</h4>
                  <p className="text-xs text-text-muted font-medium">For technical inquiries</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-secondary group-hover:text-primary transition-colors shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>

              {/* General Inquiries */}
              <a
                href="mailto:parth.hindiya@gmail.com"
                className="card flex items-center gap-5 group hover:border-accent/50 transition-all duration-300 cursor-pointer !p-5"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-accent to-primary flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-text-primary">General Inquiries</h4>
                  <p className="text-xs text-text-muted font-medium">For business & sales</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-secondary group-hover:text-accent transition-colors shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>

              <h4 className="text-sm font-semibold text-text-muted uppercase tracking-widest px-1 pt-4">Prefer to talk?</h4>

              {/* Phone */}
              <a
                href="tel:+919664713124"
                className="card flex items-center gap-5 group hover:border-emerald-500/50 transition-all duration-300 cursor-pointer !p-5"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white text-lg font-bold shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-text-primary">Call Us Directly</h4>
                  <p className="text-xs text-text-muted font-medium">Mon-Sat, 9AM-7PM</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-secondary group-hover:text-emerald-500 transition-colors shrink-0">
                  <span className="font-medium">+91 96647 13124</span>
                </div>
              </a>
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
      </div>
    </div>
  );
}
