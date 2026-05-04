import React from 'react';
import { Star, TrendingUp, Clock, CheckCircle, Shield } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

const TestimonialsPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Success Stories - Synergetic Consulting Services';
  }, []);

  const hardInquiryRemovals = [
    "Hard Inquiry #1",
    "Hard Inquiry #2",
    "Hard Inquiry #3",
    "Hard Inquiry #4",
    "Hard Inquiry #5",
    "Hard Inquiry #6"
  ];

  const accountRemovals = [
    "SELF FINANCIAL INC / LEA",
    "AUSTIN CAPITAL BANK SSB",
    "TOYOTA MOTOR CREDIT",
    "COMENITY BANK/VCTRSSEC",
    "MONEYLION INC",
    "FLAGSHIP CREDIT ACCEPTAN",
    "FIRST PREMIER BANK",
    "SUNRISE BANK SELF LENDER",
    "VERIZON WIRELESS - SOUTH",
    "CAPITAL ONE"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary-900 text-white">
        <div className="container-wrapper">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Real Results in Record Time
            </h1>
            <p className="text-xl text-primary-100">
              We deliver rapid results in as little as 30 days. See how we've helped our clients achieve significant credit improvements and remove negative items.
            </p>
          </div>
        </div>
      </section>

      {/* TransUnion Success Story */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-wrapper">
          <SectionHeader
            title="Recent Success Stories"
            subtitle="Real results achieved for our clients in 30 days or less"
            centered
          />

          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-primary-800">TransUnion Success Story</h3>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center bg-green-50 px-4 py-2 rounded-full">
                      <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-lg font-semibold text-green-500">+108 Points</span>
                    </div>
                    <div className="flex items-center bg-primary-50 px-4 py-2 rounded-full">
                      <Clock className="h-5 w-5 text-primary-600 mr-2" />
                      <span className="text-lg font-semibold text-primary-600">30 Days</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-semibold text-green-800 mb-4 flex items-center">
                      <Shield className="h-5 w-5 mr-2" />
                      Major Items Removed:
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-center text-green-700">
                        <CheckCircle className="h-5 w-5 mr-3" />
                        Bankruptcy Public Record
                      </li>
                      <li className="flex items-center text-green-700">
                        <CheckCircle className="h-5 w-5 mr-3" />
                        Collections USA Account
                      </li>
                      <li className="flex items-center text-green-700">
                        <CheckCircle className="h-5 w-5 mr-3" />
                        TransWorld Systems Collection
                      </li>
                    </ul>
                  </div>

                  <div className="bg-primary-50 rounded-lg p-6">
                    <h4 className="font-semibold text-primary-800 mb-4 flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Hard Inquiries Removed:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {hardInquiryRemovals.map((inquiry, index) => (
                        <div key={index} className="flex items-center text-primary-700">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          <span>Hard Inquiry Removed</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Account Removals Section */}
      <section className="py-16 md:py-24">
        <div className="container-wrapper">
          <SectionHeader
            title="Successful Account Removals"
            subtitle="Negative accounts we've successfully removed for our clients"
            centered
          />

          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {accountRemovals.map((account, index) => (
                  <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-primary-800">{account}</h4>
                      <p className="text-sm text-secondary-600">Successfully Removed</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-800 text-white">
        <div className="container-wrapper text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Credit?
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-3xl mx-auto">
            Join our satisfied clients and see significant results in 30 days or less. Our proven process delivers real results, fast.
          </p>
          <button
            onClick={() => window.open('https://calendly.com/consultation-synergeticconsult/30min', '_blank')}
            className="btn bg-white text-primary-700 hover:bg-gray-100 shadow-lg hover:shadow-xl py-3 px-8 text-lg"
          >
            Schedule Your Free Consultation
          </button>
        </div>
      </section>
    </>
  );
};

export default TestimonialsPage;