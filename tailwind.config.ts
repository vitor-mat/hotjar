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
        "custom-gradient-radial": "radial-gradient(circle, rgba(31,65,187,1) 0%, rgba(206,0,24,0) 60%)"
      },
      colors: {
        "main-color": "#101728",
        "custom-pink": "#FF3C5F",
        "custom-purple": "#9340FF",
      },
    },
  },
  plugins: [],
};
export default config;
