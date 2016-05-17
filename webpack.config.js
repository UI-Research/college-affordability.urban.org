'use strict';

const webpack = require('webpack'),
      glob = require('glob'),
      path = require('path');

// let BUILD_DIR = path.resolve(__dirname, 'dist');
// let APP_DIR = path.resolve(__dirname, 'pages');

let config = {
  entry: {
    // Add individual pages here.
    'home': './pages/home/home.jsx',
    'about': './pages/about/about.jsx',

    // Router file...
    'index': './pages/index.js',
    vendor: [
      'react',
      'react-dom'
    ]
  },
  output: {
    path: './dist',
    filename: 'bundle--[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
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
