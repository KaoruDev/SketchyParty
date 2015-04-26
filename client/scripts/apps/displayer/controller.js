var _ = require('underscore');
var Marionette = require('../../vendor/backbone').Marionette;
var Model = require('./model.js');
var View = require('./view.js');

var Controller = Marionette.Controller.extend({
  constructor: function (configs) {
    this.app = configs.app;
    Marionette.Controller.prototype.constructor.apply(this, arguments);
  },

  display: function (roomName) {
    var model = new Model({
      roomName: roomName
    });

    model.connect().done(_.bind(function () {
      this.app.mainRegion.show(
        new View({ model: model })
      );

    }, this));
  }
});

module.exports = function (app) {
  return new Controller({app: app});
};
