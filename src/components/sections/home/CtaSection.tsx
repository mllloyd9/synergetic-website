import React from 'react';
import { ArrowRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  const handleBookConsultation = () => {
    window.open('https://calendly.com/consultation-synergeticconsult/30min', '_blank');
  };

  return (
    <section className="py-20 bg-primary-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-primary-800 rounded-full opacity-20 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-primary-800 rounded-full opacity-20 translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="container-wrapper relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Financial Future?
          </h2>
          
          <p className="text-xl text-blue-100 mb-10">
            Take the first step toward financial freedom with a free consultation. Our experts are ready to help you achieve your goals.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={handleBookConsultation}
              className="btn bg-white text-primary-700 hover:bg-gray-100 shadow-lg hover:shadow-xl py-3 px-8 text-lg"
            >
              Schedule Consultation
            </button>
            
            <button 
              onClick={handleBookConsultation}
              className="btn border border-white/30 text-white hover:bg-white/10 py-3 px-8 text-lg group"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;