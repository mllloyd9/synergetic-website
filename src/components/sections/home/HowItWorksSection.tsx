import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Book a Free Strategy Call',
    body:
      "We review your credit situation and build your plan. No pressure. No pitch until you're ready.",
  },
  {
    number: '02',
    title: 'We Build Your Dispute Strategy',
    body: 'Round-by-round plan targeting every negative item across all three bureaus.',
  },
  {
    number: '03',
    title: 'We Execute — You Watch',
    body:
      'We handle every letter, every follow-up, every bureau response. Done-for-you means done.',
  },
  {
    number: '04',
    title: 'You Get Funded',
    body:
      'Once your credit hits the threshold, we introduce you to lenders who fund entrepreneurs at your profile.',
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-24">
      <div className="container-wrapper">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-ink mb-4">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl text-brand-slate">
            Simple process. Real results.
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-brand-accent/30" />

          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent text-white text-xl font-extrabold mb-5 shadow-card">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-brand-ink mb-3">{step.title}</h3>
              <p className="text-brand-slate leading-relaxed text-sm sm:text-base px-2">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
