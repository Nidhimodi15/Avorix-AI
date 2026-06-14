import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, MessageCircle, Share2, ArrowRight } from 'lucide-react';
import { Logo } from '../shared/logo';
import { Button } from '../ui/button';
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Gradient glow strip at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, var(--primary) 30%, var(--accent) 70%, transparent 100%)',
          boxShadow: '0 0 20px rgba(37,99,235,0.5)',
        }}
      />
      <div className="container-wide">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Logo />
            <p className="text-body text-text-secondary max-w-sm">
              {SITE_CONFIG.description}
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a href={SITE_CONFIG.social.twitter} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-bg-surface hover:bg-[#1DA1F2] hover:text-white transition-all duration-200 text-text-secondary hover:scale-110"
                title="Twitter">
                <MessageCircle className="w-4 h-4" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href={SITE_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-bg-surface hover:bg-[#0077B5] hover:text-white transition-all duration-200 text-text-secondary hover:scale-110"
                title="LinkedIn">
                <Globe className="w-4 h-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-bg-surface hover:bg-gradient-to-r hover:text-white transition-all duration-200 text-text-secondary hover:scale-110"
                style={{}}
                title="Instagram">
                <Share2 className="w-4 h-4" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="footer-heading">Product</h3>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/demo" className="footer-link">Book a Demo</Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="footer-heading">Company</h3>
            <ul className="flex flex-col gap-2">
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/blog" className="footer-link">Blog</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
              <li><Link to="/faq" className="footer-link">FAQ</Link></li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="footer-heading">Stay Updated</h3>
            <p className="text-sm text-text-secondary mb-4">
              Get the latest updates on AI automation and WhatsApp marketing.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="form-input text-sm py-2.5"
                required
              />
              <Button variant="primary" size="sm" className="w-full justify-between group">
                Subscribe
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-sm text-text-muted hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-text-muted hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
