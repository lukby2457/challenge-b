import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary900: '#330000',
        primary800: '#660000',
        primary700: '#990000',
        primary600: '#cc0000',
        primary500: '#ff0000',
        primary400: '#ff3333',
        primary300: '#ff6666',
        primary200: '#ff9999',
        primary100: '#ffcccc',
        primary: {
          900: '#330000',
          800: '#660000',
          700: '#990000',
          600: '#cc0000',
          500: '#ff0000',
          400: '#ff3333',
          300: '#ff6666',
          200: '#ff9999',
          100: '#ffcccc',
        },
        secondary: {
          900: '#2c2c0c',
          800: '#535318',
          700: '#7b7b23',
          600: '#a3a32e',
          500: '#c7c73d',
          400: '#d3d364',
          300: '#dede8c',
          200: '#e9e9b4',
          100: '#f5f5dc',
        },
        gray: {
          900: '#262626',
          800: '#404040',
          700: '#595959',
          600: '#737373',
          500: '#8c8c8c',
          400: '#a6a6a6',
          300: '#bfbfbf',
          200: '#d9d9d9',
          100: '#f0f0f0',
          50: '#f5f5f5',
        },
        gray200: '#D9D9D9',
      },
    },
  },
  plugins: [],
};
export default config;
