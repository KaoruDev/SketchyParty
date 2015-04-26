var Marionette = require('../../vendor/backbone.js').Marionette;

var Router = Marionette.AppRouter.extend({
  appRoutes: {
    'rooms/:roomName/display': 'display'
  }
});

module.exports = function (app) {
  app.addInitializer(function () {
    new Router({
      controller: require('./controller.js')(app)
    });
  });
};
