import React from 'react';
import CTAButton from '../../ui/CTAButton';

const CALENDLY_URL = 'https://calendly.com/synergeticconsult/30min';

const FinalCtaSection: React.FC = () => {
  return (
    <section id="final-cta" className="bg-brand-accent text-white py-20 sm:py-28">
      <div className="container-wrapper text-center max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
          Ready to Get Started?
        </h2>
        <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-10">
          Book a free strategy call. No pressure. No pitch. Just a real
          conversation about your situation and what's possible.
        </p>

        <div className="flex justify-center mb-6">
          <CTAButton
            label="Book Your Free Strategy Call"
            href={CALENDLY_URL}
            variant="ghost"
            dataCta="final-cta-book-call"
            className="text-base sm:text-lg px-8 py-4"
          />
        </div>

        <p className="text-white/90 text-sm sm:text-base">
          Free consultation • No credit card required • Results-focused
        </p>
      </div>
    </section>
  );
};

export default FinalCtaSection;
