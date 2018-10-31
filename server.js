require('dotenv').config()
var express = require('express');
var http = require('http');

const app = express();
const server = http.Server(app);
const port = process.env.PORT || 3000;

server.listen(port, function(){
  console.log('[INFO] Listening on *:' + port);
});