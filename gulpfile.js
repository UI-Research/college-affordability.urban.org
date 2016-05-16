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
  fs = require('fs'),
  parallel = require('concurrent-transform'),
  os = require('os'),
  imageResize = require('gulp-image-resize');

require('node-jsx').install();

let Test = React.createFactory(require('./components/test/test'));

let src_image_dir = 'images',
  dist_image_dir = 'dist/images';


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

// Default Tasks
// > gulp
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
