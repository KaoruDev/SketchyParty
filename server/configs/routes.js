var roomsController = require('../controllers/rooms-controller.js');
var homeController = require('../controllers/home-controller.js');

module.exports = function (app) {
  app.get('/rooms/:id', roomsController.show);
  app.post('/rooms', roomsController.create);
  app.get('/', homeController.index);
};
