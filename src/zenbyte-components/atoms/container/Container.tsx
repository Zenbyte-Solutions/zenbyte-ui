import React from "react";
import classNames from "classnames";

export interface ContainerProps {
  /** Title text for the empty state */
  title?: string;
  /** Description text */
  description?: string;
  /** Icon to display */
  icon?: React.ReactNode;
  /** Additional action component (e.g., button) */
  action?: React.ReactNode;
  /** Shadow size */
  shadow?: "sm" | "md" | "lg" | "xl" | "none";
  /** Background color */
  backgroundColor?: "white" | "stone-100" | "indigo-50";
  /** Text alignment */
  align?: "left" | "center" | "right";
  /** Custom class name for container */
  containerClassName?: string;
  /** Custom class name for children */
  childrenClassName?: string;
  /** Children components to render inside the container */
  children?: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  title = "",
  description = "",
  icon,
  action,
  shadow = "md",
  backgroundColor = "white",
  align = "center",
  containerClassName,
  childrenClassName,
  children,
}) => {
  const containerClasses = classNames(
    "flex flex-col items-center justify-center p-6 rounded-zb-cards",
    {
      // Shadow options
      "shadow-sm": shadow === "sm",
      "shadow-md": shadow === "md",
      "shadow-lg": shadow === "lg",
      "shadow-xl": shadow === "xl",
      "shadow-none": shadow === "none",
      // Background colors
      "bg-zb-white": backgroundColor === "white",
      "bg-zb-stone-100": backgroundColor === "stone-100",
      "bg-zb-indigo-50": backgroundColor === "indigo-50",
      // Alignment
      "text-left items-start": align === "left",
      "text-center items-center": align === "center",
      "text-right items-end": align === "right",
    },
    containerClassName
  );

  const contentClasses = classNames("min-w-full", {
    "text-left": align === "left",
    "text-center": align === "center",
    "text-right": align === "right",
  });

  const childrenClasses = classNames(
    "flex flex-col md:flex-row gap-4 flex-wrap",
    {
      "justify-start": align === "left",
      "justify-center": align === "center",
      "justify-end": align === "right",
    },
    childrenClassName
  );

  return (
    <div className={containerClasses}>
      <div className={contentClasses}>
        {icon && (
          <div className="mx-auto mb-4 w-zb-icon-md h-zb-icon-md text-zb-gray-500">
            {icon}
          </div>
        )}
        {title && (
          <h3 className="text-zb-desktop-bodyRegular text-zb-gray-700 mb-2">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-zb-desktop-bodySmallRegular text-zb-gray-500 mb-4">
            {description}
          </p>
        )}
        {action && <div className="mt-4">{action}</div>}
        {children && <div className={childrenClasses}>{children}</div>}
      </div>
    </div>
  );
};

export default Container;
