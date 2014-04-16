define(['modernizr'], function(Modernizr) {
  // iOS detection https://gist.github.com/danott/855078
  /* modernizr-test.js
   * Daniel Ott
   * 3 March 2011
   * Custom Tests using Modernizr's addTest API
   */
   
  /* iOS
   * There may be times when we need a quick way to reference whether iOS is in play or not.
   * While a primative means, will be helpful for that.
   */
  Modernizr.addTest('ipad', function () {
    return !!navigator.userAgent.match(/iPad/i);
  });
   
  Modernizr.addTest('iphone', function () {
    return !!navigator.userAgent.match(/iPhone/i);
  });
   
  Modernizr.addTest('ipod', function () {
    return !!navigator.userAgent.match(/iPod/i);
  });
   
  Modernizr.addTest('appleios', function () {
    return (Modernizr.ipad || Modernizr.ipod || Modernizr.iphone);
  });
  /* end modernizr-test.js */

  return Modernizr;
});
