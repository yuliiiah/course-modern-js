let val;

// TYPE CONVERSION

// Number to string
val = 5;
val = String(5);
val = String(4 + 4);

// Boolean to string
val = true;
val = String(val);

// Date to string
val = new Date();
val = String(val);

// Array to string
val = [1, 2, 3, 4];
val = String(val);

// toString()
val = (5).toString();
val = true.toString();

// String to number
val = '5';
val = Number('5');

// Boolean to number
val = true;
val = Number(val);
val = false;
val = Number(val);

// Null to number
val = null;
val = Number(val);

// Word string to number
val = 'Hello';
val = Number(val); // — NaN, not a number

// parseInt();
val = parseInt('100');

// parseFloat();
val = parseFloat('100.30');

// Output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed());

// TYPE COERCION
const val1 = '5';
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);
