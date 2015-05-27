import {
  push,
  pop,
  unshift,
  shift,
  setKey,
  setAt,
  sort,
  reverse,
  assign,
  removeAt
} from './src/bound';
import expect from 'expect.js';

describe('push', function () {
  it('should push to an empty array', () => {
    const ref = [];
    
    const underTest = ref::push('foo');

    expect(ref).to.eql([]);
    expect(underTest).to.not.be(ref);
    expect(underTest).to.eql(['foo']);
  });

  it('should push to an array with elements in it', () => {
    const ref = ['foo', 'bar'];
    const expected = ['foo', 'bar', 'baz'];
    
    const underTest = ref::push('baz');

    expect(ref).to.eql([ 'foo', 'bar' ]);
    expect(underTest).to.not.be(ref);
    expect(underTest).to.eql(expected);
  });
});

describe('unshift', function () {
  it('should push an element to the head of an empty array', () => {
    const ref = [];
    
    const underTest = ref::unshift('foo');

    expect(ref).to.eql([]);
    expect(underTest).to.not.be(ref);
    expect(underTest).to.eql(['foo']);
  });

  it('should push an element to the head of a non-empty array', () => {
    const ref = ['bar', 'baz'];

    const underTest = ref::unshift('foo');

    expect(ref).to.eql(['bar', 'baz']);
    expect(underTest).to.not.be(ref);
    expect(underTest).to.eql(['foo', 'bar', 'baz']);
  });
});

describe('pop', function () {
  it('popping from an empty array should yield an empty array', () => {
    const ref = [];
    
    const underTest = ref::pop();

    expect(ref).to.eql([]);
    expect(underTest).to.eql([]);
  });

  it('popping from an array of one element should yield an empty array', () => {
    const ref = [ 'foo' ];

    const underTest = ref::pop();

    expect(ref).to.eql([ 'foo' ]);
    expect(underTest).to.eql([]);
  });

  it('popping from an array of two or more elements should remove the last element', () => {
    const ref = [ 'foo', 'bar', 'baz' ];

    const underTest = ref::pop();

    expect(ref).to.eql([ 'foo', 'bar', 'baz' ]);
    expect(underTest).to.eql([ 'foo', 'bar' ]);
  });
});

describe('shift', function () {
  it('shifting from an empty array should yield an empty array', () => {
    const ref = [];

    const underTest = ref::shift();

    expect(ref).to.eql([]);
    expect(underTest).to.eql([]);
  });

  it('shifting from an array of one element should yield an empty array', () => {
    const ref = ['foo'];

    const underTest = ref::shift();

    expect(ref).to.eql(['foo']);
    expect(underTest).to.eql([]);
  });

  it('shifting from an arry of two or more elements should yield one less than the original number of elements', () => {
    const ref = ['foo', 'bar', 'baz'];

    const underTest = ref::shift();

    expect(ref).to.eql([ 'foo', 'bar', 'baz' ]);
    expect(underTest).to.eql([ 'bar', 'baz' ]);
  });
});

describe('setKey', function () {
  it('should return an entirely new object with the specified key set. Should work on an empty object', () => {

    const ref = {};

    const underTest = ref::setKey('foo', 42);

    expect(ref).to.eql({});
    expect(underTest).to.eql({ foo: 42 });

  });

  it('should return an entirely new object with the specified key set. Should work on an object with properties in it', () => {

    const ref = { foo: 42, bar: 24 };

    const underTest = ref::setKey('baz', 12);

    expect(ref).to.eql({ foo: 42, bar: 24 });
    expect(underTest).to.eql({ foo: 42, bar: 24, baz: 12 });

  });

  it('should override an existing property', () => {

    const ref = { foo: 42, bar: 24, baz: 12 };

    const underTest = ref::setKey('baz', 100);

    expect(ref).to.eql({ foo: 42, bar: 24, baz: 12 });
    expect(underTest).to.eql({ foo: 42, bar: 24, baz: 100 })

  });
});

describe('setAt', function () {

  it('should return a non-empty array, when setAt is applied to an empty array, with an index value of 0', () => {

    const ref = [];
    const underTest = ref::setAt(0, 42);

    expect(ref).to.eql([]);
    expect(underTest).to.eql([42]);

  });

  it('should return a non-empty array, when setAt is applied to an empty array, irrespective of the index value', () => {

    const ref = [];
    const underTest = ref::setAt(3, 42);

    expect(ref).to.eql([]);
    expect(underTest).to.eql([,,,42]);

  });

  it('should return an array larger than the original, given an index value equal to the length', () => {

    const ref = [1, 2, 3];
    const underTest = ref::setAt(3, 4);

    expect(ref).to.eql([1, 2, 3]);
    expect(underTest).to.eql([1, 2, 3, 4]);

  });

  it('should return an array larger than the original, given an index value greater than the length', () => {

    const ref = [ 1, 2, 3 ];
    const underTest = ref::setAt(5, 4);

    expect(ref).to.eql([1, 2, 3]);
    expect(underTest).to.eql([1, 2, 3, , , 4]);

  });

  it('should modify the element, at the specified index', () => {

    const ref = ['foo', 'bar', 1, 42, 33];
    const underTest = ref::setAt(2, 'trolololol');

    expect(ref).to.eql(['foo', 'bar', 1, 42, 33]);
    expect(underTest).to.eql(['foo', 'bar', 'trolololol', 42, 33]);

  });

});

describe('sort', function () {

  it('should sort an array with random elements, absent a sorter', () => {

    const ref = [ 8, 3, 5, 1, 4, 6, 2, 7 ];
    const underTest = ref::sort();

    expect(ref).to.eql( [ 8, 3, 5, 1, 4, 6, 2, 7 ] );
    expect(underTest).to.eql([ 1, 2, 3, 4, 5, 6, 7, 8 ]);

  });

  it('should sort an array of random elements, given a sorter', () => {

    const ref = [
      { value: 8 },
      { value: 3 },
      { value: 5 },
      { value: 1 },
      { value: 4 },
      { value: 6 },
      { value: 2 },
      { value: 7 },
    ];
    const underTest = ref::sort((a, b) => a.value - b.value);

    expect(ref).to.eql([
      { value: 8 },
      { value: 3 },
      { value: 5 },
      { value: 1 },
      { value: 4 },
      { value: 6 },
      { value: 2 },
      { value: 7 },
    ]);
    expect(underTest).to.eql([
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 4 },
      { value: 5 },
      { value: 6 },
      { value: 7 },
      { value: 8 },
    ]);

  });

});

describe('reverse', () => {

  it('should yield an entirely new empty array, when calling reverse on an empty array', () => {

    const ref = [];
    const underTest = ref::reverse();

    expect(ref).to.eql([]);
    expect(underTest).to.eql([]);
    expect(ref).to.not.be(underTest);

  });

  it('should yield an array, where it the content is reversed from the original', () => {

    const ref = [1, 2, 3, 4, 5];
    const underTest = ref::reverse();

    expect(ref).to.eql([1, 2, 3, 4, 5]);
    expect(underTest).to.eql([5, 4, 3, 2, 1]);

  });

});

describe('assign', () => {
  it('should copy, key-by-key an object, absent additional parameters', () => {
    const ref = { foo: 'bar', baz: 10 };

    const underTest = ref::assign();

    expect(ref).to.eql({ foo: 'bar', baz: 10 });
    expect(underTest).to.eql({ foo: 'bar', baz: 10 });
    expect(ref).to.not.be(underTest);
  });

  it('should return an object with the properties of the source object assigned to the destination object', () => {
    const ref = { foo: 'bar', baz: 10 };

    const underTest = ref::assign({ zazzle: 'dazzle' });

    expect(ref).to.eql({ foo: 'bar', baz: 10 });
    expect(underTest).to.eql({ foo: 'bar', baz: 10, zazzle: 'dazzle' });
  });
})

describe('removeAt', () => {
  it('should remove the element at the specified index', () => {
    const ref = [1, 2, 3, 4, 5];

    const underTest = ref::removeAt(2);

    expect(ref).to.eql([1, 2, 3, 4, 5]);
    expect(underTest).to.eql([1, 2, 4, 5]);
  });

  it('should not remove anything, given a value that is entirely out of bounds', () => {
    const ref = [1, 2, 3, 4, 5];

    const underTest = ref::removeAt(5);
    const underTest2 = ref::removeAt(10);

    expect(ref).to.eql([1, 2, 3, 4, 5]);
    expect(underTest).to.eql([1, 2, 3, 4, 5]);
    expect(underTest2).to.eql([1, 2, 3, 4, 5]);
  });
});
