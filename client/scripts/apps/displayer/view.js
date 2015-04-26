var Marionette = require('../../vendor/backbone.js').Marionette;
var drawer = require('../../lib/drawer.js');

module.exports = Marionette.LayoutView.extend({
  template: require('./templates/canvas.ejs'),
  ui: {
    $canvas: 'canvas#display'
  },

  initialize: function () {
    this.listenTo(this.model, 'drawing', this.drawCoordinates);
  },

  render: function () {
    Marionette.LayoutView.prototype.render.apply(this, arguments);
    this.canvasContext = this.ui.$canvas[0].getContext('2d');
    return this;
  },

  drawCoordinates: function (eventType, coords) {
    drawer[eventType](coords, this.canvasContext);
  }
});

