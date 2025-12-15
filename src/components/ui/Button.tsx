import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'yellow' | 'blue' | 'white' | 'outline-light';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

interface ButtonAsButtonProps
  extends ButtonBaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  as?: 'button';
  to?: never;
  children: ReactNode;
}

interface ButtonAsLinkProps extends ButtonBaseProps {
  as: 'link';
  to: string;
  children: ReactNode;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const getVariantClasses = (variant: ButtonVariant): string => {
  const variants = {
    // Primary - dark button for light backgrounds
    primary:
      'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-500 shadow-sm',
    // Secondary - red accent (logo color)
    secondary:
      'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-sm',
    // Outline - for light backgrounds
    outline:
      'border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white focus:ring-gray-500',
    // Ghost - minimal button
    ghost:
      'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    // Yellow - kindergarten brand color
    yellow:
      'bg-yellow-500 text-gray-900 hover:bg-yellow-400 focus:ring-yellow-500 shadow-sm font-semibold',
    // Blue - grade school brand color
    blue:
      'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-sm',
    // White - for dark/image backgrounds
    white:
      'bg-white text-gray-900 hover:bg-gray-100 focus:ring-white shadow-sm',
    // Outline Light - for dark backgrounds
    'outline-light':
      'border-2 border-white text-white hover:bg-white hover:text-gray-900 focus:ring-white',
  };
  return variants[variant];
};

const getSizeClasses = (size: ButtonSize): string => {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  };
  return sizes[size];
};

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  const variantClasses = getVariantClasses(variant);
  const sizeClasses = getSizeClasses(size);
  const allClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`;

  if (props.as === 'link') {
    return (
      <Link to={props.to} className={allClasses}>
        {children}
      </Link>
    );
  }

  const { as, ...buttonProps } = props as ButtonAsButtonProps;
  return (
    <button className={allClasses} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
