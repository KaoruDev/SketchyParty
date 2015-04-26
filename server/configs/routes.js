var roomsController = require('../controllers/rooms-controller.js');
var homeController = require('../controllers/home-controller.js');

module.exports = function (app) {
  app.get('/rooms/:id/display', roomsController.display);
  app.get('/rooms/:id', roomsController.join);
  app.post('/rooms', roomsController.create);
  app.get('/', homeController.index);
};
