import React from 'react';
import { Check } from 'lucide-react';
import SEO from '../components/ui/SEO';
import VideoEmbed from '../components/ui/VideoEmbed';
import BeehiivForm from '../components/ui/BeehiivForm';
import CTAButton from '../components/ui/CTAButton';

const CALENDLY_URL = 'https://calendly.com/synergeticconsult/30min';

const learnPoints = [
  'The exact dispute process we use across all 3 bureaus',
  'How to identify and target the right negative items',
  'When and how to escalate to creditors directly',
  'How to position yourself for business funding after credit repair',
];

const WebinarPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Free Webinar — The Credit Repair Masterclass"
        description="Learn the exact system we use to remove negative items and unlock business funding. Free webinar."
      />

      <section className="bg-brand-ink text-white pt-32 pb-16">
        <div className="container-wrapper max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
            The Credit Repair Masterclass
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            Learn the exact system we use to remove negative items and unlock
            business funding. Free.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-wrapper max-w-3xl mx-auto">
          {/* TODO: Add webinar replay YouTube URL */}
          <VideoEmbed youtubeUrl={null} title="Credit Repair Masterclass replay" />
        </div>
      </section>

      <section className="bg-brand-bone py-16">
        <div className="container-wrapper max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-ink mb-8 text-center">
            What you'll learn
          </h2>
          <ul className="space-y-4 mb-12">
            {learnPoints.map((p) => (
              <li key={p} className="flex items-start text-brand-ink">
                <Check className="h-6 w-6 text-brand-accent flex-shrink-0 mr-3 mt-0.5" />
                <span className="text-base sm:text-lg leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>

          <div className="bg-white rounded-xl shadow-card p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-brand-ink mb-2 text-center">
              Save your spot
            </h3>
            <p className="text-brand-slate text-center mb-6">
              Get the replay and the next live session in your inbox.
            </p>
            <BeehiivForm
              utmMedium="webinar_page"
              submitLabel="Save My Spot"
              successMessage="✓ You're registered. Check your inbox."
              variant="light"
            />
          </div>
        </div>
      </section>

      <section className="bg-brand-deep text-white py-20">
        <div className="container-wrapper text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8 leading-tight">
            Ready to skip the learning curve? Book a call and we'll handle
            everything.
          </h2>
          <div className="flex justify-center">
            <CTAButton
              label="Book Your Strategy Call"
              href={CALENDLY_URL}
              variant="ghost"
              dataCta="webinar-page-book-call"
              className="text-base sm:text-lg px-8 py-4"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default WebinarPage;
