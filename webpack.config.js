var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var environment = (process.env.NODE_ENV || 'development');
var config = {
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/app/index.html'),
      filename: 'index.html',
      inject: 'body',
      favicon: path.join(__dirname, '/app/assets/images/favicon.ico')
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/app/index.html'),
      filename: '200.html',
      inject: 'body',
      favicon: path.join(__dirname, '/app/assets/images/favicon.ico')
    })
  ]
};

if (environment === 'production') {
  config.plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  )
}

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
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
        loader: 'style!css!sass?outputStyle=' + (environment === 'production' ? 'compressed' : 'expanded') + '&' +
          'includePaths[]=' + encodeURIComponent(require('node-bourbon').includePaths) + '&' +
          'includePaths[]=' + encodeURIComponent(require('node-neat').includePaths[1])
      },
    ]
  },
  plugins: config.plugins
};
