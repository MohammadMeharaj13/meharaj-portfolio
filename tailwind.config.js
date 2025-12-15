export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0f0f0f",
        card: "#1c1c1c",
        soft: "#252525",
        accent: "#ffb800",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};
