/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

// Import theme files
const colors = require("./src/themes/colours");
const typography = require("./src/themes/typography");

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
  ],
};
