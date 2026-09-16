/** @type {import('tailwindcss').Config} */
import { tokens } from "./src/components/design-tokens";

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: tokens.brand,
        neutral: tokens.neutral,
      },
      borderRadius: {
        button: tokens.radius.button,
        input: tokens.radius.input, // Lấy bo góc "8px" từ file design-tokens
        card: tokens.radius.card,     // Lấy bo góc "12px" từ file design-tokens
        badge: tokens.radius.badge,   // Lấy "9999px" từ file design-tokens
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}