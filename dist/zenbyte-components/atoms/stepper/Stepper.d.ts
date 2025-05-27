import React from "react";
interface StepperProps {
    value: number;
    onChange: (newValue: number) => void;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    className?: string;
}
export declare const Stepper: React.FC<StepperProps>;
export default Stepper;
