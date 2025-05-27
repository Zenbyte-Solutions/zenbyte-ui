import React from "react";
export interface ProductVariant {
    id: string;
    name: string;
    options: string[];
}
export interface ProductDetailProps {
    images: string[];
    title: string;
    variants: ProductVariant[];
    price: number;
    bulletPoints?: string[];
    variantPriceMap: Record<string, number>;
    variantStockMap: Record<string, number>;
    variantImageMap?: Record<string, string>;
    variantIdMap?: Record<string, string>;
    onAddToCart: (amount: number, selectedOptions: Record<string, string>, variantId?: string) => void;
}
declare const ProductDetail: React.FC<ProductDetailProps>;
export default ProductDetail;
