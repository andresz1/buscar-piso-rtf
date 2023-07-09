const sparkPlugins = require("@spark-ui/tailwind-plugins");
const themeUtils = require("@spark-ui/theme-utils");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx, mdx}",
    "./node_modules/@spark-ui/**/*.{js,mjs}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    ...sparkPlugins.sparkConfig({
      htmlFontSize: 16,
      themes: {
        default: themeUtils.defaultTheme,
        dark: themeUtils.defaultThemeDark,
      },
    }),
  ],
};
