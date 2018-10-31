var express = require('express');
var app = express();
var http = require('http').Server(app);
require('dotenv').config();

var port = process.env.PORT || 3000;

app.use(express.static('build'));


http.listen(port, function(){
  console.log('listening on *:'+port);
});