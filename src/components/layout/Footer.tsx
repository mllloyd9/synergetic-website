import React from 'react';
import { Link } from 'react-router-dom';
import { FlaskConical, Instagram, Music, Facebook, Twitter } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/synergeticconsult/30min';
const SKOOL_URL = 'https://www.skool.com/the-wealth-lab-7543/about';
const ID_CLUB_URL =
  'https://idclub.com/signup417ar.asp?GUID=RFIHSDHEAX79&tGUID=76B7B77E-5F04-4A3B-AAED-4D206890235D';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-ink text-white">
      <div className="container-wrapper pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="flex items-center space-x-2 text-white mb-4">
              <FlaskConical className="h-7 w-7 text-brand-accent" />
              <span className="text-xl font-bold">The Wealth Lab</span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your blueprint to wealth begins here.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/synergeticconsulting"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-brand-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@synergeticconsulting_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-gray-400 hover:text-brand-accent transition-colors"
              >
                <Music className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/thawealthlab"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-400 hover:text-brand-accent transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.twitter.com/synergeticconsult"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-400 hover:text-brand-accent transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-5 text-white uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-brand-accent transition-colors">Home</Link></li>
              <li>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="footer-book-call"
                  className="text-gray-300 hover:text-brand-accent transition-colors"
                >
                  Book a Call
                </a>
              </li>
              <li><Link to="/id-club" className="text-gray-300 hover:text-brand-accent transition-colors">ID Club</Link></li>
              <li>
                <a
                  href={SKOOL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="footer-community"
                  className="text-gray-300 hover:text-brand-accent transition-colors"
                >
                  Community
                </a>
              </li>
              <li><Link to="/webinar" className="text-gray-300 hover:text-brand-accent transition-colors">Webinar</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-5 text-white uppercase tracking-wide">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/#services" className="text-gray-300 hover:text-brand-accent transition-colors">Credit Repair</Link></li>
              <li><Link to="/#services" className="text-gray-300 hover:text-brand-accent transition-colors">Credit Sweep</Link></li>
              <li><Link to="/#services" className="text-gray-300 hover:text-brand-accent transition-colors">Business Funding Stack</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-5 text-white uppercase tracking-wide">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-brand-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-300 hover:text-brand-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 space-y-4">
          <p className="text-gray-400 text-xs leading-relaxed max-w-4xl">
            Synergetic Consulting Services LLC is a credit repair organization as
            defined under federal and state law. You have the right to dispute
            inaccurate information in your credit report without the use of a
            credit repair organization.
          </p>
          <p className="text-gray-500 text-sm">
            &copy; 2026 Synergetic Consulting Services LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
