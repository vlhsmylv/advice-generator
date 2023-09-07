/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.{js,jsx}", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "grayish-blue": "#4e5d73",
        "neon-green": "#52ffa8",
        "dark-blue": "#1f2632",
        "light-cyan": "#cee3e9",
        "dark-grayish-blue": "#323a49",
      },
    },
  },
  plugins: [],
};
