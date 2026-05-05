import React from 'react';
import { Shield, TrendingUp, Check, type LucideIcon } from 'lucide-react';
import CTAButton from './CTAButton';

const ID_CLUB_URL =
  'https://idclub.com/signup417ar.asp?GUID=RFIHSDHEAX79&tGUID=76B7B77E-5F04-4A3B-AAED-4D206890235D';
const MFSN_URL =
  'https://myfreescorenow.com/enroll/?AID=SynergeticConsultingServices&PID=10303';

interface CardProps {
  badge: string;
  icon: LucideIcon;
  title: string;
  features: string[];
  ctaLabel: string;
  href: string;
  dataCta: string;
}

const Card: React.FC<CardProps> = ({
  badge,
  icon: Icon,
  title,
  features,
  ctaLabel,
  href,
  dataCta,
}) => (
  <div className="bg-white rounded-xl p-7 sm:p-8 shadow-card border border-gray-100 flex flex-col h-full">
    <span className="self-start text-xs font-bold uppercase tracking-wider text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full mb-5">
      {badge}
    </span>
    <Icon className="h-10 w-10 text-brand-accent mb-5" />
    <h3 className="text-2xl sm:text-3xl font-bold text-brand-ink mb-5">{title}</h3>
    <ul className="space-y-3 mb-8 flex-grow">
      {features.map((f) => (
        <li key={f} className="flex items-start text-brand-slate">
          <Check className="h-5 w-5 text-brand-accent flex-shrink-0 mr-3 mt-0.5" />
          <span className="leading-snug">{f}</span>
        </li>
      ))}
    </ul>
    <CTAButton
      label={ctaLabel}
      href={href}
      variant="primary"
      dataCta={dataCta}
      className="w-full"
    />
  </div>
);

interface IdClubMfsnCardsProps {
  idClubDataCta?: string;
  mfsnDataCta?: string;
}

const IdClubMfsnCards: React.FC<IdClubMfsnCardsProps> = ({
  idClubDataCta = 'idclub-signup',
  mfsnDataCta = 'mfsn-signup',
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      <Card
        badge="Identity Protection"
        icon={Shield}
        title="ID Club"
        features={[
          'Real-time identity monitoring',
          'Dark web scanning',
          'Identity theft insurance',
          'Fraud alerts',
          '3-bureau credit monitoring',
        ]}
        ctaLabel="Get ID Club Protection"
        href={ID_CLUB_URL}
        dataCta={idClubDataCta}
      />
      <Card
        badge="Credit Monitoring"
        icon={TrendingUp}
        title="MyFreeScoreNow"
        features={[
          '3-bureau credit monitoring',
          'Score tracking and alerts',
          'Dispute readiness report',
          'Identity theft protection',
          'Free to start',
        ]}
        ctaLabel="Get Free Credit Monitoring"
        href={MFSN_URL}
        dataCta={mfsnDataCta}
      />
    </div>
  );
};

export default IdClubMfsnCards;
