import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  recommended?: boolean;
  actionText?: string;
  actionLink?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  recommended = false,
  actionText = "Get Started",
  actionLink = "/contact",
}) => {
  return (
    <div className={`rounded-xl overflow-hidden flex flex-col h-full ${
      recommended 
        ? 'border-2 border-primary-500 shadow-xl relative' 
        : 'border border-gray-200 shadow-md'
    }`}>
      {recommended && (
        <div className="bg-primary-500 text-white text-center py-1.5 text-sm font-medium">
          Recommended
        </div>
      )}
      
      <div className="p-6 md:p-8 flex-grow">
        <h3 className="text-xl font-bold text-primary-800 mb-2">{title}</h3>
        <div className="flex items-baseline mb-4">
          <span className="text-3xl md:text-4xl font-bold text-primary-700">{price}</span>
          {price !== 'Custom' && <span className="text-secondary-500 ml-1">/package</span>}
        </div>
        
        <p className="text-secondary-600 mb-6">{description}</p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className={`flex-shrink-0 w-5 h-5 rounded-full ${
                feature.included ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-400'
              } flex items-center justify-center mt-0.5`}>
                <Check className="h-3.5 w-3.5" />
              </span>
              <span className={`ml-3 ${
                feature.included ? 'text-secondary-700' : 'text-secondary-400 line-through'
              }`}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="px-6 md:px-8 pb-8">
        <Link to={actionLink} className={`block text-center py-3 px-6 rounded-md font-medium transition-colors ${
          recommended 
            ? 'bg-primary-600 text-white hover:bg-primary-700' 
            : 'bg-white border border-primary-500 text-primary-600 hover:bg-primary-50'
        }`}>
          {actionText}
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;