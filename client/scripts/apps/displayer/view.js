var Backbone = require('../../vendor/backbone.js');
var DrawingBase = require('../../lib/views/drawing-base.js');

module.exports = DrawingBase.extend({
  template: require('./templates/canvas.ejs'),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    this.$canvas = this.$('canvas');
    this.resize(Backbone.Radio.channel('window').request('currentDimensions'));
    this.canvasContext = this.$canvas[0].getContext('2d');
    return this;
  }
});

