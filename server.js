var express = require('express.io');
var app = require('express.io')();

app.use(express.static('client'), {
  maxAge: 1000 * 60 * 60 * 24 * 365 * 20
});

app.io.route('share', function (req) {
  req.io.broadcast('update', {
    message: req.data
  });
});

app.http();
app.io();
app.listen(3000);
