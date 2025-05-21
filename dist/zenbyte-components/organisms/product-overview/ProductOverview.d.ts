import React from "react";
import { ProductCardProps } from "../../molecules/product-card/ProductCard";
export interface ProductOverviewProps {
    products: ProductCardProps[];
    itemsPerPageOptions?: number[];
    initialItemsPerPage?: number;
    className?: string;
    cols: number;
    noProductText?: string;
}
declare const ProductOverview: React.FC<ProductOverviewProps>;
export default ProductOverview;
