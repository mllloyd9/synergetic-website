import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Privacy Policy - Synergetic Consulting Services';
  }, []);

  return (
    <>
      <section className="pt-32 pb-16 bg-primary-900 text-white">
        <div className="container-wrapper">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Privacy Policy
            </h1>
            <p className="text-xl text-primary-100">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wrapper">
          <div className="prose max-w-4xl mx-auto">
            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including:
            </p>
            <ul>
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Financial information necessary for our services</li>
              <li>Communication records between you and our team</li>
              <li>Service usage information</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the collected information to:
            </p>
            <ul>
              <li>Provide and improve our services</li>
              <li>Communicate with you about our services</li>
              <li>Process your transactions</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraud and unauthorized transactions</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            </p>
            <ul>
              <li>Service providers who assist in our operations</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners with your explicit consent</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul>
              <li>Encryption of data in transit and at rest</li>
              <li>Secure server infrastructure</li>
              <li>Regular security assessments</li>
              <li>Employee training on privacy and security practices</li>
            </ul>

            <h2>5. Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent for data processing</li>
            </ul>

            <h2>6. Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
            </p>

            <h2>7. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from minors.
            </p>

            <h2>8. Changes to Privacy Policy</h2>
            <p>
              We may update this privacy policy periodically. We will notify you of any material changes by posting the new policy on our website.
            </p>

            <h2>9. California Privacy Rights</h2>
            <p>
              California residents have additional rights regarding their personal information under the California Consumer Privacy Act (CCPA).
            </p>

            <h2>10. Contact Information</h2>
            <p>
              For questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <ul>
              <li>Email: consultation@synergeticconsult.com</li>
              <li>Phone: 213-684-4604</li>
              <li>Address: Los Angeles, CA</li>
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

export default PrivacyPolicyPage;