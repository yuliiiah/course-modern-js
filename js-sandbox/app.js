let re;
re = /hello/; // i = case insensitive
re = /hello/i; // i = case insensitive
// re = /hello/g; // g = global search

// console.log(re);
// console.log(re.source);

// exec() - Return results in an array or null
// const result = re.exec('hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - Return true or false
// const result = re.test('Hello');

// match() - Return result array or null
// const str = 'Hello There';
// const result = str.match(re);

// search() - Return index of the first match, if not found returns -1
// const str = 'Yo Hello There';
// const result = str.search(str);

// replace() - Return a new string with some or all matches of a pattern
const str = 'Hello There';
const newStr = str.replace(re, 'Hi');

console.log(newStr);
