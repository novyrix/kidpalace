interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader = ({
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionHeaderProps) => {
  return (
    <div
      className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}
    >
      <h2 className="font-['Poppins'] text-3xl font-bold text-gray-900 md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-red-500 ${
          centered ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
};

export default SectionHeader;
