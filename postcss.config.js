module.exports = {
  plugins: [
      require("tailwindcss")("./app/javascript/frontend/stylesheets/tailwind.config.js"),
      require("autoprefixer"),
      require("postcss-import"),
      require("postcss-flexbugs-fixes"),
  ]
}
