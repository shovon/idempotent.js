'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.push = push;
exports.unshift = unshift;
exports.pop = pop;
exports.shift = shift;
exports.sort = sort;
exports.reverse = reverse;
exports.removeAt = removeAt;
exports.setKey = setKey;
exports.setAt = setAt;
exports.assign = assign;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); }

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var debug = (0, _debug2['default'])('idempotent');

/**
 * Returns a copy of the `arr` array, with the specified `element` appended to
 * the highest index of the array.
 *
 * @param {Array[Anything]} arr
 * @param {Anything} element
 * @return {Array[Anything]}
 */

function push(arr, element) {
  return arr.concat([element]);
}

/**
 * Returns a copy of the `arr` array, with the specified `element` prepended to
 * the 0th index of the array.
 *
 * @param {Array[Anything]} arr
 * @param {Anything} element
 * @return {Array[Anything]}
 */

function unshift(arr, element) {
  return [element].concat(arr);
}

/**
 * Returns a copy of the `arr` array, with the element at the highest index
 * removed.
 *
 * @param {Array[Anything]} arr
 * @return {Array[Anything]}
 */

function pop(arr) {
  return arr.slice(0, arr.length - 1);
}

/**
 * Returns a copy of the `arr` array, with the element at the 0th index removed.
 *
 * @param {Array[Anything]} arr
 * @return {Array[Anything]}
 */

function shift(arr) {
  return arr.slice(1, arr.length);
}

/**
 * Returns a copy of the `arr` array, with all the elements sorted. Optionally,
 * you can supply a function that
 *
 * @param {Array[Anything]} arr
 * @param {Function : (Anything, Anything) -> Number}
 * @return {Array[Anything]}
 */

function sort(arr, sorter) {
  var copy = arr.slice();
  if (sorter) {
    return copy.sort(sorter);
  }
  return copy.sort();
}

/**
 * Returns a copy of the `arr` array, with all the elements placed in reverse
 * from the original array.
 *
 * @param {Array[Anything]} arr
 * @return {Array[Anything]}
 */

function reverse(arr) {
  return arr.slice().reverse();
}

/**
 * Returns a copy of the `arr` array, with the element at the specified index
 * removed.
 *
 * @param {Array[Anything]} arr
 * @param {Integer} index
 */

function removeAt(arr, index) {
  if (isNaN(index) || index < 0 || index % 1 !== 0) {
    debug('Was given a non-integer value ' + index);
    return arr.slice();
  }
  return arr.slice(0, index).concat(arr.slice(index + 1, arr.length));
}

/**
 * Returns a copy of the `obj` object, with the element associated with the
 * specified `key` replaced with the `value`.
 *
 * @param {Object} obj
 * @param {Anything} key
 * @param {Anything} value
 * @return {Object}
 */

function setKey(obj, key, value) {
  return assign(obj, _defineProperty({}, key, value));
}

/**
 * Returns a copy of the `arr` array, with element at the specified `index`
 * replaced with the `value`.
 *
 * @param {Array[Anything]} arr
 * @param {Number} index
 * @param {Array[Anything]} value
 */

function setAt(arr, index, value) {
  if (arr.length <= index) {
    return arr.concat(Array(index - arr.length)).concat([value]);
  }

  return arr.slice(0, index).concat([value]).concat(arr.slice(index + 1, arr.length));
}

/**
 * Assigns all properties from the source objects, to the specified destination
 * object.
 *
 * @param {Object} destination
 * @param {Object} source in sources
 * @return {Object}
 */

function assign(destination) {
  for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  return _objectAssign2['default'].apply(undefined, [{}, destination].concat(sources));
}

