import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'custom-image': "url('https://images.twinkl.co.uk/tw1n/image/private/s--HPBTOtUh--/c_fill,g_face:auto,h_430,w_1600/q_auto:eco/v1/u/blog/chile-cocina-1712020110.png')",
      
      },
    },
  },
  plugins: [],
};
export default config;
