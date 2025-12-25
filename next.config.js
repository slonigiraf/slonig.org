module.exports = {
  entry: "./src/js/main.js",
  output: 'standalone',
  devServer: {
      inline: false,
      contentBase: "./dist",
  },
  module: {
      loaders: [
          {
              test: /\.jsx?$/,
              exclude:/(node_modules|bower_components)/,
              loader: 'babel-loader',
              query: {
                  presets: ['es2015', 'react']
              }
          }
      ]
  }
};