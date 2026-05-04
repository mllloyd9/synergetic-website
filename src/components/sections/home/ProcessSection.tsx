import React from 'react';
import SectionHeader from '../../ui/SectionHeader';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We start with a free consultation to understand your specific needs and goals, evaluating your current financial situation."
    },
    {
      number: "02",
      title: "Customized Strategy",
      description: "Our experts develop a personalized plan tailored to your specific situation and financial objectives."
    },
    {
      number: "03",
      title: "Implementation",
      description: "We put your plan into action, handling the complex processes and paperwork to improve your credit or business standing."
    },
    {
      number: "04",
      title: "Monitoring & Support",
      description: "We provide ongoing support and monitoring to ensure continued success and make adjustments as needed."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-wrapper">
        <SectionHeader
          title="Our Process"
          subtitle="A simple, effective approach to improving your financial standing."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-bold text-primary-200 mb-4">
                {step.number}
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-primary-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-secondary-600">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden xl:block absolute top-12 left-full w-full h-0.5 bg-primary-100 -translate-x-8 z-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;