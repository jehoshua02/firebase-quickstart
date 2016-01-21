var HtmlPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: 'build',
    filename: '[name].js'
  },
  plugins: [
    new HtmlPlugin({
      title: 'Firebase Quickstart'
    })
  ]
};
