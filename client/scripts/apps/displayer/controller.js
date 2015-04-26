var _ = require('underscore');
var Marionette = require('../../vendor/backbone').Marionette;
var Model = require('./model.js');
var View = require('./view.js');

var Controller = Marionette.Controller.extend({
  constructor: function (configs) {
    this.app = configs.app;
    Marionette.Controller.prototype.constructor.apply(this, arguments);
  },

  display: function () {
    var model = new Model();
    var view = new View({
      model: model
    });

    model.connect().done(_.bind(function () {
      this.app.mainRegion.show(view);
    }, this));
  }
});

module.exports = function (app) {
  return new Controller({app: app});
};
