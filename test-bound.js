import { push, pop, unshift, shift, setKey } from './src/bound'
import expect from 'expect.js';

// TODO: dump this. All bound functions should be equivalent to the original.

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