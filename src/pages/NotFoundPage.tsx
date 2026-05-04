import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  // Set document title
  React.useEffect(() => {
    document.title = 'Page Not Found - Synergetic Consulting Services';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-primary-800 mb-6">Page Not Found</h2>
        <p className="text-secondary-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="btn-primary w-full sm:w-auto">
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="btn-outline w-full sm:w-auto"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;