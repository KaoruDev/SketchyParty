var crypto = require('crypto');

module.exports = function (namespace) {
  return namespace + '::' + crypto.randomBytes(48).toString('hex');
};
