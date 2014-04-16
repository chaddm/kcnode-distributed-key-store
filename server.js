var express = require('express.io');
var app = require('express.io')();

app.use(express.static('client'), {
  maxAge: 1000 * 60 * 60 * 24 * 365 * 20
});


app.http();
app.io();

app.io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

app.listen(3000);
