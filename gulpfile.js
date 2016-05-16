/** @jsx React.DOM */
'use strict';

const DATA_REPO_URL = 'https://github.com/UrbanInstitute/ed-data';

// Include gulp
let gulp = require('gulp'),
    sass = require('gulp-sass');

require('babel-core/register');

// Include Our Plugins
let fs = require('fs-extra'),
  React = require('react'),
  ReactDOMServer = require('react-dom/server'),
  glob = require('glob'),
  babel = require('gulp-babel'),
  jshint = require('gulp-jshint'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  git = require('gulp-git'),
  del = require('del');

require('node-jsx').install();


let urban_repo_dir = 'external_data';


// Create static artifact
gulp.task('create', function() {
  let options = {};

  glob('pages/**/*.jsx', (er, files) => {
    files.map( (file) => {
      console.log(file);
      let filepath = file.split('/');
      filepath.shift();
      filepath = filepath.join('/').replace('jsx', 'html');

      console.log(filepath);

      let fragment = React.createFactory(require('./' + file));

      fs.mkdirsSync('dist');
      fs.writeFile('dist/' + filepath, ReactDOMServer.renderToStaticMarkup(fragment()));
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
  // Start fresh, remove if alredy exists.
  try {
    let stats = fs.statSync(urban_repo_dir);
    if (stats.isDirectory()) {
      del.sync(urban_repo_dir + '/**', { force: true });
      del.sync(urban_repo_dir, { force: true });
      console.log('removed existing dir ' + urban_repo_dir);
    }
  }
  catch (e) {
    // ENOENT is not exists - throw if it's anything else.
    if (e.code != 'ENOENT') {
      throw e;
    }
  }
  
  git.clone(DATA_REPO_URL, { args: urban_repo_dir }, function (err) {
    if (err) {
      throw err;
    }
  });
})

// Default Tasks
// > gulp
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
