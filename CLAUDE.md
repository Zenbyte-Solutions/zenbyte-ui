# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

`@zenbytesolutions/zenbyte-ui` is a React component library built with TypeScript and Tailwind CSS. The library follows Atomic Design principles (atoms, molecules, organisms, pages) and is distributed as an npm package.

## Build & Development Commands

```bash
# Build the library for distribution
npm run build

# Run linter
npm run lint

# Start Storybook development server
npm run storybook

# Build Storybook for deployment
npm run build-storybook
```

The build process uses Rollup and generates both CommonJS and ESM formats in the `dist/` directory. The build automatically excludes `.stories.tsx` and `.test.tsx` files.

## Architecture

### Atomic Design Methodology

This library implements Atomic Design, a methodology for creating design systems with five distinct levels of hierarchy. Each level builds upon the previous one, creating increasingly complex UI components:

**1. Atoms** (`src/zenbyte-components/atoms/`)
The foundational building blocks of the interface. These are the smallest, indivisible components that cannot be broken down further without losing their meaning. Think of them as the "elements" of your UI.

Examples in this library:
- Form elements: Button, Input, Checkbox, RadioButton, TextArea, DatePicker, NumberInput
- Display elements: Avatar, Card, Container, Spinner, Toast, PageTitle
- Form-specific atoms: FormInput, FormCheckbox, FormDatePicker, FormNumberInput, FormSelector, FormDynamicArray
- E-commerce atoms: ProductImageThumbnail

**Key Principle: Atoms are the ONLY components that should contain raw HTML elements** (div, span, button, input, etc.). They are typically highly reusable and accept props to modify their appearance and behavior. They have minimal logic and focus on presentation.

**2. Molecules** (`src/zenbyte-components/molecules/`)
Simple combinations of atoms that work together as a cohesive unit. Molecules are still relatively simple but provide more functionality than individual atoms. They represent the smallest compound components that have a specific purpose.

Examples in this library:
- DropdownList: Combines input, button, and list elements
- MultiSelectDropdown: Builds on dropdown with selection logic
- FilterSection: Groups filtering controls together
- ProductCard: Combines image, text, and buttons for product display
- CartItem: Combines product info, quantity selector, and price
- QuantitySelector: Combines buttons and input for quantity control
- SubTotalCard: Groups pricing information
- ImageGallery: Coordinates multiple images with selection

**Key Principle: Molecules should be composed primarily from atoms**, with minimal or no raw HTML elements. They begin to have more specific purposes and encapsulate particular interaction patterns. Any structural wrapper HTML should be minimized.

**3. Organisms** (`src/zenbyte-components/organisms/`)
Complex UI components composed of molecules and/or atoms. Organisms form distinct sections of an interface and typically represent complete, functional sections of a page. They can stand alone and often manage their own state.

Examples in this library:
- Table: Complete data grid with sorting, filtering, pagination
- Modal: Full dialog system with header, body, footer
- LeftNav/TopNav: Complete navigation systems
- FormContainer: Complex form layout with validation
- EditableGrid: Interactive data table with editing capabilities
- CartList: Complete shopping cart display
- ProductDetail: Full product information section
- ProductOverview: Complete product browsing interface

**Key Principle: Organisms should contain NO raw HTML elements**. They should be composed entirely of molecules and atoms. This is a target state for this library - some existing organisms may still contain HTML, but all new organisms and refactored components should follow this rule strictly. This ensures that consuming applications can build entire UIs using only Zenbyte components without writing raw HTML.

Organisms are substantial components that users recognize as distinct parts of the interface. They often integrate multiple molecules and manage complex interactions.

**4. Pages** (`src/zenbyte-components/pages/`)
Complete page layouts composed of organisms, molecules, and atoms. Pages represent specific instances of templates with actual content. In a component library context, these are often reference implementations or common page patterns.

Examples in this library:
- LoginPage: Complete authentication page layout

**Key Principle: Pages should contain NO raw HTML elements**. They are composed entirely of organisms, molecules, and atoms.

**Component Hierarchy in Practice:**

When creating new components, follow this decision tree:
- Can it be broken down further? If no → Atom (and it should use HTML elements)
- Does it combine 2-3 atoms for a single purpose? → Molecule (compose from atoms, minimal HTML)
- Does it form a complete section with multiple molecules? → Organism (compose from molecules/atoms, NO HTML)
- Does it represent a full page layout? → Page (compose from organisms/molecules/atoms, NO HTML)

**HTML Usage Guidelines (Best Practice):**
- **Atoms**: ONLY atoms should contain raw HTML elements (div, span, button, input, p, h1, etc.)
- **Molecules**: Should be composed primarily from atoms with minimal structural HTML if absolutely necessary
- **Organisms**: Must NOT contain any raw HTML - compose entirely from molecules and atoms
- **Pages**: Must NOT contain any raw HTML - compose entirely from organisms, molecules, and atoms

**Goal**: This composition strategy ensures that consuming applications can build complete user interfaces using only Zenbyte components, without ever needing to write raw HTML. The front-end application should be able to construct entire pages by composing Zenbyte components.

**Note**: Some existing organisms in the library may still contain HTML elements. This is legacy code. When refactoring or creating new components, strictly follow the no-HTML rule for organisms and pages.

**Naming Convention:**
All components are prefixed with "Zenbyte" when exported (e.g., `ZenbyteButton`, `ZenbyteTable`, `ZenbyteProductCard`). Internal component names don't use the prefix, but exports do for clarity when consuming the library.

### Form System

The library includes a comprehensive form system using Zod for validation:

- **Form component** (`src/zenbyte-components/atoms/form-components/form/Form.tsx`): Context-based form container with Zod schema validation
- **Form components**: All form inputs (FormInput, FormCheckbox, FormDatePicker, FormDropDownList, FormMultiSelectDropdown, FormRadioButton, FormTextArea, FormDynamicArray, FormNumberInput, FormSelector)
- Form validation happens both on field change (inline) and on submit
- The Form component automatically handles error display and value management through FormContext

### Styling System

The library uses a custom Tailwind preset (`tailwind.preset.js`) with a comprehensive design system:

- **Prefix convention**: All custom utilities are prefixed with `zb-` (e.g., `zb-indigo-500`, `zb-button`, `zb-desktop-headlineLarge`)
- **Typography**: Separate desktop and mobile scales (e.g., `zb-desktop-bodyRegular`, `zb-mobile-headlineLarge`)
- **Colors**: Custom color palette including `zb-indigo`, `zb-gray`, `zb-cyan`, `zb-amber`, `zb-emerald`, `zb-coral`
- **Spacing**: Custom spacing scale with `zb-v-*` (vertical) and `zb-h-*` (horizontal) utilities in 8px increments
- **Shadows**: Elevation system from `shadow-zb-100` to `shadow-zb-800`
- **Border radius**: Semantic values like `zb-button`, `zb-cards`, `zb-input`, `zb-tables`, `zb-modals`

Consuming applications should import the preset in their tailwind.config.js:

```js
module.exports = {
  presets: [require('@zenbytesolutions/zenbyte-ui/tailwind.preset.js')],
  // ... other config
}
```

### Entry Points

- **Main entry**: `src/index.ts` exports all components from `src/zenbyte-components/index.ts`
- **Component exports**: All components are exported as named exports with the "Zenbyte" prefix
- The library also exports some TypeScript types (e.g., `SelectorOption` from FormSelector)

### E-commerce Components

The library includes specialized e-commerce components:

- Product display: ProductCard, ProductDetail, ProductOverview, ProductImageThumbnail
- Shopping: CartItem, CartList, QuantitySelector, SubTotalCard
- Image handling: ImageGallery
- Pricing: PriceTag, StockIndicator

## Publishing

The package is published to npm with public access (`publishConfig.access: "public"`). The `prepublishOnly` script automatically runs the build before publishing.

## Development Notes

- TypeScript target is ES2015 with JSX transform set to `react-jsx`
- Rollup bundles both CJS and ESM formats with sourcemaps
- PostCSS processes and minimizes CSS, injecting it at the top of the document
- Storybook is used for component development and documentation
- Peer dependencies: React >=16.8.0, react-dom >=16.8.0, react-router-dom ^6.0.0
- Node built-ins (fs, path, http, etc.) are marked as external in Rollup config
