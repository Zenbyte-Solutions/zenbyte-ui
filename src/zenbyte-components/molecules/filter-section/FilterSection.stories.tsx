// src/components/molecules/FilterSection/FilterSection.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { FilterSection } from "./FilterSection";
import React, { useState } from "react";

const meta: Meta<typeof FilterSection> = {
  title: "Zenbyte/Molecules/FilterSection",
  component: FilterSection,
  argTypes: {
    onSearchChange: { action: "searchChanged" },
    onAttributeChange: { action: "attributeChanged" },
    onPropertyChange: { action: "propertyChanged" },
    onPrimaryButtonClick: { action: "buttonClicked" },
    onSecondaryButtonClick: { action: "buttonClicked" },
  },
};

export default meta;
type Story = StoryObj<typeof FilterSection>;

// Basic example
export const Basic: Story = {
  args: {
    searchPlaceholder: "Search",
    primaryButtonText: "Filter",
    secondaryButtonText: "Reset",
  },
};

// Interactive example
export const Interactive: Story = {
  render: (args) => {
    const [searchValue, setSearchValue] = useState("");
    const [attributeValue, setAttributeValue] = useState("");
    const [propertyValue, setPropertyValue] = useState("");

    return (
      <div className="p-4">
        <FilterSection
          {...args}
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          attributeValue={attributeValue}
          onAttributeChange={setAttributeValue}
          propertyValue={propertyValue}
          onPropertyChange={setPropertyValue}
          onPrimaryButtonClick={() => {
            console.log("Filter clicked with:", {
              search: searchValue,
              attribute: attributeValue,
              property: propertyValue,
            });
            args.onPrimaryButtonClick?.();
          }}
          onSecondaryButtonClick={() => {
            console.log(" clicked with:", {
              search: searchValue,
              attribute: attributeValue,
              property: propertyValue,
            });
            args.onSecondaryButtonClick?.();
          }}
        />
        <div className="mt-4 p-4 bg-gray-50 rounded-md">
          <h3 className="font-medium mb-2">Current State:</h3>
          <p>Search: {searchValue || "(empty)"}</p>
          <p>Attribute: {attributeValue || "(not selected)"}</p>
          <p>Property: {propertyValue || "(not selected)"}</p>
        </div>
      </div>
    );
  },
};

// With custom options
export const WithCustomOptions: Story = {
  args: {
    attributeOptions: [
      { label: "Username", value: "username" },
      { label: "Department", value: "department" },
      { label: "Role", value: "role" },
    ],
    propertyOptions: [
      { label: "Contains", value: "contains" },
      { label: "Does not contain", value: "notContains" },
      { label: "Is empty", value: "isEmpty" },
    ],
    primaryButtonText: "Apply Filters",
    secondaryButtonText: "Reset Filters",
  },
};
