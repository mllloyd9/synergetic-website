import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Instagram, Music, Facebook } from 'lucide-react';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleJoinWealthLab = () => {
    window.open('https://www.skool.com/wealthlabvip/about?ref=e4dc26a0b360432594a38ed51a469405', '_blank');
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-wrapper flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Logo className="h-8 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center space-x-8">
          <Link to="/about" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'}`}>
            About Marcus
          </Link>
          <Link to="/wealth-lab" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'}`}>
            The Wealth Lab
          </Link>
          <Link to="/webinar" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'}`}>
            Webinar
          </Link>
          <Link to="/booking" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'}`}>
            Book Consultation
          </Link>
          <Link to="/contact" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'}`}>
            Contact
          </Link>
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <a 
            href="https://www.instagram.com/synergeticconsulting" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`p-2 rounded-full transition-colors ${isScrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white hover:text-primary-200'}`}
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a 
            href="https://www.tiktok.com/@synergeticconsulting_" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`p-2 rounded-full transition-colors ${isScrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white hover:text-primary-200'}`}
          >
            <Music className="h-5 w-5" />
          </a>
          <a 
            href="https://www.facebook.com/thawealthlab" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`p-2 rounded-full transition-colors ${isScrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white hover:text-primary-200'}`}
          >
            <Facebook className="h-5 w-5" />
          </a>
          <button 
            onClick={handleJoinWealthLab}
            className="btn-primary font-semibold px-6 py-2.5"
          >
            Join The Wealth Lab
          </button>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute w-full bg-white shadow-lg animate-slide-down">
          <div className="container-wrapper py-6">
            <nav className="flex flex-col space-y-4">
              <Link to="/about" className="text-gray-700 hover:text-primary-600 py-2 font-medium">About Marcus</Link>
              <Link to="/wealth-lab" className="text-gray-700 hover:text-primary-600 py-2 font-medium">The Wealth Lab</Link>
              <Link to="/webinar" className="text-gray-700 hover:text-primary-600 py-2 font-medium">Webinar</Link>
              <Link to="/booking" className="text-gray-700 hover:text-primary-600 py-2 font-medium">Book Consultation</Link>
              <Link to="/contact" className="text-gray-700 hover:text-primary-600 py-2 font-medium">Contact</Link>
              <div className="flex items-center space-x-4 pt-4">
                <a 
                  href="https://www.instagram.com/synergeticconsulting" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.tiktok.com/@synergeticconsulting_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600"
                >
                  <Music className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.facebook.com/thawealthlab" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
              <button 
                onClick={handleJoinWealthLab}
                className="btn-primary w-full mt-4 font-semibold"
              >
                Join The Wealth Lab
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;