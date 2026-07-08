export const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small businesses getting started with AI on WhatsApp.',
    price: 49,
    period: '/month',
    features: [
      'Basic Website/Landing Page',
      'Simple Lead Capture & Storage',
      'Basic Automation Workflows',
      'Standard AI Setup',
      'Basic Analytics',
      'Email Support',
    ],
    cta: 'Start Free Trial',
    featured: false,
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'For growing businesses that need more power and integrations.',
    price: 149,
    period: '/month',
    features: [
      'Custom Multi-page Website',
      'Advanced Lead Generation & Scoring',
      'Full Business Automation Setup',
      'AI Chatbot Integration',
      'CRM Integration',
      'Digital Marketing Setup',
      'Advanced Analytics Dashboard',
      'Priority Email & Chat Support',
    ],
    cta: 'Start Free Trial',
    featured: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large organizations with custom needs and high volume.',
    price: null,
    period: '',
    features: [
      'Complete Tech Infrastructure',
      'Custom AI Model Training',
      'Full CRM & ERP Suite Integration',
      'Complex Workflow Automation',
      'Dedicated Account Manager',
      'SLA Guarantee (99.9% uptime)',
      'Custom Analytics & Reporting',
      'Advanced SEO & Ad Campaigns',
    ],
    cta: 'Contact Sales',
    featured: false,
  },
];

export const pricingFAQ = [
  {
    question: 'Can I try Aeviq AI for free?',
    answer: 'Yes! Both our Starter and Professional plans come with a 14-day free trial. No credit card required. You\'ll have full access to all features during the trial period.',
  },
  {
    question: 'What happens after my trial ends?',
    answer: 'After your 14-day trial, you can choose a plan that fits your needs. If you decide not to continue, your account will be paused—no charges, no pressure.',
  },
  {
    question: 'Can I change plans later?',
    answer: 'Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any charges.',
  },
  {
    question: 'Do you offer annual billing?',
    answer: 'Yes, we offer annual billing with a 20% discount. Contact our sales team to learn more about annual pricing.',
  },
  {
    question: 'What\'s included in the Enterprise plan?',
    answer: 'The Enterprise plan is fully customizable. It includes everything in Professional, plus unlimited capacity, custom AI training, dedicated support, SLA guarantees, and more. Contact sales for a tailored quote.',
  },
];
