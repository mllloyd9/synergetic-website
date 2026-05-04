import React, { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Music, Facebook, Send, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Contact Us - Synergetic Consulting Services';
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ 
      submitted: true, 
      success: true, 
      message: 'Thank you! Your message has been sent. We will contact you within 24 hours.' 
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const handleBookConsultation = () => {
    window.open('https://join.synergeticconsult.com/booking', '_blank');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white">
        <div className="container-wrapper">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Get in 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to start your wealth-building journey? We're here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-20 bg-white">
        <div className="container-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-8">
                Let's Connect
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Whether you have questions about The Wealth Lab, need guidance on your financial journey, 
                or want to explore working together, we're here to help.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="p-4 rounded-full bg-blue-100 text-blue-600 mr-6 shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-700 text-lg mb-1">
                      <a href="tel:3107354143" className="hover:text-blue-600 transition-colors">
                        (310) 735-4143
                      </a>
                    </p>
                    <p className="text-gray-500">
                      Monday - Friday, 9am - 6pm PST
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-4 rounded-full bg-purple-100 text-purple-600 mr-6 shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                    <div className="space-y-1">
                      <p className="text-gray-700">
                        <span className="font-semibold">General Inquiries:</span><br />
                        <a href="mailto:consultation@synergeticconsult.com" className="hover:text-purple-600 transition-colors">
                          consultation@synergeticconsult.com
                        </a>
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold">Funding Help:</span><br />
                        <a href="mailto:funding@synergeticconsult.com" className="hover:text-purple-600 transition-colors">
                          funding@synergeticconsult.com
                        </a>
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold">Marcus Directly:</span><br />
                        <a href="mailto:marcus@synergeticconsult.com" className="hover:text-purple-600 transition-colors">
                          marcus@synergeticconsult.com
                        </a>
                      </p>
                    </div>
                    <p className="text-gray-500 mt-2">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-4 rounded-full bg-green-100 text-green-600 mr-6 shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                    <p className="text-gray-700">
                      30 N Gould St<br />
                      Sheridan, WY 82801
                    </p>
                    <p className="text-gray-500 mt-2">
                      Virtual consultations available nationwide
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.instagram.com/synergeticconsulting" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://www.tiktok.com/@synergeticconsulting_" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition-colors"
                  >
                    <Music className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://www.facebook.com/thawealthlab" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <button 
                  onClick={handleBookConsultation}
                  className="btn bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 py-3 px-8 text-lg font-bold shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Book Free Consultation
                </button>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-200">
              <h2 className="text-3xl font-black text-gray-900 mb-6">
                Send Us a Message
              </h2>
              
              {formStatus && (
                <div className={`p-4 rounded-lg mb-6 ${formStatus.success ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    {formStatus.message}
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-900 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="wealth-lab">The Wealth Lab Membership</option>
                    <option value="consultation">Free Consultation</option>
                    <option value="credit-repair">Credit Repair Services</option>
                    <option value="business-funding">Business Funding</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="media">Media Inquiries</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 w-full py-4 text-lg font-bold shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-wrapper">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Quick answers to common questions about our services and process.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  question: "How quickly can I expect a response?",
                  answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly at (310) 735-4143."
                },
                {
                  question: "Is the initial consultation really free?",
                  answer: "Yes, absolutely. We offer a genuine 45-minute strategy session with no hidden costs or high-pressure sales tactics. Our goal is to provide value and help you move forward."
                },
                {
                  question: "Do you work with clients outside of Wyoming?",
                  answer: "Yes, we work with clients nationwide through virtual consultations and our online Wealth Lab community. Location is not a barrier to getting started."
                },
                {
                  question: "What makes your approach different?",
                  answer: "Our approach is based on real experience and proven results. Marcus's personal transformation from incarceration to financial freedom gives us unique insight into overcoming real challenges."
                },
                {
                  question: "Can you guarantee specific results?",
                  answer: "While we can't guarantee specific outcomes, we can guarantee that our methods are proven and that we'll provide you with the tools and support needed to succeed."
                },
                {
                  question: "How do I know if The Wealth Lab is right for me?",
                  answer: "The best way to find out is through a free consultation. We'll assess your situation and goals to determine if our program is a good fit for your needs."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
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

export default ContactPage;