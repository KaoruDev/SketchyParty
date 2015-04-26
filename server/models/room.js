var redis = require('../configs/redis.js');
var uniqueId = require('../utils/unique-id.js');
var _ = require('underscore');
var modelName = 'Rooms';

var Room = function (properties) {
  _.extend(this, properties || {}, this.constructor.prototype);
};

module.exports = {
  create: function (properties) {
    properties = properties || {};
    properties.name = properties.name || uniqueId(modelName);
    redis.set(properties.name, JSON.stringify(properties));
    return new Room(properties);
  },

  find: function (name, callback) {
    redis.get(name, function (err, raw) {
      if (err || !raw) {
        callbac(null);
      } else {
        callback(JSON.parse(raw));
      }
    });
  }
};
