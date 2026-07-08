import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Smartphone, Workflow, TrendingUp, MessageSquare, Search, Megaphone, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

const services = [
  {
    icon: Smartphone,
    label: 'WhatsApp AI Employee',
    short: 'WhatsApp',
    description: 'Replies to every customer in 3 seconds. Even at 3AM.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    stat: '95% response rate',
  },
  {
    icon: Globe,
    label: 'Custom Websites',
    short: 'Websites',
    description: 'Websites that look expensive and convert like crazy.',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    stat: '2x faster delivery',
  },
  {
    icon: Workflow,
    label: 'Business Automation',
    short: 'Automation',
    description: 'Kill the busywork. Automate invoices, follow-ups, data entry.',
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    stat: 'Save 20+ hrs/week',
  },
  {
    icon: TrendingUp,
    label: 'Lead Generation',
    short: 'Lead Gen',
    description: 'Never miss a hot lead. Capture & qualify 24/7 automatically.',
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
    stat: '3x more leads',
  },
  {
    icon: MessageSquare,
    label: 'AI Chatbots',
    short: 'Chatbots',
    description: 'One AI brain. Works on Instagram, Telegram, your website.',
    color: 'text-pink-500',
    bg: 'bg-pink-500/10',
    stat: 'All platforms. One inbox.',
  },
  {
    icon: Search,
    label: 'Digital Marketing & SEO',
    short: 'SEO/Ads',
    description: 'Get found on Google. Run ads that actually make money.',
    color: 'text-yellow-500',
    bg: 'bg-yellow-500/10',
    stat: '4.2x avg. ROAS',
  },
  {
    icon: Megaphone,
    label: 'Marketing & Retention',
    short: 'Retention',
    description: '98% open rate on WhatsApp broadcasts. Email is dead.',
    color: 'text-red-500',
    bg: 'bg-red-500/10',
    stat: '98% open rate',
  },
];

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % services.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const active = services[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section className="relative pt-24 pb-12 lg:pt-36 lg:pb-20 overflow-hidden bg-gradient-hero">
      {/* Ambient blobs */}
      <div className="absolute top-1/4 left-[5%] w-48 h-48 lg:w-72 lg:h-72 rounded-full blur-[80px] lg:blur-[100px] -z-0 opacity-40 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.4), transparent)' }} />
      <div className="absolute bottom-0 right-[5%] w-64 h-64 lg:w-96 lg:h-96 rounded-full blur-[100px] lg:blur-[120px] -z-0 opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.35), transparent)' }} />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* ── LEFT: Copy ── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Eyebrow */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
                7 services. One team. Zero excuses.
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
              className="text-display-lg lg:text-display-xl mb-4 text-text-primary"
            >
              Your business{' '}
              <span className="text-gradient">grows on autopilot.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2 }}
              className="text-body lg:text-body-xl text-text-secondary mb-7 max-w-xl"
            >
              Aeviq AI handles the tech, marketing, and automation — so you can stop firefighting and start scaling.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-7"
            >
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full rounded-xl" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Get Started Free
                </Button>
              </Link>
              <Link
                to="/solutions"
                className="flex items-center justify-center gap-1.5 text-text-secondary hover:text-primary transition-colors text-sm font-semibold group py-2 sm:py-0"
              >
                See all 7 services
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.55, delay: 0.45 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs sm:text-sm text-text-muted"
            >
              {['No long-term contracts', 'Setup in 48 hours', '24/7 support'].map((t, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Rotating Service Showcase ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="w-full"
          >
            <div className="bg-bg-card border border-border rounded-2xl overflow-hidden shadow-xl">
              {/* Header bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-bg-section">
                <span className="text-xs sm:text-sm font-semibold text-text-secondary">What we do for you</span>
                <div className="flex gap-1.5">
                  {services.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      aria-label={`View ${services[i].short}`}
                      className={`w-2 h-2 rounded-full transition-all ${i === activeIndex ? 'bg-primary scale-125' : 'bg-border hover:bg-text-muted'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Active service body */}
              <div className="p-5 sm:p-7 min-h-[200px] sm:min-h-[220px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col h-full"
                  >
                    <div className={`w-12 h-12 rounded-2xl ${active.bg} flex items-center justify-center mb-4`}>
                      <ActiveIcon className={`w-6 h-6 ${active.color}`} />
                    </div>
                    <h3 className="text-heading-3 mb-2 leading-snug">{active.label}</h3>
                    <p className="text-body-sm text-text-secondary mb-4 flex-1">{active.description}</p>
                    <div className={`self-start inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold ${active.bg} ${active.color}`}>
                      ✦ {active.stat}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Service icon row — 7 equally spaced, icons only on very small screens */}
              <div className="border-t border-border bg-bg-section px-2 py-2 flex items-center justify-between overflow-x-hidden">
                {services.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      title={s.label}
                      className={`flex flex-col items-center gap-0.5 px-1 py-2 rounded-xl transition-all flex-1 min-w-0 ${
                        i === activeIndex
                          ? `${s.bg} ${s.color}`
                          : 'text-text-muted hover:text-text-primary hover:bg-bg-card'
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="text-[9px] sm:text-[10px] font-medium text-center leading-tight w-full truncate px-0.5">
                        {s.short}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
