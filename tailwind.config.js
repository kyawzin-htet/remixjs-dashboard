/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class',
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      // colors: {
      //   // Light theme
      //   light: {
      //     primary: '#ffffff',
      //     secondary: '#f3f4f6',
      //     text: '#1f2937',
      //     accent: '#3b82f6',
      //   },
      //   // Dark theme
      //   dark: {
      //     primary: '#1f2937',
      //     secondary: '#111827',
      //     text: '#f3f4f6',
      //     accent: '#60a5fa',
      //   },
      //   // Custom theme (e.g., Forest)
      //   forest: {
      //     primary: '#2d3f2d',
      //     secondary: '#1a231a',
      //     text: '#e5ede5',
      //     accent: '#7fba7f',
      //   },
      // },
      colors:{
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        bgPrimary: 'var(--color-bg-primary)',
        baseText: 'var(--color-text-base)',
      }
    },
  },
  plugins: [],
} 