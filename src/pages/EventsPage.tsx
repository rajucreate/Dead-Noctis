import React from 'react';
import { EventsSection } from '@/components/sections/EventsSection';
import { ContinuousWorld } from '@/components/world/ContinuousWorld';
import { events } from '@/content/siteContent';
import { usePageMeta } from '@/hooks/usePageMeta';

export const EventsPage: React.FC = () => {
  usePageMeta(
    'EVENTS | THE DEAD NOCTIS CTF – LEVEL 1',
    events.body
  );

  return (
    <div className="relative min-h-screen">
      {/* Persistent 3D World Scene focused on Floating Island Dimension */}
      <ContinuousWorld scrollProgress={0.48} activeSection="events" />

      <main id="main-content" className="relative z-10">
        <EventsSection />
      </main>
    </div>
  );
};

export default EventsPage;
