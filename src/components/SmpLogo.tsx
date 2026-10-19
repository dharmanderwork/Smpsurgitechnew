import React from 'react';

interface SmpLogoProps {
  className?: string;
  variant?: 'color' | 'light';
}

export const SmpLogo: React.FC<SmpLogoProps> = ({ 
  className = 'h-8 w-auto',
  variant = 'color' 
}) => {
  const isLight = variant === 'light';
  const tealColor = isLight ? '#5eead4' : '#38B2A6';
  const purpleColor = isLight ? '#c4b5fd' : '#52437B';

  return (
    <svg
      viewBox="0 0 520 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="SMP Surgitech Logo"
      role="img"
    >
      {/* Left Teal ECG Heartbeat Pulse Wave */}
      <path
        d="M 8 48 L 28 48 L 34 43 L 40 54 L 47 13 L 58 78 L 66 36 L 72 48 L 88 48"
        stroke={tealColor}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* SMP Text in Serif Font */}
      <text
        x="96"
        y="60"
        fontFamily="Georgia, 'Times New Roman', Cambria, serif"
        fontSize="46"
        fontWeight="700"
        letterSpacing="0.5"
        fill={tealColor}
      >
        SMP
      </text>

      {/* SURGITECH Text in Serif Font */}
      <text
        x="208"
        y="60"
        fontFamily="Georgia, 'Times New Roman', Cambria, serif"
        fontSize="46"
        fontWeight="700"
        letterSpacing="1.2"
        fill={purpleColor}
      >
        SURGITECH
      </text>

      {/* Right Purple ECG Heartbeat Pulse Wave */}
      <path
        d="M 444 48 L 454 48 L 460 43 L 466 54 L 473 13 L 484 78 L 492 36 L 498 48 L 512 48"
        stroke={purpleColor}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
