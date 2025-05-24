import React from "react";
import classNames from "classnames";

interface Props {
  stock: number | null;
  variantSelected: boolean;
}

const StockIndicator: React.FC<Props> = ({ stock, variantSelected }) => {
  if (!variantSelected) {
    return <div className="text-zb-desktop-subtitleSmall text-gray-600">Kies een variant</div>;
  }

  const inStock = stock && stock > 0;

  return (
    <div
      className={classNames("text-zb-desktop-subtitleSmall", {
        "text-green-600": inStock,
        "text-red-600": !inStock,
      })}
    >
      {inStock ? `Op voorraad: ${stock}` : "Niet op voorraad"}
    </div>
  );
};

export default StockIndicator;
