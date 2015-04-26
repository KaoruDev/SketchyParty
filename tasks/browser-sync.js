var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function () {
  browserSync.init({
    proxy: 'http://localhost:5000',
    port: 5001,
    browser: ['google chrome'],
    open: false,
    ui: {
      port: 5050,
      weinre: {
        port: 5051
      }
    }
  });

  watch(['client/builds/**/*', 'client/views/**/*'], function () {
    browserSync.reload();
  });

});

