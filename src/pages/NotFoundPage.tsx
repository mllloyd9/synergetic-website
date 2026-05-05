import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Page Not Found — The Wealth Lab';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-bone p-4 pt-32">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-9xl font-bold text-brand-accent mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-brand-ink mb-6">Page Not Found</h2>
        <p className="text-brand-slate mb-8">
          The page you're looking for has moved or no longer exists.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="btn-primary w-full sm:w-auto">
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-secondary w-full sm:w-auto"
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
