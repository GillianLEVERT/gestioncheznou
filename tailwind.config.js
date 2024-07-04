import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
  
    },
  },
  plugins: [
    nextui({
      themes: {
        "brown-light": {
          extend: "dark",
          colors: {
            primary: {
              50: "#ffffff",
              100: "#FAEDD9",
              200: "#F5D7B5",
              300: "#E2B38A",
              400: "#C68C65",
              500: "#A15C38",
              600: "#8A4428",
              700: "#732F1C",
              800: "#5D1D11",
              900: "#4D100A",
            },
            secondary: {
              100: "#FCF7F2",
              200: "#F9EEE7",
              300: "#ECDBD3",
              400: "#DBC4BD",
              500: "#C3A6A0",
              600: "#A77974",
              700: "#8C5150",
              800: "#713336",
              900: "#5D1E27",
            },
            focus: "#F182F6",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      },
    }),
  ],
}
