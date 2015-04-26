var roomsController = require('../controllers/rooms-controller.js');

module.exports = function (app) {
  app.get('/rooms/:id', roomsController.show);
};
