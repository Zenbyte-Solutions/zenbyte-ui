import React from "react";
import { MultiSelectDropdownProps } from "../../../molecules/multi-select-dropdown/MultiSelectDropdown";
interface FormMultiSelectDropdownProps extends Omit<MultiSelectDropdownProps, "values" | "onChange" | "errorMessage"> {
    name: string;
}
export declare const FormMultiSelectDropdown: React.FC<FormMultiSelectDropdownProps>;
export default FormMultiSelectDropdown;
