import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
      screens: {
        lg: "1070px",
        xl: "1070px",
        "2xl": "1070px",
        // lg: "1200px",
        // xl: "1200px",
        // "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        "custom-gray": "#0D1117",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        //   blob: {
        //     "0%": {
        //       borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        //     },
        //     "50%": {
        //       borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
        //     },
        //     "100%": {
        //       borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        //     },
        //   },
        // },
        blob: {
          "0%, 100%": {
            borderRadius: "64% 36% 27% 73% / 55% 58% 42% 45%",
          },
          "25%": {
            borderRadius: "73% 27% 26% 38% / 73% 36% 64% 27%",
          },
          "50%": {
            borderRadius: "28% 72% 44% 56% / 49% 40% 60% 51%",
          },
          "75%": {
            borderRadius: "40% 60% 70% 30% / 47% 62% 38% 53%",
          },
        },
      },
      animation: {
        // "blob-animation": "blob 3s ease-in-out infinite",
        "blob-animation": "blob 15s linear infinite",
      },
      // keyframes: {
      //   blob: {
      //     "0%, 100%": {
      //       borderRadius: "50% 50% 50% 50% / 60% 40% 60% 40%",
      //     },
      //     "25%": {
      //       borderRadius: "40% 60% 40% 60% / 50% 30% 70% 50%",
      //     },
      //     "50%": {
      //       borderRadius: "60% 40% 60% 40% / 40% 60% 30% 70%",
      //     },
      //     "75%": {
      //       borderRadius: "30% 70% 60% 40% / 70% 40% 60% 30%",
      //     },
      //   },
      // },
      // animation: {
      //   "blob-animation": "blob 4s ease-in-out infinite",
      // },
    },
  },
  plugins: [],
};
export default config;
