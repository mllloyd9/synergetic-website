import React from 'react';
import { Building2 } from 'lucide-react';

interface LogoProps {
  className?: string;
  isWhite?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", isWhite = false }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className={`flex items-center space-x-2 ${isWhite ? 'text-white' : 'text-blue-600'}`}>
        <Building2 className="h-8 w-8" />
        <span className="text-xl font-bold">The Wealth Lab</span>
      </div>
    </div>
  );
};

export default Logo;