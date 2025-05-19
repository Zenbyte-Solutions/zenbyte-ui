import React from "react";
export interface RadioButtonProps {
    /**
     * Label for the radio button (defaults to "Placeholder" if not provided)
     */
    label?: string;
    /**
     * If true, the radio button is selected
     */
    checked?: boolean;
    /**
     * If true, the radio button is disabled
     */
    disabled?: boolean;
    /**
     * If true, the radio button is in focus state (for demonstration)
     */
    focused?: boolean;
    /**
     * Name attribute for the input
     */
    name?: string;
    /**
     * Optional ID for the input
     */
    id?: string;
    /**
     * Value for the radio button
     */
    value?: string;
    /**
     * Callback when the radio button is changed
     */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Display variant of the radio button
     * @default 'text-right'
     */
    variant?: "radio-only" | "text-right" | "text-left";
}
/**
 * RadioButton component for selecting a single option from a list
 */
export declare const RadioButton: React.FC<RadioButtonProps>;
export default RadioButton;
