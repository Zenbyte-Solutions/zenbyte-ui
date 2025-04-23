/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

// Import theme files
const colors = require("./src/themes/colours");
const typography = require("./src/themes/typography");
const effects = require("./src/themes/effects");
const iconSizes = require("./src/themes/iconSizes");
const spacings = require("./src/themes/spacings");
const containerSizes = require("./src/themes/containerSizes");
const borderRadius = require("./src/themes/borderRadius");
const fonts = require("./src/themes/fonts");

module.exports = {
  content: [
    "./App.tsx",
    "./app/**/*.{js,ts,jsx,jsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // Add font families and weights
      fontFamily: fonts.fontFamily,
      fontWeight: fonts.fontWeight,

      // Add border radius
      borderRadius: borderRadius,

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
        ...containerSizes,
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

      // Container size utilities
      maxWidth: {
        desktop: containerSizes.desktop.default,
        tablet: containerSizes.tablet.default,
        mobile: containerSizes.mobile.default,
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("@tailwindcss/typography"),

    // Font loading plugin (fixed binding issue)
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": fonts.fontFace,
        html: { fontFamily: "Roboto, sans-serif" },
      });
    }),

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

        // Container utilities
        ".container-desktop": {
          maxWidth: containerSizes.desktop.default,
          margin: "0 auto",
        },
        ".container-tablet": {
          maxWidth: containerSizes.tablet.default,
          margin: "0 auto",
        },
        ".container-mobile": {
          maxWidth: containerSizes.mobile.default,
          margin: "0 auto",
        },
      };

      addUtilities(spacingUtilities);
    }),
  ],
};
