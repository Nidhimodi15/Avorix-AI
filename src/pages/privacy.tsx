import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

export function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-bg">
      <div className="container max-w-4xl">
        <motion.div 
          variants={fadeUp} 
          initial="hidden" 
          animate="visible"
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-bg-surface text-text-secondary text-sm font-semibold mb-6">
            Last Updated: October 2024
          </div>
          <h1 className="text-display-lg mb-6">Privacy <span className="text-primary">Policy.</span></h1>
          <p className="text-body-xl text-text-secondary">
            How we collect, use, and protect your data.
          </p>
        </motion.div>

        <motion.div 
          variants={fadeUp} 
          initial="hidden" 
          animate="visible"
          className="prose prose-invert prose-lg max-w-none text-text-secondary"
        >
          <div className="bg-bg-surface border border-border rounded-2xl p-8 md:p-12 mb-12">
            <h2 className="text-heading-3 text-text-primary mt-0 mb-6">1. Introduction</h2>
            <p className="mb-6">
              At Aeviq AI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our application. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
            <p className="mb-8">
              We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy.
            </p>

            <h2 className="text-heading-3 text-text-primary mb-6">2. Data We Collect</h2>
            <p className="mb-4">We may collect information about you in a variety of ways. The information we may collect includes:</p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-text-secondary">
              <li><strong className="text-text-primary">Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number.</li>
              <li><strong className="text-text-primary">Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
              <li><strong className="text-text-primary">Financial Data:</strong> Financial information, such as data related to your payment method (e.g. valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services.</li>
            </ul>

            <h2 className="text-heading-3 text-text-primary mb-6">3. Use of Your Information</h2>
            <p className="mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-text-secondary">
              <li>Create and manage your account.</li>
              <li>Process your transactions and send you related information.</li>
              <li>Improve customer service and respond to your requests.</li>
              <li>Send you administrative information, such as changes to our terms, conditions, and policies.</li>
              <li>Deliver targeted advertising, newsletters, and other information regarding our services.</li>
            </ul>

            <h2 className="text-heading-3 text-text-primary mb-6">4. Disclosure of Your Information</h2>
            <p className="mb-6">
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows: By Law or to Protect Rights; Third-Party Service Providers; Marketing Communications; Business Transfers.
            </p>

            <h2 className="text-heading-3 text-text-primary mb-6">5. Security of Your Information</h2>
            <p className="mb-8">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
            </p>

            <h2 className="text-heading-3 text-text-primary mb-6">6. Meeting Preparation & Strategy Calls</h2>
            <p className="mb-8">
              To ensure the most productive experience during our product discovery and strategy meetings, we request that you prepare all necessary requirements, brand assets, and business objectives beforehand. The information discussed remains completely confidential.
            </p>

            <h2 className="text-heading-3 text-text-primary mb-6">7. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at: <br/>
              <a href="mailto:parth.hindiya@gmail.com" className="text-primary hover:underline">contacting our support team</a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
