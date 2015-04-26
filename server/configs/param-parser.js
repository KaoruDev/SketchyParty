var bodyParser = require('body-parser');

module.exports = function (app) {
  // support json-encoded bodies
  app.use(bodyParser.json());

  // to support URL-encoded bodies
  app.use(bodyParser.urlencoded({
    extended: true
  }));

};

