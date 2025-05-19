import React from "react";
/**
 * Types of toast variants available in the system
 */
export type ToastVariant = "general" | "info" | "success" | "alert" | "error";
/**
 * Toast component props interface
 */
export interface ToastProps {
    /**
     * Title text for the toast
     */
    title: string;
    /**
     * Optional description or message for the toast
     */
    description?: string;
    /**
     * Visual variant of the toast
     * @default 'general'
     */
    variant?: ToastVariant;
    /**
     * Whether the toast can be dismissed with a close button
     * @default true
     */
    dismissible?: boolean;
    /**
     * Function called when toast is dismissed
     */
    onDismiss?: () => void;
}
/**
 * Toast Component
 *
 * Displays informational messages, alerts, and notifications as temporary pop-ups.
 *
 * @example
 * ```tsx
 * <Toast
 *   title="Profile updated"
 *   description="Your changes have been saved successfully"
 *   variant="success"
 * />
 * ```
 */
declare const Toast: React.FC<ToastProps>;
export default Toast;
