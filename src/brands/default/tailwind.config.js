const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
      fontFamily: {
        default: ["'Poppins'", ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        sm: "0.875rem",
      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  