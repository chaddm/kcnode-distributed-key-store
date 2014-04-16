module.exports = function(grunt) {
  var build = grunt.option('dev') && 'dev' ||
              grunt.option('build') ||
              'prod';

  return build;
};
