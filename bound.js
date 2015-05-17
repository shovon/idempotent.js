"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.push = push;
exports.unshift = unshift;
exports.pop = pop;
exports.shift = shift;

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

