// var, let, const

var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

// Init var
var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

// letters, numbers, _ (private variables), $ (only with jquery)
// cannot start with a number

// multi-word variables
var firstName = 'John'; // Camel case — suggested for regular vars
var first_name = 'Jane'; // Underscore
var FirstName = 'Sara'; // Pascal case
var firstname;

// LET
let name;
name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

// CONST
const name = 'John';
console.log(name);
// Cannot reassign
name = 'Sara';
// Have to assign a value
const greeting;

const person = {
  name: 'John',
  age: 30,
};

person.name = 'Sara';
person.age = '32';

// console.log(person);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
// numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers);
