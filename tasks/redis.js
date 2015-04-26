var gulp = require('gulp');
var spawn = require('child_process').spawn;
var colors = require('gulp-util').colors;

gulp.task('redis', function () {
  var redis = spawn('redis-server');
  redis.stdout.on('data', function (data) {
    console.log(colors.red('[REDIS]'), '================================\n', data.toString());
  });
});
