/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      colors: {
        "orange-soft": "hsl(35, 77%, 62%)",
        "red-soft": "hsl(5, 85%, 63%)",
        "white-off": "hsl(36, 100%, 99%)",
        "blue-grayish": "hsl(233, 8%, 79%)",
        "blue-grayish-dark": "hsl(236, 13%, 42%)",
        "blue-very-dark": "hsl(240, 100%, 5%)",
      },
    },
  },
  plugins: [],
};
