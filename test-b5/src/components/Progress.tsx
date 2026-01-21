import type { HTMLAttributes } from 'react';

interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  minValue?: number;
  maxValue?: number;
  label?: string;
  showValueLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'warning' | 'danger' | 'success' |'brand';
}

export const Progress = ({
  value,
  minValue = 0,
  maxValue = 100,
  label,
  showValueLabel = false,
  size = 'md',
  color = 'primary',
  className = '',
  'aria-label': ariaLabel,
  ...props
}: ProgressProps) => {
  const percentage = Math.min(
    100,
    Math.max(0, ((value - minValue) / (maxValue - minValue)) * 100)
  );

  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3'
  };

  const colorClasses = {
    primary: 'bg-blue-600',
    secondary: 'bg-purple-600',
    warning: 'bg-yellow-500',
    danger: 'bg-red-600',
    success: 'bg-green-600',
    brand: 'bg-brand'
  };

  return (
    <div className={`w-full ${className}`} {...props}>
      {(label || showValueLabel) && (
        <div className="flex justify-between items-center mb-2">
          {label && <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>}
          {showValueLabel && (
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`${sizeClasses[size]} ${colorClasses[color]} transition-all duration-300 ease-in-out rounded-full`}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-label={ariaLabel || 'Progress bar'}
          aria-valuenow={value}
          aria-valuemin={minValue}
          aria-valuemax={maxValue}
        />
      </div>
    </div>
  );
};
