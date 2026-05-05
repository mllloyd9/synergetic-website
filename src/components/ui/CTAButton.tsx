import React from 'react';

export type CTAVariant = 'primary' | 'secondary' | 'ghost';

interface CTAButtonProps {
  label: string;
  href: string;
  variant?: CTAVariant;
  dataCta: string;
  className?: string;
  external?: boolean;
}

const variantClasses: Record<CTAVariant, string> = {
  primary:
    'bg-brand-accent text-white hover:bg-brand-accentDark shadow-card hover:shadow-card-lg',
  secondary:
    'bg-white text-brand-ink border-2 border-brand-ink hover:bg-brand-ink hover:text-white',
  ghost:
    'bg-transparent text-white border-2 border-white hover:bg-white hover:text-brand-ink',
};

const baseClasses =
  'inline-flex items-center justify-center rounded-md py-3 px-6 text-center text-base font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2';

const CTAButton: React.FC<CTAButtonProps> = ({
  label,
  href,
  variant = 'primary',
  dataCta,
  className = '',
  external,
}) => {
  const isExternal =
    external !== undefined
      ? external
      : /^https?:\/\//i.test(href) || href.startsWith('mailto:');

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  const minTap = { minHeight: 44 };

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        data-cta={dataCta}
        className={classes}
        style={minTap}
      >
        {label}
      </a>
    );
  }

  return (
    <a href={href} data-cta={dataCta} className={classes} style={minTap}>
      {label}
    </a>
  );
};

export default CTAButton;
