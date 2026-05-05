import React from 'react';
import SEO from '../components/ui/SEO';
import IdClubMfsnCards from '../components/ui/IdClubMfsnCards';
import CTAButton from '../components/ui/CTAButton';

const CALENDLY_URL = 'https://calendly.com/synergeticconsult/30min';

const IdClubPage: React.FC = () => {
  return (
    <>
      <SEO
        title="ID Club — Free Identity Protection & Credit Monitoring"
        description="Free identity protection and credit monitoring for entrepreneurs rebuilding their credit."
      />

      <section className="bg-brand-ink text-white pt-32 pb-16">
        <div className="container-wrapper max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
            Know Your Numbers. Protect Your Identity.
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            Two free tools every entrepreneur needs before they start
            repairing their credit.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-wrapper max-w-5xl mx-auto">
          <IdClubMfsnCards
            idClubDataCta="idclub-page-signup"
            mfsnDataCta="mfsn-page-signup"
          />
        </div>
      </section>

      <section className="bg-brand-accent text-white py-20 sm:py-24">
        <div className="container-wrapper text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8 leading-tight">
            Ready to start repairing your credit?
          </h2>
          <div className="flex justify-center">
            <CTAButton
              label="Book a Free Strategy Call"
              href={CALENDLY_URL}
              variant="ghost"
              dataCta="idclub-page-book-call"
              className="text-base sm:text-lg px-8 py-4"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default IdClubPage;
