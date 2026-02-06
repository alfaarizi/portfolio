/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#F5F5F5',
        accent: '#059669',
        highlight: '#F97316',
        foreground: {
          DEFAULT: '#0F0F0F',
          medium: 'rgba(15, 15, 15, 0.8)',
          light: 'rgba(15, 15, 15, 0.6)',
          lighter: 'rgba(15, 15, 15, 0.4)',
        },
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
