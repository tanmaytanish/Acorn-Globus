/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary accent colors
        primary: {
          50: '#fef2f4',
          100: '#fde6ea',
          200: '#fbd0d9',
          300: '#f7aabb',
          400: '#f27a96',
          500: '#e84c6b',
          600: '#d42a52',
          700: '#b21e44',
          800: '#951c3f',
          900: '#7f1b3b',
        },
        // Sidebar dark
        sidebar: {
          bg: '#f8f6f4',
          hover: '#f0eeec',
          active: '#ffe8ec',
        },
        // Card and background colors
        card: {
          DEFAULT: '#ffffff',
          hover: '#fafafa',
        },
        // Gray palette matching design
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        // Brand colors
        brand: {
          dribbble: '#ea4c89',
          instagram: '#e4405f',
          behance: '#1769ff',
          google: '#4285f4',
        },
        // Status colors
        success: '#22c55e',
        warning: '#f59e0b',
        danger: '#ef4444',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'xxs': ['10px', '14px'],
        'xs': ['11px', '16px'],
        'sm': ['12px', '18px'],
        'base': ['13px', '20px'],
        'md': ['14px', '22px'],
        'lg': ['16px', '24px'],
        'xl': ['18px', '28px'],
        '2xl': ['20px', '28px'],
        '3xl': ['24px', '32px'],
        '4xl': ['32px', '40px'],
        '5xl': ['40px', '48px'],
      },
      spacing: {
        '4.5': '18px',
        '13': '52px',
        '15': '60px',
        '18': '72px',
        '22': '88px',
        '26': '104px',
        '30': '120px',
        '68': '272px',
        '76': '304px',
        '84': '336px',
        '88': '352px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
        '2xl': '16px',
        '3xl': '20px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
        'sidebar': '0 0 20px rgba(0, 0, 0, 0.05)',
        'dropdown': '0 10px 40px rgba(0, 0, 0, 0.12)',
        'button': '0 1px 2px rgba(0, 0, 0, 0.05)',
      },
      transitionDuration: {
        '250': '250ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
