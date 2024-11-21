/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 10s linear infinite",
      },
      colors: {
        primary: "#e3ff04",
        "black-90": "rgba(24, 24, 24, 0.1);",
        "white-15": "rgba(255, 255, 255, 0.15)",
        "dark-gray": "rgb(11 11 11)",
      },
      backgroundImage: {
        "grid-yellow": "url('/src/assets/img/hero-v2bg.png')",
      },
    },
  },
  plugins: [],
};
