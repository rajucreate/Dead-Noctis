import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeroSection } from '@/components/hero/HeroSection';
import { TickerBar } from '@/components/sections/TickerBar';
import { AboutSection } from '@/components/sections/AboutSection';
import { EventsSection } from '@/components/sections/EventsSection';
import { RulesSection } from '@/components/sections/RulesSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { OrganizersSection } from '@/components/sections/OrganizersSection';
import { RegisterSection } from '@/components/sections/RegisterSection';
import { BackgroundStack } from '@/components/layout/BackgroundStack';
import { AmbientCanvas } from '@/components/ui/AmbientCanvas';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { useIntro } from '@/components/animation/IntroSequence';
import { usePortalTransition } from '@/components/animation/CTATransition';
import { usePageMeta } from '@/hooks/usePageMeta';
import { siteConfig } from '@/config/site';

/**
 * HomePage:
 * Renders the fixed BackgroundStack for smooth cross-fading scroll transitions,
 * the subtle ambient floating cyber particles, and the full Stitch redesigned section flow.
 */
export const HomePage: React.FC = () => {
  usePageMeta(
    siteConfig.meta.title,
    siteConfig.meta.description
  );

  const { progress } = useScrollProgress();
  const activeSection = useActiveSection('hero');
  const { hasHandoffStarted } = useIntro();
  const { triggerTransition } = usePortalTransition();
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    const el = document.getElementById('registration');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      triggerTransition(() => {
        navigate('/register');
      });
    }
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
        <TickerBar />
        <AboutSection />
        <EventsSection />
        <RulesSection />
        <FaqSection />
        <OrganizersSection />
        <RegisterSection />
      </main>
    ),
    []
  );

  return (
    <div className="relative min-h-screen">
      {/* Fixed Full-Viewport Background Stack (Smooth Crossfade & Depth Scale) */}
      <BackgroundStack activeSection={activeSection} />

      {/* Floating Cyber Particle Canvas (preserved atmospheric effect from ContinuousWorld) */}
      <AmbientCanvas
        className="fixed inset-0 z-[1] pointer-events-none select-none"
        enabled={hasHandoffStarted && activeSection !== 'hero' && activeSection !== 'home'}
        particleCount={45}
        speedMultiplier={1.0}
        scrollProgress={progress}
        activeSection={activeSection}
      />

      {/* Foreground Content Flow */}
      {sectionsContent}
    </div>
  );
};

export default HomePage;
