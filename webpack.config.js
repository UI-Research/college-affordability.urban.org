'use strict';

const webpack = require('webpack'),
  glob = require('glob'),
  path = require('path');

// let BUILD_DIR = path.resolve(__dirname, 'dist');
// let APP_DIR = path.resolve(__dirname, 'pages');

let config = {
/*
  entry: {
    // Always include vendor, but have other files come from gulp
    vendor: [
      'react',
      'react-dom'
    ]
  },
*/
  output: {
    filename: 'bundle--[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      }
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false // https://github.com/webpack/webpack/issues/1496
    //   }
    // })
  ]
};

module.exports = config;
