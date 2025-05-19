import React from "react";
import { DatePickerProps } from "../../date-picker/DatePicker";
type Variant = "default" | "success" | "error";
type FormDatePickerProps = Omit<DatePickerProps, "onChange" | "initialDate" | "initialDateRange"> & {
    name: string;
    label?: string;
    helperText?: string | null;
    variant?: Variant;
};
export declare const FormDatePicker: React.FC<FormDatePickerProps>;
export default FormDatePicker;
