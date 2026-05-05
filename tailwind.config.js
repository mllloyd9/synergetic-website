/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: '#0F1419',
          deep: '#1A2025',
          accent: '#00A86B',
          accentDark: '#00754A',
          bone: '#FAFAF7',
          slate: '#525B66',
        },
        // Legacy aliases — only kept so the untouched legal pages
        // (privacy / terms) keep rendering. Do not use in new code.
        primary: {
          100: '#FAFAF7',
          200: '#E8F4EE',
          600: '#00A86B',
          700: '#00754A',
          800: '#1A2025',
          900: '#0F1419',
        },
        secondary: {
          500: '#525B66',
          700: '#1A2025',
          900: '#0F1419',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 2px 4px rgba(0,0,0,0.05)',
        card: '0 4px 12px rgba(0,0,0,0.08)',
        'card-lg': '0 12px 32px rgba(0,0,0,0.12)',
      },
      animation: {
        'slide-down': 'slide-down 0.3s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'fade-in-up': 'fade-in-up 0.7s ease-out',
      },
      keyframes: {
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
