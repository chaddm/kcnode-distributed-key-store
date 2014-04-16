express = require('express.io')
app = require('express.io')()

app.get('/', function (req, res) {
  res.send(200, 'Bing!');
});

app.http();
app.io();
app.listen(3000);
