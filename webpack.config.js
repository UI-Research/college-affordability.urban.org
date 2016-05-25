'use strict';

const webpack = require('webpack'),
      autoprefixer = require('autoprefixer'),
      glob = require('glob'),
      path = require('path');

let config = {
  cache: true,
  entry: {
    // Add any third party modules you'd like included on all pages.
    'vendor': [
      'react',
      'react-dom',
      'd3'
    ],

    // Auto-detect all components in directory.
    'components': glob.sync('./components/**/*.jsx'),
  },
  output: {
    path: './dist',
    filename: 'bundle--[name].js',
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
        test: /\.svg$/,
        loader: 'file-loader?name=/img/[name].[ext]'
      },
      {
        test: /\.(png|gif|jpe?g)$/,
        loader: 'file?name=/img/[name].[ext]'
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file?name=/fonts/[name].[ext]'
      }
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 12 versions'] }) ],
  plugins: [
    // Pro-tip: Order matters here.
    new webpack.optimize.CommonsChunkPlugin(['components', 'vendor'], 'bundle--[name].js'),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false // https://github.com/webpack/webpack/issues/1496
    //   }
    // })
  ]
};


// Cycle through /pages and detects all jsx to generate their respective pages.
let pages = glob.sync('./pages/**/*.jsx');
pages.map((file) => {
  let key = file.split('/');
  key = key.slice(-1)[0];
  key = key.replace('.jsx', '');

  config.entry[key] = file;
});


module.exports = config;
