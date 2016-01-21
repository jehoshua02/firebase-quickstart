var HtmlPlugin = require('html-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
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
      title: 'Firebase Quickstart',
      favicon: './src/favicon.ico'
    }),
    new BrowserSyncPlugin({server: { baseDir: ['build'] }})
  ]
};
