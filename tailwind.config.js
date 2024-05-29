import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  plugins: [daisyui],
  theme: {
    extend: {},
  },
  content: ['./src/**/*.{html,js,svelte,ts}'],
  variants: {
    extend: {},
  },
  darkmode: false, // or 'media' or 'class'
};
