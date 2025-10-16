import React from "react";
interface FormDynamicArrayProps {
    /** The field name in the form schema */
    name: string;
    /** Label displayed above the array inputs */
    label?: string;
    /** Placeholder text for empty input fields */
    placeholder?: string;
    /** Helper text displayed below the inputs */
    helperText?: string;
    /** Minimum number of items in the array (default: 0) */
    minItems?: number;
    /** Maximum number of items in the array (optional) */
    maxItems?: number;
    /** Initial items to show when array is empty */
    initialItems?: string[];
}
export declare const FormDynamicArray: React.FC<FormDynamicArrayProps>;
export default FormDynamicArray;
