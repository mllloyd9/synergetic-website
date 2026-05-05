import React from 'react';
import { Calendar, FileText, Users } from 'lucide-react';
import CTAButton from '../../ui/CTAButton';

const SKOOL_URL = 'https://www.skool.com/the-wealth-lab-7543/about';
const CALENDLY_URL = 'https://calendly.com/synergeticconsult/30min';

const benefits = [
  { icon: Calendar, text: 'Weekly live Q&A with Marcus' },
  { icon: FileText, text: 'Dispute templates and real case studies' },
  { icon: Users, text: 'A community of entrepreneurs doing the same thing' },
];

const CommunitySection: React.FC = () => {
  return (
    <section id="community" className="bg-brand-accent text-white py-20 sm:py-24">
      <div className="container-wrapper">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
            Start Here. It's Free.
          </h2>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
            The Wealth Lab community is where the journey begins. No cost. No
            catch. Just the system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12 max-w-4xl mx-auto">
          {benefits.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center"
            >
              <Icon className="h-8 w-8 text-white mb-4" />
              <p className="text-white font-medium leading-snug">{text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <CTAButton
            label="Join The Wealth Lab — Free"
            href={SKOOL_URL}
            variant="ghost"
            dataCta="community-join"
            className="text-base sm:text-lg px-8"
          />
          <p className="mt-6 text-white/90 text-sm sm:text-base">
            Already in the community?{' '}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="community-book-call"
              className="underline font-semibold hover:text-white"
            >
              Ready for done-for-you? Book a call.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
