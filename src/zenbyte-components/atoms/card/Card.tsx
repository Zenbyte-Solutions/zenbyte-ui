// Card.tsx
import React from "react";
import classNames from "classnames";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Shadow size */
  shadow?: "sm" | "md" | "lg" | "xl" | "none";
  /** Background color */
  backgroundColor?: "white" | "stone-100" | "indigo-50";
  /** Rounded size */
  rounded?: "none" | "md" | "lg" | "2xl";
  /** Alignment */
  align?: "left" | "center" | "right";
  /** Custom class name */
  className?: string;
  /** Content inside card */
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  shadow = "md",
  backgroundColor = "white",
  rounded = "2xl",
  align = "left",
  className,
  children,
  ...rest
}) => {
  const cardClasses = classNames(
    "p-4 transition",
    {
      // Shadow
      "shadow-sm": shadow === "sm",
      "shadow-md": shadow === "md",
      "shadow-lg": shadow === "lg",
      "shadow-xl": shadow === "xl",
      "shadow-none": shadow === "none",

      // Background colors
      "bg-zb-white": backgroundColor === "white",
      "bg-zb-stone-100": backgroundColor === "stone-100",
      "bg-zb-indigo-50": backgroundColor === "indigo-50",

      // Rounded corners
      "rounded-none": rounded === "none",
      "rounded-md": rounded === "md",
      "rounded-lg": rounded === "lg",
      "rounded-2xl": rounded === "2xl",

      // Alignment
      "text-left": align === "left",
      "text-center": align === "center",
      "text-right": align === "right",
    },
    className
  );

  return (
    <div {...rest} className={cardClasses}>
      {children}
    </div>
  );
};

export default Card;
