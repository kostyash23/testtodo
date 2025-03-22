/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(220, 98%, 61%)",
        checkBg: "linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
        light: {
          bg: "hsl(0, 0%, 98%)",
          listBg: "hsl(236, 33%, 92%)",
          item: "hsl(233, 11%, 84%)",
          text: "hsl(235, 19%, 35%)",
          textMuted: "hsl(236, 9%, 61%)",
        },
        dark: {
          bg: "hsl(235, 21%, 11%)",
          listBg: "hsl(235, 24%, 19%)",
          item: "hsl(234, 11%, 52%)",
          text: "hsl(234, 39%, 85%)",
          textHover: "hsl(236, 33%, 92%)",
        },
      },
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
      },
      fontSize: {
        base: "18px",
      },
    },
  },
  plugins: [],
};
