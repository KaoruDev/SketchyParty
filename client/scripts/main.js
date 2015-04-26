var Backbone = require('./vendor/backbone.js');
var app = new Backbone.Marionette.Application({
  regions: {
    mainRegion: '#main-container'
  }
});

require('./apps/displayer/router.js')(app);

app.on('start', function () {
  Backbone.history.start({
    pushState: true,
    root: '/'
  });
});

app.start();

