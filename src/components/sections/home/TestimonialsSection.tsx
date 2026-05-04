import React from 'react';
import SectionHeader from '../../ui/SectionHeader';
import TestimonialCard from '../../ui/TestimonialCard';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "After working with their team, my credit score improved by over 100 points in just 6 months. I'm now qualified for a mortgage with great rates!",
      author: "Sarah Williams",
      role: "Homebuyer",
      rating: 5
    },
    {
      quote: "The financial consultation I received was eye-opening. They provided a clear roadmap to financial freedom that I'm still following today.",
      author: "David Chen",
      role: "Entrepreneur",
      rating: 5
    },
    {
      quote: "Synergetic Consulting helped me establish business credit for my startup. Their expertise was invaluable and the results exceeded my expectations.",
      author: "Michael Johnson",
      role: "Small Business Owner",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-wrapper">
        <SectionHeader
          title="Client Success Stories"
          subtitle="Hear from our clients about how our services have helped transform their financial future."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;