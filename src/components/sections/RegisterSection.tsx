import React, { useState } from 'react';
import { registrationTerminal } from '@/content/siteContent';
import { cn } from '@/utils/cn';

interface RegisterSectionProps {
  className?: string;
}

export const RegisterSection: React.FC<RegisterSectionProps> = ({ className }) => {
  const [callsign, setCallsign] = useState('');
  const [email, setEmail] = useState('');
  const [institution, setInstitution] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callsign || !email || !institution || !agreed) return;

    setIsSubmitted(true);
    setTimeout(() => {
      setCallsign('');
      setEmail('');
      setInstitution('');
      setAgreed(false);
    }, 1500);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 6000);
  };

  return (
    <section
      id="registration"
      data-bg="register"
      className={cn(
        'w-full py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-[#111412] to-[#0c0f0d] text-[#e1e3df] select-none',
        className
      )}
    >
      {/* Subtle Emerald Glow Inset */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(162,217,109,0.08)_0%,transparent_60%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        {/* Terminal Header Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#191c1a] border border-[#6FAD68]/30 text-[#a2d96d] font-mono text-xs uppercase tracking-widest mb-6 font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#a2d96d] animate-pulse" />
          <span>{registrationTerminal.badge}</span>
        </div>

        {/* Heading & Subheading */}
        <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase max-w-2xl">
          {registrationTerminal.heading}
        </h2>
        <p className="font-sans text-sm sm:text-base text-[#c2c9b6] max-w-xl mt-3 mb-10 leading-relaxed">
          {registrationTerminal.subtitle}
        </p>

        {/* Terminal Input Box */}
        <div className="w-full max-w-xl bg-[#191c1a] border border-white/10 p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col gap-5 text-left">
          {/* Top Bar with 3 Dots and Protocol Tag */}
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <span className="font-mono text-[10px] text-[#8c9382] uppercase tracking-wider font-semibold">
              {registrationTerminal.protocol}
            </span>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[11px] uppercase tracking-wider text-[#c2c9b6] font-semibold">
                SQUAD / CADRE CALLSIGN
              </label>
              <input
                type="text"
                value={callsign}
                onChange={(e) => setCallsign(e.target.value)}
                placeholder="e.g. 0x_NULL_SECTOR"
                required
                className="w-full px-4 py-2.5 rounded-lg bg-[#282b28] text-white font-sans text-sm placeholder:text-[#8c9382] border border-white/5 focus:border-[#6FAD68] focus:bg-[#323533] focus:outline-none transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] uppercase tracking-wider text-[#c2c9b6] font-semibold">
                  CAPTAIN / OPERATOR EMAIL
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="lead@bastion.org"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-[#282b28] text-white font-sans text-sm placeholder:text-[#8c9382] border border-white/5 focus:border-[#6FAD68] focus:bg-[#323533] focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] uppercase tracking-wider text-[#c2c9b6] font-semibold">
                  INSTITUTION / AFFILIATION
                </label>
                <input
                  type="text"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  placeholder="e.g. KL University / Independent"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-[#282b28] text-white font-sans text-sm placeholder:text-[#8c9382] border border-white/5 focus:border-[#6FAD68] focus:bg-[#323533] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Rules Checkbox */}
            <div className="flex items-start gap-2.5 mt-1">
              <input
                id="rules-agree"
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                required
                className="mt-1 accent-[#a2d96d] w-4 h-4 rounded cursor-pointer"
              />
              <label htmlFor="rules-agree" className="font-sans text-xs text-[#c2c9b6] cursor-pointer leading-relaxed">
                {registrationTerminal.rulesAgreement}
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 mt-2 rounded-xl bg-[#334e1c] text-[#a2d96d] border border-[#6FAD68]/40 hover:bg-[#a2d96d] hover:text-[#1f3708] font-headline text-sm sm:text-base font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_24px_rgba(162,217,109,0.25)] hover:shadow-[0_0_36px_rgba(162,217,109,0.5)] cursor-pointer"
            >
              {registrationTerminal.ctaLabel}
            </button>
          </form>

          {/* Success Acknowledgement Message */}
          {isSubmitted && (
            <div className="p-4 rounded-xl bg-[#282b28] border border-[#a2d96d]/40 text-[#a2d96d] font-mono text-xs text-center animate-fade-in">
              {registrationTerminal.successAck}
            </div>
          )}
        </div>

        {/* Bottom Telemetry Footer */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 font-mono text-[11px] text-[#8c9382] uppercase font-semibold">
          {registrationTerminal.telemetry.map((item, idx) => (
            <React.Fragment key={idx}>
              <span>{item}</span>
              {idx < registrationTerminal.telemetry.length - 1 && <span>•</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
