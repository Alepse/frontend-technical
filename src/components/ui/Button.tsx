import { type ButtonHTMLAttributes } from 'react';
import '../../assets/styles/Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
}

function Button({
  children,
  variant = 'primary',
  isLoading,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseClass = variant === 'primary' ? 'btn' : 'btn btn-secondary';
  
  return (
    <button
      className={`${baseClass} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? 'LOADING...' : children}
    </button>
  );
}

export { Button };
