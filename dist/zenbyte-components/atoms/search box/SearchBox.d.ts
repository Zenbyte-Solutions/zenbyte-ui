import React from "react";
interface SearchBoxProps {
    /**
     * Search box variant
     */
    variant?: "default" | "filled" | "hover" | "focus" | "disabled";
    /**
     * Placeholder text
     */
    placeholder?: string;
    /**
     * Initial search value
     */
    value?: string;
    /**
     * Callback when search changes
     */
    onChange?: (value: string) => void;
    /**
     * Callback when search is cleared
     */
    onClear?: () => void;
}
export declare const SearchBox: React.FC<SearchBoxProps>;
export default SearchBox;
