import React from 'react';
import { Check } from 'lucide-react';
import CTAButton from '../../ui/CTAButton';

const CALENDLY_URL = 'https://calendly.com/synergeticconsult/30min';
const SKOOL_URL = 'https://www.skool.com/the-wealth-lab-7543/about';

const trustItems = [
  'Done-for-you — not a subscription mill',
  'All 3 bureaus disputed simultaneously',
  'Real results, real clients',
];

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative bg-brand-ink text-white min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      <div className="container-wrapper relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-white mb-6">
              We Take People From the{' '}
              <span className="text-brand-accent">400s</span> to the{' '}
              <span className="text-brand-accent">700s</span>.
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-xl">
              Credit repair and business funding for entrepreneurs who are
              done being told no.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <CTAButton
                label="Book Your Free Strategy Call"
                href={CALENDLY_URL}
                variant="primary"
                dataCta="hero-book-call"
                className="text-base sm:text-lg px-7"
              />
              <CTAButton
                label="Join the Free Community"
                href={SKOOL_URL}
                variant="ghost"
                dataCta="hero-community"
                className="text-base sm:text-lg px-7"
              />
            </div>

            <ul className="space-y-3">
              {trustItems.map((item) => (
                <li key={item} className="flex items-start text-white/90">
                  <Check className="h-5 w-5 text-brand-accent flex-shrink-0 mr-3 mt-0.5" />
                  <span className="text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-accent/20 rounded-full blur-3xl" />
              <img
                src="/marcus-community.jpg"
                alt="Marcus Lloyd with The Wealth Lab community"
                className="relative w-full h-auto max-w-md ml-auto rounded-2xl shadow-card-lg object-cover"
                style={{ aspectRatio: '4 / 5' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
