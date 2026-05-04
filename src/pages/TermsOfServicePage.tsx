import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfServicePage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Terms of Service - Synergetic Consulting Services';
  }, []);

  return (
    <>
      <section className="pt-32 pb-16 bg-primary-900 text-white">
        <div className="container-wrapper">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Terms of Service
            </h1>
            <p className="text-xl text-primary-100">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wrapper">
          <div className="prose max-w-4xl mx-auto">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the services provided by Synergetic Consulting Services ("we," "our," or "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2>2. Services Description</h2>
            <p>
              We provide credit restoration, business consulting, and financial advisory services. Our services include but are not limited to credit report analysis, business credit establishment, and financial consultation.
            </p>

            <h2>3. Client Responsibilities</h2>
            <p>
              You agree to:
            </p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account information</li>
              <li>Notify us immediately of any unauthorized use</li>
              <li>Use our services in compliance with applicable laws</li>
            </ul>

            <h2>4. Payment Terms</h2>
            <p>
              Payment terms will be outlined in your service agreement. All fees are non-refundable unless otherwise specified in writing.
            </p>

            <h2>5. Service Limitations</h2>
            <p>
              While we strive to achieve the best possible outcomes, we cannot guarantee specific results. Success depends on various factors, including but not limited to individual circumstances and market conditions.
            </p>

            <h2>6. Confidentiality</h2>
            <p>
              We maintain strict confidentiality of all client information. Please refer to our <Link to="/privacy-policy" className="text-primary-600 hover:text-primary-700">Privacy Policy</Link> for details on how we handle your information.
            </p>

            <h2>7. Intellectual Property</h2>
            <p>
              All content, materials, and methodologies provided through our services remain our intellectual property and may not be reproduced without explicit permission.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>

            <h2>9. Termination</h2>
            <p>
              We reserve the right to terminate or suspend services at our discretion. You may terminate services according to the terms outlined in your service agreement.
            </p>

            <h2>10. Changes to Terms</h2>
            <p>
              We may modify these terms at any time. Continued use of our services following any changes constitutes acceptance of the modified terms.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These terms are governed by the laws of the State of California. Any disputes shall be resolved in the courts of Los Angeles County, California.
            </p>

            <h2>12. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at:
            </p>
            <ul>
              <li>Email: consultation@synergeticconsult.com</li>
              <li>Phone: 213-684-4604</li>
            </ul>

            <p className="text-sm text-secondary-500 mt-8">
              Last updated: March 1, 2024
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfServicePage;