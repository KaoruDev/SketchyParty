var $ = require('jquery');
var drawer = require('./drawer.js');

var $canvas = $('canvas#drawer');
var ctx = $canvas[0].getContext('2d');

var getCoordinates = function (e) {
  return {
    x: e.pageX - this.offsetLeft,
    y: e.pageY - this.offsetTop
  };
};

$canvas.on('mousedown', function () {
  drawer.dragstart(getCoordinates.apply(this, arguments), ctx);
});

$canvas.on('mousemove', function () {
  drawer.drag(getCoordinates.apply(this, arguments), ctx);
});

$canvas.on('mouseleave mouseup', function () {
  drawer.dragend(getCoordinates.apply(this, arguments), ctx);
});

