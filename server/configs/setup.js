module.exports = function (app) {
  require('./templating.js')(app);
  require('./static.js')(app);
  require('./param-parser.js')(app);
  require('./routes.js')(app);
};
