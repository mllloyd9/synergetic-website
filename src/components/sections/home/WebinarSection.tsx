import React from 'react';
import VideoEmbed from '../../ui/VideoEmbed';
import CTAButton from '../../ui/CTAButton';

// TODO: Replace # with real webinar URLs when Marcus provides them
const REPLAY_URL = '#';
const REGISTER_URL = '#';

const WebinarSection: React.FC = () => {
  return (
    <section id="webinar" className="bg-brand-bone py-20 sm:py-24">
      <div className="container-wrapper">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-ink mb-4 leading-tight">
            The Credit Repair Masterclass
          </h2>
          <p className="text-lg sm:text-xl text-brand-slate leading-relaxed">
            Learn the exact system we use to remove negative items and unlock
            business funding. Free.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-10">
          {/* TODO: Add webinar replay YouTube URL */}
          <VideoEmbed youtubeUrl={null} title="Credit Repair Masterclass" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton
            label="Watch the Free Replay"
            href={REPLAY_URL}
            variant="primary"
            dataCta="webinar-replay"
            className="text-base sm:text-lg px-7"
          />
          <CTAButton
            label="Register for Next Live Session"
            href={REGISTER_URL}
            variant="secondary"
            dataCta="webinar-register"
            className="text-base sm:text-lg px-7"
          />
        </div>
      </div>
    </section>
  );
};

export default WebinarSection;
