import React from 'react';
import StatCard from '../../ui/StatCard';

const stats = [
  { number: '300+', label: 'Average point increase' },
  { number: '$109K', label: 'In funding unlocked for one client' },
  { number: '3', label: 'Bureaus disputed simultaneously' },
  { number: '100%', label: "Done-for-you — you don't lift a finger" },
];

const TrustBarSection: React.FC = () => {
  return (
    <section id="trust" className="bg-brand-accent py-14 sm:py-16">
      <div className="container-wrapper">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <StatCard key={s.label} number={s.number} label={s.label} variant="dark" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBarSection;
