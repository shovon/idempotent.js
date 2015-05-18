'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

// TODO: Use the original functions.

exports.push = push;
exports.unshift = unshift;
exports.pop = pop;
exports.shift = shift;
exports.setKey = setKey;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); }

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function push(element) {
  return this.concat([element]);
}

function unshift(element) {
  return [element].concat(this);
}

function pop() {
  return this.slice(0, this.length - 1);
}

function shift() {
  return this.slice(1, this.length);
}

function setKey(key, value) {
  return (0, _objectAssign2['default'])({}, this, _defineProperty({}, key, value));
}

