/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Đặt tên key là 'inter'
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};