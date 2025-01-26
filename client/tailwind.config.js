/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlack: "#111111",
        borderColor: "#3F3F46",
        primaryColor: "#F44336",
      },
    },
  },
  plugins: [],
};
