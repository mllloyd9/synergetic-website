import React from 'react';
import { XCircle, Building2, AlertTriangle } from 'lucide-react';

const painPoints = [
  {
    icon: XCircle,
    text: "You've been turned down for business funding",
  },
  {
    icon: Building2,
    text: "You can't qualify for a lease or business account",
  },
  {
    icon: AlertTriangle,
    text: 'Your personal credit is holding your business hostage',
  },
];

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="bg-white py-20 sm:py-24">
      <div className="container-wrapper">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-ink mb-5 leading-tight">
            Bad credit isn't a character flaw. It's a business problem.
          </h2>
          <p className="text-lg sm:text-xl text-brand-slate leading-relaxed">
            Every day you wait is another day a bank says no. Another lease
            denied. Another opportunity gone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {painPoints.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="bg-brand-bone border border-brand-ink/10 rounded-lg p-7 flex items-start"
            >
              <Icon className="h-7 w-7 text-brand-accent flex-shrink-0 mr-4 mt-0.5" />
              <p className="text-brand-ink font-medium leading-snug">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
