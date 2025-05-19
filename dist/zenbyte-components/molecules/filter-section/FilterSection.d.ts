import React from "react";
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
    attributeOptions?: Array<{
        label: string;
        value: string;
    }>;
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
    propertyOptions?: Array<{
        label: string;
        value: string;
    }>;
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
export declare const FilterSection: React.FC<FilterSectionProps>;
export default FilterSection;
