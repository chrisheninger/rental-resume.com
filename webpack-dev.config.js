var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body',
  favicon: __dirname + '/app/assets/images/favicon.ico',
});

module.exports = {
  entry: [
    './app/index.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
  module: {
    loaders: [
      {
        test: /\.(eot|ico|ttf|woff|woff2|gif|jpe?g|png|svg)$/,
        exclude: /node_modules/,
        loader: 'file-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style!css!sass?outputStyle=expanded' + '&' +
          'includePaths[]=' + encodeURIComponent(require('node-bourbon').includePaths) + '&' +
          'includePaths[]=' + encodeURIComponent(require('node-neat').includePaths[1])
      },
    ],
  },
  plugins: [
    HTMLWebpackPluginConfig,
  ],
};
