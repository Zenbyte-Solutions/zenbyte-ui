import React from "react";
import { DropdownListProps } from "../../../molecules/dropdown-list/DropdownList";
interface FormDropdownListProps extends Omit<DropdownListProps, "value" | "onChange" | "errorMessage"> {
    name: string;
}
export declare const FormDropdownList: React.FC<FormDropdownListProps>;
export default FormDropdownList;
