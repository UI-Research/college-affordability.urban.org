/** @jsx React.DOM */
'use strict';

// Include gulp
let gulp = require('gulp');

require('babel-core/register');

// Include Our Plugins
let fs = require('fs'),
  React = require('react'),
  ReactDOMServer = require('react-dom/server'),
  wiredep = require('wiredep').stream,
  babel = require('gulp-babel'),
  jshint = require('gulp-jshint'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  git = require('gulp-git');

require('node-jsx').install();

let Test = React.createFactory(require('./components/test/test'));


// Create static artifact
gulp.task('create', function() {

  gulp.src('components/**/*.jsx')
    .pipe(ReactDOMServer.renderToStaticMarkup(Test({})))
    .pipe(dest('dist', {ext: '.html'}))
    .pipe(gulp.dest('dist/qwer'));

  // gulp.src('components/**/*.jsx')
  //   .pipe(babel())
  //   .pipe(gulp.dest('dist/sdf'));
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
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
});

// Watch Files For Changes
// > gulp watch
gulp.task('watch', function() {
  gulp.watch('js/*.js', ['lint', 'scripts']);
  gulp.watch('components/*.jsx', ['lint', 'scripts']);
  gulp.watch('scss/*.scss', ['sass']);
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

// Pull data from the repository.
// > gulp pull-data
gulp.task('pull-data', function () {
  git.clone('https://github.com/UrbanInstitute/ed-data', { args: 'dist/ed-data' }, function (err) {
    if (err) {
      throw err;
    }
  });
})

// Default Tasks
// > gulp
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
