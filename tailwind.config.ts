// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fffde7',
          100: '#fffccc',
          200: '#fff9b3',
          300: '#fff799',
          400: '#fff480',
          500: '#fee715', // Main yellow color
          600: '#e6d013',
          700: '#ccb811',
          800: '#b39f0f',
          900: '#99870d',
        },
        secondary: {
          50: '#e2e3e5',
          100: '#c6c8cc',
          200: '#a9acb2',
          300: '#8d9099',
          400: '#70747f',
          500: '#545866',
          600: '#37384c',
          700: '#2a2b3a',
          800: '#1c1e27',
          900: '#101820', // Main dark color
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config