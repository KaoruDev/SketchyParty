var Backbone = require('../../../vendor/backbone.js');
var drawer = require('../../../lib/drawer.js');

var getCoordinates = function (e) {
  return {
    x: e.pageX - this.offsetLeft,
    y: e.pageY - this.offsetTop
  };
};

var mouseEventMap = {
  mousedown: 'dragstart',
  mousemove: 'drag',
  mouseleave: 'dragend',
  mouseup: 'dragend'
};

var translateEvent = function (e) {
  return mouseEventMap[e.type];
};

module.exports = Backbone.View.extend({
  template: require('../templates/canvas.ejs'),
  initialize: function () {
    this.listenTo(this.model, 'drawing', this.drawCoordinates);
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    this.$canvas = this.$('canvas#drawer');
    this.attachCanvasListeners();
    this.canvasContext = this.$canvas[0].getContext('2d');
    return this;
  },

  attachCanvasListeners: function () {
    var drawingView = this;
    this.$canvas.on('mousedown mousemove mouseleave mouseup', function (e) {
      drawingView.model.emitSocket({
        eventType: translateEvent(e),
        coordinates: getCoordinates.apply(this, arguments)
      });
    });
  },

  drawCoordinates: function (eventType, coords) {
    drawer[eventType](coords, this.canvasContext);
  }

});

