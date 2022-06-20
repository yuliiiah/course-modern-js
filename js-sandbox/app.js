// Function declarations
function greet(firstName = 'John', lastName = 'Doe') {
  // if (typeof firstName === 'undefined') {
  //   firstName = 'John';
  // }
  // if (typeof lastName === 'undefined') {
  //   lastName = 'Doe';
  // }
  // console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}

// console.log(greet());

// Function expressions
const square = function (x = 3) {
  return x * x;
};

// console.log(square());

// Immediately invocable function expressions == IIDEs
// (function () {
//   console.log('IIFE ran...');
// })();

// (function (name) {
//   console.log('Hello ' + name);
// })('Brad');

// Property methods
const todo = {
  add: function () {
    console.log('Add todo...');
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  },
};

todo.delete = function () {
  console.log('Delete todo');
};

todo.add();
todo.edit(22);
todo.delete();
