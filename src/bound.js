export function push(element) {
  return this.concat([element]);
}

export function unshift(element) {
  return [element].concat(this);
}

export function pop() {
  return this.slice(0, this.length - 1);
}

export function shift() {
  return this.slice(1, this.length);
}
