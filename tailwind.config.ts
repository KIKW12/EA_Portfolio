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
        // Obsidian & Bone palette
        obsidian: '#0B0B0C',
        ink: '#0F0F11',
        raised: '#141416',
        elevated: '#1A1A1D',
        bone: '#EDE7DA',
        ash: '#9A958B',
        graphite: '#6F6E6A',
        slate: '#3F3E3B',
        hairline: 'rgba(237, 231, 218, 0.08)',
        'hairline-strong': 'rgba(237, 231, 218, 0.16)',
        sage: {
          DEFAULT: '#7CA982',
          dim: '#5A8466',
          glow: 'rgba(124, 169, 130, 0.15)',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        editorial: '-0.04em',
        wide05: '0.05em',
        widest3: '0.3em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'rule-grow': 'ruleGrow 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'caret-blink': 'caretBlink 1.1s step-end infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        ruleGrow: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        caretBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
