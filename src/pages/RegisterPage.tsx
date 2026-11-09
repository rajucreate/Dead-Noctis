import React from 'react';
import { PageShell } from '@/components/ui/PageShell';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { register } from '@/content/siteContent';
import { usePageMeta } from '@/hooks/usePageMeta';

export const RegisterPage: React.FC = () => {
  usePageMeta(
    'REGISTER | THE DEAD NOCTIS CTF – LEVEL 1',
    register.body
  );

  return (
    <PageShell ariaLabel={register.label}>
      <SectionLabel className="mb-4">{register.label}</SectionLabel>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase mb-6">
        {register.heading}
      </h1>
    </PageShell>
  );
};

export default RegisterPage;
