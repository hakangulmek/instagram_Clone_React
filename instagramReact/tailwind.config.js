/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "pr-text": "#000000",
        brand: "#0095f6",
        facebook: "#385185",
      },
      backgroundImage: {
        "logo-pattern":
          "url(https://www.instagram.com/static/images/homepage/phones/home-phones-2x.png/cbc7174b4f05.png)",
      },
    },
  },
  plugins: [],
};
