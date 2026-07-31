import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HeroSection } from '@/components/home/hero-section';
import { ProblemSection } from '@/components/home/problem-section';
import { MeetAIEmployee } from '@/components/home/meet-ai-employee';
import { FeatureShowcase } from '@/components/home/feature-showcase';
import { IndustrySolutions } from '@/components/home/industry-solutions';
import { ResultsROI } from '@/components/home/results-roi';
import { FutureServices } from '@/components/home/future-services';

import { FAQPreview } from '@/components/home/faq-preview';
import { FinalCTA } from '@/components/home/final-cta';

export function HomePage() {
  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Aeviq AI | Business Automation & AI Chatbot Agency</title>
        <meta name="description" content="Aeviq AI is your premier technology partner. We build premium websites, AI voice bots, and automated business workflows to scale your company." />
      </Helmet>
      <HeroSection />
      <ProblemSection />
      <MeetAIEmployee />
      <FeatureShowcase />
      <IndustrySolutions />
      <ResultsROI />
      <FutureServices />

      <FAQPreview />
      <FinalCTA />
    </div>
  );
}
