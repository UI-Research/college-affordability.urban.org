'use strict';

const webpack = require('webpack'),
      autoprefixer = require('autoprefixer'),
      glob = require('glob'),
      path = require('path');


let config = {
  cache: true,
  entry: {
    'vendor': [
      'react',
      'react-dom',
      'd3',
      'lodash'
    ],

    // Add components here.
    'components': [
      './components/30-components/basic/text/text.jsx'
    ],

    // Add individual pages here.
    'about': './pages/about/about.jsx',
    'test': './pages/test/test.jsx'
  },
  output: {
    path: './dist',
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
    // Pro-tip: Order matters here.
    new webpack.optimize.CommonsChunkPlugin(['components', 'vendor'], 'bundle--[name].js')
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false // https://github.com/webpack/webpack/issues/1496
    //   }
    // })
  ]
};

module.exports = config;
