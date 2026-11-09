import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { IntroSequence, useIntro } from '@/components/animation/IntroSequence';
import { CTATransition } from '@/components/animation/CTATransition';
import { loader } from '@/content/siteContent';

// Lazy-loaded routes as required by Step 4
const HomePage = lazy(() => import('@/pages/HomePage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const EventsPage = lazy(() => import('@/pages/EventsPage'));
const RulesPage = lazy(() => import('@/pages/RulesPage'));
const FaqPage = lazy(() => import('@/pages/FaqPage'));
const RegisterPage = lazy(() => import('@/pages/RegisterPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

/**
 * Ensures window scroll resets to top upon route transitions.
 */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

/**
 * Application Shell inside IntroSequence:
 * - Manages `.ambient-active` body class gating post-intro CSS animations.
 * - Houses persistent Navbar, lazy-loaded page routes with Suspense fallback, and Footer.
 */
const AppShell: React.FC = () => {
  const { hasHandoffStarted } = useIntro();

  React.useEffect(() => {
    if (hasHandoffStarted) {
      document.body.classList.add('ambient-active');
    }
    return () => {
      document.body.classList.remove('ambient-active');
    };
  }, [hasHandoffStarted]);

  return (
    <div className="min-h-screen bg-background-void text-ctf-text font-body selection:bg-accent-green selection:text-background-void relative overflow-x-hidden flex flex-col justify-between">
      <ScrollToTop />

      {/* Global Fixed Navigation Bar */}
      <Navbar />

      {/* Routed Page Content */}
      <div className="flex-1">
        <Suspense
          fallback={
            <div
              className="min-h-[70vh] flex flex-col items-center justify-center font-mono text-accent-green tracking-cyber text-xs sm:text-sm select-none"
              role="status"
              aria-live="polite"
            >
              <span className="w-2.5 h-2.5 bg-accent-green shadow-neon-sm mb-3 animate-pulse" />
              <span>{loader.message}</span>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/rules" element={<RulesPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <CTATransition>
        {/* IntroSequence wraps AppShell to manage cinematic intro without modifying intro logic */}
        <IntroSequence>
          <AppShell />
        </IntroSequence>
      </CTATransition>
    </BrowserRouter>
  );
};

export default App;
