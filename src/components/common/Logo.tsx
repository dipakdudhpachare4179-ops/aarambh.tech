import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  showDevanagari?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dark' | 'light' | 'monochrome';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showText = true,
  showDevanagari = false,
  size = 'md',
  variant = 'light',
}) => {
  const sizeMap = {
    sm: { circle: 30, text: 'text-sm', sub: 'text-[9px]' },
    md: { circle: 38, text: 'text-base', sub: 'text-[10px]' },
    lg: { circle: 50, text: 'text-xl', sub: 'text-xs' },
    xl: { circle: 66, text: 'text-2xl', sub: 'text-sm' },
  };

  const current = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Exact Vector Emblem from uploaded Aarambh.tech branding image */}
      <div 
        className="relative shrink-0 flex items-center justify-center rounded-full overflow-hidden transition-transform duration-300 hover:scale-105"
        style={{ width: current.circle, height: current.circle }}
      >
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Dark charcoal circular badge matching uploaded image */}
          <circle cx="48" cy="50" r="38" fill={variant === 'dark' ? '#18191c' : '#28292c'} />
          
          {/* Subtle perimeter rim */}
          <circle cx="48" cy="50" r="37.5" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />

          {/* Letter 'A' - bold slanted uppercase A cut-out inside circle */}
          <path
            d="M26 72L40 28H52L66 72H56L52 60H36L32 72H26ZM39 50H49L44 34H43.8L39 50Z"
            fill="#ffffff"
          />

          {/* Lowercase 't' extending out and intersecting */}
          <path
            d="M58 32V42H70V49H58V65C58 68.5 60 70 64.5 70H70V76C63 76 51 75 51 64V49H45V42H51V32H58Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-baseline gap-0.5">
            <span className={`font-display font-extrabold tracking-tight text-white ${current.text}`}>
              Aarambh
            </span>
            <span className={`font-display font-bold text-sky-400 ${current.text}`}>
              .tech
            </span>
          </div>
          {showDevanagari ? (
            <span className={`text-neutral-500 font-medium tracking-wide mt-0.5 ${current.sub}`}>
              आरंभ टेक एजेंसी
            </span>
          ) : (
            <span className={`text-neutral-400 font-mono-custom tracking-wider uppercase mt-0.5 ${current.sub}`}>
              Digital Agency
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Logo;
