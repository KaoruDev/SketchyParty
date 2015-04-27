var colors = require('chalk');

module.exports = function (msg) {
  console.log('\n=======', colors.cyan('Express Log'), '=======\n');
  console.log(msg, '\n');
};

