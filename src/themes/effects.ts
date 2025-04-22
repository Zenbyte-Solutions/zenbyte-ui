/**
 * Zenbyte UI Visual Effects System
 *
 * A collection of visual effects including shadows and opacity scales.
 */

module.exports = {
  // Shadow values from 100-800 elevation
  shadows: {
    100: "0px 1px 3px 0px rgba(0, 0, 0, 0.08)",
    200: "0px 2px 4px 0px rgba(0, 0, 0, 0.08)",
    300: "0px 4px 8px 0px rgba(0, 0, 0, 0.08)",
    400: "0px 8px 16px 0px rgba(0, 0, 0, 0.08)",
    500: "0px 16px 24px 0px rgba(0, 0, 0, 0.08)",
    600: "0px 20px 32px 0px rgba(0, 0, 0, 0.08)",
    700: "0px 24px 48px 0px rgba(0, 0, 0, 0.12)",
    800: "0px 32px 64px 0px rgba(0, 0, 0, 0.12)",
  },

  // Opacity scales from 0-100
  opacity: {
    0: "0",
    5: "0.05",
    10: "0.1",
    20: "0.2",
    25: "0.25",
    30: "0.3",
    40: "0.4",
    50: "0.5",
    60: "0.6",
    70: "0.7",
    75: "0.75",
    80: "0.8",
    90: "0.9",
    95: "0.95",
    100: "1",
  },

  // Additional visual effects
  blur: {
    none: "0",
    sm: "4px",
    md: "8px",
    lg: "16px",
    xl: "24px",
  },

  // Transition speeds
  transition: {
    fast: "150ms",
    default: "250ms",
    slow: "350ms",
    slower: "500ms",
  },
};
