import React from "react";

interface PageTitleProps {
  /** The main title text to display */
  title: string;
  /** Optional description text below the title */
  description?: string;
  /** Visual variant of the page title */
  variant?: 'default' | 'large';
  /** Additional CSS classes */
  className?: string;
}

export function PageTitle({ 
  title, 
  description, 
  variant = 'default',
  className = '' 
}: PageTitleProps) {
  const titleClasses = variant === 'large' 
    ? 'text-zb-desktop-headlineLarge sm:text-zb-desktop-displayLarge text-zb-gray-900 mb-zb-v-16'
    : 'text-2xl sm:text-3xl font-bold text-zb-gray-900 mb-zb-v-8';

  const containerClasses = variant === 'large'
    ? `mb-zb-v-32 ${className}`
    : `mb-zb-v-24 ${className}`;

  return (
    <div className={containerClasses}>
      <h1 className={titleClasses}>
        {title}
      </h1>
      {description && (
        <p className="text-zb-gray-500 text-zb-desktop-bodyRegular">
          {description}
        </p>
      )}
    </div>
  );
}

export default PageTitle;