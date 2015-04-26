var socket;

module.exports = {
  set: function (io) {
    socket = io;
  },

  get: function () {
    return socket;
  }
};
