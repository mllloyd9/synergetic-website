import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  link,
  delay = 0
}) => {
  return (
    <div 
      className="service-card rounded-xl bg-white shadow-md p-6 flex flex-col h-full border border-gray-100"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="p-3 rounded-full bg-primary-50 inline-flex items-center justify-center w-14 h-14 mb-5">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-primary-800">{title}</h3>
      
      <p className="text-secondary-600 mb-5 flex-grow">{description}</p>
      
      <Link 
        to={link} 
        className="text-primary-600 font-medium inline-flex items-center group mt-2"
      >
        Learn More 
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;