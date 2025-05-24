import React, { useState, useEffect, useMemo } from "react";
import classNames from "classnames";
import Button from "../../atoms/button/Button";
import Card from "../../atoms/card/Card";
import DropdownList from "../../molecules/dropdown-list/DropdownList";
import ProductImageThumbnail from "../../atoms/product-image-thumbnail/ProductImageThumbnail";
import PriceTag from "../../atoms/pricetag/pricetag";
import StockIndicator from "../../atoms/stock-indicator/StockIndicator";
import QuantitySelector from "../../molecules/quantity-selector/QuantitySelector";

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
  onAddToCart: (
    amount: number,
    selectedOptions: Record<string, string>,
    variantId?: string
  ) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  images,
  title,
  variants,
  price,
  bulletPoints,
  variantPriceMap,
  variantStockMap,
  variantImageMap,
  variantIdMap,
  onAddToCart,
}) => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [selectedImage] = useState(images[0]);
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >({});
  const [selectedVariantImage, setSelectedVariantImage] = useState<
    string | null
  >(null);
  const [selectedVariantId, setSelectedVariantId] = useState<
    string | undefined
  >(undefined);
  const [amount, setAmount] = useState(1);
  const [dynamicStock, setDynamicStock] = useState<number | null>(null);
  const [dynamicPrice, setDynamicPrice] = useState<number>(price);

  const priceKey = useMemo(() => {
    return variants.map((v) => selectedOptions[v.name] || "").join(" - ");
  }, [selectedOptions, variants]);

  useEffect(() => {
    setDynamicPrice(variantPriceMap[priceKey] ?? price);
    setDynamicStock(variantStockMap[priceKey] ?? null);
    setSelectedVariantImage(variantImageMap?.[priceKey] ?? null);
    setSelectedVariantId(variantIdMap?.[priceKey]);
  }, [
    priceKey,
    price,
    variantPriceMap,
    variantStockMap,
    variantImageMap,
    variantIdMap,
  ]);

  useEffect(() => {
    if (variants.length > 0 && Object.keys(selectedOptions).length === 0) {
      const initialSelection: Record<string, string> = {};
      variants.forEach((v) => {
        if (v.options.length > 0) {
          initialSelection[v.name] = v.options[0];
        }
      });
      setSelectedOptions(initialSelection);
    }
  }, [variants]);

  const handleVariantChange = (variantName: string, value: string) => {
    setSelectedOptions((prev) => ({ ...prev, [variantName]: value }));
  };

  const handleAmountChange = (value: number) => {
    setAmount(Math.max(1, value));
  };

  const isVariantSelected = variants.every((v) => selectedOptions[v.name]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Kolom 1: Kleine afbeeldingen */}
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
            src={
              hoveredImage
                ? hoveredImage
                : isVariantSelected && selectedVariantImage
                ? selectedVariantImage
                : selectedImage
            }
            alt="Selected image"
            className="w-full h-auto max-w-[400px] object-contain rounded border"
          />
        </div>
      </div>

      {/* Kolom 2: Titel + Variants + Bullet points */}
      <div className="flex flex-col gap-4">
        <h2 className="text-zb-desktop-headlineXXXSmall">{title}</h2>

        {variants.map((variant) => (
          <div key={variant.id} className="flex flex-col gap-1">
            <DropdownList
              dropdownLabel={variant.name}
              value={selectedOptions[variant.name] || ""}
              onChange={(value: string) =>
                handleVariantChange(variant.name, value)
              }
              options={[
                { value: "", label: "Choose an option" },
                ...variant.options.map((opt) => ({ value: opt, label: opt })),
              ]}
            />
          </div>
        ))}

        {bulletPoints && bulletPoints.length > 0 && (
          <ul className="list-disc list-inside text-zb-desktop-bodySmallRegular text-gray-700 mt-4">
            {bulletPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Kolom 3: Prijs, voorraad, aantal, toevoegen */}
      <Card className="flex flex-col gap-4 max-h-[220px]">
        <PriceTag price={dynamicPrice} />
        <StockIndicator stock={dynamicStock} variantSelected={isVariantSelected} />
        <QuantitySelector
          amount={amount}
          max={dynamicStock ?? 1}
          onChange={handleAmountChange}
          disabled={!dynamicStock || dynamicStock <= 0}
        />

        <Button
          disabled={!isVariantSelected || !dynamicStock || dynamicStock <= 0}
          onClick={() => {
            onAddToCart(amount, selectedOptions, selectedVariantId);
          }}
          size="medium"
          showArrow
          color="primary"
        >
          Add to Cart
        </Button>
      </Card>
    </div>
  );
};

export default ProductDetail;
