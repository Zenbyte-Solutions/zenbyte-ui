/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

// Import theme files
const colors = require("./src/themes/colours");
const typography = require("./src/themes/typography");
const effects = require("./src/themes/effects");
const iconSizes = require("./src/themes/iconSizes");
const spacings = require("./src/themes/spacings");

module.exports = {
  content: [
    "./App.tsx",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // Add imported colors to the theme
      colors: colors,

      // Add typography scales
      fontSize: {
        ...typography.desktop,
        ...typography.mobile,
      },

      // Add visual effects
      boxShadow: effects.shadows,
      opacity: effects.opacity,
      blur: effects.blur,
      transitionDuration: effects.transition,

      // Add icon sizes
      width: {
        ...iconSizes,
      },
      height: {
        ...iconSizes,
      },

      // Add spacing utilities based on imported spacings
      spacing: {
        ...spacings.vertical,
        ...spacings.horizontal,
      },

      // Vertical and horizontal gap utilities
      gap: {
        ...spacings.vertical,
        ...spacings.horizontal,
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("@tailwindcss/typography"),

    // Optional: Add utility classes for typography
    plugin(function ({ addComponents }) {
      const components = {};

      // Add desktop typography components
      Object.keys(typography.desktop).forEach((key) => {
        components[`.${key}`] = {
          fontSize: typography.desktop[key][0],
          lineHeight: typography.desktop[key][1].lineHeight,
          letterSpacing: typography.desktop[key][1].letterSpacing,
          fontWeight: typography.desktop[key][1].fontWeight,
        };
      });

      // Add mobile typography components
      Object.keys(typography.mobile).forEach((key) => {
        components[`.${key}`] = {
          fontSize: typography.mobile[key][0],
          lineHeight: typography.mobile[key][1].lineHeight,
          letterSpacing: typography.mobile[key][1].letterSpacing,
          fontWeight: typography.mobile[key][1].fontWeight,
        };
      });

      addComponents(components);
    }),

    // Add icon size classes
    plugin(function ({ addUtilities }) {
      const iconUtilities = {};

      Object.entries(iconSizes).forEach(([size, value]) => {
        iconUtilities[`.icon-${size}`] = {
          width: value,
          height: value,
        };
      });

      addUtilities(iconUtilities);
    }),

    // Add spacing utilities
    plugin(function ({ addUtilities }) {
      const spacingUtilities = {
        // Vertical spacing utilities
        ...Object.keys(spacings.vertical).reduce((acc, size) => {
          acc[`.vertical-spacing-${size}`] = {
            gap: spacings.vertical[size],
          };
          return acc;
        }, {}),

        // Horizontal spacing utilities
        ...Object.keys(spacings.horizontal).reduce((acc, size) => {
          acc[`.horizontal-spacing-${size}`] = {
            columnGap: spacings.horizontal[size],
          };
          return acc;
        }, {}),
      };

      addUtilities(spacingUtilities);
    }),
  ],
};
