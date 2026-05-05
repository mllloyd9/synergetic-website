import React from 'react';
import VideoEmbed from '../../ui/VideoEmbed';
import TestimonialCard from '../../ui/TestimonialCard';

// TODO: Replace null with YouTube URLs when Marcus provides them
const videos = [
  { url: null as string | null, caption: 'Client coming soon' },
  { url: null as string | null, caption: 'Client coming soon' },
  { url: null as string | null, caption: 'Client coming soon' },
];

// NOTE TO MARCUS: Replace initials with full names and update
// quotes with real testimonials when you have them.
const testimonials = [
  {
    quote:
      'Marcus took me from a 498 to a 720 in 8 months. I now own two properties and have a $50K business line.',
    author: 'D.M.',
    role: 'Real Estate Investor',
    rating: 5,
  },
  {
    quote:
      'Three JPMCB accounts removed from all bureaus. My score jumped 200 points. I qualified for my first business lease the next month.',
    author: 'S.B.',
    role: 'Business Owner',
    rating: 5,
  },
  {
    quote:
      "I was at 410. Now I'm at 690 and just got approved for $35K in funding. This system works.",
    author: 'A.M.',
    role: 'Entrepreneur',
    rating: 5,
  },
];

const VideoTestimonialsSection: React.FC = () => {
  return (
    <section id="results" className="bg-white py-20 sm:py-24">
      <div className="container-wrapper">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-ink mb-4">
            Real Results, Real People
          </h2>
          <p className="text-lg sm:text-xl text-brand-slate">
            These are our clients. These are their words.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {videos.map((v, i) => (
            <VideoEmbed
              key={i}
              youtubeUrl={v.url}
              title={`Client testimonial ${i + 1}`}
              caption={v.caption}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <TestimonialCard
              key={t.author + t.quote.slice(0, 12)}
              quote={t.quote}
              author={t.author}
              role={t.role}
              rating={t.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialsSection;
