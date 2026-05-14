/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0a0f1e',
        'navy-2': '#0d1528',
        'navy-3': '#111d35',
        'navy-card': '#0f1a2e',
        accent: '#4f8ef7',
        'accent-2': '#a78bfa',
        dim: '#8892a4',
        border: '#1e2d4a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
