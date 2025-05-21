import React from "react";
import Card from "../../atoms/card/Card";
import classNames from "classnames";

export interface ProductCardProps {
  /** Product image URL */
  imageUrl: string;
  /** Product title */
  title: string;
  /** Optional discount percentage (e.g. 14 for "14% discount") */
  discountPercentage?: number;
  /** Optional price */
  price?: string;
  /** Optional click handler */
  onClick?: () => void;
  /** Optional extra class */
  className?: string;
  /** Optional category */
  category?: string;
    /** Optional tags */
    tags?: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  discountPercentage,
  price,
  onClick,
  className,
}) => {
  return (
    <Card
      onClick={onClick}
      className={classNames(
        "cursor-pointer hover:shadow-lg transition-all w-full max-w-xs min-w-[200px]",
        className
      )}
    >
      <div className="flex flex-col items-start">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-40 object-cover rounded-md mb-4"
        />

        {discountPercentage !== undefined && (
          <span className="text-zb-desktop-label bg-zb-coral-400 text-zb-white px-2 py-1 rounded-full mb-2">
            {discountPercentage}% discount
          </span>
        )}
        <h3 className="text-zb-desktop-bodySmallRegular text-zb-gray-800 mb-1 line-clamp-2 font-semibold">
          {title}
        </h3>

        {price && (
          <p className="text-zb-desktop-bodySmallRegular text-zb-gray-700 line-clamp-2">
            € {price}
          </p>
        )}
      </div>
    </Card>
  );
};

export default ProductCard;
