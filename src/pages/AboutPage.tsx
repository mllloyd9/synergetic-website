import React from 'react';
import { Award, TrendingUp, Users, Target, CheckCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'About Marcus Lloyd - Synergetic Consulting Services';
  }, []);

  const handleJoinWealthLab = () => {
    window.open('https://www.skool.com/wealthlabvip/about?ref=e4dc26a0b360432594a38ed51a469405', '_blank');
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
          backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(37, 99, 235, 0.4)), url(/marcus-suit.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container-wrapper relative z-10 py-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <Award className="h-4 w-4 mr-2" />
              Founder & CEO
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              Meet 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Marcus Lloyd</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              From incarceration to financial freedom. From struggle to success. 
              Marcus Lloyd's journey proves that your past doesn't define your future.
            </p>
            
            <blockquote className="border-l-4 border-blue-400 pl-6 mb-8">
              <p className="text-2xl md:text-3xl font-bold text-white italic mb-2">
                "We're not selling hype. We're building legacy."
              </p>
              <cite className="text-lg text-gray-300 font-semibold">— Marcus Lloyd</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="py-20 bg-white">
        <div className="container-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                The Journey to 
                <span className="text-blue-600"> Financial Leadership</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Marcus Lloyd's story isn't just about overcoming adversity—it's about transforming pain into purpose. 
                  After facing incarceration and the challenges that come with reentry, Marcus made a decision that would 
                  change not only his life but the lives of hundreds of others.
                </p>
                
                <p>
                  Starting with a damaged credit score and limited resources, Marcus applied systematic approaches to 
                  rebuild his financial foundation. He didn't just fix his credit—he mastered the entire system. 
                  He didn't just start one business—he created multiple revenue streams and learned the art of scaling.
                </p>
                
                <p>
                  But Marcus's true calling emerged when he realized that the knowledge he'd gained could transform 
                  entire communities. The same systems that lifted him from rock bottom could empower others who 
                  faced similar challenges.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-2xl">
                <img 
                  src="/marcus-suit.jpg" 
                  alt="Marcus Lloyd's journey" 
                  className="w-full h-96 object-cover object-center rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl">
                <div className="text-3xl font-black text-blue-600 mb-1">Hundreds</div>
                <div className="text-gray-700 font-semibold">Lives Transformed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-wrapper">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything we do is guided by our commitment to authentic transformation and community empowerment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8 text-blue-600" />,
                title: "No Hype Promise",
                description: "We deliver real systems and proven strategies, not empty promises or get-rich-quick schemes."
              },
              {
                icon: <Users className="h-8 w-8 text-purple-600" />,
                title: "Community First",
                description: "Every decision we make prioritizes the success and empowerment of our community members."
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-green-600" />,
                title: "Proven Results",
                description: "Our methods are tested, refined, and proven to work in real-world situations."
              },
              {
                icon: <Award className="h-8 w-8 text-orange-600" />,
                title: "Legacy Building",
                description: "We're not just changing individual lives—we're building generational wealth and breaking cycles."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white">
        <div className="container-wrapper">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Track Record of 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Success</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Marcus's proven systems have transformed lives and built generational wealth across communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl font-black text-blue-400 mb-4">Hundreds</div>
              <div className="text-xl font-semibold mb-2">Clients Served</div>
              <div className="text-gray-300">Individuals and families helped</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-purple-400 mb-4">$5M+</div>
              <div className="text-xl font-semibold mb-2">Capital Accessed</div>
              <div className="text-gray-300">Total funding secured by clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-green-400 mb-4">95%</div>
              <div className="text-xl font-semibold mb-2">Success Rate</div>
              <div className="text-gray-300">Clients who see credit improvement</div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-bold mb-6">What Sets Marcus Apart</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Lived experience with financial challenges and recovery",
                "Proven track record with documented results",
                "Deep understanding of underserved communities",
                "Commitment to authentic, no-hype education",
                "Systems-based approach to wealth building",
                "Focus on generational impact, not quick fixes"
              ].map((point, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 shrink-0 mt-0.5" />
                  <span className="text-gray-200">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Photo */}
      <section className="py-20 bg-white">
        <div className="container-wrapper">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Celebrating Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Marcus with community members celebrating their transformation and growth milestones.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-2xl">
              <img 
                src="/marcus-community.jpg" 
                alt="Marcus Lloyd with community members" 
                className="w-full h-96 object-cover object-center rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business Meeting Photo */}
      <section className="py-20 bg-gray-50">
        <div className="container-wrapper">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Professional Network
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Marcus connecting with fellow professionals celebrating transformation and growth.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-2xl">
              <img 
                src="/marcus-network.jpg" 
                alt="Marcus Lloyd with business peers" 
                className="w-full h-96 object-cover object-center rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-wrapper text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join Marcus and The Wealth Lab community. Your transformation starts with a single decision.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={handleJoinWealthLab}
              className="btn bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 py-4 px-12 text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Join The Wealth Lab
            </button>
            <button 
              onClick={handleBookConsultation}
              className="btn border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-4 px-12 text-xl font-bold transition-all duration-300"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;