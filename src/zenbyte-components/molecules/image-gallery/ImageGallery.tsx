// src/components/molecules/product-image-gallery/ProductImageGallery.tsx

import React, { useState } from "react";
import ProductImageThumbnail from "../../atoms/product-image-thumbnail/ProductImageThumbnail";

interface ImageGalleryProps {
  images: string[];
  fallbackImage?: string;
  variantImage?: string | null;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  fallbackImage,
  variantImage,
}) => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [selectedImage] = useState(images[0]);

  const displayImage =
    hoveredImage ?? variantImage ?? fallbackImage ?? selectedImage;

  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-2">
        {images.map((img, index) => (
          <ProductImageThumbnail
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            isActive={hoveredImage === img}
            onMouseEnter={() => setHoveredImage(img)}
            onMouseLeave={() => setHoveredImage(null)}
          />
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <img
          src={displayImage}
          alt="Selected product"
          className="w-full h-auto max-w-[400px] object-contain rounded border"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
