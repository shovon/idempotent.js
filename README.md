# Idempotent Operations for JavaScript Arrays and Objects

By default, most operations in JavaScript modify the internals of a specific value (object). Be it by calling `sort`, `push`/`pop`/`shift`/`unshift`, `reverse`, a custom method that modifies internals, or `obj.property = 'foo`; they all modify the internal value. And modifying values make for code that is very difficult to reason about. However, sometimes, it may be necessary to perform similar operations. But, instead of actually executing those operations, a better alternative is to perform idempotent operations that don't modify the internals of the original value. The the modification of those values are then returned as an entirely new object.

You can do so with `Array.prototype.slice` or `Object.assign`. But using `Array.prototype.slice` and `Object.assign` results in more verbose code, making it harder to read.

And this is where `idempotent` comes in. `idempotent` provides a non-destructive analog of the aforementioned operations.

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

### With ECMAScript 6 and 7

It becomes concise with ECMAScript 6's import syntax.

```javascript
import { push, pop, shift, unshift } from 'idempotent';

const arr1 = [];

const arr2 = push(arr1, 1);
const arr3 = push(arr2, 2);

arr1; // []
arr2; // [ 1 ]
arr3; // [ 1, 2 ]
```

#### With ECMAScript 7's `::` (bind) operator

It becomes even more concise with a [proposed bind operator](https://github.com/zenparsing/es-function-bind) for ECMAScript 7. You can already use it, today, with [Babel 5.4](http://babeljs.io/blog/2015/05/14/function-bind/). Just be sure to enable stage 0 experimental features.

If you want to experiment with ES 7 bind, create a `script.js` file, and paste in the following code:

```javascript
import { push, pop, shift, unshift } from 'idempotent/bound';

const arr1 = [];

const arr2 = arr1::push(1);
const arr3 = arr2::push(2);

console.log( arr1 ); // []
console.log( arr2 ); // [ 1 ]
console.log( arr3 ); // [ 1, 2 ]
```

Then, assuming you have `idempotent` installed from npm, run:

```
babel-node --stage 0 scripts.js
```

#### Chaining with ECMAScript 7's `::` operator

The the new bind syntax now allow for chaining. So, instead of creating a new variable, or wrapping a push call with yet another push call, you would simply do:

```javascript
const arr = anotherArr::pop()::unshift()::push(3)
```

## Documentation

The source code is annotated in a JavaDoc syntax. You can read it at [`blob/master/src/index.js`](https://github.com/shovon/idempotent.js/blob/master/src/index.js);

## License

`idempotent` is [MIT-Licensed](https://github.com/shovon/idempotent.js/blob/master/LICENSE).