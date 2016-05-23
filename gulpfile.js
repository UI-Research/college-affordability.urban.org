'use strict';

// Urban's data git repo.
const URBAN_REPO_URL = 'https://github.com/UrbanInstitute/ed-data';
// The local dir for Urban's data.
const URBAN_DATA_DIR = 'external_data';

// Include gulp + plugins.
let gulp = require('gulp'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel'),
    eslint = require('gulp-eslint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    webpack = require('gulp-webpack'),
    git = require('gulp-git'),
    imageResize = require('gulp-image-resize'),
    named = require('vinyl-named');

require('babel-core/register');

// Include additioal dependencies.
let fs = require('fs-extra'),
  React = require('react'),
  ReactDOMServer = require('react-dom/server'),
  wiredep = require('wiredep').stream,
  glob = require('glob'),
  del = require('del'),
  exec = require('child_process').exec,
  spawn = require('child_process').spawn,
  log = require('winston'),
  parallel = require('concurrent-transform'),
  os = require('os');

let src_image_dir = 'images',
    dist_image_dir = 'dist/images';

require('node-jsx').install();


// Lint Tasks
// > gulp lint
gulp.task('lint', function() {
  return gulp.src(['components/**/*.jsx', 'pages/**/*.jsx'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});


// Create static artifact
// > gulp react
gulp.task('react', function() {
  let options = {};

  glob('pages/**/*.jsx', (er, files) => {
    // Clean artifacts directory.
    // TODO: Move this to separate gulp task...
    //fs.removeSync('dist/');

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


// Generate a webpack bundle
//> gulp webpack
gulp.task('webpack', function(cb) {
  exec('webpack', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('webpack-watch', (cb) => {
  const webpack_watch = spawn('webpack', ['--watch', '--color']);

  webpack_watch.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  webpack_watch.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

  webpack_watch.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
});


// Watch Files For Changes
// > gulp watch
gulp.task('track', function() {
  gulp.watch(['components/**/*.jsx', 'pages/**/*.jsx'], ['react', 'webpack-watch']);
  gulp.watch(['components/**/*.scss', 'pages/**/*.scss'], ['webpack-watch']);
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
gulp.task('default', ['lint', 'react', 'webpack']);
// > gulp watch
gulp.task('watch', ['react', 'webpack', 'track']);
