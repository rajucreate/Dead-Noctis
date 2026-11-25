import React from 'react';
import { RegisterSection } from '@/components/sections/RegisterSection';
import { usePageMeta } from '@/hooks/usePageMeta';

export const RegisterPage: React.FC = () => {
  usePageMeta(
    'ENLISTMENT TERMINAL | DEAD NOCTIS CTF – LEVEL 1',
    'Assemble your cadre. Calibrate your exploit engines. Step into the dimensional anomaly.'
  );

  return (
    <div className="relative min-h-screen pt-20">
      <main id="main-content" className="relative z-10">
        <RegisterSection />
      </main>
    </div>
  );
};

export default RegisterPage;
