var gulp = require('gulp');
var gutils = require('gulp-util');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');

gulp.task('watch:client', ['watch:client:js'], function () {
  livereload.listen({quiet: true});

  // watch ejs files, no need for a specific task for this
  watch('client/views/**/*', function () {
    gutils.log(gutils.colors.magenta('[LiveReload]'), 'Views Changed');
    livereload.reload();
  });
});

