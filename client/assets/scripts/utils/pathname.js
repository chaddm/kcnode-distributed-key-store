define(['jquerymigrate'], function($) {
  // ## URI of any page helper script.

  function getPathname(url){
    var $anchor = $('<a></a>');
    $anchor.attr('href', url);
    return $anchor.prop('pathname');
  }

  return getPathname;
});
