/* global define */
;(function($, window, undefined) {

  // declare app to be global variable
  var app = window.app = window.app || {};

  // Detect which build mode we're in.
  app.builds = {};
  app.builds.isDev = ( window.build && window.build === 'dev' );

  app.builds.isProd = !window.build || ( window.build && window.build === 'prod' );

  // Set up requirejs.
  app.requirejs = {};

  // prod build paths.
  app.requirejs.paths = {
    // 3rd Party APIs
    youtube: '//www.youtube.com/iframe_api?noext',
    // jQuery fallbacks
    jquery: 'vendor/jquery.min',
    jquerymigrate: 'vendor/jquery-migrate.min',
  };

  if ( app.builds.isDev ) {
    // dev build paths.
    app.requirejs.paths = {
      youtube: '//www.youtube.com/iframe_api?noext',
      components: '../../bower_components',
      es5: "vendor/es5-shim",
      json3: "vendor/json3",
      q: 'vendor/q',
      underscore: "vendor/lodash.underscore",
      'underscore.string': "vendor/underscore.string",
      jquery: 'vendor/jquery',
      jquerymigrate: 'vendor/jquery-migrate',
      "jquery.transit" : 'vendor/jquery.transit',
      backbone: 'vendor/backbone',
      jade: 'vendor/jade'
    };
  }

  var appBase = window.appBase || '/sog/';
  app.requirejs.baseUrl = appBase+'_assets/scripts/';


  // Shim non-AMD libraries.
  app.requirejs.shim = {
    youtube: {
      exports: 'YT'
    },
    jquerymigrate: {
      deps: ['jquery'],
      exports: 'jQuery'
    },
    "jquery.transit": {
      deps: ['jquerymigrate'],
      exports: 'jQuery'
    },
    screenfull: {
      exports: 'screenfull'
    }
  };

  // Set enforceDefine to true
  // http://requirejs.org/docs/api.html#ieloadfail
  app.requirejs.enforceDefine = true;

  require.config(app.requirejs);

  // stub in preloaded libraries
  // jQuery
  if ( window.jQuery ) {

    define('jquery', [], function () {
      return window.jQuery;
    });

    // jQuery Migrate
    if ( window.jQuery.migrateWarnings ) {
      define('jquerymigrate', ['jquery'], function() {
        return window.jQuery;
      });
    }
  }

  // Modernizr
  if ( window.Modernizr ) {
    define('modernizr', [], function() {
      return window.Modernizr;
    });
  }

  // Yepnope
  if ( window.yepnope ) {
    define('yepnope', [], function() {
      return window.yepnope;
    });
  }


  define(['jquery', 'app', 'utils/safeLog'], function($, app, safeLog) {
    safeLog('Hello World', $('body'), app);
  });

})(this.jQuery, this);
