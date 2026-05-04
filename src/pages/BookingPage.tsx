import React from 'react';
import { Calendar, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const BookingPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Book Consultation - Synergetic Consulting Services';
  }, []);

  const handleBookConsultation = () => {
    window.open('https://join.synergeticconsult.com/booking', '_blank');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white">
        <div className="container-wrapper">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <Calendar className="h-4 w-4 mr-2" />
              Free Consultation Available
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Book Your 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Free Consultation</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get personalized guidance from Marcus Lloyd and discover your path to financial freedom. 
              No sales pitch, just real solutions.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-white">
        <div className="container-wrapper">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              What to Expect in Your 
              <span className="text-blue-600"> Consultation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              This isn't a sales call. It's a genuine strategy session designed to help you move forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: "01",
                title: "Financial Assessment",
                description: "We'll review your current financial situation, credit profile, and business goals to understand where you are and where you want to go.",
                duration: "15 minutes"
              },
              {
                step: "02",
                title: "Custom Strategy",
                description: "Based on your assessment, Marcus will create a personalized roadmap with specific steps you can take immediately.",
                duration: "20 minutes"
              },
              {
                step: "03",
                title: "Next Steps",
                description: "You'll leave with clear action items and resources, whether you work with us or not. No pressure, just value.",
                duration: "10 minutes"
              }
            ].map((phase, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-200 relative">
                <div className="text-6xl font-black text-blue-100 absolute top-4 right-4">
                  {phase.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">{phase.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{phase.description}</p>
                <div className="flex items-center text-sm text-blue-600 font-semibold">
                  <Clock className="h-4 w-4 mr-2" />
                  {phase.duration}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button 
              onClick={handleBookConsultation}
              className="btn bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 py-4 px-12 text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Schedule Your Free Call
              <ArrowRight className="ml-3 h-6 w-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container-wrapper">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">
                Why Book a Consultation?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Get clarity, direction, and actionable steps — completely free.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Personalized Credit Strategy",
                  description: "Get a custom plan to improve your credit score based on your specific situation and goals."
                },
                {
                  title: "Business Structure Guidance",
                  description: "Learn the best way to structure your business for maximum protection and funding opportunities."
                },
                {
                  title: "Funding Roadmap",
                  description: "Discover the funding sources that are most likely to approve you and how to apply successfully."
                },
                {
                  title: "Wealth Building Plan",
                  description: "Create a step-by-step plan to build generational wealth using proven strategies."
                },
                {
                  title: "Resource Recommendations",
                  description: "Get access to tools, resources, and connections that can accelerate your progress."
                },
                {
                  title: "No-Pressure Environment",
                  description: "This is about helping you succeed, not selling you something. Value first, always."
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-4 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container-wrapper">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl text-center">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Ready to Take the Next Step?
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Book your free consultation now. Marcus personally reviews every application to ensure 
                he can provide maximum value during your call.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-black text-blue-600 mb-2">45 Min</div>
                  <div className="text-gray-600">Consultation Length</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-purple-600 mb-2">100% Free</div>
                  <div className="text-gray-600">No Hidden Costs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-green-600 mb-2">Same Day</div>
                  <div className="text-gray-600">Action Plan</div>
                </div>
              </div>
              
              <button 
                onClick={handleBookConsultation}
                className="btn bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 py-4 px-12 text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 mb-4"
              >
                Book Your Free Consultation
                <Calendar className="ml-3 h-6 w-6" />
              </button>
              
              <p className="text-sm text-gray-500">
                Limited spots available. Book now to secure your preferred time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container-wrapper">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-8">
              {[
                {
                  question: "Is the consultation really free?",
                  answer: "Yes, absolutely. This is a genuine strategy session with no hidden costs or obligations. Our goal is to provide value and help you move forward."
                },
                {
                  question: "How long is the consultation?",
                  answer: "The consultation is 45 minutes. This gives us enough time to understand your situation and create a meaningful action plan."
                },
                {
                  question: "Will I be pressured to buy something?",
                  answer: "No. This is about helping you succeed, not selling you something. If our programs are a good fit, we'll mention them, but there's no pressure."
                },
                {
                  question: "Who will I be speaking with?",
                  answer: "You'll be speaking directly with Marcus Lloyd or one of his senior consultants who has been personally trained in his methods."
                },
                {
                  question: "What should I prepare for the call?",
                  answer: "Just come with your questions and goals. We'll guide you through everything else during the consultation."
                },
                {
                  question: "Can I reschedule if needed?",
                  answer: "Yes, you can reschedule up to 24 hours before your appointment through the booking system."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingPage;