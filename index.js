"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.push = push;
exports.unshift = unshift;
exports.pop = pop;
exports.shift = shift;

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

