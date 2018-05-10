'use strict';

/**
 * Returns an object with the parameters of the URL.
 *
 * @param {string} url [https://www.site.com/?customer=Maxim&goods=game].
 *
 * @return {object} url params.
 *
 * @example
 * var tinyUrlParams = require('tinyUrlParams')
 *
 * @name tinyUrlParams
 */

module.exports = function(url) {
  var regexp = url.match(/([^?=&]+)(=([^&]*))/g);
  if (!regexp || !url.match(/\?/g)) {
    return null;
  }
  return regexp.reduce(function(a, v) {
    return (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a);
  }, {});
};
