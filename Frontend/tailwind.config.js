/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'playfair-display': ['Playfair Display', 'serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'inherit',
            a: {
              color: '#0ea5e9',
              '&:hover': {
                color: '#0284c7',
              },
              code: { color: '#0ea5e9' },
            },
            h1: {
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
            },
            h2: {
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
            },
            h3: {
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
            },
            h4: {
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
            },
            strong: { color: '#0ea5e9' },
            code: {
              color: '#0ea5e9',
              backgroundColor: '#f0f9ff',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
