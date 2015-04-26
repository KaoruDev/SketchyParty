var gulp = require('gulp');
var gutils = require('gulp-util');
var spawn = require('child_process').spawn;
var path = require('path');
var serverPath = path.join(__dirname, '../app.js');
var liveServer;

var nodeAlert = function (msg) {
  gutils.log(gutils.colors.green('node {{'), msg, gutils.colors.green('}}'));
};

gulp.task('node', [
    'watch:node',
    'node:restart',
    'watch:client'
]);

gulp.task('node:restart', function () {
  if (liveServer) {
    nodeAlert('Killing node server...');
    liveServer.kill();
  }

  nodeAlert('Starting server up!');
  liveServer = spawn('node', [serverPath], { stdio: 'inherit' });

  liveServer.on('close', function (code) {
    gutils.log('Server args: ', arguments);
    if (code === 8) {
      gutils.log('Error, detected, waiting for changes...');
    }
  });
});

