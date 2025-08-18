import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cesar-brutus': {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d4ff',
          300: '#a5b8ff',
          400: '#8190ff',
          500: '#6b63ff',
          600: '#5a4fd8',
          700: '#4a3fb3',
          800: '#3e3590',
          900: '#363074',
          950: '#1f1a3d',
        },
      },
    },
  },
  plugins: [],
}

export default config
