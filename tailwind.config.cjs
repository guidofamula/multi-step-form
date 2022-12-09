/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      mobile: { max: "375px" },
      desktop: { max: "1440px" },
    },
    colors: {
      primary: {
        "m-blue": "hsl(var(--marine-blue) / <alpha-value>)",
        "p-blue": "hsl(var(--purplish-blue) / <alpha-value>)",
        "pas-blue": "hsl(var(--pastel-blue) / <alpha-value>)",
        "l-blue": "hsl(var(--light-blue) / <alpha-value>)",
        "s-red": "hsl(var(--strawberry-red) / <alpha-value>)",
      },
      netral: {
        "c-gray": "hsl(var(--cool-gray) / <alpha-value>)",
        "l-gray": "hsl(var(--light-gray) / <alpha-value>)",
        magnolia: "hsl(var(--magnolia) / <alpha-value>)",
        alabaster: "hsl(var(--alabaster) / <alpha-value>)",
        white: "hsl(var(--white) / <alpha-value>)",
      },
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
    extend: {
      fontFamily: {
        ubuntuRegular: ["UbuntuRegular", "system-ui", "sans-serif"],
        ubuntuMedium: ["UbuntuMedium", "system-ui", "sans-serif"],
        ubuntuBold: ["UbuntuBold", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("./node_modules/tw-elements/dist/plugin")],
};
