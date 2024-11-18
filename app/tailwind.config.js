/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#e3ff04",
        "black-90": "rgba(24, 24, 24, 0.1);",
        "white-15": "rgba(255, 255, 255, 0.15)"

      },
      backgroundImage: {
        "grid-yellow": "url('/src/assets/img/hero-v2bg.png')",
      
        
      },
    },
  },
  plugins: [],
}

