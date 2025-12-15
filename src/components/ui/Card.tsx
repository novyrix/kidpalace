import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CardProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  image?: string;
  imageAlt?: string;
  link?: string;
  linkText?: string;
  variant?: 'default' | 'elevated' | 'bordered';
  className?: string;
  children?: ReactNode;
}

const Card = ({
  title,
  description,
  icon: Icon,
  image,
  imageAlt,
  link,
  linkText = 'Learn More',
  variant = 'default',
  className = '',
  children,
}: CardProps) => {
  const variantClasses = {
    default: 'bg-white',
    elevated: 'bg-white shadow-lg',
    bordered: 'bg-white border border-gray-200',
  };

  return (
    <div
      className={`rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl ${variantClasses[variant]} ${className}`}
    >
      {image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={imageAlt || title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        {Icon && (
          <div className="mb-4 inline-flex rounded-lg bg-blue-100 p-3">
            <Icon className="h-6 w-6 text-blue-700" />
          </div>
        )}
        <h3 className="mb-2 font-['Poppins'] text-xl font-semibold text-gray-900">
          {title}
        </h3>
        {description && (
          <p className="mb-4 text-gray-600 leading-relaxed">{description}</p>
        )}
        {children}
        {link && (
          <Link
            to={link}
            className="inline-flex items-center gap-1 font-medium text-blue-700 hover:text-blue-800"
          >
            {linkText}
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
