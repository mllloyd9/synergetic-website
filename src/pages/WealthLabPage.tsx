import React from 'react';
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield, Award, Play, Star } from 'lucide-react';

// Professional images from Pexels - African American business setting
const wealthLabHeroUrl = "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920";

const WealthLabPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'The Wealth Lab - Complete Financial Transformation System';
  }, []);

  const handleJoinWealthLab = () => {
    window.open('https://www.skool.com/wealthlabvip/about?ref=e4dc26a0b360432594a38ed51a469405', '_blank');
  };

  const handleRegisterWebinar = () => {
    window.open('https://join.synergeticconsult.com/register-page', '_blank');
  };

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center pt-20"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(37, 99, 235, 0.4)), url(${wealthLabHeroUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container-wrapper relative z-10 py-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <Award className="h-4 w-4 mr-2" />
              Complete Financial Transformation System
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              Welcome to 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> The Wealth Lab</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Your complete financial transformation system. Everything you need to rebuild credit, 
              structure businesses, and access capital — all in one place.
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
                Watch Free Training
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-8 text-white">
              <div className="flex items-center">
                <Users className="h-6 w-6 mr-2 text-blue-400" />
                <span className="font-semibold">Hundreds of Members</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-6 w-6 mr-2 text-green-400" />
                <span className="font-semibold">$5M+ Capital Accessed</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-6 w-6 mr-2 text-purple-400" />
                <span className="font-semibold">95% Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-white">
        <div className="container-wrapper">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Everything You Need to 
              <span className="text-blue-600"> Build Wealth</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The Wealth Lab isn't just a course—it's a complete ecosystem designed to transform your financial life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Play className="h-8 w-8 text-blue-600" />,
                title: "Monthly Financial Literacy Trainings",
                description: "Live sessions with Marcus covering credit repair, business structure, and wealth building strategies. Get the latest insights and ask questions directly.",
                features: ["Live Q&A sessions", "Recorded for replay", "Guest expert interviews", "Action-oriented content"]
              },
              {
                icon: <Shield className="h-8 w-8 text-purple-600" />,
                title: "Business Structure Vault",
                description: "Complete step-by-step guides for LLC formation, EIN setup, business banking, and legal compliance. Save thousands in legal fees.",
                features: ["LLC formation guides", "EIN application process", "Business banking setup", "Compliance checklists"]
              },
              {
                icon: <Award className="h-8 w-8 text-green-600" />,
                title: "100+ Business Blueprints",
                description: "Detailed business models with ROI breakdowns, startup costs, and step-by-step execution plans. Find your perfect business match.",
                features: ["ROI calculations", "Startup cost breakdowns", "Market analysis", "Execution timelines"]
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-orange-600" />,
                title: "Vetted Funding Relationships",
                description: "Direct access to lenders, investors, and funding sources that actually work with our community. No more rejection letters.",
                features: ["Pre-qualified lenders", "Investor connections", "Grant opportunities", "Alternative funding sources"]
              },
              {
                icon: <Users className="h-8 w-8 text-indigo-600" />,
                title: "Private Community Access",
                description: "Connect with like-minded entrepreneurs, share wins, get support, and build lasting relationships in our exclusive community.",
                features: ["24/7 community support", "Networking opportunities", "Success celebrations", "Accountability partners"]
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-red-600" />,
                title: "Expert Q&A Sessions",
                description: "Direct access to Marcus and guest experts for personalized guidance on your specific financial and business challenges.",
                features: ["Weekly office hours", "Expert guest sessions", "Personalized advice", "Case study reviews"]
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container-wrapper">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Real Members, Real Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See how Wealth Lab members are transforming their financial lives and building generational wealth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "The Business Structure Vault saved me $5,000 in legal fees. I had my LLC, EIN, and business bank account set up in one week using Marcus's step-by-step guides.",
                author: "David Martinez",
                role: "E-commerce Entrepreneur",
                result: "Saved $5,000 in legal fees",
                rating: 5
              },
              {
                quote: "From a 480 credit score to 720 in 8 months using the credit repair strategies. Now I own two rental properties and my business is thriving.",
                author: "Sarah Johnson",
                role: "Real Estate Investor",
                result: "240-point credit increase",
                rating: 5
              },
              {
                quote: "The funding relationships Marcus provided got me a $50K business line of credit when traditional banks kept saying no. Complete game changer.",
                author: "Keisha Williams",
                role: "Beauty Business Owner",
                result: "$50K business credit line",
                rating: 5
              },
              {
                quote: "The monthly trainings keep me motivated and on track. Marcus breaks down complex financial concepts in a way that actually makes sense.",
                author: "Michael Thompson",
                role: "Construction Business",
                result: "Consistent growth mindset",
                rating: 5
              },
              {
                quote: "The community support is incredible. When I had questions about my business structure, I got answers from people who've been there.",
                author: "Lisa Rodriguez",
                role: "Consulting Firm Owner",
                result: "Strong support network",
                rating: 5
              },
              {
                quote: "Used one of the business blueprints to launch my digital marketing agency. The ROI breakdown was spot-on and I'm profitable already.",
                author: "James Wilson",
                role: "Digital Marketing Agency",
                result: "Profitable in 3 months",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
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
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600 text-sm mb-2">{testimonial.role}</div>
                  <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {testimonial.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marcus with Peers */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white">
        <div className="container-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Building Success 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Together</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Marcus collaborating with industry leaders and fellow entrepreneurs. The Wealth Lab connects you 
                with a network of successful business owners and financial experts who are committed to your success.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Network with successful entrepreneurs and business leaders",
                  "Learn from industry experts and guest speakers",
                  "Collaborate on business opportunities and partnerships",
                  "Access exclusive events and mastermind sessions",
                  "Build lasting relationships that accelerate your growth"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 shrink-0 mt-0.5" />
                    <span className="text-gray-200">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={handleJoinWealthLab}
                className="btn bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 py-4 px-8 text-lg font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Join The Network
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm p-2 rounded-2xl">
                <img 
                  src="/marcus-network.jpg" 
                  alt="Marcus Lloyd with business peers" 
                  className="w-full h-96 object-cover object-center rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-2xl">
                <div className="text-3xl font-black text-blue-600 mb-1">Network</div>
                <div className="text-gray-700 font-semibold">Building Success</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Preview */}
      <section className="py-20 bg-white">
        <div className="container-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-2xl">
                <img 
                  src="/marcus-community.jpg" 
                  alt="Marcus Lloyd with community members" 
                  className="w-full h-96 object-cover object-center rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl">
                <div className="text-3xl font-black text-blue-600 mb-1">Hundreds</div>
                <div className="text-gray-700 font-semibold">Lives Changed</div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Join a Community of 
                <span className="text-blue-600"> Wealth Builders</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                The Wealth Lab isn't just about the content—it's about the community. Connect with like-minded entrepreneurs, 
                share your wins, get support during challenges, and build relationships that last a lifetime.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "24/7 access to supportive community members",
                  "Weekly networking and accountability sessions",
                  "Success story celebrations and motivation",
                  "Direct access to Marcus and expert mentors",
                  "Exclusive member-only events and workshops"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={handleJoinWealthLab}
                className="btn bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 py-4 px-8 text-lg font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Join The Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container-wrapper text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Your Wealth Journey Starts Today
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Stop waiting for the "perfect time." The Wealth Lab gives you everything you need to start building wealth right now.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={handleJoinWealthLab}
              className="btn bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 py-4 px-12 text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Get Started Now
              <ArrowRight className="ml-3 h-6 w-6" />
            </button>
            <button 
              onClick={handleRegisterWebinar}
              className="btn border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-4 px-12 text-xl font-bold transition-all duration-300"
            >
              Watch Free Training First
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default WealthLabPage;