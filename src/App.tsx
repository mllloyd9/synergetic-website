import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WealthLabPage from './pages/WealthLabPage';
import WebinarPage from './pages/WebinarPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';
import CreditRepairLandingPage from './pages/CreditRepairLandingPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/wealth-lab" element={<WealthLabPage />} />
          <Route path="/webinar" element={<WebinarPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/credit-repair" element={<CreditRepairLandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;