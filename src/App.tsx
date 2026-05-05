import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import WebinarPage from './pages/WebinarPage';
import ApplyPage from './pages/ApplyPage';
import IdClubPage from './pages/IdClubPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/id-club" element={<IdClubPage />} />
          <Route path="/webinar" element={<WebinarPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
