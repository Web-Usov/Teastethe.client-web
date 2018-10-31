const app = require('express').express();
const http = require('http');

const server = http.Server(app);
const port = process.env.PORT || 3000;

server.listen(port, function(){
  console.log('[INFO] Listening on *:' + port);
});