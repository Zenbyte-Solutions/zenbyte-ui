import React from "react";
import PriceTag from "../../atoms/pricetag/pricetag";
import StockIndicator from "../../atoms/stock-indicator/StockIndicator";
import Stepper from "../../atoms/stepper/Stepper";
import ProductImageThumbnail from "../../atoms/product-image-thumbnail/ProductImageThumbnail";
import { Trash2 } from "lucide-react";

export interface CartItemProps {
  id: string;
  image: string;
  title: string;
  price: number;
  inStock: number;
  quantity: number;
  properties: Record<string, string>;
  maxQuantity?: number;
  onQuantityChange: (newQuantity: number) => void;
  onRemove: (id: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  image,
  title,
  price,
  inStock,
  quantity,
  properties,
  maxQuantity,
  onQuantityChange,
  onRemove,
}) => {
  return (
    <div className="flex flex-col border-b pb-4 mb-4">
      <div className="flex gap-4">
        <div className="w-28 h-28 relative">
          <ProductImageThumbnail src={image} alt={title} isActive={true} />

          <button
            onClick={() => onRemove(id)}
            className="absolute top-0 right-0 p-1 bg-white rounded-full shadow hover:text-red-500"
            aria-label="Verwijder item"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col justify-between flex-1 gap-2">
          <h3 className="text-zb-desktop-bodyLargeMedium">{title}</h3>

          <ul className="text-sm text-gray-600">
            {Object.entries(properties).map(([key, value]) => (
              <li key={key}>
                <span className="text-zb-desktop-bodySmallRegular font-bold">
                  {key}:
                </span>{" "}
                {value}
              </li>
            ))}
          </ul>

          <StockIndicator stock={inStock} variantSelected />
        </div>

        <div className="flex flex-col items-end justify-between">
          <PriceTag price={price} />

          <div className="mt-auto">
            <Stepper
              value={quantity}
              min={1}
              max={maxQuantity ?? inStock}
              onChange={(newQuantity) => onQuantityChange(newQuantity)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
