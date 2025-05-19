/** @type {import('tailwindcss').Config} */
export default {
  presets: [require("../zenbyte-ui-components/tailwind.preset")],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      // Color System
      colors: {
        // Feedback Colors
        "zb-cyan": {
          50: "#ecfeff",
          400: "#00d3f3",
        },
        "zb-amber": {
          50: "#fffbeb",
          300: "#FCD34D",
        },
        "zb-emerald": {
          50: "#ecfdf5",
          400: "#34D399",
        },
        "zb-coral": {
          50: "#fff5f5",
          400: "#FF6B6B",
        },
        // Content Colors
        "zb-gray": {
          900: "#111827",
          700: "#374151",
          500: "#6B7280",
          200: "#E5E7EB",
          100: "#F5F5F4",
        },
        "zb-stone": {
          100: "#F5F5F4",
        },
        // Primary Colors
        "zb-indigo": {
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
          800: "#3730A3",
          900: "#312E81",
        },
        // Special Colors
        "zb-shadow": "#131927",
        "zb-background": "#FBFBFB",
        "zb-white": "#FFFFFF",
      },

      // Border Radius System
      borderRadius: {
        "zb-avatar": "50px",
        "zb-button": "12px",
        "zb-cards": "10px",
        "zb-input": "4px",
        "zb-textarea": "4px",
        "zb-dropdown": "4px",
        "zb-tables": "10px",
        "zb-modals": "10px",
        "zb-alerts": "10px",
      },

      // Container Sizes
      maxWidth: {
        "zb-desktop": "1192px",
        "zb-tablet": "770px",
        "zb-mobile": "370px",
      },

      // Icon Sizes
      width: {
        "zb-icon": {
          xs: "12px",
          sm: "16px",
          md: "24px",
          lg: "48px",
          xl: "56px",
        },
      },
      height: {
        "zb-icon": {
          xs: "12px",
          sm: "16px",
          md: "24px",
          lg: "48px",
          xl: "56px",
        },
      },

      // Spacing System
      spacing: {
        // Vertical Spacings (8px increments)
        "zb-v": {
          8: "8px",
          16: "16px",
          24: "24px",
          32: "32px",
          40: "40px",
          48: "48px",
          56: "56px",
          64: "64px",
          72: "72px",
          80: "80px",
        },
        // Horizontal Spacings (8px increments)
        "zb-h": {
          8: "8px",
          16: "16px",
          24: "24px",
          32: "32px",
          40: "40px",
          48: "48px",
          56: "56px",
          64: "64px",
          72: "72px",
          80: "80px",
        },
      },

      // Typography System
      fontSize: {
        // Desktop Typography
        "zb-desktop-displayLarge": [
          "60px",
          {
            lineHeight: "70px",
            letterSpacing: "-0.02em",
            fontWeight: 700,
          },
        ],
        "zb-desktop-headlineLarge": [
          "48px",
          {
            lineHeight: "58px",
            letterSpacing: "-0.01em",
            fontWeight: 600,
          },
        ],
        "zb-desktop-bodyRegular": [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0em",
            fontWeight: 400,
          },
        ],
        "zb-desktop-bodySmallRegular": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0em",
            fontWeight: 400,
          },
        ],
        // Mobile Typography
        "zb-mobile-displayLarge": [
          "48px",
          {
            lineHeight: "56px",
            letterSpacing: "-0.02em",
            fontWeight: 700,
          },
        ],
        "zb-mobile-headlineLarge": [
          "36px",
          {
            lineHeight: "42px",
            letterSpacing: "-0.01em",
            fontWeight: 600,
          },
        ],
        "zb-mobile-bodyRegular": [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0em",
            fontWeight: 400,
          },
        ],
        "zb-mobile-bodySmallRegular": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0em",
            fontWeight: 400,
          },
        ],
      },

      // Animation
      animation: {
        "zb-spin-slow": "zb-spin 2s linear infinite",
        "zb-spin": "zb-spin 1s linear infinite",
        "zb-spin-fast": "zb-spin 0.5s linear infinite",
      },
      keyframes: {
        "zb-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      // Add rotation utilities for more flexibility
      rotate: {
        "zb-0": "0deg",
        "zb-90": "90deg",
        "zb-180": "180deg",
        "zb-270": "270deg",
        "zb-360": "360deg",
      },
      transitionProperty: {
        "zb-transform": "transform",
      },
      transitionDuration: {
        "zb-1000": "1000ms",
        "zb-2000": "2000ms",
        "zb-500": "500ms",
      },
      transitionTimingFunction: {
        "zb-linear": "linear",
      },
    },
  },
  plugins: [],
  safelist: [
    // Safelist color classes
    "bg-zb-coral-50",
    "bg-zb-coral-400",
    "border-l-zb-coral-400",
    // Safelist animation classes to ensure they're included
    "zb-spin-slow",
    "zb-spin",
    "zb-spin-fast",
    "animate-zb-spin-slow",
    "animate-zb-spin",
    "animate-zb-spin-fast",
  ],
};
