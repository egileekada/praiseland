const tailwindcss = require('tailwindcss');
module.exports = {
    theme: {
        extend: {
          fontFamily: {
            'poppinsbold': 'poppinsbold',
            'poppins': 'poppins',
            'lato-light': 'Latol',
            'sans': ['Lator'],
            'poppinsblack': ['poppinsb'],
            'poppinsextrab': ['poppinse']

          }
        },
      },
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ],
};
