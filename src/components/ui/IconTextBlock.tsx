import type { LucideIcon } from 'lucide-react';

interface IconTextBlockProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
  iconBgColor?: string;
}

const IconTextBlock = ({
  icon: Icon,
  title,
  description,
  iconColor = 'text-blue-700',
  iconBgColor = 'bg-blue-100',
}: IconTextBlockProps) => {
  return (
    <div className="flex gap-4">
      <div
        className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg ${iconBgColor}`}
      >
        <Icon className={`h-6 w-6 ${iconColor}`} />
      </div>
      <div>
        <h3 className="font-['Poppins'] text-lg font-semibold text-gray-900">
          {title}
        </h3>
        <p className="mt-1 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default IconTextBlock;
