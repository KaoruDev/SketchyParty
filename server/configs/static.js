var express = require('express');

module.exports = function (app) {
  // Path is not relative to this file, but rather where the server gets started
  app.use('/assets', express.static('client/build'));
};
