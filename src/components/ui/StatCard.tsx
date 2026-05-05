import React from 'react';

interface StatCardProps {
  number: string;
  label: string;
  icon?: React.ReactNode;
  variant?: 'light' | 'dark';
}

const StatCard: React.FC<StatCardProps> = ({ number, label, icon, variant = 'light' }) => {
  const numberColor = variant === 'dark' ? 'text-white' : 'text-brand-accent';
  const labelColor = variant === 'dark' ? 'text-white/90' : 'text-brand-slate';

  return (
    <div className="text-center">
      {icon && <div className="flex justify-center mb-3">{icon}</div>}
      <div className={`text-4xl sm:text-5xl font-extrabold ${numberColor} mb-2`}>
        {number}
      </div>
      <div className={`text-sm sm:text-base font-medium ${labelColor}`}>{label}</div>
    </div>
  );
};

export default StatCard;
