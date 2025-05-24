import React from "react";

interface Props {
  price: number;
}

const PriceTag: React.FC<Props> = ({ price }) => (
  <div className="text-zb-desktop-headlineXXXSmall font-semibold text-zb-primary">
    €{price.toFixed(2)}
  </div>
);

export default PriceTag;