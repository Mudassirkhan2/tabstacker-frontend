import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        Jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        Titillium: ['Titillium Web', 'sans-serif'],
        Sedgwick: ['Sedgwick Ave Display', 'sans-serif'],

      },
    },
  },
  plugins: [],
}
export default config
