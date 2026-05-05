import React from 'react';
import IdClubMfsnCards from '../../ui/IdClubMfsnCards';

const CALENDLY_URL = 'https://calendly.com/synergeticconsult/30min';

const IdClubSection: React.FC = () => {
  return (
    <section id="id-club" className="bg-white py-20 sm:py-24">
      <div className="container-wrapper">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-ink mb-4 leading-tight">
            Protect Yourself While You Rebuild
          </h2>
          <p className="text-lg sm:text-xl text-brand-slate">
            Two tools. Both free. Both essential.
          </p>
        </div>

        <IdClubMfsnCards
          idClubDataCta="idclub-signup"
          mfsnDataCta="mfsn-signup"
        />

        <p className="text-center text-brand-slate mt-10 text-sm sm:text-base">
          Already enrolled?{' '}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="idclub-section-book-call"
            className="text-brand-accent font-semibold underline hover:text-brand-accentDark"
          >
            Book a strategy call to find out what to do next.
          </a>
        </p>
      </div>
    </section>
  );
};

export default IdClubSection;
