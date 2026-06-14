import React from 'react';
import { HeroSection } from '@/components/home/hero-section';
import { TrustedBy } from '@/components/home/trusted-by';
import { ProblemSection } from '@/components/home/problem-section';
import { MeetAIEmployee } from '@/components/home/meet-ai-employee';
import { FeatureShowcase } from '@/components/home/feature-showcase';
import { IndustrySolutions } from '@/components/home/industry-solutions';
import { ResultsROI } from '@/components/home/results-roi';
import { Testimonials } from '@/components/home/testimonials';
import { PricingPreview } from '@/components/home/pricing-preview';
import { FAQPreview } from '@/components/home/faq-preview';
import { FinalCTA } from '@/components/home/final-cta';

export function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <TrustedBy />
      <ProblemSection />
      <MeetAIEmployee />
      <FeatureShowcase />
      <IndustrySolutions />
      <ResultsROI />
      <Testimonials />
      <PricingPreview />
      <FAQPreview />
      <FinalCTA />
    </div>
  );
}
