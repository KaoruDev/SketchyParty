var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('watch:node', function () {
  watch(['app.js', 'server/**/*.js'], function () {
    gulp.start('node:restart');
  });
});
