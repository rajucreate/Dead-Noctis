import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeroSection } from '@/components/hero/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { EventsSection } from '@/components/sections/EventsSection';
import { RulesSection } from '@/components/sections/RulesSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { ContinuousWorld } from '@/components/world/ContinuousWorld';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { usePortalTransition } from '@/components/animation/CTATransition';
import { usePageMeta } from '@/hooks/usePageMeta';
import { siteConfig } from '@/config/site';

/**
 * HomePage:
 * Renders the approved hero section and continuous 3D world scene,
 * flowing seamlessly into the About and Events sections matching the storyboard.
 */
export const HomePage: React.FC = () => {
  usePageMeta(
    siteConfig.meta.title,
    siteConfig.meta.description
  );

  const { progress, activeSection } = useScrollProgress();
  const { triggerTransition } = usePortalTransition();
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    triggerTransition(() => {
      navigate('/register');
    });
  };

  const handleLearnMoreClick = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/about');
    }
  };

  // Memoize foreground content flow so heavy sections never re-render on scroll camera progress ticks
  const sectionsContent = useMemo(
    () => (
      <main id="main-content" className="relative z-10">
        <HeroSection
          onRegisterClick={handleRegisterClick}
          onLearnMoreClick={handleLearnMoreClick}
        />
        <AboutSection />
        <EventsSection />
        <RulesSection />
        <FaqSection />
      </main>
    ),
    []
  );

  return (
    <div className="relative min-h-screen">
      {/* Persistent 3D World Scene with Cavern & Floating Island Transitions */}
      <ContinuousWorld scrollProgress={progress} activeSection={activeSection} />

      {/* Foreground Content Flow */}
      {sectionsContent}
    </div>
  );
};

export default HomePage;
