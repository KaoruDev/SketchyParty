var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('watch:client', ['watch:client:js'], function () {
  livereload.listen();
});

