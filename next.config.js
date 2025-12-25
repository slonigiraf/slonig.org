module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },

  devServer: {
    static: {
      directory: "./dist",
    },
    proxy: {
      "/add-lid": {
        target: "https://denslon.com",
        changeOrigin: true,
        secure: true, // allow https
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};