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
          extend: "dark", // <- inherit default values from dark theme
          colors: {
            background: "#0D001A",
            foreground: "#ffffff",
            primary: {
              50: "#ffffff",
              100: "#FBF5EC",
              200: "#FBF5EC",
              300: "#F4EADE",
              400: "#EADCD0",
              500: "#DDCABC",
              600: "#BE9C89",
              700: "#9F725E",
              800: "#804D3B",
              900: "#6A3124",
              DEFAULT: "#DDCABC",
              foreground: "#ffffff",
            },
            secondary: {
              100: "#D9EAF9",
              200: "#B4D4F4",
              300: "#88B0DF",
              400: "#6189BF",
              500: "#345995",
              600: "#264480",
              700: "#1A326B",
              800: "#102356",
              900: "#091747",
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
