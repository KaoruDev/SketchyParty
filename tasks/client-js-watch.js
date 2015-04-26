var gulp = require('gulp');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var runSequence = require('run-sequence');

gulp.task('watch:client:js', ['webpack'], function () {
  watch('client/scripts/**/*.js', function () {
    runSequence('webpack', function () {
      livereload();
    });
  });
});

