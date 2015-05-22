'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

/**
 * Returns a copy of the `arr` array, with the specified `element` appended to
 * the highest index of the array.
 *
 * @param {Array[Anything]} arr
 * @param {Anything} element
 * @return {Array[Anything]}
 */
exports.push = push;

/**
 * Returns a copy of the `arr` array, with the specified `element` prepended to
 * the 0th index of the array.
 *
 * @param {Array[Anything]} arr
 * @param {Anything} element
 * @return {Array[Anything]}
 */
exports.unshift = unshift;

/**
 * Returns a copy of the `arr` array, with the element at the highest index
 * removed.
 *
 * @param {Array[Anything]} arr
 * @return {Array[Anything]}
 */
exports.pop = pop;

/**
 * Returns a copy of the `arr` array, with the element at the 0th index removed.
 *
 * @param {Array[Anything]} arr
 * @return {Array[Anything]}
 */
exports.shift = shift;

/**
 * Returns a copy of the `arr` array, with all the elements sorted. Optionally,
 * you can supply a function that
 *
 * @param {Array[Anything]} arr
 * @param {Function : (a, b) -> Number}
 * @return {Array[Anything]}
 */
exports.sort = sort;

/**
 * Returns a copy of the `obj` object, with the element associated with the
 * specified `key` replaced with the `value`.
 *
 * @param {Object} obj
 * @param {Anything} key
 * @param {Anything} value
 * @return {Object}
 */
exports.setKey = setKey;

/**
 * Returns a copy of the `arr` array, with element at the specified `index`
 * replaced with the `value`.
 *
 * @param {Array[Anything]} arr
 * @param {Number} index
 * @param {Array[Anything]} value
 */
exports.setAt = setAt;

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

function sort(arr, sorter) {
  var copy = arr.slice();
  if (sorter) {
    return copy.sort(sorter);
  }
  return copy.sort();
}

function setKey(obj, key, value) {
  return (0, _objectAssign2['default'])({}, obj, _defineProperty({}, key, value));
}

function setAt(arr, index, value) {
  var left = arr.slice(0, index);
  if (arr.length <= index) {
    return arr.concat(Array(index - arr.length)).concat([value]);
  }

  return arr.slice(0, index).concat([value]).concat(arr.slice(index + 1, arr.length));
}

