import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './components/theme-provider';
import { CustomCursor } from './components/shared/custom-cursor';
import { Navbar } from './components/layout/navbar';
import { Footer } from './components/layout/footer';
import { HomePage } from './pages/home';
import { DemoPage } from './pages/demo';
import { FeaturesPage } from './pages/features';
import { SolutionsPage } from './pages/solutions';
import { IndustriesPage } from './pages/industries';

import { AboutPage } from './pages/about';
import { ContactPage } from './pages/contact';
import { FAQPage } from './pages/faq';

import { CaseStudiesPage } from './pages/case-studies';
import { PrivacyPage } from './pages/privacy';
import { TermsPage } from './pages/terms';

// ScrollToTop component to handle routing scroll behavior
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="aeviq-theme">
      <BrowserRouter>
        <ScrollToTop />
        <CustomCursor />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 page-transition">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/industries" element={<IndustriesPage />} />

              <Route path="/demo" element={<DemoPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />

              <Route path="/faq" element={<FAQPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
