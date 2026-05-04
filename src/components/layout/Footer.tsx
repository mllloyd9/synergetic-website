import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Instagram, Music, Facebook } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-wrapper pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <Logo isWhite className="h-8 mb-6" />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Building generational wealth through financial education, 
              business structure, and community empowerment.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/synergeticconsulting" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@synergeticconsulting_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Music className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/thawealthlab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Marcus
                </Link>
              </li>
              <li>
                <Link to="/wealth-lab" className="text-gray-300 hover:text-white transition-colors">
                  The Wealth Lab
                </Link>
              </li>
              <li>
                <Link to="/webinar" className="text-gray-300 hover:text-white transition-colors">
                  Free Webinar
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-300 hover:text-white transition-colors">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gray-400 mr-3 shrink-0 mt-0.5" />
                <a href="tel:3107354143" className="text-gray-300 hover:text-white transition-colors">
                  (310) 735-4143
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gray-400 mr-3 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a href="mailto:consultation@synergeticconsult.com" className="text-gray-300 hover:text-white transition-colors block">
                    consultation@synergeticconsult.com
                  </a>
                  <a href="mailto:funding@synergeticconsult.com" className="text-gray-300 hover:text-white transition-colors block">
                    funding@synergeticconsult.com
                  </a>
                  <a href="mailto:marcus@synergeticconsult.com" className="text-gray-300 hover:text-white transition-colors block">
                    marcus@synergeticconsult.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-3 shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  30 N Gould St<br />
                  Sheridan, WY 82801
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Synergetic Consulting Services. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors mr-6">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;