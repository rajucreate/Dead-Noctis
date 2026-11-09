import React from 'react';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContinuousWorld } from '@/components/world/ContinuousWorld';
import { about } from '@/content/siteContent';
import { usePageMeta } from '@/hooks/usePageMeta';

export const AboutPage: React.FC = () => {
  usePageMeta(
    'ABOUT | THE DEAD NOCTIS CTF – LEVEL 1',
    about.body
  );

  return (
    <div className="relative min-h-screen">
      {/* Persistent 3D World Scene focused on Cavern Dimension */}
      <ContinuousWorld scrollProgress={0.45} activeSection="about" />

      <main id="main-content" className="relative z-10">
        <AboutSection />
      </main>
    </div>
  );
};

export default AboutPage;
