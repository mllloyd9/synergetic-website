import React from 'react';
import SEO from '../components/ui/SEO';
import HeroSection from '../components/sections/home/HeroSection';
import TrustBarSection from '../components/sections/home/TrustBarSection';
import ProblemSection from '../components/sections/home/ProblemSection';
import ServicesSection from '../components/sections/home/ServicesSection';
import VideoTestimonialsSection from '../components/sections/home/VideoTestimonialsSection';
import CaseStudySection from '../components/sections/home/CaseStudySection';
import HowItWorksSection from '../components/sections/home/HowItWorksSection';
import CommunitySection from '../components/sections/home/CommunitySection';
import WebinarSection from '../components/sections/home/WebinarSection';
import IdClubSection from '../components/sections/home/IdClubSection';
import NewsletterSection from '../components/sections/home/NewsletterSection';
import FAQSection from '../components/sections/home/FAQSection';
import FinalCtaSection from '../components/sections/home/FinalCtaSection';

const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title="The Wealth Lab — Credit Repair & Business Funding"
        description="We take people from the 400s to the 700s. Done-for-you credit repair and business funding for entrepreneurs who are done being told no."
        ogImage="/marcus-community.jpg"
      />
      <HeroSection />
      <TrustBarSection />
      <ProblemSection />
      <ServicesSection />
      <VideoTestimonialsSection />
      <CaseStudySection />
      <HowItWorksSection />
      <CommunitySection />
      <WebinarSection />
      <IdClubSection />
      <NewsletterSection />
      <FAQSection />
      <FinalCtaSection />
    </>
  );
};

export default HomePage;
