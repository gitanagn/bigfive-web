import { Card, CardHeader } from './Card';
import type { ReactNode } from 'react';

type Theme = 'blue' | 'green' | 'purple' | 'orange' | 'gray' | 'brand-green';

interface ConsultationCTAProps {
  className?: string;
  text?: ReactNode;
  ctaLink?: string;
  ctaLabel?: string;
  emoji?: string;
  theme?: Theme;
  ctaTheme?: 'button' | 'link';
}

const themeStyles: Record<Theme, {
  bg: string;
  border: string;
  text: string;
  hover: string;
  buttonBg: string;
  buttonText: string;
  buttonBorder: string;
}> = {
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-600',
    hover: 'hover:text-blue-800',
    buttonBg: 'bg-blue-600 hover:bg-blue-700',
    buttonText: 'text-white',
    buttonBorder: 'border-blue-700',
  },
  green: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-600',
    hover: 'hover:text-green-800',
    buttonBg: 'bg-green-600 hover:bg-green-700',
    buttonText: 'text-white',
    buttonBorder: 'border-green-700',
  },
  purple: {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'text-purple-600',
    hover: 'hover:text-purple-800',
    buttonBg: 'bg-purple-600 hover:bg-purple-700',
    buttonText: 'text-white',
    buttonBorder: 'border-purple-700',
  },
  orange: {
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    text: 'text-orange-600',
    hover: 'hover:text-orange-800',
    buttonBg: 'bg-orange-600 hover:bg-orange-700',
    buttonText: 'text-white',
    buttonBorder: 'border-orange-700',
  },
  gray: {
    bg: 'bg-gray-50',
    border: 'border-gray-200',
    text: 'text-gray-600',
    hover: 'hover:text-gray-800',
    buttonBg: 'bg-gray-600 hover:bg-gray-700',
    buttonText: 'text-white',
    buttonBorder: 'border-gray-700',
  },
  'brand-green': {
    bg: 'bg-brand',
    border: 'border-brand',
    text: 'text-brand-dark',
    hover: 'hover:text-brand-dark',
    buttonBg: 'bg-brand hover:bg-brand-dark',
    buttonText: 'text-white',
    buttonBorder: 'border-brand',
  },
};

export const ConsultationCTA = ({ 
  className = '',
  text = 'Psichologai gali suteikti gilesnį įžvalgą į jūsų palyginimo rezultatus.',
  ctaLink = '/kontaktai/',
  ctaLabel = 'Susisiekite konsultacijai',
  emoji = 'ℹ️',
  theme = 'blue',
  ctaTheme = 'link',
}: ConsultationCTAProps) => {
  const themeObj = themeStyles[theme];
  
  return (
    <Card className={`${themeObj.bg} ${themeObj.border} ${className}`}>
      <CardHeader className='justify-between gap-4'>
        <div className='text-4xl shrink-0' role='img' aria-label={emoji}>
          {emoji}
        </div>
        <div className='text-gray-700 flex-1'>
          {text}{' '}
          {ctaTheme === 'button' ? (
            <a
              href={ctaLink}
              aria-label={ctaLabel}
              className={`mt-4 no-underline inline-block px-4 py-2 rounded font-bold shadow transition-colors border ${themeObj.buttonBg} ${themeObj.buttonText} ${themeObj.buttonBorder}`}
            >
              {ctaLabel}
            </a>
          ) : (
            <a
              className={`mt-2  block underline cursor-pointer ${themeObj.text} ${themeObj.hover}`}
              href={ctaLink}
              aria-label={ctaLabel}
            >
              {ctaLabel}
            </a>
          )}
        </div>
        <div className='w-10'></div>
      </CardHeader>
    </Card>
  );
};
