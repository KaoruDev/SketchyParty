var Room = require('../models/room.js');

module.exports = {
  join: function (req, res) {
    Room.find(req.params.id, function (room) {
      res.render('rooms/join.ejs', { roomName: room.name });
    });
  },

  create: function (req, res) {
    var room = Room.create(req.body.room);
    res.redirect('rooms/' + room.name + '/display');
  },

  display: function (req, res) {
    Room.find(req.params.id, function (room) {
      res.render('rooms/display.ejs', { roomName: room.name });
    });
  }
};
