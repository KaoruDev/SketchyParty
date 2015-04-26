var gulp = require('gulp');
var gutils = require('gulp-util');
var webpack = require('webpack');

gulp.task('webpack', ['clean:js'], function (done) {
  webpack({
    entry: './client/scripts/main.js',
    output: {
      path: './client/builds/scripts',
      filename: 'main-bundle.js'
    },
    module: {
      loaders: [
        { test: /\.js$/,  loader: 'babel-loader', exclude: /node_modules/ }
      ]
    }
  }, function (err, stats) {
    if (err) {
      gutils.log(gutils.colors.red('[webpack] ERROR:', stats.toString()));
    }

    console.log(gutils.colors.bold('\n--------[webpack]--------\n\n'), stats.toString(), '\n');
    done();
  });
});

