var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);
var	port = 3000;

var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  	res.sendFile(__dirname + '/public/templates/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });

  socket.on('escribiendo', function(msg){
    io.emit('escribiendo', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});