var $ = require('jquery');
var Backbone = require('../../vendor/backbone.js');
var io = require('socket.io-client');

module.exports = Backbone.Model.extend({
  connect: function () {
    var dfd = $.Deferred();
    io(`/${this.get('roomName')}`).on('connect', dfd.resolve);
    return dfd.promise();
  }
});
