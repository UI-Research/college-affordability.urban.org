'use strict';

const webpack = require('webpack'),
      autoprefixer = require('autoprefixer'),
      glob = require('glob'),
      path = require('path');

// let BUILD_DIR = path.resolve(__dirname, 'dist');
// let APP_DIR = path.resolve(__dirname, 'pages');

let config = {
  cache: true,
  entry: {
    'vendor': [
      'react',
      'react-dom',
      'd3'
    ],

    // Add individual pages here.
    'about': './pages/about/about.jsx'
  },
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
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      }
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 12 versions'] }) ],
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'bundle--vendor.js')
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false // https://github.com/webpack/webpack/issues/1496
    //   }
    // })
  ]
};

module.exports = config;
