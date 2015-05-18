'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.push = push;
exports.unshift = unshift;
exports.pop = pop;
exports.shift = shift;
exports.setKey = setKey;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); }

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function push(arr, element) {
  return arr.concat([element]);
}

function unshift(arr, element) {
  return [element].concat(arr);
}

function pop(arr) {
  return arr.slice(0, arr.length - 1);
}

function shift(arr) {
  return arr.slice(1, arr.length);
}

function setKey(obj, key, value) {
  return (0, _objectAssign2['default'])({}, obj, _defineProperty({}, key, value));
}

