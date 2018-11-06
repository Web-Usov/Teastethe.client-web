var express = require('express');
var app = express();
var server = require('http').Server(app);
require('dotenv').config();

var port = process.env.PORT || 8080;

app.use(express.static('build'));


server.listen(port, function(){
  console.log('listening on *:'+port);
});