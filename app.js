require('harmonize');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
require('./server/socket/main.js').set(io);
require('./server/configs/setup.js')(app);
var announce = require('./server/utils/announce-log.js');

var server = http.listen(5000, function () {
  var port = server.address().port;
  announce(`Sketch Party ready to party at port: ${port}`);
});

