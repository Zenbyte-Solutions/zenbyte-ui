import React from "react";
export interface ButtonProps {
    /**
     * Button content
     */
    children?: React.ReactNode;
    /**
     * Additional className
     */
    className?: string;
    /**
     * Click handler
     */
    onClick?: () => void;
    /**
     * Disabled state
     */
    disabled?: boolean;
    /**
     * Show arrow on button
     * @default false
     */
    showArrow?: boolean;
    /**
     * Arrow position ('left' or 'right')
     * @default 'right'
     */
    arrowPosition?: "left" | "right";
    /**
     * Button size variant
     * @default 'giant'
     */
    size?: "giant" | "large" | "medium" | "small" | "tiny";
    /**
     * Button variant type
     * @default 'filled'
     */
    variant?: "filled" | "border" | "text";
    /**
     * Button color scheme
     * @default 'primary'
     */
    color?: "primary" | "secondary" | "danger" | "success" | "warning" | "error" | "alert";
    /**
     * Button type variant
     * @default 'default'
     */
    type?: "default" | "non-border";
    /**
     * HTML button type attribute
     * @default 'button'
     */
    htmlType?: "button" | "submit" | "reset";
}
export declare const Button: React.FC<ButtonProps>;
export default Button;
