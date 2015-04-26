var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('watch:client:js', ['webpack'], function () {
  watch('client/scripts/**/*.js', function () {
    gulp.start('webpack');
  });
});

