'use strict';

// Urban's data git repo.
const URBAN_REPO_URL = 'https://github.com/UrbanInstitute/ed-data';
// The local dir for Urban's data.
const URBAN_DATA_DIR = 'external_data';

// Include gulp + plugins.
const gulp = require('gulp'),
      babel = require('gulp-babel'),
      eslint = require('gulp-eslint'),
      concat = require('gulp-concat'),
      rename = require('gulp-rename'),
      git = require('gulp-git'),
      imageResize = require('gulp-image-resize');

require('babel-core/register');

// Include additioal dependencies.
const fs = require('fs-extra'),
      React = require('react'),
      ReactDOMServer = require('react-dom/server'),
      wiredep = require('wiredep').stream,
      glob = require('glob'),
      del = require('del'),
      exec = require('child_process').exec,
      spawn = require('child_process').spawn,
      log = require('winston'),
      parallel = require('concurrent-transform'),
      os = require('os'),
      named = require('vinyl-named'),
      _ = require('lodash');

require('node-jsx').install();

// Simplify include statements.  Add additonal base paths here for simplicity.
// NOTE: Also add the same paths in webpack.config.js.
let appPath = require('app-module-path');
appPath.addPath(__dirname + '/components');
appPath.addPath(__dirname + '/helpers');


// Lint Tasks
// > gulp lint
gulp.task('lint', function() {
  return gulp.src(['components/**/*.jsx', 'pages/**/*.jsx'])
    .pipe(eslint())
    .pipe(eslint.format());
});


// Delete the artifacts directory
// > gulp destroy
gulp.task('destroy', function() {
  // Clean artifacts directory.
  fs.removeSync('dist/');
});

// Create static artifact
// > gulp react
gulp.task('react', function() {
  let options = {};

  glob('pages/**/*.jsx', (er, files) => {
    files.map( (filepath) => {
      // Convert filename to .html .
      let file = filepath.split('/');
      file.shift();
      file.splice(-1,1);
      file.push('index.html');
      file = file.join('/');

      // Creates HTML fragment for static page generation.
      let fragment = React.createElement(require('./' + filepath), { includeHTML: true });
      fragment = '<!DOCTYPE html>' + ReactDOMServer.renderToStaticMarkup(fragment);

      // Replace full images with their smaller previews.
      let regex = /\<img .+?\/\>/ig;
      let images = fragment.match(regex);
      if (images) {
        _.forEach(images, function (image) {
          let new_img_tag = image.replace('img/', 'img/preview/');
          fragment = fragment.replace(image, new_img_tag);
        });
      }

      // Write fragment to artifacts directory.
      fs.outputFileSync('dist/' + file, fragment);
    })
  });

  return;
});


// Generate a webpack bundle
// > gulp webpack
gulp.task('webpack', function(cb) {
  exec('webpack --color', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});


// Same as 'gulp webpack' but spawned as a watch for automatic updates.
// > gulp webpack-watch
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
  gulp.watch(['components/**/*.jsx', 'helpers/**/*.jsx', 'pages/**/*.{js,jsx,json}'], ['react', 'webpack-watch']);
  gulp.watch(['components/**/*.scss', 'pages/**/*.scss'], ['webpack-watch']);
  gulp.watch(['pages/**/*.{jpg,gif,png}'], ['images']);
});


// Generate low and high quality versions of images.
// > gulp images
gulp.task('images', function () {
  let src_image_dir = 'pages',
      dist_image_dir = 'dist/img';

  fs.stat(src_image_dir, function (err, stats) {
    if (err && err.code === 'ENOENT') {
      console.log('Can not process images - images directory does not exist');
      return false;
    }
    else if (err) {
      throw err;
    }
    if (stats.isDirectory()) {
      // Generate low quality version - same size as high quality.
      // Only use low quality for jpg, it can increase size of other types.
      gulp.src(src_image_dir + '/**/*.jpg')
        .pipe(parallel(
          // No cropping, allows to maintain aspect ratio.
          imageResize({ width: 1200, height: 1000, quality: 0.05, imageMagick: true }),
          os.cpus().length
        ))
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(dist_image_dir + '/preview'));

      // Generate low quality version - same size as high quality.
      gulp.src(src_image_dir + '/**/*.{gif,png}')
        .pipe(parallel(
          // No cropping, allows to maintain aspect ratio.
          imageResize({ width: 1200, height: 1000, imageMagick: true }),
          os.cpus().length
        ))
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(dist_image_dir + '/preview'));

      // Generate high quality, image version that is still not too large.
      gulp.src(src_image_dir + '/**/*.{jpg,gif,png}')
        .pipe(parallel(
          // No cropping, allows to maintain aspect ratio.
          imageResize({ width: 2560, height: 1600, quality: 1, imageMagick: true }),
          os.cpus().length
        ))
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(dist_image_dir));

      // Move svgs
      gulp.src(src_image_dir + '/**/*.svg')
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(dist_image_dir));
      // Move zips (toggle graph screenshots)
      gulp.src(src_image_dir + '/**/*.zip')
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(dist_image_dir));
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

// Deploys static assets to staging environment.
// > gulp deploy-assets
gulp.task('deploy-assets', function(cb) {
  exec('aws s3 rm s3://urban-ca.dev.phase2tech.com/ --recursive; aws s3 sync dist/ s3://urban-ca.dev.phase2tech.com', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});


// Default Tasks
// > gulp
gulp.task('default', ['destroy', 'lint', 'images', 'react', 'webpack']);
// > gulp watch
gulp.task('watch', ['destroy', 'lint', 'images', 'react', 'webpack', 'track']);
// > gulp deploy
gulp.task('deploy', ['default', 'deploy-assets']);

gulp.task('charts', ['destroy', 'react','webpack']);

