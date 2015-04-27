var Backbone = require('../../vendor/backbone.js');
var drawer = require('../drawer.js');

var getCoordinates = function (e) {
  var pageX = e.pageX || e.originalEvent.targetTouches[0].pageX;
  var pageY = e.pageY || e.originalEvent.targetTouches[0].pageY;
  return {
    x: pageX - this.offsetLeft,
    y: pageY - this.offsetTop
  };
};

var mouseEventMap = {
  mousedown: 'dragstart',
  mousemove: 'drag',
  mouseleave: 'dragend',
  mouseup: 'dragend',
  touchstart: 'dragstart',
  touchmove: 'drag',
  touchstop: 'dragend'
};

var canvasEvents = 'mousedown mousemove mouseleave mouseup touchstart touchmove touchstop';

var translateEvent = function (e) {
  return mouseEventMap[e.type];
};

module.exports = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, 'drawing', this.drawCoordinates);
    Backbone.Radio.channel('window').comply('resize', this.resize, this);
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    this.$canvas = this.$('canvas');
    this.resize(Backbone.Radio.channel('window').request('currentDimensions'));
    this.canvasContext = this.$canvas[0].getContext('2d');
    this.attachCanvasListeners();
    return this;
  },

  drawCoordinates: function (data) {
    drawer[data.eventType](this.calculateCoordinatesWithScale(data), this.canvasContext);
  },

  calculateCoordinatesWithScale: function (data) {
    var otherDimensions = data.myDimensions;
    var canvas = this.$canvas[0];
    var scales = {};

    if (otherDimensions.width > canvas.width) {
      scales.width = otherDimensions.width / canvas.width;
      scales.height = otherDimensions.height / canvas.height;
    } else {
      scales.width = canvas.width / otherDimensions.width;
      scales.height = canvas.height / otherDimensions.height;
    }

    return {
      x: data.coordinates.x * scales.width,
      y: data.coordinates.y * scales.height
    };
  },

  attachCanvasListeners: function () {
    var drawingView = this;
    this.$canvas.off(canvasEvents);
    this.$canvas.on(canvasEvents, function (e) {
      drawingView.model.emitSocket({
        eventType: translateEvent(e),
        coordinates: getCoordinates.apply(this, arguments),
        myDimensions: {
          height: this.height,
          width: this.width
        }
      });
    });
  },

  resize: function (windowDimensions) {
    if (this.$canvas) {
      var point;
      if (windowDimensions.width > windowDimensions.height) {
        point = windowDimensions.height - 100;
      } else {
        point = windowDimensions.width - 40;
      }

      this.$canvas[0].height = point;
      this.$canvas[0].width = point;
    }
  }
});

