module.exports = {
  darkMode: 'class', // atau 'media' jika ingin mendeteksi sesuai setting sistem pengguna
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        scrollbarThumb: '#888',
        scrollbarTrack: '#f5f5f5',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'playfair-display': ['Playfair Display', 'serif'],
        'merriweather': ['Merriweather', 'serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'source-sans-pro': ['Source Sans Pro', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
        'public-sans': ['Public Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
