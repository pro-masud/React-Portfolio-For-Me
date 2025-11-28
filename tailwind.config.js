/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "primary-ur": "#1d2939",
        "secondary-ur": "#6ebd97",
      },
      keyframes: {
        ripple: {
          "0%": { transform: "scale(1)", opacity: "0.7" },
          "50%": { transform: "scale(1.8)", opacity: "0.3" },
          "100%": { transform: "scale(2.5)", opacity: "0" },
        },
      },
      animation: {
        ripple1: "ripple 2s ease-in-out infinite",
        ripple2: "ripple 2s ease-in-out infinite 0.7s",
        ripple3: "ripple 2s ease-in-out infinite 1.4s",
      },
    },
  },
  plugins: [],
};
