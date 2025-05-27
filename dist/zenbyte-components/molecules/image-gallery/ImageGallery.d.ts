import React from "react";
interface ImageGalleryProps {
    images: string[];
    fallbackImage?: string;
    variantImage?: string | null;
}
declare const ImageGallery: React.FC<ImageGalleryProps>;
export default ImageGallery;
