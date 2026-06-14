import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CTABanner } from '@/components/shared/cta-banner';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';
import { cn } from '@/lib/utils';

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: 'How AI is Reshaping WhatsApp Commerce in 2024',
    excerpt: 'Discover the latest trends in conversational commerce and how businesses are using AI to drive sales directly within WhatsApp.',
    category: 'Trends',
    date: 'Oct 15, 2024',
    author: 'Sarah Chen',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'The Ultimate Guide to Automating Customer Support',
    excerpt: 'A step-by-step framework for implementing AI support without losing the human touch or frustrating your customers.',
    category: 'Guide',
    date: 'Oct 02, 2024',
    author: 'Alex Rivera',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Why Real Estate Agents are Ditching Email for WhatsApp',
    excerpt: 'How top-performing realtors are using automated WhatsApp sequences to qualify leads and book more property viewings.',
    category: 'Industry',
    date: 'Sep 28, 2024',
    author: 'Marcus Johnson',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 4,
    title: '5 WhatsApp Broadcast Templates with 90%+ Open Rates',
    excerpt: 'Steal these proven message templates to re-engage dead leads and drive instant conversions for your next promotion.',
    category: 'Marketing',
    date: 'Sep 15, 2024',
    author: 'Priya Patel',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Product Update: Enhanced CRM Integrations',
    excerpt: 'We\'ve just released deep two-way sync for Salesforce, HubSpot, and Pipedrive. Here\'s everything you need to know.',
    category: 'Product',
    date: 'Sep 05, 2024',
    author: 'Sarah Chen',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Measuring ROI: How to Track WhatsApp Campaign Success',
    excerpt: 'Stop guessing. Learn the exact metrics you need to track to prove the ROI of your conversational marketing efforts.',
    category: 'Analytics',
    date: 'Aug 22, 2024',
    author: 'Alex Rivera',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop'
  }
];

export function BlogPage() {
  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  return (
    <div className="pt-32 flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="section pb-12 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-hero -z-10" />
        <div className="container-tight relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <h1 className="text-display-lg mb-6">
              Insights on <span className="text-gradient">conversational AI.</span>
            </h1>
            <p className="text-body-xl text-text-secondary">
              Latest news, guides, and best practices for automating your business on WhatsApp.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container-wide">
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="group relative rounded-3xl overflow-hidden border border-border bg-bg-surface hover:shadow-xl transition-all duration-300"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-full overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r" />
                <div className="absolute top-6 left-6 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Featured
                </div>
              </div>
              
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                  <span className="text-primary font-semibold">{featuredPost.category}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                
                <h2 className="text-heading-2 mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                
                <p className="text-body-lg text-text-secondary mb-8">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-bg border border-border flex items-center justify-center text-text-primary font-bold">
                      {featuredPost.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text-primary">{featuredPost.author}</p>
                      <p className="text-xs text-text-muted">{featuredPost.date}</p>
                    </div>
                  </div>
                  
                  <Link to={`/blog/${featuredPost.id}`} className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="py-12 section-alt border-y border-border/50">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-heading-3">Latest Articles</h3>
            
            {/* Category Filter Placeholder */}
            <div className="hidden md:flex items-center gap-2">
              {['All', 'Guides', 'Product', 'Industry'].map((cat, i) => (
                <button 
                  key={cat}
                  className={cn(
                    "px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
                    i === 0 ? "bg-text-primary text-bg" : "bg-bg-surface text-text-secondary hover:text-text-primary border border-border"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {remainingPosts.map((post) => (
              <motion.div key={post.id} variants={staggerItem}>
                <Link to={`/blog/${post.id}`} className="card p-0 overflow-hidden flex flex-col h-full group hover:border-primary transition-colors">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-bg/90 backdrop-blur-sm text-text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-heading-4 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-body-sm text-text-secondary mb-6 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-xs text-text-muted">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-text-muted">
                        <User className="w-3.5 h-3.5" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-16 text-center">
            <button className="btn btn-outline">Load More Articles</button>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
