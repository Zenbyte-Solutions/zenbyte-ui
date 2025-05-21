import React from "react";
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
declare const ProductCard: React.FC<ProductCardProps>;
export default ProductCard;
