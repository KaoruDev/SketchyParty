var gulp = require('gulp');
var gutils = require('gulp-util');
var spawn = require('child_process').spawn;
var path = require('path');
var serverPath = path.join(__dirname, '../app.js');
var liveServer;
var announce = require('../server/utils/announce-log.js');

gulp.task('node', [
    'watch:node',
    'node:restart',
    'watch:client'
]);

gulp.task('node:restart', function () {
  if (liveServer) {
    announce('Killing node server...');
    liveServer.kill();
  }

  announce('Starting server up!');
  liveServer = spawn('node', [serverPath], { stdio: 'inherit' });

  liveServer.on('close', function (code) {
    gutils.log('Server args: ', arguments);
    if (code === 8) {
      gutils.log('Error, detected, waiting for changes...');
    }
  });
});

