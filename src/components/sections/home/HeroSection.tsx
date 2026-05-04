import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

// Background image URL from Pexels - professional office setting
const backgroundImageUrl = "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920";

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleBookConsultation = () => {
    window.open('https://calendly.com/consultation-synergeticconsult/30min', '_blank');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center pt-20"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(28, 82, 242, 0.95), rgba(28, 82, 242, 0.8)), url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container-wrapper relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Transform Your Credit Score in 30 Days
            </h1>
            
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of satisfied clients who've seen their credit scores improve by an average of 100+ points. Start your journey to financial freedom today.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button onClick={handleBookConsultation} className="btn-primary py-3 px-8 text-lg">
                Get Your Free Credit Analysis
              </button>
            </div>
            
            <div className="mt-12 flex items-center space-x-8">
              <div className="flex items-center">
                <div className="bg-white text-primary-600 rounded-full p-2">
                  <ChevronRight className="h-4 w-4" />
                </div>
                <span className="text-white ml-2">30-Day Results</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white text-primary-600 rounded-full p-2">
                  <ChevronRight className="h-4 w-4" />
                </div>
                <span className="text-white ml-2">100+ Point Increases</span>
              </div>
            </div>
          </div>
          
          <div className={`relative transition-all duration-700 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="bg-white rounded-xl shadow-2xl p-8">
              <div className="bg-primary-50 text-primary-600 text-sm font-medium px-3 py-1 rounded-full inline-block mb-6">
                Limited Time Offer
              </div>
              
              <h3 className="text-2xl font-bold text-primary-800 mb-6">
                Free Credit Score Analysis
              </h3>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mt-0.5">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <p className="ml-3 text-secondary-700">
                    Complete credit report review
                  </p>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mt-0.5">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <p className="ml-3 text-secondary-700">
                    Personalized improvement plan
                  </p>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mt-0.5">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <p className="ml-3 text-secondary-700">
                    30-day action strategy
                  </p>
                </li>
              </ul>
              
              <button 
                onClick={handleBookConsultation}
                className="btn-primary w-full text-center py-3 text-lg font-semibold"
              >
                Schedule Your Free Analysis
              </button>
              
              <p className="text-sm text-secondary-500 text-center mt-4">
                No credit card required • 100% free consultation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;