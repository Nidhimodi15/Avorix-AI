import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { Badge } from '../ui/badge';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  badge?: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  badgeIcon?: React.ReactNode;
}

export function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
  className,
  badgeIcon,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl mb-16',
        {
          'mx-auto text-center': align === 'center',
          'text-left': align === 'left',
        },
        className
      )}
    >
      {badge && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className={cn('mb-6 inline-block', {
            'flex justify-center w-full': align === 'center',
          })}
        >
          <Badge variant="primary" icon={badgeIcon}>{badge}</Badge>
        </motion.div>
      )}
      
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="text-heading-2 mb-6"
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-body-lg text-text-secondary"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
