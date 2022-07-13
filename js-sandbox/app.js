let re;

// Literal characters
re = /hello/;
re = /hello/i;

// Metacharacter symbols
re = /^h/i; // Must start with
re = / world$/i; // Must end with
re = /^hello$/i; // Must begin and end with
re = /h.llo/i; // Matches any ONE character
re = /h*llo/i; // Matches character 0 or more times
re = /gre?a?y/i; // Optional character
re = /gre?a?y\?/i; // Escape character

// String to match
const string = 'Gray?';
// Log results
const result = re.exec(string);
console.log(result);

function reTest(re, string) {
  if (re.test(string)) {
    console.log(`The string matches ${re.source} `);
  } else {
    console.log(`The string does not match ${re.source} `);
  }
}

reTest(re, string);
