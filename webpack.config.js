'use strict';

const webpack = require('webpack'),
      autoprefixer = require('autoprefixer'),
      glob = require('glob'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      path = require('path');

let config = {
  cache: true,
  entry: {
    // Add any third party modules you'd like included on all pages.
    'vendor': [
      'react',
      'react-dom',
      'react-ga',
      'd3',
      'c3',
      'lodash'
    ],

    // Auto-detect all components in directory.
    'components': glob.sync('./components/**/*.jsx'),
  },
  output: {
    path: './dist',
    filename: 'bundle--[name].js',
  },
  resolve: {
    // NOTE: Also add the same paths near the top of the gulp file where we
    // include app-module-path.
    modulesDirectories: [
      'components',
      'helpers',
      'node_modules',
    ],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      // Javascript: js, jsx
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['transform-runtime'],
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      // CSS: scss, css - saves to external css file.
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css?-minimize', 'postcss', 'sass']),
        exclude: /\/pages\//
      },
      //CSS: scss, css - saves inline for singlepage overrides.
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass', 'postcss-loader'],
        include: /\/pages\//
      },
      // Leaving here for now for reference. Remove if/when happy with above scss loaders.
      // {
      //   test: /\.s?css$/
      //   loaders: ['style', 'css', 'sass', 'postcss-loader']
      // },
      // SVGs: svg, svg?something
      {
        test: /\.svg(\?.*$|$)/,
        loader: 'file-loader?name=/img/[name].[ext]'
      },
      // Images: png, gif, jpg, jpeg
      {
        test: /\.(png|gif|jpe?g)$/,
        loader: 'file?name=/img/[name].[ext]'
      },
      // HTML: htm, html
      {
        test: /\.html?$/,
        loader: "file?name=[name].[ext]"
      },
      // Font files: eot, ttf, woff, woff2
      {
        test: /\.(eot|ttf|woff2?)(\?.*$|$)/,
        loader: 'file?name=/fonts/[name].[ext]'
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./components/00-global")]
  },
  postcss: [ autoprefixer({ browsers: ['last 12 versions'] }) ],
  plugins: [
    // Pro-tip: Order matters here.
    new webpack.optimize.CommonsChunkPlugin(['components', 'vendor'], 'bundle--[name].js'),
    new ExtractTextPlugin('[name].css', {
      disable: false,
      allChunks: true
    }),
    // Use the production version of third party libraries.
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // Minify assets.
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      output: {
          comments: false
      },
      compress: {
        warnings: false // https://github.com/webpack/webpack/issues/1496
      }
    })
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
