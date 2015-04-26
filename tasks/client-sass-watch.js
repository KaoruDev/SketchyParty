var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('watch:client:sass', function () {
  watch('client/styles/**/*.scss', function () {
    gulp.start('sass');
  });
});

