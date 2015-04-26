require('harmonize');
var app = require('express')();
require('./server/configs/templating.js')(app);
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
  res.send('hello world');
});

io.on('connection', function () {
  console.log('a user connected');
});

var server = app.listen(5000, function () {
  var port = server.address().port;

  console.log(`Sketch Party ready to party at port: ${port}`);
});

