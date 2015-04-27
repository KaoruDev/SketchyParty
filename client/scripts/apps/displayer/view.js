var DrawingBase = require('../../lib/views/drawing-base.js');

module.exports = DrawingBase.extend({
  template: require('./templates/canvas.ejs'),

  initialize: function () {
    this.listenTo(this.model, 'drawing', this.drawCoordinates);
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    this.$canvas = this.$('canvas');
    this.canvasContext = this.$canvas[0].getContext('2d');
    return this;
  }
});

