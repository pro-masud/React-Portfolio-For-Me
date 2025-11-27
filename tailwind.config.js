/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "primary-ur": "#1d2939",
        "secondary-ur": "#6ebd97",
      },
    },
  },
  plugins: [],
};
