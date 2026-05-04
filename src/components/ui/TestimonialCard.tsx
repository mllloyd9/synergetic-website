import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  rating: number;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  rating,
  image
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-8 border border-gray-100">
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      <blockquote className="text-secondary-700 mb-6 italic">
        "{quote}"
      </blockquote>

      <div className="flex items-center">
        {image && (
          <img 
            src={image} 
            alt={author} 
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        )}
        {!image && (
          <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold mr-4">
            {author.split(' ').map(name => name[0]).join('')}
          </div>
        )}
        <div>
          <div className="font-semibold text-secondary-900">{author}</div>
          {role && <div className="text-secondary-500 text-sm">{role}</div>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;