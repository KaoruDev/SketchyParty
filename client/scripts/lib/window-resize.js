var $ = require('jquery');
var Backbone = require('../vendor/backbone.js');

var WindowResizer = function () {
  var $window = $(window);
  var resizeChannel = Backbone.Radio.channel('window');

  $window.on('resize', function () {
    var data = {
      height: $window.height(),
      width: $window.width()
    };
    resizeChannel.command('resize', data);
  });

  resizeChannel.reply('currentDimensions', function () {
    return {
      height: $window.height(),
      width: $window.width()
    };
  });
};

module.exports = function (app) {
  app.addInitializer(function () {
    new WindowResizer();
  });
};
