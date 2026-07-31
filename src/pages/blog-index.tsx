import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { getAllPosts } from '@/lib/blog';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';

export function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-32 pb-24 min-h-screen bg-bg-surface relative overflow-hidden">
      <Helmet>
        <title>Blog & Case Studies | Aeviq AI</title>
        <meta name="description" content="Read the latest insights on business automation, AI voice bots, and premium web development from the Aeviq AI team." />
      </Helmet>

      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/10 to-transparent blur-3xl -z-10 rounded-bl-full" />

      <div className="container-wide relative z-10">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-display-lg mb-6">
            Latest <span className="text-gradient">Insights.</span>
          </h1>
          <p className="text-body-xl text-text-secondary">
            Discover how AI and automation are transforming businesses globally.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts.map((post) => (
            <motion.div key={post.slug} variants={staggerItem} className="card group cursor-pointer h-full flex flex-col p-0 overflow-hidden">
              <Link to={`/blog/${post.slug}`} className="flex flex-col h-full">
                {post.coverImage && (
                  <div className="w-full h-48 overflow-hidden">
                    <img 
                      src={post.coverImage} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-sm text-text-muted mb-4 font-medium">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <h3 className="text-heading-4 mb-4 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-body-md text-text-secondary line-clamp-3 mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-primary font-semibold group-hover:text-primary-foreground transition-colors mt-auto">
                    Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
          {posts.length === 0 && (
            <div className="col-span-full text-center py-12 text-text-muted">
              More articles coming soon!
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
