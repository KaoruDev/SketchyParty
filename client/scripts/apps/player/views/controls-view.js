var Marionette = require('../../../vendor/backbone.js').Marionette;
var DrawingView = require('./drawing-view.js');

module.exports = Marionette.ItemView.extend({
  initialize: function () {
  },

  render: function () {
    this.removeSubView();

    //if (this.model.get('drawer')) {
      this.subView = new DrawingView({
        model: this.model
      });
    //}

    this.$el.html(this.subView.render().el);
  },

  removeSubView: function () {
    if (this.subView) {
      this.subView.remove();
    }

    delete this.subView;
  },

  remove: function () {
    this.removeSubView();
    Marionette.ItemView.prototype.remove.apply(this, arguments);
  }

});

