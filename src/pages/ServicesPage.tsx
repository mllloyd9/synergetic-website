import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CreditCard, Building2, FileText, Briefcase, CheckCircle, Shield, ArrowRight, Award, BadgeCheck } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    document.title = 'Our Services - Synergetic Consulting Services';
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary-900 text-white">
        <div className="container-wrapper">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Professional Financial Services
            </h1>
            <p className="text-xl text-primary-100">
              Comprehensive solutions for credit restoration, business credit establishment, and financial growth for individuals and businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Credit Restoration Section */}
      <section id="credit-restoration" className="py-16 md:py-24">
        <div className="container-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="p-3 rounded-full bg-primary-50 inline-flex items-center justify-center w-14 h-14 mb-5">
                <CreditCard className="h-6 w-6 text-primary-600" />
              </div>
              <h2 className="text-3xl font-bold text-primary-800 mb-6">Credit Restoration Services</h2>
              <p className="text-secondary-700 mb-6">
                Our comprehensive credit restoration services help you identify and address negative items on your credit report, improving your score and financial standing.
              </p>
              
              <h3 className="text-xl font-semibold text-primary-700 mb-4">What we offer:</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Detailed credit report analysis",
                  "Dispute resolution for inaccurate items",
                  "Personalized credit improvement strategies",
                  "Guidance on building positive credit history",
                  "Ongoing monitoring and support"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-3 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/contact" className="btn-primary inline-flex">
                Get Started
              </Link>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
              <h3 className="text-2xl font-semibold text-primary-800 mb-4">Credit Restoration Process</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-primary-700">Initial Analysis</h4>
                    <p className="text-secondary-600">We analyze your credit reports from all three bureaus to identify issues.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-primary-700">Dispute Strategy</h4>
                    <p className="text-secondary-600">We create a customized plan to address inaccurate or negative items.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-primary-700">Resolution Process</h4>
                    <p className="text-secondary-600">We work with credit bureaus and creditors to resolve issues.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-4">
                    4
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-primary-700">Credit Building</h4>
                    <p className="text-secondary-600">We help you implement strategies to build positive credit history.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Business Credit Section */}
      <section id="business-credit" className="py-16 md:py-24 bg-gray-50">
        <div className="container-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-2xl font-semibold text-primary-800 mb-6">Strategic Business Advantages</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-2 rounded-full bg-primary-50 text-primary-600 mr-4">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-primary-700">Enhanced Business Credibility</h4>
                      <p className="text-secondary-600">Establish a strong foundation with proper business structure and credentials.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-2 rounded-full bg-primary-50 text-primary-600 mr-4">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-primary-700">Premium Business Solutions</h4>
                      <p className="text-secondary-600">Access exclusive business enhancement opportunities and strategic partnerships.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-2 rounded-full bg-primary-50 text-primary-600 mr-4">
                      <BadgeCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-primary-700">Contract & Bid Qualification</h4>
                      <p className="text-secondary-600">Position your business for government and corporate contract opportunities.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-primary-50 rounded-lg">
                  <h4 className="text-lg font-semibold text-primary-800 mb-2">Elite Business Package</h4>
                  <p className="text-secondary-600 mb-4">
                    Unlock advanced business positioning strategies and premium credentials that set your business apart in competitive markets.
                  </p>
                  <Link to="/contact" className="btn-primary inline-flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="p-3 rounded-full bg-primary-50 inline-flex items-center justify-center w-14 h-14 mb-5">
                <Building2 className="h-6 w-6 text-primary-600" />
              </div>
              <h2 className="text-3xl font-bold text-primary-800 mb-6">Business Credit Setup & Building</h2>
              <p className="text-secondary-700 mb-6">
                Establish and grow your business credit to access funding, improve vendor relationships, and build a strong financial foundation for your company.
              </p>
              
              <h3 className="text-xl font-semibold text-primary-700 mb-4">Our business credit services include:</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Business entity formation and structuring",
                  "Business credit profile setup with major bureaus",
                  "Strategic credit building plans for rapid growth",
                  "Access to vendor and store credit opportunities",
                  "Guidance on securing business loans and lines of credit"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-3 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/contact" className="btn-primary inline-flex">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Consultations Section */}
      <section id="consultations" className="py-16 md:py-24">
        <div className="container-wrapper">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="p-3 rounded-full bg-primary-50 inline-flex items-center justify-center w-14 h-14 mb-5">
              <FileText className="h-6 w-6 text-primary-600" />
            </div>
            <h2 className="text-3xl font-bold text-primary-800 mb-6">Financial Consultations</h2>
            <p className="text-secondary-700">
              Our expert consultations provide personalized guidance to help you make informed financial decisions, whether for personal finance or business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
              <h3 className="text-xl font-semibold text-primary-800 mb-4">Personal Financial Planning</h3>
              <p className="text-secondary-600 mb-6">
                Comprehensive guidance to help you manage your personal finances, reduce debt, and build wealth.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-primary-500 mr-2" />
                  <span className="text-secondary-700">Debt reduction strategies</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-primary-500 mr-2" />
                  <span className="text-secondary-700">Budget planning</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-primary-500 mr-2" />
                  <span className="text-secondary-700">Savings optimization</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
              <h3 className="text-xl font-semibold text-primary-800 mb-4">Business Financial Strategy</h3>
              <p className="text-secondary-600 mb-6">
                Strategic advice to optimize your business finances, improve cash flow, and plan for growth.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-primary-500 mr-2" />
                  <span className="text-secondary-700">Cash flow management</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-primary-500 mr-2" />
                  <span className="text-secondary-700">Growth financing options</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-primary-500 mr-2" />
                  <span className="text-secondary-700">Expense optimization</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
              <h3 className="text-xl font-semibold text-primary-800 mb-4">Credit Improvement Guidance</h3>
              <p className="text-secondary-600 mb-6">
                Expert advice on improving your credit profile and maximizing your credit score.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-primary-500 mr-2" />
                  <span className="text-secondary-700">Score optimization techniques</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-primary-500 mr-2" />
                  <span className="text-secondary-700">Credit utilization strategies</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-primary-500 mr-2" />
                  <span className="text-secondary-700">Account management advice</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/contact" className="btn-primary inline-flex">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section id="products" className="py-16 md:py-24 bg-gray-50">
        <div className="container-wrapper">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="p-3 rounded-full bg-primary-50 inline-flex items-center justify-center w-14 h-14 mb-5">
              <Briefcase className="h-6 w-6 text-primary-600" />
            </div>
            <h2 className="text-3xl font-bold text-primary-800 mb-6">Financial Products</h2>
            <p className="text-secondary-700">
              Specialized financial products to accelerate your credit building and business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-2xl font-semibold text-primary-800 mb-4">Personal Tradelines</h3>
              <p className="text-secondary-700 mb-6">
                Authorized user positions on established credit accounts to help boost your credit score quickly.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Accounts with perfect payment history",
                  "Various credit limits available",
                  "Accounts with long history",
                  "Quick reporting to credit bureaus",
                  "Detailed guidance on maximizing benefits"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-3 shrink-0 mt-0.5" />
                    <span className="text-secondary-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/pricing" className="btn-primary inline-flex">
                View Pricing
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-2xl font-semibold text-primary-800 mb-4">Shelf Corporations</h3>
              <p className="text-secondary-700 mb-6">
                Pre-established business entities with age and history to accelerate your business credit building.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Entities with established history",
                  "Clean financial records",
                  "Various age options available",
                  "Full documentation provided",
                  "Transfer support and guidance"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-3 shrink-0 mt-0.5" />
                    <span className="text-secondary-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/pricing" className="btn-primary inline-flex">
                View Options
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-800 text-white">
        <div className="container-wrapper text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your Financial Future?</h2>
          <p className="text-xl text-primary-100 mb-10 max-w-3xl mx-auto">
            Take the first step toward financial freedom with a free consultation. Our experts are ready to help you achieve your goals.
          </p>
          <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100 shadow-lg hover:shadow-xl py-3 px-8 text-lg">
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;