var redis = require('../configs/redis.js');
var uniqueId = require('../utils/unique-id.js');
var _ = require('underscore');
var modelName = 'Rooms';
var DrawingSocket = require('../socket/drawing-socket.js');
const NAMESPACE = 'room:names';

var Room = function (properties) {
  _.extend(this, properties || {}, this.constructor.prototype);
};

var RoomSockets = {};
redis.smembers(NAMESPACE, function (err, names) {
  names.forEach(function (name) {
    RoomSockets[name] = new DrawingSocket(name);
  });
});

module.exports = {
  create: function (properties) {
    properties = properties || {};
    properties.name = properties.name || uniqueId(modelName);
    redis.sadd(NAMESPACE, properties.name);
    var socket = new DrawingSocket(properties.name);
    RoomSockets[properties.name] = socket;
    return new Room(properties);
  },

  find: function (name, callback) {
    redis.sismember(NAMESPACE, name, function () {
      callback({name: name});
    });
  },

  getRoomSocket: function (roomName) {
    return RoomSockets[roomName];
  }
};
