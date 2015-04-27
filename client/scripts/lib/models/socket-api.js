var $ = require('jquery');
var io = require('socket.io-client');

module.exports = {
  connect: function () {
    var dfd = $.Deferred();
    var drawingModel = this;

    var socket = io('/' + this.get('roomName'));

    socket.on('connect', function () {
        dfd.resolve();
      });

    socket.on('disconnect', function () {
        socket.removeAllListeners();
        drawingModel.set('socket', undefined);
      });

    socket.on('drawing', function (data) {
      var parsed = JSON.parse(data);
      drawingModel.trigger(parsed.modelEvent, parsed);
    });

    this.set('socket', socket);
    return dfd.promise();
  },

  emitSocket: function (data) {
    this.get('socket').emit('drawing', JSON.stringify(data));
  }
};
