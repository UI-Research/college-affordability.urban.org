'use strict'

module.exports = {
  entry: {
    'react-container': './js/react-container.js',
  },

  output: {
    filename: '[name].bundle.js',
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        loader: 'babel',
        exclude: /node_modules/,
        test: /\.js$/
      }
    ]
  }
};
