var colors = require('gulp-util').colors;
var announce = function (msg) {
  console.log('\n', colors.green('[SOCKET]'), msg, '\n');
};

module.exports = function (io) {
  io.on('connection', function (socket) {
    announce('a user connected');
    socket.on('disconnect', function () {
      announce(arguments);
      announce(colors.red('a user disconnected'));
    });
  });

  var testing = io.of('/hello');
  testing.on('connection', function () {
    announce('someone is in testing!');
  });
};
