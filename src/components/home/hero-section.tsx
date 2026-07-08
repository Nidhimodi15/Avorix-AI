import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Smartphone, Workflow, TrendingUp, MessageSquare, Search, Megaphone, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

const services = [
  {
    icon: Smartphone,
    label: 'WhatsApp AI Employee',
    description: 'Replies to every customer in 3 seconds. Even at 3AM.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    stat: '95% response rate',
  },
  {
    icon: Globe,
    label: 'Custom Website Development',
    description: 'Websites that look expensive and convert like crazy.',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    stat: '2x faster delivery',
  },
  {
    icon: Workflow,
    label: 'Business Automation',
    description: 'Kill the busywork. Automate invoices, follow-ups, data entry.',
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    stat: 'Save 20+ hrs/week',
  },
  {
    icon: TrendingUp,
    label: 'Lead Generation',
    description: 'Never miss a hot lead. Capture & qualify 24/7 automatically.',
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
    stat: '3x more leads',
  },
  {
    icon: MessageSquare,
    label: 'AI Chatbots',
    description: 'One AI brain. Works on Instagram, Telegram, your website.',
    color: 'text-pink-500',
    bg: 'bg-pink-500/10',
    stat: 'All platforms. One inbox.',
  },
  {
    icon: Search,
    label: 'Digital Marketing & SEO',
    description: 'Get found on Google. Run ads that actually make money.',
    color: 'text-yellow-500',
    bg: 'bg-yellow-500/10',
    stat: '4.2x avg. ROAS',
  },
  {
    icon: Megaphone,
    label: 'Marketing & Retention',
    description: '98% open rate on WhatsApp broadcasts. Email is dead.',
    color: 'text-red-500',
    bg: 'bg-red-500/10',
    stat: '98% open rate',
  },
];

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % services.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const active = services[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section className="relative pt-24 pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-gradient-hero">
      {/* Ambient blobs */}
      <div className="absolute top-1/4 left-[5%] w-72 h-72 rounded-full blur-[100px] -z-0 opacity-40 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.4), transparent)' }} />
      <div className="absolute bottom-0 right-[8%] w-96 h-96 rounded-full blur-[120px] -z-0 opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.35), transparent)' }} />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Copy ── */}
          <div>
            {/* Eyebrow */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                7 services. One team. Zero excuses.
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
              className="text-display-lg lg:text-display-xl mb-5 text-text-primary"
            >
              Your business<br className="hidden lg:block" />
              <span className="text-gradient">grows on autopilot.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2 }}
              className="text-body-xl text-text-secondary mb-8 max-w-xl"
            >
              Aeviq AI handles the tech, marketing, and automation — so you can stop firefighting and start scaling.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10"
            >
              <Link to="/contact">
                <Button size="lg" className="rounded-xl" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Get Started Free
                </Button>
              </Link>
              <Link to="/solutions" className="flex items-center gap-1.5 text-text-secondary hover:text-primary transition-colors text-sm font-semibold group">
                See all 7 services <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.55, delay: 0.45 }}
              className="flex items-center gap-6 text-sm text-text-muted flex-wrap"
            >
              {['No long-term contracts', 'Setup in 48 hours', '24/7 support'].map((t, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Rotating Service Showcase ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Big animated service card */}
            <div className="relative bg-bg-card border border-border rounded-2xl overflow-hidden shadow-xl">
              {/* Header bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-bg-section">
                <span className="text-sm font-semibold text-text-secondary">What we do for you</span>
                <div className="flex gap-1">
                  {services.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`w-2 h-2 rounded-full transition-all ${i === activeIndex ? 'bg-primary scale-125' : 'bg-border'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Active service */}
              <div className="p-8 min-h-[280px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div className={`w-14 h-14 rounded-2xl ${active.bg} flex items-center justify-center mb-5`}>
                      <ActiveIcon className={`w-7 h-7 ${active.color}`} />
                    </div>
                    <h3 className="text-heading-3 mb-3">{active.label}</h3>
                    <p className="text-body text-text-secondary mb-5">{active.description}</p>
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold ${active.bg} ${active.color}`}>
                      ✦ {active.stat}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Services list */}
              <div className="border-t border-border px-5 py-3 grid grid-cols-3 sm:grid-cols-4 gap-2">
                {services.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all text-xs font-medium ${
                        i === activeIndex
                          ? `${s.bg} ${s.color}`
                          : 'text-text-muted hover:text-text-primary hover:bg-bg-surface'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-center leading-tight hidden sm:block">{s.label.split(' ').slice(0, 2).join(' ')}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Floating stat card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-10 top-1/3 hidden lg:block z-20"
            >
              <div className="glass-card rounded-xl p-3 shadow-lg flex items-center gap-3 border border-border">
                <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold text-sm">✓</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-text-primary">New lead captured</p>
                  <p className="text-xs text-text-muted">2 seconds ago · WhatsApp</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -right-6 bottom-1/3 hidden lg:block z-20"
            >
              <div className="glass-card rounded-xl p-3 shadow-lg border border-border">
                <p className="text-xs font-bold text-text-primary mb-0.5">Monthly revenue</p>
                <p className="text-lg font-bold text-primary">+₹2.4L</p>
                <p className="text-xs text-text-muted">via automation</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
