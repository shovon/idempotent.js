'use strict';

var nonBound = require('./');

Object.keys(nonBound).forEach(function (key) {
  module.exports[key] = function () {
    var _nonBound$key;

    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }

    var result = (_nonBound$key = nonBound[key]).call.apply(_nonBound$key, [nonBound, this].concat(params));
    return result;
  };
});

