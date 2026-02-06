/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F0F0F',
        secondary: '#1A1A1A',
        accent: '#10B981',
        highlight: '#F97316',
        muted: '#737373',
      },
      fontFamily: {
        serif: ['Clearface MT Std', 'Georgia', 'serif'],
        beatrice: ['Beatrice', 'Georgia', 'serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
