import React from 'react';
import { ArrowRight, CheckCircle, Play, Clock, Users, Award } from 'lucide-react';

// Professional webinar image from Pexels - African American business setting
const webinarHeroUrl = "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920";

const WebinarPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Free Webinar - The Wealth Blueprint | Synergetic Consulting';
  }, []);

  const handleRegisterWebinar = () => {
    window.open('https://join.synergeticconsult.com/register-page', '_blank');
  };

  const handleJoinWealthLab = () => {
    window.open('https://www.skool.com/wealthlabvip/about?ref=e4dc26a0b360432594a38ed51a469405', '_blank');
  };

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center pt-20"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(37, 99, 235, 0.4)), url(${webinarHeroUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container-wrapper relative z-10 py-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-pulse">
              <Play className="h-4 w-4 mr-2" />
              FREE LIVE TRAINING
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              The 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Wealth Blueprint</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Discover the exact 3-step system Marcus used to go from incarceration to financial freedom — 
              and how you can use it to transform your life in the next 90 days.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl mb-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">In This Free Training, You'll Learn:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "The #1 credit mistake keeping you broke",
                  "How to access $50K+ in business funding",
                  "The 3-step wealth building system",
                  "Marcus's personal transformation story"
                ].map((point, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 shrink-0 mt-1" />
                    <span className="text-white">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={handleRegisterWebinar}
              className="btn bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700 py-4 px-12 text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 mb-6"
            >
              Register for FREE Training
              <ArrowRight className="ml-3 h-6 w-6" />
            </button>
            
            <div className="flex flex-wrap items-center gap-8 text-white">
              <div className="flex items-center">
                <Users className="h-6 w-6 mr-2 text-blue-400" />
                <span className="font-semibold">Hundreds Registered</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 mr-2 text-green-400" />
                <span className="font-semibold">60 Minutes</span>
              </div>
              <div className="flex items-center">
                <Award className="h-6 w-6 mr-2 text-purple-400" />
                <span className="font-semibold">100% Free</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-white">
        <div className="container-wrapper">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              What You'll Learn in This 
              <span className="text-blue-600"> Free Training</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              This isn't just another webinar. It's a complete blueprint for financial transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: "01",
                title: "The Credit Foundation",
                description: "Discover the #1 credit mistake that's keeping you broke and how to fix it in 30 days or less. Learn the insider secrets banks don't want you to know.",
                highlights: ["Credit score optimization", "Debt elimination strategy", "Credit building hacks", "Bank relationship secrets"]
              },
              {
                step: "02",
                title: "Business Structure Mastery",
                description: "Learn how to properly structure your business to access funding, protect your assets, and build generational wealth. No legal degree required.",
                highlights: ["LLC formation secrets", "Business credit building", "Asset protection strategies", "Tax optimization tips"]
              },
              {
                step: "03",
                title: "Capital Access System",
                description: "Get the exact system Marcus uses to help clients access $50K+ in business funding, even with less-than-perfect credit.",
                highlights: ["Funding source database", "Application strategies", "Approval rate optimization", "Alternative funding options"]
              }
            ].map((module, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-200 relative">
                <div className="text-6xl font-black text-blue-100 absolute top-4 right-4">
                  {module.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">{module.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{module.description}</p>
                <ul className="space-y-2">
                  {module.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button 
              onClick={handleRegisterWebinar}
              className="btn bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700 py-4 px-12 text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Secure Your Spot Now
              <ArrowRight className="ml-3 h-6 w-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Marcus's Story Preview */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white">
        <div className="container-wrapper">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              From Rock Bottom to 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Financial Freedom</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Marcus will share his complete transformation story and the exact steps he took to build wealth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-black text-red-400 mb-4">480</div>
              <div className="text-lg font-semibold mb-2">Starting Credit Score</div>
              <div className="text-gray-300">Where Marcus began his journey</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-green-400 mb-4">800+</div>
              <div className="text-lg font-semibold mb-2">Current Credit Score</div>
              <div className="text-gray-300">After applying his system</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-blue-400 mb-4">$1M+</div>
              <div className="text-lg font-semibold mb-2">Business Revenue</div>
              <div className="text-gray-300">Annual business income</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-purple-400 mb-4">Hundreds</div>
              <div className="text-lg font-semibold mb-2">Lives Changed</div>
              <div className="text-gray-300">Clients transformed</div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center">
            <blockquote className="text-2xl md:text-3xl font-bold italic mb-4">
              "I went from having nothing to building a million-dollar business. 
              If I can do it, so can you."
            </blockquote>
            <cite className="text-lg text-gray-300 font-semibold">— Marcus Lloyd</cite>
          </div>
        </div>
      </section>

      {/* Webinar Details */}
      <section className="py-20 bg-gray-50">
        <div className="container-wrapper">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-200">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                  Webinar Details
                </h2>
                <p className="text-lg text-gray-600">
                  Everything you need to know about joining this life-changing training.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-600 mr-3 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Duration</h3>
                      <p className="text-gray-600">60 minutes of pure value</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-6 w-6 text-purple-600 mr-3 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Format</h3>
                      <p className="text-gray-600">Live interactive training</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Award className="h-6 w-6 text-green-600 mr-3 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Cost</h3>
                      <p className="text-gray-600">Completely FREE</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Play className="h-6 w-6 text-red-600 mr-3 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Replay</h3>
                      <p className="text-gray-600">Available for 48 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-orange-600 mr-3 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Bonus</h3>
                      <p className="text-gray-600">Exclusive Q&A session</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="h-6 w-6 text-indigo-600 mr-3 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Next Step</h3>
                      <p className="text-gray-600">Special Wealth Lab offer</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button 
                  onClick={handleRegisterWebinar}
                  className="btn bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700 py-4 px-12 text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 mb-4"
                >
                  Register Now - It's FREE
                  <ArrowRight className="ml-3 h-6 w-6" />
                </button>
                <p className="text-sm text-gray-500">
                  No credit card required. Instant access after registration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="container-wrapper text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Don't Wait. Your Future Starts Now.
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Hundreds have already registered. Secure your spot before we reach capacity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={handleRegisterWebinar}
              className="btn bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700 py-4 px-12 text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Register for Free Training
            </button>
            <button 
              onClick={handleJoinWealthLab}
              className="btn border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-4 px-12 text-xl font-bold transition-all duration-300"
            >
              Skip to Wealth Lab
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebinarPage;