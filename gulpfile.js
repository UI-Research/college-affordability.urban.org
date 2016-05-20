/** @jsx React.DOM */
'use strict';

// Urban's data git repo.
const URBAN_REPO_URL = 'https://github.com/UrbanInstitute/ed-data';
// The local dir for Urban's data.
const URBAN_DATA_DIR = 'external_data';

// Include gulp and gulp plugins.
let gulp = require('gulp'),
  sass = require('gulp-sass'),
  babel = require('gulp-babel'),
  jshint = require('gulp-jshint'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  git = require('gulp-git'),
  imageResize = require('gulp-image-resize');

require('babel-core/register');

// Include other plugins.
let fs = require('fs-extra'),
  React = require('react'),
  ReactDOMServer = require('react-dom/server'),
  wiredep = require('wiredep').stream,
  glob = require('glob'),
  del = require('del'),
  log = require('winston'),
  parallel = require('concurrent-transform'),
  os = require('os'),
  webpack = require('webpack-stream'),
  named = require('vinyl-named');

let src_image_dir = 'images',
  dist_image_dir = 'dist/images';

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
      let fragment = React.createElement(require('./' + filepath), { includeHTML: true });
      fragment = ReactDOMServer.renderToStaticMarkup(fragment);

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

// Generate low and high quality versions of images.
// > gulp processImages
gulp.task('processImages', function () {  
  fs.stat('images', function (err, stats) {
    if (err && err.code === 'ENOENT') {
      console.log('Can not process images - images directory does not exist');
      return false;
    }
    else if (err) {
      throw err;
    }
    if (stats.isDirectory()) {
      // Generate low quality thumbnail image version to serve static pages faster.
      gulp.src(src_image_dir + '/**/*.{jpg,png}')
        .pipe(parallel(
          // Crop to exact size.
          imageResize({ width: 200, height: 200, quality: 0.4, crop: true }),
          os.cpus().length
        ))
        .pipe(gulp.dest(dist_image_dir + '/preview'));
      
      // Generate high quality, image version that is still not too large.
      gulp.src(src_image_dir + '/**/*.{jpg,png}')
        .pipe(parallel(
          // No cropping, allows to maintain aspect ratio.
          imageResize({ width: 1200, height: 1000, quality: 1 }),
          os.cpus().length
        ))
        .pipe(gulp.dest(dist_image_dir + '/large'));
    }
  });
});

// Clone/pull data from the repository.
// > gulp clone-data
gulp.task('clone-data', function () {
  // Start fresh each time.
  fs.removeSync(URBAN_DATA_DIR);

  git.clone(URBAN_REPO_URL, { args: URBAN_DATA_DIR }, function (err) {
    if (err) {
      throw err;
    }
  });
})

// Generate a webpack bundle
//> gulp webpack
gulp.task('webpack', function() {
  return gulp.src(['js/react-container.jsx', 'pages/about/about.jsx', 'js/vendor.jsx'])
    .pipe(named())
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist'));
});

// Default Tasks
// > gulp
gulp.task('default', ['lint', 'react', 'sass', 'scripts', 'processImages', 'clone-data', 'webpack', 'watch']);
