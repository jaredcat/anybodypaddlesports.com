export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: 'var(--e-global-color-primary)',
          600: 'var(--e-global-color-primary)',
          700: 'var(--e-global-color-primary)',
          800: '#155e75',
          900: '#164e63',
          DEFAULT: 'var(--e-global-color-primary)',
        },
        secondary: {
          500: 'var(--e-global-color-secondary)',
          600: 'var(--e-global-color-secondary)',
          700: 'var(--e-global-color-secondary)',
          DEFAULT: 'var(--e-global-color-secondary)',
        },
        accent: {
          500: 'var(--e-global-color-accent)',
          600: 'var(--e-global-color-accent)',
          700: 'var(--e-global-color-accent)',
          DEFAULT: 'var(--e-global-color-accent)',
        },
        'header-background': 'var(--e-global-color-header)',
        'header-text': 'var(--e-global-color-header-text)',
        text: {
          DEFAULT: 'var(--e-global-color-text)',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        primary: [
          'var(--e-global-typography-primary-font-family)',
          'sans-serif',
        ],
        secondary: [
          'var(--e-global-typography-secondary-font-family)',
          'serif',
        ],
        text: ['var(--e-global-typography-text-font-family)', 'sans-serif'],
        accent: ['var(--e-global-typography-accent-font-family)', 'sans-serif'],
      },
      fontWeight: {
        primary: 'var(--e-global-typography-primary-font-weight)',
        secondary: 'var(--e-global-typography-secondary-font-weight)',
        text: 'var(--e-global-typography-text-font-weight)',
        accent: 'var(--e-global-typography-accent-font-weight)',
      },
    },
  },
  plugins: [],
};
