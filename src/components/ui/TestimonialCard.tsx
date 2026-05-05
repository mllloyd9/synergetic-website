import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role, rating }) => {
  const initials = author
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <div className="bg-white shadow-card rounded-xl p-7 border border-gray-100 h-full flex flex-col">
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? 'fill-brand-accent text-brand-accent' : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      <blockquote className="text-brand-slate mb-6 italic leading-relaxed flex-grow">
        "{quote}"
      </blockquote>

      <div className="flex items-center">
        <div className="w-11 h-11 rounded-full bg-brand-accent/10 text-brand-accent flex items-center justify-center font-bold mr-3">
          {initials}
        </div>
        <div>
          <div className="font-semibold text-brand-ink">{author}</div>
          {role && <div className="text-brand-slate text-sm">{role}</div>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
