import React, { useState } from "react";
import ProductCard, {
  ProductCardProps,
} from "../../molecules/product-card/ProductCard";
import Pagination from "../../atoms/pagination/Pagination";
import classNames from "classnames";
import { Package } from "lucide-react";
import Input from "../../atoms/input/Input";
import DropdownList from "../../molecules/dropdown-list/DropdownList";
import MultiSelectDropdown from "../../molecules/multi-select-dropdown/MultiSelectDropdown";
import Button from "../../atoms/button/Button";

export interface ProductOverviewProps {
  products: ProductCardProps[];
  itemsPerPageOptions?: number[];
  initialItemsPerPage?: number;
  className?: string;
  cols: number;
  noProductText?: string;
}

const ProductOverview: React.FC<ProductOverviewProps> = ({
  products,
  itemsPerPageOptions = [8, 16, 32, 64],
  initialItemsPerPage = 8,
  className = "",
  cols = 4,
  noProductText = "No Products Found.",
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [nameQuery, setNameQuery] = useState<string>("");

  const resetFilters = () => {
    setSelectedCategory("");
    setSelectedTags([]);
    setNameQuery("");
    setCurrentPage(1);
  };

  const gridColsClass =
    {
      1: "lg:grid-cols-1",
      2: "lg:grid-cols-2",
      3: "lg:grid-cols-3",
      4: "lg:grid-cols-4",
      5: "lg:grid-cols-5",
      6: "lg:grid-cols-6",
      7: "lg:grid-cols-7",
      8: "lg:grid-cols-8",
    }[cols] || "lg:grid-cols-4";

  // Verzamel unieke waarden
  const uniqueCategories = Array.from(
    new Set(products.map((p) => p.category).filter(Boolean))
  );
  const uniqueTags = Array.from(new Set(products.flatMap((p) => p.tags || [])));

  // Filterlogica
  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory
      ? p.category === selectedCategory
      : true;
    const matchesTag =
      selectedTags.length > 0
        ? (p.tags || []).some((tag) => selectedTags.includes(tag))
        : true;
    const matchesName = nameQuery
      ? p.title.toLowerCase().includes(nameQuery.toLowerCase())
      : true;
    return matchesCategory && matchesTag && matchesName;
  });

  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className={classNames("flex flex-col gap-4", className)}>
      {/* FilterSection */}
      <div className="flex flex-col lg:flex-row gap-2 justify-between items-stretch">
        <Input
          type="text"
          placeholder="Search by name..."
          value={nameQuery}
          onChange={(e) => {
            setNameQuery(e.target.value);
            setCurrentPage(1);
          }}
          className="lg:w-1/3"
          helperText={null}
          label=" "
        />

        {uniqueCategories.length > 0 && (
          <DropdownList
            className="lg:w-1/3"
            dropdownLabel=""
            value={selectedCategory}
            onChange={(value: string) => {
              setSelectedCategory(value);
              setCurrentPage(1);
            }}
            options={[
              { value: "", label: "All Categories" },
              ...uniqueCategories.map((category) => ({
                value: category ?? "",
                label: category ?? "",
              })),
            ]}
          />
        )}

        {uniqueTags.length > 0 && (
          <MultiSelectDropdown
            values={selectedTags}
            onChange={(values: string[]) => {
              setSelectedTags(values);
              setCurrentPage(1);
            }}
            options={uniqueTags.map((tag) => ({
              value: tag ?? "",
              label: tag ?? "",
            }))}
            className="w-full lg:w-1/3"
          />
        )}
      </div>
      <div className="flex justify-end">
        <Button size="small" variant="text" onClick={resetFilters}>
          Reset filters
        </Button>
      </div>

      {/* Geen producten */}
      {filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-12 text-zb-gray-500">
          <Package className="w-12 h-12 mb-4 text-zb-gray-300" />
          <p className="text-zb-desktop-bodySmallRegular">{noProductText}</p>
        </div>
      ) : (
        <>
          <div
            className={classNames(
              "grid grid-cols-1 sm:grid-cols-2 gap-4",
              gridColsClass
            )}
          >
            {paginatedProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
              itemsPerPageOptions={itemsPerPageOptions}
              onPageChange={setCurrentPage}
              onItemsPerPageChange={(value) => {
                setItemsPerPage(value);
                setCurrentPage(1);
              }}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ProductOverview;
