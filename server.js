var express = require('express');
var http = require('http');
require('dotenv').config();

var app = express();
var server = http.Server(app);
var port = process.env.PORT || 3000;

server.use(express.static('build'));

server.listen(port, function(){
  console.log('[INFO] Listening on *:' + port);
});