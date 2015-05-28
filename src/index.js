import objAssign from 'object-assign';

/**
 * Returns a copy of the `arr` array, with the specified `element` appended to
 * the highest index of the array.
 *
 * @param {Array[Anything]} arr
 * @param {Anything} element
 * @return {Array[Anything]}
 */
export function push(arr, element) { return arr.concat([element]); }

/**
 * Returns a copy of the `arr` array, with the specified `element` prepended to
 * the 0th index of the array.
 *
 * @param {Array[Anything]} arr
 * @param {Anything} element
 * @return {Array[Anything]}
 */
export function unshift(arr, element) { return [element].concat(arr); }

/**
 * Returns a copy of the `arr` array, with the element at the highest index
 * removed.
 *
 * @param {Array[Anything]} arr
 * @return {Array[Anything]}
 */
export function pop(arr) { return arr.slice(0, arr.length - 1); }

/**
 * Returns a copy of the `arr` array, with the element at the 0th index removed.
 *
 * @param {Array[Anything]} arr
 * @return {Array[Anything]}
 */
export function shift(arr) { return arr.slice(1, arr.length); }

/**
 * Returns a copy of the `arr` array, with all the elements sorted. Optionally,
 * you can supply a function that
 *
 * @param {Array[Anything]} arr
 * @param {Function : (Anything, Anything) -> Number}
 * @return {Array[Anything]}
 */
export function sort(arr, sorter) {
  const copy = arr.slice();
  if (sorter) { return copy.sort(sorter)}
  return copy.sort();
}

/**
 * Returns a copy of the `arr` array, with all the elements placed in reverse
 * from the original array.
 *
 * @param {Array[Anything]} arr
 * @return {Array[Anything]}
 */
export function reverse(arr) { return arr.slice().reverse(); }

/**
 * Returns a copy of the `arr` array, with the element at the specified index
 * removed.
 *
 * @param {Array[Anything]} arr
 * @param {Integer} index
 */
export function removeAt(arr, index) {
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
export function setKey(obj, key, value) {
  return assign(obj, { [key]: value });
}

/**
 * Returns a copy of the `arr` array, with element at the specified `index`
 * replaced with the `value`.
 *
 * @param {Array[Anything]} arr
 * @param {Number} index
 * @param {Array[Anything]} value
 */
export function setAt(arr, index, value) {
  if (arr.length <= index) {
    return arr.concat(Array(index - arr.length)).concat([value]);
  }

  return arr
    .slice(0, index)
    .concat([value])
    .concat(
      arr.slice(index + 1, arr.length)
    );
}

/**
 * Assigns all properties from the source objects, to the specified destination
 * object.
 *
 * @param {Object} destination
 * @param {Object} source in sources
 * @return {Object}
 */
export function assign(destination, ...sources) {
  return objAssign({}, destination, ...sources);
}