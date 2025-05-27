import React from "react";
interface ProductImageThumbnailProps {
    src: string;
    alt: string;
    isActive: boolean;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    className?: string;
}
declare const ProductImageThumbnail: React.FC<ProductImageThumbnailProps>;
export default ProductImageThumbnail;
