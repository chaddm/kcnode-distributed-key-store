define([
  'jquerymigrate', 'modernizr-test', 'utils/safeLog'
  ], function($, Modernizr, safeLog) {
  var app = window.app = window.app || {};

  app.$window = $(window);
  app.$body   = $('body');

  app.pathname = window.location.pathname;

  var socket = io.connect('http://localhost');

  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });

  return app;
});
