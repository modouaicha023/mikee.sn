import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "screen1150": "1150px",
        "screen810": "810px",
        "screen670": "670px",
        "screen580": "580px",
        "screen500": "500px",
        "screen430": "430px",
        "screen300": "300px"
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: true,
  },
};
export default config;
