import React from "react";
import { RadioButtonProps } from "../../radio-button/RadioButton";
interface FormRadioButtonProps extends Omit<RadioButtonProps, "checked" | "onChange"> {
    name: string;
    value: string;
}
export declare const FormRadioButton: React.FC<FormRadioButtonProps>;
export default FormRadioButton;
