import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

export function TermsPage() {
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
          <h1 className="text-display-lg mb-6">Terms of <span className="text-primary">Service.</span></h1>
          <p className="text-body-xl text-text-secondary">
            The rules and regulations for the use of our services.
          </p>
        </motion.div>

        <motion.div 
          variants={fadeUp} 
          initial="hidden" 
          animate="visible"
          className="prose prose-invert prose-lg max-w-none text-text-secondary"
        >
          <div className="bg-bg-surface border border-border rounded-2xl p-8 md:p-12 mb-12">
            <h2 className="text-heading-3 text-text-primary mt-0 mb-6">1. Acceptance of Terms</h2>
            <p className="mb-6">
              By accessing and using Aeviq AI ("Company", "we", "our", "us"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>
            <p className="mb-8">
              ANY PARTICIPATION IN THIS SERVICE WILL CONSTITUTE ACCEPTANCE OF THIS AGREEMENT. IF YOU DO NOT AGREE TO ABIDE BY THE ABOVE, PLEASE DO NOT USE THIS SERVICE.
            </p>

            <h2 className="text-heading-3 text-text-primary mb-6">2. Provision of Services</h2>
            <p className="mb-8">
              Aeviq AI provides an AI-powered automation platform for WhatsApp. We are constantly innovating in order to provide the best possible experience for our users. You acknowledge and agree that the form and nature of the services which Aeviq AI provides may change from time to time without prior notice to you.
            </p>

            <h2 className="text-heading-3 text-text-primary mb-6">3. Use of the Services</h2>
            <p className="mb-4">In order to access certain Services, you may be required to provide information about yourself (such as identification or contact details) as part of the registration process for the Service. You agree that any registration information you give to Aeviq AI will always be accurate, correct, and up to date.</p>
            <p className="mb-8">You agree to use the Services only for purposes that are permitted by (a) the Terms and (b) any applicable law, regulation or generally accepted practices or guidelines in the relevant jurisdictions.</p>

            <h2 className="text-heading-3 text-text-primary mb-6">4. User Account, Password, and Security</h2>
            <p className="mb-8">
              You agree and understand that you are responsible for maintaining the confidentiality of passwords associated with any account you use to access the Services. Accordingly, you agree that you will be solely responsible to Aeviq AI for all activities that occur under your account.
            </p>

            <h2 className="text-heading-3 text-text-primary mb-6">5. Limitation of Liability</h2>
            <p className="mb-8">
              In no event shall Aeviq AI be liable for any direct, indirect, incidental, special, consequential or exemplary damages. This shall include, but not be limited to damages for loss of profits, business interruption, business reputation or goodwill, loss of programs or information or other intangible loss arising out of the use of or the inability to use the service.
            </p>

            <h2 className="text-heading-3 text-text-primary mb-6">6. Client Meetings & Discovery</h2>
            <p className="mb-8">
              When scheduling a product strategy or discovery meeting with our team, you agree to come prepared with relevant business requirements, objectives, and any necessary assets. This ensures our consultation is efficient and tailored to your needs.
            </p>

            <h2 className="text-heading-3 text-text-primary mb-6">7. Contact Information</h2>
            <p>
              If you have any questions regarding these Terms, please contact us at:<br/>
              <a href="mailto:parth.hindiya@gmail.com" className="text-primary hover:underline">contacting our support team</a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
