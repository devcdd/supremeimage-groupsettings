import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./constant/**/*.{js,ts,jsx,tsx,mdx}",
    "./hook/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      lightBlue: "#cee6f2",
      skyBlue: "#1eaaf1",
      blue: "#1890ff",
      darkBlue: "#0C304B",
      white: "#ffffff",
      darkWhite: "#F5F5F5",
      lightGray: "#d3d3d3",
      gray: "#bdbdbd",
      darkGray: "#383838",
      black: "#000000",
      red: "#ff4d4f",
      wine: "#BE0053",
      darkYellow: "#F6BE00",
      file: {
        csv: "#F5A103",
        word: "#4876BD",
        excel: "#01893f",
        pdf: "#E21837",
        video: "#383838",
        image: "#50c441",
        ppt: "#c13e21",
        default: "#00bcd4",
      },
      tags: {
        textRed: "#cf1322",
        backgroundRed: "#fff1f0",
        borderRed: "#ffa39e",
        textYellow: "#d29734",
        backgroundYellow: "#fffbe6",
        borderYellow: "#e6c183",
        textEmerald: "#08979c",
        backgroundEmerald: "#e6fffb",
        borderEmerald: "#87e8de",
      },
    },
  },
  plugins: [],
};
export default config;
