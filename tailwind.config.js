module.exports = {
  mode: "jit",
  purge: [
    "./public/**/*.html",
    "./components/**/*.vue",
    "./slices/**/*.vue",
    "./utils/**/*.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: "1rem",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
