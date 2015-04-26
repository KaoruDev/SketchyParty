var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('watch:client', function () {
  livereload.listen();
  gulp.start('watch:client:js', 'watch:client:sass');
});

