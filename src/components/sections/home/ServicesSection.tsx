import React from 'react';
import { CreditCard, Zap, TrendingUp, type LucideIcon } from 'lucide-react';
import CTAButton from '../../ui/CTAButton';

const CALENDLY_URL = 'https://calendly.com/synergeticconsult/30min';

interface ServiceCardData {
  icon: LucideIcon;
  title: string;
  body: string;
  ctaLabel: string;
  dataCta: string;
  badge?: string;
  elevated?: boolean;
}

const services: ServiceCardData[] = [
  {
    icon: CreditCard,
    title: 'Credit Repair',
    body:
      'Done-for-you dispute process across all 3 bureaus. We handle every letter, every round, every follow-up. You watch your score climb.',
    ctaLabel: 'See If You Qualify',
    dataCta: 'services-repair-qualify',
  },
  {
    icon: Zap,
    title: 'Credit Sweep',
    body:
      'Aggressive removal for serious damage — identity theft, charge-offs, judgments, collections. Built for clients who need results fast.',
    ctaLabel: 'See If You Qualify',
    dataCta: 'services-sweep-qualify',
    badge: 'Most Popular',
    elevated: true,
  },
  {
    icon: TrendingUp,
    title: 'Business Funding Stack',
    body:
      "Credit repair + business funding consult + lender introductions. We don't just fix your credit — we put you in front of the right people when you're ready.",
    ctaLabel: 'See If You Qualify',
    dataCta: 'services-funding-qualify',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="bg-brand-bone py-20 sm:py-24">
      <div className="container-wrapper">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-ink mb-4">
            What We Do
          </h2>
          <p className="text-lg sm:text-xl text-brand-slate">
            Three programs. One goal — get you funded.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {services.map(({ icon: Icon, title, body, ctaLabel, dataCta, badge, elevated }) => (
            <div
              key={title}
              className={`relative bg-white rounded-xl p-7 sm:p-8 flex flex-col ${
                elevated
                  ? 'shadow-card-lg md:-translate-y-3 md:scale-[1.02] ring-1 ring-brand-accent/30'
                  : 'shadow-card'
              }`}
            >
              {badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-accent text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">
                  {badge}
                </span>
              )}
              <div className="w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center mb-5">
                <Icon className="h-6 w-6 text-brand-accent" />
              </div>
              <h3 className="text-2xl font-bold text-brand-ink mb-4">{title}</h3>
              <p className="text-brand-slate leading-relaxed mb-7 flex-grow">{body}</p>
              <CTAButton
                label={ctaLabel}
                href={CALENDLY_URL}
                variant="primary"
                dataCta={dataCta}
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
