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
        "strong-dark-gray": "#262626",
      },
      backgroundImage: {
        "grid-yellow": "url('/src/assets/img/hero-v2bg.png')",
        "pattern-black": "url('/src/assets/img/team-bg.png')",
        "circle-black": "url('/src/assets/img/footer-bg.png')",
        "triangles-black": "url('/src/assets/img/breadcrumb-1.png')",
        "team-01": "url('/src/assets/img/04.png')",
        "custom-radial":
          "radial-gradient(157.24% 123.22% at 47.19% -0.63%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)",
      },
    },
  },
  plugins: [],
};
