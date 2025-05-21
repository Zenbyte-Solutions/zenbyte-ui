import React from "react";
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
export declare const Card: React.FC<CardProps>;
export default Card;
