// const sayHello = function () {
//   console.log('Hello');
// };

// const sayHello = () => {
//   console.log('Hello');
// };

// One-line function doesn't need braces
// const sayHello = () => console.log('HELLO');

// One-line returns
// const sayHello = () => 'Hello';

// Return object
// const sayHello = () => ({ msg: 'Hello' });

// Single param doesn't need parenthesis (but Prettier thinks otherwise)
// const sayHello = (name) => console.log(`Hello, ${name}`);

// Multiple params need parenthesis
// const sayHello = (firstName, lastName) =>
//   console.log(`Hello, ${firstName} ${lastName}`);

// console.log(sayHello());
// sayHello('Yuliia', 'Horbenko');

const users = ['Nathan', 'John', 'Will'];

// const nameLengths = users.map(function (name) {
//   return name.length;
// });

// Shorter
// const nameLengths = users.map((name) => {
//   return name.length;
// });

// Shortest
const nameLengths = users.map((name) => name.length);

console.log(nameLengths);
