var $ = require('jquery');
var io = require('socket.io-client');

module.exports = {
  connect: function () {
    var dfd = $.Deferred();
    var drawingModel = this;

    var socket = io(`/${this.get('roomName')}`);

    socket.on('connect', function () {
        dfd.resolve();
      });

    socket.on('disconnect', function () {
        socket.removeAllListeners();
        drawingModel.set('socket', undefined);
      });

    socket.on('drawing', function (data) {
      drawingModel.trigger('drawing', JSON.parse(data));
    });

    this.set('socket', socket);
    return dfd.promise();
  },

  emitSocket: function (data) {
    this.get('socket').emit('drawing', JSON.stringify(data));
  }
};
