/**
 * Zenbyte UI Font System
 *
 * Configuration for Roboto font family with various weights.
 */

export interface FontFace {
  fontFamily: string;
  fontWeight: string;
  src: string;
  fontDisplay: string;
}

const fonts = {
  // Font families
  fontFamily: {
    sans: ["Roboto", "ui-sans-serif", "system-ui", "sans-serif"],
    roboto: ["Roboto", "sans-serif"],
  },

  // Font weight configuration
  fontWeight: {
    thin: 100,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600, // Note: Roboto doesn't have true semibold, this will use bold
    bold: 700,
    black: 900,
  },

  // Font face declarations
  fontFace: [
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
  ] as FontFace[],

  // Font plugin function
  fontPlugin: function ({ addBase }: { addBase: (config: any) => void }) {
    addBase({
      "@font-face": this.fontFace,
      html: { fontFamily: "Roboto, sans-serif" },
    });
  },
};

export default fonts;
