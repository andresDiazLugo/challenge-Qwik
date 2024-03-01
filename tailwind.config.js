/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors:{
        primary: "rgba(var(--primary) / <alpha-value>)"
      }
    },
  },
  plugins: [],
};
