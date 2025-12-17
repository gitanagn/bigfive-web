import { forwardRef, createContext, useContext } from 'react';
import type { InputHTMLAttributes } from 'react';

interface RadioGroupContextValue {
  value?: string;
  onChange?: (value: string) => void;
  color?: 'primary' | 'secondary' | 'warning' | 'danger';
  isDisabled?: boolean;
}

const RadioGroupContext = createContext<RadioGroupContextValue | undefined>(undefined);

interface RadioGroupProps {
  children: React.ReactNode;
  value?: string;
  onValueChange?: (value: string) => void;
  color?: 'primary' | 'secondary' | 'warning' | 'danger';
  isDisabled?: boolean;
  className?: string;
}

export const RadioGroup = ({
  children,
  value,
  onValueChange,
  color = 'primary',
  isDisabled = false,
  className = ''
}: RadioGroupProps) => {
  return (
    <RadioGroupContext.Provider
      value={{ value, onChange: onValueChange, color, isDisabled }}
    >
      <div className={`space-y-2 ${className}`} role="radiogroup">
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
};

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  value: string;
  children?: React.ReactNode;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ value, children, className = '', disabled, ...props }, ref) => {
    const context = useContext(RadioGroupContext);

    if (!context) {
      throw new Error('Radio must be used within RadioGroup');
    }

    const { value: groupValue, onChange, color = 'primary', isDisabled } = context;
    const isChecked = groupValue === value;
    const isDisabledFinal = isDisabled || disabled;

    const colorClasses = {
      primary: 'text-blue-600 focus:ring-blue-500',
      secondary: 'text-purple-600 focus:ring-purple-500',
      warning: 'text-yellow-500 focus:ring-yellow-500',
      danger: 'text-red-600 focus:ring-red-500'
    };

    return (
      <label
        className={`flex items-center space-x-3 cursor-pointer ${
          isDisabledFinal ? 'opacity-50 cursor-not-allowed' : ''
        } ${className}`}
      >
        <input
          ref={ref}
          type="radio"
          value={value}
          checked={isChecked}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={isDisabledFinal}
          className={`w-4 h-4 border-gray-300 focus:ring-2 focus:ring-offset-0 ${colorClasses[color]} ${
            isDisabledFinal ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}
          {...props}
        />
        {children && <span className="text-sm">{children}</span>}
      </label>
    );
  }
);

Radio.displayName = 'Radio';
