const plugin = require("tailwindcss/plugin");

// Rotate X utilities
const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-x-0": {
      transform: "rotateX(0deg)",
    },
    ".rotate-x-90": {
      transform: "rotateX(90deg)",
    },
  });
});

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1320px",
      },
      fontFamily: {
        dm: ["DM Sans"],
      },
      colors: {
        primary: "#666666",
        secondary: "#111111",
        "dark-300": "#2c2d2e",
      },
    },
  },
  darkMode: "class",
  plugins: [require("daisyui"), rotateX],
};
