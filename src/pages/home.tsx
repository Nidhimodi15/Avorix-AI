import React from 'react';
import { HeroSection } from '@/components/home/hero-section';
import { ProblemSection } from '@/components/home/problem-section';
import { MeetAIEmployee } from '@/components/home/meet-ai-employee';
import { FeatureShowcase } from '@/components/home/feature-showcase';
import { IndustrySolutions } from '@/components/home/industry-solutions';
import { ResultsROI } from '@/components/home/results-roi';
import { FutureServices } from '@/components/home/future-services';
import { PricingPreview } from '@/components/home/pricing-preview';
import { FAQPreview } from '@/components/home/faq-preview';
import { FinalCTA } from '@/components/home/final-cta';

export function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ProblemSection />
      <MeetAIEmployee />
      <FeatureShowcase />
      <IndustrySolutions />
      <ResultsROI />
      <FutureServices />
      <PricingPreview />
      <FAQPreview />
      <FinalCTA />
    </div>
  );
}
