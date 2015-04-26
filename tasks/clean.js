var gulp = require('gulp');
var del = require('del');

gulp.task('clean', ['clean:js', 'clean:sass']);

gulp.task('clean:js', function () {
  del('client/builds/scripts/**');
});

gulp.task('clean:sass', function () {
  del('client/builds/styles/**');
});

