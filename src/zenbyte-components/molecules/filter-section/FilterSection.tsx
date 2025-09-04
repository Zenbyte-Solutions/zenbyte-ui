// src/components/molecules/FilterSection/FilterSection.tsx
import React from "react";
import { SearchBox } from "../../atoms/search-box/SearchBox";
import { DropdownList } from "../dropdown-list/DropdownList";
import { Button } from "../../atoms/button/Button";
import { Filter, Settings } from "lucide-react";

export interface FilterSectionProps {
  /**
   * Search box placeholder text
   */
  searchPlaceholder?: string;

  /**
   * Search value
   */
  searchValue?: string;

  /**
   * Callback when search changes
   */
  onSearchChange?: (value: string) => void;

  /**
   * Callback when search is cleared
   */
  onSearchClear?: () => void;

  /**
   * Attribute dropdown options
   */
  attributeOptions?: Array<{ label: string; value: string }>;

  /**
   * Selected attribute value
   */
  attributeValue?: string;

  /**
   * Callback when attribute changes
   */
  onAttributeChange?: (value: string) => void;

  /**
   * Property dropdown options
   */
  propertyOptions?: Array<{ label: string; value: string }>;

  /**
   * Selected property value
   */
  propertyValue?: string;

  /**
   * Callback when property changes
   */
  onPropertyChange?: (value: string) => void;

  /**
   * Primary Button text
   */
  primaryButtonText?: string;

  /**
   * Secondary Button text
   */
  secondaryButtonText?: string;

  /**
   * Callback when secondary is clicked
   */
  onPrimaryButtonClick?: () => void;

    /**
   * Callback when secondary is clicked
   */
  onSecondaryButtonClick?: () => void;

}

export const FilterSection: React.FC<FilterSectionProps> = ({
  searchPlaceholder = "Search",
  searchValue = "",
  onSearchChange,
  onSearchClear,
  attributeOptions = [
    { label: "Name", value: "name" },
    { label: "Email", value: "email" },
    { label: "Phone", value: "phone" },
  ],
  attributeValue = "",
  onAttributeChange,
  propertyOptions = [
    { label: "Contains", value: "contains" },
    { label: "Equals", value: "equals" },
    { label: "Starts with", value: "startsWith" },
  ],
  propertyValue = "",
  onPropertyChange,
  primaryButtonText = "Filter",
  secondaryButtonText = "Reset",
  onPrimaryButtonClick,
  onSecondaryButtonClick,
}) => {
  return (
    <div className="flex flex-col gap-4 p-4 bg-transparent">
      {/* Filter controls row */}
      <div className="flex items-center gap-4">
        <div className="h-full mt-auto flex-row flex">
          <div className="mr-4">
            <div className="mb-1">
              <label className="text-zb-desktop-bodySmallRegular" htmlFor="">
                Search
              </label>
            </div>

            <SearchBox
              placeholder={searchPlaceholder}
              value={searchValue}
              onChange={onSearchChange}
              onClear={onSearchClear}
            />
          </div>
          <DropdownList
            options={propertyOptions}
            value={propertyValue}
            placeholder="Property"
            onChange={onPropertyChange}
            dropdownLabel="Filter Option"
          />

          <div className="flex items-center gap-2">
            <Filter
              className="w-5 h-5 mt-auto mb-3 ml-2"
              fill="grey"
              stroke="grey"
            />
          </div>
        </div>
        <div className="h-full mt-auto ml-auto flex flex-row gap-2">
          <Button
            size="medium"
            variant="filled"
            color="primary"
            onClick={onPrimaryButtonClick}
          >
            {primaryButtonText}
          </Button>
          <Button
            size="medium"
            variant="border"
            color="secondary"
            onClick={onSecondaryButtonClick}
          >
            {secondaryButtonText}
          </Button>
          <Settings className="w-5 h-5 mt-auto mb-3 ml-2" stroke="grey" />
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
