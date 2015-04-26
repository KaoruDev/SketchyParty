module.exports = function (app) {
  require('./templating.js')(app);
  require('./static.js')(app);
};
