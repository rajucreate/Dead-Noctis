import React from 'react';
import { FaqSection } from '@/components/sections/FaqSection';
import { ContinuousWorld } from '@/components/world/ContinuousWorld';
import { usePageMeta } from '@/hooks/usePageMeta';

export const FaqPage: React.FC = () => {
  usePageMeta(
    'FAQ | THE DEAD NOCTIS CTF – LEVEL 1',
    'Frequently asked questions regarding Dead Noctis CTF Level 1 eligibility, format, tools, and scoring.'
  );

  return (
    <div className="relative min-h-screen">
      {/* Persistent 3D World Scene focused on Deep Void Matrix Dimension */}
      <ContinuousWorld scrollProgress={0.92} activeSection="faq" />

      <main id="main-content" className="relative z-10">
        <FaqSection />
      </main>
    </div>
  );
};

export default FaqPage;