var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('./browser-sync.js');

gulp.task('watch:client', ['watch:client:js'], function () {
  watch('client/views/**/*', function () {
    browserSync.reload();
  });
});

