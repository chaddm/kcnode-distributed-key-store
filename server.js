var express = require('express.io');
var app = require('express.io')();

app.use(express.static('client'), {
  maxAge: 1000 * 60 * 60 * 24 * 365 * 20
});

app.http();
app.io();
app.listen(3000);
