/** @type {import('tailwindcss').Config} */
import { tokens } from "./src/components/design-tokens";

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: tokens.brand,
        neutral: tokens.neutral,
        dark: {                    // 👈 thêm khối này
          bg: '#23242C',           // nền trang
          card: '#2B2C35',         // card, khung
          border: '#3A3B46',       // viền
        },
      },
      borderRadius: {
        button: tokens.radius.button,
        input: tokens.radius.input,
        card: tokens.radius.card,
        badge: tokens.radius.badge,
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}