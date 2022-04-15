const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "376px",
        // => @media (min-width: 576px) { ... }

        md: "640px",
        // => @media (min-width: 960px) { ... }

        // lg: "1440px",
        // => @media (min-width: 1440px) { ... }
        // ...defaultTheme.screens,
      },
      colors: {
        zomato: {
          primary: "#ff7e8b",
          gray: "#828282",
          whiteGray: "#cfcfcf",
          inactive: "#f8f8f8",
          inactiveText: "#696969",
          filter: "#9c9c9c",
          secondary: "#f8f8f8",
          subtitle: "#363636",
          heading: "#1c1c1c",
          tagRed: "#d92662",
          tagBlue: "#256fef",
          tagGreen: "#24963f",
          border: "#e8e8e8",
        },
      },
    },
  },
  plugins: [],
};
