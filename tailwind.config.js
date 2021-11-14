module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "gray-dark": "#0D0409",
        "gray-750": "#202125",
        "gray-light": "#2A2C31",
        "orange-100": "#FF5700",
        "blue-100": "#3673E5",
        "green-100": "#9ac438 ",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
