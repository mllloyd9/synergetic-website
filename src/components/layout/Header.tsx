import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, FlaskConical } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/synergeticconsult/30min';

const navLinks = [
  { label: 'Home', href: '/', anchor: 'hero' },
  { label: 'Services', href: '/', anchor: 'services' },
  { label: 'Community', href: '/', anchor: 'community' },
  { label: 'Webinar', href: '/webinar', anchor: null },
  { label: 'ID Club', href: '/id-club', anchor: null },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    anchor: string | null
  ) => {
    if (anchor) {
      e.preventDefault();
      if (location.pathname !== href) {
        navigate(href);
        setTimeout(() => {
          const el = document.getElementById(anchor);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(anchor);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    }
  };

  const linkColor = isScrolled
    ? 'text-brand-ink hover:text-brand-accent'
    : 'text-white hover:text-brand-accent';
  const logoColor = isScrolled ? 'text-brand-ink' : 'text-white';

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-wrapper flex items-center justify-between">
        <Link
          to="/"
          className={`flex items-center space-x-2 ${logoColor}`}
        >
          <FlaskConical className="h-7 w-7 text-brand-accent" />
          <span className="text-lg sm:text-xl font-bold">The Wealth Lab</span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.anchor ? `${link.href}#${link.anchor}` : link.href}
              onClick={(e) => handleNavClick(e, link.href, link.anchor)}
              className={`font-medium transition-colors ${linkColor}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-3">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="header-book-call"
            className="btn-primary text-sm sm:text-base px-4 sm:px-6 py-2.5"
          >
            Book a Call
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-brand-ink' : 'text-white'
            }`}
            aria-label="Toggle menu"
            style={{ minWidth: 44, minHeight: 44 }}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute w-full bg-white shadow-lg animate-slide-down">
          <div className="container-wrapper py-6">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.anchor ? `${link.href}#${link.anchor}` : link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.anchor)}
                  className="text-brand-ink hover:text-brand-accent py-3 font-medium border-b border-gray-100 text-base"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
