import React from 'react';
import { Button as MuiButton } from '@mui/material';
import type { ButtonProps as MuiButtonProps } from '@mui/material';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  size?: 'small' | 'medium' | 'large';
  rounded?: boolean;
  fullWidth?: boolean;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

/**
 * Custom Button component that combines Material UI with Tailwind CSS styling
 */
const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  rounded = false,
  fullWidth = false,
  className = '',
  children,
  disabled,
  onClick,
  type,
  startIcon,
  endIcon,
  ...props
}) => {
  // Determine the color for MUI button based on our custom variant
  const getMuiColor = (): MuiButtonProps['color'] => {
    switch (variant) {
      case 'primary': return 'primary';
      case 'secondary': return 'secondary';
      case 'success': return 'success';
      case 'danger': return 'error';
      case 'warning': return 'warning';
      case 'info': return 'info';
      default: return 'primary';
    }
  };

  // Tailwind classes based on variants
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-purple-600 hover:bg-purple-700 text-white',
    success: 'bg-green-600 hover:bg-green-700 text-white',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    warning: 'bg-yellow-500 hover:bg-yellow-600 text-white',
    info: 'bg-sky-500 hover:bg-sky-600 text-white',
  };

  // Size-specific classes
  const sizeClasses = {
    small: 'text-sm py-1 px-3',
    medium: 'text-base py-2 px-4',
    large: 'text-lg py-3 px-6',
  };

  // Combined classes
  const combinedClasses = `
    font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-${variant === 'primary' ? 'blue' : variant}-500
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${rounded ? 'rounded-full' : 'rounded'}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  return (
    <MuiButton
      variant="contained"
      color={getMuiColor()}
      size={size === 'large' ? 'large' : size === 'small' ? 'small' : 'medium'}
      fullWidth={fullWidth}
      className={combinedClasses}
      disabled={disabled}
      onClick={onClick}
      type={type}
      startIcon={startIcon}
      endIcon={endIcon}
      {...props as any}
    >
      {children}
    </MuiButton>
  );
};

export default Button; 