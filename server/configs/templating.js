var path = require('path');
var viewPath = path.join(__dirname, '../../client/views/');
var engine = require('ejs-mate');

module.exports = function (app) {
  app.engine('ejs', engine);
  app.set('views', viewPath);
  app.set('view engine', 'ejs');
};
