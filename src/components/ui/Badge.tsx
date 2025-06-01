import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'new' | 'popular';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2';
  
  const variantStyles = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-primary bg-opacity-10 text-primary',
    secondary: 'bg-secondary bg-opacity-10 text-secondary',
    outline: 'text-foreground border border-input',
    new: 'bg-blue-100 text-blue-800',
    popular: 'bg-amber-100 text-amber-800',
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};