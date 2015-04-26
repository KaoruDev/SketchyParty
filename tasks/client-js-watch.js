var gulp = require('gulp');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');
var browserSync = require('./browser-sync.js');

gulp.task('watch:client:js', ['webpack'], function () {
  watch('client/scripts/**/*.js', function () {
    runSequence('webpack', function () {
      browserSync.reload();
    });
  });
});

