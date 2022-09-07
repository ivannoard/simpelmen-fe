/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        success: "#21B630",
        warning: "#FFBC0D",
        dark: "#352A2B",
        secondary: {
          900: "#6D6061",
          800: "#A69798",
          700: "#E2DCDC",
          600: "#F5F5F5",
        },
        primary: {
          900: "#C9111B",
          600: "#D64D54",
          400: "#E4888D",
        },
        orange: {
          900: "#ED7801",
          600: "#F8CCA0",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      spacing: {
        "30/sp": "1.875rem",
      },
      fontSize: {
        "45/sp": "45px",
      },
    },
  },
  plugins: [],
};
