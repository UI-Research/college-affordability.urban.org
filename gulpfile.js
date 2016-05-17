/** @jsx React.DOM */
'use strict';

// Include gulp
let gulp = require('gulp'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    webpack = require('gulp-webpack');

require('babel-core/register');

// Include Our Plugins
let fs = require('fs-extra'),
  React = require('react'),
  ReactDOMServer = require('react-dom/server'),
  glob = require('glob');


require('node-jsx').install();


// Create static artifact
// > gulp react
gulp.task('react', function() {
  let options = {};

  glob('pages/**/*.jsx', (er, files) => {
    fs.mkdirsSync('dist');
    fs.mkdirsSync('dist/home');
    fs.mkdirsSync('dist/about');
    files.map( (file) => {
      let filepath = file.split('/');
      filepath.shift();
      filepath = filepath.join('/').replace('jsx', 'html');

      let fragment = React.createFactory(require('./' + file));
      fragment = ReactDOMServer.renderToStaticMarkup(fragment());

      fs.mkdirsSync('dist');
      fs.writeFile('dist/' + filepath, fragment);
    })
  });

  return;
});


// Lint Tasks
// > gulp lint
gulp.task('lint', function() {
  return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Compile Our Sass
// > gulp sass
gulp.task('sass', function() {
  return gulp.src('components/**/*.scss')
    .pipe(concat('all.css'))
    .pipe(sass({
      outputStyle: 'compressed'
    })).on('error', sass.logError)
    .pipe(gulp.dest('dist/css'));
});

// Watch Files For Changes
// > gulp watch
gulp.task('watch', function() {
  gulp.watch('js/*.js', ['lint', 'scripts']);
  gulp.watch('components/*.jsx', ['lint', 'scripts']);
  gulp.watch('components/**/*.scss', ['sass']);
});

// Concatenate & Minify JS
// > gulp scripts
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
      .pipe(concat('all.js'))
      .pipe(gulp.dest('dist'))
      .pipe(rename('all.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
});

// Default Tasks
// > gulp
gulp.task('default', ['lint', 'sass', 'react', 'scripts', 'watch']);
