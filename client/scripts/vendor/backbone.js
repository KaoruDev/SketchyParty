var $ = require('jquery');
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var _ = require('underscore');
var Radio = require('backbone.radio');

Backbone.Marionette = require('backbone.marionette');
Backbone.Marionette.Application.prototype._initChannel = function () {
  this.channelName = _.result(this, 'channelName') || 'global';
  this.channel = _.result(this, 'channel') || Radio.channel(this.channelName);
};

module.exports = Backbone;
