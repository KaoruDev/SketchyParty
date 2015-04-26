var redis = require('../configs/redis.js');
var uniqueId = require('../utils/unique-id.js');
var _ = require('underscore');
var modelName = 'Rooms';
var io = require('../socket/main.js').get();
const NAMESPACE = 'room:names';

var Room = function (properties) {
  _.extend(this, properties || {}, this.constructor.prototype);
};

var RoomSockets = {};
redis.smembers(NAMESPACE, function (err, names) {
  names.forEach(function (name) {
    RoomSockets[name] = io.of(name);
  });
});

module.exports = {
  create: function (properties) {
    properties = properties || {};
    properties.name = properties.name || uniqueId(modelName);
    redis.sadd(NAMESPACE, properties.name);
    var socket = io.of(properties.name);
    RoomSockets[properties.name] = socket;

    socket.on('connect', function () {
      console.log(arguments);
    });

    return new Room(properties);
  },

  find: function (name, callback) {
    redis.get(name, function (err, raw) {
      if (err || !raw) {
        callback(null);
      } else {
        callback(JSON.parse(raw));
      }
    });
  },

  getRoomSocket: function (roomName) {
    return RoomSockets[roomName];
  }
};
