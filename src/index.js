import assign from 'object-assign';

export function push(arr, element) {
  return arr.concat([element]);
}

export function unshift(arr, element) {
  return [element].concat(arr);
}

export function pop(arr) {
  return arr.slice(0, arr.length - 1);
}

export function shift(arr) {
  return arr.slice(1, arr.length);
}

export function sort(arr, sorter) {
  const copy = arr.slice();
  if (sorter) { return copy.sort(sorter)}
  return copy.sort();
}

export function setKey(obj, key, value) {
  return assign({}, obj, {
    [key]: value
  });
}
