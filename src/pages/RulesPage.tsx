import React from 'react';
import { RulesSection } from '@/components/sections/RulesSection';
import { ContinuousWorld } from '@/components/world/ContinuousWorld';
import { usePageMeta } from '@/hooks/usePageMeta';

export const RulesPage: React.FC = () => {
  usePageMeta(
    'RULES | THE DEAD NOCTIS CTF – LEVEL 1',
    'Official rules and directives for The Dead Noctis CTF. Play fair, hack hard.'
  );

  return (
    <div className="relative min-h-screen">
      {/* Persistent 3D World Scene focused on Rules Security Dimension */}
      <ContinuousWorld scrollProgress={0.88} activeSection="rules" />

      <main id="main-content" className="relative z-10">
        <RulesSection />
      </main>
    </div>
  );
};

export default RulesPage;
