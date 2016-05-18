/** @jsx React.DOM */
'use strict';

// Urban's data git repo.
const URBAN_REPO_URL = 'https://github.com/UrbanInstitute/ed-data';
// The local dir for Urban's data.
const URBAN_DATA_DIR = 'external_data';

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
  glob = require('glob'),
  git = require('gulp-git'),
  del = require('del'),
  log = require('winston');

require('node-jsx').install();


// Create static artifact
// > gulp react
gulp.task('react', function() {
  let options = {};

  glob('pages/**/*.jsx', (er, files) => {
    // Clean artifacts directory.
    fs.removeSync('dist/');

    files.map( (filepath) => {
      // Convert filename to .html .
      let file = filepath.split('/');
      file.shift();
      file = file.join('/').replace('jsx', 'html');

      // Creates HTML fragment for static page generation.
      let fragment = React.createFactory(require('./' + filepath));
      fragment = ReactDOMServer.renderToStaticMarkup(fragment());

      // Write fragment to artifacts directory.
      fs.outputFileSync('dist/' + file, fragment);
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

// Clone/pull data from the repository.
// > gulp clone-data
gulp.task('clone-data', function () {
  // Start fresh, remove if already exists.
  try {
    let stats = fs.statSync(URBAN_DATA_DIR);
    if (stats.isDirectory()) {
      del.sync(URBAN_DATA_DIR + '/**', { force: true });
      del.sync(URBAN_DATA_DIR, { force: true });
      log.info('removed existing dir ' + URBAN_DATA_DIR);
    }
  }
  catch (e) {
    // ENOENT is not exists - throw if it's anything else.
    if (e.code != 'ENOENT') {
      throw e;
    }
  }

  git.clone(URBAN_REPO_URL, { args: URBAN_DATA_DIR }, function (err) {
    if (err) {
      throw err;
    }
  });
})

// Default Tasks
// > gulp
gulp.task('default', ['lint', 'sass', 'react', 'scripts', 'watch']);
