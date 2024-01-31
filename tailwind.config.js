/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{
      netflix:'#db0000',
      black:'#000000',
      white:'#ffffff',
      netflixLine:'#564d4d',
      netflixDark:'#831010',
      transparent:'',
    },
    extend: {
      backgroundImage: {
        'bg-home': "url('https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_medium.jpg')",
      }
    },
  },
  plugins: [],
}