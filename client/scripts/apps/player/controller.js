var _ = require('underscore');
var Marionette = require('../../vendor/backbone').Marionette;
var InfoModel = require('./models/info-model.js');
var ControlsView = require('./views/controls-view.js');

var Controller = Marionette.Controller.extend({
  constructor: function (configs) {
    this.app = configs.app;
    Marionette.Controller.prototype.constructor.apply(this, arguments);
  },

  join: function (roomName) {
    var model = new InfoModel({
      roomName: roomName
    });

    model.connect().done(_.bind(function () {
      this.app.mainRegion.show(
        new ControlsView({ model: model })
      );

    }, this));
  }
});

module.exports = function (app) {
  return new Controller({app: app});
};
