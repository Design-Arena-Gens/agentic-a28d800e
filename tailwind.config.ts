import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sicilian: {
          blue: '#1E3A8A',
          gold: '#F59E0B',
          sand: '#FEF3C7',
          sea: '#06B6D4',
        }
      }
    },
  },
  plugins: [],
}
export default config
