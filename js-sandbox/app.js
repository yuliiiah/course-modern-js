const user = { email: 'jdoe@gmail.com' };

try {
  // Produce a ReferenceError
  // myFunction();
  // Produce a TypeError
  // null.myFunction();
  // Produce a SyntaxError
  // console.log(eval('Hello World'));
  // Produce a URIError
  // decodeURIComponent('%');

  if (!user.name) {
    // throw 'User has no name';
    throw new SyntaxError('User has no name');
  }
} catch (error) {
  console.log(`User Error: ${error.message}`);
  // console.log(error);
  // console.log(error.message);
  // console.log(error.name);
  // console.log(error.name);
  // console.log(error instanceof ReferenceError);
} finally {
  console.log('Finally runs regardless of the result...');
}

console.log('Program continues...');
