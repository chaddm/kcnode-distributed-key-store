module.exports = function(grunt) {
  var path = require('path');
  var paths = {};

  // absolute path to project directory
  paths.project = process.cwd();
  // ---
  // relative paths from project directory

  // where resources live
  paths.htdocs  = 'client';
  // input
  paths.src     = 'client-src';
  // output
  paths.dest    = path.join(paths.htdocs, 'assets');
  // temporary build directory
  paths.build   = 'client-build';

  paths.baseUrl = '/';

  return paths;
};
