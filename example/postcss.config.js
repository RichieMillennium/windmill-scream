module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env'),
    require('postcss-nested'),
    require('tailwindcss')('./src/tailwind.config.js'),
    require('autoprefixer')
  ]
};

