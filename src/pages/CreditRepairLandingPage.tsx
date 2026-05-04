import React, { useEffect, useState } from 'react';
import { Shield, Star, Lock, ChevronDown } from 'lucide-react';

const CreditRepairLandingPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Credit Repair Services - Build Strong Credit | Synergetic Consulting Services';
  }, []);

  const handleCreditScoreCheck = () => {
    window.open('https://myfreescorenow.com/enroll/?AID=SynergeticConsultingServices&PID=10303&utm_source=synergetic&utm_medium=site&utm_campaign=credit-score', '_blank', 'noopener,noreferrer');
  };

  const scrollToSignup = () => {
    const signupSection = document.getElementById('signup');
    if (signupSection) {
      signupSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      question: "How long does the credit repair process take?",
      answer: "The credit repair process typically takes 3-6 months, though some clients see improvements in as little as 30-45 days. Timeline depends on the complexity of your credit profile and the responsiveness of credit bureaus and creditors."
    },
    {
      question: "What can and can't you remove from my credit report?",
      answer: "We can challenge inaccurate, incomplete, or unverifiable negative items on your credit report. We cannot remove accurate, verifiable information. Our focus is on ensuring your credit report reflects only accurate information as required by the Fair Credit Reporting Act."
    },
    {
      question: "Can I cancel my service at any time?",
      answer: "Yes, you can cancel your credit repair service at any time with no penalty. We believe in providing value and earning your business every month. Contact us directly to discuss cancellation or any concerns about your service."
    },
    {
      question: "How does the $1 credit score check work?",
      answer: "The $1 credit score link is provided through MyFreeScoreNow, a third-party service. This may involve a trial offer and/or recurring billing per their terms. Please review their terms carefully and cancel directly with MyFreeScoreNow if you do not wish to continue their service."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Skip Link for Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="text-xl font-bold text-white">
              Synergetic Consulting Services
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <button
                onClick={handleCreditScoreCheck}
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Check My $1 Credit Score
              </button>
              <button
                onClick={scrollToSignup}
                className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 font-semibold px-6 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Start Credit Repair
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
              Build Strong Credit. Get Approved.
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional credit repair services to help remove inaccurate negative items from your credit report. Results vary and are not guaranteed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={handleCreditScoreCheck}
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Check My $1 Credit Score
              </button>
              <button
                onClick={scrollToSignup}
                className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Start Credit Repair
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-gray-300">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-yellow-500" />
                <span>FCRA-Aware</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-yellow-500" />
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <span>5-Star Reviews</span>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 lg:py-24 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  number: "1",
                  title: "Get Your Credit Reports",
                  description: "We analyze your credit reports from all three bureaus to identify inaccurate or questionable items."
                },
                {
                  number: "2", 
                  title: "Create Dispute Strategy",
                  description: "Our team develops a personalized plan to challenge negative items that may be hurting your score."
                },
                {
                  number: "3",
                  title: "Monitor Progress", 
                  description: "We handle the dispute process and keep you updated on results as your credit profile improves."
                },
                {
                  number: "4",
                  title: "Build Strong Credit",
                  description: "Get guidance on maintaining and building positive credit history for long-term financial success."
                }
              ].map((step, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-700 text-center">
                  <div className="w-12 h-12 bg-yellow-500 text-gray-900 rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Signup Form Section */}
        <section id="signup" className="py-16 lg:py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6">Start Your Credit Repair Journey</h2>
            <p className="text-xl text-gray-300 text-center mb-8 max-w-3xl mx-auto">
              Complete the form below to get started with our professional credit repair services. Our team will review your information and contact you within 24 hours.
            </p>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full h-96 lg:h-[600px] rounded-xl overflow-hidden border border-gray-700 bg-gray-800">
                <iframe
                  src="https://secure.disputeprocess.com/jsp/custom_form.jsp?tab_id=NjVSUmw4d3ZOM2xjdVdjTDJvcVFkQT09&cust_type=2&company_id=LzJlSkg3aEp4Yy84dENJKzNLek90Zz09&isLinkFromIframe=1&redirect_url="
                  title="Credit Repair Intake Form"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
              
              <div className="text-center mt-6">
                <a
                  href="https://secure.disputeprocess.com/jsp/custom_form.jsp?tab_id=NjVSUmw4d3ZOM2xjdVdjTDJvcVFkQT09&cust_type=2&company_id=LzJlSkg3aEp4Yy84dENJKzNLek90Zz09&isLinkFromIframe=1&redirect_url="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-block focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Open Form in New Tab
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Questions?</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left bg-gray-900 hover:bg-gray-700 transition-colors duration-300 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-inset"
                    aria-expanded={openFaq === index}
                  >
                    <span className="font-semibold">{item.question}</span>
                    <ChevronDown 
                      className={`h-5 w-5 text-yellow-500 transition-transform duration-300 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 py-4 bg-gray-900 border-t border-gray-700">
                      <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-yellow-500 mb-4">Contact Us</h3>
              <div className="space-y-2">
                <a 
                  href="tel:310-735-4143" 
                  className="block text-gray-300 hover:text-yellow-500 transition-colors focus:outline-none focus:text-yellow-500"
                >
                  📞 310-735-4143
                </a>
                <a 
                  href="mailto:funding@synergeticconsult.com" 
                  className="block text-gray-300 hover:text-yellow-500 transition-colors focus:outline-none focus:text-yellow-500"
                >
                  ✉️ funding@synergeticconsult.com
                </a>
                <a 
                  href="https://synergeticconsult.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-yellow-500 transition-colors focus:outline-none focus:text-yellow-500"
                >
                  🌐 synergeticconsult.com
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-yellow-500 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-gray-700 hover:bg-yellow-500 hover:text-gray-900 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                    aria-label={`Follow us on ${social}`}
                  >
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Compliance */}
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-xs text-gray-400 leading-relaxed max-w-4xl mx-auto mb-4">
              Synergetic Consulting Services is not a credit bureau, lender, or law firm. We provide education and dispute assistance consistent with the Fair Credit Reporting Act (FCRA) and the Credit Repair Organizations Act (CROA). Results vary and are not guaranteed. The $1 credit score link is provided via MyFreeScoreNow and may involve a trial and/or recurring billing per their terms; review and cancel directly with the provider if you do not wish to continue.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-xs">
              <a href="#privacy" className="text-yellow-500 hover:text-yellow-400 focus:outline-none focus:underline">
                Privacy Policy
              </a>
              <a href="#terms" className="text-yellow-500 hover:text-yellow-400 focus:outline-none focus:underline">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CreditRepairLandingPage;