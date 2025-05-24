import React from "react";
import Stepper from "../../atoms/stepper/Stepper";

interface Props {
  amount: number;
  onChange: (value: number) => void;
  max: number;
  disabled: boolean;
}

const QuantitySelector: React.FC<Props> = ({ amount, onChange, max, disabled }) => (
  <div className="flex items-center gap-2">
    <label htmlFor="amount">Amount:</label>
    <Stepper
      value={amount}
      onChange={onChange}
      min={1}
      max={max}
      disabled={disabled}
    />
  </div>
);

export default QuantitySelector;
