import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  onClick
}) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-md hover:shadow-lg hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1 overflow-hidden ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const CardImage: React.FC<CardImageProps> = ({ 
  src, 
  alt, 
  className = '' 
}) => {
  return (
    <div className="relative w-full pt-[56.25%] overflow-hidden bg-gradient-to-br from-accent-blue to-accent-purple">
      <img 
        src={src} 
        alt={alt} 
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105 ${className}`}
      />
    </div>
  );
};

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`p-5 ${className}`}>
      {children}
    </div>
  );
};

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <h3 className={`text-lg font-heading font-semibold text-gray-900 mb-2 ${className}`}>
      {children}
    </h3>
  );
};

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <p className={`text-gray-600 text-sm leading-relaxed ${className}`}>
      {children}
    </p>
  );
};

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`px-5 py-4 bg-gray-50 border-t border-gray-100 ${className}`}>
      {children}
    </div>
  );
};