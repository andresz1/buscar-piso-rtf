const defaultTheme = require("tailwindcss/defaultTheme");
const spark = require("@spark-ui/tailwind-plugins");
const theme = require("@spark-ui/theme-utils");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@spark-ui/**/*.{js,mjs}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Nunito Sans', sans-serif", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    ...spark.sparkConfig({
      htmlFontSize: 16,
      themes: {
        default: theme.defaultTheme,
        dark: theme.defaultThemeDark,
      },
    }),
  ],
};
