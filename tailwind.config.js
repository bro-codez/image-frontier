module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray_501: "#929292",
        gray_700: "#667354",
        gray_502: "#939393",
        gray_400: "#b4b4b4",
        gray_500: "#989595",
        gray_900: "#272d1f",
        bluegray_100: "#d1d5cc",
        gray_300: "#e7e9e4",
        blue_50: "#e3ecff",
        black_900: "#000000",
        bluegray_400: "#868686",
        black_900_30: "#00000030",
        black_901: "#0d1600",
        deep_purple_A200: "#7b61ff",
        white_A700: "#ffffff",
        gray_700_33: "#66735433",
        black_900_26: "#00000026",
      },
      fontFamily: { proximanova: "Proxima Nova" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
