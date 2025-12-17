import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary' | 'warning' | 'danger';
  variant?: 'solid' | 'light';
  isIconOnly?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      color = 'primary',
      variant = 'solid',
      isIconOnly = false,
      isLoading = false,
      isDisabled = false,
      disabled,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

    const sizeClasses = isIconOnly ? 'w-10 h-10 p-0' : 'px-4 py-2';

    const colorClasses = {
      primary: {
        solid:
          'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 disabled:bg-blue-300',
        light:
          'bg-blue-100 hover:bg-blue-200 text-blue-700 focus:ring-blue-500 disabled:bg-blue-50'
      },
      secondary: {
        solid:
          'bg-purple-600 hover:bg-purple-700 text-white focus:ring-purple-500 disabled:bg-purple-300',
        light:
          'bg-purple-100 hover:bg-purple-200 text-purple-700 focus:ring-purple-500 disabled:bg-purple-50'
      },
      warning: {
        solid:
          'bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-yellow-500 disabled:bg-yellow-300',
        light:
          'bg-yellow-100 hover:bg-yellow-200 text-yellow-700 focus:ring-yellow-500 disabled:bg-yellow-50'
      },
      danger: {
        solid:
          'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500 disabled:bg-red-300',
        light:
          'bg-red-100 hover:bg-red-200 text-red-700 focus:ring-red-500 disabled:bg-red-50'
      }
    };

    const isDisabledOrLoading = isDisabled || disabled || isLoading;

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${sizeClasses} ${colorClasses[color][variant]} ${
          isDisabledOrLoading ? 'cursor-not-allowed opacity-60' : ''
        } ${className}`}
        disabled={isDisabledOrLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            {children}
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
