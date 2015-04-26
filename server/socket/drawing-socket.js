var io = require('./main.js').get();
var _ = require('underscore');

var DrawingSocket = function (socketName) {
  this.channel = io.of(socketName);
  this.channel.on('connection', _.bind(this.initialize, this));
};

DrawingSocket.prototype = {
  initialize: function (socket) {
    this.socket = socket;
    this.socket.addListener('drawing', _.bind(function (msg) {
      this.channel.emit('drawing', msg);
    }, this));
  }
};

module.exports = DrawingSocket;

