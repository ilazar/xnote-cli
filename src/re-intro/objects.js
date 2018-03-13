// an object - collection of name-value pairs

// see Object - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

// empty object created using Object constructor
const a = new Object();

// empty object created using object literal
const b = {};

// object initialization using object literals
const note = { // note is a reference to an object
  text: 'learn js', // property
  done: false,
  'status': 'active'
};

// attribute access
console.assert(note.done === false); // dot notation
console.assert(note['done'] === false); // bracket notation

// changing property value
note.done = true;
console.assert(note.done);

// adding a new property
note.id = '1';
console.assert(note.id === '1');

// deleting a property
delete note.id;
console.assert(note.id === undefined);

// copying objects

// destructuring

