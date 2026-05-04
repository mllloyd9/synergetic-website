import React from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const PricingPage: React.FC = () => {
  // Set document title
  React.useEffect(() => {
    document.title = 'Services - Synergetic Consulting Services';
  }, []);

  const services = [
    {
      title: "Credit Restoration",
      description: "Essential consulting services for individuals looking to improve their credit score.",
      features: [
        "Credit report analysis",
        "Strategic planning",
        "Progress monitoring",
        "Monthly updates",
        "Personal credit strategy",
        "Priority support"
      ]
    },
    {
      title: "Business Consulting",
      description: "Complete business consulting solution for new and established businesses.",
      features: [
        "Business profile setup",
        "Strategic recommendations",
        "Business monitoring",
        "Funding strategy",
        "Personal consulting support",
        "Priority support"
      ]
    },
    {
      title: "Financial Advisory",
      description: "Ongoing financial guidance and improvement strategies.",
      features: [
        "Monthly advisory sessions",
        "Financial analysis",
        "Custom recommendations",
        "Email support",
        "Strategy adjustments",
        "Progress monitoring"
      ]
    }
  ];

  const products = [
    {
      title: "Personal Tradelines",
      description: "Authorized user positions on established accounts with perfect payment history and age.",
      features: [
        "Accounts with perfect payment history",
        "Various credit limits available",
        "Accounts with long history",
        "Quick reporting to credit bureaus",
        "Detailed guidance on maximizing benefits"
      ]
    },
    {
      title: "Shelf Corporations",
      description: "Pre-established business entities with age and history to help accelerate your business establishment.",
      features: [
        "Entities with established history",
        "Clean financial records",
        "Various age options available",
        "Full documentation provided",
        "Transfer support and guidance"
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary-900 text-white">
        <div className="container-wrapper">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Services
            </h1>
            <p className="text-xl text-primary-100">
              Professional consulting services tailored to your needs. Contact us for detailed pricing information.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container-wrapper">
          <SectionHeader 
            title="Professional Services" 
            subtitle="Comprehensive solutions tailored to your specific needs."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-primary-800 mb-4">{service.title}</h3>
                <p className="text-secondary-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-500 mr-3 shrink-0 mt-0.5" />
                      <span className="text-secondary-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-primary w-full text-center block">
                  Contact for Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-wrapper">
          <SectionHeader 
            title="Financial Products" 
            subtitle="Specialized offerings to accelerate your financial growth."
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-primary-800 mb-4">{product.title}</h3>
                <p className="text-secondary-600 mb-6">{product.description}</p>
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-500 mr-3 shrink-0 mt-0.5" />
                      <span className="text-secondary-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-primary w-full text-center block">
                  Contact for Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container-wrapper">
          <SectionHeader 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about our services."
            centered
          />
          
          <div className="max-w-3xl mx-auto mt-12 space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-primary-800 mb-3">
                How do your services work?
              </h3>
              <p className="text-secondary-700">
                We begin with a comprehensive consultation to understand your needs and goals. From there, we develop a customized strategy tailored to your specific situation.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-primary-800 mb-3">
                How long does the process take?
              </h3>
              <p className="text-secondary-700">
                The timeline varies based on your specific situation and goals. During your consultation, we'll provide a detailed timeline based on your unique circumstances.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-primary-800 mb-3">
                Do you offer payment plans?
              </h3>
              <p className="text-secondary-700">
                Yes, we offer flexible payment options for our services. Contact us to discuss plans that would work best for your situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-800 text-white">
        <div className="container-wrapper text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-3xl mx-auto">
            Contact us for a personalized consultation and detailed pricing information tailored to your needs.
          </p>
          <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100 shadow-lg hover:shadow-xl py-3 px-8 text-lg">
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default PricingPage;