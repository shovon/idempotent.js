# Idempotent Operations for JavaScript Arrays and Objects

By default, `Array.prototype`'s `push`, `pop`, `shift`, and `unshift` modify an array, which make for code that is very difficult to reason about. However, sometimes, you may want to perform an operation similar to `push`, `pop`, `shift`, or `unshift`. That is, you supply the original array, and derive a new one with the aforementioned operation applied, without ever modifying the original one. To put it more succinctly, you want to apply a `push`, `pop`, `shift`, or `unshift` operation that is idempotent. Unfortunately, with what JavaScript offers, for just those four operations, there are a lot of boilerplate involved.

`idempotent.js` gives you the `push`, `pop`, `shift`, and `unshift` functions so that you can use an idempotent equivalent of those operations.

It also provides a `setKey` helper function to return an object with a supplied property name set.

## Getting Started

Install `idempotent` using npm.

```shell
npm install idempotent
```

Then, import the modules.

```javascript
var idempotent = require('idempotent');

var push = idempotent.push;
var pop = idempotent.pop;
var shift = idempotent.shift;
var unshift = idempotent.unshift;

var arr1 = [];

var arr2 = push(arr1, 1);
var arr3 = push(arr2, 2);

arr1; // []
arr2; // [ 1 ]
arr3; // [ 1, 2 ]
```

## With ECMAScript 6 and 7

It becomes even more concise with ECMAScript 6's import syntax.

```javascript
import { push, pop, shift, unshift } from 'idempotent';

var arr1 = [];

var arr2 = push(arr1, 1);
var arr3 = push(arr2, 2);

arr1; // []
arr2; // [ 1 ]
arr3; // [ 1, 2 ]
```

### With ECMAScript 7's `::` (bind) operator

It becomes even more concise with a [proposed bind operator](https://github.com/zenparsing/es-function-bind) for ECMAScript 7. You can already use it, today, with [Babel 5.4](http://babeljs.io/blog/2015/05/14/function-bind/). Just be sure to enable stage 0 experimental features.

If you want to experiment ES 7 bind, create a `script.js` file, and paste in the following code:

```javascript
import { push, pop, shift, unshift } from 'idempotent/bound';

var arr1 = [];

var arr2 = arr1::push(1);
var arr3 = arr2::push(2);

console.log( arr1 ); // []
console.log( arr2 ); // [ 1 ]
console.log( arr3 ); // [ 1, 2 ]
```

Then, assuming you have `idempotent` installed from npm, run:

```
babel-node --stage 0 scripts.js
```

### Chaining with ECMAScript 7's `::` operator

The the new bind syntax now allow for chaining. So, instead of creating a new variable, or wrapping a push call with yet another push call, you would simply do:

```javascript
var arr = anotherArr::pop()::unshift()::push(3)
```

## License

`idempotent` is [MIT-Licensed](https://github.com/shovon/idempotent.js/blob/master/LICENSE).