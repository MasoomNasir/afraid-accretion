// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/@astrouxds/astro-web-components/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Add Full Dev UI color palette
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          // ... add other shades
        },
        // Add other color configurations
      },
    },
  },
  plugins: [],
};
