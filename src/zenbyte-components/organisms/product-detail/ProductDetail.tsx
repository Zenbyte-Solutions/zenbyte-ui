import React, { useState, useEffect, useMemo } from "react";
import classNames from "classnames";
import Button from "../../atoms/button/Button";
import Card from "../../atoms/card/Card";
import DropdownList from "../../molecules/dropdown-list/DropdownList";

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
  variantPriceMap: Record<string, number>; // key = combinatie van opties
  variantStockMap: Record<string, number>; // key = combinatie van opties
  variantImageMap?: Record<string, string>; // key = combinatie van opties, value = afbeelding URL
  onAddToCart: (
    amount: number,
    selectedOptions: Record<string, string>
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
  const [amount, setAmount] = useState(1);
  const [dynamicStock, setDynamicStock] = useState<number | null>(null);
  const [dynamicPrice, setDynamicPrice] = useState<number>(price);

  const priceKey = useMemo(() => {
    return variants.map((v) => selectedOptions[v.name] || "").join(" - ");
  }, [selectedOptions, variants]);

  useEffect(() => {
    const key = priceKey;
    setDynamicPrice(variantPriceMap[key] ?? price);
    setDynamicStock(
      variantStockMap[key] !== undefined ? variantStockMap[key] : null
    );

    if (variantImageMap && variantImageMap[key]) {
      setSelectedVariantImage(variantImageMap[key]);
    } else {
      setSelectedVariantImage(null);
    }
  }, [priceKey, price, variantPriceMap, variantStockMap, variantImageMap]);

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
  }, [variants, selectedOptions]);

  const handleVariantChange = (variantName: string, value: string) => {
    setSelectedOptions((prev) => ({ ...prev, [variantName]: value }));
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, Number(e.target.value));
    setAmount(value);
  };

  const isVariantSelected = variants.every((v) => selectedOptions[v.name]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Kolom 1: Kleine afbeeldingen */}
      <div className="flex gap-2">
        <div className="flex flex-col gap-2">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index}`}
              className={classNames(
                "w-20 h-20 object-cover cursor-pointer border rounded",
                {
                  "border-blue-500": hoveredImage === img,
                  "opacity-70": hoveredImage !== img,
                }
              )}
              onMouseEnter={() => setHoveredImage(img)}
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
            onMouseLeave={() => setHoveredImage(null)}
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
          <ul className="list-disc list-inside text-sm text-gray-700 mt-4">
            {bulletPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Kolom 3: Prijs, voorraad, aantal, toevoegen */}
      <Card className="flex flex-col gap-4 max-h-[220px]">
        <div className="text-zb-desktop-headlineXXXSmall font-semibold text-zb-primary">
          <p>€{dynamicPrice.toFixed(2)}</p>
        </div>

        {isVariantSelected ? (
          <div
            className={classNames("text-zb-desktop-subtitleSmall", {
              "text-green-600": dynamicStock && dynamicStock > 0,
              "text-red-600": !dynamicStock || dynamicStock <= 0,
            })}
          >
            {dynamicStock && dynamicStock > 0
              ? `Op voorraad: ${dynamicStock}`
              : "Niet op voorraad"}
          </div>
        ) : (
          <div className="text-zb-desktop-subtitleSmall text-gray-600">
            Choose a variant
          </div>
        )}

        <div className="flex items-center gap-2">
          <label htmlFor="amount" className="text-zb-desktop-bodySmallRegular">
            Amount:
          </label>
          <input
            id="amount"
            type="number"
            min={1}
            max={dynamicStock ?? 1}
            value={amount}
            onChange={handleAmountChange}
            className="w-16 border rounded px-2 py-1"
            disabled={!dynamicStock || dynamicStock <= 0}
          />
        </div>

        <Button
          disabled={!isVariantSelected || !dynamicStock || dynamicStock <= 0}
          onClick={() => {
            onAddToCart(
              amount,
              selectedOptions
            );
          }}
          size="medium"
          showArrow
          color="primary"
        >
          Add to cart
        </Button>
      </Card>
    </div>
  );
};

export default ProductDetail;
