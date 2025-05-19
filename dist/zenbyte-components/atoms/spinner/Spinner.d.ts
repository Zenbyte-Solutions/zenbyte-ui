import React from "react";
/**
 * Spinner size variants
 */
export type SpinnerSize = "xs" | "sm" | "md" | "lg" | "xl";
/**
 * Spinner component props
 */
export interface SpinnerProps {
    /**
     * The size of the spinner
     * @default 'md'
     */
    size?: SpinnerSize;
    /**
     * The Zenbyte color class to use for the spinner
     * Should be a full class name (e.g., 'text-zb-indigo-600')
     * @default 'text-zb-indigo-600'
     */
    colorClass?: string;
    /**
     * Additional CSS classes to apply
     */
    className?: string;
    /**
     * The thickness of the spinner stroke
     * @default Varies based on size
     */
    strokeWidth?: number;
    /**
     * Speed of rotation animation
     * @default 'default'
     */
    speed?: "slow" | "default" | "fast";
    /**
     * Aria label for accessibility
     * @default 'Loading'
     */
    ariaLabel?: string;
}
/**
 * Spinner component
 *
 * A circular loading indicator with configurable size and rotation speed
 * that uses the Zenbyte UI color system classes.
 */
export declare const Spinner: React.FC<SpinnerProps>;
export default Spinner;
