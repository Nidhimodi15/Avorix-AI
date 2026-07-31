import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { getPostBySlug } from '@/lib/blog';
import { fadeUp } from '@/lib/animations';
import { CTABanner } from '@/components/shared/cta-banner';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || '');

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="pt-32 min-h-screen bg-bg flex flex-col">
      <Helmet>
        <title>{post.title} | Aeviq AI</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <article className="flex-1 container-tight pb-16">
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <Link to="/blog" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Link>

          {post.coverImage && (
            <div className="w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden mb-12 shadow-md">
              <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
            </div>
          )}

          <div className="mb-12 border-b border-border pb-8">
            <h1 className="text-display-sm lg:text-display-md mb-6">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-text-muted font-medium">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                <span>{post.author}</span>
              </div>
            </div>
          </div>

          <div className="prose prose-invert prose-lg prose-primary max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </motion.div>
      </article>

      <CTABanner />
    </div>
  );
}
