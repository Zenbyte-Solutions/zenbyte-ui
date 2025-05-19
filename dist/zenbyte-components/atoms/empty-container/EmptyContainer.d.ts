import React from "react";
export interface EmptyContainerProps {
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
export declare const EmptyContainer: React.FC<EmptyContainerProps>;
export default EmptyContainer;
