import React from 'react';

export interface CardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'accent';
  elevated?: boolean;
  className?: string;
}

/**
 * Card component that uses our custom Tailwind configuration
 */
const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  variant = 'default',
  elevated = false,
  className = '',
}) => {
  // Variant-specific styles using our custom color palette
  const variantClasses = {
    default: 'bg-white border border-neutral-200',
    primary: 'bg-primary-light/10 border border-primary/20 text-primary-dark',
    secondary: 'bg-secondary-light/10 border border-secondary/20 text-secondary-dark',
    accent: 'bg-accent-light/10 border border-accent/20 text-accent-dark',
  };

  // Shadow styles using our custom shadows
  const shadowClass = elevated ? 'shadow-card hover:shadow-hover transition-shadow' : '';

  return (
    <div className={`
      rounded-lg p-6 ${variantClasses[variant]} ${shadowClass} ${className}
    `}>
      {title && (
        <h3 className={`
          font-display font-semibold text-heading
          ${variant === 'default' ? 'text-neutral-800' : ''}
          mb-2
        `}>
          {title}
        </h3>
      )}
      
      {subtitle && (
        <p className={`
          text-sm
          ${variant === 'default' ? 'text-neutral-500' : 'opacity-80'}
          mb-4
        `}>
          {subtitle}
        </p>
      )}
      
      <div className={`
        ${(title || subtitle) ? 'mt-4' : ''}
      `}>
        {children}
      </div>
    </div>
  );
};

export default Card; 