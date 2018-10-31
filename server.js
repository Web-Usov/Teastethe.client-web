var express = require('express');
var http = require('http');
require('dotenv').config();

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('build'));


var server = http.Server(app);

server.listen(port, function(){
  console.log('[INFO] Listening on *:' + port);
});