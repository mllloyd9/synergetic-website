import React from 'react';
import { CreditCard, Building2, FileText, Briefcase } from 'lucide-react';
import ServiceCard from '../../ui/ServiceCard';
import SectionHeader from '../../ui/SectionHeader';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <CreditCard className="h-6 w-6 text-primary-600" />,
      title: "Credit Restoration",
      description: "We help identify and address items on your credit report to improve your credit score and financial standing.",
      link: "/services#credit-restoration",
      delay: 0
    },
    {
      icon: <Building2 className="h-6 w-6 text-primary-600" />,
      title: "Business Consulting",
      description: "Establish and build your business profile to fund your business growth and expansion.",
      link: "/services#business-consulting",
      delay: 100
    },
    {
      icon: <FileText className="h-6 w-6 text-primary-600" />,
      title: "Financial Consultations",
      description: "Expert guidance on managing and improving your financial health, with personalized strategies for success.",
      link: "/services#consultations",
      delay: 200
    },
    {
      icon: <Briefcase className="h-6 w-6 text-primary-600" />,
      title: "Business Products",
      description: "Premium products including personal tradelines and shelf corporations to accelerate your business establishment.",
      link: "/services#products",
      delay: 300
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-wrapper">
        <SectionHeader
          title="Our Professional Services"
          subtitle="We provide comprehensive solutions to help individuals and businesses achieve financial success and stability."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;