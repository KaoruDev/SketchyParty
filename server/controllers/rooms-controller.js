var Room = require('../models/room.js');

module.exports = {
  show: function (req, res) {
    Room.find(req.params.id, function (room) {
      res.render('rooms/show.ejs', { roomName: room.name });
    });
  },

  create: function (req, res) {
    var room = Room.create(req.body.room);
    res.render('rooms/show.ejs', { roomName: room.name });
  }
};
