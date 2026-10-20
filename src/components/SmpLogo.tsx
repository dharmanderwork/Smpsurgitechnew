import React from 'react';

interface SmpLogoProps {
  className?: string;
  variant?: 'color' | 'light';
}

export const SmpLogo: React.FC<SmpLogoProps> = ({ 
  className = 'h-8 w-auto',
  variant = 'color' 
}) => {
  return (
    <img
      src="/smp_surgitech_logo.png"
      alt="SMP Surgitech Logo"
      className={`${className} object-contain transition-opacity ${
        variant === 'light' ? 'brightness-0 invert opacity-95' : ''
      }`}
      loading="eager"
    />
  );
};
