var gutils = require('gulp-util');

module.exports = function (msg) {
  console.log('\n=======', gutils.colors.cyan('Express Log'), '=======\n');
  console.log(msg, '\n');
};

