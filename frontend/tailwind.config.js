/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f766e",
        accent: "#14b8a6",
        soft: "#f0fdfa",
      },
    },
  },
  plugins: [],
};
