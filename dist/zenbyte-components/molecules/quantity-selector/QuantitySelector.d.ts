import React from "react";
interface Props {
    amount: number;
    onChange: (value: number) => void;
    max: number;
    disabled: boolean;
}
declare const QuantitySelector: React.FC<Props>;
export default QuantitySelector;
