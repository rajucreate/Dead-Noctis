import React from 'react';
import { Link } from 'react-router-dom';
import { PageShell } from '@/components/ui/PageShell';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { notFound } from '@/content/siteContent';
import { usePageMeta } from '@/hooks/usePageMeta';

export const NotFoundPage: React.FC = () => {
  usePageMeta(
    '404 - LOST IN THE DIMENSION | THE DEAD NOCTIS CTF',
    notFound.body
  );

  return (
    <PageShell ariaLabel={notFound.label}>
      <SectionLabel className="mb-4">{notFound.label}</SectionLabel>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase mb-4">
        {notFound.heading}
      </h1>
      <p className="text-sm sm:text-base text-ctf-muted leading-relaxed mb-8">
        {notFound.body}
      </p>
      <Link to="/" className="inline-block">
        <Button variant="primary" showArrow arrowDirection="right">
          {notFound.buttonLabel}
        </Button>
      </Link>
    </PageShell>
  );
};

export default NotFoundPage;
