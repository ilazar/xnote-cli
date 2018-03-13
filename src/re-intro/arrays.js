// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// an array is an object

// array literal
const a = [1, 'hello'];
console.assert(typeof a === 'object');
console.assert(Array.isArray(a));

// array constructor
const b = new Array(2);
b[0] = 1;
console.assert(typeof b === 'object');
console.assert(Array.isArray(b));
console.assert(b[1] === undefined);

// length

// accessing elements

// map

// filter

// reduce

// slice

// splice

// some

// find

// findIndex