import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      },
      keyframes: {
        wave: {
          '0%' : { transform: 'rotate( 0.0deg)' },
          '10%' : { transform: 'rotate( 14.0deg)' },
          '20%' : { transform: 'rotate( -8.0deg)' },
          '30%' : { transform: 'rotate( 14.0deg)' },
          '40%' : { transform: 'rotate( -4.0deg)' },
          '50%' : { transform: 'rotate( 10.0deg)' },
          '60%' : { transform: 'rotate( 0.0deg)' },
          '100%' : { transform: 'rotate( 0.0deg)' },
        }
      },
      variants: {
        lineClamp: ['responsive', 'hover']
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite'
      }
    },
  },
};
export default config;
