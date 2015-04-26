var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync').create();

var dependentTasks = [
  'watch:client',
  'browser-sync',
  'redis'
];

gulp.task('node', dependentTasks, function () {
  nodemon({
    script: 'app.js',
    watch: ['app.js', 'server/**/*.js']
  }).on('restart', function () {
    setTimeout(function () {
      browserSync.reload({ stream: false });
    }, 500);
  });
});
