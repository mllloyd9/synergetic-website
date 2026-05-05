import React from 'react';
import BeehiivForm from '../../ui/BeehiivForm';

const NewsletterSection: React.FC = () => {
  return (
    <section id="newsletter" className="bg-brand-ink text-white py-20 sm:py-24">
      <div className="container-wrapper">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Weekly Credit Tips. Real Case Studies.
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-10">
            No spam. No fluff. Just the system — delivered weekly.
          </p>

          <BeehiivForm utmMedium="newsletter_section" submitLabel="Subscribe" />
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
