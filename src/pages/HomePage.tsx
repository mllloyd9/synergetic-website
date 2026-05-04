import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle, Star, Play, Users, TrendingUp, Shield, Award } from 'lucide-react';

// Professional background image from Pexels - African American business setting
const heroImageUrl = "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920";

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = 'The Wealth Lab - Your Blueprint to Wealth Begins Here';
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleJoinWealthLab = () => {
    window.open('https://www.skool.com/wealthlabvip/about?ref=e4dc26a0b360432594a38ed51a469405', '_blank');
  };

  const handleRegisterWebinar = () => {
    window.open('https://join.synergeticconsult.com/register-page', '_blank');
  };

  const handleBookConsultation = () => {
    window.open('https://join.synergeticconsult.com/booking', '_blank');
  };

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center pt-20"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(37, 99, 235, 0.3)), url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container-wrapper relative z-10 py-16">
          <div className="max-w-4xl">
            <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
                Your Blueprint to 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Wealth</span> 
                <br />Begins Here
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
                Step-by-step systems to fix credit, launch business, and access capital — 
                <span className="font-semibold text-white"> without the hype.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                <button 
                  onClick={handleJoinWealthLab}
                  className="btn bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 py-4 px-8 text-lg font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Join The Wealth Lab
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                
                <button 
                  onClick={handleRegisterWebinar}
                  className="btn border-2 border-white text-white hover:bg-white hover:text-gray-900 py-4 px-8 text-lg font-bold backdrop-blur-sm transition-all duration-300"
                >
                  Register for Webinar
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-8 text-white">
                <div className="flex items-center">
                  <Users className="h-6 w-6 mr-2 text-blue-400" />
                  <span className="font-semibold">Hundreds of Clients</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-6 w-6 mr-2 text-green-400" />
                  <span className="font-semibold">Proven Results</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-6 w-6 mr-2 text-purple-400" />
                  <span className="font-semibold">No Hype Promise</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 bg-gray-50">
        <div className="container-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white p-2 rounded-2xl shadow-2xl">
                <img 
                  src="/marcus-suit.jpg" 
                  alt="Marcus Lloyd" 
                  className="w-full h-80 object-cover object-top rounded-xl"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Award className="h-4 w-4 mr-2" />
                Founder Story
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                From Rock Bottom to 
                <span className="text-blue-600"> Financial Freedom</span>
              </h2>
              
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Marcus Lloyd's journey from incarceration to financial leadership proves that your past doesn't define your future. 
                After rebuilding his own credit and launching multiple successful businesses, Marcus dedicated his life to 
                empowering underserved communities with the same systems that transformed his life.
              </p>
              
              <blockquote className="border-l-4 border-blue-600 pl-6 mb-8">
                <p className="text-2xl font-bold text-gray-900 italic mb-2">
                  "We're not selling hype. We're building legacy."
                </p>
                <cite className="text-lg text-gray-600 font-semibold">— Marcus Lloyd</cite>
              </blockquote>
              
              <button 
                onClick={handleBookConsultation}
                className="btn-primary py-3 px-8 text-lg font-semibold"
              >
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What is The Wealth Lab */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white">
        <div className="container-wrapper">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">The Wealth Lab?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your complete financial transformation system. Everything you need to rebuild credit, 
              structure businesses, and access capital — all in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Monthly Financial Literacy Trainings",
                description: "Live sessions with Marcus covering credit repair, business structure, and wealth building strategies."
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Business Structure Vault",
                description: "Complete guides for LLC formation, EIN setup, business banking, and legal compliance."
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "100+ Business Blueprints",
                description: "Detailed business models with ROI breakdowns, startup costs, and step-by-step execution plans."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Vetted Funding Relationships",
                description: "Direct access to lenders, investors, and funding sources that actually work with our community."
              },
              {
                icon: <Play className="h-8 w-8" />,
                title: "Private Community Access",
                description: "Connect with like-minded entrepreneurs, share wins, and get support from the Wealth Lab family."
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                title: "Expert Q&A Sessions",
                description: "Direct access to Marcus and guest experts for personalized guidance on your financial journey."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button 
              onClick={handleJoinWealthLab}
              className="btn bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 py-4 px-12 text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Get Started Now
              <ArrowRight className="ml-3 h-6 w-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-wrapper">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Real Results, Real People
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how The Wealth Lab has transformed lives and built generational wealth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Marcus's system helped me go from a 480 credit score to 720 in just 8 months. Now I own two rental properties and my business is thriving.",
                author: "Sarah Johnson",
                role: "Real Estate Investor",
                rating: 5
              },
              {
                quote: "The Business Structure Vault saved me thousands in legal fees. I had my LLC, EIN, and business bank account set up in one week.",
                author: "David Martinez",
                role: "E-commerce Entrepreneur",
                rating: 5
              },
              {
                quote: "The funding relationships Marcus provided got me a $50K business line of credit when banks kept saying no. Game changer.",
                author: "Keisha Williams",
                role: "Beauty Business Owner",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Consultation CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container-wrapper text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Start Building Wealth?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Book a free consultation with Marcus and discover your personalized path to financial freedom.
          </p>
          <button 
            onClick={handleBookConsultation}
            className="btn bg-white text-blue-600 hover:bg-gray-100 py-4 px-12 text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Book Your Consultation
          </button>
        </div>
      </section>
    </>
  );
};

export default HomePage;