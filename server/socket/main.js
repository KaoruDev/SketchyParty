var announce = require('../utils/announce-log.js');

module.exports = function (io) {
  io.on('connection', function () {
    announce('a user connected');
  });
};
