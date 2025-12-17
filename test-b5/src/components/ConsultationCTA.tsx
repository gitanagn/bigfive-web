import { Card, CardHeader } from './Card';
import type { ReactNode } from 'react';

type Theme = 'blue' | 'green' | 'purple' | 'orange' | 'gray';

interface ConsultationCTAProps {
  className?: string;
  text?: ReactNode;
  ctaLink?: string;
  ctaLabel?: string;
  emoji?: string;
  theme?: Theme;
}

const themeStyles: Record<Theme, string> = {
  blue: 'bg-blue-50 border-blue-200 text-blue-600 hover:text-blue-800',
  green: 'bg-green-50 border-green-200 text-green-600 hover:text-green-800',
  purple: 'bg-purple-50 border-purple-200 text-purple-600 hover:text-purple-800',
  orange: 'bg-orange-50 border-orange-200 text-orange-600 hover:text-orange-800',
  gray: 'bg-gray-50 border-gray-200 text-gray-600 hover:text-gray-800',
};

export const ConsultationCTA = ({ 
  className = '',
  text = 'Psichologai gali suteikti gilesnį įžvalgą į jūsų palyginimo rezultatus.',
  ctaLink = '/kontaktai/',
  ctaLabel = 'Susisiekite konsultacijai',
  emoji = 'ℹ️',
  theme = 'blue'
}: ConsultationCTAProps) => {
  const themeClasses = themeStyles[theme];
  const [bgColor, borderColor, linkColor] = themeClasses.split(' ');
  
  return (
    <Card className={`${bgColor} ${borderColor} ${className}`}>
      <CardHeader className='justify-between gap-4'>
        <div className='text-4xl flex-shrink-0' role='img' aria-label={emoji}>
          {emoji}
        </div>
        <p className='text-gray-700 flex-1'>
          {text}{' '}
          <a
            className={`underline cursor-pointer ${linkColor.split(' ').join(' ')}`}
            href={ctaLink}
            aria-label={ctaLabel}
          >
            {ctaLabel}
          </a>
          .
        </p>
        <div className='w-10'></div>
      </CardHeader>
    </Card>
  );
};
