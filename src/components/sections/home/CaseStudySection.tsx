import React from 'react';
import { ArrowRight } from 'lucide-react';
import CTAButton from '../../ui/CTAButton';

const CALENDLY_URL = 'https://calendly.com/synergeticconsult/30min';

const CaseStudySection: React.FC = () => {
  return (
    <section id="case-study" className="bg-brand-deep text-white py-20 sm:py-28">
      <div className="container-wrapper">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-brand-accent mb-6 leading-none">
            $109,000
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            One Client. One System. Life-Changing Capital.
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
            A Synergetic client came to us with serious credit damage and zero
            access to business funding. We ran our full dispute process across
            all three bureaus, cleared the major derogatory items, and
            introduced them to our funding network. Twelve months later:
            $109,000 in business capital secured.
          </p>

          {/* TODO: Replace with real before/after screenshot graphic */}
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-6 sm:gap-4 items-center mb-12 max-w-3xl mx-auto">
            <div className="border-2 border-brand-deep bg-brand-ink rounded-lg p-6 text-left">
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-2">Before</div>
              <div className="text-4xl sm:text-5xl font-extrabold text-white mb-3">4XX</div>
              <p className="text-sm text-gray-400 leading-snug">
                Multiple charge-offs, collections, judgments
              </p>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="h-8 w-8 text-brand-accent rotate-90 sm:rotate-0" />
            </div>

            <div className="border-2 border-brand-accent bg-brand-ink rounded-lg p-6 text-left">
              <div className="text-sm uppercase tracking-wider text-brand-accent mb-2">After</div>
              <div className="text-4xl sm:text-5xl font-extrabold text-white mb-3">7XX</div>
              <p className="text-sm text-gray-300 leading-snug">$109,000 funded</p>
            </div>
          </div>

          <blockquote className="text-2xl sm:text-3xl italic text-white font-light mb-10">
            "This could be your story."
          </blockquote>

          <CTAButton
            label="Book Your Strategy Call"
            href={CALENDLY_URL}
            variant="ghost"
            dataCta="case-study-book-call"
            className="text-base sm:text-lg px-8"
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
