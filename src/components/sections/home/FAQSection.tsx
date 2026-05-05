import React from 'react';
import FAQItem from '../../ui/FAQItem';

const faqs = [
  {
    q: 'How long does credit repair take?',
    a: 'Most clients see movement in 30-45 days. Full restoration typically takes 3-6 months depending on the complexity of your credit profile and how quickly the bureaus respond.',
  },
  {
    q: 'Is credit repair legal?',
    a: 'Yes. We dispute inaccurate, incomplete, or unverifiable items under your rights in the Fair Credit Reporting Act (FCRA). You have the legal right to accurate credit reporting.',
  },
  {
    q: 'What makes you different from Lexington Law or Credit Saint?',
    a: "We're done-for-you, not a subscription mill. We dispute aggressively, round by round, until the job is done. We also specialize in business owners — not just consumers.",
  },
  {
    q: 'Do you guarantee results?',
    a: "We don't guarantee specific outcomes — no legitimate credit repair organization can. We guarantee the work gets done correctly and aggressively.",
  },
  {
    q: 'What if I have a bankruptcy or judgment?',
    a: "We still work with you. Some items are harder to remove than others, but we review every file individually and fight everything that's disputable.",
  },
  {
    q: 'Do you work with business owners specifically?',
    a: "Yes. Our entire system is built for entrepreneurs who need personal credit repaired to access business funding. That's our specialty.",
  },
  {
    q: 'What happens on the strategy call?',
    a: "We review your credit situation, explain exactly what we can do, and give you a clear plan. No pressure. No pitch until you're ready to move forward.",
  },
  {
    q: 'How does the business funding process work?',
    a: 'Once your credit reaches the right threshold, we introduce you to lenders in our network who specifically fund entrepreneurs at your profile.',
  },
  {
    q: 'What credit bureaus do you work with?',
    a: 'All three — Equifax, Experian, and TransUnion — simultaneously. Every round hits all three bureaus.',
  },
  {
    q: 'Can you remove bankruptcies?',
    a: 'In some cases, yes — specifically when the bankruptcy reporting contains inaccuracies or unverifiable information. We review every bankruptcy individually.',
  },
  {
    q: 'What do I need to get started?',
    a: "A strategy call. We'll tell you exactly what we need from there. The call is free and takes about 30 minutes.",
  },
  {
    q: 'What is the ID Club?',
    a: 'ID Club is identity theft protection — real-time monitoring, dark web scanning, and fraud alerts. MyFreeScoreNow is free 3-bureau credit monitoring. Both are free tools we recommend to every client as a starting point.',
  },
];

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="bg-brand-bone py-20 sm:py-24">
      <div className="container-wrapper">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-ink mb-10 text-center leading-tight">
            Common Questions
          </h2>

          <div className="bg-white rounded-xl shadow-card px-6 sm:px-8">
            {faqs.map((f) => (
              <FAQItem key={f.q} question={f.q} answer={f.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
