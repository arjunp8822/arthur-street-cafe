/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primaryYellow: "rgb(245, 198, 28)",
      lightYellow: "rgb(253, 207, 40)",
      fontPrimary: "rgb(26, 26, 26)",
      fontGrey: "rgb(122, 122, 122)",
      fontLightGrey: "rgb(233, 236, 239)",
      fontBlack: "rgb(0 0 0)",
      fontWhite: "#fff",
    },
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
