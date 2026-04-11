/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#ffffff",
          "primary-content": "#000000",
          "base-100": "#000000", // main background
          "base-200": "#0a0a0a", // slightly lighter bg
          "base-300": "#141414", // cards, modals
          "base-content": "#ffffff", // main text
          neutral: "#1a1a1a",
          "neutral-content": "#ffffff",
        },
      },
      {
        light: {
          primary: "#000000",
          "primary-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f5f5f5",
          "base-300": "#ebebeb",
          "base-content": "#000000",
          neutral: "#e5e5e5",
          "neutral-content": "#000000",
        },
      },
    ],
    defaultTheme: "dark",
  },
};
