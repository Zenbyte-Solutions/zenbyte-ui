import React from "react";
import { X } from "lucide-react";

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
const Toast: React.FC<ToastProps> = ({
  title,
  description,
  variant = "general",
  dismissible = true,
  onDismiss,
}) => {
  /**
   * Variant-specific styles mapping
   */
  const variantStyles = {
    general: {
      container: "border-zb-indigo-500 bg-zb-indigo-50",
      titleColor: "text-zb-indigo-700",
    },
    info: {
      container: "border-zb-cyan-400 bg-zb-cyan-50",
      titleColor: "text-zb-cyan-400",
    },
    success: {
      container: "border-zb-emerald-400 bg-zb-emerald-50",
      titleColor: "text-zb-emerald-400",
    },
    alert: {
      container: "border-zb-amber-300 bg-zb-amber-50",
      titleColor: "text-zb-amber-300",
    },
    error: {
      container: "border-zb-coral-400 bg-zb-coral-50",
      titleColor: "text-zb-coral-400",
    },
  };

  const styles = variantStyles[variant];

  return (
    <div
      className={`w-full border-2 ${styles.container} rounded-zb-alerts p-2`}
      role="alert"
    >
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <h3 className={`text-md font-medium ${styles.titleColor}`}>
            {title}
          </h3>
          {description && (
            <div className="mt-1 text-zb-gray-700 text-sm">{description}</div>
          )}
        </div>

        {dismissible && onDismiss && (
          <button
            onClick={onDismiss}
            className="text-zb-gray-500 hover:text-zb-gray-700 focus:outline-none"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Toast;
