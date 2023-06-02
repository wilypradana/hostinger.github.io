module.exports = {
  content: ["./src/html/*.{html,js}","./node_modules/flowbite/dist/*.js"],
  theme: {
    fontFamily:{
      Lato: ['Lato Script', 'cursive'],
      roboto: ['Roboto', "sans-serif"],
      sans: ['Open Sans', "sans-serif"]
    },
    extend: {},
    colors: {
      primary: '#917FB3',
      secondary: '#F9D949',
      gelap: "#569DAA"
      // tambahkan warna lain di sini jika diperlukan
    },
  },
  plugins: [require('flowbite/plugin')],
}