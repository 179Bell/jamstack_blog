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
        theme: '#FAF8F2',
        sub: '#7BB6E3',
        accents: '#007bbb',
      },
      fontFamily: {
        notojp: ['var(--font-notojp)'],
      },
    },
  },
  plugins: [],
};
export default config;
