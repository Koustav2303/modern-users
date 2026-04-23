/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep bluish-black for that cinematic background
        baseDark: '#0b0f19',
        baseAccent: '#161e2e',
        // Glassmorphism utilities
        glassBg: 'rgba(255, 255, 255, 0.03)',
        glassBorder: 'rgba(255, 255, 255, 0.08)',
      },
      backdropBlur: {
        md: '12px',
        lg: '16px',
      }
    },
  },
  plugins: [],
}