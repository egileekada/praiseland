const tailwindcss = require('tailwindcss');
module.exports = {
    theme: {
        extend: {
          fontFamily: {
            'sans': ['Poppinsbold'],

          }
        },
      },
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ],
};
