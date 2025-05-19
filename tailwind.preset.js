// src/tailwind.preset.js
module.exports = {
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
        "zb-icon-xs": "12px",
        "zb-icon-sm": "16px",
        "zb-icon-md": "24px",
        "zb-icon-lg": "48px",
        "zb-icon-xl": "56px",
      },
      height: {
        "zb-icon-xs": "12px",
        "zb-icon-sm": "16px",
        "zb-icon-md": "24px",
        "zb-icon-lg": "48px",
        "zb-icon-xl": "56px",
      },

      // Spacing System
      spacing: {
        // Vertical Spacings (8px increments)
        "zb-v-8": "8px",
        "zb-v-16": "16px",
        "zb-v-24": "24px",
        "zb-v-32": "32px",
        "zb-v-40": "40px",
        "zb-v-48": "48px",
        "zb-v-56": "56px",
        "zb-v-64": "64px",
        "zb-v-72": "72px",
        "zb-v-80": "80px",
        // Horizontal Spacings (8px increments)
        "zb-h-8": "8px",
        "zb-h-16": "16px",
        "zb-h-24": "24px",
        "zb-h-32": "32px",
        "zb-h-40": "40px",
        "zb-h-48": "48px",
        "zb-h-56": "56px",
        "zb-h-64": "64px",
        "zb-h-72": "72px",
        "zb-h-80": "80px",
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
        "zb-desktop-headlineMedium": [
          "40px",
          {
            lineHeight: "48px",
            letterSpacing: "0em",
            fontWeight: 600,
          },
        ],
        "zb-desktop-headlineSmall": [
          "32px",
          {
            lineHeight: "38px",
            letterSpacing: "0em",
            fontWeight: 600,
          },
        ],
        "zb-desktop-headlineXSmall": [
          "28px",
          {
            lineHeight: "34px",
            letterSpacing: "0em",
            fontWeight: 600,
          },
        ],
        "zb-desktop-headlineXXSmall": [
          "24px",
          {
            lineHeight: "28px",
            letterSpacing: "0em",
            fontWeight: 600,
          },
        ],
        "zb-desktop-headlineXXXSmall": [
          "20px",
          {
            lineHeight: "28px",
            letterSpacing: "0em",
            fontWeight: 600,
          },
        ],
        "zb-desktop-subtitleLarge": [
          "18px",
          {
            lineHeight: "28px",
            letterSpacing: "0em",
            fontWeight: 600,
          },
        ],
        "zb-desktop-subtitleSmall": [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0em",
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
        "zb-desktop-bodyMedium": [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0em",
            fontWeight: 500,
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
        "zb-desktop-bodySmallMedium": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0em",
            fontWeight: 500,
          },
        ],
        "zb-desktop-captionRegular": [
          "12px",
          {
            lineHeight: "16px",
            letterSpacing: "0em",
            fontWeight: 400,
          },
        ],
        "zb-desktop-captionMedium": [
          "12px",
          {
            lineHeight: "16px",
            letterSpacing: "0em",
            fontWeight: 500,
          },
        ],
        "zb-desktop-label": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0em",
            fontWeight: 500,
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
        "zb-mobile-headlineMedium": [
          "32px",
          {
            lineHeight: "38px",
            letterSpacing: "0em",
            fontWeight: 600,
          },
        ],
        "zb-mobile-headlineSmall": [
          "28px",
          {
            lineHeight: "33px",
            letterSpacing: "0em",
            fontWeight: 600,
          },
        ],
        "zb-mobile-headlineXSmall": [
          "24px",
          {
            lineHeight: "28px",
            letterSpacing: "0em",
            fontWeight: 600,
          },
        ],
        "zb-mobile-headlineXXSmall": [
          "20px",
          {
            lineHeight: "23px",
            letterSpacing: "0em",
            fontWeight: 600,
          },
        ],
        "zb-mobile-headlineXXXSmall": [
          "16px",
          {
            lineHeight: "19px",
            letterSpacing: "0em",
            fontWeight: 600,
          },
        ],
        "zb-mobile-subtitleLarge": [
          "18px",
          {
            lineHeight: "28px",
            letterSpacing: "0em",
            fontWeight: 600,
          },
        ],
        "zb-mobile-subtitleSmall": [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0em",
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
        "zb-mobile-bodyMedium": [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0em",
            fontWeight: 500,
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
        "zb-mobile-bodySmallMedium": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0em",
            fontWeight: 500,
          },
        ],
        "zb-mobile-captionRegular": [
          "12px",
          {
            lineHeight: "16px",
            letterSpacing: "0em",
            fontWeight: 400,
          },
        ],
        "zb-mobile-captionMedium": [
          "12px",
          {
            lineHeight: "16px",
            letterSpacing: "0em",
            fontWeight: 500,
          },
        ],
        "zb-mobile-label": [
          "16px",
          {
            lineHeight: "20px",
            letterSpacing: "0em",
            fontWeight: 500,
          },
        ],
      },

      // Shadow values from 100-800 elevation
      boxShadow: {
        "zb-100": "0px 1px 3px 0px rgba(0, 0, 0, 0.08)",
        "zb-200": "0px 2px 4px 0px rgba(0, 0, 0, 0.08)",
        "zb-300": "0px 4px 8px 0px rgba(0, 0, 0, 0.08)",
        "zb-400": "0px 8px 16px 0px rgba(0, 0, 0, 0.08)",
        "zb-500": "0px 16px 24px 0px rgba(0, 0, 0, 0.08)",
        "zb-600": "0px 20px 32px 0px rgba(0, 0, 0, 0.08)",
        "zb-700": "0px 24px 48px 0px rgba(0, 0, 0, 0.12)",
        "zb-800": "0px 32px 64px 0px rgba(0, 0, 0, 0.12)",
      },

      // Opacity scales from 0-100
      opacity: {
        "zb-0": "0",
        "zb-5": "0.05",
        "zb-10": "0.1",
        "zb-20": "0.2",
        "zb-25": "0.25",
        "zb-30": "0.3",
        "zb-40": "0.4",
        "zb-50": "0.5",
        "zb-60": "0.6",
        "zb-70": "0.7",
        "zb-75": "0.75",
        "zb-80": "0.8",
        "zb-90": "0.9",
        "zb-95": "0.95",
        "zb-100": "1",
      },

      // Additional visual effects
      blur: {
        "zb-none": "0",
        "zb-sm": "4px",
        "zb-md": "8px",
        "zb-lg": "16px",
        "zb-xl": "24px",
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

      // Transition speed
      transitionDuration: {
        "zb-fast": "150ms",
        "zb-default": "250ms",
        "zb-slow": "350ms",
        "zb-slower": "500ms",
        "zb-1000": "1000ms",
        "zb-2000": "2000ms",
        "zb-500": "500ms",
      },

      transitionProperty: {
        "zb-transform": "transform",
      },

      transitionTimingFunction: {
        "zb-linear": "linear",
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        "@font-face": [
          {
            fontFamily: "Roboto",
            fontWeight: "100",
            src: 'url("/fonts/Roboto-Thin.woff2") format("woff2")',
            fontDisplay: "swap",
          },
          {
            fontFamily: "Roboto",
            fontWeight: "300",
            src: 'url("/fonts/Roboto-Light.woff2") format("woff2")',
            fontDisplay: "swap",
          },
          {
            fontFamily: "Roboto",
            fontWeight: "400",
            src: 'url("/fonts/Roboto-Regular.woff2") format("woff2")',
            fontDisplay: "swap",
          },
          {
            fontFamily: "Roboto",
            fontWeight: "500",
            src: 'url("/fonts/Roboto-Medium.woff2") format("woff2")',
            fontDisplay: "swap",
          },
          {
            fontFamily: "Roboto",
            fontWeight: "700",
            src: 'url("/fonts/Roboto-Bold.woff2") format("woff2")',
            fontDisplay: "swap",
          },
          {
            fontFamily: "Roboto",
            fontWeight: "900",
            src: 'url("/fonts/Roboto-Black.woff2") format("woff2")',
            fontDisplay: "swap",
          },
        ],
        html: { fontFamily: "Roboto, sans-serif" },
      });
    },
    function ({ addComponents }) {
      const components = {};

      // Add typography components
      ["desktop", "mobile"].forEach((viewport) => {
        [
          "displayLarge",
          "headlineLarge",
          "headlineMedium",
          "headlineSmall",
          "headlineXSmall",
          "headlineXXSmall",
          "headlineXXXSmall",
          "subtitleLarge",
          "subtitleSmall",
          "bodyRegular",
          "bodyMedium",
          "bodySmallRegular",
          "bodySmallMedium",
          "captionRegular",
          "captionMedium",
          "label",
        ].forEach((type) => {
          const className = `.zb-${viewport}-${type}`;
          const fontSize = `zb-${viewport}-${type}`;
          components[className] = {
            fontSize: `var(--font-size-${fontSize})`,
            lineHeight: `var(--line-height-${fontSize})`,
            letterSpacing: `var(--letter-spacing-${fontSize})`,
            fontWeight: `var(--font-weight-${fontSize})`,
          };
        });
      });

      addComponents(components);
    },
    function ({ addUtilities }) {
      const iconUtilities = {};
      ["xs", "sm", "md", "lg", "xl"].forEach((size) => {
        iconUtilities[`.zb-icon-${size}`] = {
          width: `var(--zb-icon-${size})`,
          height: `var(--zb-icon-${size})`,
        };
      });
      addUtilities(iconUtilities);

      // Add spacing utilities
      const spacingUtilities = {};
      // Vertical spacing utilities
      [8, 16, 24, 32, 40, 48, 56, 64, 72, 80].forEach((size) => {
        spacingUtilities[`.zb-vertical-${size}`] = {
          gap: `var(--zb-v-${size})`,
        };
      });
      // Horizontal spacing utilities
      [8, 16, 24, 32, 40, 48, 56, 64, 72, 80].forEach((size) => {
        spacingUtilities[`.zb-horizontal-${size}`] = {
          columnGap: `var(--zb-h-${size})`,
        };
      });
      // Container utilities
      spacingUtilities[".zb-container-desktop"] = {
        maxWidth: "var(--zb-desktop)",
        margin: "0 auto",
      };
      spacingUtilities[".zb-container-tablet"] = {
        maxWidth: "var(--zb-tablet)",
        margin: "0 auto",
      };
      spacingUtilities[".zb-container-mobile"] = {
        maxWidth: "var(--zb-mobile)",
        margin: "0 auto",
      };

      addUtilities(spacingUtilities);
    },
  ],
  safelist: [
    // Safelist color classes
    "bg-zb-coral-50",
    "bg-zb-coral-400",
    "text-zb-coral-400",
    "border-zb-coral-400",
    "border-l-zb-coral-400",
    "bg-zb-cyan-50",
    "bg-zb-cyan-400",
    "text-zb-cyan-400",
    "border-zb-cyan-400",
    "bg-zb-amber-50",
    "bg-zb-amber-300",
    "text-zb-amber-300",
    "border-zb-amber-300",
    "bg-zb-emerald-50",
    "bg-zb-emerald-400",
    "text-zb-emerald-400",
    "border-zb-emerald-400",

    // Safelist animation classes to ensure they're included
    "animate-zb-spin-slow",
    "animate-zb-spin",
    "animate-zb-spin-fast",

    // Safelist shadow classes
    "shadow-zb-100",
    "shadow-zb-200",
    "shadow-zb-300",
    "shadow-zb-400",
    "shadow-zb-500",
    "shadow-zb-600",
    "shadow-zb-700",
    "shadow-zb-800",

    // Safelist container classes
    "zb-container-desktop",
    "zb-container-tablet",
    "zb-container-mobile",

    // Safelist typography classes (just a few examples)
    "zb-desktop-displayLarge",
    "zb-desktop-headlineLarge",
    "zb-desktop-bodyRegular",
    "zb-mobile-displayLarge",
    "zb-mobile-headlineLarge",
    "zb-mobile-bodyRegular",
  ],
};
