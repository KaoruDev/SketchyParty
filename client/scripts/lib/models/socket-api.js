var $ = require('jquery');
var _ = require('underscore');
var io = require('socket.io-client');

module.exports = {
  connect: function () {
    var dfd = $.Deferred();

    var socket = io(`/${this.get('roomName')}`)
      .on('connect', _.bind(function () {
        dfd.resolve();
        socket.on('drawing', function (data) {
          var parsed = JSON.parse(data);
          this.trigger('draw', parsed.eventType, parsed.coordinates);
        });
      }, this))

      .on('disconnect', _.bind(function () {
        socket.removeAllListeners();
        this.set('socket', undefined);
      }, this));

    this.set('socket', socket);
    return dfd.promise();
  },

  emitSocket: function (data) {
    this.get('socket').emit('draw', JSON.stringify(data));
  }
};
