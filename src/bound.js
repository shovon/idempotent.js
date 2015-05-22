const nonBound = require('./');

Object.keys(nonBound).forEach(function (key) {
  module.exports[key] = function (...params) {
    const result = nonBound[key].call(nonBound, this, ...params);
    return result;
  }
});
