import React from "react";
import classNames from "classnames";

interface ProductImageThumbnailProps {
  src: string;
  alt: string;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ProductImageThumbnail: React.FC<ProductImageThumbnailProps> = ({
  src,
  alt,
  isActive,
  onMouseEnter,
  onMouseLeave,
}) => (
  <img
    src={src}
    alt={alt}
    className={classNames(
      "w-24 h-24 object-cover border rounded",
      {
        "border-zb-indigo-500": isActive,
        "opacity-70": !isActive,
        "cursor-pointer": isActive
      }
    )}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  />
);

export default ProductImageThumbnail;