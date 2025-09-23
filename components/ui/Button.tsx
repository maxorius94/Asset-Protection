import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', variant = 'primary', href }) => {
  const baseClasses = 'inline-block text-center px-8 py-4 text-lg font-semibold rounded-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark';
  
  const variantClasses = {
    primary: 'bg-brand-gold text-brand-dark hover:bg-yellow-500',
    secondary: 'bg-transparent border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark'
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={combinedClasses}
    >
      {children}
    </button>
  );
};

export default Button;